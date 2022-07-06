function customSplit(str, delim = "") {
  let delimLen = delim.length;
  let resultIndices = [];
  let resultArray = [];

  for (let i = 0; i < str.length; i++) {
    let chunk = str.substr(i, delimLen);
    if (chunk === delim) resultIndices.push(i);
  }

  resultArray.push(str.substr(0, resultIndices[0]));
  for (let i = 0; i < resultIndices.length - 1; i++) {
    resultArray.push(
      str.substr(
        resultIndices[i] + delimLen,
        resultIndices[i + 1] - resultIndices[i] - delimLen
      )
    );
  }
  resultArray.push(
    str.substr(resultIndices[resultIndices.length - 1] + delimLen)
  );

  return resultArray;
}

let str = "";
console.log(customSplit(str, "ab"));
