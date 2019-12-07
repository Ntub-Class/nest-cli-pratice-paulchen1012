import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    GetrUser(): string {
        return 'GetrUser ok';
    }
    @Get(':id')
    GetOneUser(@Param('id') id) {
        return 'GetOneUser ok';
    }

    @Post()
    PostUser(@Body() body) {
        return 'PostUser ok';
    }

    @Put(':id')
    PutUser(@Body() body, @Param('id') id) {
        return 'PutUser ok';
    }

    @Delete(':id')
    DeleteUser(@Param('id') id) {
        return 'DeleteUser ok';
    }
}
