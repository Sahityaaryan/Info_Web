function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://www.linkedin.com/in/dr-shailesh-m-pandey-34961820/?originalSubdomain=in"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
				Shailesh Mani Pandey
				</a>
				
				
			</div>
		</div>
	);
}

export default AppFooterCopyright;
