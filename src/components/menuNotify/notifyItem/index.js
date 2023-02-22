import { faEllipsis, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './notifyItem.module.scss';

const cx = classNames.bind(styles);

function NotifyItem({ notifyUnread }) {
    const [stopBubble, setStopBubble] = useState(true);
    const [dataNotify, setDataNotify] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/notifys')
            .then((res) => res.json())
            .then((res) => setDataNotify(res));
    }, []);

    const renderData = (time) => {
        let boolean = false;

        if (time === 1) {
            boolean = true;
        } else {
            boolean = false;
        }

        return dataNotify
            .filter((item) =>
                notifyUnread
                    ? item.seen === true && (boolean ? item.time <= 1 : item.time > 1)
                    : boolean
                    ? item.time <= 1
                    : item.time > 1,
            )
            .map((item, index) => (
                <div key={index} className={cx('notifyItem', stopBubble && 'isHover')}>
                    <div className={cx('notify-img')}>
                        <img className={cx('brand-img')} src={item.avatar} alt="" />
                        <FontAwesomeIcon className={cx('icon-mess')} icon={faMessage} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('notify-name')}>
                            <strong className={cx('name')}>{item.name} </strong>
                            {item.content}
                        </div>
                        <div className={cx('time', item.seen && 'isUnread')}>khoảng {item.time} giờ trước</div>
                    </div>
                    <FontAwesomeIcon
                        onMouseLeave={() => setStopBubble(true)}
                        onMouseOver={() => setStopBubble(false)}
                        className={cx('icon-menu')}
                        icon={faEllipsis}
                    />
                    {item.seen === true && <span className={cx('unread')}></span>}
                </div>
            ));
    };

    return (
        <div className={cx('wrapper')}>
            <>
                {renderData(1).length > 0 && (
                    <div className={cx('header')}>
                        <h2 className={cx('header-title')}>Mới</h2>
                        <a href="/" className={cx('see-more')}>
                            Xem tất cả
                        </a>
                    </div>
                )}
                {renderData(1)}
            </>

            <>
                {renderData(2).length > 0 && (
                    <div className={cx('header')}>
                        <h2 className={cx('header-title')}>Trước đó</h2>
                        <a href="/" className={cx('see-more')}>
                            Xem tất cả
                        </a>
                    </div>
                )}
                {renderData(2)}
            </>
        </div>
    );
}

export default NotifyItem;
