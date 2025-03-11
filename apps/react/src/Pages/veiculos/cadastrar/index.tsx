import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { useCadastrarVeiculo } from '@/hooks/use-cadastrar-veiculo';
import { useValidate } from '@/hooks/use-validate-veiculo';
import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import VehicleForm from './components/vehicle-form';

const VehicleRegisterIndex: React.FC = () => {
  const { validate, errors } = useValidate();
  const { cadastrar, success, loading } = useCadastrarVeiculo();
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
    tipo: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const allFieldsFilled = Object.values(vehicle).every(value => value !== '');

    if (errors && Object.values(errors).some(value => value !== undefined)) {
      setIsFormValid(false);
    } else {
      setIsFormValid(allFieldsFilled);
    }
  }, [errors, vehicle]);

  const handleSubmit = async (data: any) => {
    try {
      await cadastrar(data);

      if (!success) {
        return;
      }

      alert('Veículo cadastrado com sucesso!');
      window.location.replace('/veiculos/cadastrar');
    } catch (error) {
      alert('Erro ao cadastrar veículo');
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 py-4">
        <VehicleForm
          vehicle={vehicle}
          setVehicle={setVehicle}
          errors={errors}
          handleSubmit={handleSubmit}
          validate={validate}
        />
        <InteractiveHoverButton
          type="submit"
          form="vehicle-form"
          disabled={!isFormValid}
          className="mx-8 max-w-xs justify-center items-center"
          withBeam
        >
          {loading ? <LoaderCircle className="animate-spin " /> : 'Cadastrar'}
        </InteractiveHoverButton>
      </div>
    </>
  );
};

export default VehicleRegisterIndex;
