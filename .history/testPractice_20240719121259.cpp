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
                              cout<<"stackUnderflow";
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