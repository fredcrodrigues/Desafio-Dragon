import { Async } from "../utils/helpers-dragons"
import router from "next/router"



export const function_ = {

    onsubmit_add,
    onsubmit_up
}

function onsubmit_add(data){ 
    Async.createList(data).then(router.push('/main'))
  
}

function onsubmit_up(id,data){
    Async.updateList(id, data).then(alert('Dados Alterado'), router.push('/main'))
}
