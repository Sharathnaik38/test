import Image from "next/image";
import css from "../styles/TopNavbar.module.css";

export default function TopNavbar() {
    return (
        <>
            <div className={`flex items-center ${css.logoContainer}`}>
                <Image
                    src="/images/running.svg"
                    alt="Logo"
                    className={css.logo}
                    width={100}
                    height={100}
                    priority
                />
                <div className="ml-2 flex flex-col">
                    <h5 className="font-bold">CAL UX</h5>
                    <small className="font-semibold">Fast and Secure Claims</small>
                </div>
            </div>
            <div className={`flex items-center ${css.avatarContainer}`}>
                <Image
                    src="/images/profile-image.png"
                    alt="Logo"
                    className={css.logo}
                    width={100}
                    height={100}
                    priority
                />
                <div className="ml-2 flex flex-col">
                    <h6 className="font-bold">Jim</h6>
                    <small className="text-xs text-slate-500">Case Worker</small>
                    <small className="text-xs text-slate-500">C Company</small>
                </div>
            </div>
        </>
    )
}
