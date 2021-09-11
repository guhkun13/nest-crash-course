import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Controller, Get, Param, Post, Body, Query, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    
    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({name:'name', required:false})
    @Get()
    getUsers(@Query('name') name? :string): User[] {
        return this.usersService.findAll(name)
    }
    
    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()    
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {
        console.log('typeof id => ', typeof(id));
        const user = this.usersService.findById(id);
        if (!user){
            throw new NotFoundException();
        }
        
        return user;
    }
    
    @ApiCreatedResponse({type:User})
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: CreateUserDto) : User {
        return this.usersService.create(body);
    }
    
}
