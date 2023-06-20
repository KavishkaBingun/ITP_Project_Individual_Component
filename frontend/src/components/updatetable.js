import React, { useState, useEffect } from 'react';
import axios from 'axios';
import update from "../images/updateres.jpg";
import '../style.css';
import { useParams, useNavigate } from 'react-router-dom';

import Header from "./Header";
import Footer from './Footer';

const UpdateTable = (props) => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [tables, setTables] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    nic: '',
    noOfTables: '',
    type: '',
    decoration: '',
    date: '',
    time: '',
    payment: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/tables/get/${id}`);
        const data = response.data.tables;
        setTables(data);
      } catch (error) {
        console.log(error);
        setError('Error retrieving table data');
      }
    };


    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTables((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTables = {
        ...tables,
        payment: calculatePayment() // Update the payment value before sending the request
      };
      await axios.put(`http://localhost:8070/tables/update/${id}`, tables);
      alert('Reservation updated successfully');
      navigate(-1);
    } catch (error) {
      console.log(error);
      setError('Error updating reservation');
    }
  };


  function calculatePayment() {
    let pricepertable = 0;
    let decorationprice = 0;
  
    if (tables.type === "birthdayParty") {
      pricepertable = 2000;
      decorationprice = 5000;
    } else if (tables.type === "private") {
      pricepertable = 1000;
      decorationprice = 5000;
    } else if (tables.type === "anniversaryParty") {
      pricepertable = 2000;
      decorationprice = 5000;
    } else if (tables.type === "lunch") {
      pricepertable = 500;
      decorationprice = 1000;
    } else if (tables.type === "dinner") {
      pricepertable = 600;
      decorationprice = 1000;
    } else if (tables.type === "wedding") {
      pricepertable = 10000;
      decorationprice = 50000;
    }
  
    let totalprice = tables.noOfTables * pricepertable;
    if (tables.decoration === "yes") {
      totalprice += decorationprice;
    }
  
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "LKR", // set the currency code here
    });
  
    return formatter.format(totalprice);
  }

  useEffect(() => {
    setTables((prevState) => ({
      ...prevState,
      payment: calculatePayment() // Update the payment value initially
    }));
  }, [tables.type, tables.decoration, tables.noOfTables]);
  

  return (
    <div>
      <Header/>
      <div className="container" style={{ display: "flex" }}>
      <div className="updateFinanceImg">
        <img
          src={update}
          alt="updateres"
          style={{ height: '380px', width: '600px', marginTop: '50px', marginLeft: '1px' }}
          aria-label="Image of a table being booked"
        />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className="container" style={{ left: "80%" }}>
        <h1 className='h3 mb-3 font-weight-normal'>Edit post</h1>
        <form className='needs-validation' onSubmit={onSubmit}>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label className="form-label" style={{ marginBottom: '5px' }}>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              value={tables.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                value={tables.email}
                onChange={handleInputChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>Tel no</label>
              <input
                type='tel'
                className='form-control'
                name='phone'
                value={tables.phone}
                onChange={handleInputChange}
                required
                pattern="^[0-9]{10}$"
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>Address</label>
              <input
                type='text'
                className='form-control'
                name='address'
                value={tables.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>NIC Number</label>
              <input
                type='text'
                className='form-control'
                name='nic'
                value={tables.nic}
                onChange={handleInputChange}
                required
                pattern="^[0-9]{9}[vVxX]$"
              />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>No of Tables</label>
              <input
                type='number'
                className='form-control'
                name='noOfTables'
                value={tables.noOfTables}
                onChange={handleInputChange}
                required
              />

            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
          <label className="form-label" for="type" style={{ marginBottom: '5px' }}>Package Type</label>
          <select className="form-control" name='type' value={tables.type}   onChange={handleInputChange}required>
              <option selected value="" disabled>--Please choose an option--</option>
              <option value="birthdayParty">Birthday Party</option>
              <option value="private">Private</option>
              <option  value="anniversaryParty">Anniversary party</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="wedding">Wedding</option>
          </select>
          
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label for="decoration" className="form-label" style={{ marginBottom: '5px' }}>Do you prefer decorations?</label>
          <select className="form-control" type='text' name='decoration' value={tables.decoration} onChange={handleInputChange}required>
              <option selected value="" disabled>--Please choose an option--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            
          </select>
        </div>
        <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>Date</label>
              <input
                type='date'
                className='form-control'
                name='date'
                value={tables.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />

            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>Time</label>
              <input
                type='time'
                className='form-control'
                name='time'
                value={tables.time}
                onChange={handleInputChange}
                required
              />

            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label className="form-label" style={{ marginBottom: '5px' }}>Your Payment</label>
              <input for="text" type="text" name="payment" id ="payment" value={calculatePayment()}   /><br></br>
              </div>


          {/* Rest of the form fields */}
          {/* ... */}
          <button
            className="logout-btn btn btn-outline-info me-2 align-self-end"
            style={{ background: 'linear-gradient(#F7971E,#FFD200)', width: '100px', color: 'white' }}
            type='submit'
          >
            <i className='far fa-check-square'></i>
            &nbsp; Submit
          </button>
          <a
            className="logout-btn btn btn-outline-info me-2 align-self-end"
            style={{ background: 'linear-gradient(#F7971E,#FFD200)', width: '100px', color: 'white' }}
            href="/view"
          >
            <i className="fa fa-caret-left"></i> Back
          </a>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UpdateTable;
