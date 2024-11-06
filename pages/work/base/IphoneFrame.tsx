import Image from "next/image";
import type { HTMLAttributes } from "react";
import React from "react";

interface IphoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  className?: string;
}

const IphoneFrame: React.FC<IphoneFrameProps> = ({
  src,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`h-[700px] max-sm:h-[523px] w-[320px] max-sm:w-[245px] border-[15px] border-black rounded-[40px] relative ${className}`}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="rounded-[22px]"
        />
      </div>
    </div>
  );
};

export default IphoneFrame;
