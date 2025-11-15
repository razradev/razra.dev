import { awards, middleAwards } from "./constants/data";
import Icon from "./Icon";
import AwardParser from "./AwardParser";

export default function AwardSection() {
  return (
    <div class="flex flex-col max-md:ml-32 md:pl-7">
      <AwardParser awards={awards} first={false} />
      <div class="h-6 -mb-[0.375rem] w-[0.125rem] bg-slate-500 -ml-[1.25rem]" />
      <details class="group">
        <summary class="select-none -ml-7 list-none">
          <h2 class="group-open:text-slate-50 text-slate-400 transition-colors">
            <Icon icon="arrow-down-double" class="mr-3 group-open:hidden" />
            <Icon
              icon="arrow-up-double"
              class="mr-3 hidden group-open:inline"
            />
            Middle School (2021-2024)
          </h2>
        </summary>
        <AwardParser awards={middleAwards} first={true} />
      </details>
    </div>
  );
}
