import classNames from 'classnames/bind';

import styles from './friends.module.scss';
import MainFriends from './mainFriends';
import SideBarLeftFriends from './sideLeftFriends';

const cx = classNames.bind(styles);
function Friends() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-sidebar')}>
                <SideBarLeftFriends />
            </div>
            <div className={cx('main')}>
                <MainFriends />
            </div>
        </div>
    );
}

export default Friends;
