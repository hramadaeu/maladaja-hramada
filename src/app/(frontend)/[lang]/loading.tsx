export default function LangLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="w-full max-w-2xl animate-pulse space-y-6">
        <div className="h-6 w-1/3 bg-concrete-gray" />
        <div className="h-12 w-3/4 bg-concrete-gray" />
        <div className="h-24 w-full bg-concrete-gray" />
      </div>
    </div>
  );
}