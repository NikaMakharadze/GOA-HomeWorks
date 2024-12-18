# ClassWork 1

# 1)

sumn = lambda a, b: a + b
print(sumn(3, 5))

# 2)

double = lambda x: x * 2
print(double(4))

# 3)

rangen = lambda start, end: list(range(start, end+1))
print(rangen(3, 7))

# 4)

listn = ["1", "2", "3", "4", "5"]
res = list(map(lambda x: x * 3, listn))
print(res)


# ClassWork 2

# MAP 1)
numbers = [1, 2, 3, 4, 5]
squares = map(lambda x: x ** 2, numbers)
squares_list = list(squares)
print(squares_list)

# MAP 2)
celsius_temps = [0, 20, 30, 40]
fahrenheit_temps = map(lambda x: (x * 1.8) + 32, celsius_temps)
fahrenheit_list = list(fahrenheit_temps)
print(fahrenheit_list)


# MAP 3)
words = ["hello", "world", "python"]
cap_words = map(lambda x: x.capitalize(), words)
cap_list = list(cap_words)
print(cap_list)

# FILTER 1)
nums = [1, 2, 3, 4, 5, 6, 7, 8]
even_nums = filter(lambda x: x % 2 == 0, nums)
even_nums_list = list(even_nums) 
print(even_nums_list)

# FILTER 2)
words = ["cat", "house", "tree", "car"]
len_word = filter(lambda x: len(x) > 4, words)
words_list = list(len_word)
print(words_list)

# FILTER 3)
nums = [3, 9, 15, 22, 27, 30]
div_3 = filter(lambda x: x % 3 == 0, nums)
div_3_list = list(div_3)
print(div_3_list)
