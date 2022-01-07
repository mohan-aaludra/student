//1.To Swap Two Numbers

        // var n1=20;
        // var n2=10;
        // swap=n1;
        // n1=n2;
        // n2=swap;
        // console.log(
        //   `Value of n1 after swap is ",${n1},
        //   Value of n2 after swap is ",${n2}`
        // );

//2.To Find largest of three numbers

        // const num1 = parseFloat(prompt("Enter first number: "));
        // const num2 = parseFloat(prompt("Enter second number: "));
        // const num3 = parseFloat(prompt("Enter third number: "));

        // const largest = Math.max(num1, num2, num3);

        // display the result
        // console.log("The largest number is " + largest);

//3.To print Even numbers from 1-100
        // for(i=0;i<=100;i++)
        // {
        // if(i % 2 == 0){
        //   console.log(i+ ' is Even number');
        // }
        // }

//4.To Check String is palidrome or not

        // var string=prompt("Enter a string");
        // var tempstring=string;
        // function stringreverse(str)
        // {
        //   var string2=(str.split("").reverse().join(""));
        //   if(string2===tempstring)
        //   {
        //     console.log("its palindrome");
        //   }
        //   else{
        //         console.log("its  not an palindrome");
        //   }
        // }
        // stringreverse(tempstring);

//5.To print elements of array in reverse order
        // var arrayelements=[1,2,3,4,5];
        // for (i=4;i>=0;i--) 
        // {
        //   console.log(arrayelements[i]);
        // }
        // // console.log(arrayelements.reverse());

//6.To print elements of array in even position
        // var evenposition=[3,6,9,12,15,18,21,24];
        // for(var i=0;i<evenposition.length;i++)
        // {
        //   if(i%2==0)
        //   {
        //     console.log('Array in even position',i,evenposition[i]);
        //   }
        // }


//7.To find odd and even also their sum 

                // let a=[1,2,3,4,5,6];
                // let even=[];
                // let odd=[];
                // let evensum=0;
                // let oddsum=0;
                
                // for (let i=1;i<a.length+1;i++)
                // {
                // if(a[i]%2==0){
                //         even.push(i);
                // }
                // else{
                //         odd.push(i)
                // }
                // }

                // //even and odd sum:
                // for(let i=0;i<even.length;i++)
                // {
                // evensum+=even[i];
                // }
                // for (let i = 0; i < odd.length; i++)
                // {
                //    oddsum += odd[i];
                //  }

               
                // console.log("Even Numbers is : ",even);
                // console.log("odd Numbers is : ",odd);
                // console.log("even sum: ",evensum);
                // console.log("odd sum: ",oddsum);


//8.Prime numbers between 1-100


                // function isprime(n)
                // {
                //   if (n<2)
                //   return `${n} is not a prime` 
                  
                //   for(let i=2;i<n;i++)
                //     {
                //   if(n% i===0)
                //     {
                //         return '${n} is not a prime number'
                //     }      
                //   }
                //   return `${n} is a prime number`
                // }
                // console.log(isprime(5));

//9.To sort elements in ascending order
        // var ascending=[32,28,24,20,16,12,8,4];
        // var lowestToHighest = ascending.sort((a, b) => a - b);
        // console.log('Elements of array in ascending order',lowestToHighest);

// 10.call back function.


//    function createQuote(quote, call) 
//    {
//      var myQuote = "Like I always say, " + quote;
//      call(myQuote); // 2
//    }
//    function logQuote(quote) 
//    {
//      console.log(quote);
//    }

//    createQuote("eat your vegies!", logQuote);


//11.To remove duplicate entries from an array
        //using set method.

        // let duplicate=[1,2,3,4,2,1,4];
        // let original =[...new Set(duplicate)];
        // console.log(original);

        //using include and foreach

        // let chars = ["A", "B", "A", "C", "B"];

        // let uniqueChars = [];
        // chars.forEach((c) => {
        //   if (!uniqueChars.includes(c)) {
        //     uniqueChars.push(c);
        //   }
        // });

        // console.log(uniqueChars);

// 13:Multiplication & division  of two  numbers  from user:

        // var data1=prompt("Enter first number ");
        // var data2=prompt("Enter second number ");
        // var mul=data1*data2;
        // var div=data1/data2;
        // console.log(mul,' ',div);

        

  //16:Compute two values if same make triple else print actual
  
                // function Triple(x, y)
                // {

                // if (x == y) {
                //         return 3 * (x + y);
                // } else {
                //         return x + y;
                // }

                // }
                // console.log(Triple(3,3));
                // console.log(Triple(20, 10));
                        

  
//17:compare 2 array and form 3rd array with value, if two array  are same:

        // let arr1 =[1,2,3,5,6,6,7,13,9,15];

        // let arr2 =[1,5,7,9,16];

        // let sample =[];

        // for(let i=0; i < arr1.length;i++)
        // {
        //     for(j=0; j < arr2.length;j++)
        //     {
        //         if(arr1[i] == arr2[j])
        //         {
        //             sample.push(arr2[j]);

        //         }

        //     }
        // }
        // console.log(sample);

// 18:Array which are divisible by 6 not 9 from 1-150 

        //        for(var i=0;i<=20;i++)
        //        {
        //           if ([i]%6==0 && [i]%9!==0)
        //           {
        //         console.log(i);    
        //           }
        //        }

        // let empty =[]

        // for(i=1; i <=150; i++){
        //     if(i%6 ==0 && i%9!=0)
        //     {
        //         empty.push(i);
        //     }
        // }
        // console.log(empty);

        //19: To remove charcter from specified position and return new string:

        // var remove="mouses";
        // var specified=remove.substr(4);
        // console.log(specified);
        
        // let len ="mouses";
        // let spli=len.split("")
        // let data=spli.splice(5,1)
        // let ans=spli.join("")

        // console.log(ans);

        //20:To interchange first and last index value of string:

        //     function swaping(swap)
        //     {
        //    [swap[0], swap[swap.length - 1]] = [swap[swap.length - 1], swap[0]];
        //    return swap;
        //     }
        //     console.log(swaping([1,2,3,4]));

        // let string="mohan";
        // let indexlast=string.slice(-1);
        // let indexfirst=string[0];
        // let joining=indexfirst.join()
        // console.log(split);

        // let string =prompt("enter one string:");

        // let string="pen";
        // let data =string.split('');

        // let data2 =data;

        // data   [0] =data   [data.length-2]

        // data  [data.length-1] =   string.charAt(0);

        // let ans=data2.join("")

        // console.log(ans);



        // function currentDateTime() {
        //   let a = new Date();
        //   let date = a.toDateString();
        //   let time = a.toLocaleTimeString();
        //   console.log(`"Today Date is : " + ${date} + " and Now Time is : " + ${time}`);
        //   return date, time;
        // }
        // currentDateTime();

        