import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '../../buttons';
import styles from './communityItem.module.scss';

const cx = classNames.bind(styles);
function CommunityItem() {
    const [stopBubble, setStopBubble] = useState(true);
    const [dataCommunity, setDataCommunity] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/communityMess')
            .then((res) => res.json())
            .then((res) => setDataCommunity(res));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('header')}>Đoạn chat đề xuất</h2>
            {dataCommunity.map((item, index) => (
                <div key={index} className={cx('item', stopBubble && 'isHover')}>
                    <img
                        className={cx('brand-img')}
                        src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/311070626_1205014643680530_1668259112361737223_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=58c789&_nc_ohc=_tm6l3wptbQAX9thnJE&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fsgn5-5.fna&oh=03_AdQg_vGMAEvOJGt5luHJ7UI5v416jOKO8vvbcZfZxDO7gA&oe=6413D187"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <p className={cx('name')}>{item.name}</p>
                        <p className={cx('content')}>{item.content}</p>
                    </div>
                    <Button
                        onMouseLeave={() => setStopBubble(true)}
                        onMouseOver={() => setStopBubble(false)}
                        className={cx('btn')}
                    >
                        Tham gia
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default CommunityItem;
