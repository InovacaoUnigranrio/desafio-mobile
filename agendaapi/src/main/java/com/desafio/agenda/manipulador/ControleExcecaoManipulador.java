package com.desafio.agenda.manipulador;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.desafio.agenda.dominio.DetalhesErro;
import com.desafio.agenda.servicos.excecoes.EventoNaoEncontradoExcecao;

@ControllerAdvice
public class ControleExcecaoManipulador {
	
	@ExceptionHandler(EventoNaoEncontradoExcecao.class)
	public ResponseEntity<DetalhesErro> handlerEventoNaoEncontradoExcecao
							(EventoNaoEncontradoExcecao e, HttpServletRequest request) {
		
		DetalhesErro erro = new DetalhesErro();
		erro.setStatus(404l);
		erro.setTitulo("O evento não pôde ser encontrado");
		erro.setMensagemDesenvolvedor("http://erros.agenda.com/404");
		erro.setTimestamp(System.currentTimeMillis());
		
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(erro);
	}

}
