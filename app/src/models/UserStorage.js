'use strict'

class UserStorage{
    static #users = {
        id : ['dbgus' , '강유현' ,'유현이'],
        psword:['1234','123', '12324'],
        name : ['하이', '마이','네임'],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]= users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;