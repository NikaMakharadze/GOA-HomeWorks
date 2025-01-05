# Manual map func
def manual_map(func, iterable):
    return [func(item) for item in iterable]

def square(x):
    return x ** 2

nums = [1, 2, 3, 4, 5]

squared_nums = manual_map(square, nums)

print(squared_nums)

# Manual filter func

def manual_filter(func, iterable):
    return [item for item in iterable if func(item)]

def is_even(x):
    return x % 2 == 0

nums = [1, 2, 3, 4, 5]

filter_nums = manual_filter(is_even, nums)

print(filter_nums)
