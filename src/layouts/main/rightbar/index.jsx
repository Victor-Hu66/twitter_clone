import Premium from "~/layouts/main/rightbar/premium";
import Search from "~/layouts/main/rightbar/search";
import Topics from "~/layouts/main/rightbar/topics";

export default function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5">
                <Search />
                <Premium />
                <Topics />
        </aside>
    )
}