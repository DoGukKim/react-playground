interface Props {
  qty: number;
  isPending: boolean;
}

const Total = ({ qty, isPending }: Props) => {
  return (
    <div>
      <span>{qty * 100}</span>
      <span>{isPending ? "loading" : ""}</span>
    </div>
  );
};

export default Total;
