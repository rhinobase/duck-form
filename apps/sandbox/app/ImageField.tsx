import Image, { type ImageProps } from "next/image";
import { evalProp } from "@rhinobase/shared";

export type ImageFieldProps = ImageProps;

export function ImageField(props: ImageFieldProps) {
  const componentProps = {
    src: evalProp(props.src),
    alt: evalProp(props.alt),
    width: evalProp(props.width),
    height: evalProp(props.height),
    className: evalProp(props.className),
    unoptimized: evalProp(props.unoptimized),
  };

  return <Image {...componentProps} />;
}
