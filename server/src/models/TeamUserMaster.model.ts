import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Team } from "./Team.model";
import { User } from "./User.model";

@Entity()
export class UserTeamMaster{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> User, user => user.userId)
    userId: User

    @ManyToOne(()=> Team, team => team.teamId)
    teamId: Team
}