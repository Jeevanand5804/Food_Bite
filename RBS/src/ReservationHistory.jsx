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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useTheme } from '@mui/material/styles';

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useEmail } from './EmailContext'; // Impo

function ReservationHistory() {
    const [reserves, setReserves] = useState([]);
    const [editReserveForm, setEditReserveForm] = useState({
        name: "",
        number: "",
        numberOfPeople: "",
        date: "",
        time: "",
      });
      const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const { email } = useEmail(); // Get the currently logged-in user's email
  
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
    const handleDelete = (id) => {
        axios
          .delete(`http://localhost:3000/deleteReserve/${id}`)
          .then(() => {
            setReserves((prevreserves) =>
              prevreserves.filter((reserve) => reserve._id !== id)
            );
          })
          .catch((error) => {
            console.error("Error deleting reserve:", error);
          });
      };
    
      const handleEdit = (reserve) => {
        setEditReserveForm({
          reserveid: reserve._id,
          number: reserve.number,
          numberOfPeople: reserve.numberOfPeople,
          date: reserve.date,
          time:reserve.time,
        });
        setIsEditFormOpen(true);
      };
    
      const handleEditSubmit = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:3000/editReserve/${editReserveForm.reserveid}`, editReserveForm)
          .then(() => {
            // Update the reserves state with the edited reserve
            const updatedreserves = reserves.map((reserve) => {
              if (reserve._id === editReserveForm.reserveid) {
                return {
                  ...reserve,
                  number: editReserveForm.number,
                  numberOfPeople: editReserveForm.numberOfPeople,
                  date: editReserveForm.date,
                  time: editReserveForm.time,
                };
              }
              return reserve;
            });
            setReserves(updatedreserves);
            // Close the edit form modal
            handleEditFormClose();
          })
          .catch((error) => {
            console.error("Error updating reserve:", error);
          });
      };
      
    
      const handleEditFormClose = () => {
        setIsEditFormOpen(false);
        setEditReserveForm({
          reserveid: "",
          number: "",
          numberOfPeople: "",
          date: "",
          time:"",
        });
      };
  
  return (
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
            <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><b>Field</b></TableCell>
        <TableCell><b>Value</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell><b>Name</b></TableCell>
        <TableCell>{reserve.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><b>Number</b></TableCell>
        <TableCell>{reserve.number}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><b>No. of Peoples</b></TableCell>
        <TableCell>{reserve.numberOfPeople}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><b>Date</b></TableCell>
        <TableCell>{reserve.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell><b>Time</b></TableCell>
        <TableCell>{reserve.time}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
              <Typography sx={{ fontSize: "15px" }}>
<b>Booked time:</b> {new Date(reserve.createdAt).toLocaleString()}
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
    <Modal
        open={isEditFormOpen}
        onClose={handleEditFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignfoodItems: "center",
          justifyContent: "center",
          height:"65vh",
          marginTop:"50px"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "500px",
            alignfoodItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h6">Edit Reservation</Typography>
          <form onSubmit={handleEditSubmit}>

            <TextField
              label="Number"
              fullWidth
              margin="normal"
              name="Number"
              value={editReserveForm.number}
              onChange={(e) =>
                setEditReserveForm({ ...editReserveForm, number: e.target.value })
              }
            />
 <TextField
              label="Number of People"
              fullWidth
              margin="normal"
              name="NumberOfPeople"
              value={editReserveForm.numberOfPeople}
              onChange={(e) =>
                setEditReserveForm({ ...editReserveForm, numberOfPeople: e.target.value })
              }
            />
 <TextField
              label="Date"
              fullWidth
              margin="normal"
              name="date"
              value={editReserveForm.date}
              onChange={(e) =>
                setEditReserveForm({ ...editReserveForm, date: e.target.value })
              }
            />

            <TextField
              label="Time"
              fullWidth
              margin="normal"
              name="time"
              sx={{marginBottom:"50px"}}
              value={editReserveForm.time}
              onChange={(e) =>
                setEditReserveForm({ ...editReserveForm, time: e.target.value })
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
  )
}

export default ReservationHistory
