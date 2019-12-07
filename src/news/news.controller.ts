import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    GetNews(): string {
        return 'GetNews ok';
    }
    @Get(':id')
    GetOneNews(@Param('id') id) {
        return 'GetOneNews ok';
    }

    @Post()
    PostNews(@Body() body) {
        return 'PostNews ok';
    }

    @Put(':id')
    PutNews(@Body() body, @Param('id') id) {
        return 'PutNews ok';
    }

    @Delete(':id')
    DeleteNews(@Param('id') id) {
        return 'DeleteNews ok';
    }
}
