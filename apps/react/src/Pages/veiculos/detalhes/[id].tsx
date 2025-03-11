import { useGetVeiculos } from '@/hooks/use-get-veiculos';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getVeiculos, veiculos, loading, error, success } = useGetVeiculos();

  useEffect(() => {
    getVeiculos(id);
  }, [id]);

  if ((!loading && !success) || !veiculos || veiculos.meta.total <= 0) {
    return null;
  }

  const veiculo = veiculos.data[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <p>
          <strong>Modelo:</strong> {veiculo.modelo}
        </p>
        <p>
          <strong>Marca:</strong> {veiculo.marca}
        </p>
        <p>
          <strong>Ano:</strong> {veiculo.ano_modelo}/{veiculo.ano_fabricacao}
        </p>
        <p>
          <strong>Cor:</strong> {veiculo.cor}
        </p>
        <p>
          <strong>Quilometragem:</strong> {veiculo.km} km
        </p>
        <p>
          <strong>Horímetro:</strong> {veiculo.hr}
        </p>
      </div>
    </div>
  );
};

export default VehicleDetail;
