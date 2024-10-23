import * as React from 'react'; 
import { useState, useEffect } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';  

export default function Client() { 
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }; 
    const [name, setName] = useState(''); 
    const [address, setAddress] = useState('');   
    const [clients, setClients] = useState([]);

    const handleClick = (e) => {
        e.preventDefault(); 
        const client = { name, address }; 
        console.log(client); 

        fetch("http://localhost:8080/client/add", {
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(client) 
        }).then(() => { 
            console.log("New Client added");
            // Optionally, clear the form fields
            setName('');
            setAddress('');
            // Optionally, refresh the client list
            fetchClients();
        })
    }

    const fetchClients = () => {
        fetch("http://localhost:8080/client/getAll")
        .then(res => res.json()) 
        .then((result) => { 
            setClients(result);
        })
    }

    useEffect(() => {  
        fetchClients();
    }, []);

    return ( 
        <Container> 
            <Paper elevation={3} style={paperStyle}> 
                <h1 style={{ color: "blue" }}><u>Add Client</u></h1> 
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1 /*, width: '25ch'*/ } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        id="outlined-basic" 
                        label="Client Name" 
                        variant="outlined" 
                        fullWidth  
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    /> 
                    <TextField 
                        id="outlined-basic" 
                        label="Client Address" 
                        variant="outlined" 
                        fullWidth 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                    /> 
                    <Button variant="contained" onClick={handleClick}>Submit</Button>
                </Box>   
            </Paper>  

            <h1>Clients</h1> 

            <Paper elevation={3} style={paperStyle}> 
                {clients.map((client) => (
                    <Paper 
                        elevation={6} 
                        style={{ margin: "10px", padding: "15px", textAlign: "left" }} 
                        key={client.id}
                    >  
                        <div>Id: {client.id}</div>
                        <div>Name: {client.name}</div> 
                        <div>Address: {client.address}</div>
                    </Paper>
                ))} 
            </Paper>  
        </Container>
    );
}  




