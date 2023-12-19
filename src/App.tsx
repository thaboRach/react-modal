import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <main className="flex flex-col gap-4 items-center w-full min-h-screen p-4">
      <h1 className="text-4xl mt-12">React Dialog</h1>
      <p>
        A simple React based Modal using the HTML{" "}
        <a
          className="underline"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
        >
          dialog
        </a>{" "}
        element.
      </p>
      <button
        className="w-28 h-12 bg-blue-900 text-white rounded-md p-2"
        onClick={handleClick}
      >
        Show modal
      </button>
      <Modal show={showModal} setShow={setShowModal} />
    </main>
  );
}

export default App;
