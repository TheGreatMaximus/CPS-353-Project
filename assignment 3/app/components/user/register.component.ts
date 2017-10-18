import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import { IUser } from '../../services/user.model'
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl: 'app/components/user/register.component.html',
    styleUrls: ['app/components/user/userstyles.component.css']
})

export class RegisterComponent  {
    
    user:IUser
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }


}