const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps
  // add,
  // update,
  // remove
}


function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as st")
    .join("schemes as sc", "sc.id", "st.scheme_id" )
    .select("st.id", "sc.scheme_name as scheme", "st.step_number as step", "st.instructions")
    .where({ scheme_id: id })
    .orderBy("step_number")
}