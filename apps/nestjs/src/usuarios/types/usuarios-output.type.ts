import { ContatosWppOutputType } from 'src/contatos_wpp/types/contatos-wpp-output.type';

export type UsuariosOutputType = {
  id?: number;
  email?: string;
  name?: string;
  password?: string;
  isAdmin?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  contatos_wpp?: ContatosWppOutputType[];
};
