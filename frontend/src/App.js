import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';







//Reservation
import Inserttables from './components/addtables';
import Table from './components/tableview';

import Reserveation from './components/reservation';
import UpdateTable from './components/updatetable';
import DeleteTables from './components/deletetable';
import Cards from './components/ReservationCrient/Cards';




function App() {
  return (
    <Router>
        <div>
          
          <Routes>

            {/*Reservation*/ }
            <Route path='/add' element={<Inserttables/>} />
            <Route path='/view' element={<Table/>} />
           
            <Route path='/common_view' element={<Reserveation/>} />
            <Route path="/update/:id" element={<UpdateTable/>}></Route>
            <Route path='/delete/:id' element={<DeleteTables/>} />
            <Route path="/" element={<Cards/>}></Route>
            
          </Routes>
          
          
		  
        </div>
      </Router>
  );
}

export default App;
