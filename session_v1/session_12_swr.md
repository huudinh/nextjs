# NX12 SWR

SWR là một thư viện React Hooks được phát triển bởi nhóm Next.js để hỗ trợ việc fetch dữ liệu phía client. Tên SWR xuất phát từ "stale-while-revalidate", một chiến lược vô hiệu hóa cache phổ biến trong HTTP RFC 5861.

### Đặc điểm của SWR:

1. **Caching**: SWR lưu trữ dữ liệu đã fetch vào cache và trả về dữ liệu này ngay lập tức khi cần, giúp tăng tốc độ phản hồi.

2. **Revalidation**: Sau khi trả về dữ liệu từ cache, SWR sẽ gửi yêu cầu fetch mới để cập nhật dữ liệu và đảm bảo rằng dữ liệu luôn mới nhất.

3. **Focus Tracking**: Khi người dùng quay lại tab hoặc cửa sổ trình duyệt, SWR sẽ tự động revalidate dữ liệu.

4. **Refetching on Intervals**: SWR có thể tự động refetch dữ liệu theo khoảng thời gian định kỳ.

5. **Request Deduplication**: SWR sẽ loại bỏ các yêu cầu lặp lại, giúp giảm tải cho server 

### Ví dụ sử dụng SWR trong Next.js:

```javascript
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}

export default Profile;
```

### Lợi ích của SWR:

- **Tăng tốc độ phản hồi**: Bằng cách sử dụng cache, SWR giúp tăng tốc độ phản hồi của ứng dụng.

- **Dữ liệu luôn mới nhất**: SWR tự động revalidate dữ liệu, đảm bảo rằng dữ liệu luôn được cập nhật.

- **Giảm tải cho server**: SWR loại bỏ các yêu cầu lặp lại, giúp giảm tải cho server.

SWR là một công cụ mạnh mẽ và linh hoạt, giúp bạn dễ dàng quản lý việc fetch dữ liệu trong các ứng dụng React và Next.js. Bạn có thể tìm hiểu thêm về SWR và cách sử dụng nó trong tài liệu chính thức của Next.js.

*Bài tiếp theo [NX13 SWR ](session_13_swr.md)*

