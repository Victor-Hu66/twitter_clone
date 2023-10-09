import Premium from "~/layouts/main/rightbar/premium";
import Search from "~/layouts/main/rightbar/search";


export default function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5">
                <Search />
                <Premium />
        </aside>
    )
}