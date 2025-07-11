import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Form() {

  const navigate = useNavigate();

    const handleClick=(event)=>{
        event.preventDefault();
        navigate('/currencies');
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
