import {Component,OnInit} from '@angular/core'
import {UserService} from '../../services/user.service'
import {ActivatedRoute} from '@angular/router'
import { IUser } from '../../services/user.model'
import { FormsModule }   from '@angular/forms'
@Component({
    templateUrl: 'app/components/user/profile.component.html',
    styleUrls: ['app/components/user/userstyles.component.css']
})



export class ProfileComponent implements OnInit {
    
    user:IUser
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        //console.log(this.route.snapshot.params['uid'])
        //this.user =
        this.userService.findUserById(+this.route.snapshot.params['uid']).subscribe(user=>{this.user=user});
        //console.log(this.user.firstName)
        //console.log(this.user)
        }
}