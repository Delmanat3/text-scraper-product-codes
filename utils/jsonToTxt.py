import pandas as pd


df = pd.read_json(
    r'C:\Users\delma\Desktop\textScraper\text-scraper-product-codes\test2.json')
df.to_csv(r'C:\Users\delma\Desktop\textScraper\text-scraper-product-codes\test1.txt', index=False)
