# 1) ახსენით რა არის ობიექტი
# ყველაფერი რასაც ფიზიკური ფიზიკური ფორმა აქვს და შეგიძლია შევეხოთ

# 2) ახსენით რაში გამოიყენება dictionary python'ში
# მონაცემების შენახვა dictionary-ის მეშვეობით შეგიძლიათ სწრაფად შეინახოთ და მოიძიოთ მონაცემები.

print("Mouse----------------")
mouse = {
    "color": "black",
    "brand": "Bloody",
    "dpi": 3000,
    "wireless": False,
    "model": "ES5"
}

for key, value in mouse.items():
    print(f"{key}: {value}")

print("Keyboard----------------")
keyboard = {
    "Color": "black",
    "Brand": "2E GAMING",
    "Model": "2E KG345 RGB USB Transparent",
    "Switch Type": "Mechanical",
    "wireless": False
}

for key, value in keyboard.items():
    print(f"{key}: {value}")

print("Laptop----------------")
laptop = {
    "Brand": "ACER",
    "Model": "Nitro Sense 5",
    "Processor": "AMD Ryzen 5 6600H with Radeon Graphics",
    "RAM": "16GB",
    "GPU": "NVIDIA GeForce RTX 3060 Laptop GPU, AMD Radeon(TM) Graphics"
}

for key, value in laptop.items():
    print(f"{key}: {value}")