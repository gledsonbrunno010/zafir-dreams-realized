import { useScrollReveal } from "@/hooks/useAnimations";

const RevealSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default RevealSection;
