

const faunaDB = require('faunadb');
const q = faunaDB.query;
require('dotenv').config();


(async() => {
    if(process.env.FAUNA_DB_ADMIN_KEY){
        const client = new faunaDB.Client({
            secret: process.env.FAUNA_DB_ADMIN_KEY,
            domain:'db.us.fauna.com'});

        try{
            const results = await client.query(
                q.CreateDatabase({name: 'childDatabase'})
            )
            console.log(results);
        }catch(err) {
            if(err.requestResult.statusCode === 400 && err.message === 'instance already exists'){
                console.log('Database with this name already exists');
            }else {
                console.log('Unknow Error: ');
                console.log(err);
              }
        }
    }
    else{
        console.log('No FAUNA_DB_ADMIN_KEY in .env, Skipping DB setup');
    }
})()