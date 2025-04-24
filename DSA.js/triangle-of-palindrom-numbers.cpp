#include <bits/stdc++.h>
using namespace std;

void sol(int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (j >= n + 1 - i)
            {

                cout << "*";
            }
            else
            {
                cout << " ";
            }
        }
        cout << endl;
    }
}

int main()
{
    int n = 50;
    sol(n);
    return 0;
}