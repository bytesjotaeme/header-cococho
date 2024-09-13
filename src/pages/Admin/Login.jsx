
import { useContext, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import config from '../../utils/config';
import { AuthContext } from '../../contexts/Context';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const backServerUrl = config.backServerUrl

    const validateForm = () => {
        const newErrors = {};

        if (!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = 'El email no es válido';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()){
            return;
        }
        try {
            const response = await fetch(`${backServerUrl}auth/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              });
        
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
        
              const data = await response.json();
              console.log(data)
              navigate('/admin/products');
              const token = data.token;
              if (token) {
                login(token);
              }
        } catch (error) {
            console.error('Error al iniciar sesión: ', error);
        }
    }

  return (
    <div className="container-login">
      <div className="form-container">
        <div className="header-login">
          <img
            src="https://res.cloudinary.com/dtbv2vppz/image/upload/v1725929625/cocohoLogo_wwks8u.jpg"
            alt="Cococho Logo"
            className="logo"
            width="100"
            height="100"
          />
          <h2 className="title">Cococho</h2>
          <p className="subtitle">¡Bienvenid@, ingresa tu correo <br/>y contraseña para continuar!</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ingresa tu email"
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className='text-danger'>{errors.email}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={e => setPassword(e.target.value)}
              className="input"
              required
            />
            {errors.password && <div className='text-danger'>{errors.password}</div>}
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={e => setShowPassword(e.target.checked)}

            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
          </div>
          <div className="actions">
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
            <a href="/404" className="forgot-password">
              Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Login