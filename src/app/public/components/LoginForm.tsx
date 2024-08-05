import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const LoginForm = () => {
  return (
    <div className='flex flex-col w-full items-center'data-testid={'login-form'}>
      <form className='space-y-5 p-4 w-4/5 flex flex-col lg:mx-auto'>
        <div className=''>
          <Input placeholder='E-mail' name='email' />
        </div>
        <div className=''>
          <Input type='password' placeholder='Senha' name='password' />
        </div>
        <Button type='submit' className='w-full' data-testid='login-submit'>
          Acessar
        </Button>
      </form>
    </div>
  );
};
