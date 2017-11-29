package com.desafio.agenda.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.desafio.agenda.dominio.Evento;
import com.desafio.agenda.repositorio.EventosRepositorio;
import com.desafio.agenda.servicos.excecoes.EventoNaoEncontradoExcecao;

@Service
public class EventosServicos {
	
	@Autowired
	private EventosRepositorio eventosRepositorio;
	
	public List<Evento> listar() {
		return eventosRepositorio.findAll();
	}
	
	public Evento buscar(Long id) {
		Evento evento = eventosRepositorio.findOne(id);
		
		if(evento == null) {
			throw new EventoNaoEncontradoExcecao("O evento não pôde ser encontrado.");
		}
			
		return evento;
	}
	
	public Evento salvar(Evento evento) {
		evento.setId(null);
		return eventosRepositorio.save(evento);
	}
	
	public void deletar(Long id) {
		try {
			eventosRepositorio.delete(id);
		} catch (EmptyResultDataAccessException e) {
			throw new EventoNaoEncontradoExcecao("O evento não pôde ser encontrado.");
		}
	}
	
	public void atualizar(Evento evento) {
		verificarExistencia(evento);
		eventosRepositorio.save(evento);
	}
	
	private void verificarExistencia(Evento evento) {
		buscar(evento.getId());
	}

}
