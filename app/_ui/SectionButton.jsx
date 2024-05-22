export default function SectionButton({ text, id }) {
  return (
    <a
      id={id}
      href={`#${id}`}
      className="mx-20 inline-block w-28 rounded-md border border-sky-400 bg-sky-50 px-4 py-1 text-center text-sky-300 no-underline transition"
    >
      {text}
    </a>
  );
}
