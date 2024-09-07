'use client';

import ss from './Nav.module.scss';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

/* 
    Not really a super functional Nav because at this point on the scope I only have one page.
    But I wanted to practice building a programmatic navigation bar.
*/

const Nav: React.FC = () => {
    const SwitchHomeBtn: React.FC<{intendedPath: string}> = ({intendedPath}) => {
        const path = usePathname();

        if (path === intendedPath) {
            return (
                <Link href={'/'}>
                    <button>Home</button>
                </Link>
            );
        }
        return (
            <Link href={intendedPath}>
                <button>{`${intendedPath.slice(1, 2).toUpperCase()}${intendedPath.slice(2)}`}</button>
            </Link>
        );
    };

    return (
        <div className={ss.nav}>
            <SwitchHomeBtn intendedPath={'/calculator'} />
        </div>
    );
};

export default Nav;
