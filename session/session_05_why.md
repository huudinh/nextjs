# NX5 Tại sao cần Next.js

### Nếu dùng CSR (client side rendering)

Tốc độ load trang sẽ chậm (nếu thiết bị/network của client yếu)

Đổi lại, code UI "rất sướng" khi sử dụng React/Angular/Vue, đồng thời, chi phí duy trì server nó "rẻ"

### Nếu dùng SSR (server side rendering)

Tốc độ load trang nhanh hơn nhiều so với CSR (kể cả thiết bị/network của client yếu)

Đổi lại, code UI "khổ" vì cần code chay HTML, CSS (với template engine), đồng thời, chi phí server nó "cao hơn CSR"

### Next.JS sinh ra để giải quyết vấn đề trên (hybrid app)

- next.js là server (backend), nó đảm bảo được tốc độ load trang nhanh

- Để khắc phục việc code UI "khổ" tại server, Next.js hõ trợ code "React" ở server => amazing

- Cần 1 server ở cấu hình trung bình là đã chạy được Next.js. wow :v

=> Như vậy, Nextjs là giải pháp để dung hòa giữa việc sử dụng chỉ mình "CSR" hay "SSR" như cách truyền thống

*Bài tiếp theo [NX6 Tư duy sử dụng component](/session/session_06_component.md)*