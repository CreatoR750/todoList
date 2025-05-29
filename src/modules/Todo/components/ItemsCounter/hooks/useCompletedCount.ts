import { TODO_LIST_KEY } from "@/modules/Todo/const";
import type { TTodo } from "@/modules/Todo/types";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useCompletedCount = () => {
  const queryClient = useQueryClient();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (
        event.type === "updated" &&
        event.query.queryKey[0] === TODO_LIST_KEY
      ) {
        const originalData: TTodo[] = event.query.state.data;
        const completedTodosLength = originalData?.filter(
          (item) => !item.completed
        );
        setCount(completedTodosLength?.length);
      }
    });

    return () => unsubscribe();
  }, [queryClient]);

  return count;
};
