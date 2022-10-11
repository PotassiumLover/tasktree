import http from '../util/http';
import User from '../types/User';
import AuthService from './authService';

export default class UserService {
  static async getUser(id: number): Promise<User> {
    const response = await http.get(`/users/${id}`, { 
      headers: { 
        Authorization: `Bearer ${await AuthService.getJWT()}`
      }
    });
    return response.data;
  }

  static async createUser(user: User): Promise<User> {
    const response = await http.post('/users', user);
    return response.data;
  }

  // TODO: we should return the updated user from the endpoint
  static async updateUser(user: User) {
    await http.put(`/users/${user.id}`, user);
  }

  // TODO: we should return if the deletion succeeded or not
  static async deleteUser(id: number) {
    await http.delete(`/users/${id}`);
  }

  static async authenticateUser(username: string, password: string): Promise<string> {
    const response = await http.post(`/users/auth`, { Username: username, Password: password })
    console.log(response.data);
    return response.data;
  }
}