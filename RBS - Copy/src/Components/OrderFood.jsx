// import React, { useState ,useEffect} from "react";
// import "./App.css";
// import orderImg from "./images/order-img.jpg";
// import axios from "axios";
// // import { Divider, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import { TextField, TextareaAutosize } from '@mui/material';
// import { useEmail } from './EmailContext';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// function OrderFood() {
//   const { email } = useEmail();

//   // const [newOrder, setNewOrder] = useState({
//   //   number: "",
//   //   foodName: "",
//   //   Address: ""
//   // });
//   // const [order, setOrder] = useState([]);

//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     // alert("Your Order will be taken !");
//     setOpen(false);
//   };

//   // const handleSubmit = async (e) => {
//   //   if (!newOrder.number || !newOrder.Address) {
//   //     alert("Please fill in all required fields.");
//   //     return;
//   //   }
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post("http://localhost:3000/talkOrder", newOrder);
//   //     fetchOrder();
//   //     setNewOrder({
//   //       number: "",
//   //       foodName: "",
//   //       Address: ""
//   //     });
//   //   } catch (error) {
//   //     console.log("Error submitting order:", error);
//   //   }
//   // };
//   // const fetchOrder = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:3000/getAllOrders");
//   //     setOrder(response.data);
//   //   } catch (error) {
//   //     console.log("not get the detail", error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   fetchOrder();
//   // }, []);

//   // const sendOrderConfirmationEmail = (orderData) => {
//   //   // Make a POST request to the server to send an email
//   //   axios
//   //     .post("http://localhost:3000/send-email", {
//   //       to: orderData.Email,
//   //       subject: "Order Confirmation",
//   //       html: `
//   //   <html>
//   //     <head>
//   //       <style>
//   //         table {
//   //           font-family: Arial, sans-serif;
//   //           border-collapse: collapse;
//   //           width: 100%;
//   //         }
//   //         th, td {
//   //           border: 1px solid #dddddd;
//   //           text-align: left;
//   //           padding: 8px;
//   //         }
//   //         th {
//   //           background-color: #f2f2f2;
//   //         }
//   //       </style>
//   //     </head>
//   //     <body>
//   //       <p>Order Details:</p>
//   //       <table>
//   //         <tr>
//   //           <th>Food</th>
//   //           <td>${orderData.FoodName}</td>
//   //         </tr>
//   //           <th>Address</th>
//   //           <td>${orderData.Address}</td>
//   //         </tr>
//   //       </table>
//   //     </body>
//   //   </html>
//   // `, // You can customize the email content as needed
//   //     })
//   //     .then((response) => {
//   //       console.log("Email sent successfully", response);
//   //     })
//   //     .catch((error) => {
//   //       console.log("Failed to send email", error);
//   //     });
//   // };

//   const [number, setNumber] = useState('');
//   const [foodName, setFoodName] = useState('');

//   const [Address, setAddress] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setNumber(''),
//     setFoodName(''),
//     setAddress('')

//     try {
//       const response = axios.post('http://localhost:3000/talkOrder', {
//         email,
//         number,
//         foodName,
//         Address // Note: 'Address' is uppercase here to match the schema
//       });
//     // Open the dialog upon successful submission
//     setOpen(true);
//       console.log('Order created:', response.data);
//       // You can perform additional actions after the order is successfully created
//     } catch (error) {
//       console.error('Error creating order:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="order fb sec" id="order">
//       {/* <Fade bottom> */}
//         <h1 className="heading">
//           <span>order</span> now
//         </h1>

//       {/* </Fade> */}
//     <div className="row">
//         {/* <Fade left> */}
//           <div className="image">
//             <img src={orderImg} alt="" />
//           </div>
//         {/* </Fade> */}
//         {/* <Fade right> */}
//         <form onSubmit={handleSubmit}>
//           <div className="inputBox">
//         {email && <h3>Email: {email}</h3>}
//             <TextField
//               className="input"
//               type="text"
//               label="Number"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               required
//               fullWidth
//             />
//             <TextField
//               className="input"
//               type="text"
//               label="Food Name"
//               value={foodName}
//               onChange={(e) => setFoodName(e.target.value)}
//               fullWidth
//             />
//             <TextField
//               className="input"
//               label="Address"
//               value={Address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               fullWidth
//               multiline
//               rows={4}
//             />
//           </div>
//           <Button
//             className="btn"
//             type="submit"
//             variant="contained"
//             color="primary"
//             style={{ marginTop: '1rem' }}
//           >
//             Order Now
//           </Button>
//         </form>
//         {/* </Fade> */}
//         <Dialog
//           open={open}
//           TransitionComponent={Transition}
//           keepMounted
//           onClose={handleClose}
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <DialogTitle
//             sx={{ color: "black", fontSize: "20px", fontWeight: "400" }}
//           >
//             {"Check Your Orders:"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText
//               id="alert-dialog-slide-description"
//               sx={{ color: "black", fontSize: "15px" }}
//             >
//               Your Order is submitted successfully !
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} sx={{ fontSize: "10px" }}>
//               Done
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>

//     </div>
//   );
// }

// export default OrderFood;

import React, { useState, useEffect } from "react";
import "../App.css";
import orderImg from "../images/order-img.jpg";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField, MenuItem, Typography,Autocomplete } from "@mui/material";
import { useEmail } from "../base/EmailContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderFood() {
  const { email,setEmail } = useEmail();
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [foodItems, setFoodItems] = useState([
    { name: "", quantity: 0, price: 0 },
  ]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    // Mock data for demonstration
    const mockMenuItems = [
      { name: "Biriyani", price: 100 },
      { name: "Veg-Meals", price: 120 },
      { name: "Parota", price: 15 },
    ];
    setMenuItems(mockMenuItems);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      email,
      number,
      Address,
      foodItems,
    };

    // Assuming you have a POST endpoint to handle orders
    axios
      .post("http://localhost:3000/talkOrder", orderData)
      .then((response) => {
        console.log("Order created:", response.data);
        // Send email
        const totalPrice = foodItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const emailData = {
          to: email, // or any other recipient email address
          subject: "New Order Submitted",
          text: "Your order has been successfully submitted.",
          html: `
        <p>Your order has been successfully submitted.</p>
        <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="border-bottom: 1px solid black;">
          <th style="border: 1px solid black; padding: 8px;">Food Name</th>
          <th style="border: 1px solid black; padding: 8px;">Quantity</th>
          <th style="border: 1px solid black; padding: 8px;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${foodItems
          .map(
            (item) => `
          <tr style="border-bottom: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">${item.name}</td>
            <td style="border: 1px solid black; padding: 8px;">${item.quantity}</td>
            <td style="border: 1px solid black; padding: 8px;">₹${item.price}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
      <tfoot>
        <tr>
          <td style="border: 1px solid black; padding: 8px;" colspan="2"><b>Total Price:</b></td>
          <td style="border: 1px solid black; padding: 8px;">₹${totalPrice}</td>
        </tr>
      </tfoot>
    </table>
      `,
        };

        axios
          .post("http://localhost:3000/send-email", emailData)
          .then((res) => {
            console.log("Email sent:", res.data);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        setOpen(true);
        // Reset form fields after successful submission
        setNumber("");
        setAddress("");
        setFoodItems([{ name: "", quantity: 0, price: 0 }]);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };
  const handleAddItem = () => {
    setFoodItems([...foodItems, { name: "", quantity: 0, price: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedfoodItems = [...foodItems];
    updatedfoodItems[index][field] = value;
    // Find the selected menu item
    const selectedItem = menuItems.find((item) => item.name === value);
    // Update the price field of the selected item
    if (selectedItem) {
      updatedfoodItems[index].price = selectedItem.price;
      updatedfoodItems[index].quantity = 1;
    }
    setFoodItems(updatedfoodItems);
  };

  return (
    <div className="order fb sec" id="order">
      <h1 className="heading">
        <span>order</span> now
      </h1>
      <div className="row">
        <div className="image">
          <img src={orderImg} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            {email && <h3 style={{ display: "none" }}>Email: {email}</h3>}
            {(!email || email === '') && (
              <TextField
                className="input"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            )}
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
              label="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              required
              fullWidth
              multiline
              rows={4}
            />
            {foodItems.map((item, index) => (
              <div key={index} style={{ margin: "25px" }}>
                <Autocomplete
                  className="input"
                  options={menuItems.map((menuItem) => menuItem.name)}
                  value={item.name}
                  onChange={(e, newValue) =>
                    handleItemChange(index, "name", newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`Food Name ${index + 1}`}
                      required
                      fullWidth
                    />
                  )}
                />
                <Typography sx={{ padding: "5px 10px", color: "blue" }}>
                  Price: Rs. {item.price}
                </Typography>
                <TextField
                  className="input"
                  type="number"
                  label="Quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(
                      index,
                      "quantity",
                      parseInt(e.target.value)
                    )
                  }
                  required
                  fullWidth
                />
              </div>
            ))}
          </div>
          <Button
            className="btn"
            type="button"
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={handleAddItem}
          >
            Add Food
          </Button>
          <Button
            className="btn"
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem", marginLeft: "1rem" }}
          >
            Order Now
          </Button>
        </form>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Check Your Orders:"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your Order is submitted successfully!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default OrderFood;
