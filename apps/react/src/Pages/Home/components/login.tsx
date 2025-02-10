import { useState } from 'react';
import { login } from '../services/auth/authService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = await login(email, password);
    alert(auth.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        required={true}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        required={true}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
