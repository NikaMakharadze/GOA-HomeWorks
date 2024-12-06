'''
SyntaxError
NameError
TypeError
ValueError
IndexError
'''
# 2) დაწერეთ ისეთი კოდი სადაც იქნება NameError და გაუმკლავდით try/except'ით

try:
    print(name)
except NameError:
    print("Error: 'name' is not defined!")
    
# 3) დაწერეთ ისეთი კოდი სადაც იქნება IndexError და გაუმკლავდით try/except'ით

try:
    listn = [10, 20, 30]
    
    print(listn[5])
except IndexError:
    print("Error: The specified number exceeds the list of elements!")

try:
    num = int(input("Enter your num: "))
except ValueError:
    print("Please enter a valid Number.")

# 5) კომენტარებით ახსენით რაში გვადგება try/except

# try/except პროგრამისტს ეხლამერება რომ თუ კოდში აქვს რაიმე ერორი
# კოდის გაშვება იმ ერორის შემდეგ გაგრძელდეს,
# როდესაც მაგალითად მომხმარებელმა შემოიტანა რიცხვის ნაცვლად სტრინგი

