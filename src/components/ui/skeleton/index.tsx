import { SkeletonStyles } from "./styles";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={SkeletonStyles({ className })} {...props} />;
}

export { Skeleton };
