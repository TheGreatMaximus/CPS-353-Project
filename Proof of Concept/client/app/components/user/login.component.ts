import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'
import {IUser} from '../../services/user.model'
import {NgForm} from '@angular/forms'


@Component({

    templateUrl: 'app/components/user/login.component.html',
    styleUrls: ['app/components/user/userstyles.component.css'],
})

export class LoginComponent  {
    user:IUser
    constructor(private userService: UserService,private router:Router) {
    }

        errorMessage:any
    login(userForm)
    {
        this.errorMessage=""

        // var user =
        // {
        //     userName: '',
        //     firstName:'',
        //     lastName:'',
        //     password:'',
        //     email:'',
        //     id: 1,
        //     destinations:[]
        // } as IUser

        this.userService.findUserByCredentials(userForm.username, userForm.password)
        .subscribe(user=> {this.user = user
        console.log(user)

        if(this.user)
        {
          //redirect to /user/user.id
          this.router.navigate(['/user',this.user.id])
        }
       else 
       {
         //show error message
         this.errorMessage="user not found."
       }

        }
        );
    }
}