

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
global.sp = 'β­'
global.mess = {
    success: 'β Success',
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

Harap kirimkan bukti transferπ§Ύ dan nama pengirim

QRIS Minta β`,
	
	form: `*Format Order*
ID (Server) : 
Nickname :
Orderan :

Note: 

*KESALAHAN PENGISIAN ID, SERVER, NICKNAME BUKAN KESALAHAN ADMIN, JADI PERIKSA ULANG DENGAN TELITI*`,
	
	ml: `*MLBB PAKET A*
OPEN 09.00 - 21.00 WIB
_PROSES 1 - 20 MENIT_
86π Rp20.525
172π Rp42.650
257π Rp62.075
344π Rp81.300
429π Rp102.125
514π Rp119.950
600π Rp140.775
706π Rp165.600
878π Rp201.250
963π Rp220.075
1050π Rp242.900
1220π Rp280.550
1412π Rp324.200
2194π Rp475.225
3688π Rp788.850
4032π Rp869.150
5532π Rp1.183.300
6238π Rp1.343.900
9288π Rp1.981.150

*MLBB PAKET B*
_PROSES 1 - 20 MENIT_
_STATUS : READY β_
65πRp15.500
129πRp29.500
194πRp46.000
530πRp119.000
1647πRp352.000
2767πRp580.000
4150πRp865.000
6966πRp1.440.000

*BERLAKU KELIPATAN*`,
	
	po: `*PO DM EVENT KOF PHASE 1* //po
πΉ STATUS : *OPEN*β
πΉ PROSES : VIA ID + SERVER
πΉ ESTIMASI : 9 April (15:00 WIB)
βββββββββββ
65  π  = 16.500
(gak selesai misi) 

129 π Rp31.000,-   (Selesai 100 DM)
323 π Rp75.500,-   (Selesai 250 DM)
*More Diamonds*
530π Rp119.000,-
1060π Rp235.000,-
1647π Rp354.000,-

*NOTE*
βͺοΈClose PO Tgl 8 Pukul 23:00 WIB
βͺοΈWajib TF Langsung List ID Server
βͺοΈDM Dikirim Tgl 9 Start Pukul 15:00 WIB
βͺοΈPengiriman Sesuai Antrian
βͺοΈWAJIB SABAR Jika WEB ERROR

BISA DIKOMBINASIKAN MISAL: 65+530π

*_KEUNTUNGAN PO:_*

1.LEBIH MURAH, INGAT HARGA PAS EVENT PASTI NAIK.
2.DIPROSES DULUAN
3.BISA CLAIM TIKET UNTUK DRAW DULUAN KETIMBANG YANG BELI READY
4.BISA SPIN DULUAN`,
	
	coa: `*CRYSTAL OF AURORA MONTHLY PASS*β

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
βΰ½²βΰ½΄βΰ½²βΰ½΄βΰ½΄βΰ½²βΰ½΄βΰ½²ββΰ½²βΰ½΄βΰ½²βΰ½΄β `,

	form: `α΄α΄α΄ α΄α΄ Ι’α΄α΄α΄ α΄α΄Κα΄Κ ΚΚ α΄α΄α΄α΄.α΄α΄ΙͺΚΙͺα΄

Harap isi dengan benar

α΄Ίβ±αΆα΅ :
α΄΅α΅ & Λ’α΅Κ³α΅α΅Κ³ :
α΄ΌΚ³α΅α΅Κ³ :
α΄³α΅α΅α΅ :
Λ’β±Λ’α΅ α΅α΅ :
Λ’β±Λ’α΅ α΅α΅ Κ°α΅Κ³α΅α΅ α΅β± Λ’Λ’ α΅α΅Κ³α΅α΅α΅ βΏα΅α΅β±αΆ  Κ²α΅α΅α΅ΚΈα΅

*N.) Kesalahan pengisian format bukan tanggung jawab saya*`,

	mla: `*Paket ML A Fast*	
	
65π	Rp18.000
129π	Rp35.000
194π	Rp50.000
258π	Rp65.000
388π	Rp100.000
454π	Rp115.000
530π	Rp130.000
659π	Rp170.000
724π	Rp180.000
918π	Rp235.000
1060π	Rp260.000
1254π	Rp300.000
1647π	Rp380.000
2767π	Rp630.000
3297π	Rp750.000
4150π	Rp950.000
6966π	Rp1.600.000
9733π	Rp2.250.000`,

mlb: `*ML Paket Semi A*

13 + 1 = 14π	= 5000
38 + 4 = 42π	= 13.000
64 + 6 = 70π	= 20.000
127 + 13 = 140π	= 45.000
254 + 30 = 284π	= 80.000
317 + 38 = 355π	= Rp90.000
633 + 83 = 716π	= Rp180.000
1252 + 194 = 1446π	= Rp340.000
2501 + 475 = 2976π	= Rp680.000
6252 + 1250 = 7502π	= Rp1.750.000
`,

mlc: `*ML Paket Fast A 2*

86π	Rp28.000
172π	Rp50.000
257π	Rp68.000
344π	Rp95.000
429π	Rp110.000
514π	Rp130.000
600π	Rp150.000
706π	Rp175.000
878π	Rp215.000
963π	Rp230.000
1050π	Rp260.000
1220π	Rp300.000
1412π	Rp350.000
2194π	Rp485.000
3073π	Rp700.000
3688π	Rp800.000
4032π	Rp890.000
5532π	Rp1.200.000
6238π	Rp1.400.000
9288π	Rp2.000.000
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

140   π : 23.000
200   π : 30.000
355   π : 50.000
425   π : 60.000
720   π : 100.000
1080 π : 150.000
1440 π : 200.000
2000 π : 255.000
2500 π : 320.000
2720 π : 350.000
3440 π : 450.000
7290 π : 930.000

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

β’We tv 1 tahun : 30.000
β’You tube premium 4 bulann : 25.000
β’Canva 1 tahun : 20.000
β’Netflix shared 1 bulan : 30.000
β’Netflix private 1 bulan : 130.000
β’Spotify 2 bulan : 30.000
β’Am premium 1 tahun : 40.000`

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
β1000 Followers = 10k 
β2000 Followers = 18k

Followers Anti Drop
β100 Followers = 20k

Impression
β10000 impression = 10k (real)
β10000 impression = 15k (real+reach) 

Likes, Saves, & Share
β3000 like = 10k
β10000 save = 8k
β1000 share = 10k

Views
β10000 views = 10k`,

	tiktok: `*TIKTOK JASA*
Followers
β100 follow = 15k
β500 follow = 50k
β1000 follow = 80k

Likes
β500 like = 10k
β1000 like = 15k
β3000 like = 30k
β5000 like = 65k
β10000 like = 120k

Share
β100 share = 10k

Views
β100000 view = 12k`,

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
global.thumb = fs.readFileSync('./IMG_20220418_071220_289.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
