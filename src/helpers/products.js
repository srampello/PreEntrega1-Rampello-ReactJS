const products = [
    {
        "id": '1',
        "name": "Dunk Low Retro White Black Panda",
        "brand": "Nike",
        "image": "https://i.ibb.co/pQxcThX/panda.png",
        "alt": "shoe_panda",
        "category": "sneaker",
        "price": 100
    },
    {
        "id": '2',
        "name": "12 Retro Cherry",
        "brand": "Jordan",
        "image": "https://i.ibb.co/TmZj5Cm/12-cherry.png",
        "alt": "12_cherry",
        "category": "sneaker",
        "price": 190
    },
    {
        "id": '3',
        "name": "1 Retro High OG Royal Reimagined",
        "brand": "Jordan",
        "image": "https://i.ibb.co/bN5WZ5D/air-jordan-1-high-og-royal-reimagined.png",
        "alt": "1_royal",
        "category": "sneaker",
        "price": 157
    },
    {
        "id": '4',
        "name": "Campus 00s Korn",
        "brand": "Adidas",
        "image": "https://i.ibb.co/N16kt5W/adidas-originals-x-korn-campus-00s.png",
        "alt": "00_korn",
        "category": "sneaker",
        "price": 173
    },
    {
        "id": '5',
        "name": "3 Retro Desert Elephants",
        "brand": "Jordan",
        "image": "https://i.ibb.co/hCq9fPh/air-jordan-3-desert-elephant.png",
        "alt": "3_desert",
        "category": "sneaker",
        "price": 127
    },
    {
        "id": '6',
        "name": "Campus 00s Core Black",
        "brand": "Adidas",
        "image": "https://i.ibb.co/FBZzXfQ/adidas-originals-core-black-campus-00s.png",
        "alt": "00_core",
        "category": "sneaker",
        "price": 70
    },
    {
        "id": '7',
        "name": "Slide Slate Grey",
        "brand": "Yeezy",
        "image": "https://i.ibb.co/4PX7Xg5/yeezy-sllide-slate-grey.png",
        "alt": "yeezy_slide_slate_grey",
        "category": "sneaker",
        "price": 66
    },
    {
        "id": '8',
        "name": "Dunk Low Grey Fog",
        "brand": "Nike",
        "image": "https://i.ibb.co/zWgtCH3/Nike-Dunk-Low-Grey-Fog.png",
        "alt": "dunk_greyfog",
        "category": "sneaker",
        "price": 83
    },
    {
        "id": '9',
        "name": "4 Retro Red Cement",
        "brand": "Jordan",
        "image": "https://i.ibb.co/jHswdTC/Jordan-4-red-cement.png",
        "alt": "4_redcement",
        "category": "sneaker",
        "price": 183
    },
    {
        "id": '10',
        "name": "Dunk Low Cacao Wow (Women's)",
        "brand": "Nike",
        "image": "",
        "alt": "dunk_low_cacao_w",
        "category": "sneaker",
        "price": 76 
    },
    {
        "id": '11',
        "name": "Air Force 1 Low '07 White",
        "brand": "Nike",
        "image": "",
        "alt": "air_force_1_white",
        "category": "sneaker",
        "price": 74
    },
    {
        "id": '12',
        "name": "Dunk Low Wheat (2021/2023)",
        "brand": "Nike",
        "image": "",
        "alt": "dunk_low_wheat",
        "category": "sneaker",
        "price": 107
    },
    {
        "id": '13',
        "name": "Dunk Low Dusty Olive",
        "brand": "Nike",
        "image": "",
        "alt": "dunk_low_dusty_olive",
        "category": "sneaker",
        "price": 148
    },
    {
        "id": '14',
        "name": "CPFM Air Flea 2 Cactur Plant",
        "brand": "Nike",
        "image": "",
        "alt": "cpfm_air_flea_2",
        "category": "sneaker",
        "price": 272
    },
    {
        "id": '15',
        "name": "Dunk Low Born X Raised ONE Block At A Time",
        "brand": "Nike",
        "image": "",
        "alt": "dunk_low_bxro",
        "category": "sneaker",
        "price": 330 
    },
    {
        "id": '16',
        "name": "Air Foce 1 Low Supreme White",
        "brand": "Nike",
        "image": "",
        "alt": "air_force_1_supreme",
        "category": "sneaker",
        "price": 124
    },
    {
        "id": '17',
        "name": "Dunk Low Ben & Jerry's Chunky Dunky",
        "brand": "Nike",
        "image": "",
        "alt": "dunk_low_ben&jerry",
        "category": "sneaker",
        "price": 1224
    },
    {
        "id": '18',
        "name": "4 Retro Thunder",
        "brand": "Jordan",
        "image": "",
        "alt": "retro_4_thunder",
        "category": "sneaker",
        "price": 203
    },
    {
        "id": '19',
        "name": "3 Retro Wizards",
        "brand": "Jordan",
        "image": "",
        "alt": "retro_3_wizards",
        "category": "sneaker",
        "price": 176
    },
    {
        "id": '20',
        "name": "4 Retro University Blue",
        "brand": "Jordan",
        "image": "",
        "alt": "4_retro_ub",
        "category": "sneaker",
        "price": 416
    },
    {
        "id": '21',
        "name": "1 Retro High OG Spider-Man Across the Spider-Verse",
        "brand": "Jordan",
        "image": "",
        "alt": "1_high_sm_spiderverse",
        "category": "sneaker",
        "price": 135
    },
    {
        "id": '22',
        "name": "4 Retro Frozen Moments (Women's)",
        "brand": "Jordan",
        "image": "",
        "alt": "4_retro_forzen_moments",
        "category": "sneaker",
        "price": 191
    },
    {
        "id": '23',
        "name": "5 Retro UNC University Blue",
        "brand": "Jordan",
        "image": "",
        "alt": "5_retro_unc",
        "category": "sneaker",
        "price": 152
    },
    {
        "id": '24',
        "name": "1 Retro Low Golf Travis Scott Neutral Olive",
        "brand": "Jordan",
        "image": "",
        "alt": "1_retro_golf_ts_no",
        "category": "sneaker",
        "price": 650
    },
    {
        "id": '25',
        "name": "1 Retro Low OG SP Travis Scott Black Phantom",
        "brand": "Jordan",
        "image": "",
        "alt": "1_retro_low_sp_ts_bp",
        "category": "sneaker",
        "price": 433
    },
    {
        "id": '26',
        "name": "1 Retro High Dark Mocha",
        "brand": "Jordan",
        "image": "",
        "alt": "1_retro_high_dark_mocha",
        "category": "sneaker",
        "price": 339
    },
    {
        "id": '27',
        "name": "Boost 350 V2 Bone",
        "brand": "Yeezy",
        "image": "",
        "alt": "350_v2_bone",
        "category": "sneaker",
        "price": 177
    },
    {
        "id": '28',
        "name": "Boost 350 V2 Onyx",
        "brand": "Yeezy",
        "image": "",
        "alt": "350_v2_onyx",
        "category": "sneaker",
        "price": 227
    },
    {
        "id": '29',
        "name": "Foam RNR Carbon",
        "brand": "Yeezy",
        "image": "",
        "alt": "foam_carbon",
        "category": "sneaker",
        "price": 101
    },
    {
        "id": '30',
        "name": "Foam RNR Onyx",
        "brand": "Yeezy",
        "image": "",
        "alt": "foam_onyx",
        "category": "sneaker",
        "price": 119
    },
    {
        "id": '31',
        "name": "Boost 350 V2 Zebra",
        "brand": "Yeezy",
        "image": "",
        "alt": "350_zebra",
        "category": "sneaker",
        "price": 237
    },
    {
        "id": '32',
        "name": "500 Utility Black",
        "brand": "Yeezy",
        "image": "",
        "alt": "500_utility_black",
        "category": "sneaker",
        "price": 216
    },
    {
        "id": '33',
        "name": "700 Wave Runner",
        "brand": "Yeezy",
        "image": "",
        "alt": "700_wave_runner",
        "category": "sneaker",
        "price": 331
    },
    {
        "id": '34',
        "name": "700 V3 Azael",
        "brand": "Yeezy",
        "image": "",
        "alt": "700_v3_azael",
        "category": "sneaker",
        "price": 155
    },

]

export const mProducts = (id) => new Promise((res, rej)=>{
    setTimeout(()=>{
        res(id ? products.find(product => product.id === id) : products)
    },1000);
})
