import { Container, Button } from '../components';

export const Contacto = () => {
	return (
		<Container width={'w-[1220px] py-[150px] max-md:py-[60px] space-y-14'}>
			<div className="space-y-3 w-[60%] max-md:w-full max-md:px-2">
				<p className="text-sm text-gray-700">MANDAME UN MENSAJE</p>
				<h4 className="text-[40px] max-md:text-[25px]">
					Conctame ahora con el siguiente formulario.
				</h4>
			</div>

			<form className="bg-six p-20 space-y-6 max-md:p-6">
				<div className="flex gap-10 w-full max-md:flex-col">
					<div className="flex flex-col space-y-2 w-full">
						<label
							className="text-lg max-md:text-base font-medium"
							htmlFor=""
						>
							NOMBRE
						</label>
						<input
							type="text"
							placeholder="Tu Nombre"
							className="p-3 border-[1px] border-black outline-none"
						/>
					</div>
					<div className="flex flex-col space-y-2 w-full">
						<label
							className="text-lg max-md:text-base font-medium"
							htmlFor=""
						>
							APELLIDO
						</label>
						<input
							type="text"
							placeholder="Tu Apellido"
							className="p-3 border-[1px] border-black outline-none"
						/>
					</div>
				</div>
				<div className="flex gap-10 w-full max-md:flex-col">
					<div className="flex flex-col space-y-2 w-full">
						<label
							className="text-lg max-md:text-base font-medium"
							htmlFor=""
						>
							EMAIL
						</label>
						<input
							type="text"
							placeholder="Tu Nombre"
							className="p-3 border-[1px] border-black outline-none"
						/>
					</div>
					<div className="flex flex-col space-y-2 w-full">
						<label
							className="text-lg max-md:text-base font-medium"
							htmlFor=""
						>
							TELEFONO
						</label>
						<input
							type="text"
							placeholder="Tu Apellido"
							className="p-3 border-[1px] border-black outline-none"
						/>
					</div>
				</div>
				<div className="flex gap-10 w-full">
					<div className="flex flex-col space-y-2 w-full">
						<label
							className="text-lg max-md:text-base font-medium"
							htmlFor=""
						>
							ELEGI EL PRODUCTO A CONSULTAR
						</label>
						<select className="p-3 border-[1px] border-black outline-none">
							<option value="">DISEÑO WEB</option>
							<option value="">TIENDA ONLINE</option>
							<option value="">LANDING PAGE</option>
							<option value="">DISEÑO UX UI</option>
						</select>
					</div>
				</div>
				<div className="flex gap-10 w-full">
					<div className="flex flex-col space-y-2 w-full">
						<label
							className="text-lg max-md:text-base font-medium"
							htmlFor=""
						>
							MENSAJE
						</label>
						<textarea
							type="text"
							placeholder="Deja Tu Mensaje...."
							className="p-3 border-[1px] border-black outline-none"
						/>
					</div>
				</div>

				<div className="flex gap-3 max-md:flex-col">
					<Button
						style={
							'bg-terciary text-white hover:bg-white hover:border-[1px] hover:text-black hover:border-black transition-all duration-300 ease max-md:text-[12px]'
						}
					>
						<button type="submit">ENVIAR MENSAJE</button>
					</Button>
					<Button
						style={
							'bg-white border-[1px] border-black text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease max-md:text-[12px]'
						}
					>
						RESET
					</Button>
				</div>
			</form>
		</Container>
	);
};
