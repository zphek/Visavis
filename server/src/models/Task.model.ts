import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class tasks{
    @PrimaryGeneratedColumn()
    taskId: number

    @Column({ unique: true })
    taskName: string

    @Column()
    description: string

    @Column()
    assignedTo: string

    @Column()
    status: boolean

    @Column()
    dueDate: string

    @Column()
    priority: number

    @Column({ default: new Date() })
    createdAt: string

    @Column({ default: new Date() })
    updatedAt: string
}