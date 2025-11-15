import { IconProps } from "./constants/interfaces";

interface Props extends IconProps {
  icon?: string;
  href?: string;
}

export default function IconLink(props: Props) {
  return (
    <a class={"w-min " + props.class} href={props.href}>
      <i class={"ri-" + props.icon + "-line"} />
    </a>
  );
}
