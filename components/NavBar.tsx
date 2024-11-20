import facebook_logo from '@/public/facebook.svg';
import instagram_logo from '@/public/instagram.svg';
import twitter_logo from '@/public/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
	return (
		<nav className='flex justify-between items-center py-12 border-b border-black/20 px-20'>
			<Image src='/logo.svg' alt='Logo' width={110} height={30} priority />

			<div className='flex justify-between items-center gap-[3.75rem] font-inter font-medium text-base'>
				<Link href='/'>Home</Link>
				<Link href='/recipes'>Recipes</Link>
				<Link href='/blog'>Blog</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/about-us'>About us</Link>
			</div>

			<div className='flex justify-between items-center gap-10'>
				<Link href='/' target='_blank'>
					<Image src={facebook_logo} alt='Logo' />
				</Link>
				<Link href='/recipes' target='_blank'>
					<Image src={twitter_logo} alt='Logo' />
				</Link>
				<Link href='/blog' target='_blank'>
					<Image src={instagram_logo} alt='Logo' />
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
