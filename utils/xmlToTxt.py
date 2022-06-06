
 
import json
import csv
 
 
# Opening JSON file and loading the data
# into the variable data
with open('test2.json') as json_file:
    data = json.load(json_file)
 
item = data.items()
 
# now we will open a file for writing
data_file = open('data_file.csv', 'w')
 
# create the csv writer object
csv_writer = csv.writer(data_file)
 
# Counter variable used for writing
# headers to the CSV file
count = 0
 
for emp in item:
    if count == 0:
 
        # Writing headers of CSV file
        header = ''
        csv_writer.writerow(header)
        count += 1
 
    # Writing data of CSV file
    csv_writer.writerow(item)
 
data_file.close()