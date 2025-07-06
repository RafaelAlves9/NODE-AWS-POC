import { CreateProductDto } from 'src/dto/request/product/create-product.dto';
import { ProductsService } from 'src/services/products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("../entities/product.entity").Product>;
    findAll(page?: number, pageSize?: number, name?: string): Promise<import("../entities/product.entity").Product[]>;
    findOne(id: number): Promise<import("../entities/product.entity").Product>;
    update(id: number, updateProductDto: Partial<CreateProductDto>): Promise<import("../entities/product.entity").Product>;
}
