/**
 * This represents some generic auth provider API,
 * just like Backend or Firebase auth
 */

const authProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { authProvider };
