
export const Async = {
    getAll,
    createList,
    getId,
    updateList,
    delId
}

async function getAll(){

    const resp = await fetch('/api/main')
    const _data = await resp.json()
  
    return _data
}

async function getId(id){
    
    const resp = await fetch('/api/' + id)
    const _data = await resp.json()
    return _data
}

async function createList(data){
    const resp = await fetch('/api/main', {
        method: 'POST',
        body: JSON.stringify(data) 
    })  

}

async function updateList(id, data) {
    const resp = await fetch('/api/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' ,
    },
        body: JSON.stringify(data) 
    })  
}
async function delId(id){
    const resp = await fetch('/api/'+ id, {
        method: 'DELETE',
        
    })
    const _data = await resp.json()

    return _data
 
}
