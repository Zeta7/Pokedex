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
//pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage] = useState(40);

//nombre pokemon
    const [namePoke, setNamePoke] = useState("");

//tipo de pokemon
    const [typePoke, setTypePoke] = useState([]);
    

    useEffect(()=>{
        //todos los pokemones
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(res => setPokemon(res.data?.results));
        //tipos de pokemones
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res=>setTypePoke(res.data.results));
        
    }, []);

    const indexOfLastPoke = currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const currentPoke = pokemon.slice(indexOfFirstPoke, indexOfLastPoke);
   
    /*change page*/
    const paginate = number =>{
        setCurrentPage(number);
        window.scrollTo({ top: 0, behavior: "smooth", });
    }

    const onSubmit = e => {
        e.preventDefault();
        navigate(`/pokedex/${namePoke}`);
        window.scrollTo({ top: 0, behavior: "smooth", });
    }


    const handleTipo = e =>{
        axios.get(e.target.value)
        .then(res=>console.log(res.data.moves));
    }

    if(typePoke){

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

                < div className="container_info-list-card">
                    {
                        currentPoke.map((poke)=>(
                            <div key={poke.url} >
                                <Card url={poke.url} setPokemon={setPokemon}/>
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