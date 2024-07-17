interface Props {
  title: string;
}

export function PageHeader({ title }: Props) {
  return (
    <header>
      <h1 className="text-3xl sm:text-4xl font-extrabold my-8">
        {title}
      </h1>
    </header>
  );
}