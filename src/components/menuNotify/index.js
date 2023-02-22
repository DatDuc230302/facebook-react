import classNames from 'classnames/bind';
import styles from './menuNotify.module.scss';
import Popper from '../popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from '../buttons';
import { useState } from 'react';
import NotifyItem from './notifyItem';

const cx = classNames.bind(styles);

function MenuNotify() {
    const [changeNav, setChangeNave] = useState(true);
    const [showScroll, setShowScroll] = useState(false);

    return (
        <Scrollbars
            onMouseOver={() => setShowScroll(true)}
            onMouseLeave={() => setShowScroll(false)}
            className={cx('wrapper')}
            autoHide={!showScroll}
            renderTrackVertical={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        backgroundColor: '#232323',
                        right: '4px',
                        bottom: '2px',
                        top: '2px',
                        borderRadius: '3px',
                        width: '5px',
                    }}
                />
            )}
            renderThumbVertical={({ style, ...props }) => (
                <div
                    {...props}
                    style={{
                        ...style,
                        width: '8px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
                        backgroundColor: '#cccccc',
                        opacity: '0.5',
                    }}
                />
            )}
            style={{ width: 360, height: 688 }}
        >
            <Popper className={cx('popper-notify')}>
                <div className={cx('header')}>
                    <h2 className={cx('header-title')}>Thông báo</h2>
                    <FontAwesomeIcon className={cx('header-icon')} icon={faEllipsis} />
                </div>
                <div className={cx('btn-nav')}>
                    <Button onClick={() => setChangeNave(true)} active={changeNav}>
                        Tất cả
                    </Button>
                    <Button onClick={() => setChangeNave(false)} active={!changeNav}>
                        Chưa đọc
                    </Button>
                </div>
                {changeNav ? <NotifyItem /> : <NotifyItem notifyUnread />}
            </Popper>
        </Scrollbars>
    );
}

export default MenuNotify;
