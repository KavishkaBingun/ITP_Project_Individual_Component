import React from "react";
import Chefimg from '../images/chef-image.jpg';
import eatImage from '../images/eat-img.jpg';
import eatImage2 from '../images/eat-img2.jpg';
import reserveImage from '../images/reserve-img.jpg';
import "../styles.css";
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Home(){
    return(
        <div className="">
            <Header/>
            <section className="home" style={{padding:'50px'}}>
                <div className="home-text">
                    <h4 >Benthota Bake House</h4>
                    <h1>Bakery Items with<span> Delicious</span> with<br/>Great menus</h1>
                    <p>We are the benthota bake house and we provide our clients with a variety of menu options.<br/> 
                        We have a staff of chefs, waiter and employees who work with us to ensure that our customers 
                        have a nice and memorable dining experience.</p>

                    <div className="homepage-main-btn">
                        <a href="#" className="hp-btn1">Order Now</a>
                        <a href="#" className="hp-btn2"><span><i class="fa-solid fa-play"></i></span>Read more...</a>
                    </div>
                </div>

                <div className="homepage-img1">
                    <img src={Chefimg} alt=""></img>
                </div>
            </section>

            <div className="menu">
                <div className="menu-heading">
                    <h1>Restaurant Food</h1>
                    <h3>&mdash;Menu&mdash;</h3>
                </div>

                <div className="food-items">
                    <img src={eatImage} alt=""></img>
                    <div className="food-details">
                        <div className="food-details-sub">
                            <h5>Sweets</h5>
                            <h5 className="food-price">$</h5>
                        </div>
                        <p>Most delicious sweets in kandy and best customer service with delivery</p>
                        <button>Order Now</button>
                    </div>
                </div>

                <div className="food-items">
                    <img src={eatImage2} alt=""></img>
                    <div className="food-details">
                        <div className="food-details-sub">
                            <h5>Special</h5>
                            <h5 className="food-price">$</h5>
                        </div>
                        <p>Variety of food menus then customer can choose any food items and enjoy their meal</p>
                        <button>Order Now</button>
                    </div>
                </div>

                <div className="food-items">
                    <img src={reserveImage} alt=""></img>
                    <div className="food-details">
                        <div className="food-details-sub">
                            <h5>Reservations</h5>
                            <h5 className="food-price">$</h5>
                        </div>
                        <p>Reservations can be made through our online platform for your memorable events like b'day parties,weddings,family events etc.</p>
                        <button>Reserve Now</button>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
        

        

        
    )
}