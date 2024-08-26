import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { user_team_master } from "./TeamUserMaster.model";

@Entity()
export class teams{
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

    @ManyToOne(()=> user_team_master, utm => utm.teamId)
    teams: user_team_master[]
}