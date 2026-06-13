export default function LangLoading() {
  return (
    <div className="flex items-start justify-center min-h-[60vh] px-4 py-12">
      <div className="w-full max-w-3xl animate-pulse space-y-8">
        <div className="h-5 w-24 bg-concrete-gray" />
        <div className="h-10 w-2/3 bg-concrete-gray" />
        <div className="w-full h-0.5 bg-concrete-gray" />
        <div className="space-y-4">
          <div className="h-5 w-full bg-concrete-gray" />
          <div className="h-5 w-5/6 bg-concrete-gray" />
          <div className="h-5 w-4/6 bg-concrete-gray" />
        </div>
        <div className="h-64 w-full bg-concrete-gray" />
      </div>
    </div>
  );
}