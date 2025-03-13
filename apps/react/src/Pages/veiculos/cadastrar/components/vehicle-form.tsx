import { Form, FormField, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface VehicleFormProps {
  vehicle: any;
  setVehicle: (vehicle: any) => void;
  errors: any;
  handleSubmit: (data: any) => void;
  validate: (vehicle: any) => void;
}

const VehicleForm: React.FC<VehicleFormProps> = ({
  vehicle,
  setVehicle,
  errors,
  handleSubmit,
  validate,
}) => {
  const form = useForm({
    defaultValues: vehicle,
  });

  const fields = [
    { name: 'placa', type: 'text', placeholder: 'Placa do veículo' },
    { name: 'marca', type: 'text', placeholder: 'Marca do veículo' },
    { name: 'modelo', type: 'text', placeholder: 'Modelo do veículo' },
    {
      name: 'ano_fabricacao',
      type: 'number',
      placeholder: 'Ano de fabricação',
    },
    { name: 'ano_modelo', type: 'number', placeholder: 'Ano do modelo' },
    { name: 'cor', type: 'text', placeholder: 'Cor do veículo' },
    { name: 'tag', type: 'text', placeholder: 'Tag do veículo' },
    { name: 'km', type: 'number', placeholder: 'Quilometragem' },
    { name: 'hr', type: 'number', placeholder: 'Horímetro' },
    {
      name: 'capacidade_carga',
      type: 'number',
      placeholder: 'Capacidade de carga',
    },
    { name: 'tipo', type: 'string', placeholder: 'Tipo de veículo' },
  ];

  const onSubmit = (data: any) => {
    setVehicle(data);
    validate(data);

    if (errors && Object.values(errors).some(value => value !== undefined)) {
      return;
    }

    handleSubmit(data);
  };

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name) {
        setVehicle({ ...vehicle, [name]: value[name] });
        validate({ [name]: value[name] });
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch, validate]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full px-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold dark:text-gray-300">
            Cadastro de Veículo
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Insira as informações do veículo abaixo.
          </p>
        </div>
        <Form {...form}>
          <form
            id="vehicle-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-8 grid grid-cols-12"
          >
            {fields.map((field, index) => (
              <div
                key={field.name}
                className={
                  index >= fields.length - 3 ? 'col-span-4' : 'col-span-3'
                }
              >
                <FormField
                  control={form.control}
                  name={field.name}
                  render={({ field: formField }) => (
                    <>
                      <FormLabel className="dark:text-gray-300">
                        {field.placeholder}
                      </FormLabel>
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...formField}
                        className={`w-full dark:text-white ${
                          errors[field.name] &&
                          formField.value &&
                          'border-red-500 dark:border-red-400'
                        }`}
                        onChange={e => {
                          const value = e.target.value;
                          formField.onChange(
                            field.name === 'placa' ? value.toUpperCase() : value
                          );
                        }}
                      />
                      {errors[field.name] && formField.value && (
                        <p className="text-red-500 text-sm">
                          {errors[field.name]}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            ))}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VehicleForm;
