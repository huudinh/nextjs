'use client';
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter();

    const goToHome = () => {
        router.push('/');
    };

    return (
        <div className='container'>
            <h1>About</h1>
            <button onClick={goToHome}>Go to Home Page</button>
            {
              <style>{`
                  .container{
                    max-width:800px;
                    margin:10px auto;
                  }
                    button{
                      padding:5px 10px;
                    }
              `}</style>
            }
        </div>
    );
};

export default About;