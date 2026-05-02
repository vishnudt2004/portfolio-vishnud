import { useHeadingLevel } from "@/hooks/useHeadingLevel";

const Heading = ({ children, ...props }) => {
  const level = useHeadingLevel();

  const Tag = `h${Math.min(level, 6)}`;

  return <Tag {...props}>{children}</Tag>;
};

export default Heading;
