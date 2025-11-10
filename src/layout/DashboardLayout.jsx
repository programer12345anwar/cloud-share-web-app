import { useUser } from "@clerk/clerk-react";
import Navbar from "../component/Navbar";
import SideMenu from "../component/SideMenu";

const DashboardLayout = ({children}) => {
    const { user } = useUser();
    return (
    <div>
        {/*Navbar component*/}
        <Navbar/>
        {user && (
            <div className="flex bg-red-50">
                <div className="max-[1080px]:hidden">
                    {/* Side menu */}
                    <SideMenu/>
                </div>
                <div className="grow mx-5">{children}</div>
            </div>
        )}
    </div>
    );
}


export default DashboardLayout;
