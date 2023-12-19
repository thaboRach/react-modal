import { useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ show, setShow }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (show && dialogRef) {
      dialogRef.current?.showModal();
    }
  }, [show]);

  const handleClose = () => {
    if (dialogRef && dialogRef.current) {
      dialogRef.current.close();
      setShow(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={`${
        show ? "flex flex-col" : "hidden"
      } items-center gap-4 w-full max-w-lg min-h-fit rounded-md p-6 relative backdrop:opacity-90 backdrop:bg-slate-700`}
    >
      <button
        className="w-10 h-10 absolute top-0 right-0"
        type="button"
        onClick={handleClose}
      >
        <MdOutlineClose style={{ width: "1.5rem", height: "1.5rem" }} />
      </button>

      <header className="flex flex-col w-full items-center">
        <h2 className="text-3xl">Heading</h2>
      </header>

      <p>body</p>
      <p>Footer</p>
    </dialog>
  );
}
