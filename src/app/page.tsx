import Header from '@/components/global/header';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<main className='h-[500vh]'>
				<div>hello world</div>
			</main>
		</Fragment>
	);
}
