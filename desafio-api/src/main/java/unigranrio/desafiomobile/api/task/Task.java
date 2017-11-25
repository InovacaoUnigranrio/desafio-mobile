package unigranrio.desafiomobile.api.task;

public class Task {
	
	private String dataInicio = "";
	private String dataFim = "";
	private String descricao = "";
	private String nome = "";
	
	public Task(String dataInicio, String dataFim, String descricao, String nome) {
		this.dataInicio = dataInicio;
		this.dataFim = dataFim;
		this.descricao = descricao;
		this.nome = nome;
	}

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

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
