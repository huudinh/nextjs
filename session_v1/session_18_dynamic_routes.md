# NX18 Dynamic Routes

Dynamic Routes trong Next.js là một tính năng cho phép bạn tạo các đường dẫn (routes) động mà không cần biết trước tên của các đoạn đường dẫn (segments). Điều này rất hữu ích khi bạn muốn tạo các trang từ dữ liệu động, chẳng hạn như các bài viết blog, sản phẩm, hoặc người dùng.

### Cách hoạt động của Dynamic Routes
Trong Next.js, bạn có thể tạo các Dynamic Routes bằng cách sử dụng các đoạn đường dẫn động (dynamic segments) được điền vào lúc yêu cầu (request time) hoặc được prerendered tại thời điểm build.

### Cú pháp
Để tạo một Dynamic Route, bạn sử dụng dấu ngoặc vuông trong tên file. Ví dụ, để tạo một trang động cho các bài viết blog, bạn có thể tạo một file như sau:

```
pages/posts/[id].js
```

Trong file này, `[id]` là một đoạn đường dẫn động. Khi người dùng truy cập vào đường dẫn `/posts/1`, Next.js sẽ render trang `pages/posts/[id].js` với `id` là `1`.

### Ví dụ
Dưới đây là một ví dụ về cách sử dụng Dynamic Routes trong Next.js:

```javascript
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;
```

### Pre-rendering với getStaticPaths và getStaticProps
Để pre-render các trang động, bạn có thể sử dụng các hàm `getStaticPaths` và `getStaticProps`. Dưới đây là một ví dụ:

```javascript
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = {
    id: params.id,
    title: `Post ${params.id}`,
    content: `This is the content of post ${params.id}.`,
  };

  return { props: { post } };
}

export default Post;
```




*Bài tiếp theo [NX18 Dynamic Routes](session_18_dynamic_routes.md)*