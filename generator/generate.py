from random import randint
from PIL import Image
import os
from pathlib import Path
import json
import operator


BASE_DIR = Path(__file__).resolve().parent
OUT_DIR = BASE_DIR.parent.parent / 'assets/'
print(BASE_DIR)
if not os.path.isdir(OUT_DIR):
	os.makedirs(OUT_DIR)
for file in os.listdir(OUT_DIR):
	os.remove(os.path.join(OUT_DIR, file))


wallet = '2VC7KniN9RVquCZzSTTtxU9zXhSLuangj7NDEh8zuQSk'
image = Image.open(BASE_DIR / 'target.jpg')
for i in range(1000):
	image.save(OUT_DIR / f'{i}.jpg')
	meta = {
		"name": f"Magic Mountain #{i+1}",
		"symbol": "",
		"description": 'Access token to the "Magic Mountain" NFT by Olivia Moore! (More on olivia-art.com)',
		"seller_fee_basis_points": 25000,
		"image": "image.jpg",
		"attributes": [],
		"collection": {
			 "name": "olivia-art.com access NFT",
			 "family": "Olivia Moore Art"
		},
		"properties": {
			"files": [
				{
					"uri": "image.jpg",
					"type": "image/jpg"
				}
			],
			"category": "image",
			"creators": [
				{
					"address": wallet,
					"share": 100
				}
			]
		}
	}
	with open(OUT_DIR / f'{i}.json', 'w') as ff:
		json.dump(meta, ff, indent=4)


