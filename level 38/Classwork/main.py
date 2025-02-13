def str_count(strng, letter):
    count = 0
    
    for i in strng:
        if i == letter:
            count += 1
    return count

def is_even(n): 
    return n % 2 == 0

def get_planet_name(id):
    # This doesn't work; Fix it!
    name=""
    match id:
        case 1: name = "Mercury"
        case 2: name = "Venus"
        case 3: name = "Earth"
        case 4: name = "Mars"
        case 5: name = "Jupiter"
        case 6: name = "Saturn"
        case 7: name = "Uranus"  
        case 8: name = "Neptune"
    return name

def move(position, roll):
    return position + roll * 2

def enough(cap, on, wait):
    if (on + wait) <= cap:
        return 0
    else:
        return (on + wait) - cap
    
def between(a,b):
    return list(range(a, b + 1))

def say_hello(name):
    return f"Hello, {name}" 

def is_uppercase(inp):
    return inp == inp.upper()

def monkey_count(n):
    return list(range(1, n + 1))

def powers_of_two(n):
    return [2 ** i for i in range (n + 1)]