import { BorderBeam } from '@/Components/magicui/border-beam';
import { InteractiveHoverButton } from '@/Components/magicui/interactive-hover-button';
import { Card } from '@/Components/ui/card';
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
import { useForm } from 'react-hook-form';
import { login } from '../services/auth/authService';
import RegisterSheet from './register';

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const auth = await login(data.email, data.password);
    alert(auth.message);

    if (auth.token) {
      localStorage.setItem('token', auth.token);
      // Redirect to the dashboard or another page
      window.location.href = '/dashboard';
    }
  };

  return (
    <Card className="flex relative flex-col gap-6 items-center justify-center w-[300px] h-[400px] py-6">
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

          <InteractiveHoverButton type="submit">Login</InteractiveHoverButton>
          <RegisterSheet />
        </form>
      </Form>

      <BorderBeam duration={3} colorTo="#000000" colorFrom="#00ffaa" />
    </Card>
  );
}
