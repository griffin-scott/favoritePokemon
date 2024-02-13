import requests
import json

# ------  import all pokemon and store in data.json ------ #

# res = requests.get('https://pokeapi.co/api/v2/pokemon/?limit=1292')
# pokemon = json.loads(res.text)
# f = open("data.json", "w")
# f.write(json.dumps(pokemon, indent = 4))


# ------ remove 'next' and 'previous' keys from object, and rewrite data.json ------ #
# f = open("data.json", "r")
# pokemon = json.loads(f.read())
# f.close()
# pokemon.pop('next')
# pokemon.pop('previous')
# f = open("data.json", "w")
# f.write(json.dumps(pokemon, indent=4))
# f.close()


# ------ scrape data from api and put into local json files ------ #

# f = open("data.json", "r")
# data = json.loads(f.read())
# f.close()

# arr = []

# for i, p in enumerate(data['alt-forms']):
#     res = requests.get(p['url'])
#     data = json.loads(res.text)
#     print(data['id'])
#     arr.append(data)


# f = open("single-alt-forms.json", "w")
# f.write(json.dumps(arr, indent=4))
# f.close()



f = open("single-mons.json", "r")
data = json.loads(f.read())
f.close()
