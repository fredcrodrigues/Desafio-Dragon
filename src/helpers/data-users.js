const fs = require('fs')
let users = require('../data/users.json')


export const helpers  = {
   getAll
}

function getAll(resp){
   
    return resp.status(200).json(users)

}
