import { Outlet } from "react-router-dom";
import { DashboardNav } from "../../navbar/dashbordNavbar";

function DashboardRoute() {
  return (
    <>
      <div>
        <div className="flex">
          <DashboardNav /> {/* Sidebar */}
          <div className="flex-1 p-4">
            <Outlet /> {/* Contenu de la route enfant */}
          </div>
        </div>
      </div>
    </>
  );
}
export default DashboardRoute;
