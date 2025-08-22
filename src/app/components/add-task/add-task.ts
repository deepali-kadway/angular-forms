import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask implements OnInit{

  @Input() task?: Task;

  constructor(private service: TasksService, private router: Router) {}

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    priority_level: new FormControl('', Validators.required),
    progress_level: new FormControl('', Validators.required)
  });

  get title(){ return this.form.get('title');}
  get description(){ return this.form.get('description');}
  get date(){ return this.form.get('date');}
  get priority_level(){ return this.form.get('priority_level');}
  get time(){ return this.form.get('time');}
  get category(){ return this.form.get('category');}
  get progress_level(){ return this.form.get('progress_level');}

  ngOnInit(): void {
    // Initialize component logic here if needed
  }

  add_task(){
    let x = <Task>this.form.value;
    // Don't modify the time field, send it as is from the form
    this.service.addTask(x).subscribe((result: any) => {
      console.log("Task added successfully");
    },
    (err: HttpErrorResponse) => {
      console.log('Error adding task:', err.message);
    });
    this.form.reset(); // Reset the form after submission
    this.router.navigate(['home']);
  }
}
