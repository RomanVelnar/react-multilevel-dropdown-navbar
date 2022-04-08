import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";

const Navbar = () => {
    return(
        <nav>
            <ul className="menus">
                {
                    menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItem items={menu} key={index} depthLevel={depthLevel} />
                    })
                }

            </ul>
        </nav>
    )
}

export default Navbar



