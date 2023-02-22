import { faCheckCircle, faClose, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './container.module.scss';
import { IconEarth } from '../../../../assets/icons';
import { faThumbsUp, faMessage, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Container() {
    const [newFeed, setNewFeed] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/newFeeds`)
            .then((res) => res.json())
            .then((res) => setNewFeed(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {newFeed.map((item, index) => (
                <div key={index} className={cx('item')}>
                    {item.suggested && (
                        <div className={cx('recent')}>
                            <div className={cx('recent-comment')}>
                                {!item.suggested && <span className={cx('recentComment-name')}>Loc Truong Nguyen</span>}
                                <span className={cx('recentComment-content')}>
                                    {item.suggested ? 'Gợi ý cho bạn' : 'đã bình luận'}
                                </span>
                            </div>
                        </div>
                    )}
                    <div className={cx('header')}>
                        <div className={cx('info')}>
                            <img className={cx('avatar')} src={item.avatar} alt="" />
                            <div className={cx('info-details')}>
                                <span className={cx('name')}>
                                    {item.name}
                                    {item.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                                </span>
                                <div className={cx('time')}>
                                    <span className={cx('time-title')}>{item.time} phút · </span>
                                    <IconEarth />
                                </div>
                            </div>
                            <span></span>
                        </div>
                        <div className={cx('actions')}>
                            <FontAwesomeIcon className={cx('actions-icon')} icon={faEllipsis} />
                            <FontAwesomeIcon className={cx('actions-icon')} icon={faClose} />
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <span className={cx('content-title')}>{item.content}</span>
                    </div>
                    <img src={item.contentImg} className={cx('item-img')} alt="" />
                    <div className={cx('interact')}>
                        <div className={cx('react')}>
                            <div className={cx('group-icon')}>
                                {item.react.map((item, index) => {
                                    return <img key={index} className={cx('react-icon')} src={item.icon} alt="" />;
                                })}
                            </div>
                            <div key={index} className={cx('react-quantity')}>
                                {item.react.map((item) => item.quantity).reduce((total, value) => total + value)}
                            </div>
                        </div>
                        <div className={cx('comment-share')}>
                            <span className={cx('comment')}>{item.comment} bình luận</span>
                            <span className={cx('share')}>{item.share} lượt chia sẻ</span>
                        </div>
                    </div>
                    <div className={cx('interact-btn')}>
                        <div className={cx('btn-wrapper')}>
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faThumbsUp} />
                            <span className={cx('btn-title')}>Thích</span>
                        </div>
                        <div className={cx('btn-wrapper')}>
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faMessage} />
                            <span className={cx('btn-title')}>Bình luận</span>
                        </div>
                        <div className={cx('btn-wrapper')}>
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faShareFromSquare} />
                            <span className={cx('btn-title')}>Chia sẻ</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Container;
