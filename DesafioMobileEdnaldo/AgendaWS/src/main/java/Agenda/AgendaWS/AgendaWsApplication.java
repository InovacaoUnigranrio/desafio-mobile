 //Classe responsável por iniciar o Spring Boot com o Webservice REST
 package Agenda.AgendaWS;

//Importação do Spring 
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Aplicação Spring Boot
@SpringBootApplication
public class AgendaWsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendaWsApplication.class, args);
	}
}
