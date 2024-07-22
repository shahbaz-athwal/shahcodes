interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
      <h1 className="text-3xl sm:text-4xl font-extrabold mt-6">
        {title}
      </h1>
  );
}