import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function SideBar(){
    return (
        <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col sticky top-0 z-10">
            <Logo/>
            <Menu/>
            <Account/>
        </aside>
   )
}