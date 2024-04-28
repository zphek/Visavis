import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommunicationGateway } from './communication/communication.gateway';
import { ServerGateway } from './server/server.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CommunicationGateway, ServerGateway],
})
export class AppModule {}
