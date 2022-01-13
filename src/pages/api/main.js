import { helpers } from "../../helpers/data-dragons"


export default function(req, resp){


    if(req.method == 'GET'){
        return get(resp)
    }
    
    if(req.method === 'POST'){
        return create(req)
    }  
    
    if(!resp.status(205)){
        return resp.status(405)
    }
    

}

function get(resp){
    helpers.getAll(resp)

}

function create(req){
   
    const body = req.body
    helpers.createDragons(body)
}
