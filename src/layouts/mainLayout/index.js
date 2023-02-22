import Header from '../header';
import styles from './mainLayout.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEllipsis, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import ToolTip from '../../components/tooltip';
import HeadLessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import React from 'react';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    const [newMess, setNewMess] = useState(false);
    const handleNewMess = () => {
        newMess ? setNewMess(false) : setNewMess(true);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <div className={cx('btn-pin')}>
                    <HeadLessTippy
                        appendTo={'parent'}
                        interactive={true}
                        offset={[0, 20]}
                        placement="right"
                        visible={newMess}
                        render={() => (
                            <div className={cx('newMess')}>
                                <div className={cx('header')}>
                                    <span className={cx('header-title')}>Tin nhắn mới</span>
                                    <FontAwesomeIcon
                                        onClick={() => setNewMess(false)}
                                        className={cx('header-icon')}
                                        icon={faClose}
                                    />
                                </div>
                                <div className={cx('send-input')}>
                                    <label className={cx('input-label')}>Đến:</label>
                                    <input type={'text'} className={cx('input-control')} />
                                </div>
                                <div className={cx('suggest')}>
                                    <span className={cx('suggest-text')}>Gợi ý</span>
                                </div>
                            </div>
                        )}
                    >
                        <div>
                            {newMess ? (
                                <FontAwesomeIcon
                                    onClick={handleNewMess}
                                    className={cx('pin-icon')}
                                    icon={faPenToSquare}
                                />
                            ) : (
                                <ToolTip className={cx('tooltip-pin')} content={'Tin nhắn mới'}>
                                    <FontAwesomeIcon
                                        onClick={handleNewMess}
                                        className={cx('pin-icon')}
                                        icon={faPenToSquare}
                                    />
                                </ToolTip>
                            )}
                        </div>
                    </HeadLessTippy>
                    {newMess && (
                        <div className={cx('option')}>
                            <FontAwesomeIcon className={cx('option-icon')} icon={faEllipsis} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
