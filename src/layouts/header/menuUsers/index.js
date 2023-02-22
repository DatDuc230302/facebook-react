import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Popper from '../../../components/popper';
import styles from './menuUsers.module.scss';
import { MenuUsers as data } from '../../../apiLocal/MenuUsers';

const cx = classNames.bind(styles);

function MenuUsers() {
    return (
        <Popper className={cx('wrapper')}>
            <div className={cx('menu-account')}>
                <div className={cx('header')}>
                    <div className={cx('header-info')}>
                        <img
                            className={cx('header-avatar')}
                            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/274681821_2134314796736978_6035358526023580040_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cn_c08RnROIAX93CfrA&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCyhJ4Z1tfqLyJemGX3RYzBypOnFiNx_WYif4ZvZrs_jw&oe=63F97E42"
                            alt=""
                        />
                        <span className={cx('header-name')}>Duc Dat</span>
                    </div>
                    <span className={cx('see-all')}>Xem tất cả trang cá nhân</span>
                </div>
                <div className={cx('list-item')}>
                    {data.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={item.icon} />
                            <span className={cx('item-title')}>{item.content}</span>
                            {item.more && <FontAwesomeIcon className={cx('icon-more')} icon={faChevronRight} />}
                        </div>
                    ))}
                </div>
                <div className={cx('footer')}>
                    <span>Quyền riêng tư </span>·<span> Điều khoản </span>·<span> Quảng cáo </span>·
                    <span> Lựa chọn quảng cáo </span>·<span> Cookie </span>·
                    <span className={cx('fake')}> Xem thêm </span>.<span className={cx('fake')}> Meta © 2023</span>
                </div>
            </div>
        </Popper>
    );
}

export default MenuUsers;
