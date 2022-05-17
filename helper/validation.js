export const inputValidation = (dataValidation, inputName, input) => {
  if (dataValidation.includes("required")) {
    if (!input) {
      return `Data ${inputName} harus di isi`;
    } else {
      if (dataValidation.includes("name")) {
        const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
        if (!input.match(nameFormat)) {
          return `Format ${inputName} salah`;
        } else {
          return "";
        }
      }

      if (dataValidation.includes("phone")) {
        const idnPhoneFormat = /^[8][0-9]*$/;
        if (!input.match(idnPhoneFormat)) {
          return `Format ${inputName} salah (cth: 8123456789)`;
        } else {
          return "";
        }
      }

      if (dataValidation.includes("nominal")) {
        const nominalFormat = /^[0-9]*$/;
        if (!input.match(nominalFormat)) {
          return `Format ${inputName} salah (cth: 500000)`;
        } else {
          return "";
        }
      }

      if (dataValidation.includes("number")) {
        const nominalFormat = /^[0-9]*$/;
        if (!input.match(nominalFormat)) {
          return `Format ${inputName} salah`;
        } else {
          return "";
        }
      }

      if (dataValidation.includes("email")) {
        const emailFormat =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!input.match(emailFormat)) {
          return `Format ${inputName} salah (cth: contoh@gmail.com)`;
        } else {
          return "";
        }
      }
    }
  }
};

export const checkEmptyField = (data, slug) => {
  if (!data || data === "" || data === null) {
    return `Data ${slug} harus di isi`;
  }
};

export const checkNameFormat = (name) => {
  const nameFormat = /^[A-Za-z][A-Za-z\s]*$/;
  if (name && !name.match(nameFormat)) {
    return "Format nama salah";
  }
};

export const checkNominalFormat = (nominal) => {
  const nominalFormat = /^[0-9]*$/;
  if (nominal && !nominal.match(nominalFormat)) {
    return "Format harga salah (cth: 500000)";
  }
};

export const checkPhoneFormat = (phone) => {
  const idnPhoneFormat = /^[8][0-9]*$/;
  if (phone && !phone.match(idnPhoneFormat)) {
    return "Format nomor salah (cth: 8123456789)";
  }
};

export const checkEmailFormat = (email) => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email && !email.match(emailFormat)) {
    return "Format email salah (cth: contoh@gmail.com)";
  }
};

export const checkImageFormat = (image) => {
  if (image) {
    const fileName = image.name;
    if (fileName.substring(fileName.lastIndexOf(".") + 1) !== "jpg") {
      return "Format foto harus jpg";
    } else {
      return "";
    }
  }
};
