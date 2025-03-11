import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { ShinyButton } from '@/components/magicui/shiny-button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAuth } from '@/hooks/use-auth';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { LoaderCircle } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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
  const { register, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

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
        <ShinyButton className="rounded-full flex h-full">
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
            id="register-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pt-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">
                    Nome de Usuário
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="dark:text-white"
                      {...field}
                      required
                    />
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
                  <FormLabel className="dark:text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="dark:text-white"
                      {...field}
                      required
                    />
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
                  <FormLabel className="dark:text-white">Senha</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        className="dark:text-white"
                        {...field}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 w-5 text-black dark:text-white" />
                        ) : (
                          <EyeSlashIcon className="h-5 w-5 text-black dark:text-white" />
                        )}
                      </button>
                    </div>
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
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        className="dark:text-white"
                        {...field}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeIcon className="h-5 w-5 text-black dark:text-white" />
                        ) : (
                          <EyeSlashIcon className="h-5 w-5 text-black dark:text-white" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormDescription>Confirme sua senha.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <InteractiveHoverButton
              type="submit"
              form="register-form"
              className="text-black"
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                'Registrar'
              )}
            </InteractiveHoverButton>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default RegisterSheet;
