import Link from 'next/link';
import { Fragment } from 'react';
import { ThemeToggle } from '../theme-toggle';
import { Scrollbar } from './client';

export default function Header() {
    return (
        <Fragment>
            <header className='sticky top-0 backdrop-blur-md bg-background/15'>
                <div className='mx-5 h-16 flex items-center justify-between'>
                    <div>
                        <Link href={'/'} className='font-semibold'>
                            Op Blog
                        </Link>
                    </div>
                    <nav>
                        <ThemeToggle />
                    </nav>
                </div>
                <div className='w-full bg-muted-foreground/20 h-[1px] relative overflow-hidden'>
                    <Scrollbar />
                </div>
            </header>

            {/* <div className='fixed top-0 right-4 w-[1px] h-screen bg-muted-foreground/20' />
			<div className='fixed top-[8.5px] right-[8.25px] size-4 bg-[#e3e3e3] dark:bg-[#292929] rotate-45 origin-center' /> */}
        </Fragment>
    );
}
