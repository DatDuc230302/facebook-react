import classNames from 'classnames/bind';
import styles from './main.module.scss';
import Story from './story';
import Container from './container';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function MainHome() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={cx('wrapper')}>
            <Story />

            <div className={cx('post')}>
                <div className={cx('post-head')}>
                    <img
                        className={cx('post-avatar')}
                        src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/274681821_2134314796736978_6035358526023580040_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1HPDdCVg1_YAX8PthRQ&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAdQ_yvu5vZHtixKfQ9lH880PwDnbASUp8RZvzubXJuOQ&oe=63F589C2"
                        alt=""
                    />
                    <div className={cx('post-btn')}>Duc ơi, bạn đang nghĩ gì thế ?</div>
                </div>
                <div className={cx('post-footer')}>
                    <div className={cx('footer-item', (isDesktop || isMobile) && 'DesktopMobile')}>
                        <i className={cx('footer-iconVideo')} data-visualcompletion="css-img"></i>
                        <span className={cx('footer-title')}>Video trực tiếp</span>
                    </div>
                    <div className={cx('footer-item', (isDesktop || isMobile) && 'DesktopMobile')}>
                        <i className={cx('footer-iconPhoto')} data-visualcompletion="css-img"></i>
                        <span className={cx('footer-title')}>Ảnh/video</span>
                    </div>
                    {(isDesktop || isTablet) && (
                        <div className={cx('footer-item', (isDesktop || isMobile) && 'DesktopMobile')}>
                            <i className={cx('footer-iconReact')} data-visualcompletion="css-img"></i>
                            <span className={cx('footer-title')}>Cảm xúc/Hoạt động</span>
                        </div>
                    )}
                </div>
            </div>

            <Container />
        </div>
    );
}

export default MainHome;
