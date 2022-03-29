import react from 'react';
import logoPokedex from '../img/pokedex.png';
import '../css/StylePokedex.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Pokedex = () =>{

   const [pokemon, setPokemon] = useState([]);

    const userName = useSelector(state => state.userName)

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(res => {
                setPokemon(res.data?.results);
            })
    }, []);

    

    return (
        <section>
            <div className='container-dad-top'>
                <div className='container-red-top'>
                    <img src={logoPokedex} alt='logo pokedex'/>
                </div>
                <div className='container-black-top' >
                    <div className='circle-p'>
                        <div className='circle-h'></div>
                    </div>
                </div>
            </div>
            <div className='container-info-pokedex'>
                <p><span>Bienvenido {userName},</span> aquí podras encontrar tu pokemón favorito</p>
                <div className='cont-inp-selec'>
                    <form>
                        <input type='text'  placeholder='Busca un pokemon' />
                        <button>Buscar</button>
                    </form>
                    <div>
                        <input type="" />
                    </div>
                </div>
                < div className="container_info-list-card">
                    {
                        pokemon.map((poke)=>(
                            <div key={poke.url} >
                                <Card url={poke.url}/>
                            </div>
                        ))
                    }
                </ div>
            </div>
        </section>
    );
};

export default Pokedex;