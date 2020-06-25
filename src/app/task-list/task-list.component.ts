import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../task";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent {
  @Input() list: Task[];
  @Input() title: string;
  @Output() taskChanged = new EventEmitter();
  @Output() taskRemove = new EventEmitter();

  onTaskChanged(event: Task) {
    this.taskChanged.emit(event);
  }
  onRemove(event: Task) {
    this.taskRemove.emit(event);
  }
}
