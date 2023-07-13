
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const SignUp = () => {
	// Obtener la instancia de autenticación de Firebase
	const auth = getAuth();
	// Obtener el objeto de navegación para redirigir al usuario después del registro
	const navigate = useNavigate();
	// Estado para controlar el proceso de registro
	const [registering, setRegistering] = useState(false);

	// Función para manejar el registro de usuario
	const handleRegister = async (event: any) => {
		event.preventDefault();
		const { email, password } = event.target.elements;

		// Establecer el estado de registro en true para mostrar un indicador de carga
		setRegistering(true);
		try {
			// Crear un nuevo usuario con correo electrónico y contraseña utilizando la instancia de autenticación de Firebase
			await createUserWithEmailAndPassword(auth, email.value, password.value);
			console.log("Registration successful");
			// Redirigir al usuario a la página de inicio de sesión después del registro exitoso
			navigate("/login");
		} catch (error) {
			console.log('holaaaa aqui');
			console.log(error);
			// En caso de error, restablecer el estado de registro a false
			setRegistering(false);
		}
	};

	return (
		<div>
			<Navbar/>
			<h1>Register Now</h1>
			<form onSubmit={handleRegister}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" required />
				</div>
				<div>
					<p>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
					</p>
				</div>
				<div>
					<p>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
					</p>
				</div>
				<button type="submit" disabled={registering}>
					Register
				</button>
			</form>
		</div>
	);
};

export default SignUp;
