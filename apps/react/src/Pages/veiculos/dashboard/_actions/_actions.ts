import axios from 'axios';

export async function getVeiculos() {
  const veiculos = await axios.get(
    `${import.meta.env.VITE_API_URL}/veiculos/read`
  );

  return veiculos.data;
}
