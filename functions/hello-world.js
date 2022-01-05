
var random = require('random-name');

exports.handler = async (event, context) => {
  try {
    let name = random.first();
        return{
            statusCode: 200,
            body: JSON.stringify({message: `Hello ${name}`})
        }
    }catch(err) {
        return{
            statusCode: 500,
            body: err.toString()
        } 
    }
}