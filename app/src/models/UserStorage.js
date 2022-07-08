'use strict'

class UserStorage{
    static #users = {
        id : ['dbgus' , '강유현' ,'유현이'],
        psword:['1234','123', '12324'],
        name : ['하이', '마이','네임'],
    };
    static getID(id){
        const users = this.#users;
        
    }
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
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=> [id, psword,name]
        const userInfo = usersKeys.reduce((newUser, info)=> {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
}

module.exports = UserStorage;