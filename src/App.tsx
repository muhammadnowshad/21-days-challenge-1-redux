
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice/counterSlice";

function App() {

  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 bg-gray-200 p-10 rounded">
          <div className="flex justify-center my-4">
            <button
              className="px-5 py-2 bg-green-600 rounded mx-5"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="px-5 py-2 bg-green-600 rounded mx-5"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              Increment +5
            </button>
            <div className="mx-5 self-center">{count}</div>
            <button
              className="px-5 py-2 bg-yellow-600 rounded mx-5"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
