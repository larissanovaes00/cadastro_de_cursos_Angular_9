import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  constructor() {}

  searchCourse: string;
  cursos = [];

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('curso'));
    if (data) {
      data.forEach((e) => {
        this.cursos.push(e);
      });
    }
  }


}
