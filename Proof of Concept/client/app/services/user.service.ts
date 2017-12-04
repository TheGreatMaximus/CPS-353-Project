import {Injectable} from '@angular/core'
import { IUser } from './user.model'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()

export class UserService
{

    constructor(private http:Http) { }

    createUser(user)
    {
        this.http.post('http://localhost:5000/api/user/',user);
    }
    findUserById(userId) : Observable<IUser>
    {
        console.log("user.id"+ userId)
        return this.http.get('http://localhost:5000/api/user/' + userId).map((res: Response) =>{ return<IUser>res.json()}).catch(this.handleError);
    }
    findUserByUsername(username)
    {
        return this.http.get('http://localhost:5000/api/user/GetUserByUsername?username=' + username).map((res: Response) =>{ return<IUser>res.json()}).catch(this.handleError);
    }
    findUserByCredentials(username,password)
    {
        let url = "http://localhost:5000/api/user/GetByCredentials?username="
        +username+"&password="+password
        console.log(url)

        return this.http.get(url).map((response:Response) => { return  <IUser>response.json();}
                ).catch(this.handleError)
    
    }
    googleapi(discription)
    {
        console.log(discription)
        return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='
        +discription+
        '&types=establishment&location=42.5894,-70.8209&radius=500&key=AIzaSyA-VEcPYKRjPUSedxY_YBjaLOGEhoBstyU').map((res: Response) =>{ return res.json()
        }).catch(this.handleError);
    }
    // add a static counter
    maxid()
    {
        let temp:number = 0;
        let counter:number = 0;
        let max: number = 300;
        return max + 1;
    }
    handleError(error: Response){
        return Observable.throw(error.statusText)
    }
}
