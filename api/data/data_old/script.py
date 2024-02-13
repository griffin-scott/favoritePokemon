import requests
import json



# f = open("single-mon.json", "r")
# data = json.loads(f.read())
# f.close()

# fields = ['name', 'id', 'height', 'weight', 'species', 'sprites', 'stats', 'types']

# deletes = ['abilities', 'base_experience', 'forms', 'game_indices', 'held_items', 'is_default', 'location_area_encounters', 'moves', 'order', 'past_abilities', 'past_types']

# for p in data:
#     for key in deletes:
#         p.pop(key)



# f = open("single-mon.json", "w")
# f.write(json.dumps(data, indent=4))
# f.close()


# f = open("pokemon-details.json", "r")
# data = json.loads(f.read())
# f.close()


# for p in data:
#     pokeTypes = []
#     pokeStats = []
#     for t in p['types']:
#         pokeTypes.append(t['type']['name'])
#     for s in p['stats']:
#         pokeStats.append(s['base_stat'])
#     p['types'] = pokeTypes
#     p['stats'] = pokeStats

# f = open("pokemon-details.json", "w")
# f.write(json.dumps(data, indent=4))
# f.close()



f = open("pokemon-details.json", "r")
data = json.loads(f.read())
f.close()


for p in data:
    p.pop('images')
    p['image'] = p['sprites']['front_default']

f = open("pokemon-details.json", "w")
f.write(json.dumps(data, indent=4))
f.close()
