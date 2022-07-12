import {makeAutoObservable} from "mobx";

class store{
    valutes = [];


    constructor() {
        makeAutoObservable(this);
    }

    async setValutes(){
        const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        response.json().then(response => {this.valutes = response.Valute});
   }

    getValutes(){
        return this.valutes;
    }
}
export default new store();