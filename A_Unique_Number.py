from collections import Counter
def solve():
    n= int(input())
    arr = list(map(int , input().split()))
    arr.sort()
    c1 = Counter(arr)
    a = float('inf')
    for i in arr:
        if c1[i] == 1:
            print(i)
            a = arr.index(i) + 1
            break
    print(a if a!=float('inf') else -1 )
    
t = int(input())
for _ in range(t):
    solve()