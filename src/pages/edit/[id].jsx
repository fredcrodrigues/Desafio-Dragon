import {Async} from "../../utils/helpers-dragons"
import { useEffect, useState  } from "react"
import Router from "next/router"
import Form from "../../components/Form"
import styles from "../../styles/main.module.css"

export default function Edit(){
    

    //const router = useRouter()    
    const [dragons, setDragons] = useState([])
    
    useEffect(()=> { Async.getId(Router.query.id).then( data => setDragons(data)) }, [])
    
    function renderForm (dragon){
        if(dragon != 0){
            return <Form id={Router.query.id} defaultvalues={{defaultValues:{ Name: dragon.Name, Type: dragon.Type}}}/>
        }{
            return <h2>Carregando dados...</h2>

        }

    }

    return (
        <div  className={styles.container}>

            <div className={styles.main}>   

                <div className={styles.title}>
                    <h1>Vamos <a>Lá?</a></h1>
                </div>

                <div>
                     {renderForm(dragons)}

                </div>
                   
            </div>
        </div>
     

    )
}