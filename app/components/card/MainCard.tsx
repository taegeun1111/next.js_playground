export default function MainCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="relative w-full p-2 justify-between gap-2">
        <div className="w-full p-2 bg-white h-32 rounded-lg">
          <div className="flex flex-col w-full">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="w-24">{description}</p>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 bg-slate-500 w-8 h-8 rounded-full"></div>
      </div>
    </>
  );
}
