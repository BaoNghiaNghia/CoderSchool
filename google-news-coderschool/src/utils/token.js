class AuthToken {
    constructor() {
      this.refresh = '';
      this.access = '';
      this.expired = 0;
      this.issued = 0;
    }
  
    setAccessToken(token) {
      return new Promise((resolve, reject) => {
        resolve(this.access = token);
      });
    }

    getAccessToken() {
      return this.access;
    }
}
  
export default new AuthToken();
  