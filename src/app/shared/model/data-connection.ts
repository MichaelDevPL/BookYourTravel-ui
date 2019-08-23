export class DataConnection {
    _id: number;
    from_City: String;
    to_City: String;
    depart_date: String;
    depart_time: String;
    arrival_time: String;
    arrival_date: String;

    constructor(fromCity?: String, toCity?: String, depart_date?: String, depart_time?: String, arrival_time?: String, arrival_date?: String) {
        this.from_City = fromCity;
        this.to_City = toCity;
        this.depart_date = depart_date;
        this.depart_time = depart_time;
        this.arrival_time = arrival_time;
        this.arrival_date = arrival_date;
    }
}
