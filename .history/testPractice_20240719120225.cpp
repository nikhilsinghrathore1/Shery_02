#include <iostream>
using namespace std;
int stack[10];
int top = -1;


void push(int x) {
    if (top >= (10- 1)) {
        cout << "Stack Overflow\n";
    } else {
        stack[++top] = x;
        std::cout << x << " pushed into stack\n";
    }
}


int pop() {
    if (top < 0) {
        cout << "Stack Underflow\n";
        return -1;
    } else {
        int x = stack[top--];
        return x;
    }
}


int main() {
               
    push(10);

    push(20);

    push(30);

    cout << pop() << " popped from stack\n";

    return 0;
}