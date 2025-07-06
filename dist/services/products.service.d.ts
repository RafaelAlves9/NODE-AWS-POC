import { CreateProductDto } from 'src/dto/request/product/create-product.dto';
import { IProductsRepository } from 'src/repositories/products.repository';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: IProductsRepository);
    create(createProductDto: CreateProductDto): Promise<import("../entities/product.entity").Product>;
    findAll(page: number, pageSize: number, name?: string): Promise<import("../entities/product.entity").Product[]>;
    findOne(id: number): Promise<import("../entities/product.entity").Product>;
    update(id: number, updateProductDto: Partial<CreateProductDto>): Promise<import("../entities/product.entity").Product>;
}
