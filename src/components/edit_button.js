const EditButton = ({ setEditIsOpen }) => {
  return (
    <button
      onClick={() => setEditIsOpen(true)}
      className="text-[rgba(126,136,195,1)] rounded-full transition-all dark:text-[rgba(223,227,250,1)] dark:bg-[rgba(37,41,69,1)] w-[4.563rem] [h-3rem] hover:bg-[rgba(223,227,250,1)] text-[.75rem] hover:dark:bg-white hover:dark:text-[rgba(37,41,69,1)] font-bold px-[1.2rem]"
    >
      Edit
    </button>
  );
};

export default EditButton;
