import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    if (items.length === 0) {
        return children;
    }

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            placement="bottom-end"
            content={
                <div className={cx('menu')} tabIndex="-1">
                    <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
                </div>
            }
        >
            {children}
        </Tippy>
    );
}

export default Menu;
