import css from "../styles/SideNavbarLink.module.css";
import Icon from '@mui/material/Icon';

function SideNavbarLink({ text, icon, url }: any) {
  return(
    <div className={`mt-2 rounded ${css.link} ${url ? css.linkActive : ''}`}>
        <h2 className="flex items-center p-3">
            <Icon>{icon}</Icon>
            <span className="ml-1">{text}</span>
        </h2>
    </div>
  );
}
export default SideNavbarLink;