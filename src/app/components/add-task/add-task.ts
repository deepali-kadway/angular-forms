import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask implements OnInit{

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    priority_level: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    progress_level: new FormControl('', Validators.required)
  });

  get title(){ return this.form.get('title');}
  get description(){ return this.form.get('description');}
  get dueDate(){ return this.form.get('dueDate');}
  get priority_level(){ return this.form.get('priority_level');}
  get time(){ return this.form.get('time');}
  get category(){ return this.form.get('category');}
  get progress_level(){ return this.form.get('progress_level');}

  ngOnInit(): void {
    // Initialize component logic here if needed
  }

  add_task() {}
}
