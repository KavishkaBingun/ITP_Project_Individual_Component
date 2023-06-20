import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";//Import the SweetAlert2 library for displaying alerts.

export default function DeleteTables() {
  const { id } = useParams();//Retrieve the ID parameter from the URL using the useParams hook
  const history = useNavigate();//Get the history object from the useHistory hook to navigate back to the previous page.

  function deleteTable() {// Define the deleteTable function that will make the HTTP DELETE request to delete the table record with the specified ID.
    axios
      .delete(`http://localhost:8070/tables/delete/${id}`)
      .then(function () {
        Swal.fire({
          icon: "success",
          title: "Table data deleted",
          confirmButtonText: "OK",
        }).then(() => {//If the request is successful, show a success message using SweetAlert2 and navigate back to the previous page using the history.goBack() method.
          history.goBack();
        });
      })
      .catch(function (err) {//If an error occurs, show an error message using SweetAlert2 and display the error message.
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          confirmButtonText: "OK",
        });
      });
  }

  deleteTable(); //Call the deleteTable function to initiate the delete operation
}
