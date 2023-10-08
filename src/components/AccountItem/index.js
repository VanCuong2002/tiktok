import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const accountData = [
    {
        id: 1,
        name: 'Đào Lê Phương Hoa',
        username: 'hoaa.hanassii',
        avatar: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d.jpeg?x-expires=1696604400&x-signature=lChUcfYnexztCTyxzpFoYuaD550%3D',
        showCheck: true, // Chỉ hiển thị nút check cho tài khoản này
    },
    {
        id: 2,
        name: 'Nguyễn Thúc Thuỳ Tiên',
        username: 'thuytienmissgrand',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c4d3645b5bca6712769df24920b59b29~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1696518000&x-signature=rXGGELNhvCXeZ5AQ5Wrgf58BQDk%3D',
        showCheck: false, // Không hiển thị nút check cho tài khoản này
    },
    {
        id: 3,
        name: 'Chứng Khoán Không Ngán',
        username: 'pinetree_official',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/0e80a639723d8e441e13aa8745d775b7~c5_100x100.jpeg?x-expires=1696608000&x-signature=T2YP3hZraPji%2FyMVoN9XAGRBs4U%3D',
        showCheck: true,
    },
    {
        id: 4,
        name: 'Tần Nguyễn',
        username: 'tannguyen',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a0ec20b0c8aefcac5b1ed2ed554dd474~c5_100x100.jpeg?x-expires=1696608000&x-signature=rSe7DyfgIgV0s2zyME384nxn2bU%3D',
        showCheck: false,
    },
];

function AccoutItem({ account }) {
    return (
        <div className={cx('wrapper')} key={account.id}>
            <img className={cx('avatar')} src={account.avatar} alt={account.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{account.name}</span>
                    {account.showCheck && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{account.username}</span>
            </div>
        </div>
    );
}

function AccountList() {
    return (
        <div>
            {accountData.map((account) => (
                <AccoutItem key={account.id} account={account} />
            ))}
        </div>
    );
}

export default AccountList;
