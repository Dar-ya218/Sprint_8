import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

export interface ILoginPagePropes{}

const Login = () => {
  const auth = getAuth(); // Obtiene la instancia de autenticación de Firebase
  const navigate = useNavigate(); // Permite la navegación entre rutas
  const [authing, setAuthing] = useState(false); // Estado para controlar el estado de autenticación

  const signInWithEmail = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements; // Obtiene los valores de los campos de correo electrónico y contraseña

    setAuthing(true); // Establece el estado de autenticación en true

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value); // Inicia sesión con el correo electrónico y la contraseña proporcionados
      console.log("Login successful");
      navigate("/"); // Navega a la página principal después de iniciar sesión
    } catch (error) {
      console.log(error);
      setAuthing(false); // Restablece el estado de autenticación en false en caso de error
    }
  };

  return (
    <>
    <Navbar/>
      <div>
        <h1>Login</h1>
        <form onSubmit={signInWithEmail}>
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
          <button type="submit" disabled={authing}>
            Sign in with Email/Password
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
