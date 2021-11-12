import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];


  addTask(newTitle: any, newDescription: any) {
    this.taskService.addTask({ 
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    })
    newTitle.value =  '';
    newDescription.value = '';
    newTitle.focus();
    return false;
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
  }
  


  constructor(
    public taskService: TaskService
  ) { }
  
  ngOnInit(): void { 
    this.tasks = this.taskService.getTask();
  }

}

