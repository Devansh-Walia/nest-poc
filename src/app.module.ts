import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon/entities/pokemon.entity';
import { TrainerModule } from './trainer/trainer.module';
import { Trainer } from './trainer/entities/trainer.entity';
import { CapturedPokeModule } from './captured-poke/captured-poke.module';
import { CapturedPoke } from './captured-poke/entities/captured-poke.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      port: 5432,
      database: process.env.DB_NAME,
      entities: [Pokemon, Trainer, CapturedPoke],
      synchronize: false,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    PokemonModule,
    TrainerModule,
    CapturedPokeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
