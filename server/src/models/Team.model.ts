import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserTeamMaster } from "./TeamUserMaster.model";

@Entity()
export class Team{
    @PrimaryGeneratedColumn()
    teamId: number

    @Column({ unique: true })
    teamName: string

    @Column({ default: new Date() })
    createdAt: string

    @Column({ default: new Date() })
    updatedAt: string

    @Column({ length: 255 })
    description: string

    @Column({ default: 0 })
    teamMembers: number

    @ManyToOne(()=> UserTeamMaster, utm => utm.teamId)
    teams: UserTeamMaster[]
}