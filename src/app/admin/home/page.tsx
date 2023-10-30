'use client'
import styles from './page.module.css'
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
const Home = () => {
    const router = useRouter();
    function handleLogout() {
        Cookie.remove('auth_token')
    
        router.push('/')
    }

    return (
        <div className={styles.center}>
                <h2> Estamos na home admin</h2>
                <button onClick={handleLogout}> Sair</button>
        </div>
         );
};

 export default Home;
