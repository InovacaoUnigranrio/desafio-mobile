package unigranrio.desafiomobile.dao;

import java.util.Collection;
import java.util.List;

import unigranrio.desafiomobile.entity.Task;

public interface TaskDao {
    
    Collection<Task> getAllTasks();

    Task getTaskById(int id);

    void removeTaskById(int id);
    
    void insertTask(Task task);

}
