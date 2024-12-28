'use client'
import styles from "../../page.module.css";
import ListData from "@/components/ListData";
import useSWR from 'swr'

const Users = () => {
    const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  if (isLoading) return <div>Loading...</div>

    return (
        <>
            <h1 className={styles.description}>Danh sách người dùng</h1>
            <ListData users={data} />
        </>
    )
}

export default Users;