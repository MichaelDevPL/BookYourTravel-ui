export class LoginModel {
    user_Name: string;
    password: string;

    constructor(user_Name?: string, password?: string){
        this.user_Name = user_Name;
        this.password = password;
    }
}
