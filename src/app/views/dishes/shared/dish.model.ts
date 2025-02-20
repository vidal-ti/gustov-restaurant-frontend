export class DishModel {
    public Id: number;
    public Name: string;
    public Price: number;
    public Description: string;
    public IsAvailable: boolean;
}

export class UpdateImageModel {
    public Id: number;
    public Dish: DishModel;
    public Image: string;
}