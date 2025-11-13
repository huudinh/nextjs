# NX12 SWR

SWR là một thư viện React Hooks được phát triển bởi nhóm Next.js để hỗ trợ việc fetch dữ liệu phía client. Tên SWR xuất phát từ "stale-while-revalidate", một chiến lược vô hiệu hóa cache phổ biến.

### Đặc điểm của SWR:

1. **Caching**: SWR lưu trữ dữ liệu đã fetch vào cache và trả về dữ liệu này ngay lập tức khi cần, giúp tăng tốc độ phản hồi.

2. **Revalidation**: Sau khi trả về dữ liệu từ cache, SWR sẽ gửi yêu cầu fetch mới để cập nhật dữ liệu và đảm bảo rằng dữ liệu luôn mới nhất.

3. **Focus Tracking**: Khi người dùng quay lại tab hoặc cửa sổ trình duyệt, SWR sẽ tự động revalidate dữ liệu.

4. **Refetching on Intervals**: SWR có thể tự động refetch dữ liệu theo khoảng thời gian định kỳ.

5. **Request Deduplication**: SWR sẽ loại bỏ các yêu cầu lặp lại, giúp giảm tải cho server 

### Lợi ích của SWR:

- **Tăng tốc độ phản hồi**: Bằng cách sử dụng cache, SWR giúp tăng tốc độ phản hồi của ứng dụng.

- **Dữ liệu luôn mới nhất**: SWR tự động revalidate dữ liệu, đảm bảo rằng dữ liệu luôn được cập nhật.

- **Giảm tải cho server**: SWR loại bỏ các yêu cầu lặp lại, giúp giảm tải cho server.

SWR là một công cụ mạnh mẽ và linh hoạt, giúp bạn dễ dàng quản lý việc fetch dữ liệu trong các ứng dụng React và Next.js. Bạn có thể tìm hiểu thêm về SWR và cách sử dụng nó trong tài liệu chính thức của Next.js.

### Cài đặt SWR

Mở terminal và chạy lệnh sau để cài đặt SWR:

```
npm install swr
```

hoặc

```
yarn add swr
```

### Ví dụ sử dụng SWR trong Next.js:

```javascript
import useSWR from 'swr'

function ListData() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  console.log(data);

  return data.length;
}
```
### Giải thích:

1. **Cài đặt SWR**: Sử dụng lệnh `npm install swr` hoặc `yarn add swr` để cài đặt SWR vào dự án của bạn.

2. **Sử dụng SWR**: Import `useSWR` từ thư viện SWR và sử dụng nó trong component React của bạn.

3. **Fetcher function**: Định nghĩa một hàm `fetcher` để fetch dữ liệu từ API. Trong ví dụ này, hàm `fetcher` sử dụng `fetch` để lấy dữ liệu từ URL và trả về kết quả dưới dạng JSON.

4. **useSWR hook**: Sử dụng hook `useSWR` để fetch dữ liệu từ API. Hook này trả về hai giá trị: `data` và `error`. Nếu có lỗi xảy ra, hiển thị thông báo lỗi. Nếu dữ liệu đang được tải, hiển thị thông báo "Loading...". Khi dữ liệu đã được tải, hiển thị dữ liệu trong giao diện người dùng.


*Bài tiếp theo [NX13 Display List Users](session_13_display_users.md)*

