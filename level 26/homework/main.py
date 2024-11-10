print("2)")
mouse = {
    "color": "black",
    "brand": "Bloody",
    "dpi": 3000,
    "wireless": False,
    "model": "ES5"
}

print("Method 1------------")

for key, value in mouse.items():
    print(f"{key}")

print("Method 2------------")

for key in mouse.keys():
    print(f"{key}")

print("3)")

print("Method 1------------")

for value in mouse.values():
    print(f"{value}")

print("Method 2------------")

for key, value in mouse.items():
    print(f"{value}")

print("Method 3------------")
for key in mouse:
    value = mouse.get(key)
    print(value)

print("4)")

# Dictionary 1
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Dictionary 2
product = {
    "name": "Laptop",
    "price": 3000,
    "brand": "ACER"
}

# Dictionary 3
car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020
}

# Dictionary 4
student = {
    "name": "Nika",
    "grade": "A",
    "subject": "History"
}

# Dictionary 5
movie = {
    "title": "Avengers",
    "director": "Joss Whedon",
    "year": 2012
}

print("5)")

keyboard = {
    "color": "black",
    "brand": "Logitech",
    "type": "mechanical"
}

print("Color of this keyboard is " + keyboard["color"])

movie = {
    "title": "Avengers",
    "director": "Joss Whedon",
    "year": 2012
}

print("The year this movie was released is " + str(movie["year"]))

computer = {
    "brand": "ACER",
    "model": "Nitro Sense 5",
    "year": 2021
}

print("The brand of this computer is " + computer["brand"])
