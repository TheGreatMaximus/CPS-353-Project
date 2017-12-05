import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'


@Component({

    templateUrl: 'app/components/user/joinride.component.html',
    styleUrls: ['app/components/user/userstyles.component.css'],
})

export class joinrideComponent  {
    constructor(private userService: UserService,private router:Router) {
    }
    
}