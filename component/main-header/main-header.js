import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "@/component/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackGround from "./main-header-Background";
import NavLink from "./nav-link";

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackGround />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={logo} alt="logo" />
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
