type Props<E extends React.ElementType> = {
  as?: E;
  ref?: React.ComponentPropsWithRef<E>["ref"];
} & React.ComponentPropsWithoutRef<E>;

const Polymorphic = <E extends React.ElementType>({
  as,
  children,
  ...props
}: Props<E>) => {
  const Element = as || "div";

  return <Element {...props}>{children}</Element>;
};

export default Polymorphic;
