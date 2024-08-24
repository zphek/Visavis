import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CommunicationGateway } from './communication/communication.gateway';
// import { ServerGateway } from './server/server.gateway';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
  // providers: [AppService, CommunicationGateway, ServerGateway],
})
export class AppModule {}
