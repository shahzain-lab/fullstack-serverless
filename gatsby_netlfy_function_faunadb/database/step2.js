

const faunaDB = require('faunadb');
require('dotenv').config()

const q = faunaDB.query;

(async () => {
    if(process.env.FAUNA_DB_ADMIN_KEY){

        const client = new faunaDB.Client({
            secret: process.env.FAUNA_DB_ADMIN_KEY,
            domain: 'db.us.fauna.com',
        });
        
        try{
            const results = client.query(
                q.CreateKey({
                    database: q.database('childDatabase'),
                    role: 'server'
                })
                )
                console.log(results);
            }catch(err){
                if(err.requestResult.statusCode === 400 && err.message === 'instance already exists'){
                    console.log('Database with this name already exists');
                }else {
                    console.log('Unknow Error: ');
                    console.log(err);
                }
            }
    }else{
        console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping Key Creation');
    }
})