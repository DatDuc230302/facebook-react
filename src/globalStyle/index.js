import styles from './globalStyle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function GlobalStyle({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default GlobalStyle;
