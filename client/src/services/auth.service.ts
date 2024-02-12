import { instance } from '../api/axios.api';
import { IUserData } from '../types/types';
import { IResponceUserData } from '../types/types';
import { IUser } from '../types/types';

export const AuthService = {
    async registrartion (userData : IUserData): Promise<IResponceUserData | undefined> {
        const data = await instance.post<IUserData, { data:IResponceUserData }>('user', userData);
        return data.data;
    },
    async login (userData : IUserData): Promise<IUser | undefined> {
        const data = await instance.post<IUser>('auth/login', userData);
        return data.data;
    },
    async getProfile (): Promise<IUser | undefined> {
        const data = await instance.get<IUser>('auth/profile');
        if (data.data) {
            return data.data;
        }
    },
}