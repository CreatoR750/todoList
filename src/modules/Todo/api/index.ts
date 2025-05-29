import { api } from "@/api";
import type { TNewTodo, TTodo, TUpdateTodo } from "../types";

export const getTodoList = async () => {
  const response = await api.get<{ todos: TTodo[] }>("/todos");
  return response.data?.todos;
};

export const createTodoItem = async (item: TNewTodo) => {
  const response = await api.post<TTodo>("/todos/add", item);
  return response.data;
};

export const deleteTodoItem = async (id: TTodo["id"]) => {
  const response = await api.delete<TTodo>(`/todos/${id}`);
  return response.data;
};

export const updateTodoItem = async (id: TTodo["id"], item: TUpdateTodo) => {
  const response = await api.put<TTodo>(`/todos/${id}`, item);
  return response.data;
};
