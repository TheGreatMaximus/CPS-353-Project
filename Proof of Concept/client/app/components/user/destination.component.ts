import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'


@Component({

    templateUrl: 'app/components/user/destination.component.html',
    styleUrls: ['app/components/user/userstyles.component.css'],
})

export class destinationComponent  {
    constructor(private userService: UserService,private router:Router) {
    }
    
    search(searchForm)
    {
        let jsonresponse: string = "";
        console.log(searchForm)
        console.log(this.userService.googleapi(searchForm));
    }
}