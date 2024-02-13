import requests
import json

# ------  import and add id's to all pokemon, and store array in pokemon-list.json ------ #
def create_list():
    res = requests.get('https://pokeapi.co/api/v2/pokemon/?limit=1292')
    pokemon = json.loads(res.text)

    i = 0
    for p in pokemon['results']:
        i += 1
        p['id'] = i

    f = open("pokemon-list.json", "w")
    f.write(json.dumps(pokemon['results'], indent = 2))


# ------  loop through list, query each url and store data in pokemon-details.json ------ #
def create_details_from_list():

    f = open("pokemon-list.json", "r")
    data = json.loads(f.read())
    f.close()

    arr = []

    for p in data:
        res = requests.get(p['url'])
        pokemon = json.loads(res.text)
        format_pokemon_obj(pokemon)

        arr.append(pokemon)

    f = open("pokemon-details.json", "w")
    f.write(json.dumps(arr, indent = 2))


# ------  deletes all the properties of each pokemon that are not needed ------ #
def format_pokemon_obj(p):
    print(f"Saving #{p['id']}: {p['name']}")
    del p['forms']
    del p['game_indices']
    del p['held_items']
    del p['is_default']
    del p['location_area_encounters']
    del p['moves']
    del p['order']
    del p['past_abilities']
    del p['past_types']

create_list()
create_details_from_list()
