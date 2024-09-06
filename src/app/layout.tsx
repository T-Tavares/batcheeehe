import type {Metadata} from 'next';
import './globals.scss';
import ss from './layout.module.scss';
import Nav from '@/Layout/Nav/Nav';
import {RecipeProvider} from '@/Context/RecipeContext/RecipeContext';

export const metadata: Metadata = {
    title: 'Batcheehe',
    description: 'Batch Calculator for Bartenders',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <RecipeProvider>
                    <div className={ss.container}>
                        <div className={ss.content}>{children}</div>
                        <Nav />
                    </div>
                </RecipeProvider>
            </body>
        </html>
    );
}
