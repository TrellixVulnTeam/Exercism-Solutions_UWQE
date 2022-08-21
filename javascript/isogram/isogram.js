//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
  let chars = str.toLowerCase();
  return !chars.match(/([a-z]).*\1/i)
};
