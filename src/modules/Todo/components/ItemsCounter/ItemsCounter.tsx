import { useCompletedCount } from "./hooks/useCompletedCount";

export const ItemsCounter = () => {
  const count = useCompletedCount();

  return (
    <small className="text-sm font-medium leading-none">
      {count ? `${count} items left` : "No items left"}
    </small>
  );
};
