import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow ">
      <SideBarIcon icon={<FaFire size="30" />} />
      <SideBarIcon icon={<BsPlus size="30" />} />
      <SideBarIcon icon={<BsFillLightningFill size="30" />} />
      <SideBarIcon icon={<FaPoo size="30" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }, text = "tooltip") => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">Tooltip</span>
  </div>
);

export default SideBar;
