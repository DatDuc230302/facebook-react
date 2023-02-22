import classNames from 'classnames/bind';
import styles from './group.module.scss';
import LeftGroupSidebar from './leftGroupSidebar';
const cx = classNames.bind(styles);

function Group() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-sidebar')}>
                <LeftGroupSidebar />
            </div>
        </div>
    );
}

export default Group;
