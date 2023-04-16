// With Axios and promises.

const axios = require("axios");

const connectToURL1 = (url) => {
  const req = axios.get(url);
  console.log(req);
  req
    .then((resp) => {
      let listOfEntries = resp.data.entries;
      listOfEntries.forEach((entry) => {
        console.log(entry.Category);
      });
    })
    .catch((err) => {
      console.log(err.toString());
    });
};
console.log("Before connect URL");
connectToURL1("https://api.publicapis.org/entries");
console.log("After connect URL");

// Same, with async await
const connectToURL2 = async (url) => {
  const outcome = axios.get(url);
  let listOfEntries = (await outcome).data.entries;
  listOfEntries.forEach((entry) => console.log(entry.Category));
};

console.log("Before connect URL");
connectToURL2("https://api.publicapis.org/entries");
console.log("After connect URL");

/////////////////////////////////
// chaining //
//////////////////////////////

// with promises
const connectToURL3 = (url) => {
  const req = axios.get(url);
  req
    .then((resp) => {
      let listOfEntries = resp.data.entries;
      return listOfEntries.map((entry) => entry.Category);
    })
    .then((categories) => {
      let Categories = categories.filter((item, pos, self) => {
        return self.indexOf(item) == pos;
      });
      Categories.forEach((category) => {
        const req = axios.get(
          "https://api.publicapis.org/entries?Category=" + category
        );
        req
          .then((resp) => {
            console.log(category + " - " + resp.data.count);
          })
          .catch((err) => {});
      }).catch((err) => console.log(err.toString()));
    });
};

connectToURL3("https://api.publicapis.org/entries");

// With async/await
async function connectToURL4(url) {
  const resp = await axios.get(url);
  let listOfEntries = resp.data.entries;
  let Categories = listOfEntries.map((entry) => entry.Category);
  Categories = [...new Set(Categories)];

  Categories.forEach(async (Category) => {
    if (Category.startsWith("A")) {
      try {
        const resp = await axios({
          method: "get",
          url: "https://api.publicapis.org/entries?Category=" + Category,
          responseType: "json",
        });
        console.log(Category + " " + resp.data.count);
      } catch (e) {
        console.log(e);
      }
    }
  });
}

connectToURL4("https://api.publicapis.org/entries").catch((err) => {
  console.log(err.toString());
});
