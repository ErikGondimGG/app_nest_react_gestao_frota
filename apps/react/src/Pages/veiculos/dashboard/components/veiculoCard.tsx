import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { ShineBorder } from '@/components/magicui/shine-border';
import { cn } from '@/lib/utils';
import { Veiculo } from '@/types/veiculo';
import { ExternalLinkIcon } from 'lucide-react';

interface VeiculoCardProps {
  veiculo: Veiculo;
  open: boolean;
}

const VeiculoCard: React.FC<VeiculoCardProps> = ({ veiculo, open }) => {
  return (
    <>
      <ShineBorder
        className={`${
          open ? 'col-span-1' : 'col-span-2'
        } h-[300px] w-[280px] shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out`}
        color={`${veiculo.placa === 'PXO6789' ? '#ff0000' : '#00ff00'}`}
      >
        <div className="flex flex-col dark:text-white w-full h-full p-4">
          <h3 className="text-2xl font-extrabold">{veiculo.placa}</h3>
          <p className="mt-2 text-lg">{veiculo.modelo}</p>
          <p className="mt-1 text-sm text-gray-500">{veiculo.marca}</p>
          <p className="mt-1 text-sm text-gray-500">
            {veiculo.ano_modelo === veiculo.ano_fabricacao ? (
              <>{veiculo.ano_modelo}</>
            ) : (
              <>
                {veiculo.ano_modelo}/{veiculo.ano_fabricacao}
              </>
            )}
          </p>
          <p className="mt-1 text-sm text-gray-500">{veiculo.cor}</p>
          <div className="mt-auto flex justify-between items-center">
            <span className="text-sm font-medium">Status: {veiculo.km} km</span>
            <a
              href={`/veiculos/detalhes/${veiculo.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cn(
                  'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 '
                )}
              >
                <AnimatedShinyText className="inline-flex items-center text-xs justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  Detalhes
                  <ExternalLinkIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </AnimatedShinyText>
              </div>
            </a>
          </div>
        </div>
      </ShineBorder>
    </>
  );
};

export default VeiculoCard;
