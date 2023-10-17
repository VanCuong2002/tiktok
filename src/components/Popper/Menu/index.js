import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false }) {
    const [page, setPage] = useState([{ data: items }]);
    const current = page[page.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        item.sub && setPage((prev) => [...prev, item.sub]);
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 600]}
            offset={[12, 12]}
            placement="bottom-end"
            content={
                <div className={cx('menu')} tabIndex="-1">
                    <PopperWrapper className={cx('menu-popper')}>
                        {page.length > 1 && (
                            <Header
                                title={page[page.length - 1].title}
                                onBack={() => {
                                    setPage((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            }
            onHide={() => setPage((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
