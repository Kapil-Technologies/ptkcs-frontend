const Uppercase = (data) => {
  let upperCaseStr = data.toUpperCase();
  return upperCaseStr;
};
const Lowercase = (data) => {
  let lowerCaseStr = data.toLowerCase();
  return lowerCaseStr;
};

const capitalizeFirstLetterOfEachWordWithoutCommas = (data) => {
  return data.replace(/\b[a-zA-Z]/g, function (char) {
    return char.toUpperCase();
  });
};

const Capitalcase = (data) => {
  let capitalizedStr = capitalizeFirstLetterOfEachWordWithoutCommas(data);
  return capitalizedStr;
};

export default { Uppercase, Lowercase, Capitalcase };
