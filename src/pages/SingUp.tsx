import '../styles/sign-up.css'
import LogoGoogle from '../assets/Google-logo.png'
import LogoApple from '../assets/Apple-logo.png'
const SignUp = () => {
  return (
    <section>
      <div>
        <header>
          <h1>Social-Network</h1>
        </header>
        <div>
          <div className='conteinerFormSingUp'>
            <form className='formSingUp'>
              <div className='user-box'>
                <input type='text' name='' required />
                <label>Username</label>
              </div>
              <div className='user-box'>
                <input type='email' name='' required />
                <label>Email</label>
              </div>

              <div className='user-box'>
                <input type='password' name='' required />
                <label>Password</label>
              </div>

              <button type='submit'>Sing Up</button>
            </form>
            <div className='OtherLoginOptions'>
              <div className='line'></div>
              <p>Or Sign Up with </p>
              <div className='line'></div>
            </div>
            <div className='imgLogos'>
              <figure className='logo'>
                <img src={LogoGoogle} alt='' />
              </figure>
              <figure className='logo'>
                <img src={LogoApple} alt='' />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SignUp
