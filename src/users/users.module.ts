import { UsersController } from './users.controller';
import { Module, Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
