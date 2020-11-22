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
  orderAz: boolean = false;
  orderDuration: boolean = false;

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('curso'));
    if (data) {
      data.forEach((e) => {
        this.cursos.push(e);
      });
    }
  }

  orderByCourseName() {
    this.orderAz = !this.orderAz;

    if (this.orderAz) {
      const sort = this.cursos.sort((a, b) => {
        return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
          ? -1
          : a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
          ? 1
          : 0;
      });
    } else {
      const sort = this.cursos.sort((a, b) => {
        return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
          ? -1
          : a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()
          ? 1
          : 0;
      });
    }
  }

  orderByCourseDuration() {
    this.orderDuration = !this.orderDuration;

    if (this.orderDuration) {
      const sort = this.cursos.sort((a, b) => {
        return a.duration < b.duration
          ? -1
          : a.duration > b.duration
          ? 1
          : 0;
      });
    } else {
      const sort = this.cursos.sort((a, b) => {
        return a.duration > b.duration
          ? -1
          : a.duration < b.duration
          ? 1
          : 0;
      });
    }
  }
}
