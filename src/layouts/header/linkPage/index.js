import { NavLink } from 'react-router-dom';
import styles from './linkPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LinkPage({ to, icon }) {
    return (
        <NavLink className={(nav) => cx('wrapper', { active: nav.isActive })} to={to}>
            <div className={cx('icon')}>{icon}</div>
        </NavLink>
    );
}

export default LinkPage;
