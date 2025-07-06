import { CreateProductDto } from 'src/dto/request/product/create-product.dto';
import { Product } from 'src/entities/product.entity';
export interface IProductsRepository {
    create(data: CreateProductDto): Promise<Product>;
    findAll(page: number, pageSize: number, name?: string): Promise<Product[]>;
    findById(id: number): Promise<Product | null>;
    update(id: number, data: Partial<CreateProductDto>): Promise<Product>;
}
