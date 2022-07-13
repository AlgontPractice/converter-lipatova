import '../styles/App.css';
import React from "react";

import {
    Container,
    Paper,
    Table,
    TableBody,
    TableContainer,
    Checkbox,
} from "@mui/material";
import store from "../js/store";
import {observer} from "mobx-react";
import {StyledTableCell, StyledTableRow} from "../styles/TableStyles"
import TableHeadCreation from "../UI/TableHeadCreation";
import {Favorite, FavoriteBorder} from "@mui/icons-material";



export const TablePage = observer(class extends React.Component{
    valutes = Object.values(store.getValutes());
    favouriteValute = [];

    constructor(props) {
        super(props);
        this.state = {load: false};
    }

    componentDidMount() {
        store.setValutes();
    }

    loadCheckedElements = (e) => {
        this.favouriteValute.push(localStorage.getItem(e.ID));
        return this.favouriteValute;
    }

    setFavValutes(){
        this.favValutesArray =[];
        this.valutes.map(e => {if ((localStorage.getItem(e.ID)) && (this.favValutesArray.includes(e) === false)) this.favValutesArray.push(e)});
    }

    setNotFavValutes(){
        this.notFavValutesArray = [];
        this.valutes.map(e => {if (!(localStorage.getItem(e.ID)) && (this.notFavValutesArray.includes(e) === false)) this.notFavValutesArray.push(e)});
    }

    render() {
        this.valutes = Object.values(store.getValutes());
        this.setFavValutes();
        this.setNotFavValutes();
        this.sortedValutesArray = [...this.favValutesArray, ...this.notFavValutesArray];
        return (
            <>
                <Container>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                            <TableHeadCreation></TableHeadCreation>
                            <TableBody>
                                {this.sortedValutesArray.map((e) => (
                                    <StyledTableRow
                                        key={e.NumCode}
                                    >
                                        <StyledTableCell >
                                            {e.CharCode}
                                        </StyledTableCell>
                                        <StyledTableCell >{e.Name}</StyledTableCell>
                                        <StyledTableCell align="right">{e.Nominal}</StyledTableCell>
                                        <StyledTableCell align="right">{e.Value}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Checkbox icon={<FavoriteBorder />} checked={localStorage.getItem(e.ID)} onClick={() => {localStorage.getItem(e.ID) ? localStorage.removeItem(e.ID) : localStorage.setItem(e.ID, e.NumCode); this.setState({load: true})}} checkedIcon={<Favorite />}></Checkbox>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </>
        )
    }
})