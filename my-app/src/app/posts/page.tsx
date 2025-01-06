'use client';
import { useState, useEffect } from 'react';

interface Data {
  // Define the shape of your data here
  id: number;
  body: string;
  // ... other properties
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.body}</p>
      {/* ... display other data */}
    </div>
  );
}