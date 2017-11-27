package unigranrio.desafiomobile.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import unigranrio.desafiomobile.model.Task;
import unigranrio.desafiomobile.repository.TaskRepository;

@RestController
@RequestMapping("/api")
public class TaskController {

	@Autowired
	TaskRepository taskRepository;

	@GetMapping("/tasks")
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	@PostMapping("/tasks")
	public Task createTask(@Valid @RequestBody Task task) {
		return taskRepository.save(task);
	}

	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable(value = "id") Long taskId) {
		Task task = taskRepository.findOne(taskId);

		if (task == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(task);
	}

	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<Task> deleteTask(@PathVariable(value = "id") Long taskId) {
		Task task = taskRepository.findOne(taskId);

		if (task == null) {
			return ResponseEntity.notFound().build();
		}
		
		taskRepository.delete(task);
		return ResponseEntity.ok().body(task);

	}

}
