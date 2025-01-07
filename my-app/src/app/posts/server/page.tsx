// app/page.tsx
import { use } from 'react';

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/');
  const data = await response.json();
  return data;
}

export default function Home() {
  const data = use(fetchData());

  return (
    <div>
      <h1>Data</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.body}</p>
      {/* ... display other data */}
    </div>
  );
}
