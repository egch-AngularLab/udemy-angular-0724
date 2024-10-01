import { Component, EventEmitter, Input, Output} from '@angular/core';


import { User } from './user.model';

//this is equivalent, but not mandatory
//import { type User } from './user.model';



@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //here using the type
  //@Input({required: true}) user!: User;

  //here using the interface
  @Input({required: true}) user!: User;



  //instead of this we use the output function
  //I can specify the type with generics
  @Output() select = new EventEmitter<string>();

  //we need to specify the type produced by output event, with generics
  //select = output<string>();


 get imagePath(){
   return 'assets/users/' + this.user.avatar;
 }
 
 onSelectUser() {
  this.select.emit(this.user.id);
 }

}
