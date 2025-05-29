import { getTodoList } from "@/modules/Todo/api";
import { TODO_LIST_KEY } from "@/modules/Todo/const";
import { useTodoStore } from "@/modules/Todo/store/todoStore";
import { useQuery } from "@tanstack/react-query";
import { getFilteredTodoList } from "../helpers";

export function useTodoListQuery() {
  const { filter } = useTodoStore();
  
  return useQuery({
    queryKey: [TODO_LIST_KEY],
    queryFn: async () => {
      const response = await getTodoList();
      return response;
    },
    select: (data) => {
      return getFilteredTodoList(data, filter);
    },
    retryOnMount: false,
  });
}
