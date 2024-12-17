// import Image from "next/image";
import ListData from "@/components/ListData";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.description}>Danh sách người dùng</div>
      <ListData />
    </>
  );
}

export default Home;
