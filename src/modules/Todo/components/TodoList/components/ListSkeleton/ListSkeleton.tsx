import { Skeleton } from "@/components/ui/skeleton";
{
  /* <Skeleton className="h-6 w-[100%]" /> */
}
export const ListSkeleton = () => {
  return (
    <div
      data-testid="list-skeleton"
      className="grid gap-4 max-h-[500px] overflow-auto"
    >
      {[...Array(12).keys()].map((item) => (
        <Skeleton className="h-6 w-[100%]" key={item} />
      ))}
    </div>
  );
};
