import { useRef } from "react";
import styles from "./Login.module.css";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";


const Login = () => {

  const router = useRouter();

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


  const emailRef = useRef()
  const passwordRef = useRef()

  const handler = async(e) => {
    e.preventDefault()
  
    const email = emailRef.current.value
    const password =  passwordRef.current.value

    console.log("Email:", email, "Password:", password); 
    const result = await signIn("credentials",{
      redirect: false,
      email: email,
      password: password,
    })
    console.log("SignIn result:", result);
  
    if (result.error) {
      alert(result.error);
    } else {
      alert("Login successful!");
      window.location.href = "/"; 
    }
  
    
  }
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Welcome Back</h1>
      <button className={styles.googleLoginBtn}>Log in with Google</button>
      <div className={styles.separator}>Or</div>
      <form onSubmit={handler}>
      <input
        type="email"
        placeholder="Enter your Email"
        className={styles.loginInput}
        ref={emailRef}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.loginInput}
        ref={passwordRef}
      />
      <div className={styles.optionsContainer}>
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <a href="#" className={styles.forgotPassword}>
          Forgot Password?
        </a>
      </div>
      <button type="submit" className={styles.loginBtn}>Log in</button>
      </form>
      <div className={styles.createAccount}>
        Not a member yet? <a href="#">Create an account</a>
      </div>
    </div>
  );
};

export default Login;
