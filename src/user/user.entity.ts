import { Profile } from 'src/profile/profile.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Profile, (item) => item.user, { eager: true })
  @JoinColumn({ name: 'profile' })
  profile: Profile;
}
