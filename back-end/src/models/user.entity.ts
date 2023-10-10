import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    BeforeInsert,
    BeforeUpdate,
  } from 'typeorm';
import { hash } from 'bcryptjs';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User{
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @Field()
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255, default: '', nullable: true  })
  @Field()
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Field()
  email: string;

  @Column({ type: 'varchar', length: 128, nullable: false, select: false })
  password: string;

  @Column({ type: 'tinyint', default: true })
  status: boolean;

  @Column({ name: 'created_at', type: 'datetime2', default : () => 'GETDATE()' })
  createdAt: Date;

  @Column({ type: 'simple-array' })
  @Field(()=>[String])
  roles: string[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
