import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks-service';

// Define the task interface
interface Task {
  id?: number;
  title: string;
  description: string;
  date: string;
  priority_level: string;
  time: string;
  category: string;
  progress_level: string;
}

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks implements OnInit{
tasks: Task[] = [];
constructor(private taskService: TasksService) {}

ngOnInit(): void {
  // Fetch tasks from the service
  this.taskService.getTasks().subscribe((response: any) => {
    this.tasks = response; // Backend returns array directly, not wrapped in 'tasks' property
  }, (error: any) => {
    console.error('Error fetching tasks:', error);
  });
}


}