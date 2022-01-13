const fs = require('fs')
let dragons = require('../data/dragons.json')


export const helpers  = {
   getAll,
   getId,
   createDragons,
   deleteDragons,
   updateDragon,


}

function getAll(resp){

    return resp.status(200).json(dragons.sort( (a,b) =>  {return (a.Name < b.Name )? -1 : 1 }))

}

function getId(id, resp){
    
    const dragon = dragons.find(x => x.id.toString() == id.toString())
    console.log(dragon)
    return resp.status(200).json(dragon)
}

function createDragons(body){
    
  
    const dragon =  JSON.parse(body)
  
    dragon.id = dragons.length ? Math.max(...dragons.map(x=> x.id)) + 1: 1
   
    dragon.dateCreated =  new Date().toDateString()
   
    dragons.push(dragon)

    saveData()

}

function updateDragon(id, body){

    
  
    const dragon = dragons.find(x=> x.id.toString() == id.toString())

    dragon.dateUpdated = new Date().toISOString()

    Object.assign(dragon,  body)

    saveData()


}

function deleteDragons(id){
    
   
    dragons = dragons.filter(x => x.id.toString() != id.toString())

    saveData()

}

function saveData(){
    fs.writeFileSync('src/data/dragons.json', JSON.stringify(dragons,null,4))
}