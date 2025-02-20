import { DishModel } from "../../dishes/shared/dish.model";
import { SaleModel } from "../../sales/shared/sale.model";

export class SaleDetailModel {
    public Id: number;
    public Quantity: number;
    public UnitPrice: number;
    public SubTotal: number;
    public Sale: SaleModel;
    public Dish: DishModel;
}
