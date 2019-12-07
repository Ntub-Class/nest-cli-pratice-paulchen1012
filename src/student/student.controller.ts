import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    GetStudent(): string {
        return 'GetStudent ok';
    }
    @Get(':id')
    GetOneStudent(@Param('id') id) {
        return 'GetOneStudent ok';
    }

    @Post()
    PostStudent(@Body() body) {
        return 'PostStudent ok';
    }

    @Put(':id')
    PutStudent(@Body() body, @Param('id') id) {
        return 'PutStudent ok';
    }

    @Delete(':id')
    DeleteStudent(@Param('id') id) {
        return 'DeleteStudent ok';
    }
}
