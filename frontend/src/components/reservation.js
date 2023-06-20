import React from "react";
import '../reservations.css';
import lunch from '../images/lunch.jpg';
import dinner from '../images/dinner.jpg';
import birthday from '../images/birthday.jpg';
import anniversary from '../images/anniversary.jpg';
import Private from '../images/private.jpg';
import Header from "./Header";
import Footer from './Footer';

function Reserveation(){
    return(

        <div>
            <Header/>
            <section className="common_view">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                <h3>Reservation Packages</h3>
                <div >
                    <div id="block1">
                    <h5>Lunch</h5>
                    <img src={lunch} alt="Image 1" width={500} height={400}/>
                    
                    <p>4 Person per table</p>
                    <p>Price per table - 500/=</p>
                    <p>Price for decorations - 1000/=</p>
                    
                    <a className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}} href="/add">
                    <i className="far fa-plus"></i>&nbsp;Make new Reservation
                </a>


                    </div> 
                    <div id="block2">
                    <h5>Dinner</h5>
                    <img src={dinner} alt="Image 2" width={500} height={400}/>
                    <p>4 person per table</p>
                    <p>Price per table - 600/=</p>
                    <p>Price for decorations - 1000/=</p>
                    
                    <a className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}} href="/add">
                    <i className="far fa-plus"></i>&nbsp;Make new Reservation
                </a>

                    </div>

                    <div id="block3">
                    <h5>Birthday Party</h5>
                    <img src={birthday} alt="Image 3" width={500} height={400} />
                    <p>8 Person per table</p>
                    <p>Price per table - 2000/=</p>
                    <p>Price for decorations - 5000/=</p>
                    <p>Price for Birthday Cake - 5000/=</p>
                    
                    <a className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}} href="/add">
                    <i className="far fa-plus"></i>&nbsp;Make new Reservation
                </a>

                    </div>

                    <div id="block4">
                    <h5>Anniversary Party</h5>
                    <img src={anniversary} alt="Image 4" width={500} height={400}/>                    
                    <p>4 Person per table</p>
                    <p>Price per table - 1000/=</p>
                    <p>Price for decorations - 10000/=</p>
                    
                    <a className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}} href="/add">
                    <i className="far fa-plus"></i>&nbsp;Make new Reservation
                </a>

                    </div>
                    <div id="block5">
                    <h5>Private</h5>
                    <img src={Private} alt="Image 5" width={500} height={400}/>
                    <p>2 Person per table</p>
                    <p>Price per table - 1000/=</p>
                    <p>Price for special decorations - 5000/=</p>
                    
                    <a className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}} href="/add">
                    <i className="far fa-plus"></i>&nbsp;Make new Reservation
                </a>

                    </div>
                    </div>
                    

                    

                    

                    

                    

                </div>
            </div>
        </div>

     
        <div>
        <script>

</script>
        </div>
        
    </section>
    <Footer/>
        </div>
      
    )

}



export default Reserveation;


