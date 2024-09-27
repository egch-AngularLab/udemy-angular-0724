import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //@Input({ required: true}) name!: string;

 
  //adding a | we specify that name could be either a string or undefined
  //@Input()  name: string | undefined;

  //adding a question mark tells to the compiler that it will be always present
  @Input()  name?: string;


}
