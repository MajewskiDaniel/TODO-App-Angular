import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../task";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"]
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() changed = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<Task>();

  checkboxChanged() {
    this.changed.emit({
      ...this.task,
      done: !this.task.done
    });
  }
  onRemove() {
    this.remove.emit(this.task);
  }
}
