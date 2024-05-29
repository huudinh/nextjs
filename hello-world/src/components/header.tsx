'use client'

import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href={"/admin"}>Admin</Link>
                </li>
                <li>
                    <Link href={"/admin/dashboard"}>DashBoard</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;