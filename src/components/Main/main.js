import Logo from '../../assets/Logo.svg';
import classes from '../Main/main.module.css';
import Card from '../Card/Card.js';
const main = () => {
    return(
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div>
                <img src={Logo} alt='logo' />
            </div>
            <button className={classes.analyze}>ANALAYZE ASAs</button>
        </div>
        <h3 className={classes.list}>List of Algorand Standard Assets on ASAlytics</h3>
        <div className={classes.card}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>
    )

}


export default main;