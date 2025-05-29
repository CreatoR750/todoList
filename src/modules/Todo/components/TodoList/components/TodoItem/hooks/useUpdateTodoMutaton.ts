import { updateTodoItem } from "@/modules/Todo/api";
import { TODO_LIST_KEY } from "@/modules/Todo/const";
import type { TTodo, TUpdateTodo } from "@/modules/Todo/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateTodo"],
    mutationFn: async ({
      id,
      item,
    }: {
      id: TTodo["id"];
      item: TUpdateTodo;
    }) => {
      queryClient.setQueryData([TODO_LIST_KEY], (oldData: TTodo[]) =>
        oldData.map((oldItem) =>
          oldItem.id === id ? { ...oldItem, ...item } : { ...oldItem }
        )
      );
      const res = await updateTodoItem(id, item);
      return res;
    },
  });
};
