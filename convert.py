# Python program to convert text
# file to JSON


import json


# the file to be converted to
# json format
filename = 'wacked.txt'

# dictionary where the lines from
# text will be stored
dict1 = {}
fields = ['id']
# creating dictionary
l = 1
with open(filename) as fh:

    for line in fh:

        description = list(line.strip().split(None, 4))

        print(description)
        sno ='item'+str(l)
      
        # loop variable
        i = 0
        # intermediate dictionary
        dict2 = {}
        while i<len(fields):
            dict2[fields[i]]= description[i]
            i = i + 1
                  
        # appending the record of each employee to
        # the main dictionary
        dict1[sno]= dict2
        l = l + 1
out_file = open("test2.json", "w")
json.dump(dict1, out_file, indent = 4)
out_file.close()
