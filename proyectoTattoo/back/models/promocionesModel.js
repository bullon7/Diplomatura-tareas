var pool = require('./bd');

async function getPromociones() {
    var query = 'select * from promociones';
    var rows = await pool.query(query);
    return rows;
}

async function insertPromocion(obj) {
    try {
        var query = 'insert into promociones set ?';
        var rows = await pool.query(query,[obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deletePromocionById(id) {
    var query = 'delete from promociones where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getPromocionesById(id) {
    var query = 'select * from promociones where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarPromocionesById(obj, id) {
    try {
        var query = 'update promociones set ? where id= ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {getPromociones, insertPromocion, deletePromocionById, getPromocionesById, modificarPromocionesById}