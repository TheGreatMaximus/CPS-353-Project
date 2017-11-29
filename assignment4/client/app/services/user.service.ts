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
        USERS.push(user)
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
    updateUser(userId,user)
    {
        USERS[userId] = user
    }
    deleteUser(userId)
    {
        delete USERS[userId]
    }
    maxid()
    {
        let temp:number = 0;
        let counter:number = 0;
        let max: number = USERS.length;
        while(counter < max)
        {
            if(temp < USERS[counter].id)
            {
            console.log(USERS[counter].id)
            console.log(USERS[counter].userName)
            
            temp = USERS[counter].id;
            console.log(temp)
            }
            counter= counter+1
        }
        return temp +1 ;
    }
    handleError(error: Response){
        return Observable.throw(error.statusText)
    }
}
const USERS:IUser[]=         

    [
        {id: 123, userName: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {id: 234, userName: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {id: 345, userName: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ]