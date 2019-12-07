import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { ServiceService } from './service/service.service';

@Module({
  controllers: [StudentController],
  providers: [ServiceService]
})
export class StudentModule {}
