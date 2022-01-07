//1:aanagram:

    // function checkStringAnagrams(a,b)
    // {
    // if(a.length==b.length)
    // {
    // let c = a.split('').sort().join();
    // let d = a.split("").sort().join();
    // if(c==d)
    // {
    //   console.log("It is an anagram");
    // }  
    // else
    //  console.log("Not an anagram");
    // }
    // else
    // console.log("Not Invalid String");

    // }
    // checkStringAnagrams("abcd","dcba")

//2:To remove duplicate from an array

    // let chars = ["A", "B", "A", "C", "B"];

    // let uniqueChars = [];
    // chars.forEach((c) => {
    //   if (!uniqueChars.includes(c)) {
    //     uniqueChars.push(c);
    //   }
    // });

    // console.log(uniqueChars);

//10:Eligible to vote or not

    // var age=prompt("Enter your age:")
    //  if(age>=18)
    //  {
    //    console.log("You are Eligible to vote");
    //  }
    //  else 
    //  console.log("Not eligible to vote");

 //9:Grade based on marks:
    // var score=prompt("enter your mark: ");

    // switch (true) {
    //   case score > 90:
    //     console.log("You got A grade");
    //     break; 
    //     case score > 80:
    //     console.log("You got B grade");
    //     break;
    //       case score > 70:
    //     console.log("You got C grade");
    //     break;
    //       case score > 60:
    //     console.log("You got D grade");
    //     break;
    //       case score > 50:
    //     console.log("You got E grade");
    //     break;
    //   case score > 50:
    //     console.log("You got E grade");
    //     break;
    //   default:
    //     console.log("Sorry you failed");
    // }

   //8:to check user entered number odd or even:
    // for (var i=0;i<=10;i++)
    // {
    // if(i%2==0)
    // {
    // console.log(i +" is an even number");
    // } 
    // else console.log(i +" is an odd number");
    // }

 //7:To sort elements of array using bubble sort

//     function bubbleSort (arr) 
//     {
//       let swapped = false;
//       const a = [...arr];
//       console.log(a.length);
//       for (let i = 1; i < a.length - 1; i++) 
//       {
//         swapped = false;
//         for (let j = 0; j < a.length - i; j++)
//           {
//           if (a[j + 1] < a[j]) 
//           {
//             [a[j], a[j + 1]] = [a[j + 1], a[j]];
//             swapped = true;
//           }
//         }
//         if (!swapped) return a;
//       }
//       return a;
//     };

//  console.log(bubbleSort([2, 10, 4, 3]));

//how to make multiple api calls in asyn and await
//Using dom make table  
//arrray of object convert to heading(dynamic) table:


function swap(arr, first_Index, second_Index) {
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

function bubble_Sort(arr) {
  var len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {

    for (j = 0, stop = len - i; j < stop; j++)
     {
      if (arr[j] > arr[j + 1])
       {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
console.log(bubble_Sort([3, 0, 4, 1]));

