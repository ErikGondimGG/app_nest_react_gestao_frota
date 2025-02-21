import { Skeleton } from '@/components/ui/skeleton';
import { sleep } from '@/utils/utils';
import React, { useEffect, useState } from 'react';
import { getVeiculos } from '../_actions/_actions';

interface DashboardGridProps {
  open: boolean;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ open }) => {
  const [veiculos, setVeiculos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVeiculos = async () => {
      await sleep(3000);
      const veiculosData = await getVeiculos();
      setLoading(false);
      setVeiculos(veiculosData);
    };

    fetchVeiculos();
  }, []);

  return (
    <div>
      <div>
        <div
          className={`grid transition-all duration-500 ${
            open ? 'grid-cols-4' : 'grid-cols-10'
          } gap-2`}
        >
          {loading ? (
            <>
              {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className={`h-[300px] w-[290px] ${
                    open ? 'col-span-1' : 'col-span-2'
                  }`}
                />
              ))}
            </>
          ) : veiculos.length > 0 ? (
            veiculos.map((veiculo, index) => (
              <div key={index} className="card">
                <h2>{veiculo.name}</h2>
                <p>{veiculo.description}</p>
              </div>
            ))
          ) : (
            <div className="h-full col-span-full flex items-center justify-center text-2xl text-gray-500">
              <h2>Nenhum veículo encontrado</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
