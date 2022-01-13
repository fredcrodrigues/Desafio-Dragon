import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import styles from "../styles/form.module.css"
import { function_  } from "../utils/addEdit-dragon"

export default function Form(props){
    
   const {register, handleSubmit, formState:{errors} } = useForm(props.defaultvalues)
   const router = useRouter()
   
   function onsubmit(data){
        return props.id ?  function_.onsubmit_up(props.id, data) : function_.onsubmit_add(data)
    }
   
    return(

        <form className={styles.form_container} onSubmit={handleSubmit(onsubmit)}>

                <div>
                    <div>
                        <label>Digite o Nome do seu Dragão</label>
                    </div>
                
                    <div>
                        <input type="text" placeholder='Nome do Dragão' {...register('Name', {required: true})}/>
                    </div>
                    <div>
                        <p>{errors.Name && 'Digite o nome do dragao'}</p>    
                    </div>     
                
               
                    <div>
                        <label>Escolha o tipo do seu Dragão</label>
                    </div>
                    
                    <div>
                        <select {...register('Type',  {required: true})}>
                            <option value='Celestial'>Celestial</option>
                            <option value='Guardiões de Tesouros'>Guardiões de Tesouros</option>
                            <option value='Dragões Imperiais'>Dragões Imperiais</option>   
                        </select>
                    </div>

                    <p>{errors.Type && 'Tipo de dragrão é necessario'}</p>
                </div>
            

                <div className={styles.form_input_submit}>
                    <div><input className={styles.input_save}type="submit"  value="save"/></div>
                    <div><input className={styles.input_cancel}type="submit" onClick = { () => router.push('/main')} value="cancel"/></div>
                </div>
                   
                

                
            
            </form>
            
          
    )
}