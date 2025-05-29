import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CardContent } from "@/components/ui/card";
import { ListSkeleton } from "./components/ListSkeleton/ListSkeleton";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { useTodoListQuery } from "./hooks/useTodoListQuery";

export const TodoList = () => {
  const { data, isLoading } = useTodoListQuery();

  if (isLoading) {
    return (
      <CardContent>
        <ListSkeleton />
      </CardContent>
    );
  }

  if (data?.length === 0) {
    return (
      <CardContent>
        <Alert>
          <AlertTitle>Todo list is empty!</AlertTitle>
          <AlertDescription>Add new todo.</AlertDescription>
        </Alert>
      </CardContent>
    );
  }

  return (
    <CardContent className="grid gap-4 max-h-[500px] overflow-auto">
      {data?.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </CardContent>
  );
};
