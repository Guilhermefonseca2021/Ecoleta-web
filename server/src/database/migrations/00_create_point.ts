import { knex } from 'knex';
// maisculo pq me reiro ao tipo q declaro na instancia tbm
import Knex  from 'knex';

type Knex =  any;
// a instancia do knex é o acesso ao nosso banco de dados
export async function up(knex: Knex) {
    // criar tabela

    return knex.schema.createTable('points', (table: Knex) => {
        table.increments('id').primary();
        table.string('Image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
    // deletar tabela
    return knex.schema.dropTable('point');
}