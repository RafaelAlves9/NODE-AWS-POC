import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { IProductsRepository } from './products.repository';
import { CreateProductDto } from 'src/dto/request/product/create-product.dto';
import { Product } from 'src/entities/product.entity';
export declare class PrismaProductsRepository implements IProductsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): Promise<Product>;
    findAll(page: number, pageSize: number, name?: string): Promise<Product[]>;
    findById(id: number): Promise<Product | null>;
    update(id: number, data: Partial<CreateProductDto>): Promise<Product>;
}
