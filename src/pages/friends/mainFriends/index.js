import styles from './mainFriends.module.scss';
import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MainFriends() {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const [invitesData, setInvitesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/invites')
            .then((res) => res.json())
            .then((res) => setInvitesData(res));
    }, []);

    console.log(invitesData);

    const renderData = () => {
        return invitesData.map((item, index) => (
            <div key={index}>
                <div className={cx('header')}>
                    <span className={cx('header-title')}>{item.title}</span>
                    <span className={cx('see-all')}>Xem tất cả</span>
                </div>
                <div className={cx('list-item')}>
                    {item.body.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <img className={cx('img')} src={item.avatar} alt="" />
                            <div className={cx('info')}>
                                <span className={cx('name')}>{item.name}</span>
                                <div className={cx('group')}>
                                    <div className={cx('group-matual')}>
                                        <div className={cx('matual-imgs')}>
                                            <img
                                                className={cx('img-group')}
                                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/329141279_775128887288518_2561345124329938599_n.jpg?stp=cp0_dst-jpg_p24x24&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rW_QH3gjijkAX-iKKcp&tn=lGgyH9pkBhC3mcMu&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBEgBtcTqeIV8sAz7sKqfsncaK0UrjltSPdaKsDVIVVuw&oe=63F8DCD8"
                                                alt=""
                                            />
                                            <img
                                                className={cx('img-group')}
                                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/302098920_468515401798961_7172805597784811868_n.jpg?stp=cp0_dst-jpg_p24x24&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Y_15n4L9xAMAX_bmgdw&tn=lGgyH9pkBhC3mcMu&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfABWEQcxDsJOJpGZH77sv9C-Qme3257TJNNJf19xbVO6g&oe=63FA1FFC"
                                                alt=""
                                            />
                                        </div>
                                        <span className={cx('quantity')}>{item.mutual} Bạn chung</span>
                                    </div>
                                </div>
                                <button className={cx('btn')}>
                                    <span className={cx('btn-title')}>{item.add ? 'Thêm bạn bè' : 'Xác nhận'}</span>
                                </button>
                                <button className={cx('btn')}>
                                    <span className={cx('btn-title')}>{item.add ? 'Xóa, gỡ bỏ' : 'Xóa'}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    return (isDesktop || isTablet) && <div className={cx('wrapper')}>{renderData()}</div>;
}

export default MainFriends;
