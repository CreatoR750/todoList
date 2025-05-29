import { createTodoItem } from "@/modules/Todo/api";
import { TODO_LIST_KEY } from "@/modules/Todo/const";
import type { TNewTodo, TTodo } from "@/modules/Todo/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: TNewTodo) => {
      const res = await createTodoItem(newTodo);
      return res;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([TODO_LIST_KEY], (oldData: TTodo[]) => [
        data,
        ...oldData,
      ]);
      toast.success("Success", {
        description: "Created new todo item!",
        position: "top-right",
      });
    },
  });
};
