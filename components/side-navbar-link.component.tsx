import css from "../styles/SideNavbarLink.module.css";
import Icon from '@mui/material/Icon';

function SideNavbarLink({ text, icon, url }: any) {
  return(
    <div className={`mt-2 rounded ${css.link} ${url ? css.linkActive : ''}`}>
        <h4 className="flex items-center p-3">
            <Icon>{icon}</Icon>
            <span className="ml-1">{text}</span>
        </h4>
    </div>
  );
}
export default SideNavbarLink;