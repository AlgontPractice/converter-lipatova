import React from "react";
import {makeAutoObservable} from "mobx";

class store{
    valutes = [];

    constructor() {
        makeAutoObservable(this);
    }

    async setValutes(){
        const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        console.log((response.json()).then(response => {this.valutes = response.Valute; console.log(this.valutes);}));
    }

    setCode(id){
        this.code=id;
    }

    getValutes(){
        return this.valutes;
    }
}
export default new store();