abstract class BaseUser{
    id: number;
    name:string;
    abstract getrole():string;
    abstract getPermissions():string[];
    constructor(id:number, name:string){
        this.name = name;
        this.id = id;
    }
};

class Guest extends BaseUser{
    getrole(): string {
        return "Guest";
    }
    getPermissions(): string[] {
        return ["Просмотр контента"];
    }
};

class User extends BaseUser{
    getrole(): string {
        return "User";
    }
    getPermissions(): string[]{
        return ["Просмотр контента", "Добавление комментариев"];
    }
};

class Admin extends BaseUser{
    getrole(): string {
        return "Admin";
    }
    getPermissions(): string[]{
        return ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"];
    }
};

const guest = new Guest(1, "Аноним");
console.log(guest.getPermissions());
const admin = new Admin(2, "Мария");
console.log(admin.getPermissions());

///////////////////////////////////////////////////

interface IReport{
    title:string,
    content:string,
    generate():string
}

class HTMLReport implements IReport{
    title: string;
    content: string;
    generate(): string {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
    constructor(tit:string, cont:string){
        this.title = tit;
        this.content = cont;
    }
}

class JSONReport implements IReport{
    title: string;
    content: string;
    generate(): string {
        return `{title: "${this.title}", content: "${this.content}"`;
    }
    constructor(tit:string, cont:string){
        this.title = tit;
        this.content = cont;
    }
}

const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());

const report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());

/////////////////////////////////////////////////////////

class Caches<T>{
    data: Array<{key: string, value: T, ttl: number}>;
    constructor(){
        this.data = new Array<{key: string, value: T, ttl: number}>;
    }
    add(k: string, val: T, t: number){
        const timeout = Date.now() + t;
        this.data.push({key:k, value:val, ttl:timeout});
    }
    get(k:string):T|null{
        this.clearExpired();
        const elements = this.data.filter(d => d.key == k);
        const el = elements[0];
        if(!el){
            return null;
        }
        return el.value;
    }
    clearExpired(){
        const curtime = Date.now();
        this.data = this.data.filter(d => d.ttl >= curtime);
    }
}

const cache = new Caches<number>();
cache.add("price", 100, 500);
console.log(cache.get("price"));
setTimeout(() => {
    console.log(cache.get("price"))
}, 6000);

//////////////////////////////////////////////////////

class Product{
    constructor(public name: string, public price:number){};
}

function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T{
    const obj = new cls(...args);
    return obj;
}

const p = createInstance(Product, "Телефон", 50000);
console.log(p);

//////////////////////////////////////////////////////

type timestamp = Date;
enum LogLevel{INFO = "INFO", WARNING = "WARNING", ERROR = "ERROR"};
type message = string;
type LogEntry = [timestamp, LogLevel, message];

function logEvent(event:LogEntry){
    console.log(event);
}

logEvent([new Date(), LogLevel.INFO, "Система запущена"]);

//////////////////////////////////////////////////////

enum HttpStatus{
    OK = 200, BadRequest = 400, Unauthorized = 401, InternalServerError = 500
}

type ApiResponse<T> = [status:HttpStatus, data:T|null, error?:string];

function success<T>(data:T):ApiResponse<T>{
    return [HttpStatus.OK, data];
}

function error<T>(message: string, status:HttpStatus):ApiResponse<null>{
    return [status, null, message];
}

const res1 = success({user:"Андрей"});
console.log(res1);

const res2 = error("Некорректный запрос", HttpStatus.BadRequest);
console.log(res2);