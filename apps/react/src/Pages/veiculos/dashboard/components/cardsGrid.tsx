import { Skeleton } from '@/components/ui/skeleton';
import { useGetVeiculos } from '@/hooks/use-get-veiculos';
import React from 'react';
import VeiculoCard from './veiculoCard';

interface DashboardGridProps {
  open: boolean;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ open }) => {
  const { getVeiculos, veiculos, loading, success } = useGetVeiculos();

  React.useEffect(() => {
    getVeiculos();
  }, []);

  return (
    <div
      className={`grid overflow-visible transition-all duration-700 ease-in-out ${
        open ? 'grid-cols-4' : 'grid-cols-10'
      } gap-4`}
    >
      {loading ? (
        <>
          {Array.from({ length: open ? 12 : 15 }).map((_, i) => (
            <Skeleton
              key={i}
              className={`h-[300px] w-[290px] transition-all duration-7000 ease-in-out ${
                open ? 'col-span-1' : 'col-span-2'
              }`}
            />
          ))}
        </>
      ) : veiculos && veiculos.meta.total > 0 ? (
        veiculos.data.map((veiculo, index) => (
          <VeiculoCard key={index} veiculo={veiculo} open={open} />
        ))
      ) : (
        <div className="h-full col-span-full flex items-center justify-center text-2xl text-gray-500">
          <h2>Nenhum veículo encontrado</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardGrid;
