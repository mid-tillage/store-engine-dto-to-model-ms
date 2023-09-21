import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateProductOnSaleEvent } from './create-product-on-sale.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_product')
  transformProductOnSale(sale: CreateProductOnSaleEvent) {
    return this.appService.transformProductOnSale(sale);
  }
}
