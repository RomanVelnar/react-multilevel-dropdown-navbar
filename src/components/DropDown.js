import MenuItem from "./MenuItem";

const DropDown = ({submenus, dropdown, depthLevel}) => {
    depthLevel = depthLevel+1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return(
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {
            submenus.map((submenu, index) => (
                <MenuItem items={submenus} key={index} depthLevel={depthLevel} />
            ))
            }
        </ul>
    )
}

export default DropDown;