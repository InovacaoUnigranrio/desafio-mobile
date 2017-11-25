package unigranrio.desafiomobile.api.task;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {

	@CrossOrigin(origins = "http://localhost:8100")
	@RequestMapping("/tasks")
	public List<Task> getAllTasks() {
		return Arrays.asList(
				new Task("21/11/2017 12:00",
						"28/11/2017 23:59",
						"Concluir o desafio mobile do estágio da Unigranrio",
						"Desafio Mobile"),
				
				new Task("22/11/2017 08:00",
						"24/11/2017 19:00",
						"Estudar Ionic 2 para fazer o desafio",
						"Estudar Ionic 2"),
				
				new Task("24/11/2017 21:00",
						"25/11/2017 01:10",
						"Estudar o framework e criar web service para o desafio",
						"Spring Boot"),
				
				new Task("25/11/2017 09:00",
						"25/11/2017 19:00",
						"Participar no DevFest RJ",
						"DevFest"),
				
				new Task("26/11/2017 09:00",
						"28/11/2017 23:59",
						"Adicionar mais funcionalidades ao APP",
						"Melhorar este APP")
				);
	}
}
