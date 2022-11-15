const allPlants = `
SELECT * FROM plants;
`
const plantById = (id) => `
SELECT * FROM plants
WHERE id = ${id}
`

module.exports = {
  allPlants,
  plantById,
}
