import classNames from 'classnames/bind';
import styles from './booksmark.module.scss';
import { useState } from 'react';
import ItemRender from '../../components/itemRender';
import { LeftHomeSideBar as sideBarData } from '../../apiLocal/LeftHomeSideBar';
import { faChevronDown, faChevronUp, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function BooksMark() {
    const [btnTop, setBtnTop] = useState(false);
    const [btnBot, setBtnBot] = useState(false);
    const [loadingTop, setLoadingTop] = useState(false);
    const [loadingBot, setLoadingBot] = useState(false);

    const handleBtnTop = () => {
        setLoadingTop(true);
        setTimeout(() => {
            btnTop ? setBtnTop(false) : setBtnTop(true);
            setLoadingTop(false);
        }, 500);
    };

    const handleBtnBot = () => {
        setLoadingBot(true);
        setTimeout(() => {
            btnBot ? setBtnBot(false) : setBtnBot(true);
            setLoadingBot(false);
        }, 500);
    };

    const renderData = (top, bot) => {
        let boolean = false;
        let long;

        return sideBarData.map((item, index) => {
            item.position ? (long = bot) : (long = top);
            if (btnTop) {
                item.position ? (long = bot) : (long = item.body.length);
            }
            if (btnBot && item.position) {
                item.position ? (long = top) : (long = item.body.length);
            }
            return (
                <div key={index} className={cx('list-item')}>
                    {item.position && (
                        <div className={cx('shortcut')}>
                            <span className={cx('shortcut-title')}>Lối tắt của bạn</span>
                            <span className={cx('shortcut-link')}>Chỉnh sửa</span>
                        </div>
                    )}
                    {item.body.map((item, index) => {
                        return (
                            (boolean ? true : index < long) && (
                                <ItemRender responsive={false} key={index} img={item.img} name={item.name} />
                            )
                        );
                    })}
                    {item.position ? (
                        <ItemRender
                            responsive={false}
                            spinnerIcon={loadingBot}
                            onClick={handleBtnBot}
                            icon={loadingBot ? faSpinner : btnBot ? faChevronUp : faChevronDown}
                            name={btnBot ? 'Ẩn bớt ' : 'Xem thêm'}
                        />
                    ) : (
                        <ItemRender
                            responsive={false}
                            spinnerIcon={loadingTop}
                            onClick={handleBtnTop}
                            icon={loadingTop ? faSpinner : btnTop ? faChevronUp : faChevronDown}
                            name={btnTop ? 'Ẩn bớt ' : 'Xem thêm'}
                        />
                    )}
                </div>
            );
        });
    };
    return (
        <div className={cx('wrapper')}>
            {renderData(6, 5)}
            <div className={cx('footer')}>
                <a href="/">Quyền riêng tư</a> · <a href="/"> Điều khoản</a> · <a href="/">Quảng cáo </a> ·
                <a href="/"> Lựa chọn quảng cáo </a> · <a href="/">Quyền riêng tư</a> · <a href="/">Cookies</a> ·
                <a href="/"> Xem thêm</a> · Meta © 2023
            </div>
        </div>
    );
}

export default BooksMark;
