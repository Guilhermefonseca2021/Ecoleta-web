import { Knex, knex } from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        // referencia para criar os campos da minha tabela
        table.increments('id').primary()
        
        table.integer('point_id') // integer porque items e points sao auto increments
            .notNullable()        
            .references('id')     // precisa ser um id valido
            .inTable('points');   // dentro da tabela points

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    })
}

export async function down() {
    
}