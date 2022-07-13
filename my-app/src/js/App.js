import '../styles/App.css';
import React from "react";
import {Solution} from "../components";
import {TablePage} from "../components/TablePage";
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import {Container} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function App(){
        return (
            <>
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button><Link to="/table">Current rage</Link></Button>
                            <Button><Link to="/converter">Currency converter</Link></Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Routes>
                    <Route path={"/"} element={<Container><Typography>Enter page in menu</Typography></Container>}></Route>
                    <Route path={"/table"} element={<TablePage/>}></Route>
                    <Route path={"/converter"} element={<Solution />}></Route>
                </Routes>
            </>
        )
}