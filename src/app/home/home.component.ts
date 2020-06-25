import { Component, OnInit } from "@angular/core";
import { DataService } from "./../data.service";
import { Task } from "../task";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(public dataService: DataService) {}

  onTaskChange(task: Task) {
    this.dataService.updateTask(task);
  }
  onTaskRemove(task: Task) {
    this.dataService.removeTask(task);
  }
}
