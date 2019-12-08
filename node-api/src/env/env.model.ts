export class DbConectOptions{
    host: string;
    user: string;
    port: number;
    password:string;
    type:string;
    db:string;
    constructor(input:any){
        this.host = input.get("database.host");
        this.user = input.get("database.user");
        this.password = input.get("database.password");
        this.db = input.get("database.db");
        this.type = input.get("database.type");
        this.port = input.get("database.port");
    }
}

export  class Env {
    port: number;
    db: DbConectOptions;
    constructor(input:any){
        this.port = input.get("port");
        this.db = new DbConectOptions(input);
    }
}