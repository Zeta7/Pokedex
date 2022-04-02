import React from "react";
import logoPokedex from '../img/pokedex.png';
import '../css/StylePokedexId.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Pokedexid = () =>{

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});
    const [color, setColor] = useState("");

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>{
            setPokemon(res.data);
        });
    },[id]);

    useEffect(()=>{
        if(pokemon.types?.[0].type.name === "grass"){setColor("linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)")};
        if(pokemon.types?.[0].type.name === "fire"){setColor("linear-gradient(to right top, #6b0505, #890914, #a80d22, #c91032, #eb1243)")};
        if(pokemon.types?.[0].type.name === "water"){setColor("linear-gradient(to right top, #057d72, #02948e, #00abab, #03c2ca, #12daeb)")};
        if(pokemon.types?.[0].type.name === "bug"){setColor("linear-gradient(to right top, #053f7d, #3548a3, #6c4ac3, #a940d9, #eb12e3)")};
        if(pokemon.types?.[0].type.name === "normal"){setColor("linear-gradient(to right top, #000000, #3f191f, #7c292c, #b7412a, #eb6512)")};
        if(pokemon.types?.[0].type.name === "poison"){setColor("linear-gradient(to right top, #000000, #3a0725, #690054, #8c0096, #9412eb)")};
        if(pokemon.types?.[0].type.name === "electric"){setColor("linear-gradient(to right top, #ff8e00, #ffaa00, #ffc700, #f8e300, #ebff00)")};
        if(pokemon.types?.[0].type.name === "ground"){setColor("linear-gradient(to right top, #211102, #3b1f0b, #572e0e, #743f0e, #92500a)")};
        if(pokemon.types?.[0].type.name === "fairy"){setColor("linear-gradient(to right top, #0fa281, #46b59a, #6ac7b2, #8cdaca, #aeece1)")};
        if(pokemon.types?.[0].type.name === "dark"){setColor("linear-gradient(to right top, #030303, #1c1b1c, #2f2e2f, #444343, #5a5858)")};
        if(pokemon.types?.[0].type.name === "fighting"){setColor("linear-gradient(to right top, #000000, #390023, #600054, #6f009f, #0c00ff)")};
        if(pokemon.types?.[0].type.name === "psychic"){setColor("linear-gradient(to right top, #000000, #5a241d, #995800, #a2a700, #00ff1f)")};
        if(pokemon.types?.[0].type.name === "rock"){setColor("linear-gradient(to right top, #000000, #3c3b3b, #777675, #b8b8b6, #fcfffd)")};
        if(pokemon.types?.[0].type.name === "ghost"){setColor("linear-gradient(to right top, #848584, #8ba292, #8ac0a7, #7ddfc3, #5dffe8)")};
        if(pokemon.types?.[0].type.name === "ice"){setColor("linear-gradient(to right top, #429b92, #41b2a7, #3fc9bb, #39e1d1, #30f9e6)")};
        if(pokemon.types?.[0].type.name === "dragon"){setColor("linear-gradient(to right top, #ff0606, #c20024, #820627, #42101d, #000000)")};
        if(pokemon.types?.[0].type.name === "steel"){setColor("linear-gradient(to right top, #000000, #3b353c, #666e7f, #87afbf, #b6f5ef)")};
        if(pokemon.types?.[0].type.name === "flying"){setColor("linear-gradient(to right top, #06d6ff, #5795c7, #5b5a7e, #392c39, #000000)")};
       
    },[pokemon]);

    return(
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



            <div className="container-inpo-poke-id"    >
                <div className="container-contenido-id">
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="imagen pokemon"/>
                    
                    <div className="container-info-poke-id" >
                        <div className="font-color" style={{backgroundImage: color}}></div>
                        <div className="cont-id-id">
                            <p>#{pokemon.id}</p>
                            <h2>{pokemon.name}</h2>
                        </div>

                        <div className="cont-peso-altura">
                            <span>
                                <p>Peso</p>
                                <h5>{pokemon.weight}</h5>
                            </span>
                            <span>
                                <p>Altura</p>
                                <h5>{pokemon.height}</h5>
                            </span>
                        </div>

                        <div className="cont-tipo-habilidades">
                            <div className="cont-tipo-habilidades--hijo">
                                <p>Tipo</p>
                                <div className="hijo-cont-cuadre">
                                    {
                                        pokemon.types?.map((type)=>(
                                            
                                                <span key={type.type.name} className="spn_tipo"><p>{type.type.name}</p></span>
                                           
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="cont-tipo-habilidades--hijo">
                                <p>Habilidades</p>
                                <div className="hijo-cont-cuadre">
                                    {
                                        pokemon.abilities?.map((habi)=>(
                                            <span key={habi.ability?.name} className="spn-habilidades"><p>{habi.ability?.name}</p></span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className="container-stats">
                            <h3>Stats</h3>
                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>HP:</p>
                                    <p>{pokemon.stats?.[0].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[0].base_stat)*100)/150}%`, height: '25px', backgroundImage: color}}></div>
                                </div>
                            </div>

                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>Ataque:</p>
                                    <p>{pokemon.stats?.[1].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[1].base_stat)*100)/150}%`, height: '25px', backgroundImage: color}}></div>
                                </div>
                            </div>

                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>Defensa:</p>
                                    <p>{pokemon.stats?.[2].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[2].base_stat)*100)/150}%`, height: '25px', backgroundImage: color}}></div>
                                </div>
                            </div>

                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>Velocidad:</p>
                                    <p>{pokemon.stats?.[5].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[5].base_stat)*100)/150}%`, height: '25px', backgroundImage: color}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-movements"  >
                    <div className="cont-movement-title">
                        <h3>Movements</h3>
                        <div className="continer-lis-movement">
                            {
                                pokemon.moves?.map((moves)=>(
                                    <div key={moves.move.url} className="item-movement" >
                                        <span >
                                            <p>{moves.move?.name}</p>
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pokedexid;