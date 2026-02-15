const WORDS_DATA = {
  "vocabulary": [
    {
      "serbian": "Ali dok sam hodao",
      "russian": "но пока я шёл",
      "example": "Ali dok sam hodao ulicom, video sam starog prijatelja."
    },
    {
      "serbian": "Bedž",
      "russian": "значок; бейдж",
      "example": "Na konferenciji svi su nosili bedž sa imenom."
    },
    {
      "serbian": "Biće zaključano ti imaš ključ",
      "russian": "Будет закрыто, у тебя есть ключ",
      "example": "Biće zaključano kad se vratiš, ali ti imaš ključ."
    },
    {
      "serbian": "Braon",
      "russian": "коричневый",
      "example": "Kupio sam braon jaknu za zimu."
    },
    {
      "serbian": "Brdo",
      "russian": "холм; гора; куча (разг.)",
      "example": "Popeli smo se na brdo i videli ceo grad."
    },
    {
      "serbian": "Bujao",
      "russian": "разрастался; бурлил",
      "example": "Potok je bujao posle obilnih kiša."
    },
    {
      "serbian": "Centara ima sijaset",
      "russian": "центров множество",
      "example": "U ovom gradu centara ima sijaset, ne znam koji da izaberem."
    },
    {
      "serbian": "Ciljeve",
      "russian": "цели",
      "example": "Postavio sam sebi nove ciljeve za ovu godinu."
    },
    {
      "serbian": "Čarobna",
      "russian": "волшебная",
      "example": "To je bila čarobna noć puna zvezda."
    },
    {
      "serbian": "Časopis",
      "russian": "журнал",
      "example": "Čitam ovaj časopis svaki mesec."
    },
    {
      "serbian": "Čačkati",
      "russian": "ковырять; копаться",
      "example": "Prestani da čačkaš nos!"
    },
    {
      "serbian": "Čeznem",
      "russian": "тоскую; скучаю",
      "example": "Čeznem za domom i porodicom."
    },
    {
      "serbian": "Činila",
      "russian": "делала; совершала",
      "example": "Ona je činila sve što je mogla da pomogne."
    },
    {
      "serbian": "Činilo se",
      "russian": "казалось",
      "example": "Činilo se da će padati kiša."
    },
    {
      "serbian": "Činjenica",
      "russian": "факт",
      "example": "To je neosporna činjenica."
    },
    {
      "serbian": "Članak",
      "russian": "статья; пункт; сустав",
      "example": "Pročitao sam zanimljiv članak u novinama."
    },
    {
      "serbian": "Čvrsto",
      "russian": "крепко; надёжно",
      "example": "Držao me je čvrsto za ruku."
    },
    {
      "serbian": "Ćorsokak",
      "russian": "тупик",
      "example": "Ušli smo u ćorsokak i morali smo da se vratimo."
    },
    {
      "serbian": "Dakle",
      "russian": "итак; следовательно",
      "example": "Dakle, odlučili smo da putujemo sutra."
    },
    {
      "serbian": "Dirnut",
      "russian": "тронутый",
      "example": "Bio sam dirnut njenim rečima."
    },
    {
      "serbian": "Dogodilo",
      "russian": "произошло",
      "example": "Šta se dogodilo sinoć?"
    },
    {
      "serbian": "Dubini",
      "russian": "в глубине",
      "example": "U dubini šume čuli smo čudne zvukove."
    },
    {
      "serbian": "Đurđevka",
      "russian": "ландыш",
      "example": "Đurđevke su procvetale u parku."
    },
    {
      "serbian": "Fini parkić",
      "russian": "милый скверик",
      "example": "Pronašli smo fini parkić sa klupicama i fontanom."
    },
    {
      "serbian": "Hodnik",
      "russian": "коридор",
      "example": "Njegova soba je na kraju hodnika."
    },
    {
      "serbian": "Hoćemo da uzmemo škampe?",
      "russian": "Возьмём креветки?",
      "example": "Hoćemo da uzmemo škampe ili radije ribu?"
    },
    {
      "serbian": "Hrišćanskim",
      "russian": "христианским",
      "example": "Venčali su se po hrišćanskim običajima."
    },
    {
      "serbian": "Ima prođu",
      "russian": "есть шанс",
      "example": "Ima prođu da dobijemo te karte za koncert."
    },
    {
      "serbian": "Ispita",
      "russian": "проверит; экзамена",
      "example": "Profesor će da ispita naše znanje sutra."
    },
    {
      "serbian": "Iznad",
      "russian": "над; выше",
      "example": "Ptice lete iznad grada."
    },
    {
      "serbian": "Iznenadi",
      "russian": "удивит",
      "example": "On će te sigurno iznenadi svojim talentom."
    },
    {
      "serbian": "Izostaviti",
      "russian": "исключить",
      "example": "Moram da izostavim taj deo iz priče."
    },
    {
      "serbian": "Izuzetak",
      "russian": "исключение",
      "example": "Ti si izuzetak od pravila."
    },
    {
      "serbian": "Izuzev",
      "russian": "кроме",
      "example": "Svi su došli, izuzev Marka."
    },
    {
      "serbian": "Izmaštati",
      "russian": "нафантазировать",
      "example": "Može da izmaštaš razne priče."
    },
    {
      "serbian": "Iščašen",
      "russian": "вывихнутый",
      "example": "Imam iščašen zglob posle pada."
    },
    {
      "serbian": "Jake zube",
      "russian": "крепкие зубы",
      "example": "Deda ima jake zube i dalje."
    },
    {
      "serbian": "Jakna",
      "russian": "куртка",
      "example": "Obukao sam toplu jaknu jer je hladno."
    },
    {
      "serbian": "Jeftina",
      "russian": "дешёвая",
      "example": "Ova knjiga je veoma jeftina."
    },
    {
      "serbian": "Kabanica",
      "russian": "дождевик",
      "example": "Ponesi kabanicu, pada kiša."
    },
    {
      "serbian": "Kozice",
      "russian": "креветки",
      "example": "Naručili smo salatu sa kozicama."
    },
    {
      "serbian": "Kroz",
      "russian": "через",
      "example": "Prošli smo kroz park do kuće."
    },
    {
      "serbian": "Lavirintu",
      "russian": "в лабиринте",
      "example": "Izgubili smo se u lavirintu ulica."
    },
    {
      "serbian": "Lepršali",
      "russian": "порхали",
      "example": "Leptiri su lepršali po bašti."
    },
    {
      "serbian": "Mada",
      "russian": "хотя",
      "example": "Mada je umoran, nastavio je da radi."
    },
    {
      "serbian": "Magacinu",
      "russian": "в складе",
      "example": "Sve kutije su u magacinu."
    },
    {
      "serbian": "Marila",
      "russian": "заботилась",
      "example": "Ona nije marila za tuđe mišljenje."
    },
    {
      "serbian": "Mesečevih mena",
      "russian": "лунных фаз",
      "example": "Proučavao je kalendar mesečevih mena."
    },
    {
      "serbian": "Misao",
      "russian": "мысль",
      "example": "Jedna misao mi je pala na pamet."
    },
    {
      "serbian": "Mirisu",
      "russian": "пахнут",
      "example": "Cveće mirisu divno."
    },
    {
      "serbian": "Maziti",
      "russian": "ласкать",
      "example": "Volim da mazim mačku."
    },
    {
      "serbian": "Na početku",
      "russian": "в начале",
      "example": "Na početku filma bilo je dosadno."
    },
    {
      "serbian": "Na zidu",
      "russian": "на стене",
      "example": "Slika visi na zidu."
    },
    {
      "serbian": "Na obranku",
      "russian": "на склоне",
      "example": "Kuća se nalazi na obranku brda."
    },
    {
      "serbian": "Nasamarila / Nasamario",
      "russian": "обманул(а)",
      "example": "On me je nasamario lažnim obećanjima."
    },
    {
      "serbian": "Nasumice",
      "russian": "наугад",
      "example": "Izabrao sam nasumice jednu kartu."
    },
    {
      "serbian": "Naznake",
      "russian": "признаки",
      "example": "Vidim naznake poboljšanja u njegovom ponašanju."
    },
    {
      "serbian": "Neočekivani spoj",
      "russian": "неожиданный союз",
      "example": "Njihov neočekivani spoj iznenadio je sve."
    },
    {
      "serbian": "Nisam odmah",
      "russian": "я не сразу",
      "example": "Nisam odmah shvatio šta si hteo da kažeš."
    },
    {
      "serbian": "Objedinjena naplata poreza",
      "russian": "объединённая уплата налога",
      "example": "Uveli su objedinjenu naplatu poreza za male preduzetnike."
    },
    {
      "serbian": "Održao",
      "russian": "провёл",
      "example": "Održao je predavanje o istoriji."
    },
    {
      "serbian": "Održao bukvicu",
      "russian": "устроил выговор",
      "example": "Šef mu je održao bukvicu zbog kašnjenja."
    },
    {
      "serbian": "Odletelo",
      "russian": "улетело",
      "example": "Pismo mi je odletelo iz ruke."
    },
    {
      "serbian": "Odjebnom",
      "russian": "резкий отказ (груб.)",
      "example": "Dobio je odjebnom odgovor."
    },
    {
      "serbian": "Odvojen račun",
      "russian": "отдельный счёт",
      "example": "Možemo li dobiti odvojen račun?"
    },
    {
      "serbian": "Omanja scena sala",
      "russian": "небольшой сценический зал",
      "example": "Predstava će biti u omanjoj sceni sale."
    },
    {
      "serbian": "Oprezno",
      "russian": "осторожно",
      "example": "Oprezno prelazi ulicu!"
    },
    {
      "serbian": "Opčinila",
      "russian": "очаровала",
      "example": "Ona ga je opčinila svojom lepotom."
    },
    {
      "serbian": "Osećaj",
      "russian": "чувство",
      "example": "Imam čudan osećaj da nešto nije u redu."
    },
    {
      "serbian": "Osim",
      "russian": "кроме",
      "example": "Svi su stigli, osim Ane."
    },
    {
      "serbian": "Osvestio",
      "russian": "осознал",
      "example": "Tek tada je osvestio svoju grešku."
    },
    {
      "serbian": "Otkucaji srca",
      "russian": "сердцебиение",
      "example": "Čujem otkucaje srca kada je blizu."
    },
    {
      "serbian": "Otme uzvik",
      "russian": "вырвет возглас",
      "example": "Izneneđenje će mu otmeti uzvik."
    },
    {
      "serbian": "Otprilike",
      "russian": "примерно",
      "example": "Traje otprilike dva sata."
    },
    {
      "serbian": "Otišavši",
      "russian": "уйдя",
      "example": "Otišavši od kuće, zaboravio je ključeve."
    },
    {
      "serbian": "Paklu",
      "russian": "аду",
      "example": "U tom ratu ljudi su živeli u paklu."
    },
    {
      "serbian": "Peo sam",
      "russian": "я поднимался",
      "example": "Peo sam se uz stepenice tri sata."
    },
    {
      "serbian": "Pločnik",
      "russian": "тротуар",
      "example": "Hodali smo po pločniku pored reke."
    },
    {
      "serbian": "Ploča",
      "russian": "плита; доска",
      "example": "Na ploči je ispisano ime pesnika."
    },
    {
      "serbian": "Početak",
      "russian": "начало",
      "example": "Ovo je samo početak našeg putovanja."
    },
    {
      "serbian": "Pozivnici",
      "russian": "приглашения",
      "example": "Poslali smo pozivnice svim gostima."
    },
    {
      "serbian": "Prilika",
      "russian": "возможность",
      "example": "Ovo je odlična prilika za tebe."
    },
    {
      "serbian": "Pretpostavci",
      "russian": "предположения",
      "example": "Tvoji pretpostavci su bili tačni."
    },
    {
      "serbian": "Predosećaj",
      "russian": "предчувствие",
      "example": "Imam predosećaj da će se nešto lepo dogoditi."
    },
    {
      "serbian": "Pronaći",
      "russian": "найти",
      "example": "Moram da pronađem svoje naočare."
    },
    {
      "serbian": "Procenim",
      "russian": "оценю",
      "example": "Procenim da će to koštati oko hiljadu dinara."
    },
    {
      "serbian": "Proseku",
      "russian": "в среднем",
      "example": "U proseku spava sedam sati dnevno."
    },
    {
      "serbian": "Pružio",
      "russian": "протянул",
      "example": "Pružio mi je ruku za pozdrav."
    },
    {
      "serbian": "Radoznalost",
      "russian": "любопытство",
      "example": "Njegova radoznalost ga je dovela do otkrića."
    },
    {
      "serbian": "Razdragane",
      "russian": "радостные",
      "example": "Deca su bila razdragane kada su videla poklone."
    },
    {
      "serbian": "Razlozi / Razloga",
      "russian": "причины",
      "example": "Ima mnogo razloga da ostaneš."
    },
    {
      "serbian": "Razredni starešina",
      "russian": "классный руководитель",
      "example": "Razredni starešina je organizovao izlet."
    },
    {
      "serbian": "Razvlači",
      "russian": "растягивает",
      "example": "Ne razvlači priču, dođi na poentu."
    },
    {
      "serbian": "Rezervisati sto",
      "russian": "забронировать столик",
      "example": "Treba da rezervišemo sto za večeras."
    },
    {
      "serbian": "Sav",
      "russian": "весь",
      "example": "Sav grad je govorio o tome."
    },
    {
      "serbian": "Sedište",
      "russian": "сиденье",
      "example": "Rezervisao sam sedište pored prozora."
    },
    {
      "serbian": "Sijaset",
      "russian": "множество",
      "example": "Ima sijaset razloga da posetimo taj grad."
    },
    {
      "serbian": "Sinulo",
      "russian": "осенило",
      "example": "Odjednom mi je sinulo rešenje problema."
    },
    {
      "serbian": "Sinoć",
      "russian": "вчера вечером",
      "example": "Sinoć sam gledao zanimljiv film."
    },
    {
      "serbian": "Spušta",
      "russian": "опускает",
      "example": "Sunce polako spušta se iza horizonta."
    },
    {
      "serbian": "Stav",
      "russian": "позиция",
      "example": "Njegov stav prema ovom pitanju je jasan."
    },
    {
      "serbian": "Stoji",
      "russian": "стоит",
      "example": "Koliko stoji ova knjiga?"
    },
    {
      "serbian": "Stvarno",
      "russian": "действительно",
      "example": "Stvarno mi je žao što ne mogu doći."
    },
    {
      "serbian": "Strmim",
      "russian": "крутым",
      "example": "Penjali smo se strmim putem."
    },
    {
      "serbian": "Susreo",
      "russian": "встретил",
      "example": "Slučajno sam susreo starog prijatelja."
    },
    {
      "serbian": "Suprotno",
      "russian": "наоборот",
      "example": "Nije tačno, suprotno je istina."
    },
    {
      "serbian": "Suvi hidrozatvor",
      "russian": "сухой гидрозатвор",
      "example": "Problem je bio u suvom hidrozatvoru u kupatilu."
    },
    {
      "serbian": "Sve što može da se uzme na akciji",
      "russian": "всё что можно взять по акции",
      "example": "Kupili smo sve što može da se uzme na akciji u prodavnici."
    },
    {
      "serbian": "Tapete",
      "russian": "обои",
      "example": "Stare tapete su bile prljave i otpale."
    },
    {
      "serbian": "Tanušna",
      "russian": "тонкая",
      "example": "Oblačila je tanušnu haljinu."
    },
    {
      "serbian": "Tetreb",
      "russian": "тетерев",
      "example": "U šumi smo videli tetreba."
    },
    {
      "serbian": "Trećem",
      "russian": "третьему",
      "example": "Stanujemo na trećem spratu."
    },
    {
      "serbian": "U tišini obavlja",
      "russian": "в тишине выполняет",
      "example": "U tišini obavlja svoj posao bez prigovora."
    },
    {
      "serbian": "Uprkos",
      "russian": "несмотря на",
      "example": "Uprkos kiši, izašli smo u šetnju."
    },
    {
      "serbian": "Uzbrdo",
      "russian": "в гору",
      "example": "Vozili smo se uzbrdo ceo dan."
    },
    {
      "serbian": "Uzgred",
      "russian": "кстати",
      "example": "Uzgred, jesi li čuo za tu vest?"
    },
    {
      "serbian": "Uzani",
      "russian": "узкий",
      "example": "Prolazili smo kroz uzani prolaz."
    },
    {
      "serbian": "Većinom",
      "russian": "в основном",
      "example": "Većinom jedem kod kuće."
    },
    {
      "serbian": "Vezi",
      "russian": "связи; свяжи",
      "example": "Ima dobre vezi u industriji."
    },
    {
      "serbian": "Vijugavim",
      "russian": "извилистым",
      "example": "Išli smo vijugavim putem kroz šumu."
    },
    {
      "serbian": "Vlasništvo",
      "russian": "собственность",
      "example": "To je privatno vlasništvo."
    },
    {
      "serbian": "Zagrli",
      "russian": "обними",
      "example": "Zagrli me jako!"
    },
    {
      "serbian": "Zahvalim",
      "russian": "поблагодарю",
      "example": "Moram da se zahvalim na pomoći."
    },
    {
      "serbian": "Zamišljaj",
      "russian": "представляй",
      "example": "Zamišljaj kakav će to biti dan!"
    },
    {
      "serbian": "Zauzimao",
      "russian": "занимал",
      "example": "On je zauzimao važnu poziciju u kompaniji."
    },
    {
      "serbian": "Zbirka",
      "russian": "сборник",
      "example": "Kupio sam zbirku pesama tog autora."
    },
    {
      "serbian": "Zbunim",
      "russian": "запутаю",
      "example": "Ako ti kažem sve odjednom, zbunim te."
    },
    {
      "serbian": "Zidu",
      "russian": "стене",
      "example": "Slika visi na tom zidu."
    },
    {
      "serbian": "Zloslutni predosećaj",
      "russian": "зловещее предчувствие",
      "example": "Imao je zloslutni predosećaj da nešto nije u redu."
    },
    {
      "serbian": "Žuri",
      "russian": "спешит",
      "example": "Ne žuri, imamo vremena."
    },
    {
      "serbian": "Živom",
      "russian": "живым",
      "example": "Našli su ga živom i zdravim."
    },
    {
      "serbian": "Žicom",
      "russian": "проволокой",
      "example": "Povezao je kutije žicom."
    }
  ]
};
