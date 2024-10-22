import React from "react";
import { cn } from "../../../lib/utils";
import FOG from "vanta/dist/vanta.fog.min";
import { useEffect } from "react";
export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      id="vanta"
      className={cn(
        " p-6 relative w-full overflow-hidden rounded-3xl h-full backdrop-blur-[50px]",
        className
      )}
    >
      
      <div className="flex flex-col h-full justify-between relative z-20">
        {children}
      </div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <p className={cn("text-2xl text-white", className)}>{children}</p>;
};

export const SubTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    FOG({
      el: "#vanta",
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x387d5a,
  midtoneColor: 0x0,
  lowlightColor: 0x80ffe3,
  baseColor: 0x222222,
  blurFactor: 0.49,
  speed: 1.60,
  zoom: 1.40
    });
  });
  return (
    <h2 className={cn("text-[32px] font-bold text-white", className)}>
      {children}
    </h2>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-[108px] h-[108px] rounded-full flex items-center justify-center text-[#eaeaea]",
        className
      )}
    >
      {children}
    </div>
  );
};
