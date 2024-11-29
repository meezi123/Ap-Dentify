import { useRef } from "react";
import styles from "./Login.module.css";

function loginUser(){
  //api call
}
function handler(){
  //login input handle + navigation
}

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Welcome Back</h1>
      <button className={styles.googleLoginBtn}>Log in with Google</button>
      <div className={styles.separator}>Or</div>
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
      <button onClick= {handler} className={styles.loginBtn}>Log in</button>
      <div className={styles.createAccount}>
        Not a member yet? <a href="#">Create an account</a>
      </div>
    </div>
  );
};

export default Login;
