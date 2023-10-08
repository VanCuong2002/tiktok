import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faBoltLightning,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

//
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoutItem from '~/components/AccountItem';
import SearchHistory from '~/components/SearchHistory';
import Button from '~/components/Button';
import styles from './Header.Module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

// Variable
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        to: '/live',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
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

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <a href="https://www.tiktok.com/" className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </a>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tìm kiếm gần đây</h4>
                            <SearchHistory />
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            <AccoutItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('action')}>
                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text to="/upload">
                    Tải lên
                </Button>
                <Button className={cx('custom-color-btn')} primary>
                    Đăng nhập
                </Button>
                <Menu items={MENU_ITEMS}>
                    <button className={cx('btn-more')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </header>
    );
}

export default Header;
