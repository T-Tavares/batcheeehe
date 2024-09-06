import styles from './page.module.scss';
import Image from 'next/image';

export default function Home() {
    return (
        <main className={styles.main}>
            <Image src="/MJ.svg" alt="logo" width={10} height={10} />
            <h1>Batcheehe</h1>
        </main>
    );
}
