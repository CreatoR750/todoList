import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, type MouseEventHandler } from "react";
import type { TNewTodo } from "../../types";
import { useCreateTodoMutation } from "./hooks/useCreateTodoMutation";

export const TodoInput = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { mutateAsync, isPending } = useCreateTodoMutation();

  const addTodo: MouseEventHandler<HTMLButtonElement> = async () => {
    if (!ref.current?.value) return;
    const newTodo: TNewTodo = {
      userId: 1,
      todo: ref.current.value,
      completed: false,
    };
    await mutateAsync(newTodo);
    ref.current.value = "";
  };

  return (
    <div className="flex w-full space-x-2">
      <Input placeholder="What needs to be done?" ref={ref} />
      <Button disabled={isPending} onClick={addTodo}>
        {isPending && <Loader2 className="animate-spin" />}
        Add
      </Button>
    </div>
  );
};
