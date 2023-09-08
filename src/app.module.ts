import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { JokeGeneratorModule } from './joke-generator/joke-generator.module';
import { config } from './config';

@Module({
  imports: [
    ProductsModule, 
    JokeGeneratorModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
