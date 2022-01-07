// ------------------------- TABLE FORMAT TO GET DATAS USING JS---------------------

function getText() {

  fetch("https://jsonplaceholder.typicode.com/comments/")
    .then((res) => res.json())
    .then((x) => {
      let tab = document.createElement("table");
      document.body.appendChild(tab); 
      let trow1 = document.createElement("tr");
      tab.appendChild(trow1);

      // ***************** FOR HEADER ************
      let z = Object.keys(Object.assign({}, ...x));
      for (i = 0; i < z.length; i++) {
        var tdata1 = document.createElement("th");
        trow1.appendChild(tdata1);
        var r = z[i];
        var text = document.createTextNode(r);
        tdata1.appendChild(text);
      }

      // // ********************* BODY *********************
      for(let q=0;q=10;q+=10){
        
         for (let j = 0; j < x.length; j++) {
           let trow2 = document.createElement("tr");
           tab.appendChild(trow2);
           for (const [key, value] of Object.entries(x[j])) {
             let tdata2 = document.createElement("td");
             trow2.appendChild(tdata2);
             let ans = document.createTextNode(value);
             tdata2.appendChild(ans);
           }
         }

      }
     
    });
  }
