
const faunadb = require('faunadb');
const q = faunadb.query;
require('dotenv').config()

exports.handler = async (event, context) => {
try{
        // if (event.httpMethod !== "POST") {
        //     return { statusCode: 405, body: "Method Not Allowed" };
        //   }

    // if(process.env.FAUNADB_ADMIN_KEY){
        // let reqObj = JSON.parse(event.body);
        let client = new faunadb.Client({
            secret: process.env.FAUNADB_ADMIN_KEY,
            domain:'db.us.fauna.com'
        });

            var result = await client.query(
              q.CreateCollection({ name: 'users' })
            );
            console.log("Container Created: " + result.name);
          
    // }
    // else{
    //     console.log('No FAUNA_DB_ADMIN_KEY in .env, Skipping DB setup');
    // }

  

    //  var results = await client.query(
    //    q.Create(
    //      q.Collection('customers'),
    //      { data: { firstName: reqObj.firstName, lastName: reqObj.lastName , email: reqObj.email } },
    //    )
    //  );
    //  console.log("Entry Created and Inserted in Container: " + results.ref.id);
   
    //      return{
    //          statusCode: 200,
    //          body: JSON.stringify({ id: `${results.ref.id}` }),
    //      }
    
}catch(err) {
        return { statusCode: 500, body: err.toString() }
    }
}