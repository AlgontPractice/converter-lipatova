import {TableHead, TableRow} from "@mui/material";
import {StyledTableCell} from "../styles/TableStyles";
import React from "react";

export default function TableHeadCreation(){
    return(
        <TableHead>
            <TableRow>
                <StyledTableCell >Char Code</StyledTableCell>
                <StyledTableCell >Currency Name</StyledTableCell>
                <StyledTableCell align="right">Nominal</StyledTableCell>
                <StyledTableCell align="right">Current rate</StyledTableCell>
                <StyledTableCell align="center">Favourites</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}