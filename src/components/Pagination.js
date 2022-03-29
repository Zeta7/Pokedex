import React from "react";
import '../css/StylePagination.css';


const Pagination = ({pokePerPage, totalPoke, paginate}) =>{

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
        pageNumber.push(i)
        
    }
    return(
        <nav className="cont-pagination">
            <ul>
                {
                    pageNumber.map(number =>(
                        <li key={number} className="item-pagination">
                            <a onClick={()=>paginate(number)} href="#/pokedex/">
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;