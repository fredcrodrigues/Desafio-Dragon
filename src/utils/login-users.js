import Router from "next/router"



export const async = {

    getAll,
    valUsers
}
async function getAll(){
    
    
    const resp = await fetch('/api/users/login')
    const _data = await resp.json()

    return _data
  
   
} 

async function valUsers(_data, form){

    
    const users =  _data.find(x => x.Nome == form.Nome && x.Password == form.Password)
    
    users?  Router.push('/main') : alert('dados Incorreto')

}
