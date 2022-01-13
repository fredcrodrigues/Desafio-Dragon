import { helpers } from "../../../helpers/data-users"


export default function(req, resp){
    if(req.method == 'GET'){
        return get(req, resp)
    }
}


function get(req, resp) {
    helpers.getAll(resp)
}