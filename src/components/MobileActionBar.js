import EditButton from "./edit_button";
import DeleteButton from "./delete_button";
import StatusToggleButton from "./toggle_status_button";

const MobileActionBar = () => {
  returnn(
    <div>
      <EditButton></EditButton>
      <DeleteButton></DeleteButton>
      <StatusToggleButton></StatusToggleButton>
    </div>
  );
};

export default MobileActionBar;
