import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "./task";

@Pipe({
  name: "dateFilter"
})
export class DateFilterPipe implements PipeTransform {
  transform(value: Task[], arg: string): Task[] {
    function formatDate() {
      let d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
    let filteredDates = [];
    if (arg === "isLate") {
      filteredDates = value.filter(task => task.date < formatDate());
    } else if (arg === "isToday") {
      filteredDates = value.filter(task => task.date == formatDate());
    } else if (arg === "isFuture") {
      filteredDates = value.filter(task => task.date > formatDate());
    }
    return filteredDates;
  }
}
