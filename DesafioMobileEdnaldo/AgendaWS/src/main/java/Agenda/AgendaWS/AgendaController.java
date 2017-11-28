  //Classe de controle responsável pela requisição
package Agenda.AgendaWS;



import org.springframework.web.bind.annotation.RequestMapping ;
import org.springframework.web.bind.annotation.RestController ;

//Controller REST
@RestController
public class AgendaController {
    
    //Mapping Request
    @RequestMapping("/agenda")
    public Agenda agenda(String dataInicio,String dataFim, String descricao,String nomeEvento){
        
        return new Agenda(dataInicio,dataFim,descricao,nomeEvento) ;
                
                }
   }
