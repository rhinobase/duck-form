import Image, { type ImageProps } from "next/image";

export type ImageFieldProps = ImageProps;

export function ImageField(props: ImageFieldProps) {
  return <Image {...props} />;
}
