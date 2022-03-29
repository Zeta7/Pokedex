import React from 'react';
import logoPokedex from '../img/pokedex.png';
import '../css/StylePokedex.css';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card';

const Pokedex = () =>{

    const userName = useSelector(state => state.userName);

    const [pokemon, setPokemon] = useState([]);

   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1)
   const [pokePerPage] =useState(40);


    useEffect(()=>{
        setLoading(true);
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(res => {
                setPokemon(res.data?.results);
        })
        setLoading(false);
    }, []);

    const indexOfLastPoke = currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const currentPoke = pokemon.slice(indexOfFirstPoke, indexOfLastPoke);
   
    /*change page*/
    const paginate = number =>{
        setCurrentPage(number);
    }

    if(loading){
        return <h2>Loading...</h2>
    }

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
                        currentPoke.map((poke)=>(
                            <div key={poke.url} >
                                <Card url={poke.url}/>
                            </div>
                        ))
                    }
                </ div>
            </div>
            <Pagination pokePerPage={pokePerPage} totalPoke={pokemon.length} paginate={paginate}/>
        </section>
    );
};

export default Pokedex;