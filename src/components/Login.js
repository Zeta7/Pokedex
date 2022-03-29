import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logoPokedex from '../img/pokedex.png';
import '../css/StyleLogin.css';

const Login = () =>{
    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const Submit = e =>{
        e.preventDefault();
        dispatch({
            type: "GET_USERNAME",
            payload: userName
        });
        setUserName("");
        navigate("/pokedex")
    };

    return (
        <>
            <div className='container-login'>
                <img src={logoPokedex} alt='logo pokedex'/>
                <h1>!Hola entrenador!</h1>
                <p>Para comenzar, dame tu nombre</p>
                <form onSubmit={Submit}>
                    <input required type='text' placeholder='Tu nombre...' value={userName} onChange={e=>setUserName(e.target.value)}/>
                    <button>Comnezar</button>
                </form>
            </div>
            <div className='cont-1'>
                    <div className='circle-p'>
                        <div className='circle-h'></div>
                    </div>
                <div className='cont-2'>
                </div>
            </div>
        </>
    );
};

export default Login;