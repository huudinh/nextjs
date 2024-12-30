'use client'
import useSWR, { Fetcher } from 'swr'
import Link from 'next/link'

const ViewDetailUser = ({ params } : { params: { id: string } }) => {
    const fetcher:Fetcher<User> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(`/api/users?id=${params.id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    if (isLoading) return <div>Loading...</div>
    return (
        <div> 
            <p>Chi tiết <b>User</b> có id: {params.id}</p>
            <p>Họ tên: <b>{data?.name}</b></p>
            <p>Tuổi: <b>{data?.age}</b></p>
            <p><Link href="/admin/users/">Quay lại</Link></p>
        </div>
    )
}

export default ViewDetailUser;