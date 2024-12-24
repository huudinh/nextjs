'use client';
import ListData from "@/components/ListData";
import styles from "./page.module.css";
import useSWR from 'swr'

const Home = () => {

  const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  // console.log(data);

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div className={styles.description}>Danh sách người dùng</div>
      {data && <ListData users={data} />}
    </>
  );
}

export default Home;
