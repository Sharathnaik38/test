import css from "../styles/SideNavbarLink.module.css";
import Icon from '@mui/material/Icon';
import Link from "next/link";
import { useRouter } from 'next/router';

function SideNavbarLink({ text, icon, url }: any) {
  const router = useRouter();
  const isLinkActive = router.pathname.slice(1).indexOf(url.split('/')[1]) > -1;  

  return(
    <div className={`mt-2 rounded ${css.linkContainer} ${isLinkActive ? css.linkActive : ''}`}>
        <Link className={`no-underline ${css.link} ${isLinkActive ? css.active : ''}`} href={url}>
          <h4 className="flex items-center p-3">
              <Icon>{icon}</Icon>
              <span className="ml-1">{text}</span>
          </h4>
        </Link>
    </div>
  );
}
export default SideNavbarLink;