export class DataConnection {
    from_City: String;
    to_City: String;
    date: String;
    time: String;

    constructor(fromCity?: String ,toCity?: String ,date?: String ,time?: String) {
        this.from_City = fromCity;
        this.to_City = toCity;
        this.date = date;
        this.time = time;
    }
}
