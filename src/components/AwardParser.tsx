import { For } from "solid-js";
import Award from "./Award";

interface Props {
  awards: Array<any>;
  first: boolean;
}

export default function AwardParser({ awards, first }: Props) {
  let lastTime: string;
  return (
    <For each={awards}>
      {(award, i) => {
        const currentTime = lastTime == award.time ? "" : award.time;
        lastTime = award.time;

        return (
          <>
            {first && (
              <div class="h-7 -my-[0.375rem] w-[0.125rem] bg-slate-500 -ml-[1.25rem]" />
            )}
            <Award
              time={currentTime}
              place={award.place}
              event={award.event}
              details={award.details}
            />
            {!first && (
              <div class="h-7 -my-[0.375rem] w-[0.125rem] bg-slate-500 -ml-[1.25rem]" />
            )}
          </>
        );
      }}
    </For>
  );
}
