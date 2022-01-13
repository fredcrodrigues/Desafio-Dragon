import { useState, useEffect } from "react"
import {FaEdit, FaMinusCircle, FaInfoCircle} from 'react-icons/fa'
import {Async} from "../utils/helpers-dragons"
import styles from "../styles/main.module.css"
import  Router  from "next/router"

export default function Main(){

    //const router = useRouter()
    const [dragons, setDragons] = useState([])

    //obter dados
    useEffect(()=> {Async.getAll().then(data => setDragons(data))}, [] ) 
   
    // deleta dragão
    function deleteDragon(id){
        Async.delId(id).then(setDragons( x => x.filter(x => x.id != id)))
    } 
    
  
    return(
    <>
    {dragons !=0 ? 
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>
                           <td>Nome dos seus Dragões</td> 
                    </th>
                  
                </tr>
            </thead>
            <tbody>
                
                {dragons.map(dragon =>
                    
                    <tr key={dragon.id}>
                        
                            <div className='table-td-nome'>{dragon.Name}</div>
                            <div className='table-td-button'>
                                <button className={styles.table_td_button_up}  onClick={() => Router.push("/edit/" +  dragon.id)}><FaEdit/></button>
                                <button className={styles.table_td_button_del}  onClick={() => deleteDragon(dragon.id)}><FaMinusCircle/></button>
                                <button className={styles.table_td_button_inf}  onClick={() => Router.push("/details/" +  dragon.id)}><FaInfoCircle/></button>
                            </div>
                        
                    
                    </tr> )
                }
            </tbody>
        </table>
        : <h2>Você está sem <b>Dragão...</b></h2>}

    </>
       
    )
}