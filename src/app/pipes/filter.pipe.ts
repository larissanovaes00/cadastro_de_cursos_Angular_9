
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterCourse' })

export class FilterPipe implements PipeTransform {
  
  transform(items: any[], searchCourse: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchCourse) {
      return items;
    }
    searchCourse = searchCourse.toLocaleLowerCase();
    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchCourse);
    });
  }
}