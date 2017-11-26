package unigranrio.desafiomobile.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import unigranrio.desafiomobile.entity.Task;

@Service
public class TaskService {

    @Autowired
    CrudRepository<Task, Long> repository;

    public Task save(Task entity) {
        return repository.save(entity);
    }

    public List<Task> findAll() {
        return (List<Task>) repository.findAll();
    }

    public Task findByID(Long id){
        return (Task) repository.findOne(id);
    }

    public void delete(Task entity) {
        repository.delete(entity);
    }
}