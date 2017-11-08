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
    
    user:IUser
    errorMessage:any
    constructor(private userService: UserService, private route: Router) {
    }
    register(registerForm)
    {
        console.log(registerForm.username)
        if(registerForm.password == registerForm.password2 
            && registerForm.password!=null && registerForm.username!=null
            && registerForm.lastName!=null && registerForm.lastName!=null)
        {
            var user =
            {
                userName: '',
                firstName:'',
                lastName:'',
                password:'',
                id: 1
            } as IUser
            console.log(user)
            user.userName = registerForm.username
            user.firstName = registerForm.firstname;
            user.lastName = registerForm.lastname
            user.password = registerForm.password
            user.id = this.userService.maxid();
            console.log(user)
            this.userService.createUser(user)
            this.route.navigate(['/user',user.id])
        }
        else
        {
            this.errorMessage="passwords do not match."
        }
    }
    update(userForm)
    {
        var user =
        {
            userName: '',
            firstName:'',
            lastName:'',
            password:'',
            id: 1
        } as IUser
        this.user = this.userService.findUserByUsername(userForm.username)
        console.log(this.user)
        user.userName = userForm.username
        user.firstName = userForm.firstname
        user.lastName = userForm.lastname
        user.password = userForm.password
        user.id = this.user.id
        console.log(user)
        this.userService.updateUser(this.user.id,userForm)
        console.log(this.user)
    }

}