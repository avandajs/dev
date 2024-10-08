import {Column,Model} from "../../core/orm";
import User from "./User";

export default class Blog extends Model{
    
    perPage = 60;

    @Column.text()
    title?:string;

    @Column.text()
    body?:string;

    @Column.int({
        references: new User
    })
    user_id?:number;
}