// import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"/admin"}>Admin</Link>
        </li>
        <li>
          <Link href={"/admin/dashboard"}>DashBoard</Link>
        </li>
      </ul>

      <div className={styles.description}>Hello world</div>
    </>
  );
}

export default Home;
