interface CardPros {
  title: string;
  children?: React.ReactNode;
}

export default function Card(props: CardPros) {
  const { title, ...restProps } = props;

  return (
    <div className="bg-white rounded-lg w-full p-3">
      <h1 className="font-bold text-md capitalize  ">{title}</h1>
      <div className="w-full border-t border-gray-300 h-fit" />
      <section {...restProps} />
    </div>
  );
}
