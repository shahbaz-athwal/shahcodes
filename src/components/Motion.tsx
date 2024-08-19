import { MotionDiv } from "@/lib/framer";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export function MotionParent({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      // initial={{ opacity: 0, y: 40 }}
      // animate={{ opacity: 1, y: 0 }}
      className="p-1"
    >
      {children}
    </MotionDiv>
  );
}

export function MotionChild({ children }: { children: React.ReactNode }) {
  return <MotionDiv variants={itemVariants}>{children}</MotionDiv>;
}
