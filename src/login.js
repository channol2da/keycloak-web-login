import React, {useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";

function Login() {

    // login
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const client_id = "key-web-login-cli";
    const grant_type = "password";
    const url = "http://localhost:8080/realms/key-web-login/protocol/openid-connect/token";

    const responseHandler = ({data}) => {
        setMessage(data);
        return data;
    };

    const errorHandler = ({message}) => {
        setMessage(message);
        return message;
    };

    const tokenHandler = ({response}) => {
        alert(response.access_token);
        setResponse(response);
        return response;
    };

    useEffect(() => {
        /*...*/
    }, [message])


    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const TokenLoginFunc = (e) => {

    };

    const getTokenFunc = (e) => {
        e.preventDefault();

        // /* application/x-www-form-urlencoded */
        // const datas = new URLSearchParams();
        // datas.append('client_id', client_id);
        // datas.append('id', id);
        // datas.append('password', password);
        // datas.append('grant_type', grant_type);
        //
        // alert(datas);
        //
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // };
        //
        // alert(config.headers["Content-Type"]);
        //
        // axios.post(url, datas, config)
        //     .then((result) => {
        //         alert(1);
        //     })
        //     .catch(errorHandler);

        const datas = {
            client_id: client_id,
            username: id,
            password: password,
            grant_type: grant_type
        };

       axios.post(url, qs.stringify(datas))
           .then((response) => {
               setResponse(response.data)
               // tokenHandler

           })
           .catch(errorHandler);
        // axios({
        //     method: 'post',
        //     url: url,
        //     data: qs.stringify(datas),
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        //     }
        // }).then(function (response){
        //     alert(response);
        // }).catch(function (error){
        //     alert(222222);
        // });
    };

    const loginFunc = (e) => {
        e.preventDefault(); // Submit 후 Reload 막기
        
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
                <div>
                    <button type="button" onClick={getTokenFunc}>Get Token !</button><br />
                    <form onSubmit={TokenLoginFunc}>

                    </form>
                </div>

            </div>
    )

};

export default Login;
