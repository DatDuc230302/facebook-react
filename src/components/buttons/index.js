import styles from './buttons.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ children, active, onClick, className, onMouseOver, onMouseLeave }) {
    const props = { onClick, onMouseOver, onMouseLeave };
    return (
        <button {...props} className={cx('wrapper', className, { active })}>
            {children}
        </button>
    );
}

export default Button;
