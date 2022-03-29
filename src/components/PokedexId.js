import React from "react";
import logoPokedex from '../img/pokedex.png';
import '../css/StylePokedexId.css';
import axios from "axios";
import { useState, useEffect } from "react";


const Pokedexid = () =>{
    const href = window.location.href;
    const idar = href.split("/");
    const id = idar[5];

    const [pokemon, setPokemon] = useState({});

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>{
            setPokemon(res.data);
        });
    },[id]);
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



            <div className="container-inpo-poke-id">
                <div className="container-contenido-id">
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="imagen pokemon"/>
                    
                    <div className="container-info-poke-id">
                        <div className="font-color"></div>
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
                                    <span className="spn1-tipo"><p>{pokemon.types?.[0].type.name}</p></span>
                                    <span className="spn2-tipo"><p>{pokemon.types?.[1]?.type.name}</p></span>
                                </div>
                            </div>
                            <div className="cont-tipo-habilidades--hijo">
                                <p>Habilidades</p>
                                <div className="hijo-cont-cuadre">
                                    <span className="spn1-habilidades"><p>{pokemon.abilities?.[0].ability.name}</p></span>
                                    <span className="spn1-habilidades"><p>{pokemon.abilities?.[1]?.ability.name}</p></span>
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
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[0].base_stat)*100)/150}%`, height: '25px'}}></div>
                                </div>
                            </div>

                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>Ataque:</p>
                                    <p>{pokemon.stats?.[1].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[1].base_stat)*100)/150}%`, height: '25px'}}></div>
                                </div>
                            </div>

                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>Defensa:</p>
                                    <p>{pokemon.stats?.[2].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[2].base_stat)*100)/150}%`, height: '25px'}}></div>
                                </div>
                            </div>

                            <div className="barra-estadis">
                                <div className="barra-estadis-text">
                                    <p>Velocidad:</p>
                                    <p>{pokemon.stats?.[5].base_stat}/150</p>
                                </div>
                                <div className="cont-estadistica">
                                    <div className="cont-estadistica-hijo-h" style={{width: `${((pokemon.stats?.[5].base_stat)*100)/150}%`, height: '25px'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-movements">
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