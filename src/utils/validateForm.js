export const validateFields = (email, password, name, isSignInForm) => {
    const emailValidate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  
    const passwordValidate =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!emailValidate) {
      return "Email id is not appropriate";
    }
    if (!passwordValidate) {
      return "Password is not appropriate";
    }
    if (!isSignInForm) {
      const nameValidate = /([a-zA-Z0-9_\s]+)/.test(name);
      if (!nameValidate) return "Name is not appropriate";
    }
  
    return null;
  };
  