# NX10 Tạo Table với React Bootstrap

Để tạo một bảng (table) với React Bootstrap, bạn có thể sử dụng các thành phần có sẵn của thư viện này. Dưới đây là một ví dụ cơ bản về cách tạo một bảng với React Bootstrap

### 1. Cài đặt React Bootstrap

Trước tiên, bạn cần cài đặt React Bootstrap và Bootstrap nếu bạn chưa cài đặt chúng:

```
npm install react-bootstrap bootstrap
```

### 2. Import Bootstrap CSS

Thêm Bootstrap CSS vào tệp src/app/Layout.tsx

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 3. Tạo bảng với React Bootstrap

Dưới đây là một ví dụ về cách tạo một bảng đơn giản với React Bootstrap:

```
import React from 'react';
import { Table } from 'react-bootstrap';

const MyTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Michael Johnson', age: 45 },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
```

*Bài tiếp theo [NX11 Cài đặt Backend ](session_11_backend.md)*