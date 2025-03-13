import { BorderBeam } from '@/components/magicui/border-beam';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Card } from '@/components/ui/card';
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
import { useAuth } from '@/hooks/use-auth';
import { useAuthStore } from '@/stores/auth.store';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Ajuste para a versão 2
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RegisterSheet from './register';

export default function Login() {
  const { auth } = useAuthStore();
  const { login, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    await login(data.email, data.password, { auth });
  };

  return (
    <Card className="flex relative flex-col gap-6 items-center justify-center py-16 overflow-hidden shadow-lg">
      <Form {...form}>
        <form
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 "
        >
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
                <FormControl className="relative">
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
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
                <FormDescription>Informe sua senha.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-1 w-full">
            <InteractiveHoverButton
              type="submit"
              form="login-form"
              className="flex w-full"
            >
              <span className="w-full">
                {loading ? <LoaderCircle className="animate-spin" /> : 'Login'}
              </span>
            </InteractiveHoverButton>
            <RegisterSheet />
          </div>
        </form>
      </Form>

      <BorderBeam duration={18} colorTo="#000000" colorFrom="#00ffaa" />
    </Card>
  );
}
