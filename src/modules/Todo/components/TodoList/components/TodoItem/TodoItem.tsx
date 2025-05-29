import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { TTodo } from "@/modules/Todo/types";
import clsx from "clsx";
import { Loader2, Trash2 } from "lucide-react";
import { useId } from "react";
import { useDeleteTodoMutation } from "./hooks/useDeleteTodoMutation";
import { useUpdateTodoMutation } from "./hooks/useUpdateTodoMutaton";

type TTodoItemProps = {
  item: TTodo;
};

export const TodoItem = ({ item }: TTodoItemProps) => {
  const id = useId();
  const { mutate: mutateDelete, isPending: isDeleting } =
    useDeleteTodoMutation();
  const { mutate: mutateUpdate } = useUpdateTodoMutation();

  const onChange = (checked: boolean) => {
    mutateUpdate({ id: item.id, item: { completed: checked } });
  };

  const onDeleteItem = () => {
    mutateDelete(item.id);
  };

  return (
    <div className="flex space-x-2 items-center">
      <Checkbox
        id={id}
        checked={item.completed}
        onCheckedChange={(checked: boolean) => onChange(checked)}
      />
      <div className="flex items-center justify-between w-full">
        <label
          htmlFor={id}
          className={clsx(
            "text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap w-[420px] overflow-hidden overflow-ellipsis",
            item.completed ? "line-through opacity-35" : ""
          )}
        >
          {item.todo}
        </label>
        <div className="flex space-x-2 items-center">
          <Button variant="destructive" size="sm" onClick={onDeleteItem}>
            {isDeleting ? <Loader2 className="animate-spin" /> : <Trash2 />}
          </Button>
        </div>
      </div>
    </div>
  );
};
