import {useRouter} from "next/router"
import {useState, useEffect} from "react/"
import { Async } from "../../utils/helpers-dragons"
import styles from "../../styles/details.module.css"



export default function details(){

    const router = useRouter()   
    const [dragons, setDragons] = useState([])
    
    useEffect(()=> { Async.getId(router.query.id).then( data => setDragons(data)) }, [])
 
    return (

        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>
                    <h1>Seu <a>dragão</a></h1>  
                </div>
                <div className={styles.details}>
                    <h3><a>Nome do dragrão:</a> {dragons.Name} </h3> 
                    <h3><a>Tipo Dragão:</a> {dragons.Type} </h3> 
                    <h3><a>Criação:</a> {dragons.dateCreated} </h3> 
                </div>
            </div>

        </div>
    )
}