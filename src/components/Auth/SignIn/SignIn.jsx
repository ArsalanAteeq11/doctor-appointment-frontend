import "./signin.css";

const SignIn = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <p>Please login to book appointment</p>
      <form className="form">
        <label htmlFor=""> Email</label>
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </form>
      <p className="existing-account-link">
        Don't have an account?
        <span>
          <a href="/register">Register here</a>
        </span>
      </p>
    </div>
  );
};

export default SignIn;
