'use client';
import Link from "next/link"

const Home = () => {

  return (
    <div className="container">
      <h1>Hello</h1>
      <p><Link href="/about">About</Link></p>
      {
        <style>{`
            a{
                color:red;
                text-decoration:none;
            }
            .container{
              max-width:800px;
              margin:10px auto;
            }
        `}</style>
      }
    </div>
  );
}








export default Home;
