import { Component, EventEmitter, Input, Output} from '@angular/core';


//adding my own Type
type User =  {
  id: string;
  avatar: string,
  name: string  
};

//I can also use an interface...here there is not equal
interface UserI {
    id: string;
    avatar: string,
    name: string  
}


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
  @Input({required: true}) user!: UserI;



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
