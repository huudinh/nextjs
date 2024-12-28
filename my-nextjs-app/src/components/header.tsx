'use client'

import Link from 'next/link';
import styles from '@/styles/app.module.scss';

const Header = () => {
    return (
        <header>
            <ul className={styles.menu}>
                <li>
                    <Link href={"/admin"}>Admin</Link>
                </li>
                <li>
                    <Link href={"/admin/dashboard"}>DashBoard</Link>
                </li>
                <li>
                    <Link href={"/admin/users"}>Users</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;