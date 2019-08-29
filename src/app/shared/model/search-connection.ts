export class SearchConnection{
    from_City: String;
    to_City: String;
    depart_date: String;
    depart_time: String;

    constructor(fromCity?: String, toCity?: String, depart_date?: String,
                depart_time?: String){
        this.from_City = fromCity;
        this.to_City = toCity;
        this.depart_date = depart_date;
        this.depart_time = depart_time;            
    }
}