const sw = require('../lib/stopword.js')
const test = require('tape')


test('remove stopwords, default to english and preserve case', function (t) {
  t.plan(1)
  const oldString = 'a really Interesting string with some words'.split(' ')
  const newString = sw.removeStopwords(oldString)
  t.looseEqual(newString, ['really', 'Interesting', 'string', 'words'])
})

test('throw an error if specified language is not supported', function (t) {
  t.throws(function () {
    t.plan(1)
    sw.getStopwords('xx')
  })
})

test('remove custom stopwords', function (t) {
  t.plan(1)
  const oldString = 'a really interesting string with some words'.split(' ')
  const newString = sw.removeStopwords(oldString, ['interesting'])
  t.looseEqual(newString, ['a', 'really', 'string', 'with', 'some', 'words'])
})

test('not remove any stopwords', function (t) {
  t.plan(1)
  const oldString = 'a really interesting string with some words'.split(' ')
  const newString = sw.removeStopwords(oldString, [])
  t.looseEqual(newString, ['a', 'really', 'interesting', 'string', 'with', 'some', 'words'])
})

test('remove stopwords that have a non standard separator', function (t) {
  t.plan(1)
  const oldString = 'a.really,interesting string.with,some.words'.split(/[\\., ]+/)
  const newString = sw.removeStopwords(oldString)
  t.looseEqual(newString, ['really', 'interesting', 'string', 'words'])
})

test('specify a custom input separator', function (t) {
  t.plan(1)
  const oldString = 'a-really-interesting-string-with-some words'.split('-')
  const newString = sw.removeStopwords(oldString)
  t.looseEqual(newString, ['really', 'interesting', 'string', 'some words'])
})

test('remove norwegian stopwords', function (t) {
  t.plan(1)
  const oldString = 'dette er en tekst som har norske tegn øæåø øæåø æææ'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.no)
  t.looseEqual(newString, ['tekst', 'norske', 'tegn', 'øæåø', 'øæåø', 'æææ'])
})

test('should remove swedish stopwords and preserve case', function (t) {
  t.plan(1)
  const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.sv)
  t.looseEqual(newString, ['Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö'])
})

test('remove danish stopwords', function (t) {
  t.plan(1)
  const oldString = 'gæsterne i musikhuset i aarhus bør fremover sende en venlig tanke til den afdøde købmand herman salling når de skal til koncert eller se teater i det aarhusianske kulturhus æøå'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.da)
  t.looseEqual(newString, ['gæsterne', 'musikhuset', 'aarhus', 'bør', 'fremover', 'sende', 'venlig', 'tanke', 'afdøde', 'købmand', 'herman', 'salling', 'koncert', 'teater', 'aarhusianske', 'kulturhus', 'æøå'])
})

test('remove hindu stopwords', function (t) {
  t.plan(1)
  const oldString = 'केंद्र सरकार पर्यावरण के माकूल घरों ग्रीन होम्स को बढ़ावा देने की दिशा में गंभीरता से सोच रही है। ग्रीन हाउसिंग सोसायटी डिवेलप करने के लिए सरकार सस्ते लोन'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.hi)
  t.looseEqual(newString, ['केंद्र', 'सरकार', 'पर्यावरण', 'माकूल', 'घरों', 'ग्रीन', 'होम्स', 'बढ़ावा', 'देने', 'दिशा', 'गंभीरता', 'सोच', 'रही', 'है।', 'ग्रीन', 'हाउसिंग', 'सोसायटी', 'डिवेलप', 'सरकार', 'सस्ते', 'लोन'])
})

test('remove spanish stopwords', function (t) {
  t.plan(1)
  const oldString = 'los investigadores han analizado el adn de los restos de unos 200 gatos tomados de momias egipcias yacimientos vikingos y cuevas de la edad de piedra entre otros lugares variopintos'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.es)
  t.looseEqual(newString, ['investigadores', 'han', 'analizado', 'adn', 'restos', 'unos', '200', 'gatos', 'tomados', 'momias', 'egipcias', 'yacimientos', 'vikingos', 'cuevas', 'edad', 'piedra', 'entre', 'otros', 'lugares', 'variopintos'])
})

test('remove japanese stopwords after being tokenised', function (t) {
  // Text is first tokenized/split into words with: http://chasen.org/%7Etaku/software/TinySegmenter/
  t.plan(1)
  const oldString = '今 回作っ た リスト で は 校正 待ち と なっ て いる 作品 を 抽出 し 作者 や 作品 名 で の 検索 の ほか 作品 の 長さ さまざまな 理由 で 機械 的 に 処理 でき なかっ た もの は に なっ て しまっ て い ます が やいつ から 校正 待ち に なっ て いる か で 並べ替え が できる よう に し まし た'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.ja)
  t.looseEqual(newString, ['今', '回作っ', 'リスト', '校正', '待ち', '作品', '抽出', '作者', '作品', '名', '検索', '作品', '長さ', 'さまざまな', '理由', '機械', '的', '処理', 'しまっ', 'やいつ', '校正', '待ち', '並べ替え', 'まし'])
})

test('remove french stopwords', function (t) {
  t.plan(1)
  const oldString = 'personne à commencer par theresa may n’aurait jamais imaginé une atmosphère aussi plombée un accablement collectif aussi manifeste pour ce qui devait être un jour de gloire'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.fr)
  t.looseEqual(newString, ['personne', 'commencer', 'theresa', 'may', 'n’aurait', 'jamais', 'imaginé', 'atmosphère', 'aussi', 'plombée', 'accablement', 'collectif', 'aussi', 'manifeste', 'devait', 'jour', 'gloire'])
})

test('remove italian stopwords', function (t) {
  t.plan(1)
  const oldString = 'la distruzione del califfato è ancora in corso ma già si è aperta la nuova fase nel duello fra stati uniti e russia in medio oriente'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.it)
  t.looseEqual(newString, ['distruzione', 'califfato', 'ancora', 'corso', 'già', 'aperta', 'nuova', 'fase', 'duello', 'fra', 'stati', 'uniti', 'russia', 'medio', 'oriente'])
})

test('remove dutch stopwords', function (t) {
  t.plan(1)
  const oldString = 'ludovici denkt dat het best kan werken als de gemeente werkloze jongeren aan hen koppelt natuurlijk kunnen ze ook rechtstreeks bij ons aankloppen aldus ludovici'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.nl)
  t.looseEqual(newString, ['ludovici', 'denkt', 'best', 'werken', 'gemeente', 'werkloze', 'jongeren', 'hen', 'koppelt', 'natuurlijk', 'rechtstreeks', 'aankloppen', 'aldus', 'ludovici'])
})

test('remove polish stopwords', function (t) {
  t.plan(1)
  const oldString = 'obecnie zatrzymali już sprzedawcę dopalaczy niespełna letniego chłopaka który usłyszy zarzuty sprzedaży nielegalnych substancji a tym samym narażania życia i zdrowia pokrzywdzonych w tej sprawie jest osób'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.pl)
  t.looseEqual(newString, ['obecnie', 'zatrzymali', 'sprzedawcę', 'dopalaczy', 'niespełna', 'letniego', 'chłopaka', 'usłyszy', 'zarzuty', 'sprzedaży', 'nielegalnych', 'substancji', 'samym', 'narażania', 'życia', 'zdrowia', 'pokrzywdzonych', 'sprawie', 'osób'])
})

test('remove portuguese stopwords', function (t) {
  t.plan(1)
  const oldString = 'já são conhecidas as identidades de algumas das vítimas do incêndio de pedrógão grande em leiria que matou pessoas esta segunda-feira a embaixada de frança divulgou um comunicado onde confirma que um cidadão francês morreu no fogo de pedrógão'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.pt)
  t.looseEqual(newString, ['são', 'conhecidas', 'identidades', 'algumas', 'vítimas', 'incêndio', 'pedrógão', 'grande', 'leiria', 'matou', 'pessoas', 'segunda-feira', 'embaixada', 'frança', 'divulgou', 'comunicado', 'onde', 'confirma', 'cidadão', 'francês', 'morreu', 'fogo', 'pedrógão'])
})

test('remove russian stopwords', function (t) {
  t.plan(1)
  const oldString = 'вопрос троллейбуса не имеет отношения ни к политике ни к чьим-то вкусам уверен директор института экономики транспорта и транспортной политики михаил блинкин есть две большие линии по которым развивается общественный наземный транспорт городов мира рельсы и колеса по первой линии мы преуспели здесь идет мощное развитие достаточно вспомнить трамвай если говорить о второй группе то у нас самый молодой парк автобусов в европе но троллейбусы уходящий вид'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.ru)
  t.looseEqual(newString, ['вопрос', 'троллейбуса', 'имеет', 'отношения', 'политике', 'чьим-то', 'вкусам', 'уверен', 'директор', 'института', 'экономики', 'транспорта', 'транспортной', 'политики', 'михаил', 'блинкин', 'две', 'большие', 'линии', 'которым', 'развивается', 'общественный', 'наземный', 'транспорт', 'городов', 'мира', 'рельсы', 'колеса', 'первой', 'линии', 'преуспели', 'здесь', 'идет', 'мощное', 'развитие', 'достаточно', 'вспомнить', 'трамвай', 'говорить', 'второй', 'группе', 'самый', 'молодой', 'парк', 'автобусов', 'европе', 'троллейбусы', 'уходящий', 'вид'])
})

test('remove chinese simplified stopwords', function (t) {
  // Text is first tokenized/split into words with: https://github.com/yishn/chinese-tokenizer
  t.plan(1)
  const oldString = '起火 森林 位于 葡萄牙 中部 大 佩 德 罗 冈 市 火灾 发生 在 当地时间 日 时 左右 火势 迅速 向 四周 蔓延 酿成 重大 火灾 夜 之间 在 全国 范围 内 发生 了 大约 起 森林 大火 据 葡萄牙 新闻 报 报道 火灾 已 蔓延 至 莱 里 亚 大 区 的 多个 城镇 围绕 火 源 四 个 方向 的 火势 均 未 得到 控制 其中 有 两面 的 火 情 十分 严峻 伤亡 人数 很 可能 继续 增加'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.zh)
  t.looseEqual(newString, ['起火', '森林', '位于', '葡萄牙', '中部', '大', '佩', '德', '罗', '冈', '市', '火灾', '发生', '当地时间', '左右', '火势', '迅速', '四周', '蔓延', '酿成', '重大', '火灾', '夜', '之间', '全国', '范围', '内', '发生', '大约', '起', '森林', '大火', '据', '葡萄牙', '新闻', '报', '报道', '火灾', '蔓延', '至', '莱', '里', '亚', '大', '区', '多个', '城镇', '围绕', '火', '源', '四', '方向', '火势', '均', '未', '得到', '控制', '其中', '两面', '火', '情', '十分', '严峻', '伤亡', '人数', '可能', '继续', '增加'])
})

test('remove bengali stopwords', function (t) {
  t.plan(1)
  const oldString = 'দক্ষিণ এশিয়ার দেশগুলোতে বিদ্যুৎ সরবরাহ বাড়াতে একযোগে কাজ করবে বাংলাদেশ ভারত ও ভুটান জনগণের বিদ্যুৎ চাহিদা মেটাতে ত্রিদেশীয় উদ্যোগের অংশ হিসেবেই এ পদক্ষেপ নেওয়া হচ্ছে এর ফলে বিদ্যুৎ খাতে দক্ষিণ এশিয়ার দেশগুলোতে বিদ্যমান সহযোগিতা একটি নতুন স্তরে উন্নীত হবে এক্ষেত্রে চতুর্থ দেশ হিসেবে এ অঞ্চলের আরেক দেশ নেপালকেও প্রকল্পের অংশীদার করার চেষ্টা চালিয়ে যাবে ঢাকা ও দিল্লি'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.bn)
  t.looseEqual(newString, ['দক্ষিণ', 'এশিয়ার', 'দেশগুলোতে', 'বিদ্যুৎ', 'সরবরাহ', 'বাড়াতে', 'একযোগে', 'বাংলাদেশ', 'ভারত', 'ভুটান', 'জনগণের', 'বিদ্যুৎ', 'চাহিদা', 'মেটাতে', 'ত্রিদেশীয়', 'উদ্যোগের', 'অংশ', 'হিসেবেই', 'পদক্ষেপ', 'বিদ্যুৎ', 'খাতে', 'দক্ষিণ', 'এশিয়ার', 'দেশগুলোতে', 'বিদ্যমান', 'সহযোগিতা', 'স্তরে', 'উন্নীত', 'এক্ষেত্রে', 'চতুর্থ', 'দেশ', 'হিসেবে', 'অঞ্চলের', 'আরেক', 'দেশ', 'নেপালকেও', 'প্রকল্পের', 'অংশীদার', 'চালিয়ে', 'ঢাকা', 'দিল্লি'])
})

test('remove german stopwords', function (t) {
  t.plan(1)
  const oldString = 'In diesem Sommer wird die asymmetrische Demobilisierung nicht mehr gelingen prophezeit Heil Die Menschen wollten Orientierung Angela Merkel hat ihre Partei zu einer One-Woman-Show gemacht die ist unter ihr konzept- und ideenlos geworden Das gelte für die großen Fragen Europas ebenso wie für die Rentenpolitik Zu keiner der großen Fragen hat Angela Merkel eine Antwort nicht zur Flüchtlingskrise nicht zur Bedrohung die Donald Trump darstellt klagte der SPD-Politiker'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.de)
  t.looseEqual(newString, ['Sommer', 'asymmetrische', 'Demobilisierung', 'gelingen', 'prophezeit', 'Heil', 'Orientierung', 'Angela', 'Merkel', 'Partei', 'One-Woman-Show', 'konzept-', 'ideenlos', 'gelte', 'Fragen', 'Europas', 'Rentenpolitik', 'Fragen', 'Angela', 'Merkel', 'Antwort', 'Flüchtlingskrise', 'Bedrohung', 'Donald', 'Trump', 'darstellt', 'klagte', 'SPD-Politiker'])
})

test('remove brazilian portuguese stopwords', function (t) {
  t.plan(1)
  const oldString = 'agora já são conhecidas as identidades de algumas das vítimas do incêndio de pedrógão grande em leiria que matou pessoas esta segunda-feira a embaixada de frança divulgou um comunicado onde confirma que um cidadão francês morreu no fogo de pedrógão'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.ptbr)
  t.looseEqual(newString, ['conhecidas' , 'identidades' , 'vítimas' , 'incêndio' , 'pedrógão' , 'leiria' , 'matou' , 'pessoas' , 'segunda-feira' , 'embaixada' , 'frança' , 'divulgou' , 'comunicado' , 'confirma' , 'cidadão' , 'francês' , 'morreu' , 'fogo' , 'pedrógão'])
})

test('remove punjabi gurmukhi stopwords', function (t) {
  t.plan(1)
  const oldString = 'ਅਫਗਾਨੀਸਤਾਨ ਦੇ ਲਈ ਇੰਟਰਨੈੱਟ ਦਾ ਟਾੱਪ-ਲੈੱਵਲ ਡੋਮੇਨ ਦੇਸ਼ ਕੋਡ ਹੈ ਇਹ ਡੋਮੇਨ ਏ ਐਫ ਜੀ ਐਨ ਆਈ ਸੀ ਦੇ ਦੁਆਰਾ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ, ਜੋ ਅਫਗਾਨੀ ਸਰਕਾਰ ਅਤੇ ਯੂਨਾਈਟਡ ਨੇਸ਼ਨਜ਼ ਦੇ ਥੱਲੇ ਆਂਦਾ ਹੈ'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.pa)
  t.looseEqual(newString, ['ਅਫਗਾਨੀਸਤਾਨ', 'ਇੰਟਰਨੈੱਟ', 'ਟਾੱਪ-ਲੈੱਵਲ', 'ਡੋਮੇਨ', 'ਕੋਡ', 'ਡੋਮੇਨ', 'ਐਫ', 'ਐਨ', 'ਚਲਾਇਆ', 'ਹੈ,', 'ਅਫਗਾਨੀ', 'ਯੂਨਾਈਟਡ', 'ਨੇਸ਼ਨਜ਼', 'ਥੱਲੇ', 'ਆਂਦਾ'])
})

test('remove myanmar stopwords', function (t) {
  // Myanmar stopwords not working, possibly because of lacking tokenization?
  t.plan(1)
  const oldString = ''.split(' ')
  const newString = sw.removeStopwords(oldString, sw.my)
  t.looseEqual(newString, [''])
})

test('remove swahili stopwords', function (t) {
  t.plan(1)
  const oldString = 'kila mtu anaweza kuhariri makala yoyote kutoa makosa ya lugha kutohoa maneno na kuendeleza na kukuza makala kwa kuandika kwa ufupi au kwa urefu'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.sw)
  t.looseEqual(newString, ['mtu', 'anaweza', 'kuhariri', 'makala', 'yoyote', 'makosa', 'lugha', 'kutohoa', 'maneno', 'kuendeleza', 'kukuza', 'makala', 'kuandika', 'ufupi', 'urefu'])
})

test('remove finnish stopwords', function (t) {
  t.plan(1)
  const oldString = 'vuonna 1502 kristoffer kolumbus saapui hondurasin rannikolle ja antoi sille sen nykyisen nimen'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.fi)
  t.looseEqual(newString, ['1502', 'kristoffer', 'kolumbus', 'saapui', 'hondurasin', 'rannikolle', 'antoi', 'sille', 'nykyisen', 'nimen'])
})

test('remove yoruba stopwords', function (t) {
  t.plan(1)
  const oldString = 'jẹ́ ẹ̀gbà ọrùn tí wọ́n gbẹ́ lére tí ó sì jẹ́ àwòrán akọni obìrin tí a mọ̀ si ìyá wa olorì idia ti ọ̀rundún mẹ́rìndínlógún ṣẹ́yìn'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.yo)
  t.looseEqual(newString, ['ẹ̀gbà', 'ọrùn', 'gbẹ́', 'lére', 'àwòrán', 'akọni', 'obìrin', 'mọ̀', 'si', 'ìyá', 'wa', 'olorì', 'idia', 'ọ̀rundún', 'mẹ́rìndínlógún', 'ṣẹ́yìn'])
})

test('remove zulu stopwords', function (t) {
  t.plan(1)
  const oldString = 'ukhisimusi isikhathi esiletha injabulo kubantu abaningi emhlabeni jikelele lesi sikhathi senza ukuba kube khona ukuhlangana nemindeni okudala yagcinana kuhlalwe kuphunyulwe futhi kuncokolwe'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.zu)
  t.looseEqual(newString, ['ukhisimusi', 'isikhathi', 'esiletha', 'injabulo', 'kubantu', 'abaningi', 'emhlabeni', 'jikelele', 'lesi', 'sikhathi', 'senza', 'kube', 'ukuhlangana', 'nemindeni', 'okudala', 'yagcinana', 'kuhlalwe', 'kuphunyulwe', 'kuncokolwe'])
})

test('remove sotho stopwords', function (t) {
  t.plan(1)
  const oldString = 'ke boloetse ba batho bo bokwang ke kokwanahloko ya ebola matshwao hantlentle a qala matsatsi a mabedi ho isa ho a mararo ka mora ho tshwaetswa ke kokwanahloko'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.st)
  t.looseEqual(newString, ['boloetse', 'batho', 'bo', 'bokwang', 'kokwanahloko', 'ya', 'ebola', 'matshwao', 'hantlentle', 'qala', 'matsatsi', 'mabedi', 'isa', 'mararo', 'mora', 'tshwaetswa', 'kokwanahloko'])
})

test('remove somali stopwords', function (t) {
  t.plan(1)
  const oldString = 'isku celcelis qaarada antarktika waa tan ugu qaboow qalalsan ee ugu dabaysha badan qaaradaha caalamka oo dhan'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.so)
  t.looseEqual(newString, ['celcelis', 'qaarada', 'antarktika', 'tan', 'qaboow', 'qalalsan', 'ee', 'dabaysha', 'badan', 'qaaradaha', 'caalamka'])
})

test('remove vietnamese stopwords', function (t) {
  t.plan(1)
  const oldString = 'Đà Lạt luôn hiện lên như một thành phố nghỉ dưỡng miền núi kiểu mẫu với cảnh quan thiên nhiên tươi đẹp'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.vi)
  t.looseEqual(newString, ['Đà', 'Lạt', 'luôn', 'hiện', 'một', 'thành', 'phố', 'nghỉ', 'dưỡng', 'miền', 'núi', 'kiểu', 'mẫu', 'cảnh', 'quan', 'thiên', 'nhiên', 'tươi', 'đẹp'])
})

test('remove lugbara (without diacritics) stopwords', function (t) {
  t.plan(1)
  const oldString = 'ri kome izu ni ma dria ri enya nya kabele izu ni si ku I vile akuri ra mu a\'a oce ambu ni ma talaa a\'a di idri ru eli izu'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.lgg)
  t.looseEqual(newString, ['kome', 'izu', 'enya', 'nya', 'kabele', 'izu', 'akuri', 'a\'a', 'oce', 'ambu', 'talaa', 'a\'a', 'idri', 'eli', 'izu'])
})

test('remove lugbara official (with diacritics) stopwords', function (t) {
  t.plan(1)
  const oldString = 'rɨ kómé èzʉ́ ni mà drìá, rɨ nyaká nyá kà\'bèlé èzʉ́ nɨ sɨ ̀ Kʉ \'ɨ ́ vɨ ́lé àkú rɨ ̀ rá mu a\'á òce àzɨ ́ àmbú nɨ mà táláá a\'á élɨ ́ èzʉ́'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.lggo)
  t.looseEqual(newString, ['kómé', 'èzʉ́', 'ni', 'drìá,', 'nyaká', 'nyá', 'kà\'bèlé', 'èzʉ́', '\'ɨ', '́lé', 'àkú', 'mu', 'a\'á', 'òce', 'àmbú', 'táláá', 'a\'á', 'élɨ', 'èzʉ́'])
})

test('remove hausa stopwords', function (t) {
  t.plan(1)
  const oldString = 'zaku iya rubutawa da ingantawa ko kuma ƙirƙiran sabbin muƙaloli kamar yadda kuke gani dan taimako wurin rubuta kundin Ilimi na Insakulofidiya wadda ke taskance ilimi dan masu karatu da yin bincike a harshen Hausa'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.ha)
  t.looseEqual(newString, ['zaku', 'iya', 'rubutawa', 'ingantawa', 'ƙirƙiran', 'sabbin', 'muƙaloli', 'kamar', 'yadda', 'kuke', 'gani', 'dan', 'taimako', 'wurin', 'rubuta', 'kundin', 'Ilimi', 'Insakulofidiya', 'wadda', 'ke', 'taskance', 'ilimi', 'dan', 'masu', 'karatu', 'yin', 'bincike', 'harshen', 'Hausa'])
})

test('remove afrikaans stopwords', function (t) {
  t.plan(1)
  const oldString = 'alhoewel die oop see sowat een uur per motor van Bremen af lê is die getye op die Weserrivier twee keer per dag duidelik waarneembaar'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.af)
  t.looseEqual(newString, ['alhoewel', 'oop', 'see', 'sowat', 'uur', 'per', 'motor', 'Bremen', 'af', 'lê', 'getye', 'Weserrivier', 'twee', 'keer', 'per', 'dag', 'duidelik', 'waarneembaar'])
})

test('remove indonesian stopwords', function (t) {
  t.plan(1)
  const oldString = 'seorang anak perempuan di Bantul Yogyakarta sedang memasak nasi dengan bantuan tungku'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.id)
  t.looseEqual(newString, ['anak', 'perempuan', 'Bantul', 'Yogyakarta', 'memasak', 'nasi', 'bantuan', 'tungku'])
})

test('remove armenian stopwords', function (t) {
  t.plan(1)
  const oldString = 'Հայաստանի Հանրապետությունը ԱՀԿ անդամ է 1994 թվականի օգոստոսից և այդ ժամանակից էլ Հայաստանում ստեղծվել է ԱՀԿ-յան ներկայացուցչություն'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.hy)
  t.looseEqual(newString, ['Հայաստանի', 'Հանրապետությունը', 'ԱՀԿ', 'անդամ', '1994', 'թվականի', 'օգոստոսից', 'ժամանակից', 'էլ', 'Հայաստանում', 'ստեղծվել', 'ԱՀԿ-յան', 'ներկայացուցչություն'])
})

test('remove basque stopwords', function (t) {
  t.plan(1)
  const oldString = 'Garaipenek eta horien aberastasunek aldaketa sakonak eragin zituzten Erromako gizartean barnan Noblezia aberastu zen probintzien lepotik Soldadu xumeek ordea urte asko eman behar izaten zuten etxetik kanpoko borroketan'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.eu)
  t.looseEqual(newString, ['Garaipenek', 'horien', 'aberastasunek', 'aldaketa', 'sakonak', 'eragin', 'zituzten', 'Erromako', 'gizartean', 'barnan', 'Noblezia', 'aberastu', 'probintzien', 'lepotik', 'Soldadu', 'xumeek', 'ordea', 'urte', 'eman', 'behar', 'izaten', 'etxetik', 'kanpoko', 'borroketan'])
})

test('remove breton stopwords', function (t) {
  t.plan(1)
  const oldString = 'gallout a ra pep hini ac’hanomp klask sevel ar pennadoù a vank dimp mankout a ra dimp ivez pennadoù hir n\'hon eus nemet 24 evit ar mare'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.br)
  t.looseEqual(newString, ['gallout', 'ra', 'pep', 'hini', 'ac’hanomp', 'klask', 'sevel', 'ar', 'pennadoù', 'vank', 'dimp', 'mankout', 'ra', 'dimp', 'ivez', 'pennadoù', 'hir', 'n\'hon', 'eus', 'nemet', '24', 'evit', 'ar', 'mare'])
})

test('remove bulgarian stopwords', function (t) {
  t.plan(1)
  const oldString = 'когато генерал Жуков е назначен за командир на Киевския военен окръг в Украйна Баграмян му пише писмо в което го моли да бъде назначен под неговото командване'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.bg)
  t.looseEqual(newString, ['генерал', 'Жуков', 'назначен', 'командир', 'Киевския', 'военен', 'окръг', 'Украйна', 'Баграмян', 'пише', 'писмо', 'моли', 'назначен', 'неговото', 'командване'])
})

// Right to Left languages
test('remove arabic stopwords', function (t) {
  t.plan(1)
  const oldString = 'ورغم أن الحملة توقفت بقينا نتسلق سلّم الأمل نظن أن الحكومة تسبقنا نحو القمة لكننا صعقنا بتوقف الحملة عند أسماء بعينها وكأن الفساد اقتصر على شفيق جراية ومن معه من مهربين؛ لكن الأفظع هو أن ملف شفيق جراية ليس ملف فساد بل ملف تآمر وهو ما يعني أنّ الحكومة غالطت الجميع وجندت التونسيين لحرب واهية تجاهلت فيها الفساد الحقيقي الذي ظهر على شخصيات كثيرة في مقدمتها الأمين العام لحركة مشروع تونس محسن مرزوق'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.ar)
  t.looseEqual(newString, ['ورغم', 'الحملة', 'توقفت', 'بقينا', 'نتسلق', 'سلّم', 'الأمل', 'نظن', 'الحكومة', 'تسبقنا', 'القمة', 'لكننا', 'صعقنا', 'بتوقف', 'الحملة', 'أسماء', 'بعينها', 'وكأن', 'الفساد', 'اقتصر', 'شفيق', 'جراية', 'معه', 'مهربين؛', 'الأفظع', 'ملف', 'شفيق', 'جراية', 'ليس', 'ملف', 'فساد', 'ملف', 'تآمر', 'يعني', 'أنّ', 'الحكومة', 'غالطت', 'الجميع', 'وجندت', 'التونسيين', 'لحرب', 'واهية', 'تجاهلت', 'الفساد', 'الحقيقي', 'ظهر', 'شخصيات', 'كثيرة', 'مقدمتها', 'الأمين', 'العام', 'لحركة', 'مشروع', 'تونس', 'محسن', 'مرزوق'])
})

test('remove farsi stopwords and preserve case', function (t) {
  t.plan(1)
  const oldString = 'در این بیانیه آمده است که اتو قادر به صحبت کردن، قادر به دیدن و قادر به عکس العمل نشان دادن به درخواست های شفاهی نبود'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.fa)
  t.looseEqual(newString, ['در', 'این', 'بیانیه', 'آمده', 'است', 'که', 'اتو', 'قادر', 'به', 'صحبت', 'کردن،', 'قادر', 'به', 'دیدن', 'قادر', 'به', 'عکس', 'العمل', 'نشان', 'دادن', 'به', 'درخواست', 'های', 'شفاهی', 'نبود'])
})

test('remove hebrew stopwords and preserve case', function (t) {
  t.plan(1)
  const oldString = 'אז מה קורה חברים אני מחר הולך לטייל בבוקר'.split(' ')
  const newString = sw.removeStopwords(oldString, sw.he)
  t.looseEqual(newString, ['קורה', 'חברים', 'מחר', 'הולך', 'לטייל', 'בבוקר'])
})
