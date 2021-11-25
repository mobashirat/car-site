import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const hanldeonBlur = e => {
        setEmail(e.target.value)

        e.preventDefault()
    }

    const handleAdmin = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true)
                }
                console.log(data);

            })
        e.preventDefault()
    }



    return (
        <div>
            <h3>Make an admin</h3>
            <form onSubmit={handleAdmin}>
                <TextField label="Email"
                    type="email"
                    onBlur={hanldeonBlur}
                    variant="standard">


                </TextField>
                <br />
                <br />
                <Button type="submit" variant="contained">Make Admin</Button>
                {success && <Alert severity="success">admin added successfully!!</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;