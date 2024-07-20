#include <iostream>
using namespace std;
int stack[10];
int top = -1;


void push(int x) {
    if (top >= (MAX - 1)) {
        std::cout << "Stack Overflow\n";
    } else {
        stack[++top] = x;
        std::cout << x << " pushed into stack\n";
    }
}
