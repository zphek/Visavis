import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { teams } from "./Team.model";
import { users } from "./User.model";

@Entity()
export class user_team_master{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> users, user => user.userId)
    userId: teams

    @ManyToOne(()=> teams, team => team.teamId)
    teamId: teams
}