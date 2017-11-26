package unigranrio.desafiomobile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import unigranrio.desafiomobile.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findById(Long id);

}
