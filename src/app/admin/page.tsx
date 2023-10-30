'use client'
import Cookie  from 'js-cookie';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    function handleLogin(){
        Cookie.set('auth_token', 'ffdfdyuyd7666363tv3v63rt63');
        router.push ('/admin/home')
    }
    return (
        <div >
            
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Senha" />
                <button onClick={handleLogin}>Entrar</button>

            
        </div>
    );
};

export default Login;