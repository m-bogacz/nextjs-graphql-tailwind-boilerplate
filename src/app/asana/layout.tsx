export default function YoutrackLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<header className="mt-5 w-screen text-center">Welcome to Asana</header>
			{children}
		</div>
	);
}
