import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  Modal,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useEmail } from './EmailContext'; // Import useEmail hook


function History() {
  const theme = useTheme();
  const [orders, setOrders] = useState([]);
  const [reserves, setReserves] = useState([]);
  // const [searchOrder, setSearchOrder] = useState("");
  const [editFormData, setEditFormData] = useState({
    orderid: "",
    number: "",
    foodName: "",
    Address: "",
  });
  const { email } = useEmail(); // Get the currently logged-in user's email
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const fetchOrders = async () => {
    try {
      const response = await axios .get(`http://localhost:3000/getOrdersByEmail/${email}`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchreserves = async () => {
    try {
      const response = await axios .get(`http://localhost:3000/getReserveByEmail/${email}`);
      setReserves(response.data);
    } catch (error) {
      console.error("Error fetching reserves:", error);
    }
  };

  useEffect(() => {
    fetchreserves();
  }, []);

  // const handleSearch = () => {
  //   axios
  //     .get(`http://localhost:3000/getOrdersByEmail/${searchOrder}`)
  //     .then((response) => {
  //       setOrders(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching orders details:", error);
  //     });
  // };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/deleteOrder/${id}`)
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  const handleEdit = (order) => {
    setEditFormData({
      orderid: order._id,
      number: order.number,
      foodName: order.foodName,
      Address: order.Address,
    });
    setIsEditFormOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/editOrder/${editFormData.orderid}`, editFormData)
      .then(() => {
        const updatedOrders = orders.map((order) => {
          if (order._id === editFormData.orderid) {
            return {
              ...order,
              number: editFormData.number,
              foodName: editFormData.foodName,
              Address: editFormData.Address,
            };
          }
          return order;
        });
        setOrders(updatedOrders);
        handleEditFormClose();
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  const handleEditFormClose = () => {
    setIsEditFormOpen(false);
    setEditFormData({
      orderid: "",
      number: "",
      foodName: "",
      Address: "",
    });
  };

  return (
    <Box sx={{ paddingTop:"100px"}}>
      <Typography sx={{ color: "black", fontSize: "30px", margin: "5px" }}>
        History:
      </Typography>
      {/* <TextField
        variant="outlined"
        label="Enter Number"
        value={searchOrder}
        onChange={(e) => setSearchOrder(e.target.value)}
        sx={{ width: "90%",margin:"10px" }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          float: "right",
          marginRight: "10%",
          marginTop: "5px",
          fontSize: "15px",
          marginBottom:"5px"
        }}
      >
        Search
      </Button>
      <Divider sx={{margin:"8% 0%"}} /> */}
        <h2 style={{padding:"10px 10px"}} >FoodOrder history:</h2>
      <Box sx={{ padding: "0 50px", fontSize: "20px" ,marginBottom:"10%"}}>
        <Grid container spacing={2}>
          {orders.length > 0 ? (
            orders.map((order) => (
              <Card
                sx={{
                  margin: "5px 10px",
                  boxShadow: "3px 2px 5px",
                  backgroundColor: "whitesmoke",
                  fontSize: "20px",
                }}
              >
                <CardContent>
                 
                  {/* <Divider sx={{ margin: "5px" }} /> */}
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>Number :</b> {order.number}
                  </Typography>
                  <Divider sx={{ margin: "5px" }} />
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>FoodName :</b> {order.foodName}
                  </Typography>
                  <Divider sx={{ margin: "5px" }} />
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>Address :</b> {order.Address}
                  </Typography>
                </CardContent>
                <EditIcon
                  sx={{ color: "blue", marginLeft: "150px", fontSize: "23px",display: { xs: "block", sm: "none" },float:"left" }}
                  onClick={() => handleEdit(order)}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    marginLeft: "350px",
                    fontSize: "15px",
                    marginBottom: "2px",
                    display: { xs: "none", sm: "block" },
                    float:"left"
                  }}
                  onClick={() => handleEdit(order)}
                >
                  Edit
                </Button>
                <DeleteOutlineIcon
                  sx={{
                    color: "red",
                    float: "right",
                    fontSize: "23px",
                    marginLeft: "5px  ",
                    display: { xs: "block", sm: "none" }
                  }}
                  onClick={() => handleDelete(order._id)}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    float: "right",
                    fontSize: "15px",
                    margin: "2px",
                    display: { xs: "none", sm: "block" }
                  }}
                  onClick={() => handleDelete(order._id)}
                >
                  Cancel
                </Button>
              </Card>
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{ margin: "10px", color: "black", fontSize: "20px" }}
            >
              No Orders are available
            </Typography>
          )}
        </Grid>
      </Box>

      <h2 style={{padding:"10px 10px"}} >Reserve_Table history:</h2>
      <Box sx={{ padding: "0 50px", fontSize: "20px" ,marginBottom:"40%"}}>
        <Grid container spacing={2}>
          {reserves.length > 0 ? (
            reserves.map((reserve) => (
              <Card
                sx={{
                  margin: "5px 10px",
                  boxShadow: "3px 2px 5px",
                  backgroundColor: "whitesmoke",
                  fontSize: "20px",
                }}
              >
                <CardContent>
                 
                  {/* <Divider sx={{ margin: "5px" }} /> */}
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>Name :</b> {reserve.name}
                  </Typography>
                  <Divider sx={{ margin: "5px" }} />
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>Number :</b> {reserve.number}
                  </Typography>
                  <Divider sx={{ margin: "5px" }} />
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>No.of.Peoples :</b> {reserve.numberOfPeople}
                  </Typography>
                  <Divider sx={{ margin: "5px" }} />
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>Date :</b> {reserve.date}
                  </Typography>
                  <Divider sx={{ margin: "5px" }} />
                  <Typography sx={{ fontSize: "15px" }}>
                    <b>Time :</b> {reserve.time}
                  </Typography>
                </CardContent>
                <EditIcon
                  sx={{ color: "blue", marginLeft: "150px", fontSize: "23px",display: { xs: "block", sm: "none" },float:"left" }}
                  onClick={() => handleEdit(reserve)}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    marginLeft: "350px",
                    fontSize: "15px",
                    marginBottom: "2px",
                    display: { xs: "none", sm: "block" },
                    float:"left"
                  }}
                  onClick={() => handleEdit(reserve)}
                >
                  Edit
                </Button>
                <DeleteOutlineIcon
                  sx={{
                    color: "red",
                    float: "right",
                    fontSize: "23px",
                    marginLeft: "5px  ",
                    display: { xs: "block", sm: "none" }
                  }}
                  onClick={() => handleDelete(reserve._id)}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    float: "right",
                    fontSize: "15px",
                    margin: "2px",
                    display: { xs: "none", sm: "block" }
                  }}
                  onClick={() => handleDelete(reserve._id)}
                >
                  Cancel
                </Button>
              </Card>
            ))
          ) : (
            <Typography
              variant="body1"
              sx={{ margin: "10px", color: "black", fontSize: "20px" }}
            >
              No reserves are available
            </Typography>
          )}
        </Grid>
      </Box>

      <Modal
        open={isEditFormOpen}
        onClose={handleEditFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "500px",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h6">Edit Order</Typography>
          <form onSubmit={handleEditSubmit}>

            <TextField
              label="Number"
              fullWidth
              margin="normal"
              name="Number"
              value={editFormData.number}
              onChange={(e) =>
                setEditFormData({ ...editFormData, number: e.target.value })
              }
            />

            <TextField
              label="FoodName"
              fullWidth
              margin="normal"
              name="FoodName"
              value={editFormData.foodName}
              onChange={(e) =>
                setEditFormData({ ...editFormData, foodName: e.target.value })
              }
            />

            <TextField
              label="Address"
              fullWidth
              margin="normal"
              name="Address"
              value={editFormData.Address}
              onChange={(e) =>
                setEditFormData({ ...editFormData, Address: e.target.value })
              }
            />
            {/* Add similar TextField components for other fields */}
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              sx={{ marginBottom: "5px", float: "right" }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleEditFormClose}
              sx={{ marginBottom: " 5px", float: "right", marginRight: "5px" }}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Modal>
    </Box>
  );
}

export default History;
