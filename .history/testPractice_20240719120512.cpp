#include <iostream>
using namespace std;


int arr[10];
int top = -1;


void push(int x) {
    if (top >= (10- 1)) {
        cout << "Stack Overflow\n";
    } else {
        arr[++top] = x;
        cout << x << " pushed into stack\n";
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


int main() {
push(55);
push(256);
push(480);
push(215);
    cout<<"done bro";

    return 0;
}