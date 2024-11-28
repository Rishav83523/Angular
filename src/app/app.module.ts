import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//we need to broswer module it provides the collection of things needed by ang app to run properly thats why must import browser module

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CardComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent], //it says all the root component from where app starts
  //if we can keep some comports as standlaone we can use imports[] for them
  imports: [BrowserModule, FormsModule], //the imports array is not just to declare standalone components but also other modules
})
export class AppModule {}
