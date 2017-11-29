package unigranrio.desafiomobile.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import unigranrio.desafiomobile.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
