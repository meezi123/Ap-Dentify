import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create An Account</h1>
      <button className={styles.googleButton}>Sign up with Google</button>
      <div className={styles.divider}>Or</div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Type your name"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
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