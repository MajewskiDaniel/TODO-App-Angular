import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(value: Task[]): Task[] {
    const sortedValues = value.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return sortedValues;
  }
}
