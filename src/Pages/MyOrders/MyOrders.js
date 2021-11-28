import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false)

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [control])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete? ');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!control)

                    }
                })
            console.log(id)
        }
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>My Orders: {myOrders.length}</h1>

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">your email</TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>



                                <Button sx={{ color: 'white', backgroundColor: 'red' }} onClick={() => handleDelete(row?._id)}>cancel</Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default MyOrders;