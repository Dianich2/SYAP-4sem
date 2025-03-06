"use strict";
class BaseUser {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
}
;
class Guest extends BaseUser {
    getrole() {
        return "Guest";
    }
    getPermissions() {
        return ["Просмотр контента"];
    }
}
;
class User extends BaseUser {
    getrole() {
        return "User";
    }
    getPermissions() {
        return ["Просмотр контента", "Добавление комментариев"];
    }
}
;
class Admin extends BaseUser {
    getrole() {
        return "Admin";
    }
    getPermissions() {
        return ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"];
    }
}
;
const guest = new Guest(1, "Аноним");
console.log(guest.getPermissions());
const admin = new Admin(2, "Мария");
console.log(admin.getPermissions());
class HTMLReport {
    generate() {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
    constructor(tit, cont) {
        this.title = tit;
        this.content = cont;
    }
}
class JSONReport {
    generate() {
        return `{title: "${this.title}", content: "${this.content}"`;
    }
    constructor(tit, cont) {
        this.title = tit;
        this.content = cont;
    }
}
const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());
const report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());
/////////////////////////////////////////////////////////
class Caches {
    constructor() {
        this.data = new Array;
    }
    add(k, val, t) {
        const timeout = Date.now() + t;
        this.data.push({ key: k, value: val, ttl: timeout });
    }
    get(k) {
        this.clearExpired();
        const elements = this.data.filter(d => d.key == k);
        const el = elements[0];
        if (!el) {
            return null;
        }
        return el.value;
    }
    clearExpired() {
        const curtime = Date.now();
        this.data = this.data.filter(d => d.ttl >= curtime);
    }
}
const cache = new Caches();
cache.add("price", 100, 500);
console.log(cache.get("price"));
setTimeout(() => {
    console.log(cache.get("price"));
}, 6000);
//////////////////////////////////////////////////////
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    ;
}
function createInstance(cls, ...args) {
    const obj = new cls(...args);
    return obj;
}
const p = createInstance(Product, "Телефон", 50000);
console.log(p);
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
;
function logEvent(event) {
    console.log(event);
}
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
//////////////////////////////////////////////////////
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
const res1 = success({ user: "Андрей" });
console.log(res1);
const res2 = error("Некорректный запрос", HttpStatus.BadRequest);
console.log(res2);
