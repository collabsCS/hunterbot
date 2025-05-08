const armas = [
  {
    id:'agent_weapon',
    precio: 96,
    slots: 1,
    velocidadBala: 330,
    distanciaMaxima: 70,
    tiempoRecarga: 12.8,
    danio: 91   
  },
  {
    id:'brawler_agent_weapon',
    precio: 106,
    slots: 1,
    velocidadBala: 330,
    distanciaMaxima: 70,
    tiempoRecarga: 12.8,
    danio: 91
  },
  {
  id:'hand_crossbow',
    precio: 30,
    slots: 1,
    velocidadBala: 100,
    distanciaMaxima: 15,
    tiempoRecarga: 4.3,
    danio: 195
  },
  {
  id:'baseball_bat',
    precio: 40,
    slots: 1,
    velocidadBala: 0,
    distanciaMaxima: 0,
    tiempoRecarga: 0,
    danio: 90
  },
  {
  id:'bornheim_No3',
    precio: 146,
    slots: 1,
    velocidadBala: 380,
    distanciaMaxima: 80,
    tiempoRecarga: 7.4,
    danio: 74
  },
  {
  id:'bornheim_No3_with_silencer',
    precio: 167,
    slots: 1,
    velocidadBala: 323,
    distanciaMaxima: 70,
    tiempoRecarga: 7.4,
    danio: 66
  },
  {
  id:'bornheim_No3_extended',
    precio: 146,
    slots: 1,
    velocidadBala: 380,
    distanciaMaxima: 80,
    tiempoRecarga: 9.6,
    danio: 74
  },
  {
  id:'dolch_96',
    precio: 690,
    slots: 1,
    velocidadBala: 440,
    distanciaMaxima: 70,
    tiempoRecarga: 6,
    danio: 97
  },
  {
  id:'dolch_96_diana',
    precio: 725,
    slots: 1,
    velocidadBala: 440,
    distanciaMaxima: 70,
    tiempoRecarga: 21.7,
    danio: 97
  },
  {
  id:'dolch_96_claw',
    precio: 700,
    slots: 1,
    velocidadBala: 440,
    distanciaMaxima: 70,
    tiempoRecarga: 6,
    danio: 97
  },
  {
  id:'battle_axe',
    precio: 40,
    slots: 1,
    velocidadBala: 0,
    distanciaMaxima: 0,
    tiempoRecarga: 0,
    danio: 200
  },
  {
  id:'katana',
    precio: 115,
    slots: 1,
    velocidadBala: 0,
    distanciaMaxima: 0,
    tiempoRecarga: 0,
    danio: 165
  },
  {
  id:'lemat',
    precio: 83,
    slots: 1,
    velocidadBala: 375,
    distanciaMaxima: 75,
    tiempoRecarga: 15.8,
    danio: 97
  },
  {
  id:'machete',
    precio: 30,
    slots: 1,
    velocidadBala: 0,
    distanciaMaxima: 0,
    tiempoRecarga: 0,
    danio: 175
  },
  {
  id:'railroad_hammer',
    precio: 45,
    slots: 1,
    velocidadBala: 0,
    distanciaMaxima: 0,
    tiempoRecarga: 0,
    danio: 170
  },
  {
  id:'nagant_m1895',
    precio: 24,
    slots: 1,
    velocidadBala: 330,
    distanciaMaxima: 70,
    tiempoRecarga: 12.5,
    danio: 91
  },
  {
  id: 'nagant_m1895_with_silencer',
    precio: 27,
    slots: 1,
    velocidadBala: 280,
    distanciaMaxima: 81,
    tiempoRecarga: 12.5,
    danio: 81
  },
  {
  id: 'new_army',
    precio: 90,
    slots: 1,
    velocidadBala: 230,
    distanciaMaxima: 75,
    tiempoRecarga: 9.5,
    danio: 97
  },
  {
  id: 'swift_new_army',
    precio: 108,
    slots: 1,
    velocidadBala: 230,
    distanciaMaxima: 75,
    tiempoRecarga: 5.6,
    danio: 97
  },
  {
  id: 'pax',
    precio: 80,
    slots: 1,
    velocidadBala: 330,
    distanciaMaxima: 65,
    tiempoRecarga: 11.2,
    danio: 110
  },
  {
  id: 'pax_claw',
    precio: 90,
    slots: 1,
    velocidadBala: 330,
    distanciaMaxima: 65,
    tiempoRecarga: 11.2,
    danio: 110
  },
  {
  id: 'pax_marksman_power',
    precio: 141,
    slots: 1,
    velocidadBala: 410,
    distanciaMaxima: 80,
    tiempoRecarga: 11.2,
    danio:114
  },
  {
  id: 'sparks_pistol',
    precio: 155,
    slots: 1,
    velocidadBala: 453,
    distanciaMaxima: 95,
    tiempoRecarga: 3.4,
    danio: 149
  },
  {
  id: 'sparks_pistol_with_silencer',
    precio: 178,
    slots: 1,
    velocidadBala: 385,
    distanciaMaxima: 85,
    tiempoRecarga: 3.4,
    danio: 133
  },
  {
  id: 'extended_pistol',
    precio: 310,
    slots: 1,
    velocidadBala: 410,
    distanciaMaxima: 65,
    tiempoRecarga: 16,
    danio: 123
  },
  {
  id: 'modified_chain_pistol',
    precio: 84,
    slots: 1,
    velocidadBala: 300,
    distanciaMaxima: 75,
    tiempoRecarga: 28.7,
    danio: 104
  },
  {
  id: 'modified_pistoll',
    precio: 55,
    slots: 1,
    velocidadBala: 300,
    distanciaMaxima: 75,
    tiempoRecarga: 11.2,
    danio: 104
  },
  {
  id: 'cavalry_saber',
    precio: 50,
    slots: 1,
    velocidadBala: 0,
    distanciaMaxima: 0,
    tiempoRecarga: 0,
    danio: 150
  },
  {
  id: 'scottfield',
    precio: 77,
    slots: 1,
    velocidadBala: 280,
    distanciaMaxima: 65,
    tiempoRecarga: 9,
    danio: 107
  },
  {
  id: 'brawler_scottfield',
    precio: 87,
    slots: 1,
    velocidadBala: 280,
    distanciaMaxima: 60,
    tiempoRecarga: 9,
    danio: 107
  },
  {
  id: 'firebreather_scottfield',
    precio: 108,
    slots: 1,
    velocidadBala: 280,
    distanciaMaxima: 60,
    tiempoRecarga: 9,
    danio: 107
  },
  {
  id: 'swift_scottfield',
    precio: 95,
    slots: 1,
    velocidadBala: 280,
    distanciaMaxima: 65,
    tiempoRecarga: 4.3,
    danio: 107
  },
  {
  id: 'auto_5',
    precio: 600,
    slots: 3,
    velocidadBala: 425,
    distanciaMaxima: 30,
    tiempoRecarga: 10.7,
    danio: 194
  },
  {
  id: 'crossbow',
    precio: 50,
    slots: 3,
    velocidadBala: 150,
    distanciaMaxima: 20,
    tiempoRecarga: 5.3,
    danio: 246
  },
  {
  id: 'crossbow_deadeye',
    precio: 53,
    slots: 3,
    velocidadBala: 150,
    distanciaMaxima: 20,
    tiempoRecarga: 5.3,
    danio: 246
  },
  {
  id:'berthier_1892',
    precio: 330,
    slots: 3,
    velocidadBala: 590,
    distanciaMaxima: 120,
    tiempoRecarga: 2.7,
    danio: 133
  },
  {
  id:'berthier_1892_deadeye',
    precio: 347,
    slots: 3,
    velocidadBala: 590,
    distanciaMaxima: 120,
    tiempoRecarga: 2.7,
    danio: 133
  },            
  {
  id:'berthier_1892_marksman',
    precio: 363,
    slots: 3,
    velocidadBala: 590,
    distanciaMaxima: 120,
    tiempoRecarga: 2.7,
    danio: 133
  },            
  {
  id:'berthier_1892_riposte',
    precio: 340,
    slots: 3,
    velocidadBala: 590,
    distanciaMaxima: 120,
    tiempoRecarga: 2.7,
    danio: 133
  },            
  {
  id:'carabine_1865',
    precio: 70,
    slots: 3,
    velocidadBala: 340,
    distanciaMaxima: 115,
    tiempoRecarga: 8.5,
    danio: 145
},            
{
  id:'carabine_1865_aperture',
    precio: 74,
    slots: 3,
    velocidadBala: 340,
    distanciaMaxima: 115,
    tiempoRecarga: 8.5,
    danio: 145
},       
{
  id:'carabine_1865_silencer',
    precio: 80,
    slots: 3,
    velocidadBala: 289,
    distanciaMaxima: 105,
    tiempoRecarga: 8.5,
    danio: 130
}, 
{
  id:'carabine_lemat',
    precio: 115,
    slots: 3,
    velocidadBala: 460,
    distanciaMaxima: 130,
    tiempoRecarga: 18.7,
    danio: 107
}, 
{
  id:'carabine_lemat_marksman',
    precio: 127,
    slots: 3,
    velocidadBala: 460,
    distanciaMaxima: 135,
    tiempoRecarga: 18.7,
    danio: 107
}, 
{
  id:'cenntenial',
    precio: 157,
    slots: 3,
    velocidadBala: 600,
    distanciaMaxima: 140,
    tiempoRecarga: 15.5,
    danio: 123
}, 
{
  id:'cenntenial_trauma',
    precio: 167,
    slots: 3,
    velocidadBala: 600,
    distanciaMaxima: 145,
    tiempoRecarga: 15.5,
    danio: 123
}, 
{
  id:'cenntenial_sniper',
    precio: 181,
    slots: 3,
    velocidadBala: 600,
    distanciaMaxima: 145,
    tiempoRecarga: 15.5,
    danio: 123
}, 
{
  id:'frontier_73c',
    precio: 41,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 140,
    tiempoRecarga: 10.1,
    danio: 110
}, 
{
  id:'frontier_73c_marksman',
    precio: 45,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 140,
    tiempoRecarga: 10.1,
    danio: 110
}, 
{
  id:'frontier_73c_silencer',
    precio: 47,
    slots: 3,
    velocidadBala: 340,
    distanciaMaxima: 120,
    tiempoRecarga: 10.1,
    danio: 98
}, 
{
  id:'drilling',
    precio: 510,
    slots: 3,
    velocidadBala: 530,
    distanciaMaxima: 145,
    tiempoRecarga: 5.3,
    danio: 120
}, 
{
  id:'krag',
    precio: 450,
    slots: 3,
    velocidadBala: 610,
    distanciaMaxima: 140,
    tiempoRecarga: 11.1,
    danio: 126
}, 
{
  id:'krag_silencer',
    precio: 517,
    slots: 3,
    velocidadBala: 518,
    distanciaMaxima: 130,
    tiempoRecarga: 11.1,
    danio: 113
}, 
{
  id:'krag_bayonet',
    precio: 460,
    slots: 3,
    velocidadBala: 610,
    distanciaMaxima: 140,
    tiempoRecarga: 11.1,
    danio: 126
}, 
{
  id:'krag_marksman',
    precio: 517,
    slots: 3,
    velocidadBala: 610,
    distanciaMaxima: 140,
    tiempoRecarga: 11.1,
    danio: 126
}, 
{
  id:'lebel_1886',
    precio: 397,
    slots: 3,
    velocidadBala: 630,
    distanciaMaxima: 140,
    tiempoRecarga: 18.7,
    danio: 132
}, 
{
  id:'lebel_1886_talon',
    precio: 407,
    slots: 3,
    velocidadBala: 630,
    distanciaMaxima: 140,
    tiempoRecarga: 18.7,
    danio: 132
}, 
{
  id:'lebel_1886_aperture',
    precio: 417,
    slots: 3,
    velocidadBala: 630,
    distanciaMaxima: 140,
    tiempoRecarga: 18.7,
    danio: 132
}, 
{
  id:'lebel_1886_marksman',
    precio: 437,
    slots: 3,
    velocidadBala: 630,
    distanciaMaxima: 140,
    tiempoRecarga: 18.7,
    danio: 132
}, 
{
  id:'mako_1895',
    precio: 360,
    slots: 3,
    velocidadBala: 540,
    distanciaMaxima: 115,
    tiempoRecarga: 13,
    danio: 128
}, 
{
  id:'mako_1895_claw',
    precio: 370,
    slots: 3,
    velocidadBala: 540,
    distanciaMaxima: 115,
    tiempoRecarga: 13,
    danio: 128
}, 
{
  id:'mako_1895_aperture',
    precio: 378,
    slots: 3,
    velocidadBala: 540,
    distanciaMaxima: 115,
    tiempoRecarga: 13,
    danio: 128
}, 
{
  id:'marathon',
    precio: 68,
    slots: 3,
    velocidadBala: 430,
    distanciaMaxima: 140,
    tiempoRecarga: 19.2,
    danio: 113
}, 
{
  id:'marathon_swift',
    precio: 95,
    slots: 3,
    velocidadBala: 430,
    distanciaMaxima: 140,
    tiempoRecarga: 10,
    danio: 113
}, 
{
  id:'martini_henry',
    precio: 122,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 125,
    tiempoRecarga: 2.7,
    danio: 143
}, 
{
  id:'martini_henry_deadeye',
    precio: 128,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 125,
    tiempoRecarga: 2.7,
    danio: 143
}, 
{
  id:'martini_henry_ironside',
    precio: 159,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 125,
    tiempoRecarga: 14.7,
    danio: 143
}, 
{
  id:'martini_henry_marksman',
    precio: 134,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 125,
    tiempoRecarga: 2.7,
    danio: 143
}, 
{
  id:'martini_henry_riposte',
    precio: 132,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 125,
    tiempoRecarga: 2.7,
    danio: 143
}, 
{
  id:'maynard',
    precio: 139,
    slots: 3,
    velocidadBala: 560,
    distanciaMaxima: 160,
    tiempoRecarga: 5,
    danio: 144
}, 
{
  id:'maynard_silencer',
    precio: 159,
    slots: 3,
    velocidadBala: 476,
    distanciaMaxima: 150,
    tiempoRecarga: 5,
    danio: 128
},
{
  id:'mosin',
    precio: 620,
    slots: 3,
    velocidadBala: 615,
    distanciaMaxima: 135,
    tiempoRecarga: 3.7,
    danio: 136
}, 
{
  id:'mosin_avtomat',
    precio: 1250,
    slots: 3,
    velocidadBala: 615,
    distanciaMaxima: 135,
    tiempoRecarga: 11.4,
    danio: 136
}, 
{
  id:'mosin_sniper',
    precio: 713,
    slots: 3,
    velocidadBala: 615,
    distanciaMaxima: 135,
    tiempoRecarga: 5.3,
    danio: 136
}, 
{
  id:'mosin_bayonet',
    precio: 630,
    slots: 3,
    velocidadBala: 615,
    distanciaMaxima: 135,
    tiempoRecarga: 3.7,
    danio: 136
}, 
{
  id:'mosin_orbez',
    precio: 362,
    slots: 3,
    velocidadBala: 540,
    distanciaMaxima: 105,
    tiempoRecarga: 3.7,
    danio: 130
}, 
{
  id:'mosin_match',
    precio: 345,
    slots: 3,
    velocidadBala: 540,
    distanciaMaxima: 105,
    tiempoRecarga: 3.7,
    danio: 130
}, 
{
  id:'nitro_express',
    precio: 1015,
    slots: 3,
    velocidadBala: 550,
    distanciaMaxima: 45,
    tiempoRecarga: 4.8,
    danio: 364
}, 
{
  id:'ranger_73',
    precio: 75,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 140,
    tiempoRecarga: 8.4,
    danio: 110
}, 
{
  id:'ranger_73_apertur',
    precio: 79,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 140,
    tiempoRecarga: 8.4,
    danio: 110
}, 
{
  id:'ranger_73_swift',
    precio: 128,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 140,
    tiempoRecarga: 8.4,
    danio: 110
}, 
{
  id:'ranger_73_talon',
    precio: 85,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 140,
    tiempoRecarga: 8.4,
    danio: 110
}, 
{
  id:'slate',
    precio: 333,
    slots: 3,
    velocidadBala: 425,
    distanciaMaxima: 25,
    tiempoRecarga: 9.6,
    danio: 207
}, 
{
  id:'slate_riposte',
    precio: 343,
    slots: 3,
    velocidadBala: 425,
    distanciaMaxima: 25,
    tiempoRecarga: 9.6,
    danio: 207
}, 
{
  id:'sparks',
    precio: 130,
    slots: 3,
    velocidadBala: 533,
    distanciaMaxima: 145,
    tiempoRecarga: 4,
    danio: 149
}, 
{
  id:'sparks_silencer',
    precio: 149,
    slots: 3,
    velocidadBala: 453,
    distanciaMaxima: 110,
    tiempoRecarga: 4,
    danio: 149
}, 
{
  id:'sparks_sniper',
    precio: 150,
    slots: 3,
    velocidadBala: 533,
    distanciaMaxima: 145,
    tiempoRecarga: 4,
    danio: 149
}, 
{
  id:'specter',
    precio: 188,
    slots: 3,
    velocidadBala: 425,
    distanciaMaxima: 30,
    tiempoRecarga: 14.8,
    danio: 213
}, 
{
  id:'specter_bayonet',
    precio: 198,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 25,
    tiempoRecarga: 14.8,
    danio: 204
}, 
{
  id:'springfield',
    precio: 38,
    slots: 3,
    velocidadBala: 490,
    distanciaMaxima: 160,
    tiempoRecarga: 3,
    danio: 132
}, 
{
  id:'springfield_bayonet',
    precio: 48,
    slots: 3,
    velocidadBala: 490,
    distanciaMaxima: 160,
    tiempoRecarga: 3,
    danio: 132
}, 
{
  id:'springfield_marksman',
    precio: 42,
    slots: 3,
    velocidadBala: 490,
    distanciaMaxima: 160,
    tiempoRecarga: 3,
    danio: 132
}, 
{
  id:'terminus',
    precio: 238,
    slots: 3,
    velocidadBala: 425,
    distanciaMaxima: 25,
    tiempoRecarga: 12.2,
    danio: 186
}, 
{
  id:'vetterli_71',
    precio: 105,
    slots: 3,
    velocidadBala: 410,
    distanciaMaxima: 125,
    tiempoRecarga: 12.1,
    danio: 145
}, 
{
  id:'vetterli_71_bayonet',
    precio: 115,
    slots: 3,
    velocidadBala: 410,
    distanciaMaxima: 125,
    tiempoRecarga: 12.1,
    danio: 145
}, 
{
  id:'vetterli_71_cyclone',
    precio: 280,
    slots: 3,
    velocidadBala: 410,
    distanciaMaxima: 105,
    tiempoRecarga: 8.4,
    danio: 145
}, 
{
  id:'vetterli_71_deadeye',
    precio: 110,
    slots: 3,
    velocidadBala: 410,
    distanciaMaxima: 125,
    tiempoRecarga: 12.1,
    danio: 145
}, 
{
  id:'vetterli_71_marksman',
    precio: 116,
    slots: 3,
    velocidadBala: 410,
    distanciaMaxima: 125,
    tiempoRecarga: 12.1,
    danio: 145
}, 
{
  id:'vetterli_71_silencer',
    precio: 120,
    slots: 3,
    velocidadBala: 348,
    distanciaMaxima: 115,
    tiempoRecarga: 12.1,
    danio: 145
}, 
{
  id:'infanteryL',
    precio: 78,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 145,
    tiempoRecarga: 17.9,
    danio: 110
}, 
{
  id:'infanteryL_bayonet',
    precio: 88,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 145,
    tiempoRecarga: 17.9,
    danio: 110
}, 
{
  id:'infanteryL_sniper',
    precio: 90,
    slots: 3,
    velocidadBala: 400,
    distanciaMaxima: 145,
    tiempoRecarga: 17.9,
    danio: 110
}, 
{
  id: 'hunting_bow',
    precio: 57,
    slots: 2,
    velocidadBala: 150,
    distanciaMaxima: 30,
    tiempoRecarga: 0.6,
    danio: 250
  },
  {
  id: 'auto_4_short',
    precio: 300,
    slots: 2,
    velocidadBala: 350,
    distanciaMaxima: 20,
    tiempoRecarga: 9.7,
    danio: 154
  },
  {
  id: 'bornheim_no_3_match',
    precio: 180,
    slots: 2,
    velocidadBala: 400,
    distanciaMaxima: 85,
    tiempoRecarga: 7.6,
    danio: 80
  },
  {
  id: 'centennial_vanguard',
    precio: 114,
    slots: 2,
    velocidadBala: 540,
    distanciaMaxima: 110,
    tiempoRecarga: 10.9,
    danio: 120
  },
  {
  id: 'centennial_short',
    precio: 103,
    slots: 2,
    velocidadBala: 540,
    distanciaMaxima: 110,
    tiempoRecarga: 10.9,
    danio: 120
  },
  {
  id: 'centennial_short_with_silencer',
    precio: 118,
    slots: 2,
    velocidadBala: 459,
    distanciaMaxima: 107,
    tiempoRecarga: 10.9,
    danio: 107
  },
  {
  id: 'chu_ko_nu',
    precio: 75,
    slots: 2,
    velocidadBala: 125,
    distanciaMaxima: 17,
    tiempoRecarga: 8.5,
    danio: 150
  },
  {
  id: 'dolch_96_precision',
    precio: 730,
    slots: 2,
    velocidadBala: 440,
    distanciaMaxima: 70,
    tiempoRecarga: 6,
    danio: 97
  },
  {
  id: 'drilling_with_axe',
    precio: 340,
    slots: 2,
    velocidadBala: 424,
    distanciaMaxima: 120,
    tiempoRecarga: 5.6,
    danio: 118
  },
  {
  id: 'short_drilling',
    precio: 330,
    slots: 2,
    velocidadBala: 424,
    distanciaMaxima: 120,
    tiempoRecarga: 4.8,
    danio: 118
  },
  {
  id: 'bomb_lance',
    precio: 110,
    slots: 2,
    velocidadBala: 60,
    distanciaMaxima: 5,
    tiempoRecarga: 13,
    danio: 150
  },
  {
  id: 'mosin_obrez',
    precio: 290,
    slots: 2,
    velocidadBala: 520,
    distanciaMaxima: 100,
    tiempoRecarga: 3.7,
    danio: 126
  },
  {
  id: 'mosin_obrez_maze',
    precio: 300,
    slots: 2,
    velocidadBala: 520,
    distanciaMaxima: 100,
    tiempoRecarga: 3.7,
    danio: 126
  },
  {
  id: 'mosin_obrez_extended',
    precio: 350,
    slots: 2,
    velocidadBala: 520,
    distanciaMaxima: 100,
    tiempoRecarga: 8,
    danio: 126
  },
  {
  id: 'nagant_m1895_deadeye',
    precio: 30,
    slots: 2,
    velocidadBala: 330,
    distanciaMaxima: 70,
    tiempoRecarga: 13.4,
    danio: 91
  },
  {
  id: 'nagant_m1895_precision',
    precio: 29,
    slots: 2,
    velocidadBala: 330,
    distanciaMaxima: 70,
    tiempoRecarga: 13.4,
    danio: 91
  },
  {
  id: 'long_pistol_deadeye',
    precio: 337,
    slots: 2,
    velocidadBala: 410,
    distanciaMaxima: 65,
    tiempoRecarga: 18.3,
    danio: 123
  },
  {
  id: 'long_pistol_precision',
    precio: 321,
    slots: 2,
    velocidadBala: 410,
    distanciaMaxima: 65,
    tiempoRecarga: 18.3,
    danio: 123
  },
  {
  id: 'rival_78_short',
    precio: 125,
    slots: 2,
    velocidadBala: 350,
    distanciaMaxima: 20,
    tiempoRecarga: 4.7,
    danio: 158
  },
  {
  id: 'rival_78_mace',
    precio: 135,
    slots: 2,
    velocidadBala: 350,
    distanciaMaxima: 20,
    tiempoRecarga: 4.7,
    danio: 158
  },
  {
  id: 'romero_77_with_axe',
    precio: 56,
    slots: 2,
    velocidadBala: 375,
    distanciaMaxima: 20,
    tiempoRecarga: 3.7,
    danio: 214
  },
  {
  id: 'romero_77_short',
    precio: 46,
    slots: 2,
    velocidadBala: 375,
    distanciaMaxima: 20,
    tiempoRecarga: 3.2,
    danio: 214
  },
  {
  id: 'scottfield_precision',
    precio: 85,
    slots: 2,
    velocidadBala: 280,
    distanciaMaxima: 65,
    tiempoRecarga: 9,
    danio: 107
  },
  {
  id: 'specter_1882_short',
    precio: 164,
    slots: 2,
    velocidadBala: 350,
    distanciaMaxima: 20,
    tiempoRecarga: 11.1,
    danio: 178
  },
  {
  id: 'springfield_1866_diana',
    precio: 35,
    slots: 2,
    velocidadBala: 440,
    distanciaMaxima: 120,
    tiempoRecarga: 3,
    danio: 130
  },
  {
  id: 'springfield_1866_striker',
    precio: 43,
    slots: 2,
    velocidadBala: 440,
    distanciaMaxima: 120,
    tiempoRecarga: 3,
    danio: 130
  },
  {
  id: 'springfield_1866_short',
    precio: 33,
    slots: 2,
    velocidadBala: 440,
    distanciaMaxima: 120,
    tiempoRecarga: 3,
    danio: 130
  },
  {
  id: 'terminus_short',
    precio: 218,
    slots: 2,
    velocidadBala: 350,
    distanciaMaxima: 20,
    tiempoRecarga: 10.6,
    danio: 168
  },
  {
  id: 'tunda',
    precio: 278,
    slots: 2,
    velocidadBala: 530,
    distanciaMaxima: 65,
    tiempoRecarga: 21.8,
    danio: 122
  },
  {
  id: 'vandal_73c',
    precio: 35,
    slots: 2,
    velocidadBala: 370,
    distanciaMaxima: 120,
    tiempoRecarga: 9.4,
    danio: 107
  },
  {
  id: 'vandal_73c_diana',
    precio: 37,
    slots: 2,
    velocidadBala: 370,
    distanciaMaxima: 120,
    tiempoRecarga: 9.4,
    danio: 107
  },
  {
  id: 'vandal_73c_striker',
    precio: 45,
    slots: 2,
    velocidadBala: 370,
    distanciaMaxima: 120,
    tiempoRecarga: 9.4,
    danio: 107
  },
];

const herramientas = [
  {
    id: 'alert_trip_mine',
    precio: 30
  },
  {
    id: 'bear_trap',
    precio: 70
  },
  {
    id: 'blank_fire_decoy',
    precio: 45
  },
  {
    id: 'choke_bomb',
    precio: 25
  },
  {
    id: 'concertina_trip_mine',
    precio: 90
  },
  {
    id: 'decoy_fuses',
    precio: 30
  },
  {
    id: 'decoys',
    precio: 6
  },
  {
    id: 'dusters',
    precio: 30
  },
  {
    id: 'derringer_pennyshot',
    precio: 63
  },
  {
    id: 'first_aid_kit',
    precio: 30
  },
  {
    id: 'flare_pistol',
    precio: 36
  },
  {
    id: 'fuses',
    precio: 10
  },
  {
    id: 'heavy_knife',
    precio: 20
  },
  {
    id: 'knife',
    precio: 40
  },
  {
    id: 'knuckle_knife',
    precio: 50
  },
  {
    id: 'poision_trip_mine',
    precio: 60
  },
  {
    id: 'quad_derringer',
    precio: 30
  },
  {
    id: 'spyglass',
    precio: 8
  },
  {
    id: 'throwing_axes',
    precio: 50
  },
  {
    id: 'throwing_knives',
    precio: 30
  },
  {
    id: 'throwing_spear',
    precio: 150
  }
];

const consumibles = [
  {
    id: 'ammo_box',
    precio: 65
  },
  {
    id: 'big_dynamite_bundle',
    precio: 110
  },
  {
    id: 'chocke_beetle',
    precio: 22
  },
  {
    id: 'fire_beetle',
    precio: 57
  },
  {
    id: 'stalker_beetle',
    precio: 45
  },
  {
    id: 'chaos_bomb',
    precio: 15
  },
  {
    id: 'concertina_bomb',
    precio: 48
  },
  {
    id: 'dynamite_bundle',
    precio: 75
  },
  {
    id: 'dynamite_stick',
    precio: 18
  },
  {
    id: 'fire_bomb',
    precio: 30
  },
  {
    id: 'flash_bomb',
    precio: 25
  },
  {
    id: 'frag_bomb',
    precio: 103
  },
  {
    id: 'hellfire_bomb',
    precio: 70
  },
  {
    id: 'hive_bomb',
    precio: 40
  },
  {
    id: 'liquid_fire_bomb',
    precio: 35
  },
  {
    id: 'medical_pack',
    precio: 35
  },
  {
    id: 'poison_bomb',
    precio: 25
  },
  {
    id: 'tool_box',
    precio: 70
  },
  {
    id: 'sticky_bomb',
    precio: 64
  },
  {
    id: 'waxed_dynamite_stick',
    precio: 24
  },
  {
    id: 'antidote_shot',
    precio: 55
  },
  {
    id: 'regeneration_shot',
    precio: 105
  },
  {
    id: 'stamina_shot',
    precio: 100
  },
  {
    id: 'vitality_shot',
    precio: 85
  },
  {
    id: 'antidote_shot_weak',
    precio: 30
  },
  {
    id: 'regeneration_shot_weak',
    precio: 40
  },
  {
    id: 'stamina_shot_weak',
    precio: 60
  },
  {
    id: 'vitality_shot_weak',
    precio: 20
  },
  {
    id: 'recovery_shot',
    precio: 140
  },
  {
    id: 'dark_dynamite',
    precio: 100
  }
];

module.exports = { armas, herramientas, consumibles };