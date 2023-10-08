import classNames from 'classnames/bind';
import styles from './SearchHistory.module.scss';

const cx = classNames.bind(styles);

function SearchHistory() {
    return (
        <div className={cx('wrapper')}>
            <ul>
                <li className={cx('item')}>
                    <p></p>
                    Kem chống nắng Biotech
                </li>
                <li className={cx('item')}>
                    <p></p>
                    Vụ mưa bão tại Trung Quốc
                </li>
                <li className={cx('item')}>
                    <p></p>
                    Kỷ niệm 10 năm thành lập CBL bóng đá Nam Định
                </li>
            </ul>
        </div>
    );
}

export default SearchHistory;
