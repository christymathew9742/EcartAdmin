//Removing the space b/w the string
export const removeExtraSpaces = (inputString:String) => {
  return inputString.trim().replace(/\s/g, '-').toLowerCase()
};

//get post data
const responseArray: any[] = [];
const idSet = new Set(); 

export const getProductData = (productData: any) => {
  for (const key in productData) {
    const item = { ...productData[key], id: key };
    if (!idSet.has(key)) {
      responseArray.push(item);
      idSet.add(key); 
    }
  }
  return responseArray;
};
