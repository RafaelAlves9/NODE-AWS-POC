"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("../controllers/products.controller");
const prisma_products_repository_1 = require("../repositories/prisma-products.repository");
const products_service_1 = require("../services/products.service");
const prisma_module_1 = require("../infrastructure/prisma/prisma.module");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [products_controller_1.ProductsController],
        providers: [
            products_service_1.ProductsService,
            {
                provide: 'ProductsRepository',
                useClass: prisma_products_repository_1.PrismaProductsRepository,
            },
        ],
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map