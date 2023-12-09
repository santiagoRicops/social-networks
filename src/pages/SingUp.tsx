import '../styles/sign-up.css'
import LogoGoogle from '../assets/Google-logo.png'
import { FormEvent } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase/firabase'
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState } from 'react'

const SignUp = () => {
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
   const registerUserEmailAndPassword = async (event: FormEvent) => {
      event.preventDefault()
      const registerUserEmail = await createUserWithEmailAndPassword(
         auth,
         email,
         password,
      )
      if (registerUserEmail) {
         console.log(registerUserEmail)
      }
   }

   //Check if the user is already registered
   const handleCheckIfTheUserIsAlreadyRegistered = async () => {
      try {
         await signInWithEmailAndPassword(auth, email, password)
         setVeri(true)
      } catch (error) {
         console.log('hay un error' + error)
      }
   }

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
            <h3>{veri ? 'usuario ya registrado' : ''}</h3>
            <div>
               <div className='conteinerFormSingUp'>
                  <form
                     className='formSingUp'
                     onSubmit={registerUserEmailAndPassword}
                  >
                     <div className='user-box'>
                        <input type='text' name='' required />
                        <label>Username</label>
                     </div>

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
                        onClick={handleCheckIfTheUserIsAlreadyRegistered}
                     >
                        Sing Up
                     </button>
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

export default SignUp
