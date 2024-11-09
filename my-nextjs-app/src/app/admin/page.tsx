'use client'

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Admin = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    return (
        <>
            <Button variant="danger" onClick={handleClick}>Back Home</Button> 
            <br /><br />
            Admin
        </>
    )
}

export default Admin;