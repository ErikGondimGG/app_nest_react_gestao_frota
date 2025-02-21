import { Form, FormField, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';

interface VehicleFormProps {
  vehicle: any;
  setVehicle: (vehicle: any) => void;
  errors: any;
  handleSubmit: (data: any) => void;
}

const VehicleForm: React.FC<VehicleFormProps> = ({
  vehicle,
  setVehicle,
  errors,
  handleSubmit,
}) => {
  const form = useForm();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Cadastro de Ve&iacute;culo</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Insira as informa&ccedil;&otilde;es do ve&iacute;culo abaixo.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              control={form.control}
              name="placa"
              render={({ field }) => (
                <>
                  <FormLabel>Placa</FormLabel>
                  <Input
                    type="text"
                    placeholder="XXX-XXXX"
                    {...field}
                    className="w-full"
                  />
                </>
              )}
            />
            <FormField
              control={form.control}
              name="modelo"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Modelo do ve&iacute;culo"
                  {...field}
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="ano"
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder="Ano do ve&iacute;culo"
                  {...field}
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="cor"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Cor do ve&iacute;culo"
                  {...field}
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Tag do ve&iacute;culo"
                  {...field}
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="km"
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder="Quilometragem"
                  {...field}
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="hr"
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder="Horímetro"
                  {...field}
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="capacidade_carga"
              render={({ field }) => (
                <Input
                  type="number"
                  placeholder="Capacidade de carga"
                  {...field}
                  className="w-full"
                />
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

// placa: '',
//     marca: '',
//     modelo: '',
//     ano_fabricacao: 0,
//     ano_modelo: 0,
//     cor: '',
//     tag: '',
//     km: 0,
//     hr: 0,
//     capacidade_carga: 0,
//     tipo_veiculo_id: 0,

export default VehicleForm;
