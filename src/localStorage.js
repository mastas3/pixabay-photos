export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('lastThree');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (lastThree) => {
  try {
    const serializedState = JSON.stringify(lastThree);
    localStorage.setItem('lastThree', serializedState);
  } catch (error) {
    console.log(`localStorage.saveState`, error);
  }
}
