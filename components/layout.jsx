import Head from 'next/head';
import { NavigationFooter, NavigationHeader } from './';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Automate building of websites and web application projects using Next.JS 13 in classic mode, Tailwind CSS and Javascript."
				/>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>Next.JS 13 Classic Starter Template</title>
			</Head>

			<div className="font-ubuntu text-neutral-800 antialiased">
				<header>
					<NavigationHeader />
				</header>

				<main>{children}</main>

				<footer>
					<NavigationFooter />
				</footer>
			</div>
		</>
	);
}
