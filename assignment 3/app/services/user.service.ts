import {Injectable} from '@angular/core'
import { IUser } from './user.model'
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
        USERS[userId]
    }
    deleteUser(userId)
    {
        delete USERS[userId]
    }

}
const USERS:IUser[]=         

    [
        {id: 123, userName: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {id: 234, userName: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {id: 345, userName: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ]