"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect('mongodb://localhost/nostro-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('database is connected');
}
exports.startConnection = startConnection;
