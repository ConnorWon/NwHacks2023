
class Clothing():
    def __init__(self, name, desc="", colour="#ffffff", clean=True):
        self.name = name
        self.desc = desc
        self.colour = colour
        self.clean = clean


class Top(Clothing):
    def __init__(self, name, desc="", colour="#ffffff", sleeves=True, clean=True):
        super().__init__(name, desc, colour, clean)
        self.sleeves = sleeves

class Bottom(Clothing):
    def __init__(self, name, desc="", colour="#ffffff", clean=True):
        super().__init__(name, desc, colour, clean)

class Shoes(Clothing):
    def __init__(self, name, desc="", colour="#ffffff", clean=True):
        super().__init__(name, desc, colour, clean)

def main():
    pass

if __name__ == "__main__":
    main()