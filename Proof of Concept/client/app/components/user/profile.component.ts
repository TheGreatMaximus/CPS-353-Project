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
        console.log(this.route.snapshot.params['uid'])
        this.user =
        {
            userName: '',
            firstName:'',
            destinations:[],
            lastName:'',
            password:'',
            email:'',
            id: 1
        } as IUser
        this.userService.findUserById(+this.route.snapshot.params['uid'])
        .subscribe(user => {
            console.log(user);
            this.user = user;
            this.user.userName = user.userName;
            this.user.firstName = user.firstName;
            this.user.lastName = user.lastName;
            this.user.email = this.user.email;
            this.user.id = this.user.id;
            this.user.destinations = this.user.destinations;
            this.user.password = user.password;
        });
        //console.log(this.user.firstName)
        //console.log(this.user)
        }
}