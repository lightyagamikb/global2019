import Link from 'next/link';
import Header from './components/Header';
import './../styles/index.css';

export default () => (
    <div>
        <Header isHome />
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href='/about'>
            <a>about</a>
        </Link>
    </div>
)
