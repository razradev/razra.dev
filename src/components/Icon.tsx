import { IconProps } from "./constants/interfaces";

interface Props extends IconProps {
  icon: string;
}

export default function Icon(props: Props) {
  return <i class={"ri-" + props.icon + "-line " + props.class} />;
}
