import "../App.css";
function Form() {
    const handleClick=()=>{
        
    }
  return (
    <>
      <h1>Login</h1>
      <form className="input" action="submit-data">
        Your Name:{" "}
        <input className= "name" type="name" id="fullName" placeholder="Enter your fullname" />
        <br />
        Email:{" "}
        <input
        className="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        <br />
        Password:{" "}
        <input
        className="password"
          type="password"
          id="password"
          placeholder="Choose a password"
          required
        />{" "}
        <br />
        <button className="button" onClick={handleClick}>Login</button>
      </form>
    </>
  );
}

export default Form;
