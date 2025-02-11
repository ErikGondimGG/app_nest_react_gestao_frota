import { InteractiveHoverButton } from '@/Components/magicui/interactive-hover-button';
import { ShinyButton } from '@/Components/magicui/shiny-button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/Components/ui/sheet';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../services/auth/authService';

const RegisterSheet: React.FC = () => {
  const form = useForm<{
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    if (data.password !== data.passwordConfirmation) {
      alert('As senhas devem ser iguais!');
      return;
    }

    const auth = await register(data.name, data.email, data.password);
    alert(auth.message);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShinyButton className="rounded-full flex h-fit">
          <span className="text-xs">Registar</span>
        </ShinyButton>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Registrar</SheetTitle>
          <SheetDescription>
            Crie uma nova conta preenchendo os campos abaixo.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pt-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome de Usuário</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} required />
                  </FormControl>
                  <FormDescription>Informe seu nome.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} required />
                  </FormControl>
                  <FormDescription>Informe seu email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} required />
                  </FormControl>
                  <FormDescription>Crie uma senha.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" {...field} required />
                  </FormControl>
                  <FormDescription>Confirme sua senha.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <InteractiveHoverButton type="submit">
              Comfirmar
            </InteractiveHoverButton>
          </form>
        </Form>
        <SheetClose className="absolute right-4 top-4">
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default RegisterSheet;
