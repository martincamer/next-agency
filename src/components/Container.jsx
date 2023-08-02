export const Container = ({ children, width }) => {
	return (
		<section className={`${width} h-full mx-auto max-w-full max-md:px-6`}>
			{children}
		</section>
	);
};
