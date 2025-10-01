export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="text-sm opacity-80" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className="inline-flex items-center gap-2">
            {idx > 0 && <span className="opacity-50">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:underline">{item.label}</a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}


