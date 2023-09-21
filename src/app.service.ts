import { Injectable, Logger } from '@nestjs/common';
import { CreateProductOnSaleEvent } from './create-product-on-sale.event';
import { CreateProductOnSaleDto } from './create-product-on-sale.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor() { }

  getHello(): string {
    return 'Hello World!';
  }

  transformProductOnSale(sale: CreateProductOnSaleEvent) {
    console.log(sale);
    const dto: CreateProductOnSaleDto = {
      title: sale.title,
      price: sale.price,
      product: {
        name: sale.product.name,
        description: sale.product.description,
        enterprise: {
          name: sale.product.enterprise.name
        }
      },
      catalog: {
        name: sale.catalog.name
      }
    };
    this.logger.debug({ input: sale, output: dto }, 'Product On Sale Transform');
    return dto;
  }
}
