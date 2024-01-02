import Header from '@/components/global/header';
import Image from 'next/image';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<main className='pr-5'>
				<section>
					<div className='mx-[4%]'>
						<div className='pt-24'>
							<h2 className='text-8xl font-bold pb-12'>Op Blog.</h2>
							<hr className='border-muted-foreground/60' />
							<Image src={'/ui/hero-image.png'} className='w-full h-auto mt-4' width={100} height={100} alt='hero-image' loading='lazy' unoptimized />
						</div>
					</div>
				</section>
			</main>
		</Fragment>
	);
}
