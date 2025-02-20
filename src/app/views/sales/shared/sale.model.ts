import { UserModel } from "../../users/shared/user.model";

export class SaleModel {
    public Id?: number;
    public AppUser: UserModel;
    public Total: number;
    public Status: number;
    public CreatedAt: Date;
}

export enum StatusModel {
    Paid = 0,
    Cancelled = 1,
}