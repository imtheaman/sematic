import { NextPage } from "next";
import { useState } from "react";

interface Props {
  options?: JSX.Element;
  className?: string;
}

const ModalOptions: NextPage<Props> = ({ options, className, children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <button onClick={() => setShowModal((s) => !s)}>{children}</button>
      {showModal && options ? (
        <div className="absolute z-50 mr-4 top-0 right-4">
          {options}
        </div>
      ) : null}
    </div>
  );
};

export default ModalOptions;
