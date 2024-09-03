import ss from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className={ss.header}>
            <Link href={'/'}>
                <Image src="/MJ.svg" alt="logo" width={80} height={80} />
            </Link>
            <h1>Batcheehe</h1>
        </div>
    );
};

export default Header;
