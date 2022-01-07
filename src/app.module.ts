import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GisModule } from './gis/gis.module';

@Module({
  imports: [GisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
