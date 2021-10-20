import { Country } from "./country";

export class Hotel {
    _id?: number | string="";
    country: Country= new Country();
    name: string="";
    address: string="";
    rating: number= 0.0;
    countryId: number = 0;

}