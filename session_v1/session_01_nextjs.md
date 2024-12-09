# NX1 Nextjs là gì?

Next.js là một framework React để xây dựng các ứng dụng web full-stack. Bạn sử dụng Thành phần React để xây dựng giao diện người dùng và Next.js để có các tính năng bổ sung và tối ưu hóa.

Về cơ bản, Next.js cũng tóm tắt và tự động định cấu hình công cụ cần thiết cho React, như đóng gói, biên dịch, v.v. Điều này cho phép bạn tập trung vào việc xây dựng ứng dụng của mình thay vì dành thời gian cho việc cấu hình.

Cho dù bạn là nhà phát triển cá nhân hay thành viên của một nhóm lớn hơn, Next.js có thể giúp bạn xây dựng các ứng dụng React tương tác, năng động và nhanh chóng.

### Nhược điểm của React

- React là Thư viện, Không phải là Framework

- React không cung cấp các giải pháp tích hợp cho các khía cạnh quan trọng như tổ chức code, điều hướng trang (routing), quản lý state, v.v. Điều này dẫn đến việc mỗi dự án React có thể có cấu trúc và cách tiếp cận khác nhau.

- Bạn cần chọn và tích hợp các thư viện bổ sung như React Router (cho routing), Redux hoặc Context API (cho quản lý state), và các công cụ khác để hoàn thiện ứng dụng.

### Lý do cần Nextjs

Next.js ra đời để giải quyết những hạn chế của React, cung cấp một giải pháp toàn diện và thống nhất cho việc phát triển ứng dụng web với React

- Next.js cung cấp một cấu trúc dự án mặc định và hệ thống routing tự động dựa trên cấu trúc thư mục. Điều này giúp các nhà phát triển dễ dàng quản lý và mở rộng dự án mà không cần phải thiết lập cấu trúc từ đầu.

- Next.js có hệ thống routing tích hợp, không cần phải cài đặt thêm thư viện như React Router. Chỉ cần tạo các file trong thư mục pages là bạn đã có các route tương ứng.

- Next.js tích hợp tốt với các giải pháp quản lý state như Redux, Context API, MobX, v.v. Dù không cung cấp một giải pháp quản lý state tích hợp sẵn, nhưng cấu trúc và các công cụ của Next.js giúp dễ dàng tích hợp và sử dụng các giải pháp này.

- Next.js hỗ trợ SSR và SSG, giúp cải thiện hiệu suất và SEO cho ứng dụng. SSR giúp trang web có thể được render trên server trước khi gửi đến client, cải thiện thời gian tải trang và khả năng crawl của các công cụ tìm kiếm.

- Với việc hỗ trợ SSR và các tính năng tối ưu hóa khác, Next.js giúp các trang web được index tốt hơn bởi các công cụ tìm kiếm, cải thiện SEO tổng thể.

### Không nên sử dụng Nextjs cho Backend

- Next.js có hỗ trợ API Routes, nhưng khả năng này khá cơ bản và thường chỉ phù hợp cho các tác vụ đơn giản hoặc xử lý dữ liệu nhẹ

- Với các ứng dụng yêu cầu xử lý backend phức tạp, quản lý database, authentication, etc., việc sử dụng một framework chuyên biệt như Nest.js là hợp lý hơn.

- Nếu Next.js đảm nhận toàn bộ nhiệm vụ backend và được phơi trực tiếp ra internet, có thể dẫn đến các vấn đề bảo mật nếu không được cấu hình và bảo vệ đúng cách.

Sử dụng Next.js cho frontend và một framework khác như Nest.js cho backend có thể giúp dự án của bạn dễ quản lý và bảo mật hơn. Next.js tối ưu hóa cho việc phát triển frontend với các tính năng mạnh mẽ về routing, SSR, SSG, và tối ưu hóa hiệu suất, trong khi Nest.js cung cấp một nền tảng mạnh mẽ và linh hoạt cho việc phát triển backend phức tạp và bảo mật

### Cấu trúc Nextjs cho FrontEnd

```
my-nextjs-app/
├── pages/
│   ├── index.js
│   ├── about.js
│   ├── api/
│   │   └── hello.js
├── components/
│   ├── Header.js
│   └── Footer.js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── public/
│   └── images/
│       └── logo.png
├── lib/
│   └── fetcher.js
└── next.config.js

```


*Bài tiếp theo [NX2 Cài đặt Nextjs](/session/session_02_setup.md)*