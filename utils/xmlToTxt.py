import pandas as pd


df = pd.read_csv(
    r'C:\Users\delma\Desktop\textScraper\text-scraper-product-codes\wacked.txt')
df.to_xml(r'C:\Users\delma\Desktop\textScraper\text-scraper-product-codes\json.json')
