import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';

export default function Header() {
	return (
		<header className='border-b px-[4%]'>
			<div className='max-w-maxi mx-auto h-16 flex items-center justify-between'>
				<div className='flex items-center justify-center'>
					<Link href={'/'} className='font-semibold'>
						Op Blog
					</Link>
				</div>
				<nav className='flex items-center justify-center'>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
