import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import { IUser } from '../../services/user.model'
import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'

@Component({
    templateUrl: 'app/components/user/register.component.html',
    styleUrls: ['app/components/user/userstyles.component.css']
})

export class RegisterComponent  {
    static counter = 0;
    user:IUser
    errorMessage:any
    constructor(private userService: UserService, private route: Router) {
    }
    register(registerForm)
    {
        console.log(registerForm.username)
        console.log(registerForm.password)
        if(registerForm.password == registerForm.password2 
            && registerForm.password!=null && registerForm.username!=null
            && registerForm.lastname!=null && registerForm.lastname!=null)
        {
            var user =
            {
                userName: '',
                firstName:'',
                lastName:'',
                password:'',
                email:'',
                id: 1,
                destinations:[]
            } as IUser
            console.log(user)
            user.userName = registerForm.username
            user.firstName = registerForm.firstname;
            user.lastName = registerForm.lastname
            user.password = registerForm.password
            user.email = registerForm.email
            user.id = this.userService.maxid() + RegisterComponent.counter;
            console.log("created "+user);
            this.userService.createUser(user)
            this.route.navigate(['/user',user.id])
            RegisterComponent.counter++;
        }
        else
        {
            this.errorMessage="passwords do not match."
        }
    }

}