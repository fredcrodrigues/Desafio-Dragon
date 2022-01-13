import Form from "../components/Form"
import styles from "../styles/main.module.css"

export default function pageMain(){
   
   
    return(
      
        <div className={styles.container}>
            <div className={styles.main}>

                <div className={styles.title}>
                    <h1>Vamos <b>lá?</b></h1>
                </div>
            
                <div>
                    <Form/>
                </div>
   
            </div>
        </div>
    
    )

  
    
}
