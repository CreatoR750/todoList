import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { TODO_LIST_KEY } from "../../const";
import type { TTodo } from "../../types";

export const ClearCompletedButton = () => {
  const queryClient = useQueryClient();

  const onDeleteCompleted = () => {
    queryClient.setQueryData([TODO_LIST_KEY], (oldData: TTodo[]) => {
      return oldData.filter((item) => !item.completed);
    });
  };

  return (
    <Button variant="destructive" size="sm" onClick={onDeleteCompleted}>
      Clear completed
    </Button>
  );
};
