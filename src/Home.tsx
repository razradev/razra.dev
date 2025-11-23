import { Title } from "@solidjs/meta";
import MatthewIves from "./assets/logo/MatthewIves";
import AwardSection from "./components/AwardSection";
import Icon from "./components/Icon";
import IconLink from "./components/IconLink";
import NavLink from "./components/NavLink";

export default function Home() {
  return (
    <>
      <Title>Matthew Ives</Title>
      <div class="flex max-md:flex-col gap-x-24 gap-y-2 justify-evenly">
        <header class="flex flex-col w-64 lg:w-md relative z-10">
          <div class="sticky top-16">
            <div class="flex flex-col w-full">
              <MatthewIves class="fill-slate-50 w-full lg:-mb-17 select-none" />
              <div class="w-fit lg:ml-51 text-nowrap max-lg:mt-2">
                <h1 class="text-lg/[1.15] text-slate-200">
                  High School Programmer <br /> CLASS OF 2028
                </h1>
                <div class="max-lg:hidden">
                  <IconLink
                    class="text-2xl"
                    icon="github"
                    href="https://github.com/razradev"
                  />
                </div>
              </div>
            </div>
            <p class="max-lg:mt-2">I make apps, games, and websites.</p>
            <div class="mt-2 -mb-6 lg:hidden">
              <IconLink
                class="text-2xl"
                icon="github"
                href="https://github.com/razradev"
              />
            </div>
            <div class="flex flex-col gap-y-2 bottom-16 fixed">
              <NavLink>About</NavLink>
              <NavLink>Awards</NavLink>
              <NavLink>Games</NavLink>
              <NavLink>Contact</NavLink>
            </div>
          </div>
        </header>
        <div class="my-8 h-1 w-full bg-slate-800 rounded-full md:hidden" />
        <main class="md:max-w-md flex flex-col gap-y-2">
          <h1>
            <Icon icon="news" class="mr-2" />
            About
          </h1>
          <p>
            I'm a high schooler who loves programming apps, games, and software.
            I love being able to turn text and numbers into art, tools, and
            entertainment.
            <br />
            <br />
            I'm graduating in 2028, and taking every computer science course I
            can for now (currently AP Computer Science A). I compete in the
            Technology Student Association, Science Olympiad, and other events
            to make sure I'm always improving as a programmer, designer, and
            teammate.
          </p>
          <div class="my-8 h-1 w-full bg-slate-800 rounded-full" />
          <h1>
            <Icon icon="trophy" class="mr-2" />
            Awards
          </h1>
          <AwardSection />
        </main>
      </div>
    </>
  );
}
