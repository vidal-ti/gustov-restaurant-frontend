export class UserModel {
    public Id: number;
    public Name: string;
    public UserName: string;
    public Password: string;
    public Role: number;
    public IsActive: boolean;
    public Created: Date;
}

export enum RoleModel {
    Administrador = 0,
    Contador = 1,
    Empleado = 2,
}