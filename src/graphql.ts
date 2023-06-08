
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateCapturedPokeInput {
    trainer_id?: Nullable<string>;
    poke_id?: Nullable<string>;
}

export interface UpdateCapturedPokeInput {
    id: string;
    poke_id?: Nullable<string>;
    trainer_id?: Nullable<string>;
    count?: Nullable<number>;
}

export interface CreatePokemonInput {
    name?: Nullable<string>;
    type?: Nullable<string>;
    description?: Nullable<string>;
}

export interface UpdatePokemonInput {
    id: string;
    name?: Nullable<string>;
    type?: Nullable<string>;
    description?: Nullable<string>;
}

export interface CreateTrainerInput {
    name?: Nullable<string>;
    hometown?: Nullable<string>;
}

export interface UpdateTrainerInput {
    id: string;
    name?: Nullable<string>;
    hometown?: Nullable<string>;
}

export interface CapturedPoke {
    id?: Nullable<string>;
    poke?: Nullable<Pokemon>;
    trainer?: Nullable<Trainer>;
    count?: Nullable<number>;
}

export interface Message {
    message?: Nullable<string>;
    status?: Nullable<number>;
}

export interface IQuery {
    capturedPokeByTrainer(t_id: string): Nullable<CapturedPoke>[] | Promise<Nullable<CapturedPoke>[]>;
    capturedTrainer(p_id: string): Nullable<CapturedPoke>[] | Promise<Nullable<CapturedPoke>[]>;
    pokemonAll(): Nullable<Pokemon>[] | Promise<Nullable<Pokemon>[]>;
    pokemon(id: string): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
    trainerAll(): Nullable<Trainer>[] | Promise<Nullable<Trainer>[]>;
    trainer(id: string): Nullable<Trainer> | Promise<Nullable<Trainer>>;
}

export interface IMutation {
    createCapturedPoke(trainer_id?: Nullable<string>, poke_id?: Nullable<string>): CapturedPoke | Promise<CapturedPoke>;
    updateCapturedPoke(updateCapturedPokeInput: UpdateCapturedPokeInput): CapturedPoke | Promise<CapturedPoke>;
    removeCapturedPoke(id: string): Nullable<Message> | Promise<Nullable<Message>>;
    createPokemon(createPokemonInput: CreatePokemonInput): Pokemon | Promise<Pokemon>;
    updatePokemon(updatePokemonInput: UpdatePokemonInput): Pokemon | Promise<Pokemon>;
    removePokemon(id: string): Nullable<Message> | Promise<Nullable<Message>>;
    removeAllPokemon(): Nullable<Message> | Promise<Nullable<Message>>;
    createTrainer(createTrainerInput: CreateTrainerInput): Trainer | Promise<Trainer>;
    updateTrainer(updateTrainerInput: UpdateTrainerInput): Trainer | Promise<Trainer>;
    removeTrainer(id: string): Nullable<Trainer> | Promise<Nullable<Trainer>>;
    removeTrainerAll(): Nullable<Message> | Promise<Nullable<Message>>;
}

export interface Pokemon {
    id?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    description?: Nullable<string>;
}

export interface Trainer {
    id?: Nullable<string>;
    name?: Nullable<string>;
    hometown?: Nullable<string>;
}

type Nullable<T> = T | null;
