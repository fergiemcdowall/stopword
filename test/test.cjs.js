const test = require('ava')
const { extract, words, numbers } = require('words-n-numbers')
const { removeStopwords, _123, afr, ara, hye, eus, ben, bre, bul, cat, zho, hrv, ces, dan, nld, eng, epo, est, fin, fra, glg, deu, ell, hau, heb, hin, hun, ind, gle, ita, jpn, kor, lat, lav, lgg, lggNd, mar, mya, nob, fas, pol, por, porBr, panGu, ron, rus, slk, slv, som, sot, spa, swa, swe, tha, tgl, tur, urd, vie, yor, zul } = require('../dist/stopword.cjs.js')

// matching old language codes / variables
const af = afr // afrikaans
const ar = ara // arabic, macrolanguage
const hy = hye // armenian
const eu = eus // basque
const bn = ben // bengali
const br = bre // breton
const bg = bul // bulgarian
const ca = cat // catalan
const zh = zho // chinese, macrolanguage
const hr = hrv // croatian
const cs = ces // czech
const da = dan // danish
const nl = nld // dutch
const en = eng // english
const eo = epo // esperanto
const et = est // estonian
const fi = fin // finish
const fr = fra // french
const gl = glg // galician
const de = deu // german
const el = ell // greek, modern
const ha = hau // hausa
const he = heb // hebrew
const hi = hin // hindu
const hu = hun // hungarian
const id = ind // indonesian
const ga = gle // irish
const it = ita // italian
const ja = jpn // japanese
const ko = kor // korean
const la = lat // latin
// lugbara isn't possible to convert from old to new ISO-codes because of the old naming
// lgg -> Lugbara
// lggNd -> Lugbara w/ no diacritics
const lv = lav // latvian
const mr = mar // marathi
const my = mya // myanmar
const no = nob // norwegian bokmål
const fa = fas // persian (farsi)
const pl = pol // polish
const pt = por // portugese
const ptbr = porBr // portugese (brazilian)
const pa = panGu // punjabi (punjabi), grmukhi script
const ro = ron // romanian (moldavian, moldovan)
const ru = rus // russian
const sk = slk // slovak
const sl = slv // slovenian
const so = som // somali
const st = sot // sotho, southern
const es = spa // spanish, castilian
const sw = swa // swahili, macrolanguage
const sv = swe // swedish
const th = tha // thai
const tl = tgl // tagalog (filipino)
const tr = tur // turkish
const ur = urd // urdu
const vi = vie // vietnamese
const yo = yor // youruba
const zu = zul // zulu

test('extract korean numbers and remove stopword numbers (korean) from korean text ', (t) => {
  t.plan(1)
  const oldString = '쾰른 대성당(독일어: Kölner Dom, 정식 명칭: Hohe Domkirche St. Peter)은 독일 쾰른에 있는 로마 가톨릭교회의 성당이다. 고딕 양식으로 지어졌다. 쾰른 대교구의 주교좌 성당이라 쾰른 주교좌 성당이라고도 불린다. 현재 쾰른 대교구의 교구장은 라이너 마리아 뵐키 추기경이다. 이 성당은 독일에서 가장 잘 알려진 건축물로, 성 바실리 대성당에 이어, 1996년 유네스코 세계유산으로 등재되었다. 유네스코에서는 쾰른 대성당을 일컬어 “인류의 창조적 재능을 보여주는 드문 작품”이라고 묘사하였다.[1] 매일 2만여 명의 관광객이 이 성당을 찾는다.[2]'
  let newString = extract(oldString, { regex: [numbers], toLowercase: true })
  newString = removeStopwords(newString, _123)
  t.deepEqual(newString, ['1996'])
})

test('extract korean numbers and words and remove stopword numbers (korean) and korean words from korean text ', (t) => {
  t.plan(1)
  const oldString = '쾰른 대성당(독일어: Kölner Dom, 정식 명칭: Hohe Domkirche St. Peter)은 독일 쾰른에 있는 로마 가톨릭교회의 성당이다. 고딕 양식으로 지어졌다. 쾰른 대교구의 주교좌 성당이라 쾰른 주교좌 성당이라고도 불린다. 현재 쾰른 대교구의 교구장은 라이너 마리아 뵐키 추기경이다. 이 성당은 독일에서 가장 잘 알려진 건축물로, 성 바실리 대성당에 이어, 1996년 유네스코 세계유산으로 등재되었다. 유네스코에서는 쾰른 대성당을 일컬어 “인류의 창조적 재능을 보여주는 드문 작품”이라고 묘사하였다.[1] 매일 2만여 명의 관광객이 이 성당을 찾는다.[2]'
  let newString = extract(oldString, { regex: [words, numbers], toLowercase: true })
  newString = removeStopwords(newString, [..._123, ...kor])
  t.deepEqual(newString, ['쾰른', '대성당', '독일어', 'kölner', 'dom', '정식', '명칭', 'hohe', 'domkirche', 'st', 'peter', '은', '독일', '쾰른에', '있는', '로마', '가톨릭교회의', '성당이다', '고딕', '양식으로', '지어졌다', '쾰른', '대교구의', '주교좌', '성당이라', '쾰른', '주교좌', '성당이라고도', '불린다', '현재', '쾰른', '대교구의', '교구장은', '라이너', '마리아', '뵐키', '추기경이다', '성당은', '독일에서', '가장', '잘', '알려진', '건축물로', '성', '바실리', '대성당에', '이어', '1996', '유네스코', '세계유산으로', '등재되었다', '유네스코에서는', '쾰른', '대성당을', '일컬어', '인류의', '창조적', '재능을', '보여주는', '드문', '작품', '이라고', '묘사하였다', '매일', '만여', '명의', '관광객이', '성당을', '찾는다'])
})

test('remove stopwords, default to english and preserve case', (t) => {
  t.plan(1)
  const oldString = 'a really Interesting string with some words'.split(' ')
  const newString = removeStopwords(oldString)
  t.deepEqual(newString, ['really', 'Interesting', 'string', 'words'])
})

test('remove custom stopwords', (t) => {
  t.plan(1)
  const oldString = 'a really interesting string with some words'.split(' ')
  const newString = removeStopwords(oldString, ['interesting'])
  t.deepEqual(newString, ['a', 'really', 'string', 'with', 'some', 'words'])
})

test('remove english and custom stopwords', (t) => {
  t.plan(1)
  const oldString = 'a really interesting string with some words'.split(' ')
  const newString = removeStopwords(oldString, [...eng, 'interesting'])
  t.deepEqual(newString, ['really', 'string', 'words'])
})

test('remove english, swedish and custom stopwords', (t) => {
  t.plan(1)
  const oldString = 'a really interesting string with some words trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna'.split(' ')
  const customStopwords = ['interesting', 'really']
  const newString = removeStopwords(oldString, [...en, ...sv, ...customStopwords])
  t.deepEqual(newString, ['string', 'words', 'trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna'])
})

test('not remove any stopwords', (t) => {
  t.plan(1)
  const oldString = 'a really interesting string with some words'.split(' ')
  const newString = removeStopwords(oldString, [])
  t.deepEqual(newString, ['a', 'really', 'interesting', 'string', 'with', 'some', 'words'])
})

test('remove stopwords that have a non standard separator', (t) => {
  t.plan(1)
  const oldString = 'a.really,interesting string.with,some.words'.split(/[\\., ]+/)
  const newString = removeStopwords(oldString)
  t.deepEqual(newString, ['really', 'interesting', 'string', 'words'])
})

test('specify a custom input separator', (t) => {
  t.plan(1)
  const oldString = 'a-really-interesting-string-with-some words'.split('-')
  const newString = removeStopwords(oldString)
  t.deepEqual(newString, ['really', 'interesting', 'string', 'some words'])
})

test('remove norwegian stopwords', (t) => {
  t.plan(1)
  const oldString = 'dette er en tekst som har norske tegn øæåø øæåø æææ'.split(' ')
  const newString = removeStopwords(oldString, no)
  t.deepEqual(newString, ['tekst', 'norske', 'tegn', 'øæåø', 'øæåø', 'æææ'])
})

test('should remove swedish stopwords and preserve case', (t) => {
  t.plan(1)
  const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
  const newString = removeStopwords(oldString, sv)
  t.deepEqual(newString, ['Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö'])
})

test('remove danish stopwords', (t) => {
  t.plan(1)
  const oldString = 'gæsterne i musikhuset i aarhus bør fremover sende en venlig tanke til den afdøde købmand herman salling når de skal til koncert eller se teater i det aarhusianske kulturhus æøå'.split(' ')
  const newString = removeStopwords(oldString, da)
  t.deepEqual(newString, ['gæsterne', 'musikhuset', 'aarhus', 'bør', 'fremover', 'sende', 'venlig', 'tanke', 'afdøde', 'købmand', 'herman', 'salling', 'koncert', 'teater', 'aarhusianske', 'kulturhus', 'æøå'])
})

test('remove hindu stopwords', (t) => {
  t.plan(1)
  const oldString = 'केंद्र सरकार पर्यावरण के माकूल घरों ग्रीन होम्स को बढ़ावा देने की दिशा में गंभीरता से सोच रही है। ग्रीन हाउसिंग सोसायटी डिवेलप करने के लिए सरकार सस्ते लोन'.split(' ')
  const newString = removeStopwords(oldString, hi)
  t.deepEqual(newString, ['केंद्र', 'सरकार', 'पर्यावरण', 'माकूल', 'घरों', 'ग्रीन', 'होम्स', 'बढ़ावा', 'देने', 'दिशा', 'गंभीरता', 'सोच', 'रही', 'है।', 'ग्रीन', 'हाउसिंग', 'सोसायटी', 'डिवेलप', 'सरकार', 'सस्ते', 'लोन'])
})

test('remove spanish stopwords', (t) => {
  t.plan(1)
  const oldString = 'los investigadores han analizado el adn de los restos de unos 200 gatos tomados de momias egipcias yacimientos vikingos y cuevas de la edad de piedra entre otros lugares variopintos'.split(' ')
  const newString = removeStopwords(oldString, es)
  t.deepEqual(newString, ['investigadores', 'han', 'analizado', 'adn', 'restos', 'unos', '200', 'gatos', 'tomados', 'momias', 'egipcias', 'yacimientos', 'vikingos', 'cuevas', 'edad', 'piedra', 'entre', 'otros', 'lugares', 'variopintos'])
})

test('remove japanese stopwords after being tokenised', (t) => {
  // Text is first tokenized/split into words with: http://chasen.org/%7Etaku/software/TinySegmenter/
  t.plan(1)
  const oldString = '今 回作っ た リスト で は 校正 待ち と なっ て いる 作品 を 抽出 し 作者 や 作品 名 で の 検索 の ほか 作品 の 長さ さまざまな 理由 で 機械 的 に 処理 でき なかっ た もの は に なっ て しまっ て い ます が やいつ から 校正 待ち に なっ て いる か で 並べ替え が できる よう に し まし た'.split(' ')
  const newString = removeStopwords(oldString, ja)
  t.deepEqual(newString, ['今', '回作っ', 'リスト', '校正', '待ち', '作品', '抽出', '作者', '作品', '名', '検索', '作品', '長さ', 'さまざまな', '理由', '機械', '的', '処理', 'しまっ', 'やいつ', '校正', '待ち', '並べ替え', 'まし'])
})

test('remove french stopwords', (t) => {
  t.plan(1)
  const oldString = 'personne à commencer par theresa may n’aurait jamais imaginé une atmosphère aussi plombée un accablement collectif aussi manifeste pour ce qui devait être un jour de gloire'.split(' ')
  const newString = removeStopwords(oldString, fr)
  t.deepEqual(newString, ['personne', 'commencer', 'theresa', 'may', 'n’aurait', 'jamais', 'imaginé', 'atmosphère', 'aussi', 'plombée', 'accablement', 'collectif', 'aussi', 'manifeste', 'devait', 'jour', 'gloire'])
})

test('remove italian stopwords', (t) => {
  t.plan(1)
  const oldString = 'la distruzione del califfato è ancora in corso ma già si è aperta la nuova fase nel duello fra stati uniti e russia in medio oriente'.split(' ')
  const newString = removeStopwords(oldString, it)
  t.deepEqual(newString, ['distruzione', 'califfato', 'ancora', 'corso', 'già', 'aperta', 'nuova', 'fase', 'duello', 'fra', 'stati', 'uniti', 'russia', 'medio', 'oriente'])
})

test('remove dutch stopwords', (t) => {
  t.plan(1)
  const oldString = 'ludovici denkt dat het best kan werken als de gemeente werkloze jongeren aan hen koppelt natuurlijk kunnen ze ook rechtstreeks bij ons aankloppen aldus ludovici'.split(' ')
  const newString = removeStopwords(oldString, nl)
  t.deepEqual(newString, ['ludovici', 'denkt', 'best', 'werken', 'gemeente', 'werkloze', 'jongeren', 'hen', 'koppelt', 'natuurlijk', 'rechtstreeks', 'aankloppen', 'aldus', 'ludovici'])
})

test('remove polish stopwords', (t) => {
  t.plan(1)
  const oldString = 'obecnie zatrzymali już sprzedawcę dopalaczy niespełna letniego chłopaka który usłyszy zarzuty sprzedaży nielegalnych substancji a tym samym narażania życia i zdrowia pokrzywdzonych w tej sprawie jest osób'.split(' ')
  const newString = removeStopwords(oldString, pl)
  t.deepEqual(newString, ['obecnie', 'zatrzymali', 'sprzedawcę', 'dopalaczy', 'niespełna', 'letniego', 'chłopaka', 'usłyszy', 'zarzuty', 'sprzedaży', 'nielegalnych', 'substancji', 'samym', 'narażania', 'życia', 'zdrowia', 'pokrzywdzonych', 'sprawie', 'osób'])
})

test('remove portuguese stopwords', (t) => {
  t.plan(1)
  const oldString = 'já são conhecidas as identidades de algumas das vítimas do incêndio de pedrógão grande em leiria que matou pessoas esta segunda-feira a embaixada de frança divulgou um comunicado onde confirma que um cidadão francês morreu no fogo de pedrógão'.split(' ')
  const newString = removeStopwords(oldString, pt)
  t.deepEqual(newString, ['são', 'conhecidas', 'identidades', 'algumas', 'vítimas', 'incêndio', 'pedrógão', 'grande', 'leiria', 'matou', 'pessoas', 'segunda-feira', 'embaixada', 'frança', 'divulgou', 'comunicado', 'onde', 'confirma', 'cidadão', 'francês', 'morreu', 'fogo', 'pedrógão'])
})

test('remove russian stopwords', (t) => {
  t.plan(1)
  const oldString = 'вопрос троллейбуса не имеет отношения ни к политике ни к чьим-то вкусам уверен директор института экономики транспорта и транспортной политики михаил блинкин есть две большие линии по которым развивается общественный наземный транспорт городов мира рельсы и колеса по первой линии мы преуспели здесь идет мощное развитие достаточно вспомнить трамвай если говорить о второй группе то у нас самый молодой парк автобусов в европе но троллейбусы уходящий вид'.split(' ')
  const newString = removeStopwords(oldString, ru)
  t.deepEqual(newString, ['вопрос', 'троллейбуса', 'имеет', 'отношения', 'политике', 'чьим-то', 'вкусам', 'уверен', 'директор', 'института', 'экономики', 'транспорта', 'транспортной', 'политики', 'михаил', 'блинкин', 'две', 'большие', 'линии', 'которым', 'развивается', 'общественный', 'наземный', 'транспорт', 'городов', 'мира', 'рельсы', 'колеса', 'первой', 'линии', 'преуспели', 'здесь', 'идет', 'мощное', 'развитие', 'достаточно', 'вспомнить', 'трамвай', 'говорить', 'второй', 'группе', 'самый', 'молодой', 'парк', 'автобусов', 'европе', 'троллейбусы', 'уходящий', 'вид'])
})

test('remove chinese simplified stopwords', (t) => {
  // Text is first tokenized/split into words with: https://github.com/yishn/chinese-tokenizer
  t.plan(1)
  const oldString = '起火 森林 位于 葡萄牙 中部 大 佩 德 罗 冈 市 火灾 发生 在 当地时间 日 时 左右 火势 迅速 向 四周 蔓延 酿成 重大 火灾 夜 之间 在 全国 范围 内 发生 了 大约 起 森林 大火 据 葡萄牙 新闻 报 报道 火灾 已 蔓延 至 莱 里 亚 大 区 的 多个 城镇 围绕 火 源 四 个 方向 的 火势 均 未 得到 控制 其中 有 两面 的 火 情 十分 严峻 伤亡 人数 很 可能 继续 增加'.split(' ')
  const newString = removeStopwords(oldString, zh)
  t.deepEqual(newString, ['起火', '森林', '位于', '葡萄牙', '中部', '大', '佩', '德', '罗', '冈', '市', '火灾', '发生', '当地时间', '左右', '火势', '迅速', '四周', '蔓延', '酿成', '重大', '火灾', '夜', '之间', '全国', '范围', '内', '发生', '大约', '起', '森林', '大火', '据', '葡萄牙', '新闻', '报', '报道', '火灾', '蔓延', '至', '莱', '里', '亚', '大', '区', '多个', '城镇', '围绕', '火', '源', '四', '方向', '火势', '均', '未', '得到', '控制', '其中', '两面', '火', '情', '十分', '严峻', '伤亡', '人数', '可能', '继续', '增加'])
})

test('remove bengali stopwords', (t) => {
  t.plan(1)
  const oldString = 'দক্ষিণ এশিয়ার দেশগুলোতে বিদ্যুৎ সরবরাহ বাড়াতে একযোগে কাজ করবে বাংলাদেশ ভারত ও ভুটান জনগণের বিদ্যুৎ চাহিদা মেটাতে ত্রিদেশীয় উদ্যোগের অংশ হিসেবেই এ পদক্ষেপ নেওয়া হচ্ছে এর ফলে বিদ্যুৎ খাতে দক্ষিণ এশিয়ার দেশগুলোতে বিদ্যমান সহযোগিতা একটি নতুন স্তরে উন্নীত হবে এক্ষেত্রে চতুর্থ দেশ হিসেবে এ অঞ্চলের আরেক দেশ নেপালকেও প্রকল্পের অংশীদার করার চেষ্টা চালিয়ে যাবে ঢাকা ও দিল্লি'.split(' ')
  const newString = removeStopwords(oldString, bn)
  t.deepEqual(newString, ['দক্ষিণ', 'এশিয়ার', 'দেশগুলোতে', 'বিদ্যুৎ', 'সরবরাহ', 'বাড়াতে', 'একযোগে', 'বাংলাদেশ', 'ভারত', 'ভুটান', 'জনগণের', 'বিদ্যুৎ', 'চাহিদা', 'মেটাতে', 'ত্রিদেশীয়', 'উদ্যোগের', 'অংশ', 'হিসেবেই', 'পদক্ষেপ', 'বিদ্যুৎ', 'খাতে', 'দক্ষিণ', 'এশিয়ার', 'দেশগুলোতে', 'বিদ্যমান', 'সহযোগিতা', 'স্তরে', 'উন্নীত', 'এক্ষেত্রে', 'চতুর্থ', 'দেশ', 'হিসেবে', 'অঞ্চলের', 'আরেক', 'দেশ', 'নেপালকেও', 'প্রকল্পের', 'অংশীদার', 'চালিয়ে', 'ঢাকা', 'দিল্লি'])
})

test('remove german stopwords', (t) => {
  t.plan(1)
  const oldString = 'In diesem Sommer wird die asymmetrische Demobilisierung nicht mehr gelingen prophezeit Heil Die Menschen wollten Orientierung Angela Merkel hat ihre Partei zu einer One-Woman-Show gemacht die ist unter ihr konzept- und ideenlos geworden Das gelte für die großen Fragen Europas ebenso wie für die Rentenpolitik Zu keiner der großen Fragen hat Angela Merkel eine Antwort nicht zur Flüchtlingskrise nicht zur Bedrohung die Donald Trump darstellt klagte der SPD-Politiker'.split(' ')
  const newString = removeStopwords(oldString, de)
  t.deepEqual(newString, ['Sommer', 'asymmetrische', 'Demobilisierung', 'gelingen', 'prophezeit', 'Heil', 'Orientierung', 'Angela', 'Merkel', 'Partei', 'One-Woman-Show', 'konzept-', 'ideenlos', 'gelte', 'Fragen', 'Europas', 'Rentenpolitik', 'Fragen', 'Angela', 'Merkel', 'Antwort', 'Flüchtlingskrise', 'Bedrohung', 'Donald', 'Trump', 'darstellt', 'klagte', 'SPD-Politiker'])
})

test('remove brazilian portuguese stopwords', (t) => {
  t.plan(1)
  const oldString = 'agora já são conhecidas as identidades de algumas das vítimas do incêndio de pedrógão grande em leiria que matou pessoas esta segunda-feira a embaixada de frança divulgou um comunicado onde confirma que um cidadão francês morreu no fogo de pedrógão'.split(' ')
  const newString = removeStopwords(oldString, ptbr)
  t.deepEqual(newString, ['conhecidas', 'identidades', 'vítimas', 'incêndio', 'pedrógão', 'leiria', 'matou', 'pessoas', 'segunda-feira', 'embaixada', 'frança', 'divulgou', 'comunicado', 'confirma', 'cidadão', 'francês', 'morreu', 'fogo', 'pedrógão'])
})

test('remove punjabi gurmukhi stopwords', (t) => {
  t.plan(1)
  const oldString = 'ਅਫਗਾਨੀਸਤਾਨ ਦੇ ਲਈ ਇੰਟਰਨੈੱਟ ਦਾ ਟਾੱਪ-ਲੈੱਵਲ ਡੋਮੇਨ ਦੇਸ਼ ਕੋਡ ਹੈ ਇਹ ਡੋਮੇਨ ਏ ਐਫ ਜੀ ਐਨ ਆਈ ਸੀ ਦੇ ਦੁਆਰਾ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ, ਜੋ ਅਫਗਾਨੀ ਸਰਕਾਰ ਅਤੇ ਯੂਨਾਈਟਡ ਨੇਸ਼ਨਜ਼ ਦੇ ਥੱਲੇ ਆਂਦਾ ਹੈ'.split(' ')
  const newString = removeStopwords(oldString, pa)
  t.deepEqual(newString, ['ਅਫਗਾਨੀਸਤਾਨ', 'ਇੰਟਰਨੈੱਟ', 'ਟਾੱਪ-ਲੈੱਵਲ', 'ਡੋਮੇਨ', 'ਕੋਡ', 'ਡੋਮੇਨ', 'ਐਫ', 'ਐਨ', 'ਚਲਾਇਆ', 'ਹੈ,', 'ਅਫਗਾਨੀ', 'ਯੂਨਾਈਟਡ', 'ਨੇਸ਼ਨਜ਼', 'ਥੱਲੇ', 'ਆਂਦਾ'])
})

test('remove myanmar stopwords', (t) => {
  // Myanmar stopwords not working, possibly because of lacking tokenization?
  t.plan(1)
  const oldString = ['ဖေဖော', 'ဝါရီ', '၉', 'တွင', 'စာမျက', 'နှာ', '၃၆', '၃၇', 'အရေအတွက', 'ရှိသော', 'ဆိုက', 'ဘာဥပဒေမူကြမ', 'းကို', 'မြန', 'မာနိုင', 'ငံ', 'ဖုန', 'းနှင', 'အင', 'တာနက', 'ဝန', 'ဆောင', 'မှုပေးသူများထံသို', 'ပေးပို', 'အကြံဉာဏ', 'တောင', 'းခံခဲ', 'သည', '၃၁', 'ယင', 'းမူကြမ', 'း', 'အင', 'တာနက', 'ဝန', 'ဆောင', 'မှုပေးသူများက', 'အမုန', 'းတရားကိုဖြစ', 'စေသော', 'စည', 'းလုံးညီညွတ', 'မှုနှင', 'တည', 'ငြိမ', 'အေးချမ', 'းမှုကို', 'ပျက', 'ပြားစေသော', 'စကား', 'စာသား', 'ရုပ', 'ပုံ', 'ဗီဒိယိုနှင', 'အသံဖိုင', 'သင', 'ကေတ', 'စသည', 'တို', 'ကို', 'တားဆီးဖယ', 'ရှားဖျက', 'သိမ', 'းခြင', 'း', 'အတွက', 'တာဝန', 'ခံရန', 'နှင', 'အစိုးရ', 'ညွှန', 'ကြားထညးသောနေရာများ', 'အသုံးပြုသူ', 'အချက', 'အလက', 'ကို', 'အနည', 'းဆုံးသုံးနှစ', 'ထိမ', 'းသိမ', 'းထားရန', 'လည', 'းပါဝင', 'သည', '၃၂', '၃၁', 'အရပ', 'ဘက', 'အဖွဲ', 'အစည', 'း', '၁၅၀', 'ကျော', 'က', 'ထိုဥပဒေမူကြမ', 'းသည', 'အခြေခံအခွင', 'အရေးများဖြစ', 'သော', 'လွတ', 'လပ', 'စွာဖော', 'ထုတ', 'ပြောဆိုခွင', 'သတင', 'းအချက', 'လက', 'ကာကွယ', 'နိုင', 'မှုနှင', 'လွတ', 'လပ', 'ခွင', 'အခြားဒီမိုကရေစီစံနှုန', 'းများကို', 'ချိုးဖော', 'သည', 'အစိုးရကို', 'ဆန', 'ကျင', 'သောအကြောင', 'းအရာများကို', 'တားမြစ', 'ခွင', 'အင', 'တာနက', 'ဝန', 'ဆောင', 'မှုပေးသူများကို', 'ကန', 'သတ', 'ခြင', 'း', 'သတင', 'းအချက', 'လက', 'များကို', 'ကြားဖြတ', 'ယူရန', 'အခွင', 'အရေးများကို', 'အစိုးရကို', 'ပေးအပ', 'ထားသည', 'ဟု', 'အသီးသီး', 'ကြေငြာခဲ', 'ကြသည']
  const newString = removeStopwords(oldString, my)
  t.deepEqual(newString, ['ဖေဖော', 'ဝါရီ', '၉', 'တွင', 'စာမျက', 'နှာ', '၃၆', '၃၇', 'အရေအတွက', 'ရှိသော', 'ဆိုက', 'ဘာဥပဒေမူကြမ', 'းကို', 'မြန', 'မာနိုင', 'ငံ', 'ဖုန', 'းနှင', 'အင', 'တာနက', 'ဝန', 'ဆောင', 'မှုပေးသူများထံသို', 'ပေးပို', 'အကြံဉာဏ', 'တောင', 'းခံခဲ', 'သည', '၃၁', 'ယင', 'းမူကြမ', 'း', 'အင', 'တာနက', 'ဝန', 'ဆောင', 'မှုပေးသူများက', 'အမုန', 'းတရားကိုဖြစ', 'စေသော', 'စည', 'းလုံးညီညွတ', 'မှုနှင', 'တည', 'ငြိမ', 'အေးချမ', 'းမှုကို', 'ပျက', 'ပြားစေသော', 'စကား', 'စာသား', 'ရုပ', 'ပုံ', 'ဗီဒိယိုနှင', 'အသံဖိုင', 'သင', 'ကေတ', 'စသည', 'တို', 'ကို', 'တားဆီးဖယ', 'ရှားဖျက', 'သိမ', 'းခြင', 'း', 'အတွက', 'တာဝန', 'ခံရန', 'နှင', 'အစိုးရ', 'ညွှန', 'ကြားထညးသောနေရာများ', 'အသုံးပြုသူ', 'အချက', 'အလက', 'ကို', 'အနည', 'းဆုံးသုံးနှစ', 'ထိမ', 'းသိမ', 'းထားရန', 'လည', 'းပါဝင', 'သည', '၃၂', '၃၁', 'အရပ', 'ဘက', 'အဖွဲ', 'အစည', 'း', '၁၅၀', 'ကျော', 'က', 'ထိုဥပဒေမူကြမ', 'းသည', 'အခြေခံအခွင', 'အရေးများဖြစ', 'သော', 'လွတ', 'လပ', 'စွာဖော', 'ထုတ', 'ပြောဆိုခွင', 'သတင', 'းအချက', 'လက', 'ကာကွယ', 'နိုင', 'မှုနှင', 'လွတ', 'လပ', 'ခွင', 'အခြားဒီမိုကရေစီစံနှုန', 'းများကို', 'ချိုးဖော', 'သည', 'အစိုးရကို', 'ဆန', 'ကျင', 'သောအကြောင', 'းအရာများကို', 'တားမြစ', 'ခွင', 'အင', 'တာနက', 'ဝန', 'ဆောင', 'မှုပေးသူများကို', 'ကန', 'သတ', 'ခြင', 'း', 'သတင', 'းအချက', 'လက', 'များကို', 'ကြားဖြတ', 'ယူရန', 'အခွင', 'အရေးများကို', 'အစိုးရကို', 'ပေးအပ', 'ထားသည', 'ဟု', 'ကြေငြာခဲ', 'ကြသည'])
})

test('remove swahili stopwords', (t) => {
  t.plan(1)
  const oldString = 'kila mtu anaweza kuhariri makala yoyote kutoa makosa ya lugha kutohoa maneno na kuendeleza na kukuza makala kwa kuandika kwa ufupi au kwa urefu'.split(' ')
  const newString = removeStopwords(oldString, sw)
  t.deepEqual(newString, ['mtu', 'anaweza', 'kuhariri', 'makala', 'yoyote', 'makosa', 'lugha', 'kutohoa', 'maneno', 'kuendeleza', 'kukuza', 'makala', 'kuandika', 'ufupi', 'urefu'])
})

test('remove finnish stopwords', (t) => {
  t.plan(1)
  const oldString = 'vuonna 1502 kristoffer kolumbus saapui hondurasin rannikolle ja antoi sille sen nykyisen nimen'.split(' ')
  const newString = removeStopwords(oldString, fi)
  t.deepEqual(newString, ['1502', 'kristoffer', 'kolumbus', 'saapui', 'hondurasin', 'rannikolle', 'antoi', 'sille', 'nykyisen', 'nimen'])
})

test('remove yoruba stopwords', (t) => {
  t.plan(1)
  const oldString = 'jẹ́ ẹ̀gbà ọrùn tí wọ́n gbẹ́ lére tí ó sì jẹ́ àwòrán akọni obìrin tí a mọ̀ si ìyá wa olorì idia ti ọ̀rundún mẹ́rìndínlógún ṣẹ́yìn'.split(' ')
  const newString = removeStopwords(oldString, yo)
  t.deepEqual(newString, ['ẹ̀gbà', 'ọrùn', 'gbẹ́', 'lére', 'àwòrán', 'akọni', 'obìrin', 'mọ̀', 'si', 'ìyá', 'wa', 'olorì', 'idia', 'ọ̀rundún', 'mẹ́rìndínlógún', 'ṣẹ́yìn'])
})

test('remove zulu stopwords', (t) => {
  t.plan(1)
  const oldString = 'ukhisimusi isikhathi esiletha injabulo kubantu abaningi emhlabeni jikelele lesi sikhathi senza ukuba kube khona ukuhlangana nemindeni okudala yagcinana kuhlalwe kuphunyulwe futhi kuncokolwe'.split(' ')
  const newString = removeStopwords(oldString, zu)
  t.deepEqual(newString, ['ukhisimusi', 'isikhathi', 'esiletha', 'injabulo', 'kubantu', 'abaningi', 'emhlabeni', 'jikelele', 'lesi', 'sikhathi', 'senza', 'kube', 'ukuhlangana', 'nemindeni', 'okudala', 'yagcinana', 'kuhlalwe', 'kuphunyulwe', 'kuncokolwe'])
})

test('remove sotho stopwords', (t) => {
  t.plan(1)
  const oldString = 'ke boloetse ba batho bo bokwang ke kokwanahloko ya ebola matshwao hantlentle a qala matsatsi a mabedi ho isa ho a mararo ka mora ho tshwaetswa ke kokwanahloko'.split(' ')
  const newString = removeStopwords(oldString, st)
  t.deepEqual(newString, ['boloetse', 'batho', 'bo', 'bokwang', 'kokwanahloko', 'ya', 'ebola', 'matshwao', 'hantlentle', 'qala', 'matsatsi', 'mabedi', 'isa', 'mararo', 'mora', 'tshwaetswa', 'kokwanahloko'])
})

test('remove somali stopwords', (t) => {
  t.plan(1)
  const oldString = 'isku celcelis qaarada antarktika waa tan ugu qaboow qalalsan ee ugu dabaysha badan qaaradaha caalamka oo dhan'.split(' ')
  const newString = removeStopwords(oldString, so)
  t.deepEqual(newString, ['celcelis', 'qaarada', 'antarktika', 'tan', 'qaboow', 'qalalsan', 'ee', 'dabaysha', 'badan', 'qaaradaha', 'caalamka'])
})

test('remove vietnamese stopwords', (t) => {
  t.plan(1)
  const oldString = 'Đà Lạt luôn hiện lên như một thành phố nghỉ dưỡng miền núi kiểu mẫu với cảnh quan thiên nhiên tươi đẹp'.split(' ')
  const newString = removeStopwords(oldString, vi)
  t.deepEqual(newString, ['Đà', 'Lạt', 'luôn', 'hiện', 'một', 'thành', 'phố', 'nghỉ', 'dưỡng', 'miền', 'núi', 'kiểu', 'mẫu', 'cảnh', 'quan', 'thiên', 'nhiên', 'tươi', 'đẹp'])
})

test('remove lugbara (without diacritics) stopwords', (t) => {
  t.plan(1)
  const oldString = 'ri kome izu ni ma dria ri enya nya kabele izu ni si ku I vile akuri ra mu a\'a oce ambu ni ma talaa a\'a di idri ru eli izu'.split(' ')
  const newString = removeStopwords(oldString, lggNd)
  t.deepEqual(newString, ['kome', 'izu', 'enya', 'nya', 'kabele', 'izu', 'akuri', 'a\'a', 'oce', 'ambu', 'talaa', 'a\'a', 'idri', 'eli', 'izu'])
})

test('remove lugbara official (with diacritics) stopwords', (t) => {
  t.plan(1)
  const oldString = 'rɨ kómé èzʉ́ ni mà drìá, rɨ nyaká nyá kà\'bèlé èzʉ́ nɨ sɨ ̀ Kʉ \'ɨ ́ vɨ ́lé àkú rɨ ̀ rá mu a\'á òce àzɨ ́ àmbú nɨ mà táláá a\'á élɨ ́ èzʉ́'.split(' ')
  const newString = removeStopwords(oldString, lgg)
  t.deepEqual(newString, ['kómé', 'èzʉ́', 'ni', 'drìá,', 'nyaká', 'nyá', 'kà\'bèlé', 'èzʉ́', '\'ɨ', '́lé', 'àkú', 'mu', 'a\'á', 'òce', 'àmbú', 'táláá', 'a\'á', 'élɨ', 'èzʉ́'])
})

test('remove hausa stopwords', (t) => {
  t.plan(1)
  const oldString = 'zaku iya rubutawa da ingantawa ko kuma ƙirƙiran sabbin muƙaloli kamar yadda kuke gani dan taimako wurin rubuta kundin Ilimi na Insakulofidiya wadda ke taskance ilimi dan masu karatu da yin bincike a harshen Hausa'.split(' ')
  const newString = removeStopwords(oldString, ha)
  t.deepEqual(newString, ['zaku', 'iya', 'rubutawa', 'ingantawa', 'ƙirƙiran', 'sabbin', 'muƙaloli', 'kamar', 'yadda', 'kuke', 'gani', 'dan', 'taimako', 'wurin', 'rubuta', 'kundin', 'Ilimi', 'Insakulofidiya', 'wadda', 'ke', 'taskance', 'ilimi', 'dan', 'masu', 'karatu', 'yin', 'bincike', 'harshen', 'Hausa'])
})

test('remove afrikaans stopwords', (t) => {
  t.plan(1)
  const oldString = 'alhoewel die oop see sowat een uur per motor van Bremen af lê is die getye op die Weserrivier twee keer per dag duidelik waarneembaar'.split(' ')
  const newString = removeStopwords(oldString, af)
  t.deepEqual(newString, ['alhoewel', 'oop', 'see', 'sowat', 'uur', 'per', 'motor', 'Bremen', 'af', 'lê', 'getye', 'Weserrivier', 'twee', 'keer', 'per', 'dag', 'duidelik', 'waarneembaar'])
})

test('remove indonesian stopwords', (t) => {
  t.plan(1)
  const oldString = 'seorang anak perempuan di Bantul Yogyakarta sedang memasak nasi dengan bantuan tungku'.split(' ')
  const newString = removeStopwords(oldString, id)
  t.deepEqual(newString, ['anak', 'perempuan', 'Bantul', 'Yogyakarta', 'memasak', 'nasi', 'bantuan', 'tungku'])
})

test('remove armenian stopwords', (t) => {
  t.plan(1)
  const oldString = 'Հայաստանի Հանրապետությունը ԱՀԿ անդամ է 1994 թվականի օգոստոսից և այդ ժամանակից էլ Հայաստանում ստեղծվել է ԱՀԿ-յան ներկայացուցչություն'.split(' ')
  const newString = removeStopwords(oldString, hy)
  t.deepEqual(newString, ['Հայաստանի', 'Հանրապետությունը', 'ԱՀԿ', 'անդամ', '1994', 'թվականի', 'օգոստոսից', 'ժամանակից', 'էլ', 'Հայաստանում', 'ստեղծվել', 'ԱՀԿ-յան', 'ներկայացուցչություն'])
})

test('remove basque stopwords', (t) => {
  t.plan(1)
  const oldString = 'Garaipenek eta horien aberastasunek aldaketa sakonak eragin zituzten Erromako gizartean barnan Noblezia aberastu zen probintzien lepotik Soldadu xumeek ordea urte asko eman behar izaten zuten etxetik kanpoko borroketan'.split(' ')
  const newString = removeStopwords(oldString, eu)
  t.deepEqual(newString, ['Garaipenek', 'horien', 'aberastasunek', 'aldaketa', 'sakonak', 'eragin', 'zituzten', 'Erromako', 'gizartean', 'barnan', 'Noblezia', 'aberastu', 'probintzien', 'lepotik', 'Soldadu', 'xumeek', 'ordea', 'urte', 'eman', 'behar', 'izaten', 'etxetik', 'kanpoko', 'borroketan'])
})

test('remove breton stopwords', (t) => {
  t.plan(1)
  const oldString = 'gallout a ra pep hini ac’hanomp klask sevel ar pennadoù a vank dimp mankout a ra dimp ivez pennadoù hir n\'hon eus nemet 24 evit ar mare'.split(' ')
  const newString = removeStopwords(oldString, br)
  t.deepEqual(newString, ['gallout', 'ra', 'pep', 'hini', 'ac’hanomp', 'klask', 'sevel', 'ar', 'pennadoù', 'vank', 'dimp', 'mankout', 'ra', 'dimp', 'ivez', 'pennadoù', 'hir', 'n\'hon', 'eus', 'nemet', '24', 'evit', 'ar', 'mare'])
})

test('remove bulgarian stopwords', (t) => {
  t.plan(1)
  const oldString = 'когато генерал Жуков е назначен за командир на Киевския военен окръг в Украйна Баграмян му пише писмо в което го моли да бъде назначен под неговото командване'.split(' ')
  const newString = removeStopwords(oldString, bg)
  t.deepEqual(newString, ['генерал', 'Жуков', 'назначен', 'командир', 'Киевския', 'военен', 'окръг', 'Украйна', 'Баграмян', 'пише', 'писмо', 'моли', 'назначен', 'неговото', 'командване'])
})

test('remove catalan stopwords', (t) => {
  t.plan(1)
  const oldString = 'el candidat proposat exposa davant el Congrés dels Diputats el programa polític del Govern que pretengui formar i demana la confiança de la cambra'.split(' ')
  const newString = removeStopwords(oldString, ca)
  t.deepEqual(newString, ['candidat', 'proposat', 'exposa', 'davant', 'Congrés', 'Diputats', 'programa', 'polític', 'Govern', 'pretengui', 'formar', 'demana', 'confiança', 'cambra'])
})

test('remove croatian stopwords', (t) => {
  t.plan(1)
  const oldString = 'stanovnici priobalja su bili poznati po brodograditeljskom i pomorskom umijeću poznati po gradnji brodova i gusarenju bili su Liburni male i brze lađe kojima su plovili zvale su se lembi'.split(' ')
  const newString = removeStopwords(oldString, hr)
  t.deepEqual(newString, ['stanovnici', 'priobalja', 'poznati', 'brodograditeljskom', 'pomorskom', 'umijeću', 'poznati', 'gradnji', 'brodova', 'gusarenju', 'Liburni', 'male', 'brze', 'lađe', 'plovili', 'zvale', 'lembi'])
})

test('remove czech stopwords', (t) => {
  t.plan(1)
  const oldString = 'ptakopysk má zploštělý zobák který je pokryt zrohovatělou ale citlivou kůží ježury mají válcovitý rypec oběma typům čenich slouží jak k vyhledávání potravy tak k určení místa kde se nachází'.split(' ')
  const newString = removeStopwords(oldString, cs)
  t.deepEqual(newString, ['ptakopysk', 'zploštělý', 'zobák', 'pokryt', 'zrohovatělou', 'citlivou', 'kůží', 'ježury', 'válcovitý', 'rypec', 'oběma', 'typům', 'čenich', 'slouží', 'vyhledávání', 'potravy', 'určení', 'místa', 'nachází'])
})

test('remove esperanto stopwords', (t) => {
  t.plan(1)
  const oldString = 'li mortiĝis kiam li estis 66jaraĝa en 1778 kaj liaj restoj estos metitaj en la Panteono fare de la Nacia Konvencio dum la Franca revolucio en 1794'.split(' ')
  const newString = removeStopwords(oldString, eo)
  t.deepEqual(newString, ['mortiĝis', 'kiam', '66jaraĝa', '1778', 'liaj', 'restoj', 'metitaj', 'Panteono', 'fare', 'Nacia', 'Konvencio', 'Franca', 'revolucio', '1794'])
})

test('remove estonian stopwords', (t) => {
  t.plan(1)
  const oldString = 'nad hakkavad puitu auke puurima kuid sealt hakkab vaiku välja voolama ja esimesed üraskid tavaliselt hukkuvad selles kui puu on nõrga tervisega siis tema vastupanuvõime ammendub peatselt ja siis suudavad üraskid end puu sisse närida'.split(' ')
  const newString = removeStopwords(oldString, et)
  t.deepEqual(newString, ['hakkavad', 'puitu', 'auke', 'puurima', 'kuid', 'sealt', 'hakkab', 'vaiku', 'välja', 'voolama', 'esimesed', 'üraskid', 'tavaliselt', 'hukkuvad', 'selles', 'puu', 'nõrga', 'tervisega', 'tema', 'vastupanuvõime', 'ammendub', 'peatselt', 'suudavad', 'üraskid', 'end', 'puu', 'sisse', 'närida'])
})

test('remove galician stopwords', (t) => {
  t.plan(1)
  const oldString = 'as máis antigas consistían nunha simple torre cadrada con muros anchos e cara o século XI adquiriran xa as características típicas a súa forma e función mudaron co tempo e variaban coa rexión'.split(' ')
  const newString = removeStopwords(oldString, gl)
  t.deepEqual(newString, ['máis', 'antigas', 'consistían', 'simple', 'torre', 'cadrada', 'muros', 'anchos', 'cara', 'século', 'XI', 'adquiriran', 'xa', 'características', 'típicas', 'forma', 'función', 'mudaron', 'tempo', 'variaban', 'rexión'])
})

test('remove greek stopwords', (t) => {
  t.plan(1)
  const oldString = 'eίναι σημαντικό ωστόσο ότι δεν υπάρχει καμία ομοφωνία στη χρονολογία του ψηφίσματος οι περισσότεροι ιστορικοί το τοποθετούν στο 433 άλλοι στο 432 και κάποιοι επιμένουν ότι μπορεί και να είναι πολύ μεταγενέστερο πιθανόν επειδή υπήρξαν και άλλα αντιμεγαρικά ψηφίσματα των Αθηναίων με αποτέλεσμα οι αρχαίοι ιστορικοί να τα συγχέουν'.split(' ')
  const newString = removeStopwords(oldString, el)
  t.deepEqual(newString, ['eίναι', 'σημαντικό', 'ωστόσο', 'ότι', 'υπάρχει', 'καμία', 'ομοφωνία', 'χρονολογία', 'ψηφίσματος', 'περισσότεροι', 'ιστορικοί', 'τοποθετούν', '433', 'άλλοι', '432', 'κάποιοι', 'επιμένουν', 'ότι', 'μπορεί', 'είναι', 'πολύ', 'μεταγενέστερο', 'πιθανόν', 'επειδή', 'υπήρξαν', 'άλλα', 'αντιμεγαρικά', 'ψηφίσματα', 'Αθηναίων', 'αποτέλεσμα', 'αρχαίοι', 'ιστορικοί', 'συγχέουν'])
})

test('remove hungarian stopwords', (t) => {
  t.plan(1)
  const oldString = 'ahogy a nyomozás során egyre több bizonyítékot és gyanúsítottat talál úgy fedezi fel politikai összeesküvések sorozatát és a Bábjátékos valódi azonosságát és céljait a film átfogó filozófiai témái közt a főszereplőn keresztül fontos szerepet kap az önazonosság egy technológiailag fejlett világban'.split(' ')
  const newString = removeStopwords(oldString, hu)
  t.deepEqual(newString, ['nyomozás', 'bizonyítékot', 'gyanúsítottat', 'talál', 'fedezi', 'politikai', 'összeesküvések', 'sorozatát', 'Bábjátékos', 'valódi', 'azonosságát', 'céljait', 'film', 'átfogó', 'filozófiai', 'témái', 'közt', 'főszereplőn', 'fontos', 'szerepet', 'kap', 'önazonosság', 'technológiailag', 'fejlett', 'világban'])
})

test('remove irish stopwords', (t) => {
  t.plan(1)
  const oldString = 'ní raibh siad chomh drochamhrasach i leith na seanscéalta Págánacha agus a shílfeá ach mar sin féin bhain siad gach tagairt nithiúil don chreideamh réamh-Chríostaí de na leaganacha a rinne siad de na scéalta seo'.split(' ')
  const newString = removeStopwords(oldString, ga)
  t.deepEqual(newString, ['raibh', 'drochamhrasach', 'leith', 'seanscéalta', 'Págánacha', 'shílfeá', 'sin', 'féin', 'bhain', 'tagairt', 'nithiúil', 'chreideamh', 'réamh-Chríostaí', 'leaganacha', 'rinne', 'scéalta', 'seo'])
})

test('remove korean stopwords', (t) => {
  t.plan(1)
  const oldString = '이 대회 결승전은 축구 자체보다 125,000명 정도 되는 웸블리 스타디움의 수용인원을 훌쩍 뛰어넘은 엄청난 인파로 인한 큰 혼란 때문에 더 중요하게 여겨진다 추정 300,000여 명의 관중들이 입장하면서 경기장의 테라스까지 꽉 차서 사람들이 넘칠 정도였고 관중들은 선수들이 경기하는 경기장 안 피치까지 내려가기 까지 했다'.split(' ')
  const newString = removeStopwords(oldString, ko)
  t.deepEqual(newString, ['대회', '결승전은', '축구', '자체보다', '125,000명', '정도', '되는', '웸블리', '스타디움의', '수용인원을', '훌쩍', '뛰어넘은', '엄청난', '인파로', '인한', '큰', '혼란', '더', '중요하게', '여겨진다', '추정', '300,000여', '명의', '관중들이', '입장하면서', '경기장의', '테라스까지', '꽉', '차서', '사람들이', '넘칠', '정도였고', '관중들은', '선수들이', '경기하는', '경기장', '안', '피치까지', '내려가기', '했다'])
})

test('remove latin stopwords', (t) => {
  t.plan(1)
  const oldString = 'nomen Groenlandiae terram viridem significans e Scandinavis colonis venit in Sagis Islandicis Norvegicus natus Ericus Rufus in exilium propter necem eiectus est qui iuxta cum extensa familia et thrallis in navibus profectus est ad inveniendam terram Boream novam colonizatam terram Grœnland scilicet Terram Viridem nominavit sperans fore ut gratum nomen colonos attraheret'.split(' ')
  const newString = removeStopwords(oldString, la)
  t.deepEqual(newString, ['nomen', 'Groenlandiae', 'terram', 'viridem', 'significans', 'Scandinavis', 'colonis', 'venit', 'Sagis', 'Islandicis', 'Norvegicus', 'natus', 'Ericus', 'Rufus', 'exilium', 'propter', 'necem', 'eiectus', 'iuxta', 'extensa', 'familia', 'thrallis', 'navibus', 'profectus', 'inveniendam', 'terram', 'Boream', 'novam', 'colonizatam', 'terram', 'Grœnland', 'scilicet', 'Terram', 'Viridem', 'nominavit', 'sperans', 'fore', 'gratum', 'nomen', 'colonos', 'attraheret'])
})

test('remove latvian stopwords', (t) => {
  t.plan(1)
  const oldString = 'darbs patentu birojā deva ar zinātni nesaistītus ienākumus Einšteins vienmēr esot uzskatījis ka praktiska ar zinātni nesaistīta nodarbošanās atbrīvo zinātnieku no rūpēm par iztiku un no nepieciešamības publicēties tikai pašas publicitātes pēc'.split(' ')
  const newString = removeStopwords(oldString, lv)
  t.deepEqual(newString, ['darbs', 'patentu', 'birojā', 'deva', 'zinātni', 'nesaistītus', 'ienākumus', 'Einšteins', 'vienmēr', 'esot', 'uzskatījis', 'praktiska', 'zinātni', 'nesaistīta', 'nodarbošanās', 'atbrīvo', 'zinātnieku', 'rūpēm', 'iztiku', 'nepieciešamības', 'publicēties', 'pašas', 'publicitātes'])
})

test('remove marathi stopwords', (t) => {
  t.plan(1)
  const oldString = 'आता हिटलर सोवियेत संघावर उलटला व जून २२ १९४१ रोजी त्याने अचानक सोवियेत संघावर चाल केली ऑपरेशन बार्बारोसा या सांकेतिक नावाने योजलेल्या या मोहिमेत जर्मनीला सुरुवातीला भरभरुन यश मिळाले १९४१ शेवटीशेवटी जर्मन सैन्याने मॉस्कोपर्यंत धडक मारली परंतु येथे ही मोहीम अडकून पडली सोवियेत सैन्याने कडवा प्रतिकार करीत जर्मनीचा रेटा मोडून काढला पुढे सोवियेत सैन्याने स्टालिनग्राडला वेढा घालुन बसलेल्या जर्मनीच्या सहाव्या सैन्यालाच प्रतिवेढा घालुन पूर्ण सैन्याला युद्धबंदी बनवले'.split(' ')
  const newString = removeStopwords(oldString, mr)
  t.deepEqual(newString, ['हिटलर', 'सोवियेत', 'संघावर', 'उलटला', 'जून', '२२', '१९४१', 'रोजी', 'त्याने', 'अचानक', 'सोवियेत', 'संघावर', 'चाल', 'ऑपरेशन', 'बार्बारोसा', 'सांकेतिक', 'नावाने', 'योजलेल्या', 'मोहिमेत', 'जर्मनीला', 'सुरुवातीला', 'भरभरुन', 'यश', 'मिळाले', '१९४१', 'शेवटीशेवटी', 'जर्मन', 'सैन्याने', 'मॉस्कोपर्यंत', 'धडक', 'मारली', 'परंतु', 'मोहीम', 'अडकून', 'पडली', 'सोवियेत', 'सैन्याने', 'कडवा', 'प्रतिकार', 'करीत', 'जर्मनीचा', 'रेटा', 'मोडून', 'काढला', 'पुढे', 'सोवियेत', 'सैन्याने', 'स्टालिनग्राडला', 'वेढा', 'घालुन', 'बसलेल्या', 'जर्मनीच्या', 'सहाव्या', 'सैन्यालाच', 'प्रतिवेढा', 'घालुन', 'पूर्ण', 'सैन्याला', 'युद्धबंदी', 'बनवले'])
})

test('remove romanian stopwords', (t) => {
  t.plan(1)
  const oldString = 'o sursă importantă a infecției în România sunt persoanele venite din afară care nu s-au autoizolat la domiciliu sau care au mințit că nu au fost într-o zonă afectată de infecția COVID-19'.split(' ')
  const newString = removeStopwords(oldString, ro)
  t.deepEqual(newString, ['o', 'sursă', 'importantă', 'a', 'infecției', 'România', 'persoanele', 'venite', 'afară', 's-au', 'autoizolat', 'domiciliu', 'mințit', 'fost', 'într-o', 'zonă', 'afectată', 'infecția', 'COVID-19'])
})

test('remove slovak stopwords', (t) => {
  t.plan(1)
  const oldString = 'o zhruba desať mesiacov neskôr zbadali dvaja lesní robotníci popoludní 18. septembra 1916 pramienok vytekajúci z telesa hrádze'.split(' ')
  const newString = removeStopwords(oldString, sk)
  t.deepEqual(newString, ['zhruba', 'desať', 'mesiacov', 'neskôr', 'zbadali', 'dvaja', 'lesní', 'robotníci', 'popoludní', '18.', 'septembra', '1916', 'pramienok', 'vytekajúci', 'telesa', 'hrádze'])
})

test('remove slovenian stopwords', (t) => {
  t.plan(1)
  const oldString = 'Beta Andromede je rdeča orjakinja in je le za kanček temnejša kot Alfa njena barva pa je prepoznavna celo s prostim očesom dajbolj izrazito telo globokega vesolja je zagotovo Andromedina galaksija M31 tudi Velika galaksija v Andromedi ki je vidna celo s prostim očesom'.split(' ')
  const newString = removeStopwords(oldString, sl)
  t.deepEqual(newString, ['Beta', 'Andromede', 'rdeča', 'orjakinja', 'kanček', 'temnejša', 'Alfa', 'barva', 'prepoznavna', 'prostim', 'očesom', 'dajbolj', 'izrazito', 'telo', 'globokega', 'vesolja', 'zagotovo', 'Andromedina', 'galaksija', 'M31', 'galaksija', 'Andromedi', 'vidna', 'prostim', 'očesom'])
})

test('remove thai stopwords', (t) => {
  t.plan(1)
  const oldString = 'เมื่อ ถึง ปี พ ศ 2461 ฝ่ายพันธมิตร ได้ เพิ่ม กำลัง การปิดล้อม อย่างต่อเนื่อง บน ช่องแคบ โอ ตรันโต ตามที่ กองทัพเรือ ออสเตรีย ฮังการี คาดการณ์ ไว้ ซึ่ง ส่งผลให้ ปฏิบัติ การณ์ ของ เรือ อู ของ ทั้ง ออ อสเตรีย ฮังการี และ เยอรมัน ใน ทะเล เม ดิ เตอเรเนียนยาก ขึ้น ผู้บัญชา การ อง ทัพเรือ ออสเตรีย ฮังการีคนใหม่ พลเรือตรี มิ กโลช โฮร์ ตี ตัดสินใจ จะ เข้า โจมตี กองเรือ ฝ่ายพันธมิตร โดย เรือประจัญบาน เรือ ลาดตระเวน และ เรือ พิฆาต'.split(' ')
  const newString = removeStopwords(oldString, th)
  t.deepEqual(newString, ['ปี', 'พ', 'ศ', '2461', 'ฝ่ายพันธมิตร', 'เพิ่ม', 'กำลัง', 'การปิดล้อม', 'อย่างต่อเนื่อง', 'บน', 'ช่องแคบ', 'โอ', 'ตรันโต', 'ตามที่', 'กองทัพเรือ', 'ออสเตรีย', 'ฮังการี', 'คาดการณ์', 'ส่งผลให้', 'ปฏิบัติ', 'การณ์', 'เรือ', 'อู', 'ออ', 'อสเตรีย', 'ฮังการี', 'เยอรมัน', 'ทะเล', 'เม', 'ดิ', 'เตอเรเนียนยาก', 'ผู้บัญชา', 'อง', 'ทัพเรือ', 'ออสเตรีย', 'ฮังการีคนใหม่', 'พลเรือตรี', 'มิ', 'กโลช', 'โฮร์', 'ตี', 'ตัดสินใจ', 'โจมตี', 'กองเรือ', 'ฝ่ายพันธมิตร', 'เรือประจัญบาน', 'เรือ', 'ลาดตระเวน', 'เรือ', 'พิฆาต'])
})

test('remove turkish stopwords', (t) => {
  t.plan(1)
  const oldString = 'bu anlaşmaya göre ABD askerleri 30 Haziran 2009 tarihinde Irak şehir merkezlerinden muharip güçlerini çekti[45] ve 30 Haziran Irak ta resmi tatil ilan edildi ancak anlaşma dahilinde 2009 yılını ortalarında bir halk referandumu yapılarak ABD güçlerinin konumu tekrar değerlendirildi'.split(' ')
  const newString = removeStopwords(oldString, tr)
  t.deepEqual(newString, ['anlaşmaya', 'ABD', 'askerleri', '30', 'Haziran', '2009', 'tarihinde', 'Irak', 'şehir', 'merkezlerinden', 'muharip', 'güçlerini', 'çekti[45]', '30', 'Haziran', 'Irak', 'ta', 'resmi', 'tatil', 'ilan', 'edildi', 'anlaşma', 'dahilinde', '2009', 'yılını', 'ortalarında', 'halk', 'referandumu', 'yapılarak', 'ABD', 'güçlerinin', 'konumu', 'tekrar', 'değerlendirildi'])
})

test('remove tagalog (filipino) stopwords', (t) => {
  t.plan(1)
  const oldString = ['mayroon', 'silang', 'karapatang', 'magkaroon', 'ng', 'ari-arian', 'makilahok', 'sa', 'kalakalan', 'at', 'maaaring', 'hiwalayan', 'o', 'dibosiyuhin', 'ang', 'asawang', 'lalaki', 'maaari', 'rin', 'silang', 'maging', 'pinuno', 'ng', 'nayon', 'kung', 'walang', 'tagapagmanang', 'lalaki', 'sa', 'katungkulan']
  const newString = removeStopwords(oldString, tl)
  t.deepEqual(newString, ['silang', 'karapatang', 'magkaroon', 'ari-arian', 'makilahok', 'kalakalan', 'hiwalayan', 'dibosiyuhin', 'asawang', 'lalaki', 'rin', 'silang', 'pinuno', 'nayon', 'tagapagmanang', 'lalaki', 'katungkulan'])
})

// -----------------------
// Right to Left languages
// -----------------------

test('remove arabic stopwords', (t) => {
  t.plan(1)
  const oldString = 'ورغم أن الحملة توقفت بقينا نتسلق سلّم الأمل نظن أن الحكومة تسبقنا نحو القمة لكننا صعقنا بتوقف الحملة عند أسماء بعينها وكأن الفساد اقتصر على شفيق جراية ومن معه من مهربين؛ لكن الأفظع هو أن ملف شفيق جراية ليس ملف فساد بل ملف تآمر وهو ما يعني أنّ الحكومة غالطت الجميع وجندت التونسيين لحرب واهية تجاهلت فيها الفساد الحقيقي الذي ظهر على شخصيات كثيرة في مقدمتها الأمين العام لحركة مشروع تونس محسن مرزوق'.split(' ')
  const newString = removeStopwords(oldString, ar)
  t.deepEqual(newString, ['ورغم', 'الحملة', 'توقفت', 'بقينا', 'نتسلق', 'سلّم', 'الأمل', 'نظن', 'الحكومة', 'تسبقنا', 'القمة', 'لكننا', 'صعقنا', 'بتوقف', 'الحملة', 'أسماء', 'بعينها', 'وكأن', 'الفساد', 'اقتصر', 'شفيق', 'جراية', 'معه', 'مهربين؛', 'الأفظع', 'ملف', 'شفيق', 'جراية', 'ليس', 'ملف', 'فساد', 'ملف', 'تآمر', 'يعني', 'أنّ', 'الحكومة', 'غالطت', 'الجميع', 'وجندت', 'التونسيين', 'لحرب', 'واهية', 'تجاهلت', 'الفساد', 'الحقيقي', 'ظهر', 'شخصيات', 'كثيرة', 'مقدمتها', 'الأمين', 'العام', 'لحركة', 'مشروع', 'تونس', 'محسن', 'مرزوق'])
})

test('remove farsi stopwords and preserve case', (t) => {
  t.plan(1)
  const oldString = 'در این بیانیه آمده است که اتو قادر به صحبت کردن، قادر به دیدن و قادر به عکس العمل نشان دادن به درخواست های شفاهی نبود'.split(' ')
  const newString = removeStopwords(oldString, fa)
  t.deepEqual(newString, ['این', 'بیانیه', 'آمده', 'است', 'اتو', 'قادر', 'صحبت', 'کردن،', 'قادر', 'دیدن', 'قادر', 'عکس', 'العمل', 'نشان', 'دادن', 'درخواست', 'های', 'شفاهی', 'نبود'])
})

test('remove hebrew stopwords and preserve case', (t) => {
  t.plan(1)
  const oldString = 'אז מה קורה חברים אני מחר הולך לטייל בבוקר'.split(' ')
  const newString = removeStopwords(oldString, he)
  t.deepEqual(newString, ['קורה', 'חברים', 'מחר', 'הולך', 'לטייל', 'בבוקר'])
})

test('remove urdu stopwords', (t) => {
  t.plan(1)
  const oldString = 'آج جبکہ پاکستان کے حکمران اپنی دولت بڑهانے میں کوئی کسر اٹھا نہیں رکھتے ہیں تو دوسری جانب انہوں نے ان غریب لوگوں کو تعلیمی سہولیات سے بهی دور رکها ہے۔ نہ ہی ان کے لیے اسکول ہیں اور نہ ہی کالج بنائے گئے ہیں۔ یہی وجہ ہے کہ ان لوگوں کی نسبت پاکستان کے دیگر علاقوں کے لوگ خصوصاً پختونخوا اور پنجاب تعلیم میں قبائل سے بہت آگے نکل گئے ہیں لیکن قبائل جو پاکستانی قوم کا باقاعدہ حصہ ہیں'.split(' ')
  const newString = removeStopwords(oldString, ur)
  t.deepEqual(newString, ['جبکہ', 'پاکستان', 'حکمران', 'اپنی', 'دولت', 'بڑهانے', 'میں', 'کسر', 'اٹھا', 'نہیں', 'دوسری', 'جانب', 'انہوں', 'نے', 'ان', 'غریب', 'کو', 'تعلیمی', 'سہولیات', 'سے', 'بهی', 'رکها', 'ہے۔', 'نہ', 'ان', 'لیے', 'اسکول', 'نہ', 'کالج', 'بنائے', 'ہیں۔', 'یہی', 'وجہ', 'ان', 'نسبت', 'پاکستان', 'دیگر', 'خصوصاً', 'پختونخوا', 'پنجاب', 'تعلیم', 'میں', 'قبائل', 'سے', 'بہت', 'آگے', 'نکل', 'لیکن', 'قبائل', 'جو', 'پاکستانی', 'قوم', 'کا', 'باقاعدہ', 'حصہ'])
})
