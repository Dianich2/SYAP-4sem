"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myPromise = new Promise(function (resolve, reject) {
    let chislo = Math.round(Math.random() * 10);
    setTimeout(() => resolve(chislo), 1000);
})
    .then(result => {
    console.log("Задание 2");
    console.log(result);
});
////////////////////////////////////////////////////////////////
function retProm(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let chislo = Math.round(Math.random() * 10);
            resolve(chislo);
        }, delay);
    });
}
Promise.all([
    retProm(3000),
    retProm(2000),
    retProm(1000)
])
    .then(result1 => {
    console.log("Задание 3");
    console.log(result1);
});
///////////////////////////////////////////////////////////////
let pr = new Promise((res, rej) => {
    rej('ku');
});
console.log("Задание 4");
pr
    .then(() => console.log(1)) //не выполнится, так как промис вернет ошибку
    .catch(() => console.log(2)) // выполнится, так как промис вернет ошибку
    .catch(() => console.log(3)) // не вызовется, так как предыдущий метод catch выполнится успешно
    .then(() => console.log(4)) // выполнится, так как catch, который выводит 2 выполнится успешно
    .then(() => console.log(5)); // выполнится, так как then, который выводит 4 выполнится успешно
//////////////////////////////////////////////////////////////
let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Задание 5");
        resolve(21);
    }, 5000);
});
prom.then(result => {
    console.log(result);
    return result;
})
    .then(result2 => {
    console.log(result2 * 2);
});
///////////////////////////////////////////////////////////
function d(value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), time);
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    let p = yield d(21, 7000);
    console.log("Задание 6");
    console.log(p);
    let p2 = yield d(p * 2, 2000);
    console.log(p2);
}))();
setTimeout(() => {
    //////////////////////////////////////////////////////////
    let promise = new Promise((res, rej) => {
        res('Resolved promise - 1');
    });
    promise.then((res) => {
        console.log("Resolved promise -2");
        return "OK";
    })
        .then((res) => {
        console.log(res);
        console.log();
    });
    //Будет выведено сообщение из первого then и OK
    //////////////////////////////////////////////////
    let promise2 = new Promise((res, rej) => {
        setTimeout(() => {
            res('Resolved promise - 1');
        }, 2000);
    });
    promise2.then((res) => {
        console.log(res);
        return "OK";
    })
        .then((res1) => {
        console.log(res1);
        console.log();
    });
    // Будет выведено сообщение, переданное из промиса и OK
    let promise3 = new Promise((res, rej) => {
        setTimeout(() => {
            res('Resolved promise - 1');
        }, 3000);
    });
    promise3.then((res) => {
        console.log(res);
        return res;
    })
        .then((res1) => {
        console.log("Resolved promise -2");
        console.log();
    });
    // Будет выведено сообщение из res и сообщение из второго then
    let promise4 = new Promise((res, rej) => {
        setTimeout(() => {
            res('Resolved promise - 1');
        }, 3500);
    });
    promise4.then((res) => {
        console.log(res);
        return res;
    })
        .then((res1) => {
        console.log(res1);
        console.log();
    });
    // Будет выведено сообщение res 2 раза
    let promise5 = new Promise((res, rej) => {
        setTimeout(() => {
            res('Resolved promise - 1');
        }, 4000);
    });
    promise5.then((res) => {
        console.log(res);
    })
        .then((res1) => {
        console.log(res1);
        console.log();
    });
    // Будет выведено сообщение res и undefined
}, 10000);
