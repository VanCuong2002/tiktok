import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccoutItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccoutItem({ data }) {
    return (
        <div className={cx('wrapper')} key={data.id}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <Link to={`/@${data.nickname}`} className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </Link>
        </div>
    );
}

export default AccoutItem;
