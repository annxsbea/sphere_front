import { Mail, LockKeyhole } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SignUpForm=()=>{
    return (
        <div className='flex flex-col w-full items-center' data-testid='sign-up-form'>
        <form className='space-y-4 p-4 w-4/5 flex flex-col lg:mx-auto'>
        <div className='flex flex-col'>
            <Input
              placeholder='Nome'
              name='nome'
              data-testid='nome'
            />
          </div>
          <div className='flex flex-col'>
            <Input
              placeholder='Bio'
              name='Bio'
              data-testid='Bio'
            />
          </div>
          <div className='flex flex-col'>
            <Input
              placeholder='E-mail'
              name='email'
              data-testid='signup-email'
            />
          </div>
          <div className='flex flex-col'>
            <Input
              type='password'
              placeholder='senha'
              name='password'
              data-testid='signup-password'
            />
          </div>
          <Button type='submit' className='w-full' data-testid='submit-signup'>
            Criar conta
          </Button>
        </form>
      </div>
    )
}