import React from "react";
import {Grid} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {observer} from "mobx-react";
import {observable, makeObservable, action} from "mobx";
import store from "../js/store";
import CardElement from "../UI/card-element";


export const Solution = observer(class extends React.Component{
    currentCharCode=''; currentCoef=0; resultCharCode=''; resultCoef=0; inputValue=''; currentNominal=0; resultNominal=0;

    constructor(props) {
        super(props);
        makeObservable(this,{
            currentCharCode: observable,
            currentCoef:observable,
            resultCharCode:observable,
            resultCoef:observable,
            inputValue: observable,
            currentNominal: observable,
            resultNominal: observable,
            currentValueChange: action,
            resultValueChange: action,
            valueChange: action,
        });
    }

    componentDidMount() {
        store.setValutes();
    }

    currentValueChange = (event: SelectChangeEvent, valutes) => {
        this.currentCharCode = event.target.value;
        this.currentCoef = (valutes.filter(item => item.CharCode === event.target.value)).map(e => e.Value);
        this.currentNominal = (valutes.filter(item => item.CharCode === event.target.value)).map(e => e.Nominal);
    };

    resultValueChange = (event: SelectChangeEvent, valutes) => {
        this.resultCharCode = (event.target.value);
        this.resultCoef = ((valutes.filter(item => item.CharCode === event.target.value)).map(e => e.Value))
        this.resultNominal = ((valutes.filter(item => item.CharCode === event.target.value)).map(e => e.Nominal))
    };

    valueChange = (event: SelectChangeEvent) => {
        this.inputValue = (event.target.value);
    };

    render() {
        var valutes = Object.values(store.getValutes());
        return (
            <>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                    spacing={10}

                >
                    <CardElement valueChangeFunction = {this.currentValueChange} valutesList={valutes}
                                 valueCharCode={this.currentCharCode} resultValue={this.valueChange}
                                 valueCoef={this.currentCoef} ></CardElement>
                    <CardElement valueChangeFunction = {this.resultValueChange} valutesList={valutes}
                                 valueCharCode={this.resultCharCode} valueCoef={this.resultCoef}
                                 value={(this.currentCharCode && this.inputValue && this.resultCharCode) ? (this.inputValue * this.currentCoef  / this.resultCoef * this.resultNominal / this.currentNominal) : 0}
                    ></CardElement>
                </Grid>
            </>
        )
    }
})
