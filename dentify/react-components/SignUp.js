import { useRef } from "react";
import styles from "./SignUp.module.css";
import { getSession } from "next-auth/react";

function createUser(email, password){
   fetch ('/api/signUp',{
    method: 'POST',
    body:JSON.stringify({email, password}),
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res => {
      if (!res.ok) {
        // If status code is not in the 200-299 range, throw an error
        return res.json().then(errorData => {
          throw new Error(errorData.message);
        });
      }
      return res.json(); // Parse JSON for successful response
    })
    .then(data => {
      // Handle success
      console.log(data.message);
      alert(data.message); 
      window.location.href = "/"
    })
    .catch(err => {
      // Handle errors
      console.error(err.message);
      alert(err.message); // or show an error notification
    });
}


const SignUpForm = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handler = async(e) => {
    e.preventDefault()
  
    const email = emailRef.current.value
    const password = passwordRef.current.value
    createUser(email, password)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create An Account</h1>
      <button className={styles.googleButton}>Sign up with Google</button>
      <div className={styles.divider}>Or</div>
      <form className={styles.form} onSubmit={handler}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Type your name"
            className={styles.input}
            ref={nameRef}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.input}
            ref={emailRef}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            ref={passwordRef}
          />
        </div>
        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="terms" className={styles.checkbox} />
          <label htmlFor="terms" className={styles.checkboxLabel}>
            I agree with Terms and Privacy
          </label>
        </div>
        <button type="submit" className={styles.signupButton}>
          Sign up
        </button>
      </form>
      <p className={styles.signinText}>
        Have an account? <a href="/signin" className={styles.link}>Sign In</a>
      </p>
    </div>
  );
};

export default SignUpForm;