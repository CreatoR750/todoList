import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi, type Mock } from "vitest";
import { TodoList } from "./TodoList";
import { useTodoListQuery } from "./hooks/useTodoListQuery";

vi.mock("./hooks/useTodoListQuery");

describe("TodoList", () => {
  test("показывает скелетон при загрузке", () => {
    // Типизированный мок
    (useTodoListQuery as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<TodoList />);
    expect(screen.getByTestId("list-skeleton")).toBeInTheDocument();
  });

  test("показывает пустой список", () => {
    (useTodoListQuery as Mock).mockReturnValue({
      data: [],
      isLoading: false,
    });

    render(<TodoList />);
    expect(screen.getByText("Todo list is empty!")).toBeInTheDocument();
  });
});
