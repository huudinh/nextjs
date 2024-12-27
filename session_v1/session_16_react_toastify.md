# NX16 React Toastify

React Toastify là một thư viện dành cho React giúp bạn tạo ra các thông báo dạng toast một cách nhanh chóng và dễ dàng. Toast là những thông báo nhỏ xuất hiện ở góc màn hình, thông báo cho người dùng về một sự kiện nào đó mà không làm gián đoạn trải nghiệm của họ.

### Lợi ích của React Toastify
- **Dễ sử dụng**: Chỉ cần vài dòng code, bạn đã có thể hiển thị thông báo.
- **Tùy chỉnh cao**: Bạn có thể thay đổi vị trí, kiểu dáng, thời gian hiển thị và nhiều thứ khác.
- **Nhẹ và hiệu quả**: Thư viện nhỏ gọn, không ảnh hưởng nhiều đến hiệu suất của ứng dụng.
- **Hỗ trợ nhiều loại thông báo**: Bao gồm thông báo thành công, cảnh báo, lỗi, và thông tin.

### Cách sử dụng React Toastify
1. **Cài đặt thư viện**:
    ```bash
    npm install react-toastify
    ```

2. **Import và cấu hình**:
    ```javascript
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    toast.configure({
      autoClose: 2000,
      draggable: false,
      position: toast.POSITION.TOP_LEFT
    });

    const notify = () => toast('Wow so easy!');

    const App = () => (
      <div className="App">
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
    ```

3. **Hiển thị thông báo**:
    - Sử dụng hàm `toast()` để hiển thị thông báo.
    - Bạn có thể tùy chỉnh thông báo với các loại như `toast.success()`, `toast.error()`, `toast.info()`, và `toast.warning()`.

React Toastify giúp bạn dễ dàng thêm các thông báo đẹp mắt và hiệu quả vào ứng dụng React của mình.

: [React Toastify là gì?](https://200lab.io/blog/react-toastify-la-gi/)
: [5 thư viện React.js tuyệt vời mà bạn nên biết](https://viblo.asia/p/5-thu-vien-reactjs-tuyet-voi-ma-ban-nen-biet-1VgZve4rKAw)


*Bài tiếp theo [NX15 Design Modal Add New](session_15_add_new.md)*

