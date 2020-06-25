import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task";

@Pipe({
  name: "isDone"
})
export class IsDonePipe implements PipeTransform {
  transform(value: Task[], isDone: boolean = true): Task[] {
    return value.filter(task => task.done === isDone);
  }
}
