/// <reference path="_all.ts" />

module ContactManagerApp {
    
    export class CreateUser{
        constructor(
          public firstname: string,
          public lastname: string,
          public avatar: string,
          public bio: string
        ){}
    }
 
  export class User {
    constructor(
      public name: string, 
      public avatar: string, 
      public bio: string, 
      public notes: Note[])  {      
    }
    
    static formCreate(user: CreateUser): User{
        return new User(
            user.firstname+' '+user.lastname,
            user.avatar,
            user.bio,        
        []);
    }
    
  }   
  
  export class Note {
    constructor(
      public title: string, 
      public date: Date) {      
    }
  }
  
}