package com.desafio.agenda.servicos.excecoes;

public class EventoNaoEncontradoExcecao extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3658846628081733030L;

	public EventoNaoEncontradoExcecao(String mensagem) {
		super(mensagem);
	}
	
	public EventoNaoEncontradoExcecao(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}

}
