const pool = require("../db")
const {
  ALL_PLANTS,
  PLANT_BY_ID,
  POST_MY_PLANT,
  GET_MY_PLANTS,
  ADDED_PLANTS,
  DELETE_PLANT,
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
  if (req.query.user_id) {
    pool.query(PLANT_BY_ID(req.params.id), (error, results) => {
      if (error) throw error
      pool.query(
        ADDED_PLANTS(req.query.user_id, results.rows[0].id),
        (insideError, insideResults) => {
          if (insideError) throw insideError
          if (insideResults.rows.length) {
            res
              .status(200)
              .json({ plant_details: results.rows, added_plant: true })
          } else {
            res
              .status(200)
              .json({ plant_details: results.rows, added_plant: false })
          }
        }
      )
    })
  } else {
    pool.query(PLANT_BY_ID(req.params.id), (error, results) => {
      if (error) throw error
      res.status(200).json({ plant_details: results.rows, added_plant: false })
    })
  }
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

const deletePlant = (req, res) => {
  pool.query(DELETE_PLANT(req.body.user, req.body.plant), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getAllPlants,
  getPlantById,
  postMyPlant,
  getMyPlants,
  deletePlant,
}
