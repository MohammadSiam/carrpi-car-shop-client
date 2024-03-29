import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://whispering-shore-11998.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                //'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Admin Successfully")

                    setSuccess(true);
                }
                //console.log(data);
            })

        e.preventDefault()
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '25%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br /> <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;