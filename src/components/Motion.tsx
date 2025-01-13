import { MotionDiv, MotionImage as Image } from "@/lib/motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function MotionParent({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv initial="hidden" animate="visible" variants={containerVariants} className="mx-auto max-w-3xl p-4">
      {children}
    </MotionDiv>
  );
}

export function MotionChild({ children }: { children: React.ReactNode }) {
  return <MotionDiv variants={itemVariants}>{children}</MotionDiv>;
}

export function MotionImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} className={className} />;
}
