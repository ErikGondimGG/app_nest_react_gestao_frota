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
import { useAuthStore } from '@/stores/auth.store';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth/authService';
import RegisterSheet from './register';

export default function Login() {
  const { auth } = useAuthStore();

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
    <Card className="flex relative flex-col gap-6 items-center justify-center w-full h-full py-20 overflow-hidden shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                <FormDescription>Informe sua senha.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2">
            <InteractiveHoverButton type="submit">Login</InteractiveHoverButton>
            <RegisterSheet />
          </div>
        </form>
      </Form>

      <BorderBeam duration={18} colorTo="#000000" colorFrom="#00ffaa" />
    </Card>
  );
}
