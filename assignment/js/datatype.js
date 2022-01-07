// var q ="mohankumar";
// console.log(q);

// Task
// 1 data type
// 2 differnece bt null undefined,
// 3 to change string to Number without using function
// 4 Types of operators ?
//5 Basic Array method=>push,pop,concat


// var h="20";
// h= +h;
// console.log("h",h,typeof(h));

// //let cannot be redeclare but can reassign:
// let b=10;
// b=5;
// console.log("b", b);

// var i=20;
// console.log("i",i);

// var array=[1,2,3,4];
// console.log("array",array,typeof(array));

// var ob={Number:1,
//             Text:"one",
//             Float:2.3,
//             Wholenumber:0}
// console.log(ob,typeof(ob));            
            
// let a="20";
// let b="20";
// if(a===b)
// {
//   console.log(a,"value is equal to", b);
// }
// else if (a === b) {
//   console.log(`a "value and type is equal to" b`);
// }
// else {
// console.log(` a "is not equal to "b`);
// }

        // let value=[0,1,2,3,4,5];
        // for(i=0;i<value.length;i++)
        // {
        //   console.log(i,value[i]);
        // }
// for in, for off, for each:

        // let qwer=['a','b','c','d'];

        // for (let i in qwer)
        // {
        //   console.log('for in loop',i)
        // }

        // for (let j  of qwer) {
        //   console.log("for in loop", j)
        // }

///primite data type,
  // functional parameters
  // arrow function


// let student=[{name:"mohan",sports:'Football'},
//             {name:"naveen",sports:"volleyball"},
//              {name:"kishore",sports:"Hockey"}]

//   for(i=0;i<student.length;i++)
//   {
//     // console.log(student.length);
//    console.log("Favourite game of "+  student[i].name+ " is "+ student[i].sports); 
//   }           
       
//   for(let i of student)
//   {
// console.log("Favourite game of "+i.name+" is "+i.sports);             
    
//   }           

/* function

*/
// function hello(){
//   console.log("General function")
// } 
// hello();

// function espression
// const a="asdf";
// let data=function()
// { 
//   let s=3;
//   var d1 = "machcity" + a;
//   console.log(" my Favrite game is cycling :",d1);
// }
// data();
// console.log(s);

//call back function 


// const fruits = ["ad","we","rt","ty"];
 
// fruits.forEach(function(i){
//   console.log(i);
// });


//Arrow function
// let myFunction = (a, b) => a + b;
// let Fun = (a, b) =>{return a+b};

// console.log(myFunction(1,4));
// console.log(Fun(1, 4));

// shallow copy 
// deep copy

// const q=obj.q;

// 23-12 object destructring=> single object destructor
// const obj ={w:1 ,e:2,r:3}
// const {w}=obj;
// console.log(w);


// object destructring=> nested  object destructor

// const p={q:1,w:2,e:{r:3,t:4},y:5}
// const {e:{r}}=p;
// console.log(r);

// console.log(`"dell" is the "laptop"`);

//literals string

// const m=1;
// const n=2;
// console.log


//map function

// let array=[1,2,3,4,5];

// for( value in array)
// {
// console.log(value);  
// }

// for(var i=0;i<=array.length;i++)
// {
//   let value;
//  value.push(i*i);
//   console.log(value);
// }



// //map
//         const person = [
//         { firstname: "Malcom", lastname: "Reynolds" },
//         { firstname: "Kaylee", lastname: "Frye" },
//         { firstname: "Jayne", lastname: "Cobb" },
//         ];

//         let fullName = person.map((variable) => {
//         return [variable.firstname,variable.lastname].join("");
//         });

//         console.log(fullName, "fullName");

//         let square=[4,9,16,25,36,49,86]

//         var result=square.map(Math.sqrt);

//         console.log(result);


// //filter        
        // const persons = [
        //   { firstname: "lap", lastname: "top",age:'20' },
        //   { firstname: "key", lastname: "value",age:'23' },
        // ];

        // let filter =persons.filter((i)=>{
        //         return i.age==23;
        // } )

        // console.log(filter);

// //reduce 
//         const redarr=[12,24,28,40];

//         let reducearr=redarr.reduce((cureent,previous)=>{
//              return cureent+previous;   
//         })
//         console.log(reducearr);

//find
        let findArr = persons.find((p) => {
          return p.age < "23";
        });

//To get last chas=racter from a string: 
    // let data=prompt("name");
    // result=data[data.length-1];
    // console.log(result);