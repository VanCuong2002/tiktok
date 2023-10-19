import { Fragment } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoon,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faLightbulb,
    faArrowRightFromBracket,
    faGear,
    faCoins,
    faUser,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Header.Module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { Mailbox, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Search';
import routes from '~/config/routes';

// Variable
const cx = classNames.bind(styles);
const cunrrentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        to: '/live',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        sub: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'italia',
                    title: 'Italiano',
                },
                {
                    code: 'china',
                    title: 'Tiếng Trung',
                    sub: {
                        title: 'Tiếng Trung',
                        data: [
                            {
                                code: 'cng',
                                title: 'Tiếng Trung(Giản thể)',
                            },
                            {
                                code: 'cnp',
                                title: 'Tiếng Trung(Phồn thể)',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Yêu thích',
        to: '/like',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    return (
        <header className={cx('wrapperr ')}>
            <Link to={routes.home} className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </Link>
            <Search />
            <div className={cx('action')}>
                {cunrrentUser ? (
                    <>
                        <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text to="/upload">
                            Tải lên
                        </Button>
                        <Tippy delay={[0, 50]} content="Tin nhắn" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Hộp thư" placement="bottom">
                            <button className={cx('action-btn')}>
                                <Mailbox />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <Fragment>
                        <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text to="/upload">
                            Tải lên
                        </Button>
                        <Button className={cx('custom-color-btn')} primary>
                            Đăng nhập
                        </Button>
                    </Fragment>
                )}

                <Menu items={cunrrentUser ? USER_MENU : MENU_ITEMS}>
                    {cunrrentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            alt="Nguyen Van A"
                        />
                    ) : (
                        <button className={cx('btn-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </header>
    );
}

export default Header;
