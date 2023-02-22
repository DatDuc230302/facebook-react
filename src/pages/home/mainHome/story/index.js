import classNames from 'classnames/bind';
import styles from './story.module.scss';
import { IconReels, IconStory } from '../../../../assets/icons';
import { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Story() {
    const [active, setActive] = useState(true);
    const [dataStorys, setDataStorys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/${active ? 'storys' : 'reels'}`)
            .then((res) => res.json())
            .then((res) => setDataStorys(res));
    }, [active]);

    const renderItem = () => {
        return dataStorys.map((item, index) => {
            return active ? (
                <div key={index} className={cx('body-item')}>
                    <div className={cx('body-avatar')}>
                        <img className={cx('bodyAvatar-img')} src={item.avatar} alt="" />
                        <span className={cx('online')}>
                            <span className={cx('online-sub')}></span>
                        </span>
                    </div>
                    <img className={cx('bodyItem-img')} alt="" src={item.story} />
                    <div className={cx('bodyItem-name')}>{item.name}</div>
                </div>
            ) : (
                <div key={index} className={cx('reel-item')}>
                    <img className={cx('reel-img')} src={item.reel} alt="" />
                    {item.view && (
                        <div className={cx('view')}>
                            <FontAwesomeIcon icon={faPlay} className={cx('view-icon')} />
                            <span className={cx('view-title')}>{item.view} triệu</span>
                        </div>
                    )}
                </div>
            );
        });
    };

    const handleStory = () => {
        setActive(true);
    };

    const handleReels = () => {
        setActive(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div onClick={handleStory} className={cx('story-item', active && 'active')}>
                    <IconStory color={active ? '#2e89ff' : '#b0b3b8'} />
                    <span className={cx('title', active && 'active')}>Tin</span>
                </div>
                <div onClick={handleReels} className={cx('story-item', !active && 'active')}>
                    <IconReels color={!active ? '#2e89ff' : '#b0b3b8'} />
                    <span className={cx('title', !active && 'active')}>Reels</span>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    {active && (
                        <Fragment>
                            <div className={cx('body-head')}>
                                <img
                                    className={cx('bodyHead-img')}
                                    src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/274681821_2134314796736978_6035358526023580040_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1HPDdCVg1_YAX9r0GtS&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfD5vzQwgCWC3eBmmweKuQ4PlZoj3gc3B8hGGWAu5lSODw&oe=63F589C2"
                                    alt=""
                                />
                                <span className={cx('bodyHead-name')}>Tạo tin</span>
                                <div className={cx('icon-bg')}>
                                    <FontAwesomeIcon className={cx('icon-head')} icon={faPlus} />
                                </div>
                            </div>
                            {renderItem()}
                        </Fragment>
                    )}
                    <Fragment>{renderItem()}</Fragment>
                </div>

                <FontAwesomeIcon className={cx('btn-right')} icon={faChevronRight} />
            </div>
        </div>
    );
}

export default Story;
