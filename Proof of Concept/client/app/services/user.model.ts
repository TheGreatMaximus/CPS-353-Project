import {destination} from './destination.model'

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    password:string,
    userName:string,
    email:string
    destinations:Array<destination>,
}