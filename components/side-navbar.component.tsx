import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import css from '../styles/SideNavbar.module.css';
import SideNavbarLink from './side-navbar-link.component';

export default function SideNavbar() {
    return (
        <div className='flex flex-col items-center'>
            <div className={`flex flex-col justify-between ${css.logoContainer}`}>
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    className={`m-auto ${css.logo}`}
                    width={100}
                    height={100}
                    priority
                />
                <p className="text-white text-center text-[10px] leading-[10px]">Your logo here</p>
            </div>
            <h5>Org statement here</h5>
            <Select
                className="mt-3"
                sx={{width: '100%'}}
                defaultValue="C Company"
                displayEmpty
                renderValue={(value) => {
                return (
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Image
                            src="/images/logo.svg"
                            alt="Company Logo"
                            className={css.companyOptionLogo}
                            width={30}
                            height={30}
                            priority
                        />
                        {value}
                    </Box>
                );
                }}
            >
                <MenuItem key="c" value={'C Company'}>
                    C Company
                </MenuItem>
            </Select>
            <div className={`mt-5 ${css.menuContainer}`}>
                <SideNavbarLink text="Dashboard" icon="dashboard" />
                <SideNavbarLink text="Claims" icon="grading" url="/claims" />
            </div>
        </div>
    )
}
