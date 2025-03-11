import { Veiculo } from '@/types/veiculo';
import { sleep } from '@/utils/utils';
import axios from 'axios';
import { useState } from 'react';

interface VeiculoData {
  data: Veiculo[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export function useGetVeiculos() {
  const [veiculos, setVeiculos] = useState<VeiculoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [success, setSuccess] = useState(false);

  const getVeiculos = async (id?: string) => {
    setLoading(true);
    setError(null);
    await sleep(3000);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/veiculos/read` +
          `${id ? `?id=${id}` : ''}`
      );

      setVeiculos(response.data);
      setSuccess(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { getVeiculos, veiculos, loading, error, success, setLoading };
}
//       import axios from 'axios';

// export async function getVeiculos() {
//   const veiculos = await axios.get(
//     `${import.meta.env.VITE_API_URL}/veiculos/read`
//   );

//   return veiculos.data;
// }
