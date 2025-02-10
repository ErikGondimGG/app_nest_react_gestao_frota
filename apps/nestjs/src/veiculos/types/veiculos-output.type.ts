export type VeiculosOutputDto = {
  id?: number;
  placa?: string;
  marca?: string;
  modelo?: string;
  ano_fabricacao?: number;
  ano_modelo?: number;
  cor?: string;
  tag?: string;
  km?: number;
  hr?: number;
  capacidade_carga?: number;
  tipo_veiculo_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  tipo_veiculo?: TiposVeiculosOutputDto;
};

export type TiposVeiculosOutputDto = {
  id?: number;
  descricao?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};
