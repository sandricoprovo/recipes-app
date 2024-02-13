import './reset.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Sandrico's Recipe Search App",
    description: 'A search application the allows you to search for recipes on the internet.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
