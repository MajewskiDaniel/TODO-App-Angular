import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TaskComponent } from "./task/task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { IsDonePipe } from "./is-done.pipe";
import { SortPipe } from './sort.pipe';
import { DateFilterPipe } from './date-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    NotFoundComponent,
    TaskItemComponent,
    TaskListComponent,
    IsDonePipe,
    SortPipe,
    DateFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
