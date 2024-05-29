'use client'

import { useRouter } from "next/navigation";

const Admin = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    return (
        <>
            <button onClick={handleClick}>Back Home</button> 
            <br /><br />
            Admin
        </>
    )
}

export default Admin;