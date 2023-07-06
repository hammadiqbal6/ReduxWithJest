import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";
import ReduxProvider from "./Components/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <div className="h-screen flex justify-center items-center">
        <div className="sm:max-w-[640px] border border-black p-6 rounded-lg">
          <Header></Header>
          <TodoList></TodoList>
          <Footer></Footer>
        </div>
      </div>
    </ReduxProvider>
  );
}

export default App;
