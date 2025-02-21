import { apiUrl } from '@/constants/urls';
import axios from 'axios';
import { useState } from 'react';

type Veiculo = {
  placa: string;
  marca: string;
  modelo: string;
  ano_fabricacao: number;
  ano_modelo: number;
  cor: string;
  tag: string;
  km: number;
  hr: number;
  capacidade_carga: number;
  tipo_veiculo_id: number;
};

export const useCadastrarVeiculo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const cadastrar = async (veiculo: Veiculo) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${apiUrl}/veiculos/create`, veiculo);

      setData(response.data);
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { cadastrar, loading, error, data };
};
