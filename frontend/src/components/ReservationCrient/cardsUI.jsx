import React from "react";

import Cards from "./Cards";


const Card=props =>{  
    return(
        
        <div className="card text-center shadow">    {/*card component*/ } 
                    
                    <div className="overflow">
            
            <img src={props.imgsrc}  className='card-img-top'/>
        </div>    

            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <p className="card-text text-secondary">{props.text1}</p>
                <p className="card-text text-secondary">{props.text2}</p>
                <a className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}} href="/add">
                    <i className="far fa-plus"></i>&nbsp;Make new Reservation
                </a>
            </div>
        
        </div>

    );

}
export default Card;