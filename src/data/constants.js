export const phoneNumber = '6281234567890';

export const createWhatsappUrl = (message) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
