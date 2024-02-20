// # Alice has some cards with numbers written on them. She arranges the cards in decreasing order, 
// # and lays them out face down in a sequence on a table. She challenges Bob to pick out the card 
// # containing a given number by turning over as few cards as possible. Write a function to help Bob locate the card.

# LINEAR SEARCH
def locate_card(cards, query):
    # Create a valiable position with the value 0
    position = 0

    # Set up a loop for repetition
    while True:
        # Check if element at the  current position match the query
        if cards[position] == query:

            # Answer found! return and exit...
            return position

        # Increment the position
        position += 1

        # Check if we have reached the end of the array

        if position == len (cards):

            # Number not found, return -1
            return -1

cards = [13, 11, 10, 7, 4, 3, 1, 0]
query = 7
result = locate_card(cards, query)
print("Position of", query, ":", result)
