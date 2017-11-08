import {Injectable} from '@angular/core'
import { IUser } from './user.model'
import { Http } from '@angular/http';
@Injectable()

export class UserService
{
    createUser(user)
    {
        USERS.push(user)
    }
    findUserById(userId)
    {
        console.log("user.id"+ userId)
        this.http.get()
        return USERS.find(user => user.id === userId )
    }
    findUserByUsername(username)
    {
        return USERS.find(user => user.userName === username)
    }
    findUserByCredentials(username,password)
    {
        return USERS.find(user => (user.userName ===username && user.password === password))
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

}
const USERS:IUser[]=         

    [
        {id: 123, userName: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {id: 234, userName: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {id: 345, userName: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ]