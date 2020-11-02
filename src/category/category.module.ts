import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { proCategory } from './categorydata/procategory.entity';

@Module({

    imports: [TypeOrmModule,TypeOrmModule.forFeature([proCategory],'cats')],
    controllers: [ CategoryController],
    providers: [ CategoryService],
    exports: [CategoryService,]




})
export class CategoryModule {}