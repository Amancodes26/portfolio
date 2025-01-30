import { ContactMe, HeroBtn, Projects } from '@/components';
import Skills from '@/components/Skills';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Home() {
  return (
    <>
      <div
        className="min-h-[60vh] sm:min-h-[80vh] md:min-h-screen w-full flex-col relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
        id="home"
      >
        <div className="pt-20 select-none text-center">
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 from-neutral-600 to-neutral-800 py-2">
            Hi <span className="wave text-black">👋</span>
          </p>
          <div className="flex items-center justify-center gap-5">
            <span className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white">
              I&apos;m
            </span>
            <p className="my-6 text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-gray-200 dark:to-blue-500 from-red-600 to-pink-800 py-2 cursor-pointer">
              Aman Singh
            </p>
          </div>
          <HeroBtn />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 py-10">
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2023 Aman Singh
      </footer>
      <GoogleAnalytics gaId="G-SBWBC4757H" />
    </>
  );
}
