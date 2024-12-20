// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  id: number;
  name: string;
  age: number;
};

interface IUsers {
  users: IUser[];
}


let users: User[] = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Michael Johnson', age: 45 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id, name, age } = req.body;

  switch (method) {
    case 'GET':
      // Trả về danh sách user
      res.status(200).json(users);
      break;
    case 'POST':
      // Thêm một user mới
      const newUser: User = { id: users.length + 1, name, age };
      users.push(newUser);
      res.status(201).json(newUser);
      break;
    case 'PUT':
      // Sửa một user
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        users[userIndex] = { id, name, age };
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    case 'DELETE':
      // Xóa một user
      const updatedUsers = users.filter(user => user.id !== id);
      if (updatedUsers.length !== users.length) {
        users = updatedUsers;
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}
