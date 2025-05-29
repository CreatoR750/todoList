import type { TFilter, TTodo } from "@/modules/Todo/types";

export const getFilteredTodoList = (data: TTodo[], filter: TFilter) => {
  switch (filter) {
    case true:
      return data.filter((item) => item.completed);
    case false:
      return data.filter((item) => !item.completed);
    default:
      return data;
  }
};
