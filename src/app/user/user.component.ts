import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    avatar: string,
    name: string  
  };



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
