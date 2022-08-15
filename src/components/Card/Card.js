import Icon from '../../assets/Icon.svg';
import classes from '../Card/Card.module.css';
import Button from '../Button/Button.js';
const card = () => {
    return(
        <div className={classes.card}>
            <div>
                <img src={Icon} alt='icon' />
            </div>
            <p>Alogrand</p>
            <Button 
            title='Available'
            style={classes.green}
            />
        </div>
    )
}

export default card;