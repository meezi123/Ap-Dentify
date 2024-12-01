import { useRef } from "react";
import styles from "./SignUp.module.css";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import loginImage from '@/public/image10.png';
import Image from "next/image";
import { useUser } from '../context/UserContext';

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
      window.location.href = "/UserForm"
    })
    .catch(err => {
      // Handle errors
      console.error(err.message);
      alert(err.message); // or show an error notification
    });
}


const SignUpForm = () => {

  const router = useRouter();
  const { updateUser } = useUser();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        // If the user is already logged in, redirect to another page
        router.push('/'); // Redirect to home page 
      }
    };

    checkSession();
  }, [router]);
  
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handler = async(e) => {
    e.preventDefault()
  
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const name = nameRef.current.value
    
    updateUser(name);
    createUser(email, password)
  }

  return (
    <div className={styles.signupContainer}>
      {/* Left Section: Image */}
      <div className={styles.leftSection}>
      <Image src={loginImage} alt="Login Illustration" />
      </div>

      {/* Right Section: Signup Form */}
      <div className={styles.rightSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Create An Account</h1>
          <form className={styles.form} onSubmit={handler}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Type your full name"
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
            Have an account? <a href="/Login" className={styles.link}>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  )
};

export default SignUpForm;