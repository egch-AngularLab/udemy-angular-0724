import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';


//this is the conventional name
@NgModule({
  //declarations will be used for modules components
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,

  ],
  bootstrap: [AppComponent],
  //imports will be used for standalone component
  imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {}
