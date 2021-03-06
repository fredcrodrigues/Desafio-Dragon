import {FaPlus} from 'react-icons/fa'
import Router from "next/router"
import Table from "../components/Table"
import styles from '../styles/main.module.css'

export default function Main(){

  
    //const router = useRouter()
  
    return(
   
    
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.title}>
                 <h1>Crie o Seu  o <a>Dragão!</a></h1>
            </div>
            <div className={styles.button}>
                <button onClick={() => Router.push('add')}>Add <FaPlus size={10}/></button>
            </div>
            
            <div className={styles.tableContent}>
                <Table/>
            </div>    
        </div>
    </div>


    )
}