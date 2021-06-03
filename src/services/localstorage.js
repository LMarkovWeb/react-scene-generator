const setLocSt = (label, objJSON) => {
  return localStorage.setItem(label, objJSON);
};

const getLocSt = (label) => {
  return localStorage.getItem(label);
};

export { setLocSt, getLocSt };
