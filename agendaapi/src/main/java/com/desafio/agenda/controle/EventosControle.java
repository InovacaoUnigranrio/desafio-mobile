package com.desafio.agenda.controle;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desafio.agenda.dominio.Evento;
import com.desafio.agenda.servicos.EventosServicos;

@RestController
@RequestMapping("/eventos")
public class EventosControle {
	
	@Autowired
	private EventosServicos eventosServicos;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Evento>> listar() {
		return ResponseEntity.status(HttpStatus.OK).body(eventosServicos.listar());
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> salvar(@Valid @RequestBody Evento evento) {
		evento = eventosServicos.salvar(evento);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(evento.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> buscar(@PathVariable("id") Long id) {
		Evento evento = eventosServicos.buscar(id);
		return ResponseEntity.status(HttpStatus.OK).body(evento);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deletar(@PathVariable("id") Long id) {
		eventosServicos.deletar(id);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> atualizar(@RequestBody Evento evento, 
			@PathVariable("id") Long id) {
		evento.setId(id);
		eventosServicos.atualizar(evento);
		return ResponseEntity.noContent().build();
	}

}
