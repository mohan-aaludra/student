//1:To print only id=3 [use fetch for getting data from api]

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((variable) => console.log(variable));
      
            // .then((variable) => console.log(Object.keys(Object.assign({}, ...variable))));


  //  fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then(fee=>{
  //       var result=fee.filter((dee)=>{
  //         return dee.id==3;
  //       })
  //       console.log(result);
  //     })

  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(res)

      // .then((avengers)=>avengers.filter(tofind){
      //   return tofind.id==3;
      // )};
      
//5:clone an array using object.assign , JSON.parse and JSON.stringify and spreadoperator

//json.stringfy,json.parse

    // nestedNumbers = [[1], [2]];
    // numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

    // numbersCopy[0].push(300);
    // console.log(nestedNumbers, numbersCopy);

//object assign (Object.assign(target, ...sources))

    // const target = { a: 1, b: 2 };
    // const source = { d: 4, a: 5 };

    // const returnedTarget = Object.assign(target, source);

    // console.log(target);
    // // expected output: Object { a: 1, b: 4, c: 5 }

    // console.log(returnedTarget);
    // // expected output: Object { a: 1, b: 4, c: 5 }
        
//spredoperator(shallow copy)

      numbers = [1, 2, 3];
      numbersCopy = [...numbers];

      numbersCopy.push(4);
      console.log(numbers, numbersCopy);
      // [1, 2, 3] and [1, 2, 3, 4]