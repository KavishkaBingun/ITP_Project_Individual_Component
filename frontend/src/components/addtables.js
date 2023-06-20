import React,{useState, useRef} from "react";//the imported "useState" hook is used to define a state variable in a functional component, which can be used to store and update the state of the component
import axios from "axios"
import AddTableImg from "../images/booktable.jpg";
import AddPaymentImg from "../images/payment.jpeg";
import '../style.css';
import Header from "./Header";
import Footer from './Footer';


export default function Inserttables(){
  //first argument passed to the "useState" hook is the initial value of the state variable, in this case an empty string ("")
  //The second argument returned by the "useState" hook is a "set" function that can be used to update the state variable
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [nic, setNIC] = useState("");
  
    const [noOfTables, setnoOfTables] = useState("");
    const [type, setType] = useState("");
    const [decoration, setDecoration] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
   
    const [payment, setPayment] = useState("");
    const [showForm, setShowForm] = useState(false);

    const formRef1 = useRef();
    const formRef2 = useRef(); // create a reference to the form

    function senddata(e){//when user submit the form senddata function is called
        e.preventDefault();

        
        
//creates a new object named "newTable" containing the current values of the state variables
        const newTable ={
            name,
            email,
            phone,
            address,
            nic,
          
            noOfTables,
            type,
            decoration,
            date,
            time,
          
            payment: calculatePayment()
        }
        //avoid submitting the form without filling payment form
        if(document.getElementById("card-number").value === "" || 
				document.getElementById("expiration-date").value === "")
				 {
				alert("Please fill out payment information.");
				return;
			}
      //sends a POST request to the backend API using the Axios library  
        axios.post("http://localhost:8070/tables/add",newTable)
        .then(()=>{alert(" Table added");
        formRef1.current.reset();
        formRef2.current.reset(); // reset the form after successful submission
        //after adding the table successfully, all the state variables are reset to their initial empty values
                setName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setNIC("");
                
                setnoOfTables("");
                setType("");
                setDecoration("");
                setDate("");
                setTime("");
           
               
                
              })
        .catch((err)=>{alert(err)})

    }

 // adjust price based on selected package type
 function calculatePayment() {
  let pricepertable = 0;
  let decorationprice = 0;

  if (type === "birthdayParty") {
    pricepertable = 2000;
    decorationprice = 5000;
  } else if (type === "private") {
    pricepertable = 1000;
    decorationprice = 5000;
  } else if (type === "anniversaryParty") {
    pricepertable = 2000;
    decorationprice = 5000;
  } else if (type === "lunch") {
    pricepertable = 500;
    decorationprice = 1000;
  } else if (type === "dinner") {
    pricepertable = 600;
    decorationprice = 1000;
  } else if (type === "wedding") {
    pricepertable = 10000;
    decorationprice = 50000;
  }

  let totalprice = noOfTables * pricepertable;
  if (decoration === "yes") {
    totalprice += decorationprice;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR", // set the currency code here
  });

  return formatter.format(totalprice);
}


  
    const handleClick = () => {
      setShowForm(!showForm);
    }









   



    return(
      

        <div>
          <Header/>
          <div className="container" style={{display:"flex"}}>
          <div className="col">
                
    <div className="addFinanceImg">
  <img 
    src={AddTableImg} 
    alt="booktable" 
    style={{height:'300px' , width:'600px', marginTop:'50px', marginLeft:'1px'}}
    aria-label="Image of a table being booked"
  />
  <p className="paragraph">&nbsp; "Please fill out the following form to make a reservation.
 We require your full name,&nbsp; &nbsp;email address, and phone number in order to confirm your reservation.
  Please also&nbsp; &nbsp;indicate the date and time of your desired reservation, as well as the number of&nbsp; &nbsp;guests in your party.
  If you have any special requests or dietary restrictions, please&nbsp; &nbsp;let us know in the comments section. We look forward to hosting you!"&nbsp;</p>
</div>

<div className="addFinanceImg">
  <img 
    src={AddPaymentImg} 
    alt="payment" 
    style={{height:'300px' , width:'600px', marginTop:'100px', marginLeft:'1px'}}
    aria-label="Image of a table being booked"
  />
  <p className="paragraph">&nbsp; "Please fill out the following form to make a reservation.
 We require your full name,&nbsp; &nbsp;email address, and phone number in order to confirm your reservation.
  Please also&nbsp; &nbsp;indicate the date and time of your desired reservation, as well as the number of&nbsp; &nbsp;guests in your party.
  If you have any special requests or dietary restrictions, please&nbsp; &nbsp;let us know in the comments section. We look forward to hosting you!"&nbsp;</p>
</div>
</div>




      <div className="container" style={{left:'90%'}}>
      <form ref={formRef1} onSubmit={senddata} id="reservation-form" >
      <div>
      <h1 style={{color:"#00BFFF"}}>Make New Reservation</h1>

      </div>
        
        <div className="mb-3">
          <label for="name" className="form-label">Name </label><br></br>
          <input type="text" className="form-control" id="name" placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value);}} required></input>
   
         
          
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value);}} required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
          
        </div>
        <div className="mb-3">
          <label for="tel" className="form-label">Tel No</label>
          <input  type="tel" className="form-control" id="phone" placeholder="enter your mobile number" onChange={(e)=>{setPhone(e.target.value);}}required pattern="^[0-9]{10}$"></input>
          
        </div>
        <div className="mb-3">
          <label for="text" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your addredd" onChange={(e)=>{setAddress(e.target.value);}}required></input>
          
        </div>
        <div className="mb-3">
          <label for="nic" className="form-label">NIC Number</label>
          <input type="nic" className="form-control" id="nic" placeholder="Enter Your NIC Number" onChange={(e)=>{setNIC(e.target.value);}} required pattern="^[0-9]{9}[vVxX]$"></input>
          
        </div>

        <div className="mb-3">
          <label for="number" className="form-label">No of tables</label>
          <input type="number" className="form-control" id="noOfTables" placeholder="Enter number of tables" onChange={(e)=>{setnoOfTables(e.target.value);}}required></input>
          </div>
          <div className="mb-3">
          <label for="type" className="form-label">Package Type</label>
          <select className="form-control" id="type" onChange={(e)=>{setType(e.target.value);}}required>
              <option selected value="" disabled>--Please choose an option--</option>
              <option value="birthdayParty">Birthday Party</option>
              <option value="private">Private</option>
              <option  value="anniversaryParty">Anniversary party</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="wedding">Wedding</option>
          </select>
          
          
        </div>
          <div className="mb-3">
          <label for="decoration" className="form-label">Do you prefer decorations?</label>
          <select className="form-control" id="decoration" onChange={(e)=>{setDecoration(e.target.value);}}required>
              <option selected value="" disabled>--Please choose an option--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            
          </select>
        </div>
        <div className="mb-3">
          <label for="date" className="form-label">Date</label>
          <input
    type="date"
    className="form-control"
    id="date"
    min={new Date().toISOString().split("T")[0]} // set the min attribute to current date
    onChange={(e) => {
      setDate(e.target.value);
    }}
    required
  />
          </div>
          <div className="mb-3">
          <label for="time" className="form-label">Time</label>
          <input type="time" className="form-control" id="time"  onChange={(e)=>{setTime(e.target.value);}}required></input>
          </div>




          <div className="mb-3" >
            {/* display the result in a text box */}
            <label className="form-label">Your Total Payment : </label>
<input for="text" type="text" name="payment" id ="payment" value={calculatePayment()}   onChange={(e)=>{setPayment(e.target.value);}}/><br></br>

          </div>


          
        


                <div>
      <button type="button" onClick={handleClick} className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'250px',color:'white'}}><i className="fa fa-money"></i> Enter Payment Details</button>
      {showForm && (
        <div className="container">
        <form id="payment-form" ref={formRef2}>
          <div> 
            <br></br>         
          <label htmlFor="name">Card Number:</label><br />
          <input type="text" id="card-number" name="number" required /></div>

          
          <div>
          <label htmlFor="email">Card holder's name:</label><br />
          <input type="text" id="expiration-date" name="name" required/>
          </div>
          <div>
          <label htmlFor="email">Expiry Date:</label> <br />
          <input type="month" id="expiration-month" name="month" min={new Date().toISOString().slice(0, 7)} required/>

          </div>
          <div>
          <label htmlFor="email">CVV:</label> <br />
          <input type="text" id="expiration-month" name="cvv" pattern="^[0-9]{3}$" required/>

          </div> 
        </form>
        </div>
      )}
    </div>
     
        <button type="submit" className ="logout-btn btn btn-outline-info me-2 align-self-end" id="make-reservation-btn" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'200px',color:'white'}}><i className="fa fa-save"></i> Make Reservation</button >&nbsp;&nbsp;&nbsp;
      
        <a className ="logout-btn btn btn-outline-info me-2 align-self-end" href="/view" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'200px',color:'white'}}>
                    <i class="fa fa-table"></i>&nbsp;View All Reservations
                </a>

                
              
                
      </form>



      </div>

      
     

      
      
      
      
        
      </div>
      <Footer/>
        </div>
      
   
      
      
      
      
    )
    
}


