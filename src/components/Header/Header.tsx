type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto p-2">
        <nav className="py-4">
          <div className="text-base text-white">URLShortner</div>
        </nav>
      </div>
    </div>
  );
}
