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
  tipo: string;
};

export const useCadastrarVeiculo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [success, setSuccess] = useState(false);

  const cadastrar = async (veiculo: Veiculo) => {
    setLoading(true);
    setError(null);

    // console.log(veiculo);

    try {
      const response = await axios.post(`${apiUrl}/veiculos/create`, veiculo);

      setData(response.data);
      setSuccess(true);
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

  return { cadastrar, loading, error, data, success };
};
