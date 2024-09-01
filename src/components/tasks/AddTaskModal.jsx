import React from "react";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add a new task"}>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus vero tempore tenetur eveniet ut quae.
        Illum ab eligendi iusto.
      </h2>
    </Modal>
  );
};

export default AddTaskModal;
