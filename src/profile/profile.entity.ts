import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  image: string;

  @OneToOne(() => User, (item) => item.profile)
  user: User;
}
