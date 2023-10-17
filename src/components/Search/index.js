import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SearchHistory from '~/components/SearchHistory';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '../Icons';
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState(''); // Text nhập input
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debounce) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchResult([]);
        setSearchValue('');
    };

    const handleHileResult = () => {
        setShowResult(false);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        // Kiểm tra xem có ký tự không phải dấu cách nào đầu tiên không
        if (inputValue.length > 0 && inputValue.charAt(0) === ' ') {
            // Loại bỏ dấu cách đầu tiên nếu có
            setSearchValue(inputValue.trim());
        } else {
            setSearchValue(inputValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Tìm kiếm gần đây</h4>
                        <SearchHistory />
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHileResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleInputChange}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
