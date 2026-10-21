import { Skeleton } from "@/components/ui/skeleton";

export default function DocsLoading() {
  return (
    <div className="mx-auto grid w-full max-w-screen-2xl items-start gap-12 p-4 md:p-8 lg:grid-cols-7 lg:p-12">
      <div className="lg:col-span-5">
        <div className="space-y-3">
          <Skeleton className="h-9 w-2/3" />
          <Skeleton className="h-5 w-full max-w-xl" />
        </div>
        <div className="space-y-4 pt-10 pb-12">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-4 w-full"
              style={{ width: `${60 + ((index * 13) % 40)}%` }}
            />
          ))}
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      </div>
      <div className="hidden lg:col-span-2 lg:block">
        <div className="space-y-3">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
  );
}
