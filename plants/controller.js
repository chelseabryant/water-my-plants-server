const pool = require("../db")
const { allPlants, plantById } = require("./queries")

const getAllPlants = (req, res) => {
  pool.query(allPlants, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

/*Req: request object. This contains all info reguarding an incoming
    network request. console.log(req) to see all info in request)
Res: response object. This contains all info regarding an outgoing
response from this server to the requester,(in this instance: the
    front end or postman) Has useful methods on the object to send
    info to the requester

  The two below or response from the database, will either get an error
  or results  
Error: If the query to the database has any issues the error will be
    returned
Results: If the query did not provide an error, a results array will be
    returned
*/
const getPlantById = (req, res) => {
  pool.query(plantById(req.params.id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAllPlants,
  getPlantById,
}
