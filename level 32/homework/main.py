# 2) Use the map function to double the listn in a list: [2, 4, 6, 8, 10].

print("***********")
listn = [2, 4, 6, 8, 10]
dubble = list(map(lambda x: x * 2, listn))
print(dubble)

# 3) Write a program using map to concatenate "Hello, " to each name in a list: ["Alice", "Bob", "Charlie"].

print("***********")
listn = ["Alice", "Bob", "Charlie"]
listn = list(map(lambda x: "Hello, " + x, listn))
print(listn)

# 4) Use map to calculate the lengths of strings in a list: ["apple", "banana", "kiwi"].

print("***********")
listn = ["apple", "banana", "kiwi"]
listn = list(map(lambda x: len(x), listn))
print(listn)

# 5) Use the filter function to keep only positive numbers from a list: [-5, 3, -2, 7, 0, 10].

listn = [-5, 3, -2, 7, 0, 10]
listn = list(filter(lambda x: x >= 0, listn ))
print(listn)

# 6) Write a program using filter to extract words starting with the letter "p" from a list: ["pear", "apple", "peach", "grape"].

listn = ["pear", "apple", "peach", "grape"]
listn = list(filter(lambda x: x.startswith('p'), listn))
print(listn)

# 7) Use filter to find numbers greater than 50 in a list: [10, 55, 42, 78, 65, 20].

listn = [10, 55, 42, 78, 65, 20]
listn = list(filter(lambda x: x >= 50, listn))
print(listn)

'''
map():
Purpose: The map() function applies a given function to each item in an iterable (such as a list) and returns a new iterable (or map object) with the results of the function.

filter():
Purpose: The filter() function filters out elements from the given iterable based on a condition provided by a function. It only includes elements that satisfy the condition (i.e., the function returns True).
'''