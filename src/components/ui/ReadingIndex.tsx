export default function ReadingIndex({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav aria-label="Contenido de esta página" className="reading-index">
      <p className="font-semibold">En esta página</p>
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}><a href={`#${id}`}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
