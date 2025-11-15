import { ChildProps } from "./constants/interfaces";

interface Props extends ChildProps {}

export default function NavLink(props: Props) {
  return (
    <a class="font-mono uppercase hover:text-slate-50 transform hover:scale-120 w-min select-none cursor-pointer transition-transform">
      {props.children}
    </a>
  );
}
