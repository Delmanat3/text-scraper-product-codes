import pandas as pd

# CLICK THE LITTLE PLAY BUTTON IN UPPER RIGHT HAND CORNER
df = pd.read_json(
    r'C:\Users\delma\Desktop\textScraper\text-scraper-product-codes\test2.json')
df.to_csv(r'C:\Users\delma\Desktop\textScraper\text-scraper-product-codes\test1.txt', index=False)
