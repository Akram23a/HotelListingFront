import { Hotel } from "./hotel";

export class Country {
    _id?: number | string="";
    hotels: Hotel[]=[];
    name: string="";
    abreveation: string="";
}
