import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './itemRender.module.scss';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

function ItemRender({ onClick, img, name, icon, spinnerIcon, className, story }) {
    const props = { onClick };

    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    return (
        <div {...props} className={cx('wrapper', className, isTablet && 'Tablet')}>
            {icon && <FontAwesomeIcon className={cx('icon', { spinnerIcon })} icon={icon} />}
            {img &&
                (story === true ? (
                    <div className={cx('story')}>
                        <img className={cx('img', story === true && 'trueStory')} src={img} alt="" />
                    </div>
                ) : (
                    <img className={cx('img')} src={img} alt="" />
                ))}
            <span className={cx('name')}>{name}</span>
        </div>
    );
}

export default ItemRender;
