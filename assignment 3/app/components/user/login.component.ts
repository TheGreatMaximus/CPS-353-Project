import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import {ActivatedRoute,Router} from '@angular/router'
import { IUser } from '../../services/user.model'


@Component({

    templateUrl: 'app/components/user/login.component.html',
    styleUrls: ['app/components/user/userstyles.component.css'],
    

})

export class LoginComponent  {
    user:IUser
    constructor(private userService: UserService,private route: ActivatedRoute,private router:Router) {
    }

        errorMessage:any
    login(user)
    {
        this.errorMessage=""
        user = this.userService.findUserByCredentials(user.username, user.password);
        if(user)
           {
             //redirect to /user/user.id
             this.router.navigate(['/user',user.id])
           }
        else 
        {
            //show error message
            this.errorMessage="user not found."
        }
    }
}