//Removing the space b/w the string
export const removeExtraSpaces = (inputString:String) => {
    return inputString.trim().replace(/\s/g, '-').toLowerCase()
  };