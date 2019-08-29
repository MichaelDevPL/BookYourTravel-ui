import { SearchConnection } from './search-connection';

export class DataConnection extends SearchConnection{
    _id: number;
    arrival_time: String;
    arrival_date: String;

    constructor(from_City ?: String, to_City?: String, depart_date?: String, depart_time?: String, 
                arrival_time?: String, arrival_date?: String) {
        super(from_City, to_City, depart_date, depart_time)
        this.arrival_time = arrival_time;
        this.arrival_date = arrival_date;
    }
}
