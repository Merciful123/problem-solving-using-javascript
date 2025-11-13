# write a function to make a trinagel pattern


def rightTri(n):
    for i in range(n):
        print("*" * i)


rightTri(8)

def inverted_triangle(n):
    for i in range(n, 0, -1):
        print("*" * i)

# Example:
inverted_triangle(7)

def numberTri (n) :
    for i in range(1, n, 1):
        # print()
        for j in range(1  , i + 1):
            print( j , end = " ")
        print()

numberTri(7)

print()

# inverted number trinage

def invertedNumTri (n):
    for i in range(n, 0, -1): 
        for j in range( 1, i):
            print(j , end = " ")
        print()
invertedNumTri(7)



# write a function to find median 


def median(num):
    
    number = sorted(num)
    
    n = len(number)
    
    if n % 2 == 1:
        
        return number[n // 2]
    
    else:

        num1 = number[n // 2 - 1]
        num2 = number[n // 2 ]
        return (num1 + num2) / 2 

# print(median([1, 2, 3, 4, 5]))     
# print(median([2, 4, 6, 8]))   

