import classNames from 'classnames/bind';
import styles from './sideLeftFriends.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { LeftFriendsSideBar as api } from '../../../apiLocal/LeftFriendsSideBar';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function SideBarLeftFriends() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span className={cx('header-title')}>Bạn bè</span>
                <FontAwesomeIcon className={cx('header-settings')} icon={faGear} />
            </div>
            {api.map((item, index) => (
                <NavLink key={index} to={item.to} className={(nav) => cx('item', { active: nav.isActive })}>
                    <FontAwesomeIcon className={cx('icon')} icon={item.icon} />
                    <span className={cx('content')}>{item.content}</span>
                    {item.more && <FontAwesomeIcon className={cx('more')} icon={faChevronRight} />}
                </NavLink>
            ))}
        </div>
    );
}

export default SideBarLeftFriends;
