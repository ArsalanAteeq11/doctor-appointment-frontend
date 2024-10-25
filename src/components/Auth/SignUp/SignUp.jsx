import "./signup.css";

const SignUp = () => {
  return (
    <div className="container">
      <h2>Create Account</h2>
      <p>Please sign up to book appointment</p>
      <form className="form">
        <label htmlFor="">Full Name</label>
        <br />
        <input type="text" placeholder="Full Name" />
        <br />
        <label htmlFor=""> Email</label>
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <label htmlFor="">Role</label>
        <br />
        <select name="" id="">
          <option value="doctor">doctor</option>
          <option value="patient">patient</option>
        </select>
        <button>Create account</button>
      </form>
      <p className="existing-account-link">
        Already have an account?
        <span>
          <a href="/login">Login here</a>
        </span>
      </p>
    </div>
  );
};

export default SignUp;
