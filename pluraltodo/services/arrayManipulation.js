class ArrayManipulation {
  static createArrayOfPairsFromOriginalArray(originalArray) {
    const pairArray = [];
    let pairEntry = [];

    originalArray.forEach((entry, index) => {
      pairEntry.push(entry);
      if (index % 2 !== 0 || index === originalArray.length - 1) {
        pairArray.push({ pairEntry, id: index });
        pairEntry = [];
      }
    });

    return pairArray;
  }
}

export default ArrayManipulation;
