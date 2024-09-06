import ss from './Nav.module.scss';
import Link from 'next/link';
const Nav: React.FC = () => {
    return (
        <div className={ss.nav}>
            <Link href={'/calculator'}>
                <button>Calculator</button>
            </Link>
            <Link href={'/recipes'}>
                <button>Recipes</button>
            </Link>
        </div>
    );
};

export default Nav;
