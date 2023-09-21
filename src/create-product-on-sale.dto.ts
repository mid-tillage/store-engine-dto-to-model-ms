export class CreateProductOnSaleDto {
    title: string;
    product: {
        name: string;
        description: string;
        enterprise: {
            name: string;
        };
    };
    price: number;
    catalog: {
        name: string;
    }
}