// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { PageHeader } from '@/components/ui/page-header';
// import { useAlert } from '@/hooks/use-alert';
// import { useMutation } from '@/hooks/use-mutation';
// import { useValidate } from '@/hooks/use-validate';
// import { VehicleForm } from './components/vehicle-form';

// export default function VehicleRegisterIndex() {
//   const navigate = useNavigate();
//   const { toastSuccess, toastError } = useAlert();
//   const { mutate, isLoading } = useMutation('vehicles/create');
//   const { validate, errors } = useValidate();

//   const [vehicle, setVehicle] = useState({
//     placa: '',
//     tipo_veiculo_id: '',
//     chassi: '',
//     renavam: '',
//     ano: '',
//     cor: '',
//     capacidade: '',
//     quilometragem: '',
//   });

//   const [isFormValid, setIsFormValid] = useState(true);

//   useEffect(() => {
//     if (errors.length > 0) {
//       toastError('Ocorreram erros no formulário');
//       setIsFormValid(false);
//     } else {
//       setIsFormValid(true);
//     }
//   }, [errors]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       await validate(vehicle);
//       await mutate(vehicle);
//       toastSuccess('Veículo cadastrado com sucesso!');
//       navigate('/veiculos/cadastros');
//     } catch (error) {
//       toastError('Erro ao cadastrar veículo');
//     }
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <PageHeader title="Cadastro de Veículos" />
//       <VehicleForm
//         vehicle={vehicle}
//         setVehicle={setVehicle}
//         errors={errors}
//         handleSubmit={handleSubmit}
//       />
//       <Button
//         type="submit"
//         form="vehicle-form"
//         isLoading={isLoading}
//         className="w-full"
//         disabled={!isFormValid}
//       >
//         Cadastrar
//       </Button>
//     </div>
//   );
// }
