import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSVG = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true
  });

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.svg
        width="100%"
        height="1000"
        viewBox="0 0 1912 936"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1912 15C1402.33 81.6347 353.093 288.217 103 507.98C73.4898 533.911 15.4994 575.896 15.5 651.018C15.5004 707.226 53.9953 778.291 182.795 823.783C228.295 839.854 299.795 858.865 343.795 866.214C453.655 889.295 681.691 920.901 899.7 920.901C1062.09 920.901 1292.45 905.083 1388.43 896.276C1580.55 878.648 1813.42 840.404 1912.49 821.832"
          stroke="#3BEDB2"
          strokeWidth="30"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedSVG;
