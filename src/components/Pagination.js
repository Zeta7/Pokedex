import React from "react";
import '../css/StylePagination.css';


const Pagination = ({page, setPage, totalPages, pagesNumber}) =>{
 
//---------------------- change page ----------------------------//
    const paginateLe= () =>{
        setPage(page-1);
        window.scrollTo({ top: 0, behavior: "smooth", });
    }
    const paginateRi= () =>{
        setPage(page+1);
        window.scrollTo({ top: 0, behavior: "smooth", });
    }

    return(
        <>
            <div className="cont-botones-rig-lef">
                <button className="btn1" onClick={paginateLe}  disabled={page <= 1}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <span> {page} / {totalPages} </span>
                <button className="btn2" onClick={paginateRi}  disabled={page >= totalPages}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
            <div className="cont-botones-numeros">
                {
                    pagesNumber.map((pagesN)=>(
                        <button 
                            onClick={()=>setPage(pagesN)}
                            style={(pagesN===page)?{background:"red", color:"white"}:{background:"white", color:"black"}} 
                            key={pagesN}
                        >
                            {pagesN}
                        </button>
                    ))
                }
            </div>
        </>
    );
};

export default Pagination;