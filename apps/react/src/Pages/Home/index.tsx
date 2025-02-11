import { InteractiveGridPattern } from '@/Components/magicui/interactive-grid-pattern';
import { cn } from '@/lib/utils';
import Login from './components/login';
import { DockDemo } from './components/socials';

function Home() {
  return (
    <>
      <div className="flex justify-between gap-12 pr-12 h-screen overflow-hidden">
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#1a1a1a]">
          <InteractiveGridPattern
            className={cn(
              '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
              'inset-x-0 inset-y-[-30%] h-[160%] skew-y-12'
            )}
            squaresClassName="dark:invert hover:fill-green-800"
          />
        </div>
        <div className="h-auto w-1/3 flex flex-col items-center justify-center">
          <Login />
          <div className="grid grid-cols-2 gap-2 mt-20">
            <DockDemo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
