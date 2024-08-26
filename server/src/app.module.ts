import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './models/User.model';
import { teams } from './models/Team.model';
import { user_team_master } from './models/TeamUserMaster.model';
import { messages } from './models/Message.model';
import { tasks } from './models/Task.model';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      url: process.env.POSTGRES_URL,
      type: 'postgres',
      synchronize: true,
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [users, teams, user_team_master], // Especifica las entidades aquí
    }),
    TypeOrmModule.forFeature([users, teams, user_team_master, messages, tasks]) // Esto va dentro de imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
