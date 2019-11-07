const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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

async function add(scheme) {
  const [id] = await db('schemes').insert(scheme, 'id');
  return findById(id);
}

async function update(changes, id) {
  await db('schemes')
    .where({ id })
    .update(changes, 'id');
  return findById(id);
}

async function remove(id) {
  const removedScheme = await findById(id)
  const removed = await db("schemes")
    .where({ id })
    .del();
  return removed ? removedScheme : null;
}