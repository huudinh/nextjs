# NX3 Client Component (SPA)

React, Angular, Vue là những thư viện/framework chuyên làm UI cho client. Client component chính là CSR (client side rendering)

### SPA là gì

Client component ám chỉ quá trình render giao diện (component) xảy ra tại client (hay còn biết tới là SPA - single page application)

Quy trình thực hiện:

- Client vào trang web, đây là quá trình khởi tạo request đầu tiên lên server

- Server nhận yêu cầu, trả về duy nhất file index.html

- Client nhận file index.html để render dữ liệu cho người dùng. Kể từ đây, việc 'tương tác giao diện' của người dùng sẽ được xử hoàn toàn 100% ở browser của client

- Trong trường hợp client cần hiển thị thông tin động (dynamic), ví dụ như hiển thị table, cần khởi tạo request lên server để lấy dữ liệu

Ở đây, sử dụng hình thức Restful APIs, như vậy vẫn đảm bảo được trải nghiệm của client mà không cần reload website

### Ưu điểm

- Tăng trải nghiệm của người dùng (SPA - single page application), dễ thấy nhất là "ít khi" cần reload lại website. Ví dụ Facebook

- Giảm thiểu "gánh nặng cho server", việc tính toán và xử lý giao diện sẽ nằm 100% ở client

- Server với cấu hình yếu vẫn hoạt động ok 

### Nhược điểm

- Nếu browser (máy tính, điện thoại...) của client là thiết bị yếu (RAM, CPU..., hoặc slow network), quá trình render "lần đầu" sẽ tốn thời gian.

- Việc khởi tạo request đầu tiên lên server (lầy file index.html) về để render giao diện, vì bây giờ, tất cả "giao diện của website" đều phải được load trước

*Bài tiếp theo [NX4 Server Component](/session/session_04_ssr.md)*