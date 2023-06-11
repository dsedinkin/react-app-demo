declare module "\*.jpg";
declare module "\*.png";
declare module "\*.svg" {
  import { FC, SVGProps } from "react";
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
};
