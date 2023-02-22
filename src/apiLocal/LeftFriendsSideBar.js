import { faBars, faGift, faUserGroup, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const LeftFriendsSideBar = [
    {
        icon: faUserGroup,
        content: 'Trang chủ',
        more: false,
        to: '/friends',
    },
    {
        icon: faUserMinus,
        content: 'Lời mời kết bạn',
        more: true,
        to: '/friends/invites',
    },
    {
        icon: faUserPlus,
        content: 'Gợi ý',
        more: true,
        to: '/suggestes',
    },
    {
        icon: faBars,
        content: 'Tất cả bạn bè',
        more: true,
        to: '/all',
    },
    {
        icon: faGift,
        content: 'Sinh nhật',
        more: false,
        to: '/birthday',
    },
    {
        icon: faBars,
        content: 'Danh sách tùy chỉnh',
        more: true,
        to: '/option',
    },
];
