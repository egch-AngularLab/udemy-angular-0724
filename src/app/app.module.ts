import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';


//this is the conventional name
@NgModule({
  //declarations will be used for modules components
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TaskComponent,
    NewTaskComponent,
    TasksComponent,
  ],
  bootstrap: [AppComponent],
  //imports will be used for standalone component
  imports: [BrowserModule, FormsModule]
})
export class AppModule {}
