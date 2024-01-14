var bitcoins = 0
var bitcoinRate = 0

// Every item in the game
// TODO: items should be part of the Game variable
var items = [
  {
    "name": "item_oldCalculator",
    "price": "0.0000001"
  },
  {
    "name": "item_oldCpu",
    "price": "0.00000125"
  },
  {
    "name": "item_oldComputerFromGrandpa",
    "price": "0.00003"
  },
  {
    "name": "item_rapsberrypy",
    "price": "0.00005"
  },
  {
    "name": "item_smartphone",
    "price": "0.0005"
  },
  {
    "name": "item_middleClassPC",
    "price": "0.0015"
  },
  {
    "name": "item_cheapServer",
    "price": "0.004"
  },
  {
    "name": "item_gamingPC",
    "price": "0.015"
  },
  {
    "name": "item_cheapMiner",
    "price": "0.05"
  },
  {
    "name": "item_highEndUltraPC",
    "price": "0.15"
  },
  {
    "name": "item_bigMiner",
    "price": "1.5"
  },
  {
    "name": "item_miningFarm",
    "price": "250"
  },
  {
    "name": "item_nasaPC",
    "price": "5000"
  },
  {
    "name": "item_quantumRig",
    "price": "245000"
  },
  {
    "name": "item_miningFarmSpace",
    "price": "2000000"
  },
  {
    "name": "item_miningFarmMoon",
    "price": "75500000"
  },
  {
    "name": "item_bitcoinTimeMachine",
    "price": "975000000"
  },
  {
    "name": "item_blackHolePoweredMiner",
    "price": "750000000000"
  },
  {
    "name": "item_DemonicError",
    "price": "100000000000000"
  },
  {
    "name": "item_404Error",
    "price": "500000000000000000"
  },
  {
    "name": "item_404Angel",
    "price": "404000000000000000000"
  },
  {
    "name": "item_Expert404DemonHacker",
    "price": "444444444444444444444444444"
  },
  {
    "name": "item_OniwaPenutRage",
    "price": "999000000000000000000000000000000"
  },
  {
    "name": "item_KevinMitnick",
    "price": "100000000000000000000000000000000000000000000000000000"
  },
{
    "name": "item_ExodusHacker",
    "price": "5000000000000000000000000000000000000000"
  },
  {
    "name": "item_GluttoniousHacker",
    "price": "999000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_DeleteriousHacker",
    "price": "500000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_CalamitousHacker",
    "price": "7770000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_Envenomed Hacker",
    "price": "999000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_pestileriousHacker",
    "price": "223000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_HabromanianHacker",
    "price": "8000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_BonttellónHacker",
    "price": "8000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_F̷̡̓ą̸͆c̵̥̄t̶̜͗o̶̜͋r̷̯̋y̴̮͝H̵͈͛a̴̛̟c̷͓̈́k̶̙̃é̶͍r̷̭̋",
    "price": "999000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_H̵͕̓à̷̘x̸̭͆o̶͜͠t̶̰̊ō̷͚r̸̩͒y̶̠̍Ḧ̶͜a̶̻͑c̴̺̔ḳ̴̇ȅ̴̮r̵̦̐",
    "price": "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_𝗗𝗮𝘅𝗼𝘁𝗼𝗿𝗶𝘁𝗼𝗿𝗛𝗮𝗰𝗸𝗲𝗿",
    "price": "100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_X͓̽a͓̽t͓̽o͓̽r͓̽u͓̽H͓̽a͓̽c͓̽k͓̽e͓̽r͓̽",
    "price": "100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_𝕸𝖚𝖙𝖆𝖙𝖊𝖉𝕳𝖆𝖈𝖐𝖊𝖗",
    "price": "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "name": "item_𝗛𝘂𝗴𝗲𝗘𝘅𝗼𝗱𝘂𝘀𝗛𝗮𝗰𝗸𝗲𝗿",
    "price": "100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  }
]

