import React from 'react';
import logoPokedex from '../img/pokedex.png';
import '../css/StylePokedex.css';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

const Pokedex = () =>{
    const navigate = useNavigate();

    const userName = useSelector(state => state.userName);

    const [pokemon, setPokemon] = useState([]);


//nombre pokemon
    const [namePoke, setNamePoke] = useState("");

//tipo de pokemon
    const [typePoke, setTypePoke] = useState([]);
    

    useEffect(()=>{
        //--------- todos los pokemones ------------//
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(res => setPokemon(res.data?.results));
        //--------- tipos de pokemones -------------//
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res=>setTypePoke(res.data.results));
        
    }, []);

//----------------------- pagination -----------------------------//
    const [page, setPage] = useState(1);

    const itemsNumber = 42;
    const lastIndex = page * itemsNumber;
    const firstIndex = lastIndex - itemsNumber;
    const pokemonPaginated = pokemon?.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(pokemon?.length/itemsNumber);

    const pagesNumber = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesNumber.push(i);
    }
    

//--------------- busqueda de pokemon ---------------------------//
    const onSubmit = e => {
        e.preventDefault();
        navigate(`/pokedex/${namePoke}`);
        window.scrollTo({ top: 0, behavior: "smooth", });
    }


    const handleTipo = e =>{
        axios.get(e.target.value)
        .then(res=>console.log(res.data.moves));
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
                    
                    <form onSubmit={onSubmit}> 
                        <input 
                            type='text'  
                            placeholder='Busca un pokemon'
                            value={namePoke} onChange={e=>setNamePoke(e.target.value)}
                         />
                        <button>Buscar</button>
                    </form>

                    <div className='cont-selec'>
                        <select onChange={handleTipo}>
                            <option value="">Selecciona un Tipo</option>
                            {
                                typePoke.map((type)=>(
                                    <option value={type.url} key={type.url}>{type.name}</option>
                                    ))
                                }
                        </select>
                    </div>
                </div>
                <div className='conatiner-pagination-top'>
                    <Pagination page={page} setPage={setPage} totalPages={totalPages} pagesNumber={pagesNumber}/>
                </div>
                < div className="container_info-list-card">
                    {
                        pokemonPaginated.map((poke)=>(
                            <div key={poke.url} >
                                <Card url={poke.url} setPokemon={setPokemon}/>
                            </div>
                        ))
                    }
                </ div>
                <nav className="cont-pagination-bottom">
                    <Pagination page={page} setPage={setPage} totalPages={totalPages} pagesNumber={pagesNumber}/>
                </nav>
            </div>
        </section>
    );
};

export default Pokedex;