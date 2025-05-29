import { Toggle } from "@/components/ui/toggle";
import { useTodoStore } from "../../store/todoStore";
import type { TFilter } from "../../types";
import { FILTERS } from "./const";

export const FiltersToggle = () => {
  const { filter, setFilter } = useTodoStore();

  const onToggle = (value: TFilter) => {
    setFilter(value);
  };

  return (
    <div className="flex gap-0.5">
      {FILTERS.map(({ value, label }) => (
        <Toggle
          key={label}
          size="sm"
          pressed={value === filter}
          onPressedChange={() => {
            onToggle(value);
          }}
        >
          {label}
        </Toggle>
      ))}
    </div>
  );
};
