import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { teams } from "./Team.model";
import { user_team_master } from "./TeamUserMaster.model";

@Entity()
export class users{
    @PrimaryGeneratedColumn()
    userId: number

    @Column({ unique: true })
    username: string

    @Column()
    passwordHash: string

    @Column({ unique: true })
    email: string

    @Column()
    profileUrl: string

    @Column()
    status: boolean

    @Column({ default: new Date() })
    createdAt: string

    @Column({ default: new Date() })
    updatedAt: string

    @ManyToMany(()=> user_team_master, utm => utm.userId)
    teams: user_team_master[]
}