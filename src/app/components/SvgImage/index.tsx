import Image from 'next/image';

interface SvgImageProps {
  path: string;
  width?: number;
  height?: number;
}

export default function SvgImage({
  path,
  width = 24,
  height = 24,
}: SvgImageProps) {
  return <Image src={path} alt="My Icon" width={width} height={height} />;
}
