#include <iostream>
using namespace std;


int arr[10];
int top = -1;


void push(int x) {
    if (top >= (10- 1)) {
        cout << "Stack Overflow\n";
    } else {
        arr[++top] = x;
    }
}


int pop() {
    if (top < 0) {
        cout << "Stack Underflow\n";
        return -1;
    } else {
        int x = arr[top--];
        return x;
    }
}


int peek(int index){
               if(top == -1 || index>top){
                              cout<<"invalid inputs ";
                              return -1;
               }
               else{
                              return arr[index];
               }
}


int main() {


push(55);
push(256);
push(480);
push(215);
push(215);
push(215);
push(215);
push(215);
push(215);
push(215);
push(215);


cout<<peek(10)<<endl;



for(int i = top ; i>=-1 ; i --){
 int a = pop(); 
               if(a == -1 ){
                              
               }
               else{

cout<<a <<" this is the popped element"<<endl;

               }
}

    return 0;
}



// user-buyer-seller they should be able to buy and sell stock and they should be able to transfer money  , admin - check the cash status , authenticate the user , stock provider- provide the current details of the stocks ,authenticate the purchase,broker-they should be able to create group who follows his trade/should be able to take some part his user profit,advisor-should be able to reivew the users portfolio , should be able to send msgess  