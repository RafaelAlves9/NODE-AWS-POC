import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { IProductsRepository } from './products.repository';
import { CreateProductDto } from 'src/dto/request/product/create-product.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class PrismaProductsRepository implements IProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data,
    });
    return { ...newProduct, price: newProduct.price.toNumber() };
  }

  async findAll(
    page: number,
    pageSize: number,
    name?: string,
  ): Promise<Product[]> {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const where = name
      ? {
          name: {
            contains: name,
          },
        }
      : {};

    const products = await this.prisma.product.findMany({
      where,
      skip,
      take,
    });

    return products.map((p) => ({ ...p, price: p.price.toNumber() }));
  }

  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) return null;
    return { ...product, price: product.price.toNumber() };
  }

  async update(id: number, data: Partial<CreateProductDto>): Promise<Product> {
    const product = await this.prisma.product.update({
      where: { id },
      data: {
        ...data,
        ...(data.price && { price: data.price }),
      },
    });
    return { ...product, price: product.price.toNumber() };
  }
}
