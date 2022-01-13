import { helpers } from "../../../helpers/data-users"

export default function handler(req, resp){

    

    if(req.method === 'GET'){
        return get( resp)
    }
    if(!resp.status(200)){
        return resp.status(405)
    }

}

function get(resp){

    helpers.getAll(resp)
 
}
