import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from 'src/dto/request/product/create-product.dto';
import { IProductsRepository } from 'src/repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsRepository')
    private readonly productsRepository: IProductsRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.productsRepository.create(createProductDto);
  }

  async findAll(page: number, pageSize: number, name?: string) {
    return this.productsRepository.findAll(page, pageSize, name);
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: Partial<CreateProductDto>) {
    await this.findOne(id); // Check if product exists
    return this.productsRepository.update(id, updateProductDto);
  }
}
