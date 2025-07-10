function Form() {
    return ( 
        <>  
        <h1>Login</h1>
        <form action="submit-data"></form>
        Your Name: <input type="name" id="fullName" placeholder="Enter your fullname" />
        Email: <input type="email" id="email"placeholder="Enter your email" required/>
        Password: <input type="password" id ="password" placeholder ="Choose a password"required />
        <button>Login</button>
        </>
     );
}

export default Form;