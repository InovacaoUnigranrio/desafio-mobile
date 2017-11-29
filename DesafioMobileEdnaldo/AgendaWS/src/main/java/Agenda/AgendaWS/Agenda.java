//Classe Agenda, seguindo o padrão JavaBeans
package Agenda.AgendaWS;


public class Agenda {
    
    
    //Declaração dos atributos
    private String dataInicio ;
    private String dataFim ;
    private String descricao ;
    private String nomeEvento ; 
    

      //Construtor padrão javaBeans
      public Agenda(String dataInicio,String dataFim,String descricao,String nomeEvento) {
         
         this.dataInicio = dataInicio ;
         this.dataFim = dataFim ;
         this.descricao = descricao ;
         this.nomeEvento = nomeEvento ;
        
        
    } 
    
    //Métodos acessores padrão JavaBeans(Get e Set)
      
      
     public String getDataInicio() {
         return dataInicio;
    }

    public void setDataInicio(String dataInicio) {
        this.dataInicio = dataInicio;
    }

    public String getDataFim() {
        return dataFim;
    }

    public void setDataFim(String dataFim) {
        this.dataFim = dataFim;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getNomeEvento() {
        return nomeEvento;
    }

    public void setNomeEvento(String nomeEvento) {
        this.nomeEvento = nomeEvento;
    }
    
    
    
    
}
