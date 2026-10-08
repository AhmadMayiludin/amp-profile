export const phoneNumber = '6285694352247';

export const defaultWhatsappText = 'Halo Admin AMP Pedia, saya ingin menanyakan informasi seputar layanan dan penawaran.';

export const createWhatsappUrl = (message = defaultWhatsappText) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
