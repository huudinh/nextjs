// import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <ul>
        <li><a href="/admin">Admin</a></li>
        <li><a href="/admin/dashboard">DashBoard</a></li>
      </ul>

      <div className={styles.description}>Hello world</div>
    </>
  );
}

export default Home;
