import React, { useState ,useEffect} from "react";
import "./App.css";
import orderImg from "./images/order-img.jpg";
import axios from "axios";
// import { Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField, TextareaAutosize } from '@mui/material';
import { useEmail } from './EmailContext';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderFood() {
  const { email } = useEmail();

  // const [newOrder, setNewOrder] = useState({
  //   number: "",
  //   foodName: "",
  //   Address: ""
  // });
  // const [order, setOrder] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    // alert("Your Order will be taken !");
    setOpen(false);
  };

  // const handleSubmit = async (e) => {
  //   if (!newOrder.number || !newOrder.Address) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3000/talkOrder", newOrder);
  //     fetchOrder();
  //     setNewOrder({
  //       number: "",
  //       foodName: "",
  //       Address: ""
  //     });
  //   } catch (error) {
  //     console.log("Error submitting order:", error);
  //   }
  // };
  // const fetchOrder = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/getAllOrders");
  //     setOrder(response.data);
  //   } catch (error) {
  //     console.log("not get the detail", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchOrder();
  // }, []);

  // const sendOrderConfirmationEmail = (orderData) => {
  //   // Make a POST request to the server to send an email
  //   axios
  //     .post("http://localhost:3000/send-email", {
  //       to: orderData.Email,
  //       subject: "Order Confirmation",
  //       html: `
  //   <html>
  //     <head>
  //       <style>
  //         table {
  //           font-family: Arial, sans-serif;
  //           border-collapse: collapse;
  //           width: 100%;
  //         }
  //         th, td {
  //           border: 1px solid #dddddd;
  //           text-align: left;
  //           padding: 8px;
  //         }
  //         th {
  //           background-color: #f2f2f2;
  //         }
  //       </style>
  //     </head>
  //     <body>
  //       <p>Order Details:</p>
  //       <table>
  //         <tr>
  //           <th>Food</th>
  //           <td>${orderData.FoodName}</td>
  //         </tr>
  //           <th>Address</th>
  //           <td>${orderData.Address}</td>
  //         </tr>
  //       </table>
  //     </body>
  //   </html>
  // `, // You can customize the email content as needed
  //     })
  //     .then((response) => {
  //       console.log("Email sent successfully", response);
  //     })
  //     .catch((error) => {
  //       console.log("Failed to send email", error);
  //     });
  // };
  
  const [number, setNumber] = useState('');
  const [foodName, setFoodName] = useState('');
  const [Address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(''),
    setFoodName(''),
    setAddress('')

    try {
      const response = axios.post('http://localhost:3000/talkOrder', {
        email,
        number,
        foodName,
        Address // Note: 'Address' is uppercase here to match the schema
      });
    // Open the dialog upon successful submission
    setOpen(true);
      console.log('Order created:', response.data);
      // You can perform additional actions after the order is successfully created
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle error
    }
  };

  return (
    <div className="order fb sec" id="order">
      {/* <Fade bottom> */}
        <h1 className="heading">
          <span>order</span> now
        </h1>

      {/* </Fade> */}
    <div className="row">
        {/* <Fade left> */}
          <div className="image">
            <img src={orderImg} alt="" />
          </div>
        {/* </Fade> */}
        {/* <Fade right> */}
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
        {email && <h3>Email: {email}</h3>}
            <TextField
              className="input"
              type="text"
              label="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              fullWidth
            />
            <TextField
              className="input"
              type="text"
              label="Food Name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              fullWidth
            />
            <TextField
              className="input"
              label="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              required
              fullWidth
              multiline
              rows={4}
            />
          </div>
          <Button
            className="btn"
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Order Now
          </Button>
        </form>
        {/* </Fade> */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{ color: "black", fontSize: "20px", fontWeight: "400" }}
          >
            {"Check Your Orders:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ color: "black", fontSize: "15px" }}
            >
              Your Order is submitted successfully !
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ fontSize: "10px" }}>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    </div>
  );
}

export default OrderFood;
