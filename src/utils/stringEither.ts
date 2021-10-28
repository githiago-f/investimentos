export const either = (aString: string, ...matchables: string[]) => {
  return matchables.map(i => i === aString).indexOf(true) !== -1;
};
