import '../styles/loading.css';

export const Loading = () => {
	return (
		<div className="w-full h-full absolute top-0 lef-0 bg-terciary z-50 flex justify-center items-center">
			<div class="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
