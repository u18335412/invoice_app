const DeleteButton = ({ setDeleteIsOpen }) => {
  return (
    <button
      onClick={() => setDeleteIsOpen(true)}
      className=" font-bold text-[0.75rem] px-[1.5rem] text-white rounded-full bg-[rgba(236,87,87,1)] hover:bg-[rgba(255,151,151,1)] transition-all py-[1rem] h-[3rem]"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
