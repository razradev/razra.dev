import Icon from "./Icon";

interface Props {
  time: string;
  place: string;
  event: string;
  details: string;
}

export default function Award(props: Props) {
  return (
    <div class="flex items-center gap-2">
      <h3
        class="text-nowrap text-sm/[1.5] pr-3 text-right absolute"
        style="transform: translateX(-100%);"
      >
        {props.time}
        <Icon icon="circle" class="ml-3" />
      </h3>
      <h2 class="mt-0.5 text-nowrap">{props.place}</h2>
      <Icon icon="shining" class="text-slate-400 text-[0.5rem] mb-1" />
      <p class="-mt-0.5 text-nowrap">
        <span class="inline-block text-ellipsis flex-1 max-md:max-w-24 overflow-clip">
          {props.event}
        </span>
        <span class="max-sm:hidden"> ({props.details})</span>
        <Icon icon="arrow-right-up" class="ml-2" />
      </p>
    </div>
  );
}
