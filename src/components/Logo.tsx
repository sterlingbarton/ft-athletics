import Image from "next/image";
import LogoImage from "../images/logo.svg";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return <Image src={LogoImage} alt={"logo"} height={120} />;
}
