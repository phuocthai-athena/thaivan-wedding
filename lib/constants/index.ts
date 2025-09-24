import { Couple, WeddingEvent, GiftInfo, NavItem } from "../types";

// Wedding Couple Information
export const COUPLE_INFO: Couple = {
  groom: {
    name: "Thái",
    fullName: "Bùi Văn Thái",
    fatherName: "Bùi Văn Khoa",
    motherName: "Nguyễn Thị Quyên",
    image: "/images/groom.jpg",
  },
  bride: {
    name: "Vân",
    fullName: "Trần Thị Vân",
    fatherName: "Trần Văn Đông",
    motherName: "Nguyễn Thị Thoa",
    image: "/images/bride.jpg",
  },
  weddingDate: "2025-10-12",
  engagementDate: "2025-08-15",
};

// Wedding Events
export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "le-vu-quy",
    title: "Lễ Vu Quy",
    date: "2025-10-12",
    time: "09:30",
    location: "Nhà Cô Dâu",
    address:
      "Số 3 ngõ 150, đường Nguyễn Lương Bằng, Phường Phù Liễn, Hải Phòng",
    description: "Lễ vu quy tại nhà cô dâu",
    lat: 20.8449,
    lng: 106.6881,
  },
  {
    id: "le-thanh-hon",
    title: "Lễ Thành Hôn",
    date: "2025-10-12",
    time: "13:00",
    location: "Nhà Chú Rể",
    address: "Thôn Nam Thượng, Phường Thành Đông, Hải Phòng",
    description: "Lễ thành hôn tại nhà chú rể",
    lat: 20.865,
    lng: 106.683,
  },
  {
    id: "tiec-cuoi-nha-gai",
    title: "Tiệc Cưới Nhà Gái",
    date: "2025-10-12",
    time: "11:00",
    location: "Nhà hàng Hồ Bơi",
    address: "14/38 Trần Tất Văn, Phường Kiến An, Hải Phòng",
    description: "Tiệc cưới tại nhà hàng",
    lat: 20.8334,
    lng: 106.6978,
  },
  {
    id: "tiec-cuoi-nha-trai",
    title: "Tiệc Cưới Nhà Trai",
    date: "2025-10-12",
    time: "10:30",
    location: "Nhà Chú Rể",
    address: "Thôn Nam Thượng, Phường Thành Đông, Hải Phòng",
    description: "Tiệc cưới tại nhà chú rể",
    lat: 20.865,
    lng: 106.683,
  },
];

// Gift Information
export const GIFT_INFO: GiftInfo = {
  groomAccount: {
    bankName: "Techcombank",
    accountName: "Bùi Văn Thái",
    accountNumber: "19025234244012",
    qrCode: "/images/qr-groom.jpg",
  },
  brideAccount: {
    bankName: "Techcombank",
    accountName: "Trần Thị Vân",
    accountNumber: "19032989362011",
    qrCode: "/images/qr-bride.jpg",
  },
};

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "#home" },
  { label: "Cặp đôi", href: "#couple" },
  { label: "Sự kiện cưới", href: "#events" },
  { label: "Ảnh chúng mình", href: "#gallery" },
  { label: "Lời chúc", href: "#wishes" },
  { label: "Mừng cưới", href: "#gift" },
];

// Sample Photos (using placeholder images)
export const SAMPLE_PHOTOS = Array.from({ length: 12 }, (_, i) => ({
  id: `photo-${i + 1}`,
  src: `https://picsum.photos/800/600?random=${i + 20}`,
  alt: `Ảnh cưới ${i + 1}`,
  caption: `Khoảnh khắc đẹp ${i + 1}`,
  category:
    i % 4 === 0
      ? "engagement"
      : i % 4 === 1
      ? "prewedding"
      : i % 4 === 2
      ? "family"
      : "couple",
}));

// Sample Wedding Wishes
export const SAMPLE_WISHES = [
  {
    id: "1",
    name: "Lan Anh",
    message: "Chúc hai bạn trăm năm hạnh phúc, sớm có thiên thần nhỏ nhé!",
    createdAt: "2025-09-20T10:00:00Z",
    approved: true,
  },
  {
    id: "2",
    name: "Minh Tuấn",
    message: "Chúc mừng ngày vui của hai bạn! Hạnh phúc mãi mãi nhé!",
    createdAt: "2025-09-21T14:30:00Z",
    approved: true,
  },
  {
    id: "3",
    name: "Thu Hà",
    message:
      "Cô dâu xinh quá! Chúc hai bạn luôn yêu thương và bên nhau suốt đời!",
    createdAt: "2025-09-22T09:15:00Z",
    approved: true,
  },
];

// Website Metadata
export const SITE_CONFIG = {
  name: "Thái & Vân Wedding",
  description: "Trang web đám cưới của Thái và Vân - 12/10/2025",
  url: "https://thaivan-wedding.com",
  ogImage: "/images/og-image.jpg",
  keywords: "đám cưới, wedding, Thái, Vân, 2025",
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/thaivan-wedding",
  instagram: "https://instagram.com/thaivan-wedding",
  youtube: "https://youtube.com/thaivan-wedding",
};
