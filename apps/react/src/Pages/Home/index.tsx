import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern';
import { cn } from '@/lib/utils';
import { GalleryVerticalEnd } from 'lucide-react';
import Login from './components/login';
import { DockSocials } from './components/socials';

function Home() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#1a1a1a] overflow-hidden gap-6 bg-muted p-6 md:p-10">
      <InteractiveGridPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-25%] h-[160%] pl-60 skew-y-12'
        )}
        squaresClassName="dark:hover:fill-green-800 hover:fill-green-200"
      />
      <div className="relative flex w-full max-w-sm  flex-col gap-2">
        <a
          href="#"
          className="flex items-center gap-2 self-center font-medium dark:text-white"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <Login />
        <div className="pointer-events-none h-fit w-fit text-balance text-center text-xs dark:text-white text-muted-foreground [&_a]:pointer-events-auto [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          Ao clicar em Login, você concordará com os{' '}
          <a href="#">Termos de Serviço</a> e{' '}
          <a href="#">Política de Privacidade</a>.
        </div>
        <div className="flex items-center justify-center ">
          <DockSocials />
        </div>
      </div>
    </div>

    // <>
    //   <div className="flex justify-between gap-12 pr-12 h-screen overflow-hidden dark:bg-stone-700">
    //     <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#1a1a1a]">
    //       <InteractiveGridPattern
    //         className={cn(
    //           '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
    //           'inset-x-0 inset-y-[-30%] h-[160%] skew-y-12'
    //         )}
    //         squaresClassName="hover:fill-green-800"
    //       />
    //     </div>
    //     <div className="h-auto w-1/3 flex flex-col items-center justify-center ">
    //       <Login />
    //       <div className="flex items-center justify-center ">
    //         <DockSocials />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default Home;
