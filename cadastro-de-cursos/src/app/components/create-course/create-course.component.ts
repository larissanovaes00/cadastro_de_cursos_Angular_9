import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  onSubmit(form) {
    console.log(form);
  }

  // validate form fields and add error classes
  validate(field) {
    return !field.valid && field.touched;
  }
  fieldErrorStyle(field) {
    return {
      'label-error': this.validate(field),
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
