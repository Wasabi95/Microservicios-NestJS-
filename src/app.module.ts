import { Module } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Carpeta donde estará el HTML
    }),
    CountryModule,
  ],
})
export class AppModule {}
