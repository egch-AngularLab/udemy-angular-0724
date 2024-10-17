import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";


//this is the conventional name
@NgModule({
    //declarations will be used for modules components
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    //imports will be used for standalone component
    imports: [BrowserModule ,HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {}