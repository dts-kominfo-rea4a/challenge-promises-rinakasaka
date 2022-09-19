const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//const promiseOutput = null;

const promiseOutput = (emosi) =>{
  let hitung = 0;
  
  return new Promise(async (resolve) => {
    let theaterIIX = await promiseTheaterIXX()
      .then((data) => {
        data.forEach(element => {
          if (element.hasil === emosi){
            hitung++;
          }
        });
      });

    let theaterVGC = await promiseTheaterVGC()
      .then((data) => {
        data.forEach(element => {
          if (element.hasil === emosi){
            hitung++;
          }
        });
      });
  });

};

module.exports = {
  promiseOutput,
};
