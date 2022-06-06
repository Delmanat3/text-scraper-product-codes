import json
filename = 'wacked.txt'  # REMEMBER TO CHANGE INPUT FILE NAME
dict1 = {}
fields = ['id']  # ADDS A KEY TO PUT THE VALUES UNDER
l = 1  # INDEX FOR KEY\S STARTS AT 1
with open(filename) as fh:
    for line in fh:
        description = list(line.strip().split(None, 4))
        print(description)
        sno = 'item'+str(l)
        i = 0
        dict2 = {}
        while i < len(fields):
            dict2[fields[i]] = description[i]
            i = i + 1
        dict1[sno] = dict2
        l = l + 1
# OUTPUT FILE NAME !!THIS WILL OVERWRITE EXISTING FILE BY THAT NAME
out_file = open("test2.json", "w")
json.dump(dict1, out_file, indent=4)
out_file.close()
