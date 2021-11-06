//Task_1
function filter_list(list){
    let new_list = []; 
    for (let i of list) { 
    if ( typeof i == 'number' ) { 
     new_list.push(i); 
    } 
   } 
   return new_list; 
  } 
  console.log("\n------Task_1-------- ")
  console.log("test1:", filter_list([1, "m", 3, "smile",'', 5, '8', 7, 9]))
  console.log("test2:", filter_list([1, 2, "mer", 3, '', 4, 5]))
  console.log("test3:", filter_list([5, "m","jo",6, '', 7, '8', 8, 9]))
  
  
  
  
  //Task_2
  function  first_non_repeating_letter(str) {
    if (str === "") return "";
    let arr = str.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return str.charAt(i);
    }
    return "";
  }
  console.log("\n------Task_2-------- ");
  console.log("test1:", first_non_repeating_letter('stress')); 
  console.log("test2:",first_non_repeating_letter('sTreSS')); 
  console.log("test3:", first_non_repeating_letter('sSS')); 
  
  
  
  
  //Task_3
  function digital_root(num) {
    if (num < 10) return num;
   let sum = num;
   while ( sum >= 10) {
    sum = 0;  
    while (num > 0) {
     sum += num % 10;
     num = Math.floor(num / 10);
    }
    num = sum;
   }
   return sum;
  }
  console.log("\n------Task_3-------- ");
  console.log("test1:", digital_root(132574));
  console.log("test2:", digital_root(942));
  console.log("test3:", digital_root(16));
  
  
  
  //Task_4
  function counter_of_pairs(array, target)
  {
      let n = 0; 
      for (let i = 0; i < array.length; i++){
         for (let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] == target){
               n++;
        }
      }
    } 
      return n;
  }
  console.log("\n------Task_4-------- ");
  console.log("test1:", counter_of_pairs([0, 1, 1, 2, 3, 5, 6, 8, 9], 7));
  console.log("test2:", counter_of_pairs([0, 1,  2, 3, 5, 6, 9], 3));
  console.log("test3:", counter_of_pairs([0, 2, 3, 3, 5, 6, 7 , 9], 6));
  
  
  
  //Task_5
  let list_of_friends = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphel:Corwill;Alfred:Corwill";
  list_of_friends = list_of_friends.toUpperCase(); 
  function new_list_of_friends(list_of_friends){
     let friends = list_of_friends.split(';'), x;
     for(let i = 0; i<friends.length; i++){
      friends[i] = friends[i].split(":"); 
      x=friends[i][0]; 
      friends[i][0] = friends[i][1]; 
      friends[i][1] = x; 
      }
     friends.sort(function (f_1, f_2){ 
     if( f_1[0] > f_2[0] ) return 1;  
     else if(f_1[0] < f_2[0]) return -1;
   else{ 
    if( f_1[1] > f_2[1]) return 1;
    else if( f_1[1] < f_2[1]) return -1; 
   else { 
     return 0; 
    } 
   } 
  }); 
      var results = '';
      for (let i=0; i<friends.length; i++){ 
      results = results + "(" +friends[i][0] + ", " + friends[i][1] + ")"; 
  }
      return results;
  }
  console.log("\n------Task_5-------- ");
  console.log(new_list_of_friends(list_of_friends));
  
  
  
  //Extra_Task_1
  function nextBiggerNum(num) {
      var nums_of_num = num.toString().split('');
      var next_bigger_num = -1;
      for (var i = nums_of_num.length - 1; i >= 0; --i) {
        if (nums_of_num[i] < nums_of_num[i + 1]) {
          var p = nums_of_num.splice(i + 1).sort();
          for (var j = 0; j < p.length; ++j) {
            if (p[j] > nums_of_num[i]) {
              nums_of_num[i] = p[j] - nums_of_num[i];
              p[j] = p[j] - nums_of_num[i];
              nums_of_num[i] = p[j] + nums_of_num[i];
              next_bigger_num = parseInt(nums_of_num.concat(p).join(''), 10);
              i = 0;
              break;
            } } } }
      return next_bigger_num;
    }
  console.log("\n----Extra_Task_1----- ")
  console.log("test1:", nextBiggerNum(3034))
  console.log("test2:", nextBiggerNum(111))
  console.log("test3:", nextBiggerNum(2017))
  
  
  
  //Extra_Task_2
  function Numb_to_IP(UnsignedInt){
  var num = ((UnsignedInt>>>24) +'.' + (UnsignedInt>>16 & 255) +'.' + (UnsignedInt>>8 & 255) +'.' + (UnsignedInt & 255)) ;
  return num;
  }
  console.log("\n----Extra_Task_2----- ", '\n')
  console.log("test1:", Numb_to_IP(543697479), '\n')
  console.log("test2:", Numb_to_IP(433894900), '\n')
  console.log("test3:", Numb_to_IP(234736849), '\n')