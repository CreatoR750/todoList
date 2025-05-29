import { deleteTodoItem } from "@/modules/Todo/api";
import { TODO_LIST_KEY } from "@/modules/Todo/const";
import type { TTodo } from "@/modules/Todo/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteTodo"],
    mutationFn: async (id: TTodo["id"]) => {
      const res = await deleteTodoItem(id);
      return res;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([TODO_LIST_KEY], (oldData: TTodo[]) =>
        oldData.filter((item) => item.id !== data.id)
      );
      toast.success("Success", {
        description: "Deleted todo item!",
        position: "top-right",
      });
    },
  });
};
