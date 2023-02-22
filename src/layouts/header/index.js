import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { logoMain } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LinkPage from './linkPage';
import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { userGroup, home, game, group, iconMenu, iconMes, iconNotify, watch } from '../../assets/icons';
import MenuMess from '../../components/MenuMess';
import { useState } from 'react';
import MenuNotify from '../../components/menuNotify';
import MenuMain from '../../components/menuMain';
import { useMediaQuery } from 'react-responsive';
import MenuUsers from './menuUsers';

const cx = classNames.bind(styles);

const DataLink = [
    {
        icon: home,
        to: '/',
        title: 'Tìm kiếm',
    },
    {
        icon: userGroup,
        to: '/friends',
        title: 'Bạn bè',
    },
    {
        icon: watch,
        to: '/watch',
        title: 'Xem phim',
    },
    {
        icon: group,
        to: '/group',
        title: 'Nhóm',
    },
    {
        icon: game,
        to: '/fd',
        title: 'Trò chơi',
    },
];

function Header() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isCustom = useMediaQuery({ minWidth: 1224 });

    const [showMess, setShowMess] = useState(false);
    const [showNotify, SetShowNotify] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [shortCut, setShortCut] = useState(false);
    const [linkBooksMark, setLinkBooksMark] = useState(true);
    const [fade, setFade] = useState(false);

    const handleBooksMark = () => {
        shortCut ? setShortCut(false) : setShortCut(true);
        linkBooksMark ? setLinkBooksMark(false) : setLinkBooksMark(true);
    };

    const handleMess = () => {
        if (showMess) {
            setShowMess(false);
        } else {
            setShowMess(true);
        }
    };

    const handleMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    const handleNotify = () => {
        if (showNotify) {
            SetShowNotify(false);
        } else {
            SetShowNotify(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('search')}>
                    <div className={cx('logo-link')}>
                        <Link to={'/'}>{logoMain}</Link>
                    </div>
                    {fade && (
                        <FontAwesomeIcon
                            onClick={() => setFade(false)}
                            className={cx('search-back', fade && 'fade')}
                            icon={faArrowLeft}
                        />
                    )}
                    <div className={cx('search-box', fade && 'fade')}>
                        <div
                            className={cx(
                                'search-control',
                                fade && 'fade',
                                fade && isMobile && 'Mobile',
                                (isTablet || isMobile) && 'TabletMobile',
                            )}
                        >
                            <label htmlFor="input" className={cx('label')}>
                                <FontAwesomeIcon
                                    onClick={() => setFade(true)}
                                    className={cx('icon', fade && 'fade')}
                                    icon={faSearch}
                                />
                            </label>
                            {(isCustom || (fade && isMobile)) && (
                                <input
                                    autoComplete="off"
                                    onBlur={() => setFade(false)}
                                    onFocus={() => setFade(true)}
                                    id="input"
                                    placeholder="Tìm kiếm trên Facebook"
                                    className={cx('input-search', fade && 'fade', isMobile && 'Mobile')}
                                />
                            )}
                        </div>
                        {fade && <div className={cx('search-result')}>Không có tìm kiếm nào gần đây</div>}
                    </div>
                    {(isMobile || isTablet) && (
                        <Link to={linkBooksMark ? '/booksmark' : '/'}>
                            <FontAwesomeIcon
                                onClick={handleBooksMark}
                                className={cx('menu-shortcut', shortCut && 'activeShortCut')}
                                icon={faBars}
                            />
                        </Link>
                    )}
                </div>
                {isDesktop && (
                    <div className={cx('link-page')}>
                        {DataLink.map((item, index) => (
                            <Tippy key={index} delay={[400, 0]} placement="bottom" content={item.title}>
                                <div className={cx('tippy-item')}>
                                    <LinkPage to={item.to} icon={item.icon} />
                                </div>
                            </Tippy>
                        ))}
                    </div>
                )}

                <div className={cx('actions')}>
                    <HeadLessTippy
                        appendTo={'parent'}
                        interactive={true}
                        offset={[0]}
                        visible={showMenu}
                        onHide={() => setShowMenu(false)}
                        onClickOutside={() => setShowMenu(false)}
                        placement={'bottom'}
                        render={() => (
                            <div>
                                <MenuMain />
                            </div>
                        )}
                    >
                        <Tippy placement="bottom" delay={[200, 0]} content="Menu">
                            <div onClick={handleMenu} className={cx('iconAction', showMenu && 'active')}>
                                {isDesktop ? (
                                    iconMenu
                                ) : (
                                    <FontAwesomeIcon style={{ width: 20, height: 20, color: 'white' }} icon={faPlus} />
                                )}
                            </div>
                        </Tippy>
                    </HeadLessTippy>

                    <HeadLessTippy
                        appendTo={'parent'}
                        interactive={true}
                        offset={[0]}
                        visible={showMess}
                        placement={'bottom'}
                        onHide={() => setShowMess(false)}
                        onClickOutside={() => setShowMess(false)}
                        render={() => (
                            <div>
                                <MenuMess />
                            </div>
                        )}
                    >
                        <Tippy placement="bottom" delay={[200, 0]} content="Mess">
                            <div onClick={handleMess} className={cx('iconAction', showMess && 'active')}>
                                {iconMes}
                            </div>
                        </Tippy>
                    </HeadLessTippy>

                    <HeadLessTippy
                        appendTo={'parent'}
                        interactive={true}
                        offset={[0]}
                        visible={showNotify}
                        placement="bottom"
                        onHide={() => SetShowNotify(false)}
                        onClickOutside={() => SetShowNotify(false)}
                        render={() => (
                            <div>
                                <MenuNotify />
                            </div>
                        )}
                    >
                        <Tippy placement="bottom" delay={[200, 0]} content="Thông báo">
                            <div onClick={handleNotify} className={cx('iconAction', showNotify && 'active')}>
                                {iconNotify}
                            </div>
                        </Tippy>
                    </HeadLessTippy>

                    <HeadLessTippy
                        onHide={() => setShowAccount(false)}
                        onClickOutside={() => setShowAccount(false)}
                        offset={[20]}
                        appendTo={'parent'}
                        interactive={true}
                        visible={showAccount}
                        placement={'bottom'}
                        render={() => (
                            <div>
                                <MenuUsers />
                            </div>
                        )}
                    >
                        <Tippy placement="bottom" content="Tài khoản">
                            <img
                                onClick={() => (showAccount ? setShowAccount(false) : setShowAccount(true))}
                                src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/274681821_2134314796736978_6035358526023580040_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qyto3-nmkSwAX-Z01cg&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfBzOP0ajdlDuF8K0mJa8taSNBFTsyKJBMC-Ol8U-h5yPA&oe=63EF9B02"
                                alt="Dat"
                                className={cx('avatar')}
                            />
                        </Tippy>
                    </HeadLessTippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
