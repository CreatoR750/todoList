export type TTodo = {
  id: number;
  userId: number;
  todo: string;
  completed: boolean;
};

export type TNewTodo = Omit<TTodo, "id">;

export type TUpdateTodo = Partial<TNewTodo>;

export type TFilter = boolean | null;
