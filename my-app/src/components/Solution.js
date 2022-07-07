import React from "react";
import {Grid, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {observer} from "mobx-react";
import {observable, makeObservable, action} from "mobx";
import store from "../store";


export const Solution = observer(class extends React.Component{
    currentCharCode=''; currentCoef=0; resultCharCode=''; resultCoef=0; inputValue='';


    constructor(props) {
        super(props);
        makeObservable(this,{
            currentCharCode: observable,
            currentCoef:observable,
            resultCharCode:observable,
            resultCoef:observable,
            inputValue: observable,
            currentValueChange: action,
            resultValueChange: action,
            valueChange: action,
        });
    }

    componentDidMount() {
        store.setValutes();
        store.setCode(1);
    }

    currentValueChange = (event: SelectChangeEvent, valutes) => {
        this.currentCharCode = event.target.value;
        this.currentCoef = (valutes.filter(item => item.CharCode === event.target.value)).map(e => e.Value);
    };

    resultValueChange = (event: SelectChangeEvent, valutes) => {
        this.resultCharCode = (event.target.value);
        this.resultCoef = ((valutes.filter(item => item.CharCode === event.target.value)).map(e => e.Value))
    };

    valueChange = (event: SelectChangeEvent) => {
        this.inputValue = (event.target.value);
    };



    render() {
        var valutes = Object.values(store.getValutes());
        return (
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
                spacing={10}

            >
                <Grid item>
                    <Stack spacing={1}>
                        <Select
                            id="select-currency"
                            onChange={(e)=>this.currentValueChange(e,valutes)}
                            value={this.currentCharCode}
                        >
                            {valutes.map(e =>
                                <MenuItem key={e.ID} value={e.CharCode}>{e.CharCode + ' ' + e.Name}</MenuItem>)}

                        </Select>
                        <TextField id="text" label="Value" onChange={this.valueChange} ></TextField>
                        <Typography variant="caption">{(this.currentCoef !== 0) ? '1 ' + this.currentCharCode + ' = ' + this.currentCoef + ' RUB' : 'Input value'}</Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <Stack spacing={1}>
                        <Select
                            onChange={(e)=>this.resultValueChange(e,valutes)}
                            value={this.resultCharCode}
                            autoWidth={false}
                        >
                            {valutes.map(e =>
                                <MenuItem key={e.ID} value={e.CharCode}>{e.CharCode + ' ' + e.Name}</MenuItem>)}

                        </Select>

                        <TextField label="Value" value={(this.currentCharCode !== 0 && this.inputValue !== 0 && this.resultCharCode !== 0) ? (this.inputValue * this.currentCoef / this.resultCoef) : 0}></TextField>
                        <Typography variant="caption">{(this.resultCoef !== 0 ) ? '1 ' + this.resultCharCode + ' = ' + this.resultCoef + ' RUB' : 'Input value'}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        )
    }


})
