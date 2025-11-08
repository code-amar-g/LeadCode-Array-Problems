console.log('jai shree ram');

// //Q1--
// //left rotation ---- Hame 2nd element ko 1st par rakhte jana hailast tak lekin last me koe element nhi milega esliye ham sirf 4 tak jaynge yani last me 4 ki jagaha par 5 aajayga or last me hame 1 chahiye tabhi to left rotaion hoga to 1 koham pahale hi kahi store kar lenge.left rotion ke liye ham arr[i] cureent index value par arr[i+1] 2nd index value ka refrance rakh denge. to bas ho jyaga left rotasion last me ham 1 ko bhi add kar denge. 
// let arr = [1,2,3,4,5];
// let copy = arr[0];

// for(let i = 0; i < arr.length-1; i++){
//     arr[i] = arr[i+1];    
// }
// arr[arr.length-1] = copy;//yaha par ham arr ke last index ko pahale nikal rhe hai fir vha par copy ko dal rhe hai.
// console.log(arr);//[2, 3, 4, 5, 1] // bas kam ho chuka hai.
 



// //Q2--
// //Right rotasion ---- Sem upar vala  kam karegen lekin akdam ulta Jaise upar ham i ko i + 1 par rakh rhe the to es bar ham i ko last me lekar jaynge last se start karenge or i ko esbar i-1 par rakhenge simple.
// let nums = [1,2,3,4,5];
// let copy = nums[nums.length-1];//5 last value hai.

// for(let i = nums.length-1; i >= 0; i--){
//     nums[i] = nums[i-1]
// }
// nums[0] = copy;
// console.log(nums);//[5, 1, 2, 3, 4]




//Q3--
//What is nexted loop ---- Jab ham loop ke andar loop chalate hai use nexted loop kahate hai lekin nexted loop kaise chalta hai ye important hai to mana hamne 1st loop ko 3 bar chalaya fir uske andar 2nd loop ko bhi 3 bar chalaya to ye kaise chalega jab 1st loop 1st time chalega or andar jayga to use andar ak or loop milega jo 3 bar chalega to andar vala loop jab 3 bar chal lega tab uska kam khatam fir bahar ka loop dusri bar chalega to sara code new ho jayga yani 2nd time jab loop chalega to use firse loop milega jo 3 bar chalega to vo firse 3 bar apna kam karega fir tisari bar jab loop chalega to sara code firse new ho jyaga firse use ak loop milega firse andar vala loop 3 bar chalega or bas loop end ho jyaga kyuki outer loop ko 3 bar hi chalna tha to kull milakar bahar vala loop to 3 bar hi chalega or andar vale ko hame 3 bar chalne ko bola tha to vo 9 bar chalega kyuki bahar vala loop jitni bar vapas jayga code new ho jyaga or andar valae ko firse unti bar kam karna padega.

// for(let i = 1; i<=3; i++){
//     console.log('1st Loop');
//     for(let j = 1; j<=3; j++){
//         console.log('i am second loop.....');   
//     }
// }
// //result  ---- 
// //1st Loop

// //(3) ia am second loop.....

// //1st Loop

// //(3) ia am second loop.....

// //1st Loop

// //(3) ia am second loop.....





// //Q4--
// //Hame firse left rotaion karna hai lekin es bar rotation ki value user dega ham to 1 bar rotate kar rhe the lekin esbar use value dega or vo jitni bar chahe utni bar rotate kar sakta hai lekin esme ak condition handle karni hai -- jaise [1,2,3,4,5] hai to ese ham agar 5 bar rotate karenge to ye sem to sem vaisi position par aajayga jaisi bina rotation ke tha to hame ye bhi handle karna  hai ki jab user 5 dega to hame loop ko 1 bar bhi nhi chalana hai kyuki jab asnwere vahi aayga to faltu me loop ko kyu chalay TO eska ak formula hai userInput = UserInput % array.length. Mana user ne 7 de diya or array ki length hai 5 to 7%5 = 2 aayga or loop sirf 2 bar hi chalega or 2 bar hi chalna chahiye kyuki 5 bar chalega to sem value aajaygi or 2 bar or chalega loop kyuki userinput 7 hai to ham 7 na chala kar usko % kar denge taki jitni jarurat ho utni bar hi chale. -- Es me ham nexted loop ka use karenge kyu? kyuki 1st loop user jitna bolega utni bar chalega or second loop rotation ka kam karega simple.

// let nums = [1,2,3,4,5];
// let k = Number(prompt('Entar A number'));//7 --> agar user 2 dega to 2%5 = 2 hi aayga.
// k = k%nums.length;//2

// for(let i = 1; i <= k; i++){//ye loop 2 bar chalega.
//     console.log('loop chala');
    
//     let copy = nums[0];
//     for(let j = 0; j < nums.length-1; j++){
//         nums[j] = nums[j+1];
//     }
//     nums[nums.length-1] = copy;
// }
// console.log(nums);//[3, 4, 5, 1, 2] 
// //kam to ho gya lekin ye achha code nhi hai kyuki time complacity jada hai -- ham 1st loop ko chala rhe hai fir 2nd loop ko chala rhe hai agar 4 bar chalaynge to 2nd loop 20 bar chalega or socho agar array ki length badi hogi to browser hi crash ho jyaga. Esliye ye achha code nhi hai.




//code 2--
// [1,2,3,4,5]
//Es bar ham ak hi loop ka use karenge lekin ak empty array ka use karenge taki usme value ko left rotate karke rakh sake. Lekin eske liye ham ak formula ka use karenge [i+k%arr.length] ka ab ye formula kam kaise karenge ? --- 1st time i = 0 hoga or mana k me user ne 2 diya hai matlab 2 bar hame left rotation karna hai or [3,4,5,1,2] ye andwere aaynga to 0+2 = 2 aayga. or mana array ki lenght 5 hai to 2%5 = 2 aayga to ab ye 2 index ki value ko value ko ham temp array ke i par rakhenge jo hamne pahale hi khali bana ke rakhi hai. -- 
// temp[i] = arr[i+k % arr.length]; jab sari calculation hogi to arr[2] aayga matlab arr ka 2nd index ki value temp[0] index par push ho jyagi kyuki starting me i ki value 0 hogi fir 2nd time i = 2 ho jayga or fir calculation hogi or es bar 
// 1+2 = 3%5 = 3 ho jayga yani arr ki 3rd index ki value temp me jaygi [3,4]
// 2+2 = 4%5 = 4 === [3,4,5] 
// 3+2 = 5%5 = 0 === [3,4,5,1]
// 4+2 = 6%5 = 1 === [3,4,5,1,2]
//to kuchh aisi calcution hogi or left rotaion ho jyaga.


// let nums = [1,2,3,4,5];
// let temp = new Array(nums.length);
// let k = Number(prompt('enter a number'));
// k = k%nums.length;

// for(let i = 0; i < nums.length; i++){
//     temp[i] = nums[(i+k) % nums.length];//yaha par (i+k) ko paranthesus me rakhna rauri hai taki pahale sum ho uskebad % ho. 

// }
// console.log(temp);//[3, 4, 5, 1, 2]


//bas yahi algoritham thi chhoti si lekin kaya ye good code hai ? nhi ye bhi good code nhi hai kyuki hame ak empty array banani pad rhi hai alag se agar array ki length mana 1 lakh hogi to hame ak or 1 lakh lenght ki array banani padegi matlab duble doad padh rha hai esliye ye good code nhi hai.


//code 3 --
//Ab esase eficiant code banane ke liye ham (block swap reverse) algoritham ka use karenge.
//[1,2,3,4,5] ye array hai hamare pass to ab ese ham reserse karna start karte hai mana k me 2 hai --- 
//1st reverse = [2,1,3,4,5] i = 0 , k-1 tak -- 1,2 rev honge.
//2nd reverse = [2,1,5,4,3] i = k se , len-1 tak -- 3,4,5 rev honge. 
//3rd reverse = [3,4,5,1,2] i = 0 se , len-1 tak yani pura array. -- pura array reverse hoga.

// bas kam ho jayga. hame kul 3 bar reverse karna hai alag - alag index se. 

// let nums = [1,2,3,4,5];
// let k = Number(prompt('Enter a number'));
// k = k % nums.length;

// reverse(0,k-1);
// reverse(k,nums.length-1);
// reverse(0,nums.length-1);

// console.log(nums);//[3, 4, 5, 1, 2]

// function reverse(i , j){
//     while(i<j){
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         i++
//         j--
//     }
// }





