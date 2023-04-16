module.exports.getDate = function getDate() {
  let aestTime = new Date().toLocaleString("en-US");
  return new Date(aestTime);
};
