import { Travel } from './travel.model';
import { User } from './user.model';

export class TicketBoughtByUser{
    id: number;
    date_of_purchase: String;
    typeSeatPlace: String;
    travel: Array<Travel>;
    user: Array<User>;
}