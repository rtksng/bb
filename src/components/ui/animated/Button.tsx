import React, { useRef } from "react";
import { IconType } from "react-icons";
import click from "../../../sounds/click.mp3";
import hover from "../../../sounds/hover.mp3";
type ButtonProps = {
  label: string;
  Icon: IconType;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, Icon, onClick }) => {
  const hoverAudioRef = useRef<HTMLAudioElement>(null);
  const clickAudioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.play();
    }
  };

  const handleClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.play();
    }
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className="relative font-bold flex items-center justify-between overflow-hidden px-7 py-5 rounded-full bg-custom-secondary text-custom-primary  transition-all duration-300 group"
    >
      <span className="z-10">{label}</span>
      <Icon className="ml-2 w-5 h-5 z-10" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[300px] h-[300px] bg-custom-accent top-12 rounded-full relative transform scale-[.1] group-hover:scale-100 transition-transform duration-300"></div>
      </div>

      {/* <audio ref={hoverAudioRef} src={hover} />
      <audio ref={clickAudioRef} src={click} /> */}
    </button>
  );
};

export default Button;
