import React,{Component} from 'react';
import Card from './cardsUI';
import './pagereservation.css';
import lunch from '../../images/lunch.jpg';
import dinner from './../../images/dinner.jpg';
import birthday from './../../images/birthday.jpg';
import anniversary from './../../images/anniversary.jpg';
import Private from './../../images/private.jpg';
import wedding from './../../images/wedding.jpeg';

class Cards extends Component {

    
    render(){

      
        return (
            
            
            <div className="container" >
                <br></br>

              
            




                <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <h4 className='tables'>Tables for your special events</h4>
                
                    <div className="col-md-4" style={{ position: 'relative', top: '10px', left: '8px' }}>
                    <Card  imgsrc={lunch} title='Lunch' 
                    text='4 Person per table'
                    text1='Price per table - 500/=' 
                    text2='Price for decorations - 1000/=' >
             
                    </Card>
                    </div>
                    
                    <div className="col-md-4" style={{ position: 'relative', top: '10px', left: '30px' }}>
                        <Card  imgsrc={dinner} title='Dinner' 
                        text='4 person per table'
                        text1='Price per table - 600/='
                        text2='Price for decorations - 1000/='>
                       
                    </Card>
                    </div>
                    <div className="col-md-4" style={{ position: 'relative', top: '10px', left: '50px' }}>
                        <Card imgsrc={Private} title='Private' 
                        text='2 Person per table'
                        text1='Price per table - 1000/='
                        text2='Price for special decorations - 5000/='/>
                    </div>
                    <div className="row">
                    <h4 className='hall'>Hall for your special events</h4>

                    <div className="col-md-4" style={{ position: 'relative', top: '100px', left: '8px' }}>
                        <Card imgsrc={birthday} title='Birthday Party' 
                        text='8 Person per table'
                        text1='Price per table - 2000/='
                        text2='Price for decorations - 5000/='/>
                    </div>
                   <div className="col-md-4" style={{ position: 'relative', top: '100px', left: '30px' }}>
                        <Card imgsrc={anniversary} title='Anniversary Party' 
                        text='8 Person per table'
                        text1='Price per table - 2000/='
                        text2='Price for decorations - 5000/='/>
                    </div>
                    <div className="col-md-4" style={{ position: 'relative', top: '100px', left: '50px' }}>
                        <Card imgsrc={wedding} title='Wedding' 
                        text='10 Person per table'
                        text1='Price per table - 10000/='
                        text2='Price for decorations - 50000/='/>
                    </div>
                    </div>  
            </div>
            </div>
            </div>
            






            

        );
    }
}

export default Cards;