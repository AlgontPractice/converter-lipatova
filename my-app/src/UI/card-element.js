import React from "react";
import {Grid, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";

export default function CardElement(props){
    return(
        <Grid item>
            <Stack spacing={1}>
                <Select
                    id="select-currency"
                    onChange={(e)=>props.valueChangeFunction(e,props.valutesList)}
                    value={props.valueCharCode}
                >
                    {props.valutesList.map(e =>
                        <MenuItem key={e.ID} value={e.CharCode}>{e.CharCode + ' ' + e.Name}</MenuItem>)}

                </Select>
                <TextField id="text" label="Value" onChange={props.resultValue} value={props.value}></TextField>
                <Typography variant="caption">{(props.valueCoef !== 0) ? '1 ' + props.valueCharCode + ' = ' + props.valueCoef + ' RUB' : 'Input value'}</Typography>
            </Stack>
        </Grid>
    )
}