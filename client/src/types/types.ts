export interface IUserData {
    email: string;
    password: string;
}

export interface IResponceUser {
    createdAt: string;
    email: string;
    id: number;
    password: string;
    updatedAt: string;
}

export interface IResponceUserData { 
    token: string;
    user: IResponceUser;   
}

export interface IUser {
    id: number;
    email: string;
    token: string;
}