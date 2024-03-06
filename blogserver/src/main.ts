import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

//const CORS_OPTIONS = {
//  // origin: ['https://refactored-broccoli-pjrrvwppvvg379gq-4200.app.github.dev/'], // or '*' or whatever is required
//  origin: ['*'], // or '*' or whatever is required
//  allowedHeaders: [
//    'Access-Control-Allow-Origin',
//    'Origin',
//    'X-Requested-With',
//    'Accept',
//    'Content-Type',
//    'Authorization',
//  ],
//  exposedHeaders: 'Authorization',
//  credentials: false,
//  methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
//};

async function bootstrap() {
  const adapter = new FastifyAdapter();
  //adapter.enableCors(CORS_OPTIONS);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, adapter,
  );

  app.enableCors({
    origin:
    'https://glorious-space-enigma-p6rvxj55696f9vp-4200.app.github.dev', // Erlaubt Anfragen von http://localhost:3000
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Erlaubte Methoden
    credentials: true, // Ermöglicht das Senden von Cookies
    });

  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();

