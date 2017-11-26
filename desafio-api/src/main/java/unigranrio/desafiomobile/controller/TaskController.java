package unigranrio.desafiomobile.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import unigranrio.desafiomobile.entity.Task;
import unigranrio.desafiomobile.service.TaskService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
	
	@Autowired
	public TaskService taskService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Task> getAllTasks(){
		return taskService.findAll();
	}

	@RequestMapping(value="/insert", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public Task insertTask(@RequestBody Task task) {
		return taskService.save(task);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void deleteTask(@PathVariable("id") Task task) {
		taskService.delete(task);
	}
}
