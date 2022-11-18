const ALL_PLANTS = `
SELECT * FROM plants;
`
const PLANT_BY_ID = (id) => `
SELECT * FROM plants
WHERE id = ${id}
`
const POST_MY_PLANT = (user, plant) => `
INSERT INTO my_plants (user_id, plant_id)
VALUES ('${user}', '${plant}')
RETURNING *
`

const GET_MY_PLANTS = (id) => `
SELECT plants.id, plants.name, plants.image
FROM my_plants
INNER JOIN plants
ON my_plants.plant_id = plants.id
WHERE my_plants.user_id = ${id}
`

module.exports = {
  ALL_PLANTS,
  PLANT_BY_ID,
  POST_MY_PLANT,
  GET_MY_PLANTS,
}
