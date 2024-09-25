import { Component, EventEmitter, Input, Output, output} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true}) avatar!: string;
  @Input({ required: true}) name!: string;
  @Input({ required: true}) id!: string;

  //instead of this we use the output function
  // @Output() select = new EventEmitter();

  //we need to specify the type produced by output event, with generics
  select = output<string>();


 get imagePath(){
   return 'assets/users/' + this.avatar;
 }
 
 onSelectUser() {
  this.select.emit(this.id);
 }

}
