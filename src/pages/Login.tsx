import '../styles/sign-up.css'
import LogoGoogle from '../assets/Google-logo.png'
import { FormEvent } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/firabase'
import {
  
   signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [veri, setVeri] = useState(false)

   const handleSignPopup = async () => {
      const signGoogle = await signInWithPopup(auth, provider)
      const result = signGoogle.user
      if (signGoogle) {
         console.log(result.displayName)
      } else {
         console.log(result.displayName)
      }
   }
   const loginUserEmailAndPassword = async (event: FormEvent) => {
      try {
         event.preventDefault()
        await signInWithEmailAndPassword(
            auth,
            email,
            password,
         )
       
       
      } catch (error) {
         setVeri(true)
         
      }
     
   }

   //Check if the user is already registered

   // const  handleValueEmail = (event: Event) =>{
   //  const a = event.target as HTMLInputElement
   // setPassword(a.value)
   // }
   return (
      <section>
         <div>
            <header>
               <h1>Social-Network</h1>
            </header>
           
            <div>
           
               <div className='conteinerFormSingUp'>
          
                  <form
                     className='formSingUp'
                     onSubmit={loginUserEmailAndPassword}
                  >     
                     <div className='user-box'>
                        <input
                           type='email'
                           name=''
                           required
                           onChange={(value) => setEmail(value.target.value)}
                           value={email}
                        />
                        <label>Email</label>
                     </div>
                     <div className='user-box'>
                        <input
                           type='password'
                           name=''
                           required
                           onChange={(value) => setPassword(value.target.value)}
                           value={password}
                        />
                        <label>Password</label>
                     </div>

                     <button
                        type='submit'
                        
                     >
                        Login
                     </button>
                     <h3 className='Existing-account'>{veri ? 'usuario no esta registrado' : ''}</h3>
                     <Link to={'/sing-in'}>  <p  className='login'>Don't have an account ?  <b className='login-color'>Sing ip </b> </p></Link>
                  </form>
                  <div className='OtherLoginOptions'>
                     <div className='line'></div>
                     <p>Or Sign Up with </p>
                     <div className='line'></div>
                  </div>
                  <div className='imgLogos'>
                     <figure className='logo' onClick={handleSignPopup}>
                        <img src={LogoGoogle} alt='logo google' />
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Login