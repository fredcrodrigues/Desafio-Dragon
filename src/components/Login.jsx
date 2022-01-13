import {useForm} from 'react-hook-form'
import { async } from '../utils/login-users';
import styles from "../styles/login.module.css"

export default function Login(){
    
   const {register, formState:{ errors }, handleSubmit} = useForm()
   

   const onsubmit = (data) => async.getAll(data).then(users => async.valUsers(users, data))

   

    return (

        <div  className={styles.containerForm}>

            <form onSubmit={handleSubmit(onsubmit) }>
                <h1>Login</h1>
                <div>
                   <div>
                        <input placeholder="Login" className={styles.inputForm} type="text" {...register('User', { required: true})}/>
                   </div>
                    
                    <div>
                        <p>{errors.User && "Login is required"}</p>
                    </div>

                    <div>
                        <input type="password" placeholder="Password"  className={styles.inputForm}  {...register('Password', { required: true})}/>
                    </div>
                   <div>
                        <p>{errors.Password && "Password is required"}</p>
                   </div>
                   
                </div>
                <div>
                    <input type="submit" value="Sign in"/>
                </div>
              
            </form>


        </div>
       
        
    
    )
}