import { Card } from '@/components/ui/card';
import { useGetVeiculos } from '@/hooks/use-get-veiculos';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getVeiculos, veiculos, loading, success } = useGetVeiculos();

  useEffect(() => {
    getVeiculos(id);
  }, [id]);

  if ((!loading && !success) || !veiculos || veiculos.meta.total <= 0) {
    return null;
  }

  const veiculo = veiculos.data[0];

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="grid grid-cols-4 gap-6 max-w[400px]">
        <Card className="dark:bg-yellow-600 ">Ordens de Serviço</Card>
        <Card className="dark:bg-red-800">Ordens de Manutenção</Card>
        <Card className="dark:bg-indigo-900">Agendamentos</Card>
        <Card className="dark:bg-sky-700">Tempo Ocioso</Card>
      </div>
    </div>
  );
};

export default VehicleDetail;
