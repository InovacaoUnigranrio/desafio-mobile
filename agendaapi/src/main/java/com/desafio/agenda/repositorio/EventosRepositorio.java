package com.desafio.agenda.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafio.agenda.dominio.Evento;

public interface EventosRepositorio extends JpaRepository<Evento, Long>{

}
