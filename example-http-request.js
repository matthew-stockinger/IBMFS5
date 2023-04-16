const http = require("http");

// let options = {
//   host: "w1.weather.gov",
//   path: "/xml/current_obs/KSFO.xml",
// };

// http
//   .request(options, (response) => {
//     let buffer = "";
//     let result = "";

//     // data event is fired on the response object when response is succecssful
//     response.on("data", (chunk) => (buffer += chunk));

//     // end event is fired on the response object when response is finished.
//     response.on("end", () => console.log(buffer));
//   })
//   .end(); // completes the request

//////////// example 2 ///////////////

options = {
  host: "api.open-notify.org",
  path: "/astros.json",
};

http
  .request(options, (response) => {
    let buffer = "";
    let result = "";

    response.on("data", (chunk) => (buffer += chunk));
    response.on("end", () => {
      result = JSON.parse(buffer);
      console.log(`response message: ${result.message}`);
      console.log(`There are currently ${result.number} people on the ISS.`);
      console.log(
        `Their names are: ${result.people
          .map((person) => person.name)
          .join(", ")}`
      );
    });
  })
  .end();
