import classes from "./NavBar.module.scss";

const NavBar = () => (
  <header className={classes.navbar}>
    <div className={`${classes.navbar__title} ${classes.navbar__item}`}>
      Cutco
    </div>
    <div className={classes.navbar__item}>About Us</div>
    <div className={classes.navbar__item}>Contact</div>
    <div className={classes.navbar__item}>Help</div>
  </header>
);

export default NavBar;
