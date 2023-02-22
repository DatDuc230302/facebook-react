import styles from './menuMain.module.scss';
import classNames from 'classnames/bind';
import Popper from '../popper';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import api from '../../apiLocal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function MenuMain() {
    const [showScroll, setShowScroll] = useState(true);

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={cx('wrapper')}>
            {isDesktop && <h2 className={cx('header')}>Menu</h2>}
            <Popper className={cx('popper-main', (isTablet || isMobile) && 'TabletMobile')}>
                <Scrollbars
                    onMouseOver={() => setShowScroll(false)}
                    onMouseLeave={() => setShowScroll(true)}
                    autoHide={showScroll}
                    renderTrackVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                backgroundColor: '#323436',
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
                    style={{ width: 608, height: isDesktop ? 600 : 0 }}
                >
                    <div className={cx('body-menu', (isTablet || isMobile) && 'TabletMobile')}>
                        {isDesktop && (
                            <div className={cx('left-menu')}>
                                <div className={cx('search')}>
                                    <label htmlFor="search-input">
                                        <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                                    </label>
                                    <input
                                        placeholder="Tìm kiếm trong menu"
                                        id="search-input"
                                        className={cx('search-input')}
                                    />
                                </div>
                                {api.MenuMain.map(
                                    (item, index) =>
                                        item.leftMenu && (
                                            <div className={cx('left-item')} key={index}>
                                                <h2 className={cx('left-title')}>{item.title}</h2>
                                                {item.body.map((item, index) => (
                                                    <div key={index} className={cx('render-item')}>
                                                        <img className={cx('left-img')} src={item.img} alt="Vvd" />
                                                        <div className={cx('left-info')}>
                                                            <span className={cx('left-name')}>{item.name} </span>
                                                            <span className={cx('left-content')}>{item.content}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ),
                                )}
                            </div>
                        )}
                        <div className={cx('rightMenu-fake')}>
                            <div className={cx('right-menu', (isTablet || isMobile) && 'TabletMobile')}>
                                {api.MenuMain.map(
                                    (item, index) =>
                                        item.rightMenu && (
                                            <div
                                                key={index}
                                                className={cx('right-item', (isTablet || isMobile) && 'TabletMobile')}
                                            >
                                                {!!item.title && <h2 className={cx('rightMenu-head')}>{item.title}</h2>}
                                                {item.body.map((item, index) => (
                                                    <div
                                                        className={cx(
                                                            'right-element',
                                                            (isTablet || isMobile) && 'TabletMobile',
                                                        )}
                                                        key={index}
                                                    >
                                                        <div
                                                            className={cx(
                                                                'right-info',
                                                                (isTablet || isMobile) && 'TabletMobile',
                                                            )}
                                                        >
                                                            <FontAwesomeIcon
                                                                className={cx('right-icon')}
                                                                icon={item.icon}
                                                            />
                                                            <span className={cx('right-title')}>{item.name}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ),
                                )}
                            </div>
                        </div>
                    </div>
                </Scrollbars>
            </Popper>
        </div>
    );
}

export default MenuMain;
