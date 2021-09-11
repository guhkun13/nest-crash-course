import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    
    private users: User[] = [
        {
            id: 1,
            name: 'guhkun'
        },
        {
            id: 2,
            name: 'ganteng'
        }
    ]
    
    findAll(name? :string) : User[]{

        if (name){
            return this.users.filter(user => user.name === name)
        }
        return this.users;
    }
    
    findById(id: number) : User{
        let user = this.users.find(user => user.id === id)
        console.log('findById ' + id +' => ' + user);
        
        return user;
    }
    
    create(createUserDto: CreateUserDto) : User{
        const newUser = {id: Date.now(), ...createUserDto};
        
        this.users.push(newUser);
        
        return newUser
    }
}
