import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import logo from '../../../assets/logo.svg'
const CardGrid = () => {
  const [scattered, setScattered] = useState(false);
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => setScattered(inView),
  });

  const cards = [
    { id: 1, label: "RaptorGen" },
    { id: 2, label: "RaptorHub" },
    { id: 3, label: "RaptorVision" },
    { id: 4, label: "RaptorSelect" },
    { id: 5, label: "RaptorScan" },
    { id: 6, label: "RaptorAssist" },
  ];

  const scatterPositions = [
    { x: -650, y: -265, rotate: -20 },
    { x: 0, y: -335, rotate: 0 },
    { x: 650, y: -265, rotate: 20 },
    { x: -650, y: 265, rotate: 20 },
    { x: 0, y: 335, rotate: 0 },
    { x: 650, y: 265, rotate: -20 },
  ];

  const scatterVariants = {
    initial: (index: number) => ({
      scale: 1,
      y: -index * 10,
      x: 0,
      rotate: 0,
      opacity: 1,
    }),
    scattered: (index: number) => ({
      scale: 1,
      y: scatterPositions[index].y,
      x: scatterPositions[index].x,
      rotate: scatterPositions[index].rotate,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <motion.div
        ref={ref}
        className="relative grid grid-cols-1 place-items-center"
      >
        {cards.map((card, index) => (
          <motion.a
            key={card.id}
            className=" gridImage w-[370px] h-[200px] flex items-center justify-center rounded-[18px] shadow-lg absolute"
            custom={index}
            href=""
            initial="initial"
            animate={scattered ? "scattered" : "initial"}
            variants={scatterVariants}
          >
            <p className="text-white paytone-one-regular text-5xl">
              {card.label}
            </p>
          </motion.a>
        ))}
        <motion.div
          className="absolute flex items-center justify-center  w-[300px] h-[300px]"
          initial={{ opacity: 0 }}
          animate={scattered ? { opacity: 1 } : { opacity: 0 }}
        >
          <img src={logo}  alt="logo" />
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default CardGrid;
