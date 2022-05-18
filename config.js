

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	apikey: '5A9669C1842A',
}

// Other
global.owner = ['6287839067186','6281949742417']
global.premium = ['6287839067186', '6281949742417']
global.packname = 'Ballbot'
global.author = 'BallAmv'
global.sessionName = 'bola'
global.prefa = ['!','.','#']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.gcbot = 'https://chat.whatsapp.com/IIO1V4w7wbi8Pyx6NOvQ3J'
global.gcbo = 'https://chat.whatsapp.com/BleDdOZ5laTGke8xD98UTw'


global.daily = 1
global.report = 1


global.znely = {             //PUNYA HAPIZ
	name: `Znely Store`,
	pay: `*PAYMENT NELY*

*OVO* : - 
*GOPAY* :083802934947
*DANA* :  083802934947
*SHOPEEPAY* : - 

Atas Nama : *Muhammad Hafidh* - dana
*_Naelaz_* - Gopay

Harap kirimkan bukti transfer🧾 dan nama pengirim

QRIS Minta ✅`,
	
	form: `*Format Order*
ID (Server) : 
Nickname :
Orderan :

Note: 

*KESALAHAN PENGISIAN ID, SERVER, NICKNAME BUKAN KESALAHAN ADMIN, JADI PERIKSA ULANG DENGAN TELITI*`,
	
	ml: `*MLBB PAKET A*
OPEN 09.00 - 21.00 WIB
_PROSES 1 - 20 MENIT_
86💎 Rp20.525
172💎 Rp42.650
257💎 Rp62.075
344💎 Rp81.300
429💎 Rp102.125
514💎 Rp119.950
600💎 Rp140.775
706💎 Rp165.600
878💎 Rp201.250
963💎 Rp220.075
1050💎 Rp242.900
1220💎 Rp280.550
1412💎 Rp324.200
2194💎 Rp475.225
3688💎 Rp788.850
4032💎 Rp869.150
5532💎 Rp1.183.300
6238💎 Rp1.343.900
9288💎 Rp1.981.150

*MLBB PAKET B*
_PROSES 1 - 20 MENIT_
_STATUS : READY ✅_
65💎Rp15.500
129💎Rp29.500
194💎Rp46.000
530💎Rp119.000
1647💎Rp352.000
2767💎Rp580.000
4150💎Rp865.000
6966💎Rp1.440.000

*BERLAKU KELIPATAN*`,
	
	po: `*PO DM EVENT KOF PHASE 1* //po
🔹 STATUS : *OPEN*✅
🔹 PROSES : VIA ID + SERVER
🔹 ESTIMASI : 9 April (15:00 WIB)
➖➖➖➖➖➖➖➖➖➖➖
65  💎  = 16.500
(gak selesai misi) 

129 💎 Rp31.000,-   (Selesai 100 DM)
323 💎 Rp75.500,-   (Selesai 250 DM)
*More Diamonds*
530💎 Rp119.000,-
1060💎 Rp235.000,-
1647💎 Rp354.000,-

*NOTE*
▪️Close PO Tgl 8 Pukul 23:00 WIB
▪️Wajib TF Langsung List ID Server
▪️DM Dikirim Tgl 9 Start Pukul 15:00 WIB
▪️Pengiriman Sesuai Antrian
▪️WAJIB SABAR Jika WEB ERROR

BISA DIKOMBINASIKAN MISAL: 65+530💎

*_KEUNTUNGAN PO:_*

1.LEBIH MURAH, INGAT HARGA PAS EVENT PASTI NAIK.
2.DIPROSES DULUAN
3.BISA CLAIM TIKET UNTUK DRAW DULUAN KETIMBANG YANG BELI READY
4.BISA SPIN DULUAN`,
	
	coa: `*CRYSTAL OF AURORA MONTHLY PASS*✅

HARGA:
75.000

RULES:
- Total Dapet 1.100 Coa
- Proses 1 - 2 jam
- Pas mau proses bakal kasi tau
- Pas lagi proses jangan login dulu (biar ngga ditabrak) 
-Proses 3-5x classic dulu
- Cantumkan hero yang gaboleh / boleh dipake (Jika ada)
- via login (Login diutamakan via MOONTON) 

Crystal Of Aurora Bisa Dipake Buat:
- Gacha Skin Zodiac Summon
- Gacha Skin Magic Whell
- Gacha Skin Collector
- Gacha Aurora Summon`,
}
global.drian = {             //PUNYA DRIAN
	name: `Drian`,
	
	pay: `PAYMENT EMILIA STORE*

*OVO* : -085647976077
*GOPAY* :085647976077
*DANA* :  085647976077

Harap kirimkan bukti Tf (Foto struk / ss bukti tranfer) 
▒ི▒ུ▒ི▒ུ▒ུ▒ི▒ུ▒ི▒▒ི▒ུ▒ི▒ུ▒ `,

	form: `ᴛᴏᴘ ᴜᴘ ɢᴀᴍᴇ ᴍᴜʀᴀʜ ʙʏ ᴛᴏᴋᴏ.ᴇᴍɪʟɪᴀ

Harap isi dengan benar

ᴺⁱᶜᵏ :
ᴵᵈ & ˢᵉʳᵛᵉʳ :
ᴼʳᵈᵉʳ :
ᴳᵃᵐᵉ :
ˢⁱˢᵃ ᵈᵐ :
ˢⁱˢᵃ ᵈᵐ ʰᵃʳᵃᵖ ᵈⁱ ˢˢ ᵇᵉʳᵃᵐᵃ ⁿᵒᵗⁱᶠ ʲᵃᵐᵐʸᵃ

*N.) Kesalahan pengisian format bukan tanggung jawab saya*`,

	mla: `*Paket ML A Fast*	
	
65💎	Rp18.000
129💎	Rp35.000
194💎	Rp50.000
258💎	Rp65.000
388💎	Rp100.000
454💎	Rp115.000
530💎	Rp130.000
659💎	Rp170.000
724💎	Rp180.000
918💎	Rp235.000
1060💎	Rp260.000
1254💎	Rp300.000
1647💎	Rp380.000
2767💎	Rp630.000
3297💎	Rp750.000
4150💎	Rp950.000
6966💎	Rp1.600.000
9733💎	Rp2.250.000`,

mlb: `*ML Paket Semi A*

13 + 1 = 14💎	= 5000
38 + 4 = 42💎	= 13.000
64 + 6 = 70💎	= 20.000
127 + 13 = 140💎	= 45.000
254 + 30 = 284💎	= 80.000
317 + 38 = 355💎	= Rp90.000
633 + 83 = 716💎	= Rp180.000
1252 + 194 = 1446💎	= Rp340.000
2501 + 475 = 2976💎	= Rp680.000
6252 + 1250 = 7502💎	= Rp1.750.000
`,

mlc: `*ML Paket Fast A 2*

86💎	Rp28.000
172💎	Rp50.000
257💎	Rp68.000
344💎	Rp95.000
429💎	Rp110.000
514💎	Rp130.000
600💎	Rp150.000
706💎	Rp175.000
878💎	Rp215.000
963💎	Rp230.000
1050💎	Rp260.000
1220💎	Rp300.000
1412💎	Rp350.000
2194💎	Rp485.000
3073💎	Rp700.000
3688💎	Rp800.000
4032💎	Rp890.000
5532💎	Rp1.200.000
6238💎	Rp1.400.000
9288💎	Rp2.000.000
SL/TW	Rp140.000
SL PLUS	315.000
`,
	
	pubg: `*Uc Pubg Regio Indo*

263     UC : 50.000
525     UC : 95.000
788     UC : 140.000
1050   UC : 185.000
1375   UC : 235.000
1900   UC : 320.000
2163   UC : 380.000
2425   UC : 420.000
3138   UC : 520.000
6000   UC : 940.000
9375   UC : 1.400.000
10425 UC : 1.590.000
93750 UC : 13.000.000`,

pub: `Uc Pubg Regio Indo Fast

16        UC : 3000
52        UC : 10.000
105      UC : 20.000
263      UC : 55.000
530      UC : 95.000
825      UC : 160.000
1100    UC : 195.000
1925    UC : 325.000
2200    UC : 390.000
4400    UC : 780.000
5500    UC : 980.000
9900    UC : 1.730.000
19.800 UC : 3.450.000`,
	
	intro: `*JASA PAID EDIT*
\`\`\`Simple. 2d = 20k
Saber. 2d= 25k
3d = 30k

Intronem 10k 10 orang
Intronem 3d 20k 10 orang\`\`\`

\`\`\`Open paid video buat oprec harga di mulai dari 30k - 100k (trgantung render)\`\`\`
*Note:*
untuk Etalase pembuatan intro ada sedikit perbedaan mengenai format pembelian dan  pembayaran.
[!] Silahkan Lihat lihat Intro nya dulu _*Klik button Contoh intro*_
[!] Chat Penjual untuk Request dan memilih intro _*klik button penjual*_ `,

	ff: `*Diamond Free Fire*

140   💎 : 23.000
200   💎 : 30.000
355   💎 : 50.000
425   💎 : 60.000
720   💎 : 100.000
1080 💎 : 150.000
1440 💎 : 200.000
2000 💎 : 255.000
2500 💎 : 320.000
2720 💎 : 350.000
3440 💎 : 450.000
7290 💎 : 930.000

Membership mingguan : 35.000
Membership bulanan : 150.000`,

giv: `*Genshin impact UID1*

60 Gynosis	 = 16.000
330+30 Gynosis = 	70.000
980+110 Gynosis = 210.000
1980+260 Gynosis = 450.000
3280+600 Gynosis = 680.000 
6480+1600 Gynosis = 1.400.000
Blessing Welkin	= 70.000`,

gi: `*Gynosis Genshin Impact Via Login*

140 GC : 24.000
300 GC : 60.000
980 GC : 180.000
1980 GC : 370.000
3280 GC : 620.000
6480 GC : 1200.000
Blessing Monthly : 60.000
Gynostic Hym : 120.000
Gynostic chorus : 120.000

*N) Ini via login, jadi harap jangan login ketika di proses*
`,

giud: `*Pricelist Genshin Impact Via UID 2*

Genesis	Harga

60 Genesis Rp14.000
330+30 Genesis	 Rp65.000
980+110 Genesis Rp190.000
1980+260 Genesis Rp400.000
3280+600 Genesis Rp600.000
6480+1600 Genesis Rp1.200.000
Blessing Welkin Rp63.000
TANYAKAN STOK ADA APA NGGA YA!
`,
valo: `*LIST VP VALORANT*

125   VP : 17.000
420   VP : 65.000
700   VP : 90.000
1375 VP : 155.000
2400 VP : 260.000
4000 VP : 410.000
8150 VP : 815.000`,

codm: `*List codm*

53      cp = 10.000
112    cp = 20.000
278    cp = 43.000
581    cp = 85.000
1.268 cp = 160.000
1.901 cp = 250.000
3.300 cp = 380.000
7.128 cp = 750.000`,

apk: `*List apk premium*

•We tv 1 tahun : 30.000
•You tube premium 4 bulann : 25.000
•Canva 1 tahun : 20.000
•Netflix shared 1 bulan : 30.000
•Netflix private 1 bulan : 130.000
•Spotify 2 bulan : 30.000
•Am premium 1 tahun : 40.000`

}
global.filo = {             //PUNYA FILO
	name: `filostore`,
	
	pay: `Belom ada cantuman`,
	
	forma: `*Format Order Game*
ID (Server) : 
Nickname :
Orderan :

Note: 

*KESALAHAN PENGISIAN ID, SERVER, NICKNAME BUKAN KESALAHAN ADMIN, JADI PERIKSA ULANG DENGAN TELITI*`,

	form: `*Format Order Jasa*
Name :
Url :
Orderan :
Note :

*KESALAHAN DALAM PENGISIAN BUKAN TANGGUNG JAWAB ADMIN HARAP CEK LAGI SEBELUM MENGIRIM*`,

	ml: `*DIAMOND MLBB*
65 dm = 15k
70 dm = 17k
84 dm = 21k
112 dm = 29k
129 dm = 32k
143 dm = 34k
172 dm = 43k
185 dm = 47k
194 dm = 49k
222 dm = 54k
259 dm = 63k
278 dm = 67k
283 dm = 70k
352 dm = 85k
366 dm = 87k
388 dm = 93k
430 dm = 105k
530 dm = 135k
572 dm = 140k
586 dm = 145k
609 dm = 150k
724 dm = 180k
853 dm = 210k
881 dm = 220k
983 dm = 250k
1189 dm = 300k
1448 dm = 370k
1647 dm = 400k
2035 dm = 490k
2177 dm = 500k
2256 dm = 540k
2767 dm = 650k
2975 dm = 720k
3685 dm = 880k
4150 dm = 980k
4409 dm = 1040k`,

	pubg: `*UC PUBG*
263 UC = Rp 49.000
525 UC = Rp 96.000
788 UC = Rp 142.000
1050 UC = Rp 189.000
1375 UC = Rp 234.000
1638 UC = Rp 279.000
1900 UC = Rp 325.000
2163 UC = Rp 371.000
2425 UC = Rp 417.000
2875 UC = Rp 463.000
3138 UC = Rp 509.000
3400 UC = Rp 554.000
3925 UC = Rp 646.000
4250 UC = Rp 692.000
5038 UC = Rp 829.000
6000 UC = Rp 921.000
7050 UC = Rp 1.105.000
7575 UC = Rp 1.197.000
9375 UC = Rp 1.380.000`,

	ff: `*DIAMOND FF READY*
5 Dm = Rp 1.000
50 Dm = Rp 7.000
75 Dm = Rp 10.000
140 Dm = Rp 19.000
355 Dm = Rp 48.000
720 Dm = Rp 95.000
1450 Dm = Rp 190.000
2180 Dm = Rp 280.000
3640 Dm = Rp 470.000
7290 Dm = Rp 950.000`,
	
	valo: `*VALORANT GC*
60 GC                 Rp 15.000
300+30 GC         Rp 67.000
980+110 GC       Rp 200.000
1980+260 GC     Rp 417.000
3240+600 GC     Rp 650.000
6480+1600 GC   Rp 1.300.000
Blessing WM      Rp 67.000
Blessing WM 3X Rp195.000`,

	gi: `*GENSHIN IMPACT*
60 GC                 Rp 15.000
300+30 GC         Rp 67.000
980+110 GC       Rp 200.000
1980+260 GC     Rp 417.000
3240+600 GC     Rp 650.000
6480+1600 GC   Rp 1.300.000
Blessing WM      Rp 67.000
Blessing WM 3X Rp195.000`,

	cod: `*Call Off Duty Dm*
263 UC = Rp 49.000
525 UC = Rp 96.000
788 UC = Rp 142.000
1050 UC = Rp 189.000
1375 UC = Rp 234.000
1638 UC = Rp 279.000
1900 UC = Rp 325.000
2163 UC = Rp 371.000
2425 UC = Rp 417.000
2875 UC = Rp 463.000
3138 UC = Rp 509.000
3400 UC = Rp 554.000
3925 UC = Rp 646.000
4250 UC = Rp 692.000
5038 UC = Rp 829.000
6000 UC = Rp 921.000
7050 UC = Rp 1.105.000
7575 UC = Rp 1.197.000
9375 UC = Rp 1.380.000`,

	yt: `*YOUTUBE JASA*
REAL PEOPLE (High Quality/PERMANENT)
- 100 subs = 50k
- 300 subs = 140k
- 500 subs = 235k
- 800 subs = 370k
- 1000 subs 460k

Views

REAL PEOPLE (No Drop) Retensi 0-1min
- 1000 views = 25k
- 2000 views = 45k
- 5000 views = 105k
- 10000 views = 200k

REAL PEOPLE (No Drop/Permanent) Retensi 1-3min
- 1000 views = 45k
- 2000 views = 80k
- 5000 views = 200k
- 8000 views = 315k
- 10000 views = 400k

Like

FAST LIKE (Drop 10%-40%) 
- 100 like = 5k
- 500 like = 20k
- 1000 like = 30k
- 2000 like = 50k
- 5000 like = 120k

REAL PEOPLE (Permanent)
- 500 like = 75k
- 1000 like = 100k

Jam tayang

Video yg berdurasi 15mnt+
- 250 jam = 65k
- 500 jam = 120k
- 1000 jam = 230k
- 2000 jam = 450k
- 3000 jam = 680k
- 4000 jam = 900k

Video yg berdurasi 30mnt+
- 250 jam = 60k
- 500 jam = 110k
- 1000 jam = 210k
- 2000 jam = 410k
- 3000 jam = 620k
- 4000 jam = 820k`,

	ig: `*INSTAGRAM JASA*
Followers BULE (bot)
‌1000 Followers = 10k 
‌2000 Followers = 18k

Followers Anti Drop
‌100 Followers = 20k

Impression
‌10000 impression = 10k (real)
‌10000 impression = 15k (real+reach) 

Likes, Saves, & Share
‌3000 like = 10k
‌10000 save = 8k
‌1000 share = 10k

Views
‌10000 views = 10k`,

	tiktok: `*TIKTOK JASA*
Followers
‌100 follow = 15k
‌500 follow = 50k
‌1000 follow = 80k

Likes
‌500 like = 10k
‌1000 like = 15k
‌3000 like = 30k
‌5000 like = 65k
‌10000 like = 120k

Share
‌100 share = 10k

Views
‌100000 view = 12k`,

	twiter: `*TWITTER JASA*
Followers REAL
- 100 Followers 10k
- 500 Followers 40k

Like NO DROP
- 100 like = 8k
- 300 like = 15k
- 500 like = 22k
- 1000 like = 40k`,
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
