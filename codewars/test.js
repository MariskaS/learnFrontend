function Server(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function () {
        return this.firstName;
    }
}

// Server.prototype.getName = function () {
//     return this.firstName;
// }

// class Server {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     getName = function () {
//         return this.firstName;
//     }
// }


const instServe = new Server('marina', 'ismailova');


console.log(instServe.getName())
console.log(instServe)




