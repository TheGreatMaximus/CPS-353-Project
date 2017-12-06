import {Component } from '@angular/core'
import {UserService} from '../../services/user.service'
import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'


@Component({

    templateUrl: 'app/components/user/destination.component.html',
    styleUrls: ['app/components/user/userstyles.component.css'],
})

export class destinationComponent  {

    parsedjson:any;
    jsonstring:any;
    destinationlist:Array<string>= [];
    constructor(private userService: UserService,private router:Router) {
    }
    
    search(searchForm)
    {
        let i;
        console.log(searchForm.destination)
        this.userService.googleapi(searchForm.destination).subscribe(val =>{this.jsonstring = val; 
            console.log(this.jsonstring);
         for (i = 0; i < this.jsonstring.predictions.length; i++) {
             this.destinationlist[i] = this.jsonstring.predictions[i].description;
          }
        });
    }
}