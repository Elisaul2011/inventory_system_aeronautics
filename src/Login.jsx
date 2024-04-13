import { useState, useRef  } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/authProvider";
import { Toast } from "primereact/toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const toast = useRef(null);
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return <Navigate to="/inventario-general"></Navigate>;
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // agregar la lógica para enviar los datos del formulario
    console.log("Username:", username);
    console.log("Password:", password);

    if (username == "admin" && password == "admin") {
      navigate("/home");
    } else {
      setValid(true);
      show()
    }
  };


  const show = () => {
    toast.current.show({
      severity: "Warn",
      summary: "warning",
      detail: "Usuario invalido",
    });
  };

  return (
    
    <form className="form " onSubmit={handleSubmit}>
      <div>
        <h1>Inicio de Sesión</h1>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Iniciar sesión</button>

      {valid && (
        <Toast ref={toast} position="bottom-center" />
        // <Message severity="error" text="Usuario invalido" />
      )}
    </form>
  );
};

export default Login;
