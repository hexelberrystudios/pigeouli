export const generalError = 'The carrier pigeons that run our servers ran into an issue. Please try again later, or contact <a href="mailto:hexelberrystudios@gmail.com" class="pg-dark-text-shadow">hexelberrystudios@gmail.com</a>.';

export const getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

export const getQueryParam = function getQueryParam(query) {
  let result;

  if (query) {
    result = (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      const [key, value] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';

      return params;
    }, { });
  } else {
    result = {};
  }

  return result;
};

export const clearLoginInfo = function clearLoginInfo() {
  try {
    // refresh user info
    localStorage.removeItem('pg_user');
  } catch (e) {
    console.error('local storage not supported');
  }
};
