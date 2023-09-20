import { Knex, knex} from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        // referencia para criar os campos da minha tabela
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('uf', 2).notNullable();
        table.string('city').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items')
}