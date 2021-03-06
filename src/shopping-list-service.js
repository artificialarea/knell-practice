// SHOPPING LIST SERVICE OBJECT ASSIGNMENT //////////////////////////////////////
// src: https://courses.thinkful.com/node-postgres-v1/checkpoint/14#assignment

const ShoppingListService = {

    getAllItems(knex) {
        return knex.select('*').from('shopping_list');
    },
    insertItem(knex, newItem) {
        return knex
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, id) {
        return knex
            .from('shopping_list')
            .select('*')
            .where({ id })
            .first()
    },
    deleteItem(knex, id) {
        return knex
            .from('shopping_list')
            .where({ id })
            .delete()
    },
    updateItem(knex, id, data) {
        return knex
            .from('shopping_list')
            .where({ id })
            .update(data)
    },

} 

module.exports = ShoppingListService;