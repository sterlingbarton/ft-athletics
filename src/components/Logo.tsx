import Image from 'next/image';
import LogoImage from '../images/logo.png';

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <Image src={LogoImage} alt={'logo'} height={200} />;
}
