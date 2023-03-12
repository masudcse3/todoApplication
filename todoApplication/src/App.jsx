/** @format */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Todo from "./components/Todo";
import AllTodos from "./components/AllTodos";
function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Header />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Form />
        <hr className="mt-4" />

        <AllTodos />

        <hr className="mt-4" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
