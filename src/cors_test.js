import {useEffect, useState} from "react";
import axios from "axios";

function Cors_test() {
    const [message, setMessage] = useState('');

    const responseHandler = ({data}) => {
        setMessage(data);
        return data;
    };

    const errorHandler = ({message}) => {
        setMessage(message);
        return message;
    };

    const onNonCorsHeaderHandler = () => {
        axios.get('http://localhost:6001/not-cors')
            .then(responseHandler)
            .catch(errorHandler);
    };

    const onCorsHeaderHandler = () => {
        axios.get('http://localhost:6001/cors').then(responseHandler);
    };

    const onNonProxyHandler = () => {
        axios.get('/not-proxy')
            .then(responseHandler)
            .catch(errorHandler);
    };

    const onProxyHandler = () => {
        axios.get('/proxy').then(responseHandler);
    };

    return (
        <div>
            <h1> Cors TEST </h1>
            <p>
                {message}
            </p>
            <div>
                <button onClick={onNonCorsHeaderHandler}>non cors header</button>
                <button onClick={onCorsHeaderHandler}>cors header</button>
                <button onClick={onNonProxyHandler}>nonProxy</button>
                <button onClick={onProxyHandler}>proxy</button>
            </div>
        </div>
    )
}

export default Cors_test;