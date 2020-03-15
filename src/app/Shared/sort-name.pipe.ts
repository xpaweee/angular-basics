import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Model/task';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
