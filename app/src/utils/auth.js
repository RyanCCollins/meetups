const requestAuth = (email, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@ryancollins.io' && pass === 'Password!123') {
        resolve({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        });
      } else {
        reject({ error: 'Password or email is incorrect' });
      }
    });
  });
};

const auth = {
  login(email, pass) {
    return new Promise((resolve, reject) => {
      if (localStorage.token) {
        resolve({ token: localStorage.token });
      }
      requestAuth(email, pass)
        .then((res) =>
          resolve({ token: res.token })
        ).catch((err) =>
          reject({ error: err })
        );
    });
  }
};

export default auth;
