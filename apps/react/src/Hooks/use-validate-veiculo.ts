import { useState } from 'react';

export const useValidate = () => {
  const [errors, setErrors] = useState({});

  type ValidatorType = {
    [key: string]: (value: any) => string | undefined;
  };

  const validateField = (field: string, value: any) => {
    const validators: ValidatorType = {
      placa: (value: string) => {
        if (value.length < 7) {
          return 'Placa deve ter no mínimo 7 caracteres';
        }
      },
      marca: (value: string) => {
        if (value.length < 3) {
          return 'Marca deve ter no mínimo 3 caracteres';
        }
      },
      modelo: (value: string) => {
        if (value.length < 3) {
          return 'Modelo deve ter no mínimo 3 caracteres';
        }
      },
      ano_fabricacao: (value: number) => {
        if (value < 1900) {
          return 'Ano de fabricação deve ser maior que 1900';
        }
      },
      ano_modelo: (value: number) => {
        if (value < 1900) {
          return 'Ano do modelo deve ser maior que 1900';
        }
      },
      cor: (value: string) => {
        if (value.length < 3) {
          return 'Cor deve ter no mínimo 3 caracteres';
        }
      },
      tag: (value: string) => {
        if (value.length < 3) {
          return 'Tag deve ter no mínimo 3 caracteres';
        }
      },
      km: (value: number) => {
        if (value < 0) {
          return 'Kilometragem deve ser maior ou igual a 0';
        }
      },
      hr: (value: number) => {
        if (value < 0) {
          return 'Hora deve ser maior ou igual a 0';
        }
      },
      capacidade_carga: (value: number) => {
        if (value < 0) {
          return 'Capacidade de carga deve ser maior ou igual a 0';
        }
      },
      tipo_veiculo_id: (value: number) => {
        if (value < 0) {
          return 'Tipo de veículo inválido';
        }
      },
    };

    const error = validators[field] && validators[field](value);

    setErrors(prevState => ({
      ...prevState,
      [field]: error,
    }));
  };

  const validate = (veiculo: any) => {
    const fields = Object.keys(veiculo);

    fields.forEach(field => {
      validateField(field, veiculo[field]);
    });
  };

  return { errors, validate };
};
