import styles from './MenuMess.module.scss';
import classNames from 'classnames/bind';
import Popper from '../popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faEllipsis, faMaximize, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../buttons';
import AccountItem from './accountItem';
import CommunityItem from './communityItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuMess() {
    const [changeNav, setChangeNave] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <Popper className={cx('popper-menu')}>
                <div className={cx('header')}>
                    <span className={cx('title')}>Chat</span>
                    <div className={cx('actions')}>
                        <FontAwesomeIcon className={cx('iconActions')} icon={faEllipsis} />
                        <FontAwesomeIcon className={cx('iconActions')} icon={faMaximize} />
                        <FontAwesomeIcon className={cx('iconActions')} icon={faVideo} />
                        <FontAwesomeIcon className={cx('iconActions')} icon={faPenToSquare} />
                    </div>
                </div>

                <div className={cx('search')}>
                    <div className={cx('search-control')}>
                        <label>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                        </label>
                        <input className={cx('input-control')} placeholder="Tìm kiếm bạn bè" />
                    </div>
                </div>

                <div className={cx('btn-nav')}>
                    <Button onClick={() => setChangeNave(true)} active={changeNav}>
                        Hộp thư
                    </Button>
                    <Button onClick={() => setChangeNave(false)} active={!changeNav}>
                        Cộng đồng
                    </Button>
                </div>
                {changeNav ? <AccountItem /> : <CommunityItem />}
            </Popper>
            <a className={cx('see-all')} href="/">
                Xem tất cả trong Messenger
            </a>
        </div>
    );
}

export default MenuMess;
