# NX13 Display List Users

### Tạo kiểu dữ liệu users

- Tạo file src/types/backend.d.ts

Đoạn mã này định nghĩa một interface `IUser` trong TypeScript. Interface là một cách để định nghĩa cấu trúc của một đối tượng, giúp đảm bảo rằng các đối tượng tuân theo một cấu trúc nhất định. Dưới đây là giải thích chi tiết về từng phần của đoạn mã:

```typescript
interface IUser {
    id: number;
    name: string;
    age: number;
};
```

#### Giải thích từng phần:
- **interface IUser**: Định nghĩa một interface có tên là `IUser`.
- **id: number**: Thuộc tính `id` có kiểu dữ liệu là `number` (số).
- **name: string**: Thuộc tính `name` có kiểu dữ liệu là `string` (chuỗi).
- **age: number**: Thuộc tính `age` có kiểu dữ liệu là `number` (số).

#### Mục đích:
Interface `IUser` này có thể được sử dụng để đảm bảo rằng các đối tượng người dùng (user) có các thuộc tính `id`, `name`, và `age` với các kiểu dữ liệu tương ứng. Ví dụ:

```typescript
const user: IUser = {
    id: 1,
    name: 'John Doe',
    age: 30
};
```

Trong ví dụ trên, đối tượng `user` tuân theo cấu trúc của interface `IUser`, đảm bảo rằng nó có các thuộc tính `id`, `name`, và `age` với các kiểu dữ liệu đúng. Điều này giúp tăng tính nhất quán và an toàn khi làm việc với các đối tượng trong TypeScript.

*Bài tiếp theo [NX13 Display List Blog ](session_13_display_blog.md)*

