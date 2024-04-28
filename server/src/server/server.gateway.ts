import { 
SubscribeMessage, 
WebSocketGateway, 
OnGatewayInit, 
WebSocketServer, 
OnGatewayConnection,
OnGatewayDisconnect
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway(3000, {
  cors: {
    origin: "*"
  }
})
export class ServerGateway 
implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  
  @SubscribeMessage('signin')
  handleLogin(username:string, password:string){

  }

  @SubscribeMessage('signup')
  handleRegister(username:string, password:string){
    
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  afterInit(server: any) {
      
  }

  handleConnection(client: any, ...args: any[]) {
      
  }

  handleDisconnect(client: any) {
      
  }
}

