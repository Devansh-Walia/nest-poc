
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreatePokemonInput {
    name?: Nullable<string>;
    type?: Nullable<string>;
}

export interface UpdatePokemonInput {
    id: number;
    name?: Nullable<string>;
    type?: Nullable<string>;
}

export interface Pokemon {
    id?: Nullable<number>;
    name?: Nullable<string>;
    type?: Nullable<string>;
}

export interface Message {
    message?: Nullable<string>;
    status?: Nullable<number>;
}

export interface IQuery {
    pokemonAll(): Nullable<Pokemon>[] | Promise<Nullable<Pokemon>[]>;
    pokemon(id: number): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
}

export interface IMutation {
    createPokemon(createPokemonInput: CreatePokemonInput): Pokemon | Promise<Pokemon>;
    updatePokemon(updatePokemonInput: UpdatePokemonInput): Pokemon | Promise<Pokemon>;
    removePokemon(id: number): Nullable<Message> | Promise<Nullable<Message>>;
}

type Nullable<T> = T | null;
