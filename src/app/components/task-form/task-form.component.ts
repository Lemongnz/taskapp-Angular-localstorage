import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  



  addTask(newTitle: any, newDescription: any) {
    this.taskService.addTask({ 
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    })
    
    return false;
  }


  constructor( 
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

}
