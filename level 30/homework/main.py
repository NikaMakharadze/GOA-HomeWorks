try:
    result = "string" + 10
except TypeError:
    print("Error: you can't add string to a int !")

def sum_of_numbers(numbers):
    return sum([int(i) for i in numbers])
    
print(sum_of_numbers([1,"2","3",4,"5"]))