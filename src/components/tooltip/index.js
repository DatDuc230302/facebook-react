import classNames from 'classnames/bind';
import styles from './tooltip.module.scss';

const cx = classNames.bind(styles);
function ToolTip({ content, children, className }) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <div className={cx('tooltip', className)}>{content}</div>
        </div>
    );
}

export default ToolTip;
