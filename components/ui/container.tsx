import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("mx-auto max-w-screen-2xl", className)}>
      {children}
    </div>
  );
};

export default Container;
