import classNames from 'classnames/bind';
import styles from './sidebarRight.module.scss';
import { faEllipsis, faSearch, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Scrollbars } from 'react-custom-scrollbars';
import ItemRender from '../../../components/itemRender';
import { useState, useEffect } from 'react';
import ToolTip from '../../../components/tooltip';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

const cx = classNames.bind(styles);

function SideBarRight() {
    const isCustom = useMediaQuery({ maxWidth: 1024 });
    const [showScroll, setShowScroll] = useState(true);
    const [chatUsers, setChatUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/chatUsers`)
            .then((res) => res.json())
            .then((res) => setChatUsers(res));
    }, []);

    return (
        <Scrollbars
            onMouseOver={() => setShowScroll(false)}
            onMouseLeave={() => setShowScroll(true)}
            autoHide={showScroll}
            className={cx('scrollbar')}
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
            style={{ width: 360, height: isCustom ? 1000 : 700 }}
        >
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <span className={cx('header-title')}> Người liên hệ </span>
                    <div className={cx('header-actions')}>
                        <ToolTip className={cx('tooltip1')} content={'cuộc gọi mới'}>
                            <FontAwesomeIcon className={cx('header-icon')} icon={faVideo} />
                        </ToolTip>
                        <ToolTip className={cx('tooltip2')} content={'Tìm kiếm theo tên hoặc nhóm'}>
                            <FontAwesomeIcon className={cx('header-icon')} icon={faSearch} />
                        </ToolTip>
                        <ToolTip className={cx('tooltip3')} content={'Tùy chọn'}>
                            <FontAwesomeIcon className={cx('header-icon')} icon={faEllipsis} />
                        </ToolTip>
                    </div>
                </div>
                <div className={cx('list-item')}>
                    {chatUsers.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <ItemRender story={item.story} img={item.avatar} name={item.name} />
                            {item.online && (
                                <div className={cx('online-bg')}>
                                    <span className={cx('online')}></span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Scrollbars>
    );
}

export default SideBarRight;
