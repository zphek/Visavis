import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserTeamMaster } from "./TeamUserMaster.model";

@Entity()
export class User{
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

    @ManyToMany(()=> UserTeamMaster, utm => utm.userId)
    teams: UserTeamMaster[]
}