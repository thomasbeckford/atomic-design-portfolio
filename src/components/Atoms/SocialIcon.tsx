import Image from "next/image";

type SocialIconType = {
  name: string;
};

export default function SocialIcon(props: SocialIconType) {
  const { name } = props;

  return <Image src={`/images/brands/${name}.svg`} alt={name} width={24} height={24} />;
}
