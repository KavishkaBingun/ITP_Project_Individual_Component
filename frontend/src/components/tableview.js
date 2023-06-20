import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
//import Header from "./components/Header";
import Footer from './Footer';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {//sets the initial state of tables to an empty array
      tables: [],
      searchQuery: "", // state property to hold the search query
      filteredTables: [], // Add filteredTables to the initial state
    };
  }

  componentDidMount() {
    this.retrieveTables();
  }

  retrieveTables() {//retrieveTables() function to retrieve all the tables from the database using an axios GET request
    axios.get("http://localhost:8070/tables/tables").then((res) => {
      if (res.data.success) {
        this.setState({//updates the "tables" state with the data returned from the server
          tables: res.data.existingTables,
          filteredTables: res.data.existingTables, // Initialize filteredTables with all tables
        });
        console.log(this.state.tables);
      }
    });
  }
//search
handleSearchArea = (e) => {
  const searchQuery = e.target.value.toLowerCase(); // extract the value of the search input field
  const filteredTables = this.state.tables.filter((table) =>
    (table.nic && table.nic.toLowerCase().includes(searchQuery)) ||
    (table.date && table.date.toLowerCase().includes(searchQuery))
  );
  this.setState({
    searchQuery: searchQuery, //store the value that extracted inside searchQuery
    filteredTables: filteredTables, // Update the state of filteredTables
  });
};






generateReport = () => {
  const { filteredTables, searchQuery } = this.state;
  const reportData = filteredTables.map((table) => ({
    name: table.name,
    email: table.email,
    phone: table.phone,
    address: table.address,
    nic: table.nic,
    noOfTables: table.noOfTables,
    type: table.type,
    decoration: table.decoration,
    date: table.date,
    time: table.time,
    payment: table.payment,
  }));

  const reportWindow = window.open();
  reportWindow.document.write(
    "<html><head><title>Report</title><style>table {border-collapse: collapse;} th, td {border: 1px solid black; padding: 8px;}</style></head><body>"
  );
  reportWindow.document.write(`<h1> ${searchQuery} </h1>`);
  reportWindow.document.write("<h2>Reservation Report</h2>");
  reportWindow.document.write("<table>");
  reportWindow.document.write(
    "<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Mobile number</th><th>Address</th><th>NIC</th><th>Number of Tables</th><th>Package Type</th><th>Decorations</th><th>Reservation Date</th><th>Reservation Time</th><th>Payment</th></tr></thead><tbody>"
  );

  reportData.forEach((table, index) => {
    reportWindow.document.write(
      `<tr>
         <td>${index + 1}</td>
         <td>${table.name}</td>
         <td>${table.email}</td>
         <td>${table.phone}</td>
         <td>${table.address}</td>
         <td>${table.nic}</td>
         <td>${table.noOfTables}</td>
         <td>${table.type}</td>
         <td>${table.decoration}</td>
         <td>${table.date}</td>
         <td>${table.time}</td>
         <td>${table.payment}</td>
       </tr>`
    );
  });

  reportWindow.document.write("</tbody></table>");
  reportWindow.document.write("</body></html>");
  reportWindow.document.close();
  reportWindow.print();
};

              render() {
                const { searchQuery, filteredTables } = this.state;
                return (
                  <div>
                    <Header/>
                    <div className="container">
                      <p>All Reservations</p>
                
                      <div className="col-lg-3 mt-2 mb-2">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search here"
                          name="searchQuery"
                          value={searchQuery}
                          onChange={this.handleSearchArea}
                        ></input>
                      </div>
                      
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile number</th>
                            <th scope="col">Address</th>
                            <th scope="col">NIC Number</th>
                          
                            <th scope="col">Number of tables</th>
                            <th scope="col">Package type</th>
                            <th scope="col">Do you prefer Decorations?</th>
                            <th scope="col">Reservation Date</th>
                            <th scope="col">Reservation Time</th>
                      
                            <th scope="col">Payment</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {filteredTables.map((table, index) => (
                            <tr key={table._id}>
                              <th scope="row">{index + 1}</th>
                              <td>{table.name}</td>
                              <td>{table.email}</td>
                              <td>{table.phone}</td>
                              <td>{table.address}</td>
                              <td>{table.nic}</td>
                      
                              <td>{table.noOfTables}</td>
                              <td>{table.type}</td>
                              <td>{table.decoration}</td>
                              <td>{table.date}</td>
                              <td>{table.time}</td>
                        
                              <td>{table.payment}</td>

                              <td>
                                <a className="btn btn-warning" href={"/update/" + table._id}>
                                  <i className="fas fa-edit"></i> Edit
                                </a>
                                <a className="btn btn-danger" href={"/delete/" + table._id}>
                                  <i className="fas fa-trash-alt"></i> Delete
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                
                      <button className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'180px',color:'white'}} onClick={this.generateReport} ><i class="fa fa-file"></i> Generate Report</button> 
                
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                    <Footer/>
                  </div>
                );
              }}
export default Table;