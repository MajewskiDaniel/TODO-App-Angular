import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";
import { Task } from "../task";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit, OnDestroy {
  public task: Task;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get("id"));
      if (id) {
        this.task = this.dataService.get(id);
      } else {
        this.task = {
          label: "",
          date: "",
          done: false
        };
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSave(task: Task) {
    if (task.id) {
      this.dataService.updateTask(task);
    } else {
      this.dataService.addTask(task);
    }
    this.router.navigate(["/"]);
  }
}
