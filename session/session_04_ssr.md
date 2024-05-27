# NX4 Server Component

### Server side rendering

Server Component, có thể hiểu là SSR (server side rendering), là cách render dữ liệu 100% ở phía server.

Quy trình:

- Client truy cập route "/" => server render dữ liệu tương ứng với route "/" => gửi kết quả cho client

- Client truy cập route "/about" => server render dữ liệu tương ứng với route "/about" => gửi kết quả cho client

### Ưu điểm

Client chỉ "khởi tạo request" và "nhận kết quả" => tốc độ load trang web rất nhanh

### Nhược điểm

- Việc tối ưu hóa UI trên server khá khó code, tốn time và khó maintain (code chay HTML, CSS kết hợp với template engine)

- Cần cấu hình server đủ mạnh (RAM, CPU)

*Bài tiếp theo [NX5 Tại sao cần Next.js ](/session/session_05_why.md)*