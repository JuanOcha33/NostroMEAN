import {connect} from 'mongoose';

export async function startConnection(){
   await connect('mongodb://localhost/nostro-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('database is connected');
}