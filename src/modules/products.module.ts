import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products.controller';
import { PrismaProductsRepository } from 'src/repositories/prisma-products.repository';
import { ProductsService } from 'src/services/products.service';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'ProductsRepository',
      useClass: PrismaProductsRepository,
    },
  ],
})
export class ProductsModule {}
