import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User.model';
import { Team } from './models/Team.model';
import { UserTeamMaster } from './models/TeamUserMaster.model';
import { Message } from './models/Message.model';
import { Task } from './models/Task.model';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.POSTGRES_URL, 
      type: 'postgres',
      synchronize: true,
      entities: [User, Team, UserTeamMaster, Message, Task],
    }),
    TypeOrmModule.forFeature([User, Team, UserTeamMaster, Message, Task]),
    ProjectsModule,
    TasksModule, // Repositorios para las entidades
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
