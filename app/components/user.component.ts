import { Component } from '@angular/core';
import {PostService} from '../services/posts.service';

@Component({
  moduleId : module.id,
  selector: 'user',
  templateUrl : 'user.component.html',
  // template: `
  // `,
   providers:[PostService]
})
export class UserComponent  {
  name : string ;
  email: string;
  address:addressInf;
  hobbies : string[];
  showHobbies : boolean;
  posts: Post[];

    constructor(private postService : PostService){
      this.name = 'Lilantha';
      this.email = 'lilantha@gmail.com';
      this.address = {
                      street : '238 Coutts street',
                      suburb : 'Rongotai',
                      city : 'Wellington'
                   };
       this.hobbies = ['reading', 'surfing'];
       this.showHobbies = true ;
       this.postService.getPosts().subscribe(posts => {
         //console.log(posts);
         this.posts = posts;
       });
  }

  showHide = function(){
    console.log('clicked me');
    if (this.showHobbies == true){
        this.showHobbies = false;
    }else {
        this.showHobbies = true;
    }
  }

  addHobby(hobby: string){
    console.log('Hobby ' + hobby + ' is added to the List');
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number){
    this.hobbies.splice(i,1);
  }

}

interface addressInf {
  street :string;
  suburb :string;
  city: string;
}

interface Post{
  id : number;
  title : string;
  body : string;
}

// $scope.
