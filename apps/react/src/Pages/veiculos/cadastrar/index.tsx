import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useAlert } from '@/hooks/use-alert';
import { useCadastrarVeiculo } from '@/hooks/use-cadastrar-veiculo';
import { useValidate } from '@/hooks/use-validate-veiculo';
import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSidebar } from '../../../components/sidebar/app-sidebar';
import VehicleForm from './components/vehicle-form';

const VehicleRegisterIndex: React.FC = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastError } = useAlert();
  const { validate, errors } = useValidate();
  const { cadastrar, loading } = useCadastrarVeiculo();
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState({
    placa: '',
    marca: '',
    modelo: '',
    ano_fabricacao: 0,
    ano_modelo: 0,
    cor: '',
    tag: '',
    km: 0,
    hr: 0,
    capacidade_carga: 0,
    tipo_veiculo_id: 0,
  });

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    if (errors && Object.keys(errors).length > 0) {
      toastError('Ocorreram erros no formulário');
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errors]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      validate(vehicle);
      await cadastrar(vehicle);
      toastSuccess('Veículo cadastrado com sucesso!');
      navigate('/veiculos/cadastros');
    } catch (error) {
      toastError('Erro ao cadastrar veículo');
    }
  };

  return (
    <>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar variant="sidebar" />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-black dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-black dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </Button>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  Cadastrar Veículo
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div>
            <VehicleForm
              vehicle={vehicle}
              setVehicle={setVehicle}
              errors={errors}
              handleSubmit={handleSubmit}
            />
            <Button
              type="submit"
              form="vehicle-form"
              className="w-full"
              disabled={!isFormValid}
            >
              {loading ? (
                <LoaderCircle className="animate-spin " />
              ) : (
                'Cadastrar'
              )}
            </Button>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default VehicleRegisterIndex;
