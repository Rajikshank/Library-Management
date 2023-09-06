import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/logins.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
