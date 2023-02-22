import { faCompass, faGear, faNewspaper, faPlus, faSearch, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import styles from './leftGroupSidebar.module.scss';

const cx = classNames.bind(styles);

function LeftGroupSidebar() {
    const [active, setActive] = useState(false);
    const [groupsJoinedData, setGroupsJoinedData] = useState([]);
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/groupsJoined')
            .then((res) => res.json())
            .then((res) => setGroupsJoinedData(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-label')}>
                    <span className={cx('header-title')}>Nhóm</span>
                    <FontAwesomeIcon className={cx('header-icon')} icon={faGear} />
                </div>
                <div className={cx('header-search')}>
                    <label htmlFor="search-input">
                        <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                    </label>
                    <input id="search-input" placeholder="Tìm kiếm nhóm" className={cx('search-input')} type={'text'} />
                </div>
            </div>
            <Scrollbars
                onMouseOver={() => setShowScroll(false)}
                onMouseLeave={() => setShowScroll(true)}
                autoHide={showScroll}
                className={cx('scrollbar')}
                renderTrackVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        style={{
                            ...style,
                            backgroundColor: '#242526',
                            right: '4px',
                            bottom: '2px',
                            top: '2px',
                            borderRadius: '3px',
                            width: '4px',
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
                style={{ width: 360, height: 598 }}
            >
                <div className={cx('main')}>
                    <div className={cx('btn-feed')}>
                        <button
                            onClick={() => (active ? setActive(false) : setActive(true))}
                            className={cx('btn-item', !active && 'active')}
                        >
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faNewspaper} />
                            <span className={cx('btn-title')}>Bảng feed của bạn</span>
                        </button>
                        <button
                            onClick={() => (active ? setActive(false) : setActive(true))}
                            className={cx('btn-item', active && 'active')}
                        >
                            <FontAwesomeIcon className={cx('btn-icon')} icon={faCompass} />
                            <span className={cx('btn-title')}>Khám phá</span>
                        </button>
                    </div>
                    <div className={cx('create')}>
                        <button className={cx('btn-create')}>
                            <FontAwesomeIcon className={cx('btnCreate-icon')} icon={faPlus} />
                            <span className={cx('btnCreate-title')}>Tạo nhóm mới</span>
                        </button>
                    </div>
                </div>
                <div className={cx('body')}>
                    <span className={cx('body-header')}>Nhóm bạn đã tham gia</span>
                    {groupsJoinedData.map((item, index) => (
                        <div key={index} className={cx('body-item')}>
                            <img className={cx('img')} src={item.img} alt="" />
                            <div className={cx('info')}>
                                <div className={cx('name')}>
                                    <span className={cx('name-title')}>{item.name}</span>
                                    <FontAwesomeIcon
                                        className={cx('name-icon', index === 0 && 'icon')}
                                        icon={faThumbTack}
                                    />
                                </div>
                                <span className={cx('content')}>Lần hoạt động gần nhất: {item.content}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Scrollbars>
        </div>
    );
}

export default LeftGroupSidebar;
