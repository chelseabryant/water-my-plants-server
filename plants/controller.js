const pool = require("../db")
const {
  ALL_PLANTS,
  PLANT_BY_ID,
  POST_MY_PLANT,
  GET_MY_PLANTS,
} = require("./queries")

const getAllPlants = (req, res) => {
  pool.query(ALL_PLANTS, (error, results) => {
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
  pool.query(PLANT_BY_ID(req.params.id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const postMyPlant = (req, res) => {
  pool.query(POST_MY_PLANT(req.body.user, req.body.plant), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows[0])
  })
}

const getMyPlants = (req, res) => {
  pool.query(GET_MY_PLANTS(req.query.user_id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAllPlants,
  getPlantById,
  postMyPlant,
  getMyPlants,
}
