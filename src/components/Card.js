import React from "react";
import axios from "axios";
import '../css/StyleCard.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const Card = ({url, setPokemon}) =>{

    const [pokemon, setpokemon] = useState({});
    const[color, setColor] = useState("");
    
useEffect(()=>{
        axios.get(url)
        .then(res=>{
            setpokemon(res.data)
        });

        if(pokemon.types?.[0].type.name === "grass"){setColor("#50df9c")};
        if(pokemon.types?.[0].type.name === "fire"){setColor("#D93F3F")};
        if(pokemon.types?.[0].type.name === "water"){setColor("#83B9FF")};
        if(pokemon.types?.[0].type.name === "bug"){setColor("#36f04b")};
        if(pokemon.types?.[0].type.name === "normal"){setColor("#6d2424")};
        if(pokemon.types?.[0].type.name === "poison"){setColor("#600c64")};
        if(pokemon.types?.[0].type.name === "electric"){setColor("#ffe944")};
        if(pokemon.types?.[0].type.name === "ground"){setColor("#ffcc00")};
        if(pokemon.types?.[0].type.name === "fairy"){setColor("#dd3360")};
        if(pokemon.types?.[0].type.name === "dark"){setColor("#30015f")};
        if(pokemon.types?.[0].type.name === "fighting"){setColor("#b33008")};
        if(pokemon.types?.[0].type.name === "psychic"){setColor("#B1DBBC")};
        if(pokemon.types?.[0].type.name === "rock"){setColor("#414141")};
        if(pokemon.types?.[0].type.name === "ghost"){setColor("#3212c0")};
        if(pokemon.types?.[0].type.name === "ice"){setColor("#00e5ff")};
        if(pokemon.types?.[0].type.name === "dragon"){setColor("#02cc64")};
        if(pokemon.types?.[0].type.name === "steel"){setColor("#c7073a")};
        if(pokemon.types?.[0].type.name === "flying"){setColor("#237e04")};
    },[url, pokemon]);

    

    return(

            <div className='cont-card-pokemon' style={{background: color, border: `8px solid ${color}`}}>
                <Link to={`/pokedex/${pokemon.id}` } className="card-poke">
                    <div className="c0">
                        <img src={pokemon.sprites?.other.dream_world.front_default} alt="imagen logo pokedex"/>
                    </div>
                   <div className="cont-info-card-card">
                        <div className="c1">
                            <h3 style={{color: color}}>{pokemon.name}</h3>
                            <p>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name}</p>
                            <span><p>Tipo</p></span>
                        </div>
                        <div className="c2">
                            <span>
                                <p>HP</p>
                                <h5 style={{color: color}} >{pokemon.stats?.[0].base_stat}</h5>
                            </span>
                            <span>
                                <p>ATAQUE</p>
                                <h5 style={{color: color}} >{pokemon.stats?.[1].base_stat}</h5>
                            </span>
                        </div>
                        <div className="c3">
                            <span>
                                <p>DEFENSA</p>
                                <h5 style={{color: color}} >{pokemon.stats?.[2].base_stat}</h5>
                            </span>
                            <span>
                                <p>VELOCIDAD</p>
                                <h5 style={{color: color}} >{pokemon.stats?.[5].base_stat}</h5>
                            </span>
                        </div>
                   </div>
                </Link>
            </div>
    );
};

export default Card;