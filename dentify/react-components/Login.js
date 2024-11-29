import { useRef } from "react";
import styles from "./Login.module.css";
import { signIn } from "next-auth/react";

function loginUser(){
  //api call
}


const Login = () => {
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
      window.location.href = "/x-ray"; // Redirect to dashboard or another protected route
    }
  
    //login input handle + navigation
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
