import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class messages{
    @PrimaryGeneratedColumn()
    messageId: number

    @Column()
    userId: number

    @Column()
    teamId: number

    @Column()
    projectId: number

    @Column()
    messageContent: string

    @Column({ enum: ["Normal", "Advice"] })
    messageType: string

    @Column({ default: new Date() })
    createdAt: string

    @Column({ default: new Date() })
    updatedAt: string
}