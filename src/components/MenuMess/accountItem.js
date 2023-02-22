import styles from './MenuMess.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountItem() {
    const [dataUsers, setUsersData] = useState([]);
    const [stopBubble, setStopBubble] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/usersMess')
            .then((res) => res.json())
            .then((res) => setUsersData(res));
    }, []);

    return (
        <div>
            {dataUsers.map((item, index) => (
                <div key={index} className={cx('account-item', stopBubble && 'isHover')}>
                    <img src={item.avatar} alt="" className={cx('avatar')}></img>
                    <div className={cx('info')}>
                        <span className={cx('name')}>{item.name}</span>
                        <div className={cx('content')}>
                            <span className={cx('content-mess', item.unread && 'seen-active')}>{item.content}</span>
                            <span className={cx('time')}> •1 tuần</span>
                        </div>
                    </div>
                    <div className={cx('current')}>
                        {item.seen && <img src={item.avatar} alt="" className={cx('seen')}></img>}
                        {item.sent && <FontAwesomeIcon className={cx('sent')} icon={faCheckCircle} />}
                        {item.unread && <span className={cx('unread')}></span>}
                    </div>
                    <FontAwesomeIcon
                        onMouseLeave={() => setStopBubble(true)}
                        onMouseOver={() => setStopBubble(false)}
                        className={cx('icon-hover')}
                        icon={faEllipsis}
                    />
                </div>
            ))}
        </div>
    );
}

export default AccountItem;
