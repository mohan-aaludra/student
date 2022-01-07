// let fetchRes = fetch("https://jsonplaceholder.typicode.com/posts");

// // fetchRes is the promise to resolve
// // it by using.then() method
// fetchRes
//   .then((res) => res.json())
//   .then((d) =>{
//     console.log(d);
//   });

// let fetchRes = fetch("https://jsonplaceholder.typicode.com/posts");

// // fetchRes is the promise to resolve
// // it by using.then() method
// fetchRes
//   .then((res) => res.json())
//   .then(d =>
//     {
//   for (var i=0;i<d.length;i++)
//   {
//     console.log(d[i].id+ " "+d[i].title)
    
//   }
//   })

fetch("https://jsonplaceholder.typicode.com/posts")

.then((res) => {
  res.json().then((data) => {
    // console.log(data);
  
              // data.foreach((itemdata) => {
              //   var temp = "";
              //   temp += "<th>" + Object.keys(itemdata) + "</th>";
              // });

    
    //  document.write(Object.keys([data]));

    // if (data.length > 0) {
    //   var temp = "";
     
    //   data.forEach((itemData) => {
    //     temp += "<tr>";
    //      temp += "<td>" + Object.keys(itemData) + "</td>";
    //     // temp += "<td>" + itemData.id+ "</td>";
    //     // temp += "<td>" + itemData.title + "</td>";
    //     // temp += "<td>" + itemData.body + "</td></tr>";
    //   });
    //   document.getElementById("data").innerHTML = temp;
    // }
  });
});
// Object.keys(d[0]);

 
