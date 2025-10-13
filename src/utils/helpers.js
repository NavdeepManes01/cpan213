export const formatDate = date => {
  return new Date(date).tolocalebateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).tollpperCase() + string.slice(1);
};
