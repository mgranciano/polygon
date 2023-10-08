import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Stock {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column( { length: 30} )
    @Field()
    SYMBOL: string;

    @Column({ length: 5, nullable: true })
    @Field({nullable: true})
    SERIES: string;

    @Column( {type: "decimal", precision: 12, scale: 2} )
    @Field((type) => Float)
    OPEN: number;

    @Column( {type: "decimal", precision: 12, scale: 2} )
    @Field((type) => Float)
    HIGH: number;

    @Column( {type: "decimal", precision: 12, scale: 2} )
    @Field((type) => Float)
    LOW: number;

    @Column( {type: "decimal", precision: 12, scale: 2} )
    @Field((type) => Float)
    CLOSE: number;

    @Column( {type: "decimal", precision: 12, scale: 2} )
    @Field((type) => Float)
    LAST: number;

    @Column( {type: "decimal", precision: 12, scale: 2} )
    @Field((type) => Float)
    PREVCLOSE: number;
    
    @Column( {type: "decimal", precision: 20, scale: 2} )
    @Field((type) => Float)
    TOTTRDQTY: number;

    @Column( {type: "decimal", precision: 20, scale: 2} )
    @Field((type) => Float)
    TOTTRDVAL: number;

    @Column( {type: "datetime"} )
    @Field()
    TIMESTAMP: Date;

    @Column()
    @Field((type) => Int)
    TOTALTRADES: number;

    @Column({ length: 30})
    @Field()
    ISIN: string;
    
}