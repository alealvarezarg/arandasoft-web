import { Rol } from "./rol";

export interface User {
    id: number;
    username: string;
    password: string;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    age: number;
    rol: Rol;
}