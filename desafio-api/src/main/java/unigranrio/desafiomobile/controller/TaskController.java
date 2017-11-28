package unigranrio.desafiomobile.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import unigranrio.desafiomobile.model.Task;
import unigranrio.desafiomobile.repository.TaskRepository;

@RestController
@RequestMapping("/v1")
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	private Task task;

	@GetMapping("/task-list")
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	@GetMapping("/task-list/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable(value = "id") Long taskId) {
		task = taskRepository.findOne(taskId);

		if (task == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(task);
	}

	@PostMapping("/task-list")
	public Task createTask(@Valid @RequestBody Task task) {
		return taskRepository.save(task);
	}

	@DeleteMapping("/task-list/{id}")
	public ResponseEntity<Task> deleteTask(@PathVariable(value = "id") Long taskId) {
		task = taskRepository.findOne(taskId);

		if (task == null) {
			return ResponseEntity.notFound().build();
		}

		taskRepository.delete(task);
		return ResponseEntity.ok().body(task);

	}

}
