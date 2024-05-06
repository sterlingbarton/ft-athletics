import Image from "next/image";
import LogoImage from "../images/logo.png";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Image
      src={LogoImage}
      alt={"logo"}
      style={{
        height: 80,
        width: "auto",
      }}
    />
  );
}
