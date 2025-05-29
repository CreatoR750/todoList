import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { TodoInput } from "./TodoInput";
import { useCreateTodoMutation } from "./hooks/useCreateTodoMutation";

vi.mock("./hooks/useCreateTodoMutation");
vi.mock("@/components/ui/button", () => ({
  Button: vi.fn(({ children, ...props }) => (
    <button {...props}>{children}</button>
  )),
}));
vi.mock("@/components/ui/input", () => ({
  Input: vi.fn(({ ref, ...props }) => <input ref={ref} {...props} />),
}));
vi.mock("lucide-react", () => ({
  Loader2: vi.fn(() => <div data-testid="loader" />),
}));

const mockMutateAsync = vi.fn();
const mockUseCreateTodoMutation = vi.mocked(useCreateTodoMutation);

describe("TodoInput", () => {
  beforeEach(() => {
    mockUseCreateTodoMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: false,
    });
    vi.clearAllMocks();
  });

  test("отображает input и кнопку", () => {
    render(<TodoInput />);

    expect(
      screen.getByPlaceholderText("What needs to be done?")
    ).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("блокирует кнопку при isPending", () => {
    mockUseCreateTodoMutation.mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: true,
    });

    render(<TodoInput />);

    const button = screen.getByText("Add");
    expect(button).toBeDisabled();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("вызывает mutateAsync с правильными данными при клике", async () => {
    render(<TodoInput />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(mockMutateAsync).toHaveBeenCalledWith({
      userId: 1,
      todo: "New Task",
      completed: false,
    });
  });

  test("не вызывает mutateAsync при пустом input", () => {
    render(<TodoInput />);

    fireEvent.click(screen.getByText("Add"));
    expect(mockMutateAsync).not.toHaveBeenCalled();
  });
});
