import React, {useEffect, useState} from "react";
import axios from "axios";

function Login() {

    // login
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState('');

    const responseHandler = ({data}) => {
        setMessage(data);
        return data;
    };

    const errorHandler = ({message}) => {
        setMessage(message);
        return message;
    };
    useEffect(() => {
        /*...*/
    }, [message])

    const loginFunc = (e) => {
        e.preventDefault(); // Submit 후 Reload 막기
        /*...*/
        let body = {
            id,
            password
        };

        axios.post("/api/login", body)
            .then(responseHandler)
            .catch(errorHandler);

    };

    function onHelloHandler() {
        axios.get('/api/hello')
            .then(responseHandler)
            .catch(errorHandler);
    };

    return(
        <div>
            <div>
                <h1>Login Component</h1>
                <form onSubmit={loginFunc}>
                    <label htmlFor="id"> ID: </label>
                    <input type="text" id="id"
                           value={id} onChange={(e) => setId(e.target.value)}/><br />
                    <label htmlFor="id"> PW: </label>
                    <input type="password"
                           value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                    <button type="submit"> Login</button><br />
                </form>
            </div>
            <div>
                {/*<button onClick={onHelloHandler}> hello world </button>*/}
                <p>
                    {message}
                </p>
            </div>
        </div>
    )

};

export default Login;