1a
1 values added: 20

2 final result: 20

3 values added: 20

4 ReferenceError result if not defined,this is because the scope of variable result in the the block of the if statement, thus result is not defined here

5 TypeError, because result is a const, the assainment in line 7 will cause an error the program terminates thus nothing gets printed

6 same reason as question 5, nothing gets printed.

1b

1 it will print 3 because the scope of i which is declared as a var is througout the function, thus i will be 3 since i increaments until it is >= prices.length which is 3. Thus i will be 3.

2 it will print 150 since var discountedPrice is visible until now. And it will get the value of the last iteration of the loop, which is when i =2 and prices[i] = 300, discountedPrice = 300 * 0.5 = 150

3 it will print 150 since var finalPrice is visible until now. And it will get the value of the last iteration of the loop, which is when i =2 and prices[i] = 300, discountedPrice = 300 * 0.5 = 150 , finalPrice = 150*100/100 after rounding =  150

4 the function will return [50,100,150] this function will calculate the discounted price using the formula: original price * (1-discount) and store the calculated value in a new array called discounted and return that.

5.error, because the scope of i is inside the for loop, after that, i is not declared.

6 error, because the scope of discountedPrice is inside the for loop (it is declared every iteration), after that, discountedPrice is not declared.

7 it will print 150 since the scope of finalprice is throughout the function, it will be the same as the senario where all let were var.

8 the function will return [50,100,150], the same as the senario where all let were var. because the scope discounted and finalPrice is throughout the function which is the same as there were var; discounted is used only inside each iteration, thus it will produce the same return vaule.

9 it will cause an error since the scope of i is only in the for loop, after which it will not be visible.

10 it will print 3 since the length is const, visble until now and equal to the length of the array which is 3.

11 the function will return [50,100,150], because although dicounted is a const, it is constantly refering to the array it is first assigned to and has not been reassigned any new value; we are definetly allowed to change what is in that array. Thus the function will work just fine and record all discounted value calculated from the formula.

12 
A console.log(student.name);
B console.log(student['Grad Year']);
C student.greeting()
D console.log(student['Favorite Teacher']['name']);
E console.log(student.courseLoad[0]);

13
A '32 '
+ act as concatenation

B 1 
converting to string does not make sense in - sign, Thus string are converted to numbers and arithmetic operations are performed.

C 3
null is converted to number 0

D '3null'
null is converted to string

E 4
true is converted to number (1)

F 0
both false and null are converted to their arithmetic representation: 0

G '3undefined'
undefined is converted to string and + is performing concatenation 

H NaN
undefined is converted to number NaN and 3+ NaN = NaN

14
A true
string 2 is converted to number 2

B false
this is a regualre string comparison

C true
a implicite type conversion converts string 2 to number 2

D false
=== is strict comparison, string and number are not equal

E false
true is converted to 1 and does not equal 2

F true
boolean function wil converted none 0 to true thus equal

15
they are both comparison, == will perform a implicit conversion to change the datatype of one to the other if they does not match.
=== do not do this implicit conversion,if two values are of different types, they are considered unequal.

17 the result will be [2,4,6]
at each iteration of the loop, function doSomething will be called on the next element of array and the modifiled value afther doSomething which simply just double it, will be pushed onto newArr. Thus, a new array with each element in array doubled will be returned.

19 1 4 3 2

