export default {
  generalError: 'The carrier pigeons that run our servers ran into an issue. Please try again later, or contact <a href="mailto:support@pigeouli.com">support@pigeouli.com</a>.',
  getQueryParam() {
    if (!query) {
      return { };
    } else {
      return (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        let [ key, value ] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, { });
    }
  }
};
