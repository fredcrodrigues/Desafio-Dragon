import { helpers } from "../../helpers/data-dragons"


export default function(req, resp){

    

    if(req.method === 'GET'){
        return get(req, resp)
    }
    if(req.method === 'DELETE'){
        
        return _delete(req.query.id)
    }
    if(req.method === 'PUT'){

        return update(req)
    }  
    if(!resp.status(205)){
        return resp.status(405)
    }

}

function get(req, resp){
   const id = req.query.id 
  
   helpers.getId(id, resp)
   
}

function _delete(id){
   
    helpers.deleteDragons(id) 
}

function update(req){
    const id = req.query.id
    const body = req.body
    helpers.updateDragon(id, body)

}