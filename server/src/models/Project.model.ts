import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class projects{
    @PrimaryGeneratedColumn()
    projectId: number

    @Column({ unique: true })
    projectName: string

    @Column()
    description: string

    @Column()
    repoUrl: string

    @Column()
    status: boolean

    @Column({ default: new Date() })
    createdAt: string

    @Column({ default: new Date() })
    updatedAt: string
}