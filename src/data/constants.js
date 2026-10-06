export const phoneNumber = '6287792673907';

export const createWhatsappUrl = (message) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
