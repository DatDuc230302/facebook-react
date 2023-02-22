import styles from './home.module.scss';
import classNames from 'classnames/bind';
import SideBarLeft from './sidebarLeft';
import SideBarRight from './sidebarRight';
import { useMediaQuery } from 'react-responsive';
import MainHome from './mainHome';

const cx = classNames.bind(styles);

function Home() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isCustom = useMediaQuery({ minWidth: 1300 });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {isCustom && (
                    <div className={cx('left-sidebar')}>
                        <SideBarLeft />
                    </div>
                )}
                <div className={cx('main')}>
                    <div className={cx('main-inner', isMobile && 'Mobile', isTablet && 'Tablet')}>
                        <MainHome />
                    </div>
                </div>

                {isDesktop && (
                    <div className={cx('right-sidebar', !isDesktop && 'right-sidebar-isDesktop')}>
                        <SideBarRight />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
