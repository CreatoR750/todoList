import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ClearCompletedButton,
  FiltersToggle,
  ItemsCounter,
  TodoInput,
  TodoList,
} from "./components";

export const Todo = () => {
  return (
    <Card className="w-[550px] gap-2">
      <CardHeader>
        <CardTitle>Add todo:</CardTitle>
        <TodoInput />
      </CardHeader>
      <Separator />
      <TodoList />
      <Separator />
      <CardFooter className="flex justify-between">
        <ItemsCounter />
        <FiltersToggle />
        <ClearCompletedButton />
      </CardFooter>
    </Card>
  );
};
