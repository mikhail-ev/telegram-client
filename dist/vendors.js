/*!
 * Webogram v0.7.0 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

Config = window.Config || {}

/*

  IMPORTANT NOTICE
  ================

  Do not publish your Webogram fork with my app credentials (below), or your application may be blocked.
  You can get your own api_id, api_hash at https://my.telegram.org, see manual at https://core.telegram.org/api/obtaining_api_id.

*/

Config.App = {
  id: 2496,
  hash: '8da85b0d5bfe62527e5b244c209159c3',
  version: '0.7.0',
  domains: ['web.telegram.org', 'zhukov.github.io']
}

Config.Modes = {
  test: true,
  debug: location.search.indexOf('debug=1') > 0,
  http: location.search.indexOf('http=1') > 0,
  ssl: location.search.indexOf('ssl=1') > 0 || location.protocol == 'https:' && location.search.indexOf('ssl=0') == -1,
  force_mobile: location.search.indexOf('mobile=1') > 0,
  force_desktop: location.search.indexOf('desktop=1') > 0,
  nacl: location.search.indexOf('nacl=0') == -1,
  webcrypto: location.search.indexOf('webcrypto=0') == -1,
  packed: location.protocol == 'app:' || location.protocol == 'chrome-extension:',
  ios_standalone: window.navigator.standalone && navigator.userAgent.match(/iOS|iPhone|iPad/),
  chrome_packed: window.chrome && chrome.app && chrome.app.window && true || false,
  animations: true,
  memory_only: false,
  allow_tmpfs: location.search.indexOf('tmpfs=yeahImSureIknowWhatImDoing') > 0 || false,
  push_api: location.search.indexOf('push=1') == -1
}

Config.Navigator = {
  osX: (navigator.platform || '').toLowerCase().indexOf('mac') != -1 ||
    (navigator.userAgent || '').toLowerCase().indexOf('mac') != -1,
  msie: (navigator.userAgent || '').search(/MSIE | Trident\/|Edge\//) != -1,
  retina: window.devicePixelRatio > 1,
  ffos: navigator.userAgent.search(/mobi.+Gecko/i) != -1,
  ffos2p: navigator.userAgent.search(/mobi.+Gecko\/[34567]/i) != -1,
  touch: screen.width <= 768 || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
  mobile: screen.width && screen.width < 480 || navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1
}

// Touch detect: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js

Config.I18n = {
  locale: 'en-us',
  supported: [
    'en-us'
    , 'es-es'
    , 'de-de'
    , 'it-it'
    , 'nl-nl'
    , 'pt-br'
  // ,"ru-ru"
  ], // To be copied to package.json
  languages: {
    'en-us': 'English',
    'de-de': 'Deutsch',
    'es-es': 'Español',
    'it-it': 'Italiano',
    'ru-ru': 'Русский',
    'nl-nl': 'Nederlands',
    'pt-br': 'Português (Brazil)'
  },
  aliases: {
    'en': 'en-us',
    'de': 'de-de',
    'es': 'es-es',
    'it': 'it-it',
    'ru': 'ru-ru',
    'nl': 'nl-nl'
  },
  messages: {},
  fallback_messages: {}
}

Config.ExtCredentials = {
  gmaps: {
    api_key: 'AIzaSyC72t5GDcP-dob20d-ARwSwOQ41-zgbArg'
  }
}

Config.Schema = Config.Schema || {}

Config.Schema.MTProto = {'constructors': [{'id': '481674261','predicate': 'vector','params': [],'type': 'Vector t'}, {'id': '85337187','predicate': 'resPQ','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'pq','type': 'bytes'}, {'name': 'server_public_key_fingerprints','type': 'Vector<long>'}],'type': 'ResPQ'}, {'id': '-2083955988','predicate': 'p_q_inner_data','params': [{'name': 'pq','type': 'bytes'}, {'name': 'p','type': 'bytes'}, {'name': 'q','type': 'bytes'}, {'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'new_nonce','type': 'int256'}],'type': 'P_Q_inner_data'}, {'id': '2043348061','predicate': 'server_DH_params_fail','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'new_nonce_hash','type': 'int128'}],'type': 'Server_DH_Params'}, {'id': '-790100132','predicate': 'server_DH_params_ok','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'encrypted_answer','type': 'bytes'}],'type': 'Server_DH_Params'}, {'id': '-1249309254','predicate': 'server_DH_inner_data','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'g','type': 'int'}, {'name': 'dh_prime','type': 'bytes'}, {'name': 'g_a','type': 'bytes'}, {'name': 'server_time','type': 'int'}],'type': 'Server_DH_inner_data'}, {'id': '1715713620','predicate': 'client_DH_inner_data','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'retry_id','type': 'long'}, {'name': 'g_b','type': 'bytes'}],'type': 'Client_DH_Inner_Data'}, {'id': '1003222836','predicate': 'dh_gen_ok','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'new_nonce_hash1','type': 'int128'}],'type': 'Set_client_DH_params_answer'}, {'id': '1188831161','predicate': 'dh_gen_retry','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'new_nonce_hash2','type': 'int128'}],'type': 'Set_client_DH_params_answer'}, {'id': '-1499615742','predicate': 'dh_gen_fail','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'new_nonce_hash3','type': 'int128'}],'type': 'Set_client_DH_params_answer'}, {'id': '-212046591','predicate': 'rpc_result','params': [{'name': 'req_msg_id','type': 'long'}, {'name': 'result','type': 'Object'}],'type': 'RpcResult'}, {'id': '558156313','predicate': 'rpc_error','params': [{'name': 'error_code','type': 'int'}, {'name': 'error_message','type': 'string'}],'type': 'RpcError'}, {'id': '1579864942','predicate': 'rpc_answer_unknown','params': [],'type': 'RpcDropAnswer'}, {'id': '-847714938','predicate': 'rpc_answer_dropped_running','params': [],'type': 'RpcDropAnswer'}, {'id': '-1539647305','predicate': 'rpc_answer_dropped','params': [{'name': 'msg_id','type': 'long'}, {'name': 'seq_no','type': 'int'}, {'name': 'bytes','type': 'int'}],'type': 'RpcDropAnswer'}, {'id': '155834844','predicate': 'future_salt','params': [{'name': 'valid_since','type': 'int'}, {'name': 'valid_until','type': 'int'}, {'name': 'salt','type': 'long'}],'type': 'FutureSalt'}, {'id': '-1370486635','predicate': 'future_salts','params': [{'name': 'req_msg_id','type': 'long'}, {'name': 'now','type': 'int'}, {'name': 'salts','type': 'vector<future_salt>'}],'type': 'FutureSalts'}, {'id': '880243653','predicate': 'pong','params': [{'name': 'msg_id','type': 'long'}, {'name': 'ping_id','type': 'long'}],'type': 'Pong'}, {'id': '-501201412','predicate': 'destroy_session_ok','params': [{'name': 'session_id','type': 'long'}],'type': 'DestroySessionRes'}, {'id': '1658015945','predicate': 'destroy_session_none','params': [{'name': 'session_id','type': 'long'}],'type': 'DestroySessionRes'}, {'id': '-1631450872','predicate': 'new_session_created','params': [{'name': 'first_msg_id','type': 'long'}, {'name': 'unique_id','type': 'long'}, {'name': 'server_salt','type': 'long'}],'type': 'NewSession'}, {'id': '1945237724','predicate': 'msg_container','params': [{'name': 'messages','type': 'vector<%Message>'}],'type': 'MessageContainer'}, {'id': '1538843921','predicate': 'message','params': [{'name': 'msg_id','type': 'long'}, {'name': 'seqno','type': 'int'}, {'name': 'bytes','type': 'int'}, {'name': 'body','type': 'Object'}],'type': 'Message'}, {'id': '-530561358','predicate': 'msg_copy','params': [{'name': 'orig_message','type': 'Message'}],'type': 'MessageCopy'}, {'id': '812830625','predicate': 'gzip_packed','params': [{'name': 'packed_data','type': 'bytes'}],'type': 'Object'}, {'id': '1658238041','predicate': 'msgs_ack','params': [{'name': 'msg_ids','type': 'Vector<long>'}],'type': 'MsgsAck'}, {'id': '-1477445615','predicate': 'bad_msg_notification','params': [{'name': 'bad_msg_id','type': 'long'}, {'name': 'bad_msg_seqno','type': 'int'}, {'name': 'error_code','type': 'int'}],'type': 'BadMsgNotification'}, {'id': '-307542917','predicate': 'bad_server_salt','params': [{'name': 'bad_msg_id','type': 'long'}, {'name': 'bad_msg_seqno','type': 'int'}, {'name': 'error_code','type': 'int'}, {'name': 'new_server_salt','type': 'long'}],'type': 'BadMsgNotification'}, {'id': '2105940488','predicate': 'msg_resend_req','params': [{'name': 'msg_ids','type': 'Vector<long>'}],'type': 'MsgResendReq'}, {'id': '-630588590','predicate': 'msgs_state_req','params': [{'name': 'msg_ids','type': 'Vector<long>'}],'type': 'MsgsStateReq'}, {'id': '81704317','predicate': 'msgs_state_info','params': [{'name': 'req_msg_id','type': 'long'}, {'name': 'info','type': 'bytes'}],'type': 'MsgsStateInfo'}, {'id': '-1933520591','predicate': 'msgs_all_info','params': [{'name': 'msg_ids','type': 'Vector<long>'}, {'name': 'info','type': 'bytes'}],'type': 'MsgsAllInfo'}, {'id': '661470918','predicate': 'msg_detailed_info','params': [{'name': 'msg_id','type': 'long'}, {'name': 'answer_msg_id','type': 'long'}, {'name': 'bytes','type': 'int'}, {'name': 'status','type': 'int'}],'type': 'MsgDetailedInfo'}, {'id': '-2137147681','predicate': 'msg_new_detailed_info','params': [{'name': 'answer_msg_id','type': 'long'}, {'name': 'bytes','type': 'int'}, {'name': 'status','type': 'int'}],'type': 'MsgDetailedInfo'}],'methods': [{'id': '1615239032','method': 'req_pq','params': [{'name': 'nonce','type': 'int128'}],'type': 'ResPQ'}, {'id': '-686627650','method': 'req_DH_params','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'p','type': 'bytes'}, {'name': 'q','type': 'bytes'}, {'name': 'public_key_fingerprint','type': 'long'}, {'name': 'encrypted_data','type': 'bytes'}],'type': 'Server_DH_Params'}, {'id': '-184262881','method': 'set_client_DH_params','params': [{'name': 'nonce','type': 'int128'}, {'name': 'server_nonce','type': 'int128'}, {'name': 'encrypted_data','type': 'bytes'}],'type': 'Set_client_DH_params_answer'}, {'id': '1491380032','method': 'rpc_drop_answer','params': [{'name': 'req_msg_id','type': 'long'}],'type': 'RpcDropAnswer'}, {'id': '-1188971260','method': 'get_future_salts','params': [{'name': 'num','type': 'int'}],'type': 'FutureSalts'}, {'id': '2059302892','method': 'ping','params': [{'name': 'ping_id','type': 'long'}],'type': 'Pong'}, {'id': '-213746804','method': 'ping_delay_disconnect','params': [{'name': 'ping_id','type': 'long'}, {'name': 'disconnect_delay','type': 'int'}],'type': 'Pong'}, {'id': '-414113498','method': 'destroy_session','params': [{'name': 'session_id','type': 'long'}],'type': 'DestroySessionRes'}, {'id': '-1835453025','method': 'http_wait','params': [{'name': 'max_delay','type': 'int'}, {'name': 'wait_after','type': 'int'}, {'name': 'max_wait','type': 'int'}],'type': 'HttpWait'}]}

// From https://github.com/stephenmathieson/node-tlds/blob/master/index.js
Config.TLD = ['abogado', 'ac', 'academy', 'accountants', 'active', 'actor', 'ad', 'adult', 'ae', 'aero', 'af', 'ag', 'agency', 'ai', 'airforce', 'al', 'allfinanz', 'alsace', 'am', 'amsterdam', 'an', 'android', 'ao', 'apartments', 'aq', 'aquarelle', 'ar', 'archi', 'army', 'arpa', 'as', 'asia', 'associates', 'at', 'attorney', 'au', 'auction', 'audio', 'autos', 'aw', 'ax', 'axa', 'az', 'ba', 'band', 'bank', 'bar', 'barclaycard', 'barclays', 'bargains', 'bayern', 'bb', 'bd', 'be', 'beer', 'berlin', 'best', 'bf', 'bg', 'bh', 'bi', 'bid', 'bike', 'bingo', 'bio', 'biz', 'bj', 'black', 'blackfriday', 'bloomberg', 'blue', 'bm', 'bmw', 'bn', 'bnpparibas', 'bo', 'boo', 'boutique', 'br', 'brussels', 'bs', 'bt', 'budapest', 'build', 'builders', 'business', 'buzz', 'bv', 'bw', 'by', 'bz', 'bzh', 'ca', 'cab', 'cal', 'camera', 'camp', 'cancerresearch', 'canon', 'capetown', 'capital', 'caravan', 'cards', 'care', 'career', 'careers', 'cartier', 'casa', 'cash', 'cat', 'catering', 'cc', 'cd', 'center', 'ceo', 'cern', 'cf', 'cg', 'ch', 'channel', 'chat', 'cheap', 'christmas', 'chrome', 'church', 'ci', 'citic', 'city', 'ck', 'cl', 'claims', 'cleaning', 'click', 'clinic', 'clothing', 'club', 'cm', 'cn', 'co', 'coach', 'codes', 'coffee', 'college', 'cologne', 'com', 'community', 'company', 'computer', 'condos', 'construction', 'consulting', 'contractors', 'cooking', 'cool', 'coop', 'country', 'cr', 'credit', 'creditcard', 'cricket', 'crs', 'cruises', 'cu', 'cuisinella', 'cv', 'cw', 'cx', 'cy', 'cymru', 'cz', 'dabur', 'dad', 'dance', 'dating', 'day', 'dclk', 'de', 'deals', 'degree', 'delivery', 'democrat', 'dental', 'dentist', 'desi', 'design', 'dev', 'diamonds', 'diet', 'digital', 'direct', 'directory', 'discount', 'dj', 'dk', 'dm', 'dnp', 'do', 'docs', 'domains', 'doosan', 'durban', 'dvag', 'dz', 'eat', 'ec', 'edu', 'education', 'ee', 'eg', 'email', 'emerck', 'energy', 'engineer', 'engineering', 'enterprises', 'equipment', 'er', 'es', 'esq', 'estate', 'et', 'eu', 'eurovision', 'eus', 'events', 'everbank', 'exchange', 'expert', 'exposed', 'fail', 'farm', 'fashion', 'feedback', 'fi', 'finance', 'financial', 'firmdale', 'fish', 'fishing', 'fit', 'fitness', 'fj', 'fk', 'flights', 'florist', 'flowers', 'flsmidth', 'fly', 'fm', 'fo', 'foo', 'forsale', 'foundation', 'fr', 'frl', 'frogans', 'fund', 'furniture', 'futbol', 'ga', 'gal', 'gallery', 'garden', 'gb', 'gbiz', 'gd', 'ge', 'gent', 'gf', 'gg', 'ggee', 'gh', 'gi', 'gift', 'gifts', 'gives', 'gl', 'glass', 'gle', 'global', 'globo', 'gm', 'gmail', 'gmo', 'gmx', 'gn', 'goog', 'google', 'gop', 'gov', 'gp', 'gq', 'gr', 'graphics', 'gratis', 'green', 'gripe', 'gs', 'gt', 'gu', 'guide', 'guitars', 'guru', 'gw', 'gy', 'hamburg', 'hangout', 'haus', 'healthcare', 'help', 'here', 'hermes', 'hiphop', 'hiv', 'hk', 'hm', 'hn', 'holdings', 'holiday', 'homes', 'horse', 'host', 'hosting', 'house', 'how', 'hr', 'ht', 'hu', 'ibm', 'id', 'ie', 'ifm', 'il', 'im', 'immo', 'immobilien', 'in', 'industries', 'info', 'ing', 'ink', 'institute', 'insure', 'int', 'international', 'investments', 'io', 'iq', 'ir', 'irish', 'is', 'it', 'iwc', 'jcb', 'je', 'jetzt', 'jm', 'jo', 'jobs', 'joburg', 'jp', 'juegos', 'kaufen', 'kddi', 'ke', 'kg', 'kh', 'ki', 'kim', 'kitchen', 'kiwi', 'km', 'kn', 'koeln', 'kp', 'kr', 'krd', 'kred', 'kw', 'ky', 'kyoto', 'kz', 'la', 'lacaixa', 'land', 'lat', 'latrobe', 'lawyer', 'lb', 'lc', 'lds', 'lease', 'legal', 'lgbt', 'li', 'lidl', 'life', 'lighting', 'limited', 'limo', 'link', 'lk', 'loans', 'london', 'lotte', 'lotto', 'lr', 'ls', 'lt', 'ltda', 'lu', 'luxe', 'luxury', 'lv', 'ly', 'ma', 'madrid', 'maison', 'management', 'mango', 'market', 'marketing', 'marriott', 'mc', 'md', 'me', 'media', 'meet', 'melbourne', 'meme', 'memorial', 'menu', 'mg', 'mh', 'miami', 'mil', 'mini', 'mk', 'ml', 'mm', 'mn', 'mo', 'mobi', 'moda', 'moe', 'monash', 'money', 'mormon', 'mortgage', 'moscow', 'motorcycles', 'mov', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'museum', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nagoya', 'name', 'navy', 'nc', 'ne', 'net', 'network', 'neustar', 'new', 'nexus', 'nf', 'ng', 'ngo', 'nhk', 'ni', 'nico', 'ninja', 'nl', 'no', 'np', 'nr', 'nra', 'nrw', 'ntt', 'nu', 'nyc', 'nz', 'okinawa', 'om', 'one', 'ong', 'onl', 'ooo', 'org', 'organic', 'osaka', 'otsuka', 'ovh', 'pa', 'paris', 'partners', 'parts', 'party', 'pe', 'pf', 'pg', 'ph', 'pharmacy', 'photo', 'photography', 'photos', 'physio', 'pics', 'pictures', 'pink', 'pizza', 'pk', 'pl', 'place', 'plumbing', 'pm', 'pn', 'pohl', 'poker', 'porn', 'post', 'pr', 'praxi', 'press', 'pro', 'prod', 'productions', 'prof', 'properties', 'property', 'ps', 'pt', 'pub', 'pw', 'py', 'qa', 'qpon', 'quebec', 're', 'realtor', 'recipes', 'red', 'rehab', 'reise', 'reisen', 'reit', 'ren', 'rentals', 'repair', 'report', 'republican', 'rest', 'restaurant', 'reviews', 'rich', 'rio', 'rip', 'ro', 'rocks', 'rodeo', 'rs', 'rsvp', 'ru', 'ruhr', 'rw', 'ryukyu', 'sa', 'saarland', 'sale', 'samsung', 'sarl', 'saxo', 'sb', 'sc', 'sca', 'scb', 'schmidt', 'schule', 'schwarz', 'science', 'scot', 'sd', 'se', 'services', 'sew', 'sexy', 'sg', 'sh', 'shiksha', 'shoes', 'shriram', 'si', 'singles', 'sj', 'sk', 'sky', 'sl', 'sm', 'sn', 'so', 'social', 'software', 'sohu', 'solar', 'solutions', 'soy', 'space', 'spiegel', 'sr', 'st', 'style', 'su', 'supplies', 'supply', 'support', 'surf', 'surgery', 'suzuki', 'sv', 'sx', 'sy', 'sydney', 'systems', 'sz', 'taipei', 'tatar', 'tattoo', 'tax', 'tc', 'td', 'technology', 'tel', 'temasek', 'tennis', 'tf', 'tg', 'th', 'tienda', 'tips', 'tires', 'tirol', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'today', 'tokyo', 'tools', 'top', 'toshiba', 'town', 'toys', 'tp', 'tr', 'trade', 'training', 'travel', 'trust', 'tt', 'tui', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'university', 'uno', 'uol', 'us', 'uy', 'uz', 'va', 'vacations', 'vc', 've', 'vegas', 'ventures', 'versicherung', 'vet', 'vg', 'vi', 'viajes', 'video', 'villas', 'vision', 'vlaanderen', 'vn', 'vodka', 'vote', 'voting', 'voto', 'voyage', 'vu', 'wales', 'wang', 'watch', 'webcam', 'website', 'wed', 'wedding', 'wf', 'whoswho', 'wien', 'wiki', 'williamhill', 'wme', 'work', 'works', 'world', 'ws', 'wtc', 'wtf', '佛山', '集团', '在线', '한국', 'ভারত', '八卦', 'موقع', '公益', '公司', '移动', '我爱你', 'москва', 'қаз', 'онлайн', 'сайт', 'срб', '淡马锡', 'орг', '삼성', 'சிங்கப்பூர்', '商标', '商店', '商城', 'дети', 'мкд', '中文网', '中信', '中国', '中國', '谷歌', 'భారత్', 'ලංකා', 'ભારત', 'भारत', '网店', 'संगठन', '网络', 'укр', '香港', '台湾', '台灣', '手机', 'мон', 'الجزائر', 'عمان', 'ایران', 'امارات', 'بازار', 'الاردن', 'بھارت', 'المغرب', 'السعودية', 'مليسيا', 'شبكة', 'გე', '机构', '组织机构', 'ไทย', 'سورية', 'рус', 'рф', 'تونس', 'みんな', 'グーグル', '世界', 'ਭਾਰਤ', '网址', '游戏', 'vermögensberater', 'vermögensberatung', '企业', 'مصر', 'قطر', '广东', 'இலங்கை', 'இந்தியா', '新加坡', 'فلسطين', '政务', 'xxx', 'xyz', 'yachts', 'yandex', 'ye', 'yoga', 'yokohama', 'youtube', 'yt', 'za', 'zip', 'zm', 'zone', 'zuerich', 'zw']

Config.Schema.API = {"constructors":[{"id":"-1132882121","predicate":"boolFalse","params":[],"type":"Bool"},{"id":"-1720552011","predicate":"boolTrue","params":[],"type":"Bool"},{"id":"1072550713","predicate":"true","params":[],"type":"True"},{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"-994444869","predicate":"error","params":[{"name":"code","type":"int"},{"name":"text","type":"string"}],"type":"Error"},{"id":"1450380236","predicate":"null","params":[],"type":"Null"},{"id":"2134579434","predicate":"inputPeerEmpty","params":[],"type":"InputPeer"},{"id":"2107670217","predicate":"inputPeerSelf","params":[],"type":"InputPeer"},{"id":"396093539","predicate":"inputPeerChat","params":[{"name":"chat_id","type":"int"}],"type":"InputPeer"},{"id":"-1182234929","predicate":"inputUserEmpty","params":[],"type":"InputUser"},{"id":"-138301121","predicate":"inputUserSelf","params":[],"type":"InputUser"},{"id":"-208488460","predicate":"inputPhoneContact","params":[{"name":"client_id","type":"long"},{"name":"phone","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputContact"},{"id":"-181407105","predicate":"inputFile","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"},{"name":"md5_checksum","type":"string"}],"type":"InputFile"},{"id":"-1771768449","predicate":"inputMediaEmpty","params":[],"type":"InputMedia"},{"id":"792191537","predicate":"inputMediaUploadedPhoto","params":[{"name":"flags","type":"#"},{"name":"file","type":"InputFile"},{"name":"caption","type":"string"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"},{"name":"ttl_seconds","type":"flags.1?int"}],"type":"InputMedia"},{"id":"-2114308294","predicate":"inputMediaPhoto","params":[{"name":"flags","type":"#"},{"name":"id","type":"InputPhoto"},{"name":"caption","type":"string"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"-104578748","predicate":"inputMediaGeoPoint","params":[{"name":"geo_point","type":"InputGeoPoint"}],"type":"InputMedia"},{"id":"-1494984313","predicate":"inputMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputMedia"},{"id":"480546647","predicate":"inputChatPhotoEmpty","params":[],"type":"InputChatPhoto"},{"id":"-1837345356","predicate":"inputChatUploadedPhoto","params":[{"name":"file","type":"InputFile"}],"type":"InputChatPhoto"},{"id":"-1991004873","predicate":"inputChatPhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"InputChatPhoto"},{"id":"-457104426","predicate":"inputGeoPointEmpty","params":[],"type":"InputGeoPoint"},{"id":"-206066487","predicate":"inputGeoPoint","params":[{"name":"lat","type":"double"},{"name":"long","type":"double"}],"type":"InputGeoPoint"},{"id":"483901197","predicate":"inputPhotoEmpty","params":[],"type":"InputPhoto"},{"id":"-74070332","predicate":"inputPhoto","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputPhoto"},{"id":"342061462","predicate":"inputFileLocation","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"InputFileLocation"},{"id":"1996904104","predicate":"inputAppEvent","params":[{"name":"time","type":"double"},{"name":"type","type":"string"},{"name":"peer","type":"long"},{"name":"data","type":"string"}],"type":"InputAppEvent"},{"id":"-1649296275","predicate":"peerUser","params":[{"name":"user_id","type":"int"}],"type":"Peer"},{"id":"-1160714821","predicate":"peerChat","params":[{"name":"chat_id","type":"int"}],"type":"Peer"},{"id":"-1432995067","predicate":"storage.fileUnknown","params":[],"type":"storage.FileType"},{"id":"1086091090","predicate":"storage.filePartial","params":[],"type":"storage.FileType"},{"id":"8322574","predicate":"storage.fileJpeg","params":[],"type":"storage.FileType"},{"id":"-891180321","predicate":"storage.fileGif","params":[],"type":"storage.FileType"},{"id":"172975040","predicate":"storage.filePng","params":[],"type":"storage.FileType"},{"id":"-1373745011","predicate":"storage.filePdf","params":[],"type":"storage.FileType"},{"id":"1384777335","predicate":"storage.fileMp3","params":[],"type":"storage.FileType"},{"id":"1258941372","predicate":"storage.fileMov","params":[],"type":"storage.FileType"},{"id":"-1278304028","predicate":"storage.fileMp4","params":[],"type":"storage.FileType"},{"id":"276907596","predicate":"storage.fileWebp","params":[],"type":"storage.FileType"},{"id":"2086234950","predicate":"fileLocationUnavailable","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"FileLocation"},{"id":"1406570614","predicate":"fileLocation","params":[{"name":"dc_id","type":"int"},{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"FileLocation"},{"id":"537022650","predicate":"userEmpty","params":[{"name":"id","type":"int"}],"type":"User"},{"id":"1326562017","predicate":"userProfilePhotoEmpty","params":[],"type":"UserProfilePhoto"},{"id":"-715532088","predicate":"userProfilePhoto","params":[{"name":"photo_id","type":"long"},{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"}],"type":"UserProfilePhoto"},{"id":"164646985","predicate":"userStatusEmpty","params":[],"type":"UserStatus"},{"id":"-306628279","predicate":"userStatusOnline","params":[{"name":"expires","type":"int"}],"type":"UserStatus"},{"id":"9203775","predicate":"userStatusOffline","params":[{"name":"was_online","type":"int"}],"type":"UserStatus"},{"id":"-1683826688","predicate":"chatEmpty","params":[{"name":"id","type":"int"}],"type":"Chat"},{"id":"-652419756","predicate":"chat","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"kicked","type":"flags.1?true"},{"name":"left","type":"flags.2?true"},{"name":"admins_enabled","type":"flags.3?true"},{"name":"admin","type":"flags.4?true"},{"name":"deactivated","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"photo","type":"ChatPhoto"},{"name":"participants_count","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"migrated_to","type":"flags.6?InputChannel"}],"type":"Chat"},{"id":"120753115","predicate":"chatForbidden","params":[{"name":"id","type":"int"},{"name":"title","type":"string"}],"type":"Chat"},{"id":"771925524","predicate":"chatFull","params":[{"name":"id","type":"int"},{"name":"participants","type":"ChatParticipants"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"}],"type":"ChatFull"},{"id":"-925415106","predicate":"chatParticipant","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"-57668565","predicate":"chatParticipantsForbidden","params":[{"name":"flags","type":"#"},{"name":"chat_id","type":"int"},{"name":"self_participant","type":"flags.0?ChatParticipant"}],"type":"ChatParticipants"},{"id":"1061556205","predicate":"chatParticipants","params":[{"name":"chat_id","type":"int"},{"name":"participants","type":"Vector<ChatParticipant>"},{"name":"version","type":"int"}],"type":"ChatParticipants"},{"id":"935395612","predicate":"chatPhotoEmpty","params":[],"type":"ChatPhoto"},{"id":"1632839530","predicate":"chatPhoto","params":[{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"}],"type":"ChatPhoto"},{"id":"-2082087340","predicate":"messageEmpty","params":[{"name":"id","type":"int"}],"type":"Message"},{"id":"1157215293","predicate":"message","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"post","type":"flags.14?true"},{"name":"from_scheduled","type":"flags.18?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"message","type":"string"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"reply_markup","type":"flags.6?ReplyMarkup"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"},{"name":"views","type":"flags.10?int"},{"name":"edit_date","type":"flags.15?int"},{"name":"post_author","type":"flags.16?string"},{"name":"grouped_id","type":"flags.17?long"}],"type":"Message"},{"id":"-1642487306","predicate":"messageService","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"post","type":"flags.14?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"action","type":"MessageAction"}],"type":"Message"},{"id":"1038967584","predicate":"messageMediaEmpty","params":[],"type":"MessageMedia"},{"id":"-1256047857","predicate":"messageMediaPhoto","params":[{"name":"flags","type":"#"},{"name":"photo","type":"flags.0?Photo"},{"name":"caption","type":"flags.1?string"},{"name":"ttl_seconds","type":"flags.2?int"}],"type":"MessageMedia"},{"id":"1457575028","predicate":"messageMediaGeo","params":[{"name":"geo","type":"GeoPoint"}],"type":"MessageMedia"},{"id":"1585262393","predicate":"messageMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"user_id","type":"int"}],"type":"MessageMedia"},{"id":"-1618676578","predicate":"messageMediaUnsupported","params":[],"type":"MessageMedia"},{"id":"-1230047312","predicate":"messageActionEmpty","params":[],"type":"MessageAction"},{"id":"-1503425638","predicate":"messageActionChatCreate","params":[{"name":"title","type":"string"},{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1247687078","predicate":"messageActionChatEditTitle","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"2144015272","predicate":"messageActionChatEditPhoto","params":[{"name":"photo","type":"Photo"}],"type":"MessageAction"},{"id":"-1780220945","predicate":"messageActionChatDeletePhoto","params":[],"type":"MessageAction"},{"id":"1217033015","predicate":"messageActionChatAddUser","params":[{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1297179892","predicate":"messageActionChatDeleteUser","params":[{"name":"user_id","type":"int"}],"type":"MessageAction"},{"id":"-455150117","predicate":"dialog","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.2?true"},{"name":"peer","type":"Peer"},{"name":"top_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"unread_mentions_count","type":"int"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"pts","type":"flags.0?int"},{"name":"draft","type":"flags.1?DraftMessage"}],"type":"Dialog"},{"id":"590459437","predicate":"photoEmpty","params":[{"name":"id","type":"long"}],"type":"Photo"},{"id":"-1836524247","predicate":"photo","params":[{"name":"flags","type":"#"},{"name":"has_stickers","type":"flags.0?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"sizes","type":"Vector<PhotoSize>"}],"type":"Photo"},{"id":"236446268","predicate":"photoSizeEmpty","params":[{"name":"type","type":"string"}],"type":"PhotoSize"},{"id":"2009052699","predicate":"photoSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"size","type":"int"}],"type":"PhotoSize"},{"id":"-374917894","predicate":"photoCachedSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"bytes","type":"bytes"}],"type":"PhotoSize"},{"id":"286776671","predicate":"geoPointEmpty","params":[],"type":"GeoPoint"},{"id":"541710092","predicate":"geoPoint","params":[{"name":"long","type":"double"},{"name":"lat","type":"double"}],"type":"GeoPoint"},{"id":"-2128698738","predicate":"auth.checkedPhone","params":[{"name":"phone_registered","type":"Bool"}],"type":"auth.CheckedPhone"},{"id":"1577067778","predicate":"auth.sentCode","params":[{"name":"flags","type":"#"},{"name":"phone_registered","type":"flags.0?true"},{"name":"type","type":"auth.SentCodeType"},{"name":"phone_code_hash","type":"string"},{"name":"next_type","type":"flags.1?auth.CodeType"},{"name":"timeout","type":"flags.2?int"}],"type":"auth.SentCode"},{"id":"-855308010","predicate":"auth.authorization","params":[{"name":"flags","type":"#"},{"name":"tmp_sessions","type":"flags.0?int"},{"name":"user","type":"User"}],"type":"auth.Authorization"},{"id":"-543777747","predicate":"auth.exportedAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.ExportedAuthorization"},{"id":"-1195615476","predicate":"inputNotifyPeer","params":[{"name":"peer","type":"InputPeer"}],"type":"InputNotifyPeer"},{"id":"423314455","predicate":"inputNotifyUsers","params":[],"type":"InputNotifyPeer"},{"id":"1251338318","predicate":"inputNotifyChats","params":[],"type":"InputNotifyPeer"},{"id":"-1540769658","predicate":"inputNotifyAll","params":[],"type":"InputNotifyPeer"},{"id":"-265263912","predicate":"inputPeerNotifyEventsEmpty","params":[],"type":"InputPeerNotifyEvents"},{"id":"-395694988","predicate":"inputPeerNotifyEventsAll","params":[],"type":"InputPeerNotifyEvents"},{"id":"949182130","predicate":"inputPeerNotifySettings","params":[{"name":"flags","type":"#"},{"name":"show_previews","type":"flags.0?true"},{"name":"silent","type":"flags.1?true"},{"name":"mute_until","type":"int"},{"name":"sound","type":"string"}],"type":"InputPeerNotifySettings"},{"id":"-1378534221","predicate":"peerNotifyEventsEmpty","params":[],"type":"PeerNotifyEvents"},{"id":"1830677896","predicate":"peerNotifyEventsAll","params":[],"type":"PeerNotifyEvents"},{"id":"-1697798976","predicate":"peerNotifySettings","params":[{"name":"flags","type":"#"},{"name":"show_previews","type":"flags.0?true"},{"name":"silent","type":"flags.1?true"},{"name":"mute_until","type":"int"},{"name":"sound","type":"string"}],"type":"PeerNotifySettings"},{"id":"-2122045747","predicate":"peerSettings","params":[{"name":"flags","type":"#"},{"name":"report_spam","type":"flags.0?true"}],"type":"PeerSettings"},{"id":"-860866985","predicate":"wallPaper","params":[{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"sizes","type":"Vector<PhotoSize>"},{"name":"color","type":"int"}],"type":"WallPaper"},{"id":"1490799288","predicate":"inputReportReasonSpam","params":[],"type":"ReportReason"},{"id":"505595789","predicate":"inputReportReasonViolence","params":[],"type":"ReportReason"},{"id":"777640226","predicate":"inputReportReasonPornography","params":[],"type":"ReportReason"},{"id":"-1376497949","predicate":"inputReportReasonChildAbuse","params":[],"type":"ReportReason"},{"id":"-512463606","predicate":"inputReportReasonOther","params":[{"name":"text","type":"string"}],"type":"ReportReason"},{"id":"253890367","predicate":"userFull","params":[{"name":"flags","type":"#"},{"name":"blocked","type":"flags.0?true"},{"name":"phone_calls_available","type":"flags.4?true"},{"name":"phone_calls_private","type":"flags.5?true"},{"name":"user","type":"User"},{"name":"about","type":"flags.1?string"},{"name":"link","type":"contacts.Link"},{"name":"profile_photo","type":"flags.2?Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"bot_info","type":"flags.3?BotInfo"},{"name":"common_chats_count","type":"int"}],"type":"UserFull"},{"id":"-116274796","predicate":"contact","params":[{"name":"user_id","type":"int"},{"name":"mutual","type":"Bool"}],"type":"Contact"},{"id":"-805141448","predicate":"importedContact","params":[{"name":"user_id","type":"int"},{"name":"client_id","type":"long"}],"type":"ImportedContact"},{"id":"1444661369","predicate":"contactBlocked","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ContactBlocked"},{"id":"-748155807","predicate":"contactStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"ContactStatus"},{"id":"986597452","predicate":"contacts.link","params":[{"name":"my_link","type":"ContactLink"},{"name":"foreign_link","type":"ContactLink"},{"name":"user","type":"User"}],"type":"contacts.Link"},{"id":"-1219778094","predicate":"contacts.contactsNotModified","params":[],"type":"contacts.Contacts"},{"id":"-353862078","predicate":"contacts.contacts","params":[{"name":"contacts","type":"Vector<Contact>"},{"name":"saved_count","type":"int"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Contacts"},{"id":"2010127419","predicate":"contacts.importedContacts","params":[{"name":"imported","type":"Vector<ImportedContact>"},{"name":"popular_invites","type":"Vector<PopularContact>"},{"name":"retry_contacts","type":"Vector<long>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ImportedContacts"},{"id":"471043349","predicate":"contacts.blocked","params":[{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"-1878523231","predicate":"contacts.blockedSlice","params":[{"name":"count","type":"int"},{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"364538944","predicate":"messages.dialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"1910543603","predicate":"messages.dialogsSlice","params":[{"name":"count","type":"int"},{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"-1938715001","predicate":"messages.messages","params":[{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"189033187","predicate":"messages.messagesSlice","params":[{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"1694474197","predicate":"messages.chats","params":[{"name":"chats","type":"Vector<Chat>"}],"type":"messages.Chats"},{"id":"-438840932","predicate":"messages.chatFull","params":[{"name":"full_chat","type":"ChatFull"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.ChatFull"},{"id":"-1269012015","predicate":"messages.affectedHistory","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"offset","type":"int"}],"type":"messages.AffectedHistory"},{"id":"1474492012","predicate":"inputMessagesFilterEmpty","params":[],"type":"MessagesFilter"},{"id":"-1777752804","predicate":"inputMessagesFilterPhotos","params":[],"type":"MessagesFilter"},{"id":"-1614803355","predicate":"inputMessagesFilterVideo","params":[],"type":"MessagesFilter"},{"id":"1458172132","predicate":"inputMessagesFilterPhotoVideo","params":[],"type":"MessagesFilter"},{"id":"-1629621880","predicate":"inputMessagesFilterDocument","params":[],"type":"MessagesFilter"},{"id":"2129714567","predicate":"inputMessagesFilterUrl","params":[],"type":"MessagesFilter"},{"id":"-3644025","predicate":"inputMessagesFilterGif","params":[],"type":"MessagesFilter"},{"id":"522914557","predicate":"updateNewMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1318109142","predicate":"updateMessageID","params":[{"name":"id","type":"int"},{"name":"random_id","type":"long"}],"type":"Update"},{"id":"-1576161051","predicate":"updateDeleteMessages","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1548249383","predicate":"updateUserTyping","params":[{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"-1704596961","predicate":"updateChatUserTyping","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"125178264","predicate":"updateChatParticipants","params":[{"name":"participants","type":"ChatParticipants"}],"type":"Update"},{"id":"469489699","predicate":"updateUserStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"Update"},{"id":"-1489818765","predicate":"updateUserName","params":[{"name":"user_id","type":"int"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"username","type":"string"}],"type":"Update"},{"id":"-1791935732","predicate":"updateUserPhoto","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"},{"name":"photo","type":"UserProfilePhoto"},{"name":"previous","type":"Bool"}],"type":"Update"},{"id":"628472761","predicate":"updateContactRegistered","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1657903163","predicate":"updateContactLink","params":[{"name":"user_id","type":"int"},{"name":"my_link","type":"ContactLink"},{"name":"foreign_link","type":"ContactLink"}],"type":"Update"},{"id":"-1519637954","predicate":"updates.state","params":[{"name":"pts","type":"int"},{"name":"qts","type":"int"},{"name":"date","type":"int"},{"name":"seq","type":"int"},{"name":"unread_count","type":"int"}],"type":"updates.State"},{"id":"1567990072","predicate":"updates.differenceEmpty","params":[{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"updates.Difference"},{"id":"16030880","predicate":"updates.difference","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-1459938943","predicate":"updates.differenceSlice","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"intermediate_state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-484987010","predicate":"updatesTooLong","params":[],"type":"Updates"},{"id":"-1857044719","predicate":"updateShortMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"id","type":"int"},{"name":"user_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"377562760","predicate":"updateShortChatMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"id","type":"int"},{"name":"from_id","type":"int"},{"name":"chat_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"2027216577","predicate":"updateShort","params":[{"name":"update","type":"Update"},{"name":"date","type":"int"}],"type":"Updates"},{"id":"1918567619","predicate":"updatesCombined","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq_start","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"1957577280","predicate":"updates","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"-1916114267","predicate":"photos.photos","params":[{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"352657236","predicate":"photos.photosSlice","params":[{"name":"count","type":"int"},{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"539045032","predicate":"photos.photo","params":[{"name":"photo","type":"Photo"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photo"},{"id":"157948117","predicate":"upload.file","params":[{"name":"type","type":"storage.FileType"},{"name":"mtime","type":"int"},{"name":"bytes","type":"bytes"}],"type":"upload.File"},{"id":"98092748","predicate":"dcOption","params":[{"name":"flags","type":"#"},{"name":"ipv6","type":"flags.0?true"},{"name":"media_only","type":"flags.1?true"},{"name":"tcpo_only","type":"flags.2?true"},{"name":"cdn","type":"flags.3?true"},{"name":"static","type":"flags.4?true"},{"name":"id","type":"int"},{"name":"ip_address","type":"string"},{"name":"port","type":"int"}],"type":"DcOption"},{"id":"-1669068444","predicate":"config","params":[{"name":"flags","type":"#"},{"name":"phonecalls_enabled","type":"flags.1?true"},{"name":"default_p2p_contacts","type":"flags.3?true"},{"name":"date","type":"int"},{"name":"expires","type":"int"},{"name":"test_mode","type":"Bool"},{"name":"this_dc","type":"int"},{"name":"dc_options","type":"Vector<DcOption>"},{"name":"chat_size_max","type":"int"},{"name":"megagroup_size_max","type":"int"},{"name":"forwarded_count_max","type":"int"},{"name":"online_update_period_ms","type":"int"},{"name":"offline_blur_timeout_ms","type":"int"},{"name":"offline_idle_timeout_ms","type":"int"},{"name":"online_cloud_timeout_ms","type":"int"},{"name":"notify_cloud_delay_ms","type":"int"},{"name":"notify_default_delay_ms","type":"int"},{"name":"chat_big_size","type":"int"},{"name":"push_chat_period_ms","type":"int"},{"name":"push_chat_limit","type":"int"},{"name":"saved_gifs_limit","type":"int"},{"name":"edit_time_limit","type":"int"},{"name":"rating_e_decay","type":"int"},{"name":"stickers_recent_limit","type":"int"},{"name":"stickers_faved_limit","type":"int"},{"name":"channels_read_media_period","type":"int"},{"name":"tmp_sessions","type":"flags.0?int"},{"name":"pinned_dialogs_count_max","type":"int"},{"name":"call_receive_timeout_ms","type":"int"},{"name":"call_ring_timeout_ms","type":"int"},{"name":"call_connect_timeout_ms","type":"int"},{"name":"call_packet_timeout_ms","type":"int"},{"name":"me_url_prefix","type":"string"},{"name":"suggested_lang_code","type":"flags.2?string"},{"name":"lang_pack_version","type":"flags.2?int"},{"name":"disabled_features","type":"Vector<DisabledFeature>"}],"type":"Config"},{"id":"-1910892683","predicate":"nearestDc","params":[{"name":"country","type":"string"},{"name":"this_dc","type":"int"},{"name":"nearest_dc","type":"int"}],"type":"NearestDc"},{"id":"-1987579119","predicate":"help.appUpdate","params":[{"name":"id","type":"int"},{"name":"critical","type":"Bool"},{"name":"url","type":"string"},{"name":"text","type":"string"}],"type":"help.AppUpdate"},{"id":"-1000708810","predicate":"help.noAppUpdate","params":[],"type":"help.AppUpdate"},{"id":"415997816","predicate":"help.inviteText","params":[{"name":"message","type":"string"}],"type":"help.InviteText"},{"id":"1662091044","predicate":"wallPaperSolid","params":[{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"bg_color","type":"int"},{"name":"color","type":"int"}],"type":"WallPaper"},{"id":"314359194","predicate":"updateNewEncryptedMessage","params":[{"name":"message","type":"EncryptedMessage"},{"name":"qts","type":"int"}],"type":"Update"},{"id":"386986326","predicate":"updateEncryptedChatTyping","params":[{"name":"chat_id","type":"int"}],"type":"Update"},{"id":"-1264392051","predicate":"updateEncryption","params":[{"name":"chat","type":"EncryptedChat"},{"name":"date","type":"int"}],"type":"Update"},{"id":"956179895","predicate":"updateEncryptedMessagesRead","params":[{"name":"chat_id","type":"int"},{"name":"max_date","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1417756512","predicate":"encryptedChatEmpty","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"1006044124","predicate":"encryptedChatWaiting","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"}],"type":"EncryptedChat"},{"id":"-931638658","predicate":"encryptedChatRequested","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"-94974410","predicate":"encryptedChat","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_or_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"332848423","predicate":"encryptedChatDiscarded","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"-247351839","predicate":"inputEncryptedChat","params":[{"name":"chat_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedChat"},{"id":"-1038136962","predicate":"encryptedFileEmpty","params":[],"type":"EncryptedFile"},{"id":"1248893260","predicate":"encryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"dc_id","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"EncryptedFile"},{"id":"406307684","predicate":"inputEncryptedFileEmpty","params":[],"type":"InputEncryptedFile"},{"id":"1690108678","predicate":"inputEncryptedFileUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"md5_checksum","type":"string"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"1511503333","predicate":"inputEncryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedFile"},{"id":"-182231723","predicate":"inputEncryptedFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"-317144808","predicate":"encryptedMessage","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"},{"name":"file","type":"EncryptedFile"}],"type":"EncryptedMessage"},{"id":"594758406","predicate":"encryptedMessageService","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"}],"type":"EncryptedMessage"},{"id":"-1058912715","predicate":"messages.dhConfigNotModified","params":[{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"740433629","predicate":"messages.dhConfig","params":[{"name":"g","type":"int"},{"name":"p","type":"bytes"},{"name":"version","type":"int"},{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"1443858741","predicate":"messages.sentEncryptedMessage","params":[{"name":"date","type":"int"}],"type":"messages.SentEncryptedMessage"},{"id":"-1802240206","predicate":"messages.sentEncryptedFile","params":[{"name":"date","type":"int"},{"name":"file","type":"EncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"-95482955","predicate":"inputFileBig","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"}],"type":"InputFile"},{"id":"767652808","predicate":"inputEncryptedFileBigUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"-364179876","predicate":"updateChatParticipantAdd","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1851755554","predicate":"updateChatParticipantDelete","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1906403213","predicate":"updateDcOptions","params":[{"name":"dc_options","type":"Vector<DcOption>"}],"type":"Update"},{"id":"-476700163","predicate":"inputMediaUploadedDocument","params":[{"name":"flags","type":"#"},{"name":"nosound_video","type":"flags.3?true"},{"name":"file","type":"InputFile"},{"name":"thumb","type":"flags.2?InputFile"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"caption","type":"string"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"},{"name":"ttl_seconds","type":"flags.1?int"}],"type":"InputMedia"},{"id":"1523279502","predicate":"inputMediaDocument","params":[{"name":"flags","type":"#"},{"name":"id","type":"InputDocument"},{"name":"caption","type":"string"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"2084836563","predicate":"messageMediaDocument","params":[{"name":"flags","type":"#"},{"name":"document","type":"flags.0?Document"},{"name":"caption","type":"flags.1?string"},{"name":"ttl_seconds","type":"flags.2?int"}],"type":"MessageMedia"},{"id":"1928391342","predicate":"inputDocumentEmpty","params":[],"type":"InputDocument"},{"id":"410618194","predicate":"inputDocument","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputDocument"},{"id":"1125058340","predicate":"inputDocumentFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"version","type":"int"}],"type":"InputFileLocation"},{"id":"922273905","predicate":"documentEmpty","params":[{"name":"id","type":"long"}],"type":"Document"},{"id":"-2027738169","predicate":"document","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"mime_type","type":"string"},{"name":"size","type":"int"},{"name":"thumb","type":"PhotoSize"},{"name":"dc_id","type":"int"},{"name":"version","type":"int"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"Document"},{"id":"398898678","predicate":"help.support","params":[{"name":"phone_number","type":"string"},{"name":"user","type":"User"}],"type":"help.Support"},{"id":"-1613493288","predicate":"notifyPeer","params":[{"name":"peer","type":"Peer"}],"type":"NotifyPeer"},{"id":"-1261946036","predicate":"notifyUsers","params":[],"type":"NotifyPeer"},{"id":"-1073230141","predicate":"notifyChats","params":[],"type":"NotifyPeer"},{"id":"1959820384","predicate":"notifyAll","params":[],"type":"NotifyPeer"},{"id":"-2131957734","predicate":"updateUserBlocked","params":[{"name":"user_id","type":"int"},{"name":"blocked","type":"Bool"}],"type":"Update"},{"id":"-1094555409","predicate":"updateNotifySettings","params":[{"name":"peer","type":"NotifyPeer"},{"name":"notify_settings","type":"PeerNotifySettings"}],"type":"Update"},{"id":"381645902","predicate":"sendMessageTypingAction","params":[],"type":"SendMessageAction"},{"id":"-44119819","predicate":"sendMessageCancelAction","params":[],"type":"SendMessageAction"},{"id":"-1584933265","predicate":"sendMessageRecordVideoAction","params":[],"type":"SendMessageAction"},{"id":"-378127636","predicate":"sendMessageUploadVideoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-718310409","predicate":"sendMessageRecordAudioAction","params":[],"type":"SendMessageAction"},{"id":"-212740181","predicate":"sendMessageUploadAudioAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-774682074","predicate":"sendMessageUploadPhotoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-1441998364","predicate":"sendMessageUploadDocumentAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"393186209","predicate":"sendMessageGeoLocationAction","params":[],"type":"SendMessageAction"},{"id":"1653390447","predicate":"sendMessageChooseContactAction","params":[],"type":"SendMessageAction"},{"id":"-1290580579","predicate":"contacts.found","params":[{"name":"my_results","type":"Vector<Peer>"},{"name":"results","type":"Vector<Peer>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Found"},{"id":"-337352679","predicate":"updateServiceNotification","params":[{"name":"flags","type":"#"},{"name":"popup","type":"flags.0?true"},{"name":"inbox_date","type":"flags.1?int"},{"name":"type","type":"string"},{"name":"message","type":"string"},{"name":"media","type":"MessageMedia"},{"name":"entities","type":"Vector<MessageEntity>"}],"type":"Update"},{"id":"-496024847","predicate":"userStatusRecently","params":[],"type":"UserStatus"},{"id":"129960444","predicate":"userStatusLastWeek","params":[],"type":"UserStatus"},{"id":"2011940674","predicate":"userStatusLastMonth","params":[],"type":"UserStatus"},{"id":"-298113238","predicate":"updatePrivacy","params":[{"name":"key","type":"PrivacyKey"},{"name":"rules","type":"Vector<PrivacyRule>"}],"type":"Update"},{"id":"1335282456","predicate":"inputPrivacyKeyStatusTimestamp","params":[],"type":"InputPrivacyKey"},{"id":"-1137792208","predicate":"privacyKeyStatusTimestamp","params":[],"type":"PrivacyKey"},{"id":"218751099","predicate":"inputPrivacyValueAllowContacts","params":[],"type":"InputPrivacyRule"},{"id":"407582158","predicate":"inputPrivacyValueAllowAll","params":[],"type":"InputPrivacyRule"},{"id":"320652927","predicate":"inputPrivacyValueAllowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"195371015","predicate":"inputPrivacyValueDisallowContacts","params":[],"type":"InputPrivacyRule"},{"id":"-697604407","predicate":"inputPrivacyValueDisallowAll","params":[],"type":"InputPrivacyRule"},{"id":"-1877932953","predicate":"inputPrivacyValueDisallowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"-123988","predicate":"privacyValueAllowContacts","params":[],"type":"PrivacyRule"},{"id":"1698855810","predicate":"privacyValueAllowAll","params":[],"type":"PrivacyRule"},{"id":"1297858060","predicate":"privacyValueAllowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"-125240806","predicate":"privacyValueDisallowContacts","params":[],"type":"PrivacyRule"},{"id":"-1955338397","predicate":"privacyValueDisallowAll","params":[],"type":"PrivacyRule"},{"id":"209668535","predicate":"privacyValueDisallowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"1430961007","predicate":"account.privacyRules","params":[{"name":"rules","type":"Vector<PrivacyRule>"},{"name":"users","type":"Vector<User>"}],"type":"account.PrivacyRules"},{"id":"-1194283041","predicate":"accountDaysTTL","params":[{"name":"days","type":"int"}],"type":"AccountDaysTTL"},{"id":"314130811","predicate":"updateUserPhone","params":[{"name":"user_id","type":"int"},{"name":"phone","type":"string"}],"type":"Update"},{"id":"1815593308","predicate":"documentAttributeImageSize","params":[{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"297109817","predicate":"documentAttributeAnimated","params":[],"type":"DocumentAttribute"},{"id":"1662637586","predicate":"documentAttributeSticker","params":[{"name":"flags","type":"#"},{"name":"mask","type":"flags.1?true"},{"name":"alt","type":"string"},{"name":"stickerset","type":"InputStickerSet"},{"name":"mask_coords","type":"flags.0?MaskCoords"}],"type":"DocumentAttribute"},{"id":"250621158","predicate":"documentAttributeVideo","params":[{"name":"flags","type":"#"},{"name":"round_message","type":"flags.0?true"},{"name":"supports_streaming","type":"flags.1?true"},{"name":"duration","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"-1739392570","predicate":"documentAttributeAudio","params":[{"name":"flags","type":"#"},{"name":"voice","type":"flags.10?true"},{"name":"duration","type":"int"},{"name":"title","type":"flags.0?string"},{"name":"performer","type":"flags.1?string"},{"name":"waveform","type":"flags.2?bytes"}],"type":"DocumentAttribute"},{"id":"358154344","predicate":"documentAttributeFilename","params":[{"name":"file_name","type":"string"}],"type":"DocumentAttribute"},{"id":"-244016606","predicate":"messages.stickersNotModified","params":[],"type":"messages.Stickers"},{"id":"-1970352846","predicate":"messages.stickers","params":[{"name":"hash","type":"string"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.Stickers"},{"id":"313694676","predicate":"stickerPack","params":[{"name":"emoticon","type":"string"},{"name":"documents","type":"Vector<long>"}],"type":"StickerPack"},{"id":"-395967805","predicate":"messages.allStickersNotModified","params":[],"type":"messages.AllStickers"},{"id":"-302170017","predicate":"messages.allStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSet>"}],"type":"messages.AllStickers"},{"id":"-1369215196","predicate":"disabledFeature","params":[{"name":"feature","type":"string"},{"name":"description","type":"string"}],"type":"DisabledFeature"},{"id":"-1721631396","predicate":"updateReadHistoryInbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"791617983","predicate":"updateReadHistoryOutbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-2066640507","predicate":"messages.affectedMessages","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"messages.AffectedMessages"},{"id":"1599050311","predicate":"contactLinkUnknown","params":[],"type":"ContactLink"},{"id":"-17968211","predicate":"contactLinkNone","params":[],"type":"ContactLink"},{"id":"646922073","predicate":"contactLinkHasPhone","params":[],"type":"ContactLink"},{"id":"-721239344","predicate":"contactLinkContact","params":[],"type":"ContactLink"},{"id":"2139689491","predicate":"updateWebPage","params":[{"name":"webpage","type":"WebPage"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-350980120","predicate":"webPageEmpty","params":[{"name":"id","type":"long"}],"type":"WebPage"},{"id":"-981018084","predicate":"webPagePending","params":[{"name":"id","type":"long"},{"name":"date","type":"int"}],"type":"WebPage"},{"id":"1594340540","predicate":"webPage","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"url","type":"string"},{"name":"display_url","type":"string"},{"name":"hash","type":"int"},{"name":"type","type":"flags.0?string"},{"name":"site_name","type":"flags.1?string"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"photo","type":"flags.4?Photo"},{"name":"embed_url","type":"flags.5?string"},{"name":"embed_type","type":"flags.5?string"},{"name":"embed_width","type":"flags.6?int"},{"name":"embed_height","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"author","type":"flags.8?string"},{"name":"document","type":"flags.9?Document"},{"name":"cached_page","type":"flags.10?Page"}],"type":"WebPage"},{"id":"-1557277184","predicate":"messageMediaWebPage","params":[{"name":"webpage","type":"WebPage"}],"type":"MessageMedia"},{"id":"2079516406","predicate":"authorization","params":[{"name":"hash","type":"long"},{"name":"flags","type":"int"},{"name":"device_model","type":"string"},{"name":"platform","type":"string"},{"name":"system_version","type":"string"},{"name":"api_id","type":"int"},{"name":"app_name","type":"string"},{"name":"app_version","type":"string"},{"name":"date_created","type":"int"},{"name":"date_active","type":"int"},{"name":"ip","type":"string"},{"name":"country","type":"string"},{"name":"region","type":"string"}],"type":"Authorization"},{"id":"307276766","predicate":"account.authorizations","params":[{"name":"authorizations","type":"Vector<Authorization>"}],"type":"account.Authorizations"},{"id":"-1764049896","predicate":"account.noPassword","params":[{"name":"new_salt","type":"bytes"},{"name":"email_unconfirmed_pattern","type":"string"}],"type":"account.Password"},{"id":"2081952796","predicate":"account.password","params":[{"name":"current_salt","type":"bytes"},{"name":"new_salt","type":"bytes"},{"name":"hint","type":"string"},{"name":"has_recovery","type":"Bool"},{"name":"email_unconfirmed_pattern","type":"string"}],"type":"account.Password"},{"id":"-1212732749","predicate":"account.passwordSettings","params":[{"name":"email","type":"string"}],"type":"account.PasswordSettings"},{"id":"-2037289493","predicate":"account.passwordInputSettings","params":[{"name":"flags","type":"#"},{"name":"new_salt","type":"flags.0?bytes"},{"name":"new_password_hash","type":"flags.0?bytes"},{"name":"hint","type":"flags.0?string"},{"name":"email","type":"flags.1?string"}],"type":"account.PasswordInputSettings"},{"id":"326715557","predicate":"auth.passwordRecovery","params":[{"name":"email_pattern","type":"string"}],"type":"auth.PasswordRecovery"},{"id":"-1052959727","predicate":"inputMediaVenue","params":[{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"venue_type","type":"string"}],"type":"InputMedia"},{"id":"784356159","predicate":"messageMediaVenue","params":[{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"venue_type","type":"string"}],"type":"MessageMedia"},{"id":"-1551583367","predicate":"receivedNotifyMessage","params":[{"name":"id","type":"int"},{"name":"flags","type":"int"}],"type":"ReceivedNotifyMessage"},{"id":"1776236393","predicate":"chatInviteEmpty","params":[],"type":"ExportedChatInvite"},{"id":"-64092740","predicate":"chatInviteExported","params":[{"name":"link","type":"string"}],"type":"ExportedChatInvite"},{"id":"1516793212","predicate":"chatInviteAlready","params":[{"name":"chat","type":"Chat"}],"type":"ChatInvite"},{"id":"-613092008","predicate":"chatInvite","params":[{"name":"flags","type":"#"},{"name":"channel","type":"flags.0?true"},{"name":"broadcast","type":"flags.1?true"},{"name":"public","type":"flags.2?true"},{"name":"megagroup","type":"flags.3?true"},{"name":"title","type":"string"},{"name":"photo","type":"ChatPhoto"},{"name":"participants_count","type":"int"},{"name":"participants","type":"flags.4?Vector<User>"}],"type":"ChatInvite"},{"id":"-123931160","predicate":"messageActionChatJoinedByLink","params":[{"name":"inviter_id","type":"int"}],"type":"MessageAction"},{"id":"1757493555","predicate":"updateReadMessagesContents","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-4838507","predicate":"inputStickerSetEmpty","params":[],"type":"InputStickerSet"},{"id":"-1645763991","predicate":"inputStickerSetID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputStickerSet"},{"id":"-2044933984","predicate":"inputStickerSetShortName","params":[{"name":"short_name","type":"string"}],"type":"InputStickerSet"},{"id":"-852477119","predicate":"stickerSet","params":[{"name":"flags","type":"#"},{"name":"installed","type":"flags.0?true"},{"name":"archived","type":"flags.1?true"},{"name":"official","type":"flags.2?true"},{"name":"masks","type":"flags.3?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"short_name","type":"string"},{"name":"count","type":"int"},{"name":"hash","type":"int"}],"type":"StickerSet"},{"id":"-1240849242","predicate":"messages.stickerSet","params":[{"name":"set","type":"StickerSet"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"documents","type":"Vector<Document>"}],"type":"messages.StickerSet"},{"id":"773059779","predicate":"user","params":[{"name":"flags","type":"#"},{"name":"self","type":"flags.10?true"},{"name":"contact","type":"flags.11?true"},{"name":"mutual_contact","type":"flags.12?true"},{"name":"deleted","type":"flags.13?true"},{"name":"bot","type":"flags.14?true"},{"name":"bot_chat_history","type":"flags.15?true"},{"name":"bot_nochats","type":"flags.16?true"},{"name":"verified","type":"flags.17?true"},{"name":"restricted","type":"flags.18?true"},{"name":"min","type":"flags.20?true"},{"name":"bot_inline_geo","type":"flags.21?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.0?long"},{"name":"first_name","type":"flags.1?string"},{"name":"last_name","type":"flags.2?string"},{"name":"username","type":"flags.3?string"},{"name":"phone","type":"flags.4?string"},{"name":"photo","type":"flags.5?UserProfilePhoto"},{"name":"status","type":"flags.6?UserStatus"},{"name":"bot_info_version","type":"flags.14?int"},{"name":"restriction_reason","type":"flags.18?string"},{"name":"bot_inline_placeholder","type":"flags.19?string"},{"name":"lang_code","type":"flags.22?string"}],"type":"User"},{"id":"-1032140601","predicate":"botCommand","params":[{"name":"command","type":"string"},{"name":"description","type":"string"}],"type":"BotCommand"},{"id":"-1729618630","predicate":"botInfo","params":[{"name":"user_id","type":"int"},{"name":"description","type":"string"},{"name":"commands","type":"Vector<BotCommand>"}],"type":"BotInfo"},{"id":"-1560655744","predicate":"keyboardButton","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"2002815875","predicate":"keyboardButtonRow","params":[{"name":"buttons","type":"Vector<KeyboardButton>"}],"type":"KeyboardButtonRow"},{"id":"-1606526075","predicate":"replyKeyboardHide","params":[{"name":"flags","type":"#"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"-200242528","predicate":"replyKeyboardForceReply","params":[{"name":"flags","type":"#"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"889353612","predicate":"replyKeyboardMarkup","params":[{"name":"flags","type":"#"},{"name":"resize","type":"flags.0?true"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"},{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"2072935910","predicate":"inputPeerUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"-668391402","predicate":"inputUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputUser"},{"id":"-1148011883","predicate":"messageEntityUnknown","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-100378723","predicate":"messageEntityMention","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1868782349","predicate":"messageEntityHashtag","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1827637959","predicate":"messageEntityBotCommand","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1859134776","predicate":"messageEntityUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1692693954","predicate":"messageEntityEmail","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-1117713463","predicate":"messageEntityBold","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-2106619040","predicate":"messageEntityItalic","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"681706865","predicate":"messageEntityCode","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1938967520","predicate":"messageEntityPre","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"language","type":"string"}],"type":"MessageEntity"},{"id":"1990644519","predicate":"messageEntityTextUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"url","type":"string"}],"type":"MessageEntity"},{"id":"301019932","predicate":"updateShortSentMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-292807034","predicate":"inputChannelEmpty","params":[],"type":"InputChannel"},{"id":"-1343524562","predicate":"inputChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputChannel"},{"id":"-1109531342","predicate":"peerChannel","params":[{"name":"channel_id","type":"int"}],"type":"Peer"},{"id":"548253432","predicate":"inputPeerChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"1158377749","predicate":"channel","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"left","type":"flags.2?true"},{"name":"editor","type":"flags.3?true"},{"name":"broadcast","type":"flags.5?true"},{"name":"verified","type":"flags.7?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"restricted","type":"flags.9?true"},{"name":"democracy","type":"flags.10?true"},{"name":"signatures","type":"flags.11?true"},{"name":"min","type":"flags.12?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.13?long"},{"name":"title","type":"string"},{"name":"username","type":"flags.6?string"},{"name":"photo","type":"ChatPhoto"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"restriction_reason","type":"flags.9?string"},{"name":"admin_rights","type":"flags.14?ChannelAdminRights"},{"name":"banned_rights","type":"flags.15?ChannelBannedRights"},{"name":"participants_count","type":"flags.17?int"}],"type":"Chat"},{"id":"681420594","predicate":"channelForbidden","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.5?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"until_date","type":"flags.16?int"}],"type":"Chat"},{"id":"2131196633","predicate":"contacts.resolvedPeer","params":[{"name":"peer","type":"Peer"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ResolvedPeer"},{"id":"1991201921","predicate":"channelFull","params":[{"name":"flags","type":"#"},{"name":"can_view_participants","type":"flags.3?true"},{"name":"can_set_username","type":"flags.6?true"},{"name":"can_set_stickers","type":"flags.7?true"},{"name":"hidden_prehistory","type":"flags.10?true"},{"name":"id","type":"int"},{"name":"about","type":"string"},{"name":"participants_count","type":"flags.0?int"},{"name":"admins_count","type":"flags.1?int"},{"name":"kicked_count","type":"flags.2?int"},{"name":"banned_count","type":"flags.2?int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"},{"name":"migrated_from_chat_id","type":"flags.4?int"},{"name":"migrated_from_max_id","type":"flags.4?int"},{"name":"pinned_msg_id","type":"flags.5?int"},{"name":"stickerset","type":"flags.8?StickerSet"},{"name":"available_min_id","type":"flags.9?int"}],"type":"ChatFull"},{"id":"182649427","predicate":"messageRange","params":[{"name":"min_id","type":"int"},{"name":"max_id","type":"int"}],"type":"MessageRange"},{"id":"-1725551049","predicate":"messages.channelMessages","params":[{"name":"flags","type":"#"},{"name":"pts","type":"int"},{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"-1781355374","predicate":"messageActionChannelCreate","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"-352032773","predicate":"updateChannelTooLong","params":[{"name":"flags","type":"#"},{"name":"channel_id","type":"int"},{"name":"pts","type":"flags.0?int"}],"type":"Update"},{"id":"-1227598250","predicate":"updateChannel","params":[{"name":"channel_id","type":"int"}],"type":"Update"},{"id":"1656358105","predicate":"updateNewChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1108669311","predicate":"updateReadChannelInbox","params":[{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"}],"type":"Update"},{"id":"-1015733815","predicate":"updateDeleteChannelMessages","params":[{"name":"channel_id","type":"int"},{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1734268085","predicate":"updateChannelMessageViews","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"},{"name":"views","type":"int"}],"type":"Update"},{"id":"1041346555","predicate":"updates.channelDifferenceEmpty","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"}],"type":"updates.ChannelDifference"},{"id":"1788705589","predicate":"updates.channelDifferenceTooLong","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"top_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"unread_mentions_count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"543450958","predicate":"updates.channelDifference","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"new_messages","type":"Vector<Message>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"-1798033689","predicate":"channelMessagesFilterEmpty","params":[],"type":"ChannelMessagesFilter"},{"id":"-847783593","predicate":"channelMessagesFilter","params":[{"name":"flags","type":"#"},{"name":"exclude_new_messages","type":"flags.1?true"},{"name":"ranges","type":"Vector<MessageRange>"}],"type":"ChannelMessagesFilter"},{"id":"367766557","predicate":"channelParticipant","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1557620115","predicate":"channelParticipantSelf","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-471670279","predicate":"channelParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChannelParticipant"},{"id":"-566281095","predicate":"channelParticipantsRecent","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1268741783","predicate":"channelParticipantsAdmins","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1548400251","predicate":"channelParticipantsKicked","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"-177282392","predicate":"channels.channelParticipants","params":[{"name":"count","type":"int"},{"name":"participants","type":"Vector<ChannelParticipant>"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipants"},{"id":"-791039645","predicate":"channels.channelParticipant","params":[{"name":"participant","type":"ChannelParticipant"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipant"},{"id":"-636267638","predicate":"chatParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChatParticipant"},{"id":"-489233354","predicate":"chatParticipantAdmin","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"1855224129","predicate":"updateChatAdmins","params":[{"name":"chat_id","type":"int"},{"name":"enabled","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1232070311","predicate":"updateChatParticipantAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"is_admin","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1371385889","predicate":"messageActionChatMigrateTo","params":[{"name":"channel_id","type":"int"}],"type":"MessageAction"},{"id":"-1336546578","predicate":"messageActionChannelMigrateFrom","params":[{"name":"title","type":"string"},{"name":"chat_id","type":"int"}],"type":"MessageAction"},{"id":"-1328445861","predicate":"channelParticipantsBots","params":[],"type":"ChannelParticipantsFilter"},{"id":"-236044656","predicate":"help.termsOfService","params":[{"name":"text","type":"string"}],"type":"help.TermsOfService"},{"id":"1753886890","predicate":"updateNewStickerSet","params":[{"name":"stickerset","type":"messages.StickerSet"}],"type":"Update"},{"id":"196268545","predicate":"updateStickerSetsOrder","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"order","type":"Vector<long>"}],"type":"Update"},{"id":"1135492588","predicate":"updateStickerSets","params":[],"type":"Update"},{"id":"372165663","predicate":"foundGif","params":[{"name":"url","type":"string"},{"name":"thumb_url","type":"string"},{"name":"content_url","type":"string"},{"name":"content_type","type":"string"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"FoundGif"},{"id":"-1670052855","predicate":"foundGifCached","params":[{"name":"url","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"Document"}],"type":"FoundGif"},{"id":"1212395773","predicate":"inputMediaGifExternal","params":[{"name":"url","type":"string"},{"name":"q","type":"string"}],"type":"InputMedia"},{"id":"1158290442","predicate":"messages.foundGifs","params":[{"name":"next_offset","type":"int"},{"name":"results","type":"Vector<FoundGif>"}],"type":"messages.FoundGifs"},{"id":"-402498398","predicate":"messages.savedGifsNotModified","params":[],"type":"messages.SavedGifs"},{"id":"772213157","predicate":"messages.savedGifs","params":[{"name":"hash","type":"int"},{"name":"gifs","type":"Vector<Document>"}],"type":"messages.SavedGifs"},{"id":"-1821035490","predicate":"updateSavedGifs","params":[],"type":"Update"},{"id":"691006739","predicate":"inputBotInlineMessageMediaAuto","params":[{"name":"flags","type":"#"},{"name":"caption","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"1036876423","predicate":"inputBotInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"750510426","predicate":"inputBotInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb_url","type":"flags.4?string"},{"name":"content_url","type":"flags.5?string"},{"name":"content_type","type":"flags.5?string"},{"name":"w","type":"flags.6?int"},{"name":"h","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"175419739","predicate":"botInlineMessageMediaAuto","params":[{"name":"flags","type":"#"},{"name":"caption","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1937807902","predicate":"botInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1679053127","predicate":"botInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb_url","type":"flags.4?string"},{"name":"content_url","type":"flags.5?string"},{"name":"content_type","type":"flags.5?string"},{"name":"w","type":"flags.6?int"},{"name":"h","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-1803769784","predicate":"messages.botResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"query_id","type":"long"},{"name":"next_offset","type":"flags.1?string"},{"name":"switch_pm","type":"flags.2?InlineBotSwitchPM"},{"name":"results","type":"Vector<BotInlineResult>"},{"name":"cache_time","type":"int"},{"name":"users","type":"Vector<User>"}],"type":"messages.BotResults"},{"id":"1417832080","predicate":"updateBotInlineQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"geo","type":"flags.0?GeoPoint"},{"name":"offset","type":"string"}],"type":"Update"},{"id":"239663460","predicate":"updateBotInlineSend","params":[{"name":"flags","type":"#"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"geo","type":"flags.0?GeoPoint"},{"name":"id","type":"string"},{"name":"msg_id","type":"flags.1?InputBotInlineMessageID"}],"type":"Update"},{"id":"1358283666","predicate":"inputMessagesFilterVoice","params":[],"type":"MessagesFilter"},{"id":"928101534","predicate":"inputMessagesFilterMusic","params":[],"type":"MessagesFilter"},{"id":"-1107622874","predicate":"inputPrivacyKeyChatInvite","params":[],"type":"InputPrivacyKey"},{"id":"1343122938","predicate":"privacyKeyChatInvite","params":[],"type":"PrivacyKey"},{"id":"1571494644","predicate":"exportedMessageLink","params":[{"name":"link","type":"string"},{"name":"html","type":"string"}],"type":"ExportedMessageLink"},{"id":"1436466797","predicate":"messageFwdHeader","params":[{"name":"flags","type":"#"},{"name":"from_id","type":"flags.0?int"},{"name":"date","type":"int"},{"name":"channel_id","type":"flags.1?int"},{"name":"channel_post","type":"flags.2?int"},{"name":"post_author","type":"flags.3?string"},{"name":"saved_from_peer","type":"flags.4?Peer"},{"name":"saved_from_msg_id","type":"flags.4?int"}],"type":"MessageFwdHeader"},{"id":"457133559","predicate":"updateEditChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1738988427","predicate":"updateChannelPinnedMessage","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"}],"type":"Update"},{"id":"-1799538451","predicate":"messageActionPinMessage","params":[],"type":"MessageAction"},{"id":"1923290508","predicate":"auth.codeTypeSms","params":[],"type":"auth.CodeType"},{"id":"1948046307","predicate":"auth.codeTypeCall","params":[],"type":"auth.CodeType"},{"id":"577556219","predicate":"auth.codeTypeFlashCall","params":[],"type":"auth.CodeType"},{"id":"1035688326","predicate":"auth.sentCodeTypeApp","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"-1073693790","predicate":"auth.sentCodeTypeSms","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"1398007207","predicate":"auth.sentCodeTypeCall","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"-1425815847","predicate":"auth.sentCodeTypeFlashCall","params":[{"name":"pattern","type":"string"}],"type":"auth.SentCodeType"},{"id":"629866245","predicate":"keyboardButtonUrl","params":[{"name":"text","type":"string"},{"name":"url","type":"string"}],"type":"KeyboardButton"},{"id":"1748655686","predicate":"keyboardButtonCallback","params":[{"name":"text","type":"string"},{"name":"data","type":"bytes"}],"type":"KeyboardButton"},{"id":"-1318425559","predicate":"keyboardButtonRequestPhone","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"-59151553","predicate":"keyboardButtonRequestGeoLocation","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"90744648","predicate":"keyboardButtonSwitchInline","params":[{"name":"flags","type":"#"},{"name":"same_peer","type":"flags.0?true"},{"name":"text","type":"string"},{"name":"query","type":"string"}],"type":"KeyboardButton"},{"id":"1218642516","predicate":"replyInlineMarkup","params":[{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"911761060","predicate":"messages.botCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"alert","type":"flags.1?true"},{"name":"has_url","type":"flags.3?true"},{"name":"native_ui","type":"flags.4?true"},{"name":"message","type":"flags.0?string"},{"name":"url","type":"flags.2?string"},{"name":"cache_time","type":"int"}],"type":"messages.BotCallbackAnswer"},{"id":"-415938591","predicate":"updateBotCallbackQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"peer","type":"Peer"},{"name":"msg_id","type":"int"},{"name":"chat_instance","type":"long"},{"name":"data","type":"flags.0?bytes"},{"name":"game_short_name","type":"flags.1?string"}],"type":"Update"},{"id":"649453030","predicate":"messages.messageEditData","params":[{"name":"flags","type":"#"},{"name":"caption","type":"flags.0?true"}],"type":"messages.MessageEditData"},{"id":"-469536605","predicate":"updateEditMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1045340827","predicate":"inputBotInlineMessageMediaGeo","params":[{"name":"flags","type":"#"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"period","type":"int"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-1431327288","predicate":"inputBotInlineMessageMediaVenue","params":[{"name":"flags","type":"#"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"766443943","predicate":"inputBotInlineMessageMediaContact","params":[{"name":"flags","type":"#"},{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-1222451611","predicate":"botInlineMessageMediaGeo","params":[{"name":"flags","type":"#"},{"name":"geo","type":"GeoPoint"},{"name":"period","type":"int"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"1130767150","predicate":"botInlineMessageMediaVenue","params":[{"name":"flags","type":"#"},{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"904770772","predicate":"botInlineMessageMediaContact","params":[{"name":"flags","type":"#"},{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1462213465","predicate":"inputBotInlineResultPhoto","params":[{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"InputPhoto"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"-459324","predicate":"inputBotInlineResultDocument","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"document","type":"InputDocument"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"400266251","predicate":"botInlineMediaResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"flags.0?Photo"},{"name":"document","type":"flags.1?Document"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-1995686519","predicate":"inputBotInlineMessageID","params":[{"name":"dc_id","type":"int"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputBotInlineMessageID"},{"id":"-103646630","predicate":"updateInlineBotCallbackQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"msg_id","type":"InputBotInlineMessageID"},{"name":"chat_instance","type":"long"},{"name":"data","type":"flags.0?bytes"},{"name":"game_short_name","type":"flags.1?string"}],"type":"Update"},{"id":"1008755359","predicate":"inlineBotSwitchPM","params":[{"name":"text","type":"string"},{"name":"start_param","type":"string"}],"type":"InlineBotSwitchPM"},{"id":"863093588","predicate":"messages.peerDialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"messages.PeerDialogs"},{"id":"-305282981","predicate":"topPeer","params":[{"name":"peer","type":"Peer"},{"name":"rating","type":"double"}],"type":"TopPeer"},{"id":"-1419371685","predicate":"topPeerCategoryBotsPM","params":[],"type":"TopPeerCategory"},{"id":"344356834","predicate":"topPeerCategoryBotsInline","params":[],"type":"TopPeerCategory"},{"id":"104314861","predicate":"topPeerCategoryCorrespondents","params":[],"type":"TopPeerCategory"},{"id":"-1122524854","predicate":"topPeerCategoryGroups","params":[],"type":"TopPeerCategory"},{"id":"371037736","predicate":"topPeerCategoryChannels","params":[],"type":"TopPeerCategory"},{"id":"-75283823","predicate":"topPeerCategoryPeers","params":[{"name":"category","type":"TopPeerCategory"},{"name":"count","type":"int"},{"name":"peers","type":"Vector<TopPeer>"}],"type":"TopPeerCategoryPeers"},{"id":"-567906571","predicate":"contacts.topPeersNotModified","params":[],"type":"contacts.TopPeers"},{"id":"1891070632","predicate":"contacts.topPeers","params":[{"name":"categories","type":"Vector<TopPeerCategoryPeers>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.TopPeers"},{"id":"892193368","predicate":"messageEntityMentionName","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"user_id","type":"int"}],"type":"MessageEntity"},{"id":"546203849","predicate":"inputMessageEntityMentionName","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"MessageEntity"},{"id":"975236280","predicate":"inputMessagesFilterChatPhotos","params":[],"type":"MessagesFilter"},{"id":"634833351","predicate":"updateReadChannelOutbox","params":[{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"}],"type":"Update"},{"id":"-299124375","predicate":"updateDraftMessage","params":[{"name":"peer","type":"Peer"},{"name":"draft","type":"DraftMessage"}],"type":"Update"},{"id":"-1169445179","predicate":"draftMessageEmpty","params":[],"type":"DraftMessage"},{"id":"-40996577","predicate":"draftMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"date","type":"int"}],"type":"DraftMessage"},{"id":"-1615153660","predicate":"messageActionHistoryClear","params":[],"type":"MessageAction"},{"id":"82699215","predicate":"messages.featuredStickersNotModified","params":[],"type":"messages.FeaturedStickers"},{"id":"-123893531","predicate":"messages.featuredStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"},{"name":"unread","type":"Vector<long>"}],"type":"messages.FeaturedStickers"},{"id":"1461528386","predicate":"updateReadFeaturedStickers","params":[],"type":"Update"},{"id":"186120336","predicate":"messages.recentStickersNotModified","params":[],"type":"messages.RecentStickers"},{"id":"1558317424","predicate":"messages.recentStickers","params":[{"name":"hash","type":"int"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.RecentStickers"},{"id":"-1706939360","predicate":"updateRecentStickers","params":[],"type":"Update"},{"id":"1338747336","predicate":"messages.archivedStickers","params":[{"name":"count","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.ArchivedStickers"},{"id":"946083368","predicate":"messages.stickerSetInstallResultSuccess","params":[],"type":"messages.StickerSetInstallResult"},{"id":"904138920","predicate":"messages.stickerSetInstallResultArchive","params":[{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.StickerSetInstallResult"},{"id":"1678812626","predicate":"stickerSetCovered","params":[{"name":"set","type":"StickerSet"},{"name":"cover","type":"Document"}],"type":"StickerSetCovered"},{"id":"-1574314746","predicate":"updateConfig","params":[],"type":"Update"},{"id":"861169551","predicate":"updatePtsChanged","params":[],"type":"Update"},{"id":"153267905","predicate":"inputMediaPhotoExternal","params":[{"name":"flags","type":"#"},{"name":"url","type":"string"},{"name":"caption","type":"string"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"-1225309387","predicate":"inputMediaDocumentExternal","params":[{"name":"flags","type":"#"},{"name":"url","type":"string"},{"name":"caption","type":"string"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"872932635","predicate":"stickerSetMultiCovered","params":[{"name":"set","type":"StickerSet"},{"name":"covers","type":"Vector<Document>"}],"type":"StickerSetCovered"},{"id":"-1361650766","predicate":"maskCoords","params":[{"name":"n","type":"int"},{"name":"x","type":"double"},{"name":"y","type":"double"},{"name":"zoom","type":"double"}],"type":"MaskCoords"},{"id":"-1744710921","predicate":"documentAttributeHasStickers","params":[],"type":"DocumentAttribute"},{"id":"1251549527","predicate":"inputStickeredMediaPhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"InputStickeredMedia"},{"id":"70813275","predicate":"inputStickeredMediaDocument","params":[{"name":"id","type":"InputDocument"}],"type":"InputStickeredMedia"},{"id":"-1107729093","predicate":"game","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"short_name","type":"string"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"flags.0?Document"}],"type":"Game"},{"id":"1336154098","predicate":"inputBotInlineResultGame","params":[{"name":"id","type":"string"},{"name":"short_name","type":"string"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"1262639204","predicate":"inputBotInlineMessageGame","params":[{"name":"flags","type":"#"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-38694904","predicate":"messageMediaGame","params":[{"name":"game","type":"Game"}],"type":"MessageMedia"},{"id":"-750828557","predicate":"inputMediaGame","params":[{"name":"id","type":"InputGame"}],"type":"InputMedia"},{"id":"53231223","predicate":"inputGameID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputGame"},{"id":"-1020139510","predicate":"inputGameShortName","params":[{"name":"bot_id","type":"InputUser"},{"name":"short_name","type":"string"}],"type":"InputGame"},{"id":"1358175439","predicate":"keyboardButtonGame","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"-1834538890","predicate":"messageActionGameScore","params":[{"name":"game_id","type":"long"},{"name":"score","type":"int"}],"type":"MessageAction"},{"id":"1493171408","predicate":"highScore","params":[{"name":"pos","type":"int"},{"name":"user_id","type":"int"},{"name":"score","type":"int"}],"type":"HighScore"},{"id":"-1707344487","predicate":"messages.highScores","params":[{"name":"scores","type":"Vector<HighScore>"},{"name":"users","type":"Vector<User>"}],"type":"messages.HighScores"},{"id":"1258196845","predicate":"updates.differenceTooLong","params":[{"name":"pts","type":"int"}],"type":"updates.Difference"},{"id":"1081547008","predicate":"updateChannelWebPage","params":[{"name":"channel_id","type":"int"},{"name":"webpage","type":"WebPage"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1663561404","predicate":"messages.chatsSlice","params":[{"name":"count","type":"int"},{"name":"chats","type":"Vector<Chat>"}],"type":"messages.Chats"},{"id":"-599948721","predicate":"textEmpty","params":[],"type":"RichText"},{"id":"1950782688","predicate":"textPlain","params":[{"name":"text","type":"string"}],"type":"RichText"},{"id":"1730456516","predicate":"textBold","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-653089380","predicate":"textItalic","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-1054465340","predicate":"textUnderline","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-1678197867","predicate":"textStrike","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"1816074681","predicate":"textFixed","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"1009288385","predicate":"textUrl","params":[{"name":"text","type":"RichText"},{"name":"url","type":"string"},{"name":"webpage_id","type":"long"}],"type":"RichText"},{"id":"-564523562","predicate":"textEmail","params":[{"name":"text","type":"RichText"},{"name":"email","type":"string"}],"type":"RichText"},{"id":"2120376535","predicate":"textConcat","params":[{"name":"texts","type":"Vector<RichText>"}],"type":"RichText"},{"id":"324435594","predicate":"pageBlockUnsupported","params":[],"type":"PageBlock"},{"id":"1890305021","predicate":"pageBlockTitle","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-1879401953","predicate":"pageBlockSubtitle","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-1162877472","predicate":"pageBlockAuthorDate","params":[{"name":"author","type":"RichText"},{"name":"published_date","type":"int"}],"type":"PageBlock"},{"id":"-1076861716","predicate":"pageBlockHeader","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-248793375","predicate":"pageBlockSubheader","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"1182402406","predicate":"pageBlockParagraph","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-1066346178","predicate":"pageBlockPreformatted","params":[{"name":"text","type":"RichText"},{"name":"language","type":"string"}],"type":"PageBlock"},{"id":"1216809369","predicate":"pageBlockFooter","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-618614392","predicate":"pageBlockDivider","params":[],"type":"PageBlock"},{"id":"-837994576","predicate":"pageBlockAnchor","params":[{"name":"name","type":"string"}],"type":"PageBlock"},{"id":"978896884","predicate":"pageBlockList","params":[{"name":"ordered","type":"Bool"},{"name":"items","type":"Vector<RichText>"}],"type":"PageBlock"},{"id":"641563686","predicate":"pageBlockBlockquote","params":[{"name":"text","type":"RichText"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"1329878739","predicate":"pageBlockPullquote","params":[{"name":"text","type":"RichText"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"-372860542","predicate":"pageBlockPhoto","params":[{"name":"photo_id","type":"long"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"-640214938","predicate":"pageBlockVideo","params":[{"name":"flags","type":"#"},{"name":"autoplay","type":"flags.0?true"},{"name":"loop","type":"flags.1?true"},{"name":"video_id","type":"long"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"972174080","predicate":"pageBlockCover","params":[{"name":"cover","type":"PageBlock"}],"type":"PageBlock"},{"id":"-840826671","predicate":"pageBlockEmbed","params":[{"name":"flags","type":"#"},{"name":"full_width","type":"flags.0?true"},{"name":"allow_scrolling","type":"flags.3?true"},{"name":"url","type":"flags.1?string"},{"name":"html","type":"flags.2?string"},{"name":"poster_photo_id","type":"flags.4?long"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"690781161","predicate":"pageBlockEmbedPost","params":[{"name":"url","type":"string"},{"name":"webpage_id","type":"long"},{"name":"author_photo_id","type":"long"},{"name":"author","type":"string"},{"name":"date","type":"int"},{"name":"blocks","type":"Vector<PageBlock>"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"145955919","predicate":"pageBlockCollage","params":[{"name":"items","type":"Vector<PageBlock>"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"319588707","predicate":"pageBlockSlideshow","params":[{"name":"items","type":"Vector<PageBlock>"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"-1908433218","predicate":"pagePart","params":[{"name":"blocks","type":"Vector<PageBlock>"},{"name":"photos","type":"Vector<Photo>"},{"name":"documents","type":"Vector<Document>"}],"type":"Page"},{"id":"1433323434","predicate":"pageFull","params":[{"name":"blocks","type":"Vector<PageBlock>"},{"name":"photos","type":"Vector<Photo>"},{"name":"documents","type":"Vector<Document>"}],"type":"Page"},{"id":"-2054908813","predicate":"webPageNotModified","params":[],"type":"WebPage"},{"id":"-88417185","predicate":"inputPrivacyKeyPhoneCall","params":[],"type":"InputPrivacyKey"},{"id":"1030105979","predicate":"privacyKeyPhoneCall","params":[],"type":"PrivacyKey"},{"id":"-580219064","predicate":"sendMessageGamePlayAction","params":[],"type":"SendMessageAction"},{"id":"-2048646399","predicate":"phoneCallDiscardReasonMissed","params":[],"type":"PhoneCallDiscardReason"},{"id":"-527056480","predicate":"phoneCallDiscardReasonDisconnect","params":[],"type":"PhoneCallDiscardReason"},{"id":"1471006352","predicate":"phoneCallDiscardReasonHangup","params":[],"type":"PhoneCallDiscardReason"},{"id":"-84416311","predicate":"phoneCallDiscardReasonBusy","params":[],"type":"PhoneCallDiscardReason"},{"id":"-686710068","predicate":"updateDialogPinned","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.0?true"},{"name":"peer","type":"Peer"}],"type":"Update"},{"id":"-657787251","predicate":"updatePinnedDialogs","params":[{"name":"flags","type":"#"},{"name":"order","type":"flags.0?Vector<Peer>"}],"type":"Update"},{"id":"2104790276","predicate":"dataJSON","params":[{"name":"data","type":"string"}],"type":"DataJSON"},{"id":"-2095595325","predicate":"updateBotWebhookJSON","params":[{"name":"data","type":"DataJSON"}],"type":"Update"},{"id":"-1684914010","predicate":"updateBotWebhookJSONQuery","params":[{"name":"query_id","type":"long"},{"name":"data","type":"DataJSON"},{"name":"timeout","type":"int"}],"type":"Update"},{"id":"-886477832","predicate":"labeledPrice","params":[{"name":"label","type":"string"},{"name":"amount","type":"long"}],"type":"LabeledPrice"},{"id":"-1022713000","predicate":"invoice","params":[{"name":"flags","type":"#"},{"name":"test","type":"flags.0?true"},{"name":"name_requested","type":"flags.1?true"},{"name":"phone_requested","type":"flags.2?true"},{"name":"email_requested","type":"flags.3?true"},{"name":"shipping_address_requested","type":"flags.4?true"},{"name":"flexible","type":"flags.5?true"},{"name":"phone_to_provider","type":"flags.6?true"},{"name":"email_to_provider","type":"flags.7?true"},{"name":"currency","type":"string"},{"name":"prices","type":"Vector<LabeledPrice>"}],"type":"Invoice"},{"id":"-186607933","predicate":"inputMediaInvoice","params":[{"name":"flags","type":"#"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"flags.0?InputWebDocument"},{"name":"invoice","type":"Invoice"},{"name":"payload","type":"bytes"},{"name":"provider","type":"string"},{"name":"provider_data","type":"DataJSON"},{"name":"start_param","type":"string"}],"type":"InputMedia"},{"id":"-368917890","predicate":"paymentCharge","params":[{"name":"id","type":"string"},{"name":"provider_charge_id","type":"string"}],"type":"PaymentCharge"},{"id":"-1892568281","predicate":"messageActionPaymentSentMe","params":[{"name":"flags","type":"#"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"},{"name":"payload","type":"bytes"},{"name":"info","type":"flags.0?PaymentRequestedInfo"},{"name":"shipping_option_id","type":"flags.1?string"},{"name":"charge","type":"PaymentCharge"}],"type":"MessageAction"},{"id":"-2074799289","predicate":"messageMediaInvoice","params":[{"name":"flags","type":"#"},{"name":"shipping_address_requested","type":"flags.1?true"},{"name":"test","type":"flags.3?true"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"flags.0?WebDocument"},{"name":"receipt_msg_id","type":"flags.2?int"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"},{"name":"start_param","type":"string"}],"type":"MessageMedia"},{"id":"512535275","predicate":"postAddress","params":[{"name":"street_line1","type":"string"},{"name":"street_line2","type":"string"},{"name":"city","type":"string"},{"name":"state","type":"string"},{"name":"country_iso2","type":"string"},{"name":"post_code","type":"string"}],"type":"PostAddress"},{"id":"-1868808300","predicate":"paymentRequestedInfo","params":[{"name":"flags","type":"#"},{"name":"name","type":"flags.0?string"},{"name":"phone","type":"flags.1?string"},{"name":"email","type":"flags.2?string"},{"name":"shipping_address","type":"flags.3?PostAddress"}],"type":"PaymentRequestedInfo"},{"id":"-1344716869","predicate":"keyboardButtonBuy","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"1080663248","predicate":"messageActionPaymentSent","params":[{"name":"currency","type":"string"},{"name":"total_amount","type":"long"}],"type":"MessageAction"},{"id":"-842892769","predicate":"paymentSavedCredentialsCard","params":[{"name":"id","type":"string"},{"name":"title","type":"string"}],"type":"PaymentSavedCredentials"},{"id":"-971322408","predicate":"webDocument","params":[{"name":"url","type":"string"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"dc_id","type":"int"}],"type":"WebDocument"},{"id":"-1678949555","predicate":"inputWebDocument","params":[{"name":"url","type":"string"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"InputWebDocument"},{"id":"-1036396922","predicate":"inputWebFileLocation","params":[{"name":"url","type":"string"},{"name":"access_hash","type":"long"}],"type":"InputWebFileLocation"},{"id":"568808380","predicate":"upload.webFile","params":[{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"file_type","type":"storage.FileType"},{"name":"mtime","type":"int"},{"name":"bytes","type":"bytes"}],"type":"upload.WebFile"},{"id":"1062645411","predicate":"payments.paymentForm","params":[{"name":"flags","type":"#"},{"name":"can_save_credentials","type":"flags.2?true"},{"name":"password_missing","type":"flags.3?true"},{"name":"bot_id","type":"int"},{"name":"invoice","type":"Invoice"},{"name":"provider_id","type":"int"},{"name":"url","type":"string"},{"name":"native_provider","type":"flags.4?string"},{"name":"native_params","type":"flags.4?DataJSON"},{"name":"saved_info","type":"flags.0?PaymentRequestedInfo"},{"name":"saved_credentials","type":"flags.1?PaymentSavedCredentials"},{"name":"users","type":"Vector<User>"}],"type":"payments.PaymentForm"},{"id":"-784000893","predicate":"payments.validatedRequestedInfo","params":[{"name":"flags","type":"#"},{"name":"id","type":"flags.0?string"},{"name":"shipping_options","type":"flags.1?Vector<ShippingOption>"}],"type":"payments.ValidatedRequestedInfo"},{"id":"1314881805","predicate":"payments.paymentResult","params":[{"name":"updates","type":"Updates"}],"type":"payments.PaymentResult"},{"id":"1800845601","predicate":"payments.paymentVerficationNeeded","params":[{"name":"url","type":"string"}],"type":"payments.PaymentResult"},{"id":"1342771681","predicate":"payments.paymentReceipt","params":[{"name":"flags","type":"#"},{"name":"date","type":"int"},{"name":"bot_id","type":"int"},{"name":"invoice","type":"Invoice"},{"name":"provider_id","type":"int"},{"name":"info","type":"flags.0?PaymentRequestedInfo"},{"name":"shipping","type":"flags.1?ShippingOption"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"},{"name":"credentials_title","type":"string"},{"name":"users","type":"Vector<User>"}],"type":"payments.PaymentReceipt"},{"id":"-74456004","predicate":"payments.savedInfo","params":[{"name":"flags","type":"#"},{"name":"has_saved_credentials","type":"flags.1?true"},{"name":"saved_info","type":"flags.0?PaymentRequestedInfo"}],"type":"payments.SavedInfo"},{"id":"-1056001329","predicate":"inputPaymentCredentialsSaved","params":[{"name":"id","type":"string"},{"name":"tmp_password","type":"bytes"}],"type":"InputPaymentCredentials"},{"id":"873977640","predicate":"inputPaymentCredentials","params":[{"name":"flags","type":"#"},{"name":"save","type":"flags.0?true"},{"name":"data","type":"DataJSON"}],"type":"InputPaymentCredentials"},{"id":"-614138572","predicate":"account.tmpPassword","params":[{"name":"tmp_password","type":"bytes"},{"name":"valid_until","type":"int"}],"type":"account.TmpPassword"},{"id":"-1239335713","predicate":"shippingOption","params":[{"name":"id","type":"string"},{"name":"title","type":"string"},{"name":"prices","type":"Vector<LabeledPrice>"}],"type":"ShippingOption"},{"id":"-523384512","predicate":"updateBotShippingQuery","params":[{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"payload","type":"bytes"},{"name":"shipping_address","type":"PostAddress"}],"type":"Update"},{"id":"1563376297","predicate":"updateBotPrecheckoutQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"payload","type":"bytes"},{"name":"info","type":"flags.0?PaymentRequestedInfo"},{"name":"shipping_option_id","type":"flags.1?string"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"}],"type":"Update"},{"id":"-6249322","predicate":"inputStickerSetItem","params":[{"name":"flags","type":"#"},{"name":"document","type":"InputDocument"},{"name":"emoji","type":"string"},{"name":"mask_coords","type":"flags.0?MaskCoords"}],"type":"InputStickerSetItem"},{"id":"-1425052898","predicate":"updatePhoneCall","params":[{"name":"phone_call","type":"PhoneCall"}],"type":"Update"},{"id":"506920429","predicate":"inputPhoneCall","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputPhoneCall"},{"id":"1399245077","predicate":"phoneCallEmpty","params":[{"name":"id","type":"long"}],"type":"PhoneCall"},{"id":"462375633","predicate":"phoneCallWaiting","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"protocol","type":"PhoneCallProtocol"},{"name":"receive_date","type":"flags.0?int"}],"type":"PhoneCall"},{"id":"-2089411356","predicate":"phoneCallRequested","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_hash","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"PhoneCall"},{"id":"1828732223","predicate":"phoneCallAccepted","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_b","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"PhoneCall"},{"id":"-1660057","predicate":"phoneCall","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_or_b","type":"bytes"},{"name":"key_fingerprint","type":"long"},{"name":"protocol","type":"PhoneCallProtocol"},{"name":"connection","type":"PhoneConnection"},{"name":"alternative_connections","type":"Vector<PhoneConnection>"},{"name":"start_date","type":"int"}],"type":"PhoneCall"},{"id":"1355435489","predicate":"phoneCallDiscarded","params":[{"name":"flags","type":"#"},{"name":"need_rating","type":"flags.2?true"},{"name":"need_debug","type":"flags.3?true"},{"name":"id","type":"long"},{"name":"reason","type":"flags.0?PhoneCallDiscardReason"},{"name":"duration","type":"flags.1?int"}],"type":"PhoneCall"},{"id":"-1655957568","predicate":"phoneConnection","params":[{"name":"id","type":"long"},{"name":"ip","type":"string"},{"name":"ipv6","type":"string"},{"name":"port","type":"int"},{"name":"peer_tag","type":"bytes"}],"type":"PhoneConnection"},{"id":"-1564789301","predicate":"phoneCallProtocol","params":[{"name":"flags","type":"#"},{"name":"udp_p2p","type":"flags.0?true"},{"name":"udp_reflector","type":"flags.1?true"},{"name":"min_layer","type":"int"},{"name":"max_layer","type":"int"}],"type":"PhoneCallProtocol"},{"id":"-326966976","predicate":"phone.phoneCall","params":[{"name":"phone_call","type":"PhoneCall"},{"name":"users","type":"Vector<User>"}],"type":"phone.PhoneCall"},{"id":"-2134272152","predicate":"inputMessagesFilterPhoneCalls","params":[{"name":"flags","type":"#"},{"name":"missed","type":"flags.0?true"}],"type":"MessagesFilter"},{"id":"-2132731265","predicate":"messageActionPhoneCall","params":[{"name":"flags","type":"#"},{"name":"call_id","type":"long"},{"name":"reason","type":"flags.0?PhoneCallDiscardReason"},{"name":"duration","type":"flags.1?int"}],"type":"MessageAction"},{"id":"2054952868","predicate":"inputMessagesFilterRoundVoice","params":[],"type":"MessagesFilter"},{"id":"-1253451181","predicate":"inputMessagesFilterRoundVideo","params":[],"type":"MessagesFilter"},{"id":"-1997373508","predicate":"sendMessageRecordRoundAction","params":[],"type":"SendMessageAction"},{"id":"608050278","predicate":"sendMessageUploadRoundAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-363659686","predicate":"upload.fileCdnRedirect","params":[{"name":"dc_id","type":"int"},{"name":"file_token","type":"bytes"},{"name":"encryption_key","type":"bytes"},{"name":"encryption_iv","type":"bytes"},{"name":"cdn_file_hashes","type":"Vector<CdnFileHash>"}],"type":"upload.File"},{"id":"-290921362","predicate":"upload.cdnFileReuploadNeeded","params":[{"name":"request_token","type":"bytes"}],"type":"upload.CdnFile"},{"id":"-1449145777","predicate":"upload.cdnFile","params":[{"name":"bytes","type":"bytes"}],"type":"upload.CdnFile"},{"id":"-914167110","predicate":"cdnPublicKey","params":[{"name":"dc_id","type":"int"},{"name":"public_key","type":"string"}],"type":"CdnPublicKey"},{"id":"1462101002","predicate":"cdnConfig","params":[{"name":"public_keys","type":"Vector<CdnPublicKey>"}],"type":"CdnConfig"},{"id":"-283684427","predicate":"pageBlockChannel","params":[{"name":"channel","type":"Chat"}],"type":"PageBlock"},{"id":"-892239370","predicate":"langPackString","params":[{"name":"key","type":"string"},{"name":"value","type":"string"}],"type":"LangPackString"},{"id":"1816636575","predicate":"langPackStringPluralized","params":[{"name":"flags","type":"#"},{"name":"key","type":"string"},{"name":"zero_value","type":"flags.0?string"},{"name":"one_value","type":"flags.1?string"},{"name":"two_value","type":"flags.2?string"},{"name":"few_value","type":"flags.3?string"},{"name":"many_value","type":"flags.4?string"},{"name":"other_value","type":"string"}],"type":"LangPackString"},{"id":"695856818","predicate":"langPackStringDeleted","params":[{"name":"key","type":"string"}],"type":"LangPackString"},{"id":"-209337866","predicate":"langPackDifference","params":[{"name":"lang_code","type":"string"},{"name":"from_version","type":"int"},{"name":"version","type":"int"},{"name":"strings","type":"Vector<LangPackString>"}],"type":"LangPackDifference"},{"id":"292985073","predicate":"langPackLanguage","params":[{"name":"name","type":"string"},{"name":"native_name","type":"string"},{"name":"lang_code","type":"string"}],"type":"LangPackLanguage"},{"id":"281165899","predicate":"updateLangPackTooLong","params":[],"type":"Update"},{"id":"1442983757","predicate":"updateLangPack","params":[{"name":"difference","type":"LangPackDifference"}],"type":"Update"},{"id":"1568467877","predicate":"channelAdminRights","params":[{"name":"flags","type":"#"},{"name":"change_info","type":"flags.0?true"},{"name":"post_messages","type":"flags.1?true"},{"name":"edit_messages","type":"flags.2?true"},{"name":"delete_messages","type":"flags.3?true"},{"name":"ban_users","type":"flags.4?true"},{"name":"invite_users","type":"flags.5?true"},{"name":"invite_link","type":"flags.6?true"},{"name":"pin_messages","type":"flags.7?true"},{"name":"add_admins","type":"flags.9?true"},{"name":"manage_call","type":"flags.10?true"}],"type":"ChannelAdminRights"},{"id":"1489977929","predicate":"channelBannedRights","params":[{"name":"flags","type":"#"},{"name":"view_messages","type":"flags.0?true"},{"name":"send_messages","type":"flags.1?true"},{"name":"send_media","type":"flags.2?true"},{"name":"send_stickers","type":"flags.3?true"},{"name":"send_gifs","type":"flags.4?true"},{"name":"send_games","type":"flags.5?true"},{"name":"send_inline","type":"flags.6?true"},{"name":"embed_links","type":"flags.7?true"},{"name":"until_date","type":"int"}],"type":"ChannelBannedRights"},{"id":"-1473271656","predicate":"channelParticipantAdmin","params":[{"name":"flags","type":"#"},{"name":"can_edit","type":"flags.0?true"},{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"promoted_by","type":"int"},{"name":"date","type":"int"},{"name":"admin_rights","type":"ChannelAdminRights"}],"type":"ChannelParticipant"},{"id":"573315206","predicate":"channelParticipantBanned","params":[{"name":"flags","type":"#"},{"name":"left","type":"flags.0?true"},{"name":"user_id","type":"int"},{"name":"kicked_by","type":"int"},{"name":"date","type":"int"},{"name":"banned_rights","type":"ChannelBannedRights"}],"type":"ChannelParticipant"},{"id":"338142689","predicate":"channelParticipantsBanned","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"106343499","predicate":"channelParticipantsSearch","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"-421545947","predicate":"channelAdminLogEventActionChangeTitle","params":[{"name":"prev_value","type":"string"},{"name":"new_value","type":"string"}],"type":"ChannelAdminLogEventAction"},{"id":"1427671598","predicate":"channelAdminLogEventActionChangeAbout","params":[{"name":"prev_value","type":"string"},{"name":"new_value","type":"string"}],"type":"ChannelAdminLogEventAction"},{"id":"1783299128","predicate":"channelAdminLogEventActionChangeUsername","params":[{"name":"prev_value","type":"string"},{"name":"new_value","type":"string"}],"type":"ChannelAdminLogEventAction"},{"id":"-1204857405","predicate":"channelAdminLogEventActionChangePhoto","params":[{"name":"prev_photo","type":"ChatPhoto"},{"name":"new_photo","type":"ChatPhoto"}],"type":"ChannelAdminLogEventAction"},{"id":"460916654","predicate":"channelAdminLogEventActionToggleInvites","params":[{"name":"new_value","type":"Bool"}],"type":"ChannelAdminLogEventAction"},{"id":"648939889","predicate":"channelAdminLogEventActionToggleSignatures","params":[{"name":"new_value","type":"Bool"}],"type":"ChannelAdminLogEventAction"},{"id":"-370660328","predicate":"channelAdminLogEventActionUpdatePinned","params":[{"name":"message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"1889215493","predicate":"channelAdminLogEventActionEditMessage","params":[{"name":"prev_message","type":"Message"},{"name":"new_message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"1121994683","predicate":"channelAdminLogEventActionDeleteMessage","params":[{"name":"message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"405815507","predicate":"channelAdminLogEventActionParticipantJoin","params":[],"type":"ChannelAdminLogEventAction"},{"id":"-124291086","predicate":"channelAdminLogEventActionParticipantLeave","params":[],"type":"ChannelAdminLogEventAction"},{"id":"-484690728","predicate":"channelAdminLogEventActionParticipantInvite","params":[{"name":"participant","type":"ChannelParticipant"}],"type":"ChannelAdminLogEventAction"},{"id":"-422036098","predicate":"channelAdminLogEventActionParticipantToggleBan","params":[{"name":"prev_participant","type":"ChannelParticipant"},{"name":"new_participant","type":"ChannelParticipant"}],"type":"ChannelAdminLogEventAction"},{"id":"-714643696","predicate":"channelAdminLogEventActionParticipantToggleAdmin","params":[{"name":"prev_participant","type":"ChannelParticipant"},{"name":"new_participant","type":"ChannelParticipant"}],"type":"ChannelAdminLogEventAction"},{"id":"995769920","predicate":"channelAdminLogEvent","params":[{"name":"id","type":"long"},{"name":"date","type":"int"},{"name":"user_id","type":"int"},{"name":"action","type":"ChannelAdminLogEventAction"}],"type":"ChannelAdminLogEvent"},{"id":"-309659827","predicate":"channels.adminLogResults","params":[{"name":"events","type":"Vector<ChannelAdminLogEvent>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"channels.AdminLogResults"},{"id":"-368018716","predicate":"channelAdminLogEventsFilter","params":[{"name":"flags","type":"#"},{"name":"join","type":"flags.0?true"},{"name":"leave","type":"flags.1?true"},{"name":"invite","type":"flags.2?true"},{"name":"ban","type":"flags.3?true"},{"name":"unban","type":"flags.4?true"},{"name":"kick","type":"flags.5?true"},{"name":"unkick","type":"flags.6?true"},{"name":"promote","type":"flags.7?true"},{"name":"demote","type":"flags.8?true"},{"name":"info","type":"flags.9?true"},{"name":"settings","type":"flags.10?true"},{"name":"pinned","type":"flags.11?true"},{"name":"edit","type":"flags.12?true"},{"name":"delete","type":"flags.13?true"}],"type":"ChannelAdminLogEventsFilter"},{"id":"511092620","predicate":"topPeerCategoryPhoneCalls","params":[],"type":"TopPeerCategory"},{"id":"834148991","predicate":"pageBlockAudio","params":[{"name":"audio_id","type":"long"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"1558266229","predicate":"popularContact","params":[{"name":"client_id","type":"long"},{"name":"importers","type":"int"}],"type":"PopularContact"},{"id":"2012136335","predicate":"cdnFileHash","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"bytes"}],"type":"CdnFileHash"},{"id":"1200788123","predicate":"messageActionScreenshotTaken","params":[],"type":"MessageAction"},{"id":"-1634752813","predicate":"messages.favedStickersNotModified","params":[],"type":"messages.FavedStickers"},{"id":"-209768682","predicate":"messages.favedStickers","params":[{"name":"hash","type":"int"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.FavedStickers"},{"id":"-451831443","predicate":"updateFavedStickers","params":[],"type":"Update"},{"id":"-1987495099","predicate":"updateChannelReadMessagesContents","params":[{"name":"channel_id","type":"int"},{"name":"messages","type":"Vector<int>"}],"type":"Update"},{"id":"-1040652646","predicate":"inputMessagesFilterMyMentions","params":[],"type":"MessagesFilter"},{"id":"1887741886","predicate":"updateContactsReset","params":[],"type":"Update"},{"id":"-1312568665","predicate":"channelAdminLogEventActionChangeStickerSet","params":[{"name":"prev_stickerset","type":"InputStickerSet"},{"name":"new_stickerset","type":"InputStickerSet"}],"type":"ChannelAdminLogEventAction"},{"id":"-85549226","predicate":"messageActionCustomAction","params":[{"name":"message","type":"string"}],"type":"MessageAction"},{"id":"178373535","predicate":"inputPaymentCredentialsApplePay","params":[{"name":"payment_data","type":"DataJSON"}],"type":"InputPaymentCredentials"},{"id":"-905587442","predicate":"inputPaymentCredentialsAndroidPay","params":[{"name":"payment_token","type":"DataJSON"},{"name":"google_transaction_id","type":"string"}],"type":"InputPaymentCredentials"},{"id":"-419271411","predicate":"inputMessagesFilterGeo","params":[],"type":"MessagesFilter"},{"id":"-530392189","predicate":"inputMessagesFilterContacts","params":[],"type":"MessagesFilter"},{"id":"1893427255","predicate":"updateChannelAvailableMessages","params":[{"name":"channel_id","type":"int"},{"name":"available_min_id","type":"int"}],"type":"Update"},{"id":"1599903217","predicate":"channelAdminLogEventActionTogglePreHistoryHidden","params":[{"name":"new_value","type":"Bool"}],"type":"ChannelAdminLogEventAction"},{"id":"2065305999","predicate":"inputMediaGeoLive","params":[{"name":"geo_point","type":"InputGeoPoint"},{"name":"period","type":"int"}],"type":"InputMedia"},{"id":"2084316681","predicate":"messageMediaGeoLive","params":[{"name":"geo","type":"GeoPoint"},{"name":"period","type":"int"}],"type":"MessageMedia"},{"id":"1189204285","predicate":"recentMeUrlUnknown","params":[{"name":"url","type":"string"}],"type":"RecentMeUrl"},{"id":"-1917045962","predicate":"recentMeUrlUser","params":[{"name":"url","type":"string"},{"name":"user_id","type":"int"}],"type":"RecentMeUrl"},{"id":"-1608834311","predicate":"recentMeUrlChat","params":[{"name":"url","type":"string"},{"name":"chat_id","type":"int"}],"type":"RecentMeUrl"},{"id":"-347535331","predicate":"recentMeUrlChatInvite","params":[{"name":"url","type":"string"},{"name":"chat_invite","type":"ChatInvite"}],"type":"RecentMeUrl"},{"id":"-1140172836","predicate":"recentMeUrlStickerSet","params":[{"name":"url","type":"string"},{"name":"set","type":"StickerSetCovered"}],"type":"RecentMeUrl"},{"id":"235081943","predicate":"help.recentMeUrls","params":[{"name":"urls","type":"Vector<RecentMeUrl>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"help.RecentMeUrls"},{"id":"-266911767","predicate":"channels.channelParticipantsNotModified","params":[],"type":"channels.ChannelParticipants"},{"id":"1951620897","predicate":"messages.messagesNotModified","params":[{"name":"count","type":"int"}],"type":"messages.Messages"},{"id":"1588230153","predicate":"inputSingleMedia","params":[{"name":"media","type":"InputMedia"},{"name":"random_id","type":"long"}],"type":"InputSingleMedia"}],"methods":[{"id":"-878758099","method":"invokeAfterMsg","params":[{"name":"msg_id","type":"long"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1036301552","method":"invokeAfterMsgs","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1877286395","method":"auth.checkPhone","params":[{"name":"phone_number","type":"string"}],"type":"auth.CheckedPhone"},{"id":"-2035355412","method":"auth.sendCode","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"phone_number","type":"string"},{"name":"current_number","type":"flags.0?Bool"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"}],"type":"auth.SentCode"},{"id":"453408308","method":"auth.signUp","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"auth.Authorization"},{"id":"-1126886015","method":"auth.signIn","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"auth.Authorization"},{"id":"1461180992","method":"auth.logOut","params":[],"type":"Bool"},{"id":"-1616179942","method":"auth.resetAuthorizations","params":[],"type":"Bool"},{"id":"-440401971","method":"auth.exportAuthorization","params":[{"name":"dc_id","type":"int"}],"type":"auth.ExportedAuthorization"},{"id":"-470837741","method":"auth.importAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.Authorization"},{"id":"-841733627","method":"auth.bindTempAuthKey","params":[{"name":"perm_auth_key_id","type":"long"},{"name":"nonce","type":"long"},{"name":"expires_at","type":"int"},{"name":"encrypted_message","type":"bytes"}],"type":"Bool"},{"id":"1280460","method":"account.registerDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"},{"name":"app_sandbox","type":"Bool"},{"name":"other_uids","type":"Vector<int>"}],"type":"Bool"},{"id":"813089983","method":"account.unregisterDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"},{"name":"other_uids","type":"Vector<int>"}],"type":"Bool"},{"id":"-2067899501","method":"account.updateNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"},{"name":"settings","type":"InputPeerNotifySettings"}],"type":"Bool"},{"id":"313765169","method":"account.getNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"}],"type":"PeerNotifySettings"},{"id":"-612493497","method":"account.resetNotifySettings","params":[],"type":"Bool"},{"id":"2018596725","method":"account.updateProfile","params":[{"name":"flags","type":"#"},{"name":"first_name","type":"flags.0?string"},{"name":"last_name","type":"flags.1?string"},{"name":"about","type":"flags.2?string"}],"type":"User"},{"id":"1713919532","method":"account.updateStatus","params":[{"name":"offline","type":"Bool"}],"type":"Bool"},{"id":"-1068696894","method":"account.getWallPapers","params":[],"type":"Vector<WallPaper>"},{"id":"-1374118561","method":"account.reportPeer","params":[{"name":"peer","type":"InputPeer"},{"name":"reason","type":"ReportReason"}],"type":"Bool"},{"id":"227648840","method":"users.getUsers","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Vector<User>"},{"id":"-902781519","method":"users.getFullUser","params":[{"name":"id","type":"InputUser"}],"type":"UserFull"},{"id":"-995929106","method":"contacts.getStatuses","params":[],"type":"Vector<ContactStatus>"},{"id":"-1071414113","method":"contacts.getContacts","params":[{"name":"hash","type":"int"}],"type":"contacts.Contacts"},{"id":"746589157","method":"contacts.importContacts","params":[{"name":"contacts","type":"Vector<InputContact>"}],"type":"contacts.ImportedContacts"},{"id":"-1902823612","method":"contacts.deleteContact","params":[{"name":"id","type":"InputUser"}],"type":"contacts.Link"},{"id":"1504393374","method":"contacts.deleteContacts","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Bool"},{"id":"858475004","method":"contacts.block","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-448724803","method":"contacts.unblock","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-176409329","method":"contacts.getBlocked","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"contacts.Blocked"},{"id":"-2065352905","method":"contacts.exportCard","params":[],"type":"Vector<int>"},{"id":"1340184318","method":"contacts.importCard","params":[{"name":"export_card","type":"Vector<int>"}],"type":"User"},{"id":"1109588596","method":"messages.getMessages","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"421243333","method":"messages.getDialogs","params":[{"name":"flags","type":"#"},{"name":"exclude_pinned","type":"flags.0?true"},{"name":"offset_date","type":"int"},{"name":"offset_id","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"limit","type":"int"}],"type":"messages.Dialogs"},{"id":"-591691168","method":"messages.getHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"offset_date","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"},{"name":"hash","type":"int"}],"type":"messages.Messages"},{"id":"60726944","method":"messages.search","params":[{"name":"flags","type":"#"},{"name":"peer","type":"InputPeer"},{"name":"q","type":"string"},{"name":"from_id","type":"flags.0?InputUser"},{"name":"filter","type":"MessagesFilter"},{"name":"min_date","type":"int"},{"name":"max_date","type":"int"},{"name":"offset_id","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"}],"type":"messages.Messages"},{"id":"238054714","method":"messages.readHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedMessages"},{"id":"469850889","method":"messages.deleteHistory","params":[{"name":"flags","type":"#"},{"name":"just_clear","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedHistory"},{"id":"-443640366","method":"messages.deleteMessages","params":[{"name":"flags","type":"#"},{"name":"revoke","type":"flags.0?true"},{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"94983360","method":"messages.receivedMessages","params":[{"name":"max_id","type":"int"}],"type":"Vector<ReceivedNotifyMessage>"},{"id":"-1551737264","method":"messages.setTyping","params":[{"name":"peer","type":"InputPeer"},{"name":"action","type":"SendMessageAction"}],"type":"Bool"},{"id":"-91733382","method":"messages.sendMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-923703407","method":"messages.sendMedia","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"media","type":"InputMedia"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"Updates"},{"id":"1888354709","method":"messages.forwardMessages","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"with_my_score","type":"flags.8?true"},{"name":"grouped","type":"flags.9?true"},{"name":"from_peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"random_id","type":"Vector<long>"},{"name":"to_peer","type":"InputPeer"}],"type":"Updates"},{"id":"-820669733","method":"messages.reportSpam","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"-1460572005","method":"messages.hideReportSpam","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"913498268","method":"messages.getPeerSettings","params":[{"name":"peer","type":"InputPeer"}],"type":"PeerSettings"},{"id":"-1115507112","method":"messages.report","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"reason","type":"ReportReason"}],"type":"Bool"},{"id":"1013621127","method":"messages.getChats","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Chats"},{"id":"998448230","method":"messages.getFullChat","params":[{"name":"chat_id","type":"int"}],"type":"messages.ChatFull"},{"id":"-599447467","method":"messages.editChatTitle","params":[{"name":"chat_id","type":"int"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-900957736","method":"messages.editChatPhoto","params":[{"name":"chat_id","type":"int"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"-106911223","method":"messages.addChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"fwd_limit","type":"int"}],"type":"Updates"},{"id":"-530505962","method":"messages.deleteChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"Updates"},{"id":"164303470","method":"messages.createChat","params":[{"name":"users","type":"Vector<InputUser>"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-304838614","method":"updates.getState","params":[],"type":"updates.State"},{"id":"630429265","method":"updates.getDifference","params":[{"name":"flags","type":"#"},{"name":"pts","type":"int"},{"name":"pts_total_limit","type":"flags.0?int"},{"name":"date","type":"int"},{"name":"qts","type":"int"}],"type":"updates.Difference"},{"id":"-256159406","method":"photos.updateProfilePhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"UserProfilePhoto"},{"id":"1328726168","method":"photos.uploadProfilePhoto","params":[{"name":"file","type":"InputFile"}],"type":"photos.Photo"},{"id":"-2016444625","method":"photos.deletePhotos","params":[{"name":"id","type":"Vector<InputPhoto>"}],"type":"Vector<long>"},{"id":"-1291540959","method":"upload.saveFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"-475607115","method":"upload.getFile","params":[{"name":"location","type":"InputFileLocation"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.File"},{"id":"-990308245","method":"help.getConfig","params":[],"type":"Config"},{"id":"531836966","method":"help.getNearestDc","params":[],"type":"NearestDc"},{"id":"-1372724842","method":"help.getAppUpdate","params":[],"type":"help.AppUpdate"},{"id":"1862465352","method":"help.saveAppLog","params":[{"name":"events","type":"Vector<InputAppEvent>"}],"type":"Bool"},{"id":"1295590211","method":"help.getInviteText","params":[],"type":"help.InviteText"},{"id":"-1848823128","method":"photos.getUserPhotos","params":[{"name":"user_id","type":"InputUser"},{"name":"offset","type":"int"},{"name":"max_id","type":"long"},{"name":"limit","type":"int"}],"type":"photos.Photos"},{"id":"651135312","method":"messages.getDhConfig","params":[{"name":"version","type":"int"},{"name":"random_length","type":"int"}],"type":"messages.DhConfig"},{"id":"-162681021","method":"messages.requestEncryption","params":[{"name":"user_id","type":"InputUser"},{"name":"random_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"1035731989","method":"messages.acceptEncryption","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"g_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"-304536635","method":"messages.discardEncryption","params":[{"name":"chat_id","type":"int"}],"type":"Bool"},{"id":"2031374829","method":"messages.setEncryptedTyping","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"typing","type":"Bool"}],"type":"Bool"},{"id":"2135648522","method":"messages.readEncryptedHistory","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"max_date","type":"int"}],"type":"Bool"},{"id":"-1451792525","method":"messages.sendEncrypted","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"-1701831834","method":"messages.sendEncryptedFile","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"},{"name":"file","type":"InputEncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"852769188","method":"messages.sendEncryptedService","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"1436924774","method":"messages.receivedQueue","params":[{"name":"max_qts","type":"int"}],"type":"Vector<long>"},{"id":"1259113487","method":"messages.reportEncryptedSpam","params":[{"name":"peer","type":"InputEncryptedChat"}],"type":"Bool"},{"id":"-562337987","method":"upload.saveBigFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"file_total_parts","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"-951575130","method":"initConnection","params":[{"name":"api_id","type":"int"},{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"system_lang_code","type":"string"},{"name":"lang_pack","type":"string"},{"name":"lang_code","type":"string"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1663104819","method":"help.getSupport","params":[],"type":"help.Support"},{"id":"916930423","method":"messages.readMessageContents","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"655677548","method":"account.checkUsername","params":[{"name":"username","type":"string"}],"type":"Bool"},{"id":"1040964988","method":"account.updateUsername","params":[{"name":"username","type":"string"}],"type":"User"},{"id":"301470424","method":"contacts.search","params":[{"name":"q","type":"string"},{"name":"limit","type":"int"}],"type":"contacts.Found"},{"id":"-623130288","method":"account.getPrivacy","params":[{"name":"key","type":"InputPrivacyKey"}],"type":"account.PrivacyRules"},{"id":"-906486552","method":"account.setPrivacy","params":[{"name":"key","type":"InputPrivacyKey"},{"name":"rules","type":"Vector<InputPrivacyRule>"}],"type":"account.PrivacyRules"},{"id":"1099779595","method":"account.deleteAccount","params":[{"name":"reason","type":"string"}],"type":"Bool"},{"id":"150761757","method":"account.getAccountTTL","params":[],"type":"AccountDaysTTL"},{"id":"608323678","method":"account.setAccountTTL","params":[{"name":"ttl","type":"AccountDaysTTL"}],"type":"Bool"},{"id":"-627372787","method":"invokeWithLayer","params":[{"name":"layer","type":"int"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-113456221","method":"contacts.resolveUsername","params":[{"name":"username","type":"string"}],"type":"contacts.ResolvedPeer"},{"id":"149257707","method":"account.sendChangePhoneCode","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"phone_number","type":"string"},{"name":"current_number","type":"flags.0?Bool"}],"type":"auth.SentCode"},{"id":"1891839707","method":"account.changePhone","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"User"},{"id":"-1373446075","method":"messages.getStickers","params":[{"name":"emoticon","type":"string"},{"name":"hash","type":"string"}],"type":"messages.Stickers"},{"id":"479598769","method":"messages.getAllStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"954152242","method":"account.updateDeviceLocked","params":[{"name":"period","type":"int"}],"type":"Bool"},{"id":"1738800940","method":"auth.importBotAuthorization","params":[{"name":"flags","type":"int"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"bot_auth_token","type":"string"}],"type":"auth.Authorization"},{"id":"623001124","method":"messages.getWebPagePreview","params":[{"name":"message","type":"string"}],"type":"MessageMedia"},{"id":"-484392616","method":"account.getAuthorizations","params":[],"type":"account.Authorizations"},{"id":"-545786948","method":"account.resetAuthorization","params":[{"name":"hash","type":"long"}],"type":"Bool"},{"id":"1418342645","method":"account.getPassword","params":[],"type":"account.Password"},{"id":"-1131605573","method":"account.getPasswordSettings","params":[{"name":"current_password_hash","type":"bytes"}],"type":"account.PasswordSettings"},{"id":"-92517498","method":"account.updatePasswordSettings","params":[{"name":"current_password_hash","type":"bytes"},{"name":"new_settings","type":"account.PasswordInputSettings"}],"type":"Bool"},{"id":"174260510","method":"auth.checkPassword","params":[{"name":"password_hash","type":"bytes"}],"type":"auth.Authorization"},{"id":"-661144474","method":"auth.requestPasswordRecovery","params":[],"type":"auth.PasswordRecovery"},{"id":"1319464594","method":"auth.recoverPassword","params":[{"name":"code","type":"string"}],"type":"auth.Authorization"},{"id":"-1080796745","method":"invokeWithoutUpdates","params":[{"name":"query","type":"!X"}],"type":"X"},{"id":"2106086025","method":"messages.exportChatInvite","params":[{"name":"chat_id","type":"int"}],"type":"ExportedChatInvite"},{"id":"1051570619","method":"messages.checkChatInvite","params":[{"name":"hash","type":"string"}],"type":"ChatInvite"},{"id":"1817183516","method":"messages.importChatInvite","params":[{"name":"hash","type":"string"}],"type":"Updates"},{"id":"639215886","method":"messages.getStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"messages.StickerSet"},{"id":"-946871200","method":"messages.installStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"archived","type":"Bool"}],"type":"messages.StickerSetInstallResult"},{"id":"-110209570","method":"messages.uninstallStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"Bool"},{"id":"-421563528","method":"messages.startBot","params":[{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"random_id","type":"long"},{"name":"start_param","type":"string"}],"type":"Updates"},{"id":"-1877938321","method":"help.getAppChangelog","params":[{"name":"prev_app_version","type":"string"}],"type":"Updates"},{"id":"-993483427","method":"messages.getMessagesViews","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"increment","type":"Bool"}],"type":"Vector<int>"},{"id":"-871347913","method":"channels.readHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"max_id","type":"int"}],"type":"Bool"},{"id":"-2067661490","method":"channels.deleteMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"-787622117","method":"channels.deleteUserHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"messages.AffectedHistory"},{"id":"-32999408","method":"channels.reportSpam","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"id","type":"Vector<int>"}],"type":"Bool"},{"id":"-1814580409","method":"channels.getMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"306054633","method":"channels.getParticipants","params":[{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelParticipantsFilter"},{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"channels.ChannelParticipants"},{"id":"1416484774","method":"channels.getParticipant","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"channels.ChannelParticipant"},{"id":"176122811","method":"channels.getChannels","params":[{"name":"id","type":"Vector<InputChannel>"}],"type":"messages.Chats"},{"id":"141781513","method":"channels.getFullChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"messages.ChatFull"},{"id":"-192332417","method":"channels.createChannel","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.0?true"},{"name":"megagroup","type":"flags.1?true"},{"name":"title","type":"string"},{"name":"about","type":"string"}],"type":"Updates"},{"id":"333610782","method":"channels.editAbout","params":[{"name":"channel","type":"InputChannel"},{"name":"about","type":"string"}],"type":"Bool"},{"id":"548962836","method":"channels.editAdmin","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"admin_rights","type":"ChannelAdminRights"}],"type":"Updates"},{"id":"1450044624","method":"channels.editTitle","params":[{"name":"channel","type":"InputChannel"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-248621111","method":"channels.editPhoto","params":[{"name":"channel","type":"InputChannel"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"283557164","method":"channels.checkUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"890549214","method":"channels.updateUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"615851205","method":"channels.joinChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"-130635115","method":"channels.leaveChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"429865580","method":"channels.inviteToChannel","params":[{"name":"channel","type":"InputChannel"},{"name":"users","type":"Vector<InputUser>"}],"type":"Updates"},{"id":"-950663035","method":"channels.exportInvite","params":[{"name":"channel","type":"InputChannel"}],"type":"ExportedChatInvite"},{"id":"-1072619549","method":"channels.deleteChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"51854712","method":"updates.getChannelDifference","params":[{"name":"flags","type":"#"},{"name":"force","type":"flags.0?true"},{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelMessagesFilter"},{"name":"pts","type":"int"},{"name":"limit","type":"int"}],"type":"updates.ChannelDifference"},{"id":"-326379039","method":"messages.toggleChatAdmins","params":[{"name":"chat_id","type":"int"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-1444503762","method":"messages.editChatAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"is_admin","type":"Bool"}],"type":"Bool"},{"id":"363051235","method":"messages.migrateChat","params":[{"name":"chat_id","type":"int"}],"type":"Updates"},{"id":"-1640190800","method":"messages.searchGlobal","params":[{"name":"q","type":"string"},{"name":"offset_date","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"889286899","method":"help.getTermsOfService","params":[],"type":"help.TermsOfService"},{"id":"2016638777","method":"messages.reorderStickerSets","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"order","type":"Vector<long>"}],"type":"Bool"},{"id":"864953444","method":"messages.getDocumentByHash","params":[{"name":"sha256","type":"bytes"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"}],"type":"Document"},{"id":"-1080395925","method":"messages.searchGifs","params":[{"name":"q","type":"string"},{"name":"offset","type":"int"}],"type":"messages.FoundGifs"},{"id":"-2084618926","method":"messages.getSavedGifs","params":[{"name":"hash","type":"int"}],"type":"messages.SavedGifs"},{"id":"846868683","method":"messages.saveGif","params":[{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"1364105629","method":"messages.getInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"geo_point","type":"flags.0?InputGeoPoint"},{"name":"query","type":"string"},{"name":"offset","type":"string"}],"type":"messages.BotResults"},{"id":"-346119674","method":"messages.setInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"private","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"results","type":"Vector<InputBotInlineResult>"},{"name":"cache_time","type":"int"},{"name":"next_offset","type":"flags.2?string"},{"name":"switch_pm","type":"flags.3?InlineBotSwitchPM"}],"type":"Bool"},{"id":"-1318189314","method":"messages.sendInlineBotResult","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"random_id","type":"long"},{"name":"query_id","type":"long"},{"name":"id","type":"string"}],"type":"Updates"},{"id":"1231065863","method":"channels.toggleInvites","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-826838685","method":"channels.exportMessageLink","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"int"},{"name":"grouped","type":"Bool"}],"type":"ExportedMessageLink"},{"id":"527021574","method":"channels.toggleSignatures","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"-1490162350","method":"channels.updatePinnedMessage","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.0?true"},{"name":"channel","type":"InputChannel"},{"name":"id","type":"int"}],"type":"Updates"},{"id":"1056025023","method":"auth.resendCode","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"auth.SentCode"},{"id":"520357240","method":"auth.cancelCode","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"Bool"},{"id":"-39416522","method":"messages.getMessageEditData","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"}],"type":"messages.MessageEditData"},{"id":"97630429","method":"messages.editMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"stop_geo_live","type":"flags.12?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"message","type":"flags.11?string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"geo_point","type":"flags.13?InputGeoPoint"}],"type":"Updates"},{"id":"-1327463869","method":"messages.editInlineBotMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"stop_geo_live","type":"flags.12?true"},{"name":"id","type":"InputBotInlineMessageID"},{"name":"message","type":"flags.11?string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"geo_point","type":"flags.13?InputGeoPoint"}],"type":"Bool"},{"id":"-2130010132","method":"messages.getBotCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"game","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"data","type":"flags.0?bytes"}],"type":"messages.BotCallbackAnswer"},{"id":"-712043766","method":"messages.setBotCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"alert","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"message","type":"flags.0?string"},{"name":"url","type":"flags.2?string"},{"name":"cache_time","type":"int"}],"type":"Bool"},{"id":"-728224331","method":"contacts.getTopPeers","params":[{"name":"flags","type":"#"},{"name":"correspondents","type":"flags.0?true"},{"name":"bots_pm","type":"flags.1?true"},{"name":"bots_inline","type":"flags.2?true"},{"name":"phone_calls","type":"flags.3?true"},{"name":"groups","type":"flags.10?true"},{"name":"channels","type":"flags.15?true"},{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"contacts.TopPeers"},{"id":"451113900","method":"contacts.resetTopPeerRating","params":[{"name":"category","type":"TopPeerCategory"},{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"764901049","method":"messages.getPeerDialogs","params":[{"name":"peers","type":"Vector<InputPeer>"}],"type":"messages.PeerDialogs"},{"id":"-1137057461","method":"messages.saveDraft","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"peer","type":"InputPeer"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Bool"},{"id":"1782549861","method":"messages.getAllDrafts","params":[],"type":"Updates"},{"id":"766298703","method":"messages.getFeaturedStickers","params":[{"name":"hash","type":"int"}],"type":"messages.FeaturedStickers"},{"id":"1527873830","method":"messages.readFeaturedStickers","params":[{"name":"id","type":"Vector<long>"}],"type":"Bool"},{"id":"1587647177","method":"messages.getRecentStickers","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"},{"name":"hash","type":"int"}],"type":"messages.RecentStickers"},{"id":"958863608","method":"messages.saveRecentSticker","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"},{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"-1986437075","method":"messages.clearRecentStickers","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"}],"type":"Bool"},{"id":"1475442322","method":"messages.getArchivedStickers","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"offset_id","type":"long"},{"name":"limit","type":"int"}],"type":"messages.ArchivedStickers"},{"id":"353818557","method":"account.sendConfirmPhoneCode","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"hash","type":"string"},{"name":"current_number","type":"flags.0?Bool"}],"type":"auth.SentCode"},{"id":"1596029123","method":"account.confirmPhone","params":[{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"Bool"},{"id":"-1920105769","method":"channels.getAdminedPublicChannels","params":[],"type":"messages.Chats"},{"id":"1706608543","method":"messages.getMaskStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"-866424884","method":"messages.getAttachedStickers","params":[{"name":"media","type":"InputStickeredMedia"}],"type":"Vector<StickerSetCovered>"},{"id":"-1907842680","method":"auth.dropTempAuthKeys","params":[{"name":"except_auth_keys","type":"Vector<long>"}],"type":"Bool"},{"id":"-1896289088","method":"messages.setGameScore","params":[{"name":"flags","type":"#"},{"name":"edit_message","type":"flags.0?true"},{"name":"force","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"score","type":"int"}],"type":"Updates"},{"id":"363700068","method":"messages.setInlineGameScore","params":[{"name":"flags","type":"#"},{"name":"edit_message","type":"flags.0?true"},{"name":"force","type":"flags.1?true"},{"name":"id","type":"InputBotInlineMessageID"},{"name":"user_id","type":"InputUser"},{"name":"score","type":"int"}],"type":"Bool"},{"id":"-400399203","method":"messages.getGameHighScores","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"messages.HighScores"},{"id":"258170395","method":"messages.getInlineGameHighScores","params":[{"name":"id","type":"InputBotInlineMessageID"},{"name":"user_id","type":"InputUser"}],"type":"messages.HighScores"},{"id":"218777796","method":"messages.getCommonChats","params":[{"name":"user_id","type":"InputUser"},{"name":"max_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Chats"},{"id":"-341307408","method":"messages.getAllChats","params":[{"name":"except_ids","type":"Vector<int>"}],"type":"messages.Chats"},{"id":"-333262899","method":"help.setBotUpdatesStatus","params":[{"name":"pending_updates_count","type":"int"},{"name":"message","type":"string"}],"type":"Bool"},{"id":"852135825","method":"messages.getWebPage","params":[{"name":"url","type":"string"},{"name":"hash","type":"int"}],"type":"WebPage"},{"id":"847887978","method":"messages.toggleDialogPin","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.0?true"},{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"-1784678844","method":"messages.reorderPinnedDialogs","params":[{"name":"flags","type":"#"},{"name":"force","type":"flags.0?true"},{"name":"order","type":"Vector<InputPeer>"}],"type":"Bool"},{"id":"-497756594","method":"messages.getPinnedDialogs","params":[],"type":"messages.PeerDialogs"},{"id":"-1440257555","method":"bots.sendCustomRequest","params":[{"name":"custom_method","type":"string"},{"name":"params","type":"DataJSON"}],"type":"DataJSON"},{"id":"-434028723","method":"bots.answerWebhookJSONQuery","params":[{"name":"query_id","type":"long"},{"name":"data","type":"DataJSON"}],"type":"Bool"},{"id":"619086221","method":"upload.getWebFile","params":[{"name":"location","type":"InputWebFileLocation"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.WebFile"},{"id":"-1712285883","method":"payments.getPaymentForm","params":[{"name":"msg_id","type":"int"}],"type":"payments.PaymentForm"},{"id":"-1601001088","method":"payments.getPaymentReceipt","params":[{"name":"msg_id","type":"int"}],"type":"payments.PaymentReceipt"},{"id":"1997180532","method":"payments.validateRequestedInfo","params":[{"name":"flags","type":"#"},{"name":"save","type":"flags.0?true"},{"name":"msg_id","type":"int"},{"name":"info","type":"PaymentRequestedInfo"}],"type":"payments.ValidatedRequestedInfo"},{"id":"730364339","method":"payments.sendPaymentForm","params":[{"name":"flags","type":"#"},{"name":"msg_id","type":"int"},{"name":"requested_info_id","type":"flags.0?string"},{"name":"shipping_option_id","type":"flags.1?string"},{"name":"credentials","type":"InputPaymentCredentials"}],"type":"payments.PaymentResult"},{"id":"1250046590","method":"account.getTmpPassword","params":[{"name":"password_hash","type":"bytes"},{"name":"period","type":"int"}],"type":"account.TmpPassword"},{"id":"578650699","method":"payments.getSavedInfo","params":[],"type":"payments.SavedInfo"},{"id":"-667062079","method":"payments.clearSavedInfo","params":[{"name":"flags","type":"#"},{"name":"credentials","type":"flags.0?true"},{"name":"info","type":"flags.1?true"}],"type":"Bool"},{"id":"-436833542","method":"messages.setBotShippingResults","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"error","type":"flags.0?string"},{"name":"shipping_options","type":"flags.1?Vector<ShippingOption>"}],"type":"Bool"},{"id":"163765653","method":"messages.setBotPrecheckoutResults","params":[{"name":"flags","type":"#"},{"name":"success","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"error","type":"flags.0?string"}],"type":"Bool"},{"id":"-1680314774","method":"stickers.createStickerSet","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"user_id","type":"InputUser"},{"name":"title","type":"string"},{"name":"short_name","type":"string"},{"name":"stickers","type":"Vector<InputStickerSetItem>"}],"type":"messages.StickerSet"},{"id":"-143257775","method":"stickers.removeStickerFromSet","params":[{"name":"sticker","type":"InputDocument"}],"type":"messages.StickerSet"},{"id":"-4795190","method":"stickers.changeStickerPosition","params":[{"name":"sticker","type":"InputDocument"},{"name":"position","type":"int"}],"type":"messages.StickerSet"},{"id":"-2041315650","method":"stickers.addStickerToSet","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"sticker","type":"InputStickerSetItem"}],"type":"messages.StickerSet"},{"id":"1369162417","method":"messages.uploadMedia","params":[{"name":"peer","type":"InputPeer"},{"name":"media","type":"InputMedia"}],"type":"MessageMedia"},{"id":"1430593449","method":"phone.getCallConfig","params":[],"type":"DataJSON"},{"id":"1536537556","method":"phone.requestCall","params":[{"name":"user_id","type":"InputUser"},{"name":"random_id","type":"int"},{"name":"g_a_hash","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"phone.PhoneCall"},{"id":"1003664544","method":"phone.acceptCall","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"g_b","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"phone.PhoneCall"},{"id":"788404002","method":"phone.confirmCall","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"g_a","type":"bytes"},{"name":"key_fingerprint","type":"long"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"phone.PhoneCall"},{"id":"399855457","method":"phone.receivedCall","params":[{"name":"peer","type":"InputPhoneCall"}],"type":"Bool"},{"id":"2027164582","method":"phone.discardCall","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"duration","type":"int"},{"name":"reason","type":"PhoneCallDiscardReason"},{"name":"connection_id","type":"long"}],"type":"Updates"},{"id":"475228724","method":"phone.setCallRating","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"rating","type":"int"},{"name":"comment","type":"string"}],"type":"Updates"},{"id":"662363518","method":"phone.saveCallDebug","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"debug","type":"DataJSON"}],"type":"Bool"},{"id":"536919235","method":"upload.getCdnFile","params":[{"name":"file_token","type":"bytes"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.CdnFile"},{"id":"452533257","method":"upload.reuploadCdnFile","params":[{"name":"file_token","type":"bytes"},{"name":"request_token","type":"bytes"}],"type":"Vector<CdnFileHash>"},{"id":"1375900482","method":"help.getCdnConfig","params":[],"type":"CdnConfig"},{"id":"-1699363442","method":"langpack.getLangPack","params":[{"name":"lang_code","type":"string"}],"type":"LangPackDifference"},{"id":"773776152","method":"langpack.getStrings","params":[{"name":"lang_code","type":"string"},{"name":"keys","type":"Vector<string>"}],"type":"Vector<LangPackString>"},{"id":"187583869","method":"langpack.getDifference","params":[{"name":"from_version","type":"int"}],"type":"LangPackDifference"},{"id":"-2146445955","method":"langpack.getLanguages","params":[],"type":"Vector<LangPackLanguage>"},{"id":"-1076292147","method":"channels.editBanned","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"banned_rights","type":"ChannelBannedRights"}],"type":"Updates"},{"id":"870184064","method":"channels.getAdminLog","params":[{"name":"flags","type":"#"},{"name":"channel","type":"InputChannel"},{"name":"q","type":"string"},{"name":"events_filter","type":"flags.0?ChannelAdminLogEventsFilter"},{"name":"admins","type":"flags.1?Vector<InputUser>"},{"name":"max_id","type":"long"},{"name":"min_id","type":"long"},{"name":"limit","type":"int"}],"type":"channels.AdminLogResults"},{"id":"-149567365","method":"upload.getCdnFileHashes","params":[{"name":"file_token","type":"bytes"},{"name":"offset","type":"int"}],"type":"Vector<CdnFileHash>"},{"id":"-914493408","method":"messages.sendScreenshotNotification","params":[{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"int"},{"name":"random_id","type":"long"}],"type":"Updates"},{"id":"-359881479","method":"channels.setStickers","params":[{"name":"channel","type":"InputChannel"},{"name":"stickerset","type":"InputStickerSet"}],"type":"Bool"},{"id":"567151374","method":"messages.getFavedStickers","params":[{"name":"hash","type":"int"}],"type":"messages.FavedStickers"},{"id":"-1174420133","method":"messages.faveSticker","params":[{"name":"id","type":"InputDocument"},{"name":"unfave","type":"Bool"}],"type":"Bool"},{"id":"-357180360","method":"channels.readMessageContents","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"Bool"},{"id":"-2020263951","method":"contacts.resetSaved","params":[],"type":"Bool"},{"id":"1180140658","method":"messages.getUnreadMentions","params":[{"name":"peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"}],"type":"messages.Messages"},{"id":"-1355375294","method":"channels.deleteHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"max_id","type":"int"}],"type":"Bool"},{"id":"1036054804","method":"help.getRecentMeUrls","params":[{"name":"referer","type":"string"}],"type":"help.RecentMeUrls"},{"id":"-356796084","method":"channels.togglePreHistoryHidden","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"251759059","method":"messages.readMentions","params":[{"name":"peer","type":"InputPeer"}],"type":"messages.AffectedHistory"},{"id":"613691874","method":"messages.getRecentLocations","params":[{"name":"peer","type":"InputPeer"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"546656559","method":"messages.sendMultiMedia","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"multi_media","type":"Vector<InputSingleMedia>"}],"type":"Updates"},{"id":"1347929239","method":"messages.uploadEncryptedFile","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"file","type":"InputEncryptedFile"}],"type":"EncryptedFile"}]}

Config.Schema.API.layer = 74

Config.Emoji = {'00a9': ['\u00A9', ['copyright']],'00ae': ['\u00AE', ['registered']],'203c': ['\u203C', ['bangbang']],'2049': ['\u2049', ['interrobang']],'2122': ['\u2122', ['tm']],'2139': ['\u2139', ['information_source']],'2194': ['\u2194', ['left_right_arrow']],'2195': ['\u2195', ['arrow_up_down']],'2196': ['\u2196', ['arrow_upper_left']],'2197': ['\u2197', ['arrow_upper_right']],'2198': ['\u2198', ['arrow_lower_right']],'2199': ['\u2199', ['arrow_lower_left']],'21a9': ['\u21A9', ['leftwards_arrow_with_hook']],'21aa': ['\u21AA', ['arrow_right_hook']],'231a': ['\u231A', ['watch']],'231b': ['\u231B', ['hourglass']],'23e9': ['\u23E9', ['fast_forward']],'23ea': ['\u23EA', ['rewind']],'23eb': ['\u23EB', ['arrow_double_up']],'23ec': ['\u23EC', ['arrow_double_down']],'23f0': ['\u23F0', ['alarm_clock']],'23f3': ['\u23F3', ['hourglass_flowing_sand']],'24c2': ['\u24C2', ['m']],'25aa': ['\u25AA', ['black_small_square']],'25ab': ['\u25AB', ['white_small_square']],'25b6': ['\u25B6', ['arrow_forward']],'25c0': ['\u25C0', ['arrow_backward']],'25fb': ['\u25FB', ['white_medium_square']],'25fc': ['\u25FC', ['black_medium_square']],'25fd': ['\u25FD', ['white_medium_small_square']],'25fe': ['\u25FE', ['black_medium_small_square']],'2600': ['\u2600', ['sunny']],'2601': ['\u2601', ['cloud']],'260e': ['\u260E', ['phone', 'telephone']],'2611': ['\u2611', ['ballot_box_with_check']],'2614': ['\u2614', ['umbrella']],'2615': ['\u2615', ['coffee']],'261d': ['\u261D', ['point_up']],'263a': ['\u263A', ['relaxed']],'2648': ['\u2648', ['aries']],'2649': ['\u2649', ['taurus']],'264a': ['\u264A', ['gemini']],'264b': ['\u264B', ['cancer']],'264c': ['\u264C', ['leo']],'264d': ['\u264D', ['virgo']],'264e': ['\u264E', ['libra']],'264f': ['\u264F', ['scorpius']],'2650': ['\u2650', ['sagittarius']],'2651': ['\u2651', ['capricorn']],'2652': ['\u2652', ['aquarius']],'2653': ['\u2653', ['pisces']],'2660': ['\u2660', ['spades']],'2663': ['\u2663', ['clubs']],'2665': ['\u2665', ['hearts']],'2666': ['\u2666', ['diamonds']],'2668': ['\u2668', ['hotsprings']],'267b': ['\u267B', ['recycle']],'267f': ['\u267F', ['wheelchair']],'2693': ['\u2693', ['anchor']],'26a0': ['\u26A0', ['warning']],'26a1': ['\u26A1', ['zap']],'26aa': ['\u26AA', ['white_circle']],'26ab': ['\u26AB', ['black_circle']],'26bd': ['\u26BD', ['soccer']],'26be': ['\u26BE', ['baseball']],'26c4': ['\u26C4', ['snowman']],'26c5': ['\u26C5', ['partly_sunny']],'26ce': ['\u26CE', ['ophiuchus']],'26d4': ['\u26D4', ['no_entry']],'26ea': ['\u26EA', ['church']],'26f2': ['\u26F2', ['fountain']],'26f3': ['\u26F3', ['golf']],'26f5': ['\u26F5', ['boat', 'sailboat']],'26fa': ['\u26FA', ['tent']],'26fd': ['\u26FD', ['fuelpump']],'2702': ['\u2702', ['scissors']],'2705': ['\u2705', ['white_check_mark']],'2708': ['\u2708', ['airplane']],'2709': ['\u2709', ['email', 'envelope']],'270a': ['\u270A', ['fist']],'270b': ['\u270B', ['hand', 'raised_hand']],'270c': ['\u270C', ['v']],'270f': ['\u270F', ['pencil2']],'2712': ['\u2712', ['black_nib']],'2714': ['\u2714', ['heavy_check_mark']],'2716': ['\u2716', ['heavy_multiplication_x']],'2728': ['\u2728', ['sparkles']],'2733': ['\u2733', ['eight_spoked_asterisk']],'2734': ['\u2734', ['eight_pointed_black_star']],'2744': ['\u2744', ['snowflake']],'2747': ['\u2747', ['sparkle']],'274c': ['\u274C', ['x']],'274e': ['\u274E', ['negative_squared_cross_mark']],'2753': ['\u2753', ['question']],'2754': ['\u2754', ['grey_question']],'2755': ['\u2755', ['grey_exclamation']],'2757': ['\u2757', ['exclamation', 'heavy_exclamation_mark']],'2764': ['\u2764', ['heart'], '<3'],'2795': ['\u2795', ['heavy_plus_sign']],'2796': ['\u2796', ['heavy_minus_sign']],'2797': ['\u2797', ['heavy_division_sign']],'27a1': ['\u27A1', ['arrow_right']],'27b0': ['\u27B0', ['curly_loop']],'27bf': ['\u27BF', ['loop']],'2934': ['\u2934', ['arrow_heading_up']],'2935': ['\u2935', ['arrow_heading_down']],'2b05': ['\u2B05', ['arrow_left']],'2b06': ['\u2B06', ['arrow_up']],'2b07': ['\u2B07', ['arrow_down']],'2b1b': ['\u2B1B', ['black_large_square']],'2b1c': ['\u2B1C', ['white_large_square']],'2b50': ['\u2B50', ['star']],'2b55': ['\u2B55', ['o']],'3030': ['\u3030', ['wavy_dash']],'303d': ['\u303D', ['part_alternation_mark']],'3297': ['\u3297', ['congratulations']],'3299': ['\u3299', ['secret']],'1f004': ['\uD83C\uDC04', ['mahjong']],'1f0cf': ['\uD83C\uDCCF', ['black_joker']],'1f170': ['\uD83C\uDD70', ['a']],'1f171': ['\uD83C\uDD71', ['b']],'1f17e': ['\uD83C\uDD7E', ['o2']],'1f17f': ['\uD83C\uDD7F', ['parking']],'1f18e': ['\uD83C\uDD8E', ['ab']],'1f191': ['\uD83C\uDD91', ['cl']],'1f192': ['\uD83C\uDD92', ['cool']],'1f193': ['\uD83C\uDD93', ['free']],'1f194': ['\uD83C\uDD94', ['id']],'1f195': ['\uD83C\uDD95', ['new']],'1f196': ['\uD83C\uDD96', ['ng']],'1f197': ['\uD83C\uDD97', ['ok']],'1f198': ['\uD83C\uDD98', ['sos']],'1f199': ['\uD83C\uDD99', ['up']],'1f19a': ['\uD83C\uDD9A', ['vs']],'1f201': ['\uD83C\uDE01', ['koko']],'1f202': ['\uD83C\uDE02', ['sa']],'1f21a': ['\uD83C\uDE1A', ['u7121']],'1f22f': ['\uD83C\uDE2F', ['u6307']],'1f232': ['\uD83C\uDE32', ['u7981']],'1f233': ['\uD83C\uDE33', ['u7a7a']],'1f234': ['\uD83C\uDE34', ['u5408']],'1f235': ['\uD83C\uDE35', ['u6e80']],'1f236': ['\uD83C\uDE36', ['u6709']],'1f237': ['\uD83C\uDE37', ['u6708']],'1f238': ['\uD83C\uDE38', ['u7533']],'1f239': ['\uD83C\uDE39', ['u5272']],'1f23a': ['\uD83C\uDE3A', ['u55b6']],'1f250': ['\uD83C\uDE50', ['ideograph_advantage']],'1f251': ['\uD83C\uDE51', ['accept']],'1f300': ['\uD83C\uDF00', ['cyclone']],'1f301': ['\uD83C\uDF01', ['foggy']],'1f302': ['\uD83C\uDF02', ['closed_umbrella']],'1f303': ['\uD83C\uDF03', ['night_with_stars']],'1f304': ['\uD83C\uDF04', ['sunrise_over_mountains']],'1f305': ['\uD83C\uDF05', ['sunrise']],'1f306': ['\uD83C\uDF06', ['city_sunset']],'1f307': ['\uD83C\uDF07', ['city_sunrise']],'1f308': ['\uD83C\uDF08', ['rainbow']],'1f309': ['\uD83C\uDF09', ['bridge_at_night']],'1f30a': ['\uD83C\uDF0A', ['ocean']],'1f30b': ['\uD83C\uDF0B', ['volcano']],'1f30c': ['\uD83C\uDF0C', ['milky_way']],'1f30d': ['\uD83C\uDF0D', ['earth_africa']],'1f30e': ['\uD83C\uDF0E', ['earth_americas']],'1f30f': ['\uD83C\uDF0F', ['earth_asia']],'1f310': ['\uD83C\uDF10', ['globe_with_meridians']],'1f311': ['\uD83C\uDF11', ['new_moon']],'1f312': ['\uD83C\uDF12', ['waxing_crescent_moon']],'1f313': ['\uD83C\uDF13', ['first_quarter_moon']],'1f314': ['\uD83C\uDF14', ['moon', 'waxing_gibbous_moon']],'1f315': ['\uD83C\uDF15', ['full_moon']],'1f316': ['\uD83C\uDF16', ['waning_gibbous_moon']],'1f317': ['\uD83C\uDF17', ['last_quarter_moon']],'1f318': ['\uD83C\uDF18', ['waning_crescent_moon']],'1f319': ['\uD83C\uDF19', ['crescent_moon']],'1f320': ['\uD83C\uDF20', ['stars']],'1f31a': ['\uD83C\uDF1A', ['new_moon_with_face']],'1f31b': ['\uD83C\uDF1B', ['first_quarter_moon_with_face']],'1f31c': ['\uD83C\uDF1C', ['last_quarter_moon_with_face']],'1f31d': ['\uD83C\uDF1D', ['full_moon_with_face']],'1f31e': ['\uD83C\uDF1E', ['sun_with_face']],'1f31f': ['\uD83C\uDF1F', ['star2']],'1f330': ['\uD83C\uDF30', ['chestnut']],'1f331': ['\uD83C\uDF31', ['seedling']],'1f332': ['\uD83C\uDF32', ['evergreen_tree']],'1f333': ['\uD83C\uDF33', ['deciduous_tree']],'1f334': ['\uD83C\uDF34', ['palm_tree']],'1f335': ['\uD83C\uDF35', ['cactus']],'1f337': ['\uD83C\uDF37', ['tulip']],'1f338': ['\uD83C\uDF38', ['cherry_blossom']],'1f339': ['\uD83C\uDF39', ['rose']],'1f33a': ['\uD83C\uDF3A', ['hibiscus']],'1f33b': ['\uD83C\uDF3B', ['sunflower']],'1f33c': ['\uD83C\uDF3C', ['blossom']],'1f33d': ['\uD83C\uDF3D', ['corn']],'1f33e': ['\uD83C\uDF3E', ['ear_of_rice']],'1f33f': ['\uD83C\uDF3F', ['herb']],'1f340': ['\uD83C\uDF40', ['four_leaf_clover']],'1f341': ['\uD83C\uDF41', ['maple_leaf']],'1f342': ['\uD83C\uDF42', ['fallen_leaf']],'1f343': ['\uD83C\uDF43', ['leaves']],'1f344': ['\uD83C\uDF44', ['mushroom']],'1f345': ['\uD83C\uDF45', ['tomato']],'1f346': ['\uD83C\uDF46', ['eggplant']],'1f347': ['\uD83C\uDF47', ['grapes']],'1f348': ['\uD83C\uDF48', ['melon']],'1f349': ['\uD83C\uDF49', ['watermelon']],'1f34a': ['\uD83C\uDF4A', ['tangerine']],'1f34b': ['\uD83C\uDF4B', ['lemon']],'1f34c': ['\uD83C\uDF4C', ['banana']],'1f34d': ['\uD83C\uDF4D', ['pineapple']],'1f34e': ['\uD83C\uDF4E', ['apple']],'1f34f': ['\uD83C\uDF4F', ['green_apple']],'1f350': ['\uD83C\uDF50', ['pear']],'1f351': ['\uD83C\uDF51', ['peach']],'1f352': ['\uD83C\uDF52', ['cherries']],'1f353': ['\uD83C\uDF53', ['strawberry']],'1f354': ['\uD83C\uDF54', ['hamburger']],'1f355': ['\uD83C\uDF55', ['pizza']],'1f356': ['\uD83C\uDF56', ['meat_on_bone']],'1f357': ['\uD83C\uDF57', ['poultry_leg']],'1f358': ['\uD83C\uDF58', ['rice_cracker']],'1f359': ['\uD83C\uDF59', ['rice_ball']],'1f35a': ['\uD83C\uDF5A', ['rice']],'1f35b': ['\uD83C\uDF5B', ['curry']],'1f35c': ['\uD83C\uDF5C', ['ramen']],'1f35d': ['\uD83C\uDF5D', ['spaghetti']],'1f35e': ['\uD83C\uDF5E', ['bread']],'1f35f': ['\uD83C\uDF5F', ['fries']],'1f360': ['\uD83C\uDF60', ['sweet_potato']],'1f361': ['\uD83C\uDF61', ['dango']],'1f362': ['\uD83C\uDF62', ['oden']],'1f363': ['\uD83C\uDF63', ['sushi']],'1f364': ['\uD83C\uDF64', ['fried_shrimp']],'1f365': ['\uD83C\uDF65', ['fish_cake']],'1f366': ['\uD83C\uDF66', ['icecream']],'1f367': ['\uD83C\uDF67', ['shaved_ice']],'1f368': ['\uD83C\uDF68', ['ice_cream']],'1f369': ['\uD83C\uDF69', ['doughnut']],'1f36a': ['\uD83C\uDF6A', ['cookie']],'1f36b': ['\uD83C\uDF6B', ['chocolate_bar']],'1f36c': ['\uD83C\uDF6C', ['candy']],'1f36d': ['\uD83C\uDF6D', ['lollipop']],'1f36e': ['\uD83C\uDF6E', ['custard']],'1f36f': ['\uD83C\uDF6F', ['honey_pot']],'1f370': ['\uD83C\uDF70', ['cake']],'1f371': ['\uD83C\uDF71', ['bento']],'1f372': ['\uD83C\uDF72', ['stew']],'1f373': ['\uD83C\uDF73', ['egg']],'1f374': ['\uD83C\uDF74', ['fork_and_knife']],'1f375': ['\uD83C\uDF75', ['tea']],'1f376': ['\uD83C\uDF76', ['sake']],'1f377': ['\uD83C\uDF77', ['wine_glass']],'1f378': ['\uD83C\uDF78', ['cocktail']],'1f379': ['\uD83C\uDF79', ['tropical_drink']],'1f37a': ['\uD83C\uDF7A', ['beer']],'1f37b': ['\uD83C\uDF7B', ['beers']],'1f37c': ['\uD83C\uDF7C', ['baby_bottle']],'1f380': ['\uD83C\uDF80', ['ribbon']],'1f381': ['\uD83C\uDF81', ['gift']],'1f382': ['\uD83C\uDF82', ['birthday']],'1f383': ['\uD83C\uDF83', ['jack_o_lantern']],'1f384': ['\uD83C\uDF84', ['christmas_tree']],'1f385': ['\uD83C\uDF85', ['santa']],'1f386': ['\uD83C\uDF86', ['fireworks']],'1f387': ['\uD83C\uDF87', ['sparkler']],'1f388': ['\uD83C\uDF88', ['balloon']],'1f389': ['\uD83C\uDF89', ['tada']],'1f38a': ['\uD83C\uDF8A', ['confetti_ball']],'1f38b': ['\uD83C\uDF8B', ['tanabata_tree']],'1f38c': ['\uD83C\uDF8C', ['crossed_flags']],'1f38d': ['\uD83C\uDF8D', ['bamboo']],'1f38e': ['\uD83C\uDF8E', ['dolls']],'1f38f': ['\uD83C\uDF8F', ['flags']],'1f390': ['\uD83C\uDF90', ['wind_chime']],'1f391': ['\uD83C\uDF91', ['rice_scene']],'1f392': ['\uD83C\uDF92', ['school_satchel']],'1f393': ['\uD83C\uDF93', ['mortar_board']],'1f3a0': ['\uD83C\uDFA0', ['carousel_horse']],'1f3a1': ['\uD83C\uDFA1', ['ferris_wheel']],'1f3a2': ['\uD83C\uDFA2', ['roller_coaster']],'1f3a3': ['\uD83C\uDFA3', ['fishing_pole_and_fish']],'1f3a4': ['\uD83C\uDFA4', ['microphone']],'1f3a5': ['\uD83C\uDFA5', ['movie_camera']],'1f3a6': ['\uD83C\uDFA6', ['cinema']],'1f3a7': ['\uD83C\uDFA7', ['headphones']],'1f3a8': ['\uD83C\uDFA8', ['art']],'1f3a9': ['\uD83C\uDFA9', ['tophat']],'1f3aa': ['\uD83C\uDFAA', ['circus_tent']],'1f3ab': ['\uD83C\uDFAB', ['ticket']],'1f3ac': ['\uD83C\uDFAC', ['clapper']],'1f3ad': ['\uD83C\uDFAD', ['performing_arts']],'1f3ae': ['\uD83C\uDFAE', ['video_game']],'1f3af': ['\uD83C\uDFAF', ['dart']],'1f3b0': ['\uD83C\uDFB0', ['slot_machine']],'1f3b1': ['\uD83C\uDFB1', ['8ball']],'1f3b2': ['\uD83C\uDFB2', ['game_die']],'1f3b3': ['\uD83C\uDFB3', ['bowling']],'1f3b4': ['\uD83C\uDFB4', ['flower_playing_cards']],'1f3b5': ['\uD83C\uDFB5', ['musical_note']],'1f3b6': ['\uD83C\uDFB6', ['notes']],'1f3b7': ['\uD83C\uDFB7', ['saxophone']],'1f3b8': ['\uD83C\uDFB8', ['guitar']],'1f3b9': ['\uD83C\uDFB9', ['musical_keyboard']],'1f3ba': ['\uD83C\uDFBA', ['trumpet']],'1f3bb': ['\uD83C\uDFBB', ['violin']],'1f3bc': ['\uD83C\uDFBC', ['musical_score']],'1f3bd': ['\uD83C\uDFBD', ['running_shirt_with_sash']],'1f3be': ['\uD83C\uDFBE', ['tennis']],'1f3bf': ['\uD83C\uDFBF', ['ski']],'1f3c0': ['\uD83C\uDFC0', ['basketball']],'1f3c1': ['\uD83C\uDFC1', ['checkered_flag']],'1f3c2': ['\uD83C\uDFC2', ['snowboarder']],'1f3c3': ['\uD83C\uDFC3', ['runner', 'running']],'1f3c4': ['\uD83C\uDFC4', ['surfer']],'1f3c6': ['\uD83C\uDFC6', ['trophy']],'1f3c7': ['\uD83C\uDFC7', ['horse_racing']],'1f3c8': ['\uD83C\uDFC8', ['football']],'1f3c9': ['\uD83C\uDFC9', ['rugby_football']],'1f3ca': ['\uD83C\uDFCA', ['swimmer']],'1f3e0': ['\uD83C\uDFE0', ['house']],'1f3e1': ['\uD83C\uDFE1', ['house_with_garden']],'1f3e2': ['\uD83C\uDFE2', ['office']],'1f3e3': ['\uD83C\uDFE3', ['post_office']],'1f3e4': ['\uD83C\uDFE4', ['european_post_office']],'1f3e5': ['\uD83C\uDFE5', ['hospital']],'1f3e6': ['\uD83C\uDFE6', ['bank']],'1f3e7': ['\uD83C\uDFE7', ['atm']],'1f3e8': ['\uD83C\uDFE8', ['hotel']],'1f3e9': ['\uD83C\uDFE9', ['love_hotel']],'1f3ea': ['\uD83C\uDFEA', ['convenience_store']],'1f3eb': ['\uD83C\uDFEB', ['school']],'1f3ec': ['\uD83C\uDFEC', ['department_store']],'1f3ed': ['\uD83C\uDFED', ['factory']],'1f3ee': ['\uD83C\uDFEE', ['izakaya_lantern', 'lantern']],'1f3ef': ['\uD83C\uDFEF', ['japanese_castle']],'1f3f0': ['\uD83C\uDFF0', ['european_castle']],'1f400': ['\uD83D\uDC00', ['rat']],'1f401': ['\uD83D\uDC01', ['mouse2']],'1f402': ['\uD83D\uDC02', ['ox']],'1f403': ['\uD83D\uDC03', ['water_buffalo']],'1f404': ['\uD83D\uDC04', ['cow2']],'1f405': ['\uD83D\uDC05', ['tiger2']],'1f406': ['\uD83D\uDC06', ['leopard']],'1f407': ['\uD83D\uDC07', ['rabbit2']],'1f408': ['\uD83D\uDC08', ['cat2']],'1f409': ['\uD83D\uDC09', ['dragon']],'1f40a': ['\uD83D\uDC0A', ['crocodile']],'1f40b': ['\uD83D\uDC0B', ['whale2']],'1f40c': ['\uD83D\uDC0C', ['snail']],'1f40d': ['\uD83D\uDC0D', ['snake']],'1f40e': ['\uD83D\uDC0E', ['racehorse']],'1f40f': ['\uD83D\uDC0F', ['ram']],'1f410': ['\uD83D\uDC10', ['goat']],'1f411': ['\uD83D\uDC11', ['sheep']],'1f412': ['\uD83D\uDC12', ['monkey']],'1f413': ['\uD83D\uDC13', ['rooster']],'1f414': ['\uD83D\uDC14', ['chicken']],'1f415': ['\uD83D\uDC15', ['dog2']],'1f416': ['\uD83D\uDC16', ['pig2']],'1f417': ['\uD83D\uDC17', ['boar']],'1f418': ['\uD83D\uDC18', ['elephant']],'1f419': ['\uD83D\uDC19', ['octopus']],'1f41a': ['\uD83D\uDC1A', ['shell']],'1f41b': ['\uD83D\uDC1B', ['bug']],'1f41c': ['\uD83D\uDC1C', ['ant']],'1f41d': ['\uD83D\uDC1D', ['bee', 'honeybee']],'1f41e': ['\uD83D\uDC1E', ['beetle']],'1f41f': ['\uD83D\uDC1F', ['fish']],'1f420': ['\uD83D\uDC20', ['tropical_fish']],'1f421': ['\uD83D\uDC21', ['blowfish']],'1f422': ['\uD83D\uDC22', ['turtle']],'1f423': ['\uD83D\uDC23', ['hatching_chick']],'1f424': ['\uD83D\uDC24', ['baby_chick']],'1f425': ['\uD83D\uDC25', ['hatched_chick']],'1f426': ['\uD83D\uDC26', ['bird']],'1f427': ['\uD83D\uDC27', ['penguin']],'1f428': ['\uD83D\uDC28', ['koala']],'1f429': ['\uD83D\uDC29', ['poodle']],'1f42a': ['\uD83D\uDC2A', ['dromedary_camel']],'1f42b': ['\uD83D\uDC2B', ['camel']],'1f42c': ['\uD83D\uDC2C', ['dolphin', 'flipper']],'1f42d': ['\uD83D\uDC2D', ['mouse']],'1f42e': ['\uD83D\uDC2E', ['cow']],'1f42f': ['\uD83D\uDC2F', ['tiger']],'1f430': ['\uD83D\uDC30', ['rabbit']],'1f431': ['\uD83D\uDC31', ['cat']],'1f432': ['\uD83D\uDC32', ['dragon_face']],'1f433': ['\uD83D\uDC33', ['whale']],'1f434': ['\uD83D\uDC34', ['horse']],'1f435': ['\uD83D\uDC35', ['monkey_face']],'1f436': ['\uD83D\uDC36', ['dog']],'1f437': ['\uD83D\uDC37', ['pig']],'1f438': ['\uD83D\uDC38', ['frog']],'1f439': ['\uD83D\uDC39', ['hamster']],'1f43a': ['\uD83D\uDC3A', ['wolf']],'1f43b': ['\uD83D\uDC3B', ['bear']],'1f43c': ['\uD83D\uDC3C', ['panda_face']],'1f43d': ['\uD83D\uDC3D', ['pig_nose']],'1f43e': ['\uD83D\uDC3E', ['feet', 'paw_prints']],'1f440': ['\uD83D\uDC40', ['eyes']],'1f442': ['\uD83D\uDC42', ['ear']],'1f443': ['\uD83D\uDC43', ['nose']],'1f444': ['\uD83D\uDC44', ['lips']],'1f445': ['\uD83D\uDC45', ['tongue']],'1f446': ['\uD83D\uDC46', ['point_up_2']],'1f447': ['\uD83D\uDC47', ['point_down']],'1f448': ['\uD83D\uDC48', ['point_left']],'1f449': ['\uD83D\uDC49', ['point_right']],'1f44a': ['\uD83D\uDC4A', ['facepunch', 'punch']],'1f44b': ['\uD83D\uDC4B', ['wave']],'1f44c': ['\uD83D\uDC4C', ['ok_hand']],'1f44d': ['\uD83D\uDC4D', ['+1', 'thumbsup']],'1f44e': ['\uD83D\uDC4E', ['-1', 'thumbsdown']],'1f44f': ['\uD83D\uDC4F', ['clap']],'1f450': ['\uD83D\uDC50', ['open_hands']],'1f451': ['\uD83D\uDC51', ['crown']],'1f452': ['\uD83D\uDC52', ['womans_hat']],'1f453': ['\uD83D\uDC53', ['eyeglasses']],'1f454': ['\uD83D\uDC54', ['necktie']],'1f455': ['\uD83D\uDC55', ['shirt', 'tshirt']],'1f456': ['\uD83D\uDC56', ['jeans']],'1f457': ['\uD83D\uDC57', ['dress']],'1f458': ['\uD83D\uDC58', ['kimono']],'1f459': ['\uD83D\uDC59', ['bikini']],'1f45a': ['\uD83D\uDC5A', ['womans_clothes']],'1f45b': ['\uD83D\uDC5B', ['purse']],'1f45c': ['\uD83D\uDC5C', ['handbag']],'1f45d': ['\uD83D\uDC5D', ['pouch']],'1f45e': ['\uD83D\uDC5E', ['mans_shoe', 'shoe']],'1f45f': ['\uD83D\uDC5F', ['athletic_shoe']],'1f460': ['\uD83D\uDC60', ['high_heel']],'1f461': ['\uD83D\uDC61', ['sandal']],'1f462': ['\uD83D\uDC62', ['boot']],'1f463': ['\uD83D\uDC63', ['footprints']],'1f464': ['\uD83D\uDC64', ['bust_in_silhouette']],'1f465': ['\uD83D\uDC65', ['busts_in_silhouette']],'1f466': ['\uD83D\uDC66', ['boy']],'1f467': ['\uD83D\uDC67', ['girl']],'1f468': ['\uD83D\uDC68', ['man']],'1f469': ['\uD83D\uDC69', ['woman']],'1f46a': ['\uD83D\uDC6A', ['family']],'1f46b': ['\uD83D\uDC6B', ['couple']],'1f46c': ['\uD83D\uDC6C', ['two_men_holding_hands']],'1f46d': ['\uD83D\uDC6D', ['two_women_holding_hands']],'1f46e': ['\uD83D\uDC6E', ['cop']],'1f46f': ['\uD83D\uDC6F', ['dancers']],'1f470': ['\uD83D\uDC70', ['bride_with_veil']],'1f471': ['\uD83D\uDC71', ['person_with_blond_hair']],'1f472': ['\uD83D\uDC72', ['man_with_gua_pi_mao']],'1f473': ['\uD83D\uDC73', ['man_with_turban']],'1f474': ['\uD83D\uDC74', ['older_man']],'1f475': ['\uD83D\uDC75', ['older_woman']],'1f476': ['\uD83D\uDC76', ['baby']],'1f477': ['\uD83D\uDC77', ['construction_worker']],'1f478': ['\uD83D\uDC78', ['princess']],'1f479': ['\uD83D\uDC79', ['japanese_ogre']],'1f47a': ['\uD83D\uDC7A', ['japanese_goblin']],'1f47b': ['\uD83D\uDC7B', ['ghost']],'1f47c': ['\uD83D\uDC7C', ['angel']],'1f47d': ['\uD83D\uDC7D', ['alien']],'1f47e': ['\uD83D\uDC7E', ['space_invader']],'1f47f': ['\uD83D\uDC7F', ['imp']],'1f480': ['\uD83D\uDC80', ['skull']],'1f481': ['\uD83D\uDC81', ['information_desk_person']],'1f482': ['\uD83D\uDC82', ['guardsman']],'1f483': ['\uD83D\uDC83', ['dancer']],'1f484': ['\uD83D\uDC84', ['lipstick']],'1f485': ['\uD83D\uDC85', ['nail_care']],'1f486': ['\uD83D\uDC86', ['massage']],'1f487': ['\uD83D\uDC87', ['haircut']],'1f488': ['\uD83D\uDC88', ['barber']],'1f489': ['\uD83D\uDC89', ['syringe']],'1f48a': ['\uD83D\uDC8A', ['pill']],'1f48b': ['\uD83D\uDC8B', ['kiss']],'1f48c': ['\uD83D\uDC8C', ['love_letter']],'1f48d': ['\uD83D\uDC8D', ['ring']],'1f48e': ['\uD83D\uDC8E', ['gem']],'1f48f': ['\uD83D\uDC8F', ['couplekiss']],'1f490': ['\uD83D\uDC90', ['bouquet']],'1f491': ['\uD83D\uDC91', ['couple_with_heart']],'1f492': ['\uD83D\uDC92', ['wedding']],'1f493': ['\uD83D\uDC93', ['heartbeat']],'1f494': ['\uD83D\uDC94', ['broken_heart'], '<\/3'],'1f495': ['\uD83D\uDC95', ['two_hearts']],'1f496': ['\uD83D\uDC96', ['sparkling_heart']],'1f497': ['\uD83D\uDC97', ['heartpulse']],'1f498': ['\uD83D\uDC98', ['cupid']],'1f499': ['\uD83D\uDC99', ['blue_heart'], '<3'],'1f49a': ['\uD83D\uDC9A', ['green_heart'], '<3'],'1f49b': ['\uD83D\uDC9B', ['yellow_heart'], '<3'],'1f49c': ['\uD83D\uDC9C', ['purple_heart'], '<3'],'1f49d': ['\uD83D\uDC9D', ['gift_heart']],'1f49e': ['\uD83D\uDC9E', ['revolving_hearts']],'1f49f': ['\uD83D\uDC9F', ['heart_decoration']],'1f4a0': ['\uD83D\uDCA0', ['diamond_shape_with_a_dot_inside']],'1f4a1': ['\uD83D\uDCA1', ['bulb']],'1f4a2': ['\uD83D\uDCA2', ['anger']],'1f4a3': ['\uD83D\uDCA3', ['bomb']],'1f4a4': ['\uD83D\uDCA4', ['zzz']],'1f4a5': ['\uD83D\uDCA5', ['boom', 'collision']],'1f4a6': ['\uD83D\uDCA6', ['sweat_drops']],'1f4a7': ['\uD83D\uDCA7', ['droplet']],'1f4a8': ['\uD83D\uDCA8', ['dash']],'1f4a9': ['\uD83D\uDCA9', ['hankey', 'poop', 'shit']],'1f4aa': ['\uD83D\uDCAA', ['muscle']],'1f4ab': ['\uD83D\uDCAB', ['dizzy']],'1f4ac': ['\uD83D\uDCAC', ['speech_balloon']],'1f4ad': ['\uD83D\uDCAD', ['thought_balloon']],'1f4ae': ['\uD83D\uDCAE', ['white_flower']],'1f4af': ['\uD83D\uDCAF', ['100']],'1f4b0': ['\uD83D\uDCB0', ['moneybag']],'1f4b1': ['\uD83D\uDCB1', ['currency_exchange']],'1f4b2': ['\uD83D\uDCB2', ['heavy_dollar_sign']],'1f4b3': ['\uD83D\uDCB3', ['credit_card']],'1f4b4': ['\uD83D\uDCB4', ['yen']],'1f4b5': ['\uD83D\uDCB5', ['dollar']],'1f4b6': ['\uD83D\uDCB6', ['euro']],'1f4b7': ['\uD83D\uDCB7', ['pound']],'1f4b8': ['\uD83D\uDCB8', ['money_with_wings']],'1f4b9': ['\uD83D\uDCB9', ['chart']],'1f4ba': ['\uD83D\uDCBA', ['seat']],'1f4bb': ['\uD83D\uDCBB', ['computer']],'1f4bc': ['\uD83D\uDCBC', ['briefcase']],'1f4bd': ['\uD83D\uDCBD', ['minidisc']],'1f4be': ['\uD83D\uDCBE', ['floppy_disk']],'1f4bf': ['\uD83D\uDCBF', ['cd']],'1f4c0': ['\uD83D\uDCC0', ['dvd']],'1f4c1': ['\uD83D\uDCC1', ['file_folder']],'1f4c2': ['\uD83D\uDCC2', ['open_file_folder']],'1f4c3': ['\uD83D\uDCC3', ['page_with_curl']],'1f4c4': ['\uD83D\uDCC4', ['page_facing_up']],'1f4c5': ['\uD83D\uDCC5', ['date']],'1f4c6': ['\uD83D\uDCC6', ['calendar']],'1f4c7': ['\uD83D\uDCC7', ['card_index']],'1f4c8': ['\uD83D\uDCC8', ['chart_with_upwards_trend']],'1f4c9': ['\uD83D\uDCC9', ['chart_with_downwards_trend']],'1f4ca': ['\uD83D\uDCCA', ['bar_chart']],'1f4cb': ['\uD83D\uDCCB', ['clipboard']],'1f4cc': ['\uD83D\uDCCC', ['pushpin']],'1f4cd': ['\uD83D\uDCCD', ['round_pushpin']],'1f4ce': ['\uD83D\uDCCE', ['paperclip']],'1f4cf': ['\uD83D\uDCCF', ['straight_ruler']],'1f4d0': ['\uD83D\uDCD0', ['triangular_ruler']],'1f4d1': ['\uD83D\uDCD1', ['bookmark_tabs']],'1f4d2': ['\uD83D\uDCD2', ['ledger']],'1f4d3': ['\uD83D\uDCD3', ['notebook']],'1f4d4': ['\uD83D\uDCD4', ['notebook_with_decorative_cover']],'1f4d5': ['\uD83D\uDCD5', ['closed_book']],'1f4d6': ['\uD83D\uDCD6', ['book', 'open_book']],'1f4d7': ['\uD83D\uDCD7', ['green_book']],'1f4d8': ['\uD83D\uDCD8', ['blue_book']],'1f4d9': ['\uD83D\uDCD9', ['orange_book']],'1f4da': ['\uD83D\uDCDA', ['books']],'1f4db': ['\uD83D\uDCDB', ['name_badge']],'1f4dc': ['\uD83D\uDCDC', ['scroll']],'1f4dd': ['\uD83D\uDCDD', ['memo', 'pencil']],'1f4de': ['\uD83D\uDCDE', ['telephone_receiver']],'1f4df': ['\uD83D\uDCDF', ['pager']],'1f4e0': ['\uD83D\uDCE0', ['fax']],'1f4e1': ['\uD83D\uDCE1', ['satellite']],'1f4e2': ['\uD83D\uDCE2', ['loudspeaker']],'1f4e3': ['\uD83D\uDCE3', ['mega']],'1f4e4': ['\uD83D\uDCE4', ['outbox_tray']],'1f4e5': ['\uD83D\uDCE5', ['inbox_tray']],'1f4e6': ['\uD83D\uDCE6', ['package']],'1f4e7': ['\uD83D\uDCE7', ['e-mail']],'1f4e8': ['\uD83D\uDCE8', ['incoming_envelope']],'1f4e9': ['\uD83D\uDCE9', ['envelope_with_arrow']],'1f4ea': ['\uD83D\uDCEA', ['mailbox_closed']],'1f4eb': ['\uD83D\uDCEB', ['mailbox']],'1f4ec': ['\uD83D\uDCEC', ['mailbox_with_mail']],'1f4ed': ['\uD83D\uDCED', ['mailbox_with_no_mail']],'1f4ee': ['\uD83D\uDCEE', ['postbox']],'1f4ef': ['\uD83D\uDCEF', ['postal_horn']],'1f4f0': ['\uD83D\uDCF0', ['newspaper']],'1f4f1': ['\uD83D\uDCF1', ['iphone']],'1f4f2': ['\uD83D\uDCF2', ['calling']],'1f4f3': ['\uD83D\uDCF3', ['vibration_mode']],'1f4f4': ['\uD83D\uDCF4', ['mobile_phone_off']],'1f4f5': ['\uD83D\uDCF5', ['no_mobile_phones']],'1f4f6': ['\uD83D\uDCF6', ['signal_strength']],'1f4f7': ['\uD83D\uDCF7', ['camera']],'1f4f9': ['\uD83D\uDCF9', ['video_camera']],'1f4fa': ['\uD83D\uDCFA', ['tv']],'1f4fb': ['\uD83D\uDCFB', ['radio']],'1f4fc': ['\uD83D\uDCFC', ['vhs']],'1f500': ['\uD83D\uDD00', ['twisted_rightwards_arrows']],'1f501': ['\uD83D\uDD01', ['repeat']],'1f502': ['\uD83D\uDD02', ['repeat_one']],'1f503': ['\uD83D\uDD03', ['arrows_clockwise']],'1f504': ['\uD83D\uDD04', ['arrows_counterclockwise']],'1f505': ['\uD83D\uDD05', ['low_brightness']],'1f506': ['\uD83D\uDD06', ['high_brightness']],'1f507': ['\uD83D\uDD07', ['mute']],'1f508': ['\uD83D\uDD09', ['speaker']],'1f509': ['\uD83D\uDD09', ['sound']],'1f50a': ['\uD83D\uDD0A', ['loud_sound']],'1f50b': ['\uD83D\uDD0B', ['battery']],'1f50c': ['\uD83D\uDD0C', ['electric_plug']],'1f50d': ['\uD83D\uDD0D', ['mag']],'1f50e': ['\uD83D\uDD0E', ['mag_right']],'1f50f': ['\uD83D\uDD0F', ['lock_with_ink_pen']],'1f510': ['\uD83D\uDD10', ['closed_lock_with_key']],'1f511': ['\uD83D\uDD11', ['key']],'1f512': ['\uD83D\uDD12', ['lock']],'1f513': ['\uD83D\uDD13', ['unlock']],'1f514': ['\uD83D\uDD14', ['bell']],'1f515': ['\uD83D\uDD15', ['no_bell']],'1f516': ['\uD83D\uDD16', ['bookmark']],'1f517': ['\uD83D\uDD17', ['link']],'1f518': ['\uD83D\uDD18', ['radio_button']],'1f519': ['\uD83D\uDD19', ['back']],'1f51a': ['\uD83D\uDD1A', ['end']],'1f51b': ['\uD83D\uDD1B', ['on']],'1f51c': ['\uD83D\uDD1C', ['soon']],'1f51d': ['\uD83D\uDD1D', ['top']],'1f51e': ['\uD83D\uDD1E', ['underage']],'1f51f': ['\uD83D\uDD1F', ['keycap_ten']],'1f520': ['\uD83D\uDD20', ['capital_abcd']],'1f521': ['\uD83D\uDD21', ['abcd']],'1f522': ['\uD83D\uDD22', ['1234']],'1f523': ['\uD83D\uDD23', ['symbols']],'1f524': ['\uD83D\uDD24', ['abc']],'1f525': ['\uD83D\uDD25', ['fire']],'1f526': ['\uD83D\uDD26', ['flashlight']],'1f527': ['\uD83D\uDD27', ['wrench']],'1f528': ['\uD83D\uDD28', ['hammer']],'1f529': ['\uD83D\uDD29', ['nut_and_bolt']],'1f52a': ['\uD83D\uDD2A', ['hocho']],'1f52b': ['\uD83D\uDD2B', ['gun']],'1f52c': ['\uD83D\uDD2C', ['microscope']],'1f52d': ['\uD83D\uDD2D', ['telescope']],'1f52e': ['\uD83D\uDD2E', ['crystal_ball']],'1f52f': ['\uD83D\uDD2F', ['six_pointed_star']],'1f530': ['\uD83D\uDD30', ['beginner']],'1f531': ['\uD83D\uDD31', ['trident']],'1f532': ['\uD83D\uDD32', ['black_square_button']],'1f533': ['\uD83D\uDD33', ['white_square_button']],'1f534': ['\uD83D\uDD34', ['red_circle']],'1f535': ['\uD83D\uDD35', ['large_blue_circle']],'1f536': ['\uD83D\uDD36', ['large_orange_diamond']],'1f537': ['\uD83D\uDD37', ['large_blue_diamond']],'1f538': ['\uD83D\uDD38', ['small_orange_diamond']],'1f539': ['\uD83D\uDD39', ['small_blue_diamond']],'1f53a': ['\uD83D\uDD3A', ['small_red_triangle']],'1f53b': ['\uD83D\uDD3B', ['small_red_triangle_down']],'1f53c': ['\uD83D\uDD3C', ['arrow_up_small']],'1f53d': ['\uD83D\uDD3D', ['arrow_down_small']],'1f550': ['\uD83D\uDD50', ['clock1']],'1f551': ['\uD83D\uDD51', ['clock2']],'1f552': ['\uD83D\uDD52', ['clock3']],'1f553': ['\uD83D\uDD53', ['clock4']],'1f554': ['\uD83D\uDD54', ['clock5']],'1f555': ['\uD83D\uDD55', ['clock6']],'1f556': ['\uD83D\uDD56', ['clock7']],'1f557': ['\uD83D\uDD57', ['clock8']],'1f558': ['\uD83D\uDD58', ['clock9']],'1f559': ['\uD83D\uDD59', ['clock10']],'1f55a': ['\uD83D\uDD5A', ['clock11']],'1f55b': ['\uD83D\uDD5B', ['clock12']],'1f55c': ['\uD83D\uDD5C', ['clock130']],'1f55d': ['\uD83D\uDD5D', ['clock230']],'1f55e': ['\uD83D\uDD5E', ['clock330']],'1f55f': ['\uD83D\uDD5F', ['clock430']],'1f560': ['\uD83D\uDD60', ['clock530']],'1f561': ['\uD83D\uDD61', ['clock630']],'1f562': ['\uD83D\uDD62', ['clock730']],'1f563': ['\uD83D\uDD63', ['clock830']],'1f564': ['\uD83D\uDD64', ['clock930']],'1f565': ['\uD83D\uDD65', ['clock1030']],'1f566': ['\uD83D\uDD66', ['clock1130']],'1f567': ['\uD83D\uDD67', ['clock1230']],'1f5fb': ['\uD83D\uDDFB', ['mount_fuji']],'1f5fc': ['\uD83D\uDDFC', ['tokyo_tower']],'1f5fd': ['\uD83D\uDDFD', ['statue_of_liberty']],'1f5fe': ['\uD83D\uDDFE', ['japan']],'1f5ff': ['\uD83D\uDDFF', ['moyai']],'1f600': ['\uD83D\uDE00', ['grinning']],'1f601': ['\uD83D\uDE01', ['grin']],'1f602': ['\uD83D\uDE02', ['joy']],'1f603': ['\uD83D\uDE03', ['smiley'], ':)'],'1f604': ['\uD83D\uDE04', ['smile'], ':)'],'1f605': ['\uD83D\uDE05', ['sweat_smile']],'1f606': ['\uD83D\uDE06', ['laughing', 'satisfied']],'1f607': ['\uD83D\uDE07', ['innocent']],'1f608': ['\uD83D\uDE08', ['smiling_imp']],'1f609': ['\uD83D\uDE09', ['wink'], ';)'],'1f60a': ['\uD83D\uDE0A', ['blush']],'1f60b': ['\uD83D\uDE0B', ['yum']],'1f60c': ['\uD83D\uDE0C', ['relieved']],'1f60d': ['\uD83D\uDE0D', ['heart_eyes']],'1f60e': ['\uD83D\uDE0E', ['sunglasses']],'1f60f': ['\uD83D\uDE0F', ['smirk']],'1f610': ['\uD83D\uDE10', ['neutral_face']],'1f611': ['\uD83D\uDE11', ['expressionless']],'1f612': ['\uD83D\uDE12', ['unamused']],'1f613': ['\uD83D\uDE13', ['sweat']],'1f614': ['\uD83D\uDE14', ['pensive']],'1f615': ['\uD83D\uDE15', ['confused']],'1f616': ['\uD83D\uDE16', ['confounded']],'1f617': ['\uD83D\uDE17', ['kissing']],'1f618': ['\uD83D\uDE18', ['kissing_heart']],'1f619': ['\uD83D\uDE19', ['kissing_smiling_eyes']],'1f61a': ['\uD83D\uDE1A', ['kissing_closed_eyes']],'1f61b': ['\uD83D\uDE1B', ['stuck_out_tongue']],'1f61c': ['\uD83D\uDE1C', ['stuck_out_tongue_winking_eye'], ';p'],'1f61d': ['\uD83D\uDE1D', ['stuck_out_tongue_closed_eyes']],'1f61e': ['\uD83D\uDE1E', ['disappointed'], ':('],'1f61f': ['\uD83D\uDE1F', ['worried']],'1f620': ['\uD83D\uDE20', ['angry']],'1f621': ['\uD83D\uDE21', ['rage']],'1f622': ['\uD83D\uDE22', ['cry'], ":'("],'1f623': ['\uD83D\uDE23', ['persevere']],'1f624': ['\uD83D\uDE24', ['triumph']],'1f625': ['\uD83D\uDE25', ['disappointed_relieved']],'1f626': ['\uD83D\uDE26', ['frowning']],'1f627': ['\uD83D\uDE27', ['anguished']],'1f628': ['\uD83D\uDE28', ['fearful']],'1f629': ['\uD83D\uDE29', ['weary']],'1f62a': ['\uD83D\uDE2A', ['sleepy']],'1f62b': ['\uD83D\uDE2B', ['tired_face']],'1f62c': ['\uD83D\uDE2C', ['grimacing']],'1f62d': ['\uD83D\uDE2D', ['sob'], ":'("],'1f62e': ['\uD83D\uDE2E', ['open_mouth']],'1f62f': ['\uD83D\uDE2F', ['hushed']],'1f630': ['\uD83D\uDE30', ['cold_sweat']],'1f631': ['\uD83D\uDE31', ['scream']],'1f632': ['\uD83D\uDE32', ['astonished']],'1f633': ['\uD83D\uDE33', ['flushed']],'1f634': ['\uD83D\uDE34', ['sleeping']],'1f635': ['\uD83D\uDE35', ['dizzy_face']],'1f636': ['\uD83D\uDE36', ['no_mouth']],'1f637': ['\uD83D\uDE37', ['mask']],'1f638': ['\uD83D\uDE38', ['smile_cat']],'1f639': ['\uD83D\uDE39', ['joy_cat']],'1f63a': ['\uD83D\uDE3A', ['smiley_cat']],'1f63b': ['\uD83D\uDE3B', ['heart_eyes_cat']],'1f63c': ['\uD83D\uDE3C', ['smirk_cat']],'1f63d': ['\uD83D\uDE3D', ['kissing_cat']],'1f63e': ['\uD83D\uDE3E', ['pouting_cat']],'1f63f': ['\uD83D\uDE3F', ['crying_cat_face']],'1f640': ['\uD83D\uDE40', ['scream_cat']],'1f645': ['\uD83D\uDE45', ['no_good']],'1f646': ['\uD83D\uDE46', ['ok_woman']],'1f647': ['\uD83D\uDE47', ['bow']],'1f648': ['\uD83D\uDE48', ['see_no_evil']],'1f649': ['\uD83D\uDE49', ['hear_no_evil']],'1f64a': ['\uD83D\uDE4A', ['speak_no_evil']],'1f64b': ['\uD83D\uDE4B', ['raising_hand']],'1f64c': ['\uD83D\uDE4C', ['raised_hands']],'1f64d': ['\uD83D\uDE4D', ['person_frowning']],'1f64e': ['\uD83D\uDE4E', ['person_with_pouting_face']],'1f64f': ['\uD83D\uDE4F', ['pray']],'1f680': ['\uD83D\uDE80', ['rocket']],'1f681': ['\uD83D\uDE81', ['helicopter']],'1f682': ['\uD83D\uDE82', ['steam_locomotive']],'1f683': ['\uD83D\uDE83', ['railway_car']],'1f68b': ['\uD83D\uDE8B', ['train']],'1f684': ['\uD83D\uDE84', ['bullettrain_side']],'1f685': ['\uD83D\uDE85', ['bullettrain_front']],'1f686': ['\uD83D\uDE86', ['train2']],'1f687': ['\uD83D\uDE87', ['metro']],'1f688': ['\uD83D\uDE88', ['light_rail']],'1f689': ['\uD83D\uDE89', ['station']],'1f68a': ['\uD83D\uDE8A', ['tram']],'1f68c': ['\uD83D\uDE8C', ['bus']],'1f68d': ['\uD83D\uDE8D', ['oncoming_bus']],'1f68e': ['\uD83D\uDE8E', ['trolleybus']],'1f68f': ['\uD83D\uDE8F', ['busstop']],'1f690': ['\uD83D\uDE90', ['minibus']],'1f691': ['\uD83D\uDE91', ['ambulance']],'1f692': ['\uD83D\uDE92', ['fire_engine']],'1f693': ['\uD83D\uDE93', ['police_car']],'1f694': ['\uD83D\uDE94', ['oncoming_police_car']],'1f695': ['\uD83D\uDE95', ['taxi']],'1f696': ['\uD83D\uDE96', ['oncoming_taxi']],'1f697': ['\uD83D\uDE97', ['car', 'red_car']],'1f698': ['\uD83D\uDE98', ['oncoming_automobile']],'1f699': ['\uD83D\uDE99', ['blue_car']],'1f69a': ['\uD83D\uDE9A', ['truck']],'1f69b': ['\uD83D\uDE9B', ['articulated_lorry']],'1f69c': ['\uD83D\uDE9C', ['tractor']],'1f69d': ['\uD83D\uDE9D', ['monorail']],'1f69e': ['\uD83D\uDE9E', ['mountain_railway']],'1f69f': ['\uD83D\uDE9F', ['suspension_railway']],'1f6a0': ['\uD83D\uDEA0', ['mountain_cableway']],'1f6a1': ['\uD83D\uDEA1', ['aerial_tramway']],'1f6a2': ['\uD83D\uDEA2', ['ship']],'1f6a3': ['\uD83D\uDEA3', ['rowboat']],'1f6a4': ['\uD83D\uDEA4', ['speedboat']],'1f6a5': ['\uD83D\uDEA5', ['traffic_light']],'1f6a6': ['\uD83D\uDEA6', ['vertical_traffic_light']],'1f6a7': ['\uD83D\uDEA7', ['construction']],'1f6a8': ['\uD83D\uDEA8', ['rotating_light']],'1f6a9': ['\uD83D\uDEA9', ['triangular_flag_on_post']],'1f6aa': ['\uD83D\uDEAA', ['door']],'1f6ab': ['\uD83D\uDEAB', ['no_entry_sign']],'1f6ac': ['\uD83D\uDEAC', ['smoking']],'1f6ad': ['\uD83D\uDEAD', ['no_smoking']],'1f6ae': ['\uD83D\uDEAE', ['put_litter_in_its_place']],'1f6af': ['\uD83D\uDEAF', ['do_not_litter']],'1f6b0': ['\uD83D\uDEB0', ['potable_water']],'1f6b1': ['\uD83D\uDEB1', ['non-potable_water']],'1f6b2': ['\uD83D\uDEB2', ['bike']],'1f6b3': ['\uD83D\uDEB3', ['no_bicycles']],'1f6b4': ['\uD83D\uDEB4', ['bicyclist']],'1f6b5': ['\uD83D\uDEB5', ['mountain_bicyclist']],'1f6b6': ['\uD83D\uDEB6', ['walking']],'1f6b7': ['\uD83D\uDEB7', ['no_pedestrians']],'1f6b8': ['\uD83D\uDEB8', ['children_crossing']],'1f6b9': ['\uD83D\uDEB9', ['mens']],'1f6ba': ['\uD83D\uDEBA', ['womens']],'1f6bb': ['\uD83D\uDEBB', ['restroom']],'1f6bc': ['\uD83D\uDEBC', ['baby_symbol']],'1f6bd': ['\uD83D\uDEBD', ['toilet']],'1f6be': ['\uD83D\uDEBE', ['wc']],'1f6bf': ['\uD83D\uDEBF', ['shower']],'1f6c0': ['\uD83D\uDEC0', ['bath']],'1f6c1': ['\uD83D\uDEC1', ['bathtub']],'1f6c2': ['\uD83D\uDEC2', ['passport_control']],'1f6c3': ['\uD83D\uDEC3', ['customs']],'1f6c4': ['\uD83D\uDEC4', ['baggage_claim']],'1f6c5': ['\uD83D\uDEC5', ['left_luggage']],'0023': ['\u0023\u20E3', ['hash']],'0030': ['\u0030\u20E3', ['zero']],'0031': ['\u0031\u20E3', ['one']],'0032': ['\u0032\u20E3', ['two']],'0033': ['\u0033\u20E3', ['three']],'0034': ['\u0034\u20E3', ['four']],'0035': ['\u0035\u20E3', ['five']],'0036': ['\u0036\u20E3', ['six']],'0037': ['\u0037\u20E3', ['seven']],'0038': ['\u0038\u20E3', ['eight']],'0039': ['\u0039\u20E3', ['nine']],'1f1e8-1f1f3': ['\uD83C\uDDE8\uD83C\uDDF3', ['cn']],'1f1e9-1f1ea': ['\uD83C\uDDE9\uD83C\uDDEA', ['de']],'1f1ea-1f1f8': ['\uD83C\uDDEA\uD83C\uDDF8', ['es']],'1f1eb-1f1f7': ['\uD83C\uDDEB\uD83C\uDDF7', ['fr']],'1f1ec-1f1e7': ['\uD83C\uDDEC\uD83C\uDDE7', ['gb', 'uk']],'1f1ee-1f1f9': ['\uD83C\uDDEE\uD83C\uDDF9', ['it']],'1f1ef-1f1f5': ['\uD83C\uDDEF\uD83C\uDDF5', ['jp']],'1f1f0-1f1f7': ['\uD83C\uDDF0\uD83C\uDDF7', ['kr']],'1f1f7-1f1fa': ['\uD83C\uDDF7\uD83C\uDDFA', ['ru']],'1f1fa-1f1f8': ['\uD83C\uDDFA\uD83C\uDDF8', ['us']]}

Config.EmojiCategories = [[ '1f604', '1f603', '1f600', '1f60a', '263a', '1f609', '1f60d', '1f618', '1f61a', '1f617', '1f619', '1f61c', '1f61d', '1f61b', '1f633', '1f601', '1f614', '1f60c', '1f612', '1f61e', '1f623', '1f622', '1f602', '1f62d', '1f62a', '1f625', '1f630', '1f605', '1f613', '1f629', '1f62b', '1f628', '1f631', '1f620', '1f621', '1f624', '1f616', '1f606', '1f60b', '1f637', '1f60e', '1f634', '1f635', '1f632', '1f61f', '1f626', '1f627', '1f608', '1f47f', '1f62e', '1f62c', '1f610', '1f615', '1f62f', '1f636', '1f607', '1f60f', '1f611', '1f472', '1f473', '1f46e', '1f477', '1f482', '1f476', '1f466', '1f467', '1f468', '1f469', '1f474', '1f475', '1f471', '1f47c', '1f478', '1f63a', '1f638', '1f63b', '1f63d', '1f63c', '1f640', '1f63f', '1f639', '1f63e', '1f479', '1f47a', '1f648', '1f649', '1f64a', '1f480', '1f47d', '1f4a9', '1f525', '2728', '1f31f', '1f4ab', '1f4a5', '1f4a2', '1f4a6', '1f4a7', '1f4a4', '1f4a8', '1f442', '1f440', '1f443', '1f445', '1f444', '1f44d', '1f44e', '1f44c', '1f44a', '270a', '270c', '1f44b', '270b', '1f450', '1f446', '1f447', '1f449', '1f448', '1f64c', '1f64f', '261d', '1f44f', '1f4aa', '1f6b6', '1f3c3', '1f483', '1f46b', '1f46a', '1f46c', '1f46d', '1f48f', '1f491', '1f46f', '1f646', '1f645', '1f481', '1f64b', '1f486', '1f487', '1f485', '1f470', '1f64e', '1f64d', '1f647', '1f3a9', '1f451', '1f452', '1f45f', '1f45e', '1f461', '1f460', '1f462', '1f455', '1f454', '1f45a', '1f457', '1f3bd', '1f456', '1f458', '1f459', '1f4bc', '1f45c', '1f45d', '1f45b', '1f453', '1f380', '1f302', '1f484', '1f49b', '1f499', '1f49c', '1f49a', '2764', '1f494', '1f497', '1f493', '1f495', '1f496', '1f49e', '1f498', '1f48c', '1f48b', '1f48d', '1f48e', '1f464', '1f465', '1f4ac', '1f463', '1f4ad' ], [ '1f436', '1f43a', '1f431', '1f42d', '1f439', '1f430', '1f438', '1f42f', '1f428', '1f43b', '1f437', '1f43d', '1f42e', '1f417', '1f435', '1f412', '1f434', '1f411', '1f418', '1f43c', '1f427', '1f426', '1f424', '1f425', '1f423', '1f414', '1f40d', '1f422', '1f41b', '1f41d', '1f41c', '1f41e', '1f40c', '1f419', '1f41a', '1f420', '1f41f', '1f42c', '1f433', '1f40b', '1f404', '1f40f', '1f400', '1f403', '1f405', '1f407', '1f409', '1f40e', '1f410', '1f413', '1f415', '1f416', '1f401', '1f402', '1f432', '1f421', '1f40a', '1f42b', '1f42a', '1f406', '1f408', '1f429', '1f43e', '1f490', '1f338', '1f337', '1f340', '1f339', '1f33b', '1f33a', '1f341', '1f343', '1f342', '1f33f', '1f33e', '1f344', '1f335', '1f334', '1f332', '1f333', '1f330', '1f331', '1f33c', '1f310', '1f31e', '1f31d', '1f31a', '1f311', '1f312', '1f313', '1f314', '1f315', '1f316', '1f317', '1f318', '1f31c', '1f31b', '1f319', '1f30d', '1f30e', '1f30f', '1f30b', '1f30c', '1f320', '2b50', '2600', '26c5', '2601', '26a1', '2614', '2744', '26c4', '1f300', '1f301', '1f308', '1f30a' ], [ '1f38d', '1f49d', '1f38e', '1f392', '1f393', '1f38f', '1f386', '1f387', '1f390', '1f391', '1f383', '1f47b', '1f385', '1f384', '1f381', '1f38b', '1f389', '1f38a', '1f388', '1f38c', '1f52e', '1f3a5', '1f4f7', '1f4f9', '1f4fc', '1f4bf', '1f4c0', '1f4bd', '1f4be', '1f4bb', '1f4f1', '260e', '1f4de', '1f4df', '1f4e0', '1f4e1', '1f4fa', '1f4fb', '1f50a', '1f509', '1f508', '1f507', '1f514', '1f515', '1f4e3', '1f4e2', '23f3', '231b', '23f0', '231a', '1f513', '1f512', '1f50f', '1f510', '1f511', '1f50e', '1f4a1', '1f526', '1f506', '1f505', '1f50c', '1f50b', '1f50d', '1f6c0', '1f6c1', '1f6bf', '1f6bd', '1f527', '1f529', '1f528', '1f6aa', '1f6ac', '1f4a3', '1f52b', '1f52a', '1f48a', '1f489', '1f4b0', '1f4b4', '1f4b5', '1f4b7', '1f4b6', '1f4b3', '1f4b8', '1f4f2', '1f4e7', '1f4e5', '1f4e4', '2709', '1f4e9', '1f4e8', '1f4ef', '1f4eb', '1f4ea', '1f4ec', '1f4ed', '1f4ee', '1f4e6', '1f4dd', '1f4c4', '1f4c3', '1f4d1', '1f4ca', '1f4c8', '1f4c9', '1f4dc', '1f4cb', '1f4c5', '1f4c6', '1f4c7', '1f4c1', '1f4c2', '2702', '1f4cc', '1f4ce', '2712', '270f', '1f4cf', '1f4d0', '1f4d5', '1f4d7', '1f4d8', '1f4d9', '1f4d3', '1f4d4', '1f4d2', '1f4da', '1f4d6', '1f516', '1f4db', '1f52c', '1f52d', '1f4f0', '1f3a8', '1f3ac', '1f3a4', '1f3a7', '1f3bc', '1f3b5', '1f3b6', '1f3b9', '1f3bb', '1f3ba', '1f3b7', '1f3b8', '1f47e', '1f3ae', '1f0cf', '1f3b4', '1f004', '1f3b2', '1f3af', '1f3c8', '1f3c0', '26bd', '26be', '1f3be', '1f3b1', '1f3c9', '1f3b3', '26f3', '1f6b5', '1f6b4', '1f3c1', '1f3c7', '1f3c6', '1f3bf', '1f3c2', '1f3ca', '1f3c4', '1f3a3', '2615', '1f375', '1f376', '1f37c', '1f37a', '1f37b', '1f378', '1f379', '1f377', '1f374', '1f355', '1f354', '1f35f', '1f357', '1f356', '1f35d', '1f35b', '1f364', '1f371', '1f363', '1f365', '1f359', '1f358', '1f35a', '1f35c', '1f372', '1f362', '1f361', '1f373', '1f35e', '1f369', '1f36e', '1f366', '1f368', '1f367', '1f382', '1f370', '1f36a', '1f36b', '1f36c', '1f36d', '1f36f', '1f34e', '1f34f', '1f34a', '1f34b', '1f352', '1f347', '1f349', '1f353', '1f351', '1f348', '1f34c', '1f350', '1f34d', '1f360', '1f346', '1f345', '1f33d' ], [ '1f3e0', '1f3e1', '1f3eb', '1f3e2', '1f3e3', '1f3e5', '1f3e6', '1f3ea', '1f3e9', '1f3e8', '1f492', '26ea', '1f3ec', '1f3e4', '1f307', '1f306', '1f3ef', '1f3f0', '26fa', '1f3ed', '1f5fc', '1f5fe', '1f5fb', '1f304', '1f305', '1f303', '1f5fd', '1f309', '1f3a0', '1f3a1', '26f2', '1f3a2', '1f6a2', '26f5', '1f6a4', '1f6a3', '2693', '1f680', '2708', '1f4ba', '1f681', '1f682', '1f68a', '1f689', '1f69e', '1f686', '1f684', '1f685', '1f688', '1f687', '1f69d', '1f683', '1f68b', '1f68e', '1f68c', '1f68d', '1f699', '1f698', '1f697', '1f695', '1f696', '1f69b', '1f69a', '1f6a8', '1f693', '1f694', '1f692', '1f691', '1f690', '1f6b2', '1f6a1', '1f69f', '1f6a0', '1f69c', '1f488', '1f68f', '1f3ab', '1f6a6', '1f6a5', '26a0', '1f6a7', '1f530', '26fd', '1f3ee', '1f3b0', '2668', '1f5ff', '1f3aa', '1f3ad', '1f4cd', '1f6a9', '1f1ef-1f1f5', '1f1f0-1f1f7', '1f1e9-1f1ea', '1f1e8-1f1f3', '1f1fa-1f1f8', '1f1eb-1f1f7', '1f1ea-1f1f8', '1f1ee-1f1f9', '1f1f7-1f1fa', '1f1ec-1f1e7' ], [ '0031', '0032', '0033', '0034', '0035', '0036', '0037', '0038', '0039', '0030', '1f51f', '1f522', '0023', '1f523', '2b06', '2b07', '2b05', '27a1', '1f520', '1f521', '1f524', '2197', '2196', '2198', '2199', '2194', '2195', '1f504', '25c0', '25b6', '1f53c', '1f53d', '21a9', '21aa', '2139', '23ea', '23e9', '23eb', '23ec', '2935', '2934', '1f197', '1f500', '1f501', '1f502', '1f195', '1f199', '1f192', '1f193', '1f196', '1f4f6', '1f3a6', '1f201', '1f22f', '1f233', '1f235', '1f234', '1f232', '1f250', '1f239', '1f23a', '1f236', '1f21a', '1f6bb', '1f6b9', '1f6ba', '1f6bc', '1f6be', '1f6b0', '1f6ae', '1f17f', '267f', '1f6ad', '1f237', '1f238', '1f202', '24c2', '1f6c2', '1f6c4', '1f6c5', '1f6c3', '1f251', '3299', '3297', '1f191', '1f198', '1f194', '1f6ab', '1f51e', '1f4f5', '1f6af', '1f6b1', '1f6b3', '1f6b7', '1f6b8', '26d4', '2733', '2747', '274e', '2705', '2734', '1f49f', '1f19a', '1f4f3', '1f4f4', '1f170', '1f171', '1f18e', '1f17e', '1f4a0', '27bf', '267b', '2648', '2649', '264a', '264b', '264c', '264d', '264e', '264f', '2650', '2651', '2652', '2653', '26ce', '1f52f', '1f3e7', '1f4b9', '1f4b2', '1f4b1', '00a9', '00ae', '2122', '274c', '203c', '2049', '2757', '2753', '2755', '2754', '2b55', '1f51d', '1f51a', '1f519', '1f51b', '1f51c', '1f503', '1f55b', '1f567', '1f550', '1f55c', '1f551', '1f55d', '1f552', '1f55e', '1f553', '1f55f', '1f554', '1f560', '1f555', '1f556', '1f557', '1f558', '1f559', '1f55a', '1f561', '1f562', '1f563', '1f564', '1f565', '1f566', '2716', '2795', '2796', '2797', '2660', '2665', '2663', '2666', '1f4ae', '1f4af', '2714', '2611', '1f518', '1f517', '27b0', '3030', '303d', '1f531', '25fc', '25fb', '25fe', '25fd', '25aa', '25ab', '1f53a', '1f532', '1f533', '26ab', '26aa', '1f534', '1f535', '1f53b', '2b1c', '2b1b', '1f536', '1f537', '1f538', '1f539' ]]

Config.EmojiCategorySpritesheetDimens = [[7, 27], [4, 29], [7, 33], [3, 34], [7, 34]]

// From https://raw.githubusercontent.com/FGRibreau/latenize/master/latinize_map.js
Config.LatinizeMap = {'Á': 'A','Ă': 'A','Ắ': 'A','Ặ': 'A','Ằ': 'A','Ẳ': 'A','Ẵ': 'A','Ǎ': 'A','Â': 'A','Ấ': 'A','Ậ': 'A','Ầ': 'A','Ẩ': 'A','Ẫ': 'A','Ä': 'A','Ǟ': 'A','Ȧ': 'A','Ǡ': 'A','Ạ': 'A','Ȁ': 'A','À': 'A','Ả': 'A','Ȃ': 'A','Ā': 'A','Ą': 'A','Å': 'A','Ǻ': 'A','Ḁ': 'A','Ⱥ': 'A','Ã': 'A','Ꜳ': 'AA','Æ': 'AE','Ǽ': 'AE','Ǣ': 'AE','Ꜵ': 'AO','Ꜷ': 'AU','Ꜹ': 'AV','Ꜻ': 'AV','Ꜽ': 'AY','Ḃ': 'B','Ḅ': 'B','Ɓ': 'B','Ḇ': 'B','Ƀ': 'B','Ƃ': 'B','Ć': 'C','Č': 'C','Ç': 'C','Ḉ': 'C','Ĉ': 'C','Ċ': 'C','Ƈ': 'C','Ȼ': 'C','Ď': 'D','Ḑ': 'D','Ḓ': 'D','Ḋ': 'D','Ḍ': 'D','Ɗ': 'D','Ḏ': 'D','ǲ': 'D','ǅ': 'D','Đ': 'D','Ƌ': 'D','Ǳ': 'DZ','Ǆ': 'DZ','É': 'E','Ĕ': 'E','Ě': 'E','Ȩ': 'E','Ḝ': 'E','Ê': 'E','Ế': 'E','Ệ': 'E','Ề': 'E','Ể': 'E','Ễ': 'E','Ḙ': 'E','Ë': 'E','Ė': 'E','Ẹ': 'E','Ȅ': 'E','È': 'E','Ẻ': 'E','Ȇ': 'E','Ē': 'E','Ḗ': 'E','Ḕ': 'E','Ę': 'E','Ɇ': 'E','Ẽ': 'E','Ḛ': 'E','Ꝫ': 'ET','Ḟ': 'F','Ƒ': 'F','Ǵ': 'G','Ğ': 'G','Ǧ': 'G','Ģ': 'G','Ĝ': 'G','Ġ': 'G','Ɠ': 'G','Ḡ': 'G','Ǥ': 'G','Ḫ': 'H','Ȟ': 'H','Ḩ': 'H','Ĥ': 'H','Ⱨ': 'H','Ḧ': 'H','Ḣ': 'H','Ḥ': 'H','Ħ': 'H','Í': 'I','Ĭ': 'I','Ǐ': 'I','Î': 'I','Ï': 'I','Ḯ': 'I','İ': 'I','Ị': 'I','Ȉ': 'I','Ì': 'I','Ỉ': 'I','Ȋ': 'I','Ī': 'I','Į': 'I','Ɨ': 'I','Ĩ': 'I','Ḭ': 'I','Ꝺ': 'D','Ꝼ': 'F','Ᵹ': 'G','Ꞃ': 'R','Ꞅ': 'S','Ꞇ': 'T','Ꝭ': 'IS','Ĵ': 'J','Ɉ': 'J','Ḱ': 'K','Ǩ': 'K','Ķ': 'K','Ⱪ': 'K','Ꝃ': 'K','Ḳ': 'K','Ƙ': 'K','Ḵ': 'K','Ꝁ': 'K','Ꝅ': 'K','Ĺ': 'L','Ƚ': 'L','Ľ': 'L','Ļ': 'L','Ḽ': 'L','Ḷ': 'L','Ḹ': 'L','Ⱡ': 'L','Ꝉ': 'L','Ḻ': 'L','Ŀ': 'L','Ɫ': 'L','ǈ': 'L','Ł': 'L','Ǉ': 'LJ','Ḿ': 'M','Ṁ': 'M','Ṃ': 'M','Ɱ': 'M','Ń': 'N','Ň': 'N','Ņ': 'N','Ṋ': 'N','Ṅ': 'N','Ṇ': 'N','Ǹ': 'N','Ɲ': 'N','Ṉ': 'N','Ƞ': 'N','ǋ': 'N','Ñ': 'N','Ǌ': 'NJ','Ó': 'O','Ŏ': 'O','Ǒ': 'O','Ô': 'O','Ố': 'O','Ộ': 'O','Ồ': 'O','Ổ': 'O','Ỗ': 'O','Ö': 'O','Ȫ': 'O','Ȯ': 'O','Ȱ': 'O','Ọ': 'O','Ő': 'O','Ȍ': 'O','Ò': 'O','Ỏ': 'O','Ơ': 'O','Ớ': 'O','Ợ': 'O','Ờ': 'O','Ở': 'O','Ỡ': 'O','Ȏ': 'O','Ꝋ': 'O','Ꝍ': 'O','Ō': 'O','Ṓ': 'O','Ṑ': 'O','Ɵ': 'O','Ǫ': 'O','Ǭ': 'O','Ø': 'O','Ǿ': 'O','Õ': 'O','Ṍ': 'O','Ṏ': 'O','Ȭ': 'O','Ƣ': 'OI','Ꝏ': 'OO','Ɛ': 'E','Ɔ': 'O','Ȣ': 'OU','Ṕ': 'P','Ṗ': 'P','Ꝓ': 'P','Ƥ': 'P','Ꝕ': 'P','Ᵽ': 'P','Ꝑ': 'P','Ꝙ': 'Q','Ꝗ': 'Q','Ŕ': 'R','Ř': 'R','Ŗ': 'R','Ṙ': 'R','Ṛ': 'R','Ṝ': 'R','Ȑ': 'R','Ȓ': 'R','Ṟ': 'R','Ɍ': 'R','Ɽ': 'R','Ꜿ': 'C','Ǝ': 'E','Ś': 'S','Ṥ': 'S','Š': 'S','Ṧ': 'S','Ş': 'S','Ŝ': 'S','Ș': 'S','Ṡ': 'S','Ṣ': 'S','Ṩ': 'S','ẞ': 'SS','Ť': 'T','Ţ': 'T','Ṱ': 'T','Ț': 'T','Ⱦ': 'T','Ṫ': 'T','Ṭ': 'T','Ƭ': 'T','Ṯ': 'T','Ʈ': 'T','Ŧ': 'T','Ɐ': 'A','Ꞁ': 'L','Ɯ': 'M','Ʌ': 'V','Ꜩ': 'TZ','Ú': 'U','Ŭ': 'U','Ǔ': 'U','Û': 'U','Ṷ': 'U','Ü': 'U','Ǘ': 'U','Ǚ': 'U','Ǜ': 'U','Ǖ': 'U','Ṳ': 'U','Ụ': 'U','Ű': 'U','Ȕ': 'U','Ù': 'U','Ủ': 'U','Ư': 'U','Ứ': 'U','Ự': 'U','Ừ': 'U','Ử': 'U','Ữ': 'U','Ȗ': 'U','Ū': 'U','Ṻ': 'U','Ų': 'U','Ů': 'U','Ũ': 'U','Ṹ': 'U','Ṵ': 'U','Ꝟ': 'V','Ṿ': 'V','Ʋ': 'V','Ṽ': 'V','Ꝡ': 'VY','Ẃ': 'W','Ŵ': 'W','Ẅ': 'W','Ẇ': 'W','Ẉ': 'W','Ẁ': 'W','Ⱳ': 'W','Ẍ': 'X','Ẋ': 'X','Ý': 'Y','Ŷ': 'Y','Ÿ': 'Y','Ẏ': 'Y','Ỵ': 'Y','Ỳ': 'Y','Ƴ': 'Y','Ỷ': 'Y','Ỿ': 'Y','Ȳ': 'Y','Ɏ': 'Y','Ỹ': 'Y','Ź': 'Z','Ž': 'Z','Ẑ': 'Z','Ⱬ': 'Z','Ż': 'Z','Ẓ': 'Z','Ȥ': 'Z','Ẕ': 'Z','Ƶ': 'Z','Ĳ': 'IJ','Œ': 'OE','ᴀ': 'A','ᴁ': 'AE','ʙ': 'B','ᴃ': 'B','ᴄ': 'C','ᴅ': 'D','ᴇ': 'E','ꜰ': 'F','ɢ': 'G','ʛ': 'G','ʜ': 'H','ɪ': 'I','ʁ': 'R','ᴊ': 'J','ᴋ': 'K','ʟ': 'L','ᴌ': 'L','ᴍ': 'M','ɴ': 'N','ᴏ': 'O','ɶ': 'OE','ᴐ': 'O','ᴕ': 'OU','ᴘ': 'P','ʀ': 'R','ᴎ': 'N','ᴙ': 'R','ꜱ': 'S','ᴛ': 'T','ⱻ': 'E','ᴚ': 'R','ᴜ': 'U','ᴠ': 'V','ᴡ': 'W','ʏ': 'Y','ᴢ': 'Z','á': 'a','ă': 'a','ắ': 'a','ặ': 'a','ằ': 'a','ẳ': 'a','ẵ': 'a','ǎ': 'a','â': 'a','ấ': 'a','ậ': 'a','ầ': 'a','ẩ': 'a','ẫ': 'a','ä': 'a','ǟ': 'a','ȧ': 'a','ǡ': 'a','ạ': 'a','ȁ': 'a','à': 'a','ả': 'a','ȃ': 'a','ā': 'a','ą': 'a','ᶏ': 'a','ẚ': 'a','å': 'a','ǻ': 'a','ḁ': 'a','ⱥ': 'a','ã': 'a','ꜳ': 'aa','æ': 'ae','ǽ': 'ae','ǣ': 'ae','ꜵ': 'ao','ꜷ': 'au','ꜹ': 'av','ꜻ': 'av','ꜽ': 'ay','ḃ': 'b','ḅ': 'b','ɓ': 'b','ḇ': 'b','ᵬ': 'b','ᶀ': 'b','ƀ': 'b','ƃ': 'b','ɵ': 'o','ć': 'c','č': 'c','ç': 'c','ḉ': 'c','ĉ': 'c','ɕ': 'c','ċ': 'c','ƈ': 'c','ȼ': 'c','ď': 'd','ḑ': 'd','ḓ': 'd','ȡ': 'd','ḋ': 'd','ḍ': 'd','ɗ': 'd','ᶑ': 'd','ḏ': 'd','ᵭ': 'd','ᶁ': 'd','đ': 'd','ɖ': 'd','ƌ': 'd','ı': 'i','ȷ': 'j','ɟ': 'j','ʄ': 'j','ǳ': 'dz','ǆ': 'dz','é': 'e','ĕ': 'e','ě': 'e','ȩ': 'e','ḝ': 'e','ê': 'e','ế': 'e','ệ': 'e','ề': 'e','ể': 'e','ễ': 'e','ḙ': 'e','ë': 'e','ė': 'e','ẹ': 'e','ȅ': 'e','è': 'e','ẻ': 'e','ȇ': 'e','ē': 'e','ḗ': 'e','ḕ': 'e','ⱸ': 'e','ę': 'e','ᶒ': 'e','ɇ': 'e','ẽ': 'e','ḛ': 'e','ꝫ': 'et','ḟ': 'f','ƒ': 'f','ᵮ': 'f','ᶂ': 'f','ǵ': 'g','ğ': 'g','ǧ': 'g','ģ': 'g','ĝ': 'g','ġ': 'g','ɠ': 'g','ḡ': 'g','ᶃ': 'g','ǥ': 'g','ḫ': 'h','ȟ': 'h','ḩ': 'h','ĥ': 'h','ⱨ': 'h','ḧ': 'h','ḣ': 'h','ḥ': 'h','ɦ': 'h','ẖ': 'h','ħ': 'h','ƕ': 'hv','í': 'i','ĭ': 'i','ǐ': 'i','î': 'i','ï': 'i','ḯ': 'i','ị': 'i','ȉ': 'i','ì': 'i','ỉ': 'i','ȋ': 'i','ī': 'i','į': 'i','ᶖ': 'i','ɨ': 'i','ĩ': 'i','ḭ': 'i','ꝺ': 'd','ꝼ': 'f','ᵹ': 'g','ꞃ': 'r','ꞅ': 's','ꞇ': 't','ꝭ': 'is','ǰ': 'j','ĵ': 'j','ʝ': 'j','ɉ': 'j','ḱ': 'k','ǩ': 'k','ķ': 'k','ⱪ': 'k','ꝃ': 'k','ḳ': 'k','ƙ': 'k','ḵ': 'k','ᶄ': 'k','ꝁ': 'k','ꝅ': 'k','ĺ': 'l','ƚ': 'l','ɬ': 'l','ľ': 'l','ļ': 'l','ḽ': 'l','ȴ': 'l','ḷ': 'l','ḹ': 'l','ⱡ': 'l','ꝉ': 'l','ḻ': 'l','ŀ': 'l','ɫ': 'l','ᶅ': 'l','ɭ': 'l','ł': 'l','ǉ': 'lj','ſ': 's','ẜ': 's','ẛ': 's','ẝ': 's','ḿ': 'm','ṁ': 'm','ṃ': 'm','ɱ': 'm','ᵯ': 'm','ᶆ': 'm','ń': 'n','ň': 'n','ņ': 'n','ṋ': 'n','ȵ': 'n','ṅ': 'n','ṇ': 'n','ǹ': 'n','ɲ': 'n','ṉ': 'n','ƞ': 'n','ᵰ': 'n','ᶇ': 'n','ɳ': 'n','ñ': 'n','ǌ': 'nj','ó': 'o','ŏ': 'o','ǒ': 'o','ô': 'o','ố': 'o','ộ': 'o','ồ': 'o','ổ': 'o','ỗ': 'o','ö': 'o','ȫ': 'o','ȯ': 'o','ȱ': 'o','ọ': 'o','ő': 'o','ȍ': 'o','ò': 'o','ỏ': 'o','ơ': 'o','ớ': 'o','ợ': 'o','ờ': 'o','ở': 'o','ỡ': 'o','ȏ': 'o','ꝋ': 'o','ꝍ': 'o','ⱺ': 'o','ō': 'o','ṓ': 'o','ṑ': 'o','ǫ': 'o','ǭ': 'o','ø': 'o','ǿ': 'o','õ': 'o','ṍ': 'o','ṏ': 'o','ȭ': 'o','ƣ': 'oi','ꝏ': 'oo','ɛ': 'e','ᶓ': 'e','ɔ': 'o','ᶗ': 'o','ȣ': 'ou','ṕ': 'p','ṗ': 'p','ꝓ': 'p','ƥ': 'p','ᵱ': 'p','ᶈ': 'p','ꝕ': 'p','ᵽ': 'p','ꝑ': 'p','ꝙ': 'q','ʠ': 'q','ɋ': 'q','ꝗ': 'q','ŕ': 'r','ř': 'r','ŗ': 'r','ṙ': 'r','ṛ': 'r','ṝ': 'r','ȑ': 'r','ɾ': 'r','ᵳ': 'r','ȓ': 'r','ṟ': 'r','ɼ': 'r','ᵲ': 'r','ᶉ': 'r','ɍ': 'r','ɽ': 'r','ↄ': 'c','ꜿ': 'c','ɘ': 'e','ɿ': 'r','ś': 's','ṥ': 's','š': 's','ṧ': 's','ş': 's','ŝ': 's','ș': 's','ṡ': 's','ṣ': 's','ṩ': 's','ʂ': 's','ᵴ': 's','ᶊ': 's','ȿ': 's','ɡ': 'g','ß': 'ss','ᴑ': 'o','ᴓ': 'o','ᴝ': 'u','ť': 't','ţ': 't','ṱ': 't','ț': 't','ȶ': 't','ẗ': 't','ⱦ': 't','ṫ': 't','ṭ': 't','ƭ': 't','ṯ': 't','ᵵ': 't','ƫ': 't','ʈ': 't','ŧ': 't','ᵺ': 'th','ɐ': 'a','ᴂ': 'ae','ǝ': 'e','ᵷ': 'g','ɥ': 'h','ʮ': 'h','ʯ': 'h','ᴉ': 'i','ʞ': 'k','ꞁ': 'l','ɯ': 'm','ɰ': 'm','ᴔ': 'oe','ɹ': 'r','ɻ': 'r','ɺ': 'r','ⱹ': 'r','ʇ': 't','ʌ': 'v','ʍ': 'w','ʎ': 'y','ꜩ': 'tz','ú': 'u','ŭ': 'u','ǔ': 'u','û': 'u','ṷ': 'u','ü': 'u','ǘ': 'u','ǚ': 'u','ǜ': 'u','ǖ': 'u','ṳ': 'u','ụ': 'u','ű': 'u','ȕ': 'u','ù': 'u','ủ': 'u','ư': 'u','ứ': 'u','ự': 'u','ừ': 'u','ử': 'u','ữ': 'u','ȗ': 'u','ū': 'u','ṻ': 'u','ų': 'u','ᶙ': 'u','ů': 'u','ũ': 'u','ṹ': 'u','ṵ': 'u','ᵫ': 'ue','ꝸ': 'um','ⱴ': 'v','ꝟ': 'v','ṿ': 'v','ʋ': 'v','ᶌ': 'v','ⱱ': 'v','ṽ': 'v','ꝡ': 'vy','ẃ': 'w','ŵ': 'w','ẅ': 'w','ẇ': 'w','ẉ': 'w','ẁ': 'w','ⱳ': 'w','ẘ': 'w','ẍ': 'x','ẋ': 'x','ᶍ': 'x','ý': 'y','ŷ': 'y','ÿ': 'y','ẏ': 'y','ỵ': 'y','ỳ': 'y','ƴ': 'y','ỷ': 'y','ỿ': 'y','ȳ': 'y','ẙ': 'y','ɏ': 'y','ỹ': 'y','ź': 'z','ž': 'z','ẑ': 'z','ʑ': 'z','ⱬ': 'z','ż': 'z','ẓ': 'z','ȥ': 'z','ẕ': 'z','ᵶ': 'z','ᶎ': 'z','ʐ': 'z','ƶ': 'z','ɀ': 'z','ﬀ': 'ff','ﬃ': 'ffi','ﬄ': 'ffl','ﬁ': 'fi','ﬂ': 'fl','ĳ': 'ij','œ': 'oe','ﬆ': 'st','ₐ': 'a','ₑ': 'e','ᵢ': 'i','ⱼ': 'j','ₒ': 'o','ᵣ': 'r','ᵤ': 'u','ᵥ': 'v','ₓ': 'x','Ё': 'YO', 'Й': 'I', 'Ц': 'TS', 'У': 'U', 'К': 'K', 'Е': 'E', 'Н': 'N', 'Г': 'G', 'Ш': 'SH', 'Щ': 'SCH', 'З': 'Z', 'Х': 'H', 'Ъ': '', 'ё': 'yo', 'й': 'i', 'ц': 'ts', 'у': 'u', 'к': 'k', 'е': 'e', 'н': 'n', 'г': 'g', 'ш': 'sh', 'щ': 'sch', 'з': 'z', 'х': 'h', 'ъ': '', 'Ф': 'F', 'Ы': 'I', 'В': 'V', 'А': 'A', 'П': 'P', 'Р': 'R', 'О': 'O', 'Л': 'L', 'Д': 'D', 'Ж': 'ZH', 'Э': 'E', 'ф': 'f', 'ы': 'i', 'в': 'v', 'а': 'a', 'п': 'p', 'р': 'r', 'о': 'o', 'л': 'l', 'д': 'd', 'ж': 'zh', 'э': 'e', 'Я': 'Ya', 'Ч': 'CH', 'С': 'S', 'М': 'M', 'И': 'I', 'Т': 'T', 'Ь': '', 'Б': 'B', 'Ю': 'YU', 'я': 'ya', 'ч': 'ch', 'с': 's', 'м': 'm', 'и': 'i', 'т': 't', 'ь': '', 'б': 'b', 'ю': 'yu'}

Config.CountryCodes = [['AB', 'country_select_modal_country_ab', '+7 840', '+7 940', '+995 44'], ['AF', 'country_select_modal_country_af', '+93'], ['AX', 'country_select_modal_country_ax', '+358 18'], ['AL', 'country_select_modal_country_al', '+355'], ['DZ', 'country_select_modal_country_dz', '+213'], ['AS', 'country_select_modal_country_as', '+1 684'], ['AD', 'country_select_modal_country_ad', '+376'], ['AO', 'country_select_modal_country_ao', '+244'], ['AI', 'country_select_modal_country_ai', '+1 264'], ['AG', 'country_select_modal_country_ag', '+1 268'], ['AR', 'country_select_modal_country_ar', '+54'], ['AM', 'country_select_modal_country_am', '+374'], ['AW', 'country_select_modal_country_aw', '+297'], ['SH', 'country_select_modal_country_sh_ac', '+247'], ['AU', 'country_select_modal_country_au', '+61'], ['AU', 'country_select_modal_country_au_et', '+672'], ['AT', 'country_select_modal_country_at', '+43'], ['AZ', 'country_select_modal_country_az', '+994'], ['BS', 'country_select_modal_country_bs', '+1 242'], ['BH', 'country_select_modal_country_bh', '+973'], ['BD', 'country_select_modal_country_bd', '+880'], ['BB', 'country_select_modal_country_bb', '+1 246'], ['AG', 'country_select_modal_country_ag_bar', '+1 268'], ['BY', 'country_select_modal_country_by', '+375'], ['BE', 'country_select_modal_country_be', '+32'], ['BZ', 'country_select_modal_country_bz', '+501'], ['BJ', 'country_select_modal_country_bj', '+229'], ['BM', 'country_select_modal_country_bm', '+1 441'], ['BT', 'country_select_modal_country_bt', '+975'], ['BO', 'country_select_modal_country_bo', '+591'], ['BQ', 'country_select_modal_country_bq', '+599 7'], ['BA', 'country_select_modal_country_ba', '+387'], ['BW', 'country_select_modal_country_bw', '+267'], ['BR', 'country_select_modal_country_br', '+55'], ['IO', 'country_select_modal_country_io', '+246'], ['VG', 'country_select_modal_country_vg', '+1 284'], ['BN', 'country_select_modal_country_bn', '+673'], ['BG', 'country_select_modal_country_bg', '+359'], ['BF', 'country_select_modal_country_bf', '+226'], ['MY', 'country_select_modal_country_mm', '+95'], ['BI', 'country_select_modal_country_bi', '+257'], ['KH', 'country_select_modal_country_kh', '+855'], ['CM', 'country_select_modal_country_cm', '+237'], ['CA', 'country_select_modal_country_ca', '+1'], ['CV', 'country_select_modal_country_cv', '+238'], ['KY', 'country_select_modal_country_ky', '+1 345'], ['CF', 'country_select_modal_country_cf', '+236'], ['TD', 'country_select_modal_country_td', '+235'], ['CL', 'country_select_modal_country_cl', '+56'], ['CN', 'country_select_modal_country_cn', '+86'], ['CX', 'country_select_modal_country_cx', '+61'], ['CC', 'country_select_modal_country_cc', '+61'], ['CO', 'country_select_modal_country_co', '+57'], ['KM', 'country_select_modal_country_km', '+269'], ['CG', 'country_select_modal_country_cg', '+242'], ['CD', 'country_select_modal_country_cd', '+243'], ['CK', 'country_select_modal_country_ck', '+682'], ['CR', 'country_select_modal_country_cr', '+506'], ['CI', 'country_select_modal_country_ci', '+225'], ['HR', 'country_select_modal_country_hr', '+385'], ['CU', 'country_select_modal_country_cu', '+53'], ['CW', 'country_select_modal_country_cw', '+599 9'], ['CY', 'country_select_modal_country_cy', '+357'], ['CZ', 'country_select_modal_country_cz', '+420'], ['DK', 'country_select_modal_country_dk', '+45'], ['DG', 'country_select_modal_country_dg', '+246'], ['DJ', 'country_select_modal_country_dj', '+253'], ['DM', 'country_select_modal_country_dm', '+1 767'], ['DO', 'country_select_modal_country_do', '+1 809', '+1 829', '+1 849'], ['TL', 'country_select_modal_country_tl', '+670'], ['EC', 'country_select_modal_country_ec', '+593'], ['EG', 'country_select_modal_country_eg', '+20'], ['SV', 'country_select_modal_country_sv', '+503'], ['GQ', 'country_select_modal_country_gq', '+240'], ['ER', 'country_select_modal_country_er', '+291'], ['EE', 'country_select_modal_country_ee', '+372'], ['ET', 'country_select_modal_country_et', '+251'], ['FK', 'country_select_modal_country_fk', '+500'], ['FO', 'country_select_modal_country_fo', '+298'], ['FJ', 'country_select_modal_country_fj', '+679'], ['FI', 'country_select_modal_country_fi', '+358'], ['FR', 'country_select_modal_country_fr', '+33'], ['GF', 'country_select_modal_country_gf', '+594'], ['PF', 'country_select_modal_country_pf', '+689'], ['GA', 'country_select_modal_country_ga', '+241'], ['GM', 'country_select_modal_country_gm', '+220'], ['GE', 'country_select_modal_country_ge', '+995'], ['DE', 'country_select_modal_country_de', '+49'], ['GH', 'country_select_modal_country_gh', '+233'], ['GI', 'country_select_modal_country_gi', '+350'], ['GR', 'country_select_modal_country_gr', '+30'], ['GL', 'country_select_modal_country_gl', '+299'], ['GD', 'country_select_modal_country_gd', '+1 473'], ['GP', 'country_select_modal_country_gp', '+590'], ['GU', 'country_select_modal_country_gu', '+1 671'], ['GT', 'country_select_modal_country_gt', '+502'], ['GG', 'country_select_modal_country_gg', '+44'], ['GN', 'country_select_modal_country_gn', '+224'], ['GW', 'country_select_modal_country_gw', '+245'], ['GY', 'country_select_modal_country_gy', '+592'], ['HT', 'country_select_modal_country_ht', '+509'], ['HN', 'country_select_modal_country_hn', '+504'], ['HK', 'country_select_modal_country_hk', '+852'], ['HU', 'country_select_modal_country_hu', '+36'], ['IS', 'country_select_modal_country_is', '+354'], ['IN', 'country_select_modal_country_in', '+91'], ['ID', 'country_select_modal_country_id', '+62'], ['IR', 'country_select_modal_country_ir', '+98'], ['IQ', 'country_select_modal_country_iq', '+964'], ['IE', 'country_select_modal_country_ie', '+353'], ['IL', 'country_select_modal_country_il', '+972'], ['IT', 'country_select_modal_country_it', '+39'], ['JM', 'country_select_modal_country_jm', '+1 876'], ['SJ', 'country_select_modal_country_sj', '+47 79'], ['JP', 'country_select_modal_country_jp', '+81'], ['JE', 'country_select_modal_country_je', '+44'], ['JO', 'country_select_modal_country_jo', '+962'], ['KZ', 'country_select_modal_country_kz', '+7 7'], ['KE', 'country_select_modal_country_ke', '+254'], ['KI', 'country_select_modal_country_ki', '+686'], ['KP', 'country_select_modal_country_kp', '+850'], ['KR', 'country_select_modal_country_kr', '+82'], ['KW', 'country_select_modal_country_kw', '+965'], ['KG', 'country_select_modal_country_kg', '+996'], ['LA', 'country_select_modal_country_la', '+856'], ['LV', 'country_select_modal_country_lv', '+371'], ['LB', 'country_select_modal_country_lb', '+961'], ['LS', 'country_select_modal_country_ls', '+266'], ['LR', 'country_select_modal_country_lr', '+231'], ['LY', 'country_select_modal_country_ly', '+218'], ['LI', 'country_select_modal_country_li', '+423'], ['LT', 'country_select_modal_country_lt', '+370'], ['LU', 'country_select_modal_country_lu', '+352'], ['MO', 'country_select_modal_country_mo', '+853'], ['MK', 'country_select_modal_country_mk', '+389'], ['MG', 'country_select_modal_country_mg', '+261'], ['MW', 'country_select_modal_country_mw', '+265'], ['MY', 'country_select_modal_country_my', '+60'], ['MV', 'country_select_modal_country_mv', '+960'], ['ML', 'country_select_modal_country_ml', '+223'], ['MT', 'country_select_modal_country_mt', '+356'], ['MH', 'country_select_modal_country_mh', '+692'], ['MQ', 'country_select_modal_country_mq', '+596'], ['MR', 'country_select_modal_country_mr', '+222'], ['MU', 'country_select_modal_country_mu', '+230'], ['YT', 'country_select_modal_country_yt', '+262'], ['MX', 'country_select_modal_country_mx', '+52'], ['FM', 'country_select_modal_country_fm', '+691'], ['MD', 'country_select_modal_country_md', '+373'], ['MC', 'country_select_modal_country_mc', '+377'], ['MN', 'country_select_modal_country_mn', '+976'], ['ME', 'country_select_modal_country_me', '+382'], ['MS', 'country_select_modal_country_ms', '+1 664'], ['MA', 'country_select_modal_country_ma', '+212'], ['MZ', 'country_select_modal_country_mz', '+258'], ['NA', 'country_select_modal_country_na', '+264'], ['NR', 'country_select_modal_country_nr', '+674'], ['NP', 'country_select_modal_country_np', '+977'], ['NL', 'country_select_modal_country_nl', '+31'], ['NC', 'country_select_modal_country_nc', '+687'], ['NZ', 'country_select_modal_country_nz', '+64'], ['NI', 'country_select_modal_country_ni', '+505'], ['NE', 'country_select_modal_country_ne', '+227'], ['NG', 'country_select_modal_country_ng', '+234'], ['NU', 'country_select_modal_country_nu', '+683'], ['NF', 'country_select_modal_country_nf', '+672'], ['MP', 'country_select_modal_country_mp', '+1 670'], ['NO', 'country_select_modal_country_no', '+47'], ['OM', 'country_select_modal_country_om', '+968'], ['PK', 'country_select_modal_country_pk', '+92'], ['PW', 'country_select_modal_country_pw', '+680'], ['PS', 'country_select_modal_country_ps', '+970'], ['PA', 'country_select_modal_country_pa', '+507'], ['PG', 'country_select_modal_country_pg', '+675'], ['PY', 'country_select_modal_country_py', '+595'], ['PE', 'country_select_modal_country_pe', '+51'], ['PH', 'country_select_modal_country_ph', '+63'], ['PN', 'country_select_modal_country_pn', '+64'], ['PL', 'country_select_modal_country_pl', '+48'], ['PT', 'country_select_modal_country_pt', '+351'], ['PR', 'country_select_modal_country_pr', '+1 787', '+1 939'], ['QA', 'country_select_modal_country_qa', '+974'], ['RE', 'country_select_modal_country_re', '+262'], ['RO', 'country_select_modal_country_ro', '+40'], ['RU', 'country_select_modal_country_ru', '+7'], ['RW', 'country_select_modal_country_rw', '+250'], ['BL', 'country_select_modal_country_bl', '+590'], ['SH', 'country_select_modal_country_sh', '+290'], ['KN', 'country_select_modal_country_kn', '+1 869'], ['LC', 'country_select_modal_country_lc', '+1 758'], ['MF', 'country_select_modal_country_mf', '+590'], ['PM', 'country_select_modal_country_pm', '+508'], ['VC', 'country_select_modal_country_vc', '+1 784'], ['WS', 'country_select_modal_country_ws', '+685'], ['SM', 'country_select_modal_country_sm', '+378'], ['ST', 'country_select_modal_country_st', '+239'], ['SA', 'country_select_modal_country_sa', '+966'], ['SN', 'country_select_modal_country_sn', '+221'], ['RS', 'country_select_modal_country_rs', '+381'], ['SC', 'country_select_modal_country_sc', '+248'], ['SL', 'country_select_modal_country_sl', '+232'], ['SG', 'country_select_modal_country_sg', '+65'], ['BQ', 'country_select_modal_country_nl_bq3', '+599 3'], ['SX', 'country_select_modal_country_sx', '+1 721'], ['SK', 'country_select_modal_country_sk', '+421'], ['SI', 'country_select_modal_country_si', '+386'], ['SB', 'country_select_modal_country_sb', '+677'], ['SO', 'country_select_modal_country_so', '+252'], ['ZA', 'country_select_modal_country_za', '+27'], ['GS', 'country_select_modal_country_gs', '+500'], [false, 'country_select_modal_country_ge_so', '+995 34'], ['SS', 'country_select_modal_country_ss', '+211'], ['ES', 'country_select_modal_country_es', '+34'], ['LK', 'country_select_modal_country_lk', '+94'], ['SD', 'country_select_modal_country_sd', '+249'], ['SR', 'country_select_modal_country_sr', '+597'], ['SJ', 'country_select_modal_country_sj_no', '+47 79'], ['SZ', 'country_select_modal_country_sz', '+268'], ['SE', 'country_select_modal_country_se', '+46'], ['CH', 'country_select_modal_country_ch', '+41'], ['SY', 'country_select_modal_country_sy', '+963'], ['TW', 'country_select_modal_country_tw', '+886'], ['TJ', 'country_select_modal_country_tj', '+992'], ['TZ', 'country_select_modal_country_tz', '+255'], ['TH', 'country_select_modal_country_th', '+66'], ['TG', 'country_select_modal_country_tg', '+228'], ['TK', 'country_select_modal_country_tk', '+690'], ['TO', 'country_select_modal_country_to', '+676'], ['TT', 'country_select_modal_country_tt', '+1 868'], ['TN', 'country_select_modal_country_tn', '+216'], ['TR', 'country_select_modal_country_tr', '+90'], ['TM', 'country_select_modal_country_tm', '+993'], ['TC', 'country_select_modal_country_tc', '+1 649'], ['TV', 'country_select_modal_country_tv', '+688'], ['UG', 'country_select_modal_country_ug', '+256'], ['UA', 'country_select_modal_country_ua', '+380'], ['AE', 'country_select_modal_country_ae', '+971'], ['UK', 'country_select_modal_country_uk', '+44'], ['US', 'country_select_modal_country_us', '+1'], ['UY', 'country_select_modal_country_uy', '+598'], ['VI', 'country_select_modal_country_vi', '+1 340'], ['UZ', 'country_select_modal_country_uz', '+998'], ['VU', 'country_select_modal_country_vu', '+678'], ['VE', 'country_select_modal_country_ve', '+58'], ['VA', 'country_select_modal_country_va', '+39 06 698', '+379'], ['VN', 'country_select_modal_country_vn', '+84'], ['WF', 'country_select_modal_country_wf', '+681'], ['YE', 'country_select_modal_country_ye', '+967'], ['ZM', 'country_select_modal_country_zm', '+260'], [false, 'country_select_modal_country_tz_uk', '+255'], ['ZW', 'country_select_modal_country_zw', '+263']]

Config.LangCountries = {'es': 'ES', 'ru': 'RU', 'en': 'US', 'de': 'DE', 'it': 'IT', 'nl': 'NL', 'fr': 'FR', 'ca': 'ES', 'es-419': 'MX', 'ar': 'SA', 'he': 'IL', 'tr': 'TR', 'id': 'ID', 'pl': 'PL'}

// ConfigStorage
;(function (window) {
  var keyPrefix = ''
  var noPrefix = false
  var cache = {}
  var useCs = !!(window.chrome && chrome.storage && chrome.storage.local)
  var useLs = !useCs && !!window.localStorage

  function storageSetPrefix (newPrefix) {
    keyPrefix = newPrefix
  }

  function storageSetNoPrefix () {
    noPrefix = true
  }

  function storageGetPrefix () {
    if (noPrefix) {
      noPrefix = false
      return ''
    }
    return keyPrefix
  }

  function storageGetValue (keys, callback) {
    var single = false
    if (!Array.isArray(keys)) {
      keys = Array.prototype.slice.call(arguments)
      callback = keys.pop()
      single = keys.length == 1
    }
    var result = [],
      value
    var allFound = true
    var prefix = storageGetPrefix(),
      i, key

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i]
      if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined) {
        result.push(cache[key])
      }
      else if (useLs) {
        try {
          value = localStorage.getItem(key)
        } catch (e) {
          useLs = false
        }
        try {
          value = (value === undefined || value === null) ? false : JSON.parse(value)
        } catch (e) {
          value = false
        }
        result.push(cache[key] = value)
      }
      else if (!useCs) {
        result.push(cache[key] = false)
      }else {
        allFound = false
      }
    }

    if (allFound) {
      return callback(single ? result[0] : result)
    }

    chrome.storage.local.get(keys, function (resultObj) {
      var value
      result = []
      for (i = 0; i < keys.length; i++) {
        key = keys[i]
        value = resultObj[key]
        value = value === undefined || value === null ? false : JSON.parse(value)
        result.push(cache[key] = value)
      }

      callback(single ? result[0] : result)
    })
  }

  function storageSetValue (obj, callback) {
    var keyValues = {}
    var prefix = storageGetPrefix(),
      key, value

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        value = obj[key]
        key = prefix + key
        cache[key] = value
        value = JSON.stringify(value)
        if (useLs) {
          try {
            localStorage.setItem(key, value)
          } catch (e) {
            useLs = false
          }
        } else {
          keyValues[key] = value
        }
      }
    }

    if (useLs || !useCs) {
      if (callback) {
        callback()
      }
      return
    }

    chrome.storage.local.set(keyValues, callback)
  }

  function storageRemoveValue (keys, callback) {
    if (!Array.isArray(keys)) {
      keys = Array.prototype.slice.call(arguments)
      if (typeof keys[keys.length - 1] === 'function') {
        callback = keys.pop()
      }
    }
    var prefix = storageGetPrefix(),
      i, key

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i]
      delete cache[key]
      if (useLs) {
        try {
          localStorage.removeItem(key)
        } catch (e) {
          useLs = false
        }
      }
    }
    if (useCs) {
      chrome.storage.local.remove(keys, callback)
    }
    else if (callback) {
      callback()
    }
  }

  function storageClear (callback) {
    if (useLs) {
      try {
        localStorage.clear()
      } catch (e) {
        useLs = false
      }
    }

    if (useCs) {
      chrome.storage.local.clear(function () {
        cache = {}
        callback()
      })
    } else {
      cache = {}
      callback()
    }
  }

  window.ConfigStorage = {
    prefix: storageSetPrefix,
    noPrefix: storageSetNoPrefix,
    get: storageGetValue,
    set: storageSetValue,
    remove: storageRemoveValue,
    clear: storageClear
  }
})(this)

////////////////////////////////////////////////////////////////////////////////////////
// Big Integer Library v. 5.5
// Created 2000, last modified 2013
// Leemon Baird
// www.leemon.com
//
// Version history:
// v 5.5  17 Mar 2013
//   - two lines of a form like "if (x<0) x+=n" had the "if" changed to "while" to 
//     handle the case when x<-n. (Thanks to James Ansell for finding that bug)
// v 5.4  3 Oct 2009
//   - added "var i" to greaterShift() so i is not global. (Thanks to PŽter Szab— for finding that bug)
//
// v 5.3  21 Sep 2009
//   - added randProbPrime(k) for probable primes
//   - unrolled loop in mont_ (slightly faster)
//   - millerRabin now takes a bigInt parameter rather than an int
//
// v 5.2  15 Sep 2009
//   - fixed capitalization in call to int2bigInt in randBigInt
//     (thanks to Emili Evripidou, Reinhold Behringer, and Samuel Macaleese for finding that bug)
//
// v 5.1  8 Oct 2007 
//   - renamed inverseModInt_ to inverseModInt since it doesn't change its parameters
//   - added functions GCD and randBigInt, which call GCD_ and randBigInt_
//   - fixed a bug found by Rob Visser (see comment with his name below)
//   - improved comments
//
// This file is public domain.   You can use it for any purpose without restriction.
// I do not guarantee that it is correct, so use it at your own risk.  If you use 
// it for something interesting, I'd appreciate hearing about it.  If you find 
// any bugs or make any improvements, I'd appreciate hearing about those too.
// It would also be nice if my name and URL were left in the comments.  But none 
// of that is required.
//
// This code defines a bigInt library for arbitrary-precision integers.
// A bigInt is an array of integers storing the value in chunks of bpe bits, 
// little endian (buff[0] is the least significant word).
// Negative bigInts are stored two's complement.  Almost all the functions treat
// bigInts as nonnegative.  The few that view them as two's complement say so
// in their comments.  Some functions assume their parameters have at least one 
// leading zero element. Functions with an underscore at the end of the name put
// their answer into one of the arrays passed in, and have unpredictable behavior 
// in case of overflow, so the caller must make sure the arrays are big enough to 
// hold the answer.  But the average user should never have to call any of the 
// underscored functions.  Each important underscored function has a wrapper function 
// of the same name without the underscore that takes care of the details for you.  
// For each underscored function where a parameter is modified, that same variable 
// must not be used as another argument too.  So, you cannot square x by doing 
// multMod_(x,x,n).  You must use squareMod_(x,n) instead, or do y=dup(x); multMod_(x,y,n).
// Or simply use the multMod(x,x,n) function without the underscore, where
// such issues never arise, because non-underscored functions never change
// their parameters; they always allocate new memory for the answer that is returned.
//
// These functions are designed to avoid frequent dynamic memory allocation in the inner loop.
// For most functions, if it needs a BigInt as a local variable it will actually use
// a global, and will only allocate to it only when it's not the right size.  This ensures
// that when a function is called repeatedly with same-sized parameters, it only allocates
// memory on the first call.
//
// Note that for cryptographic purposes, the calls to Math.random() must 
// be replaced with calls to a better pseudorandom number generator.
//
// In the following, "bigInt" means a bigInt with at least one leading zero element,
// and "integer" means a nonnegative integer less than radix.  In some cases, integer 
// can be negative.  Negative bigInts are 2s complement.
// 
// The following functions do not modify their inputs.
// Those returning a bigInt, string, or Array will dynamically allocate memory for that value.
// Those returning a boolean will return the integer 0 (false) or 1 (true).
// Those returning boolean or int will not allocate memory except possibly on the first 
// time they're called with a given parameter size.
// 
// bigInt  add(x,y)               //return (x+y) for bigInts x and y.  
// bigInt  addInt(x,n)            //return (x+n) where x is a bigInt and n is an integer.
// string  bigInt2str(x,base)     //return a string form of bigInt x in a given base, with 2 <= base <= 95
// int     bitSize(x)             //return how many bits long the bigInt x is, not counting leading zeros
// bigInt  dup(x)                 //return a copy of bigInt x
// boolean equals(x,y)            //is the bigInt x equal to the bigint y?
// boolean equalsInt(x,y)         //is bigint x equal to integer y?
// bigInt  expand(x,n)            //return a copy of x with at least n elements, adding leading zeros if needed
// Array   findPrimes(n)          //return array of all primes less than integer n
// bigInt  GCD(x,y)               //return greatest common divisor of bigInts x and y (each with same number of elements).
// boolean greater(x,y)           //is x>y?  (x and y are nonnegative bigInts)
// boolean greaterShift(x,y,shift)//is (x <<(shift*bpe)) > y?
// bigInt  int2bigInt(t,n,m)      //return a bigInt equal to integer t, with at least n bits and m array elements
// bigInt  inverseMod(x,n)        //return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
// int     inverseModInt(x,n)     //return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
// boolean isZero(x)              //is the bigInt x equal to zero?
// boolean millerRabin(x,b)       //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is bigInt, 1<b<x)
// boolean millerRabinInt(x,b)    //does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is int,    1<b<x)
// bigInt  mod(x,n)               //return a new bigInt equal to (x mod n) for bigInts x and n.
// int     modInt(x,n)            //return x mod n for bigInt x and integer n.
// bigInt  mult(x,y)              //return x*y for bigInts x and y. This is faster when y<x.
// bigInt  multMod(x,y,n)         //return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
// boolean negative(x)            //is bigInt x negative?
// bigInt  powMod(x,y,n)          //return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
// bigInt  randBigInt(n,s)        //return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
// bigInt  randTruePrime(k)       //return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
// bigInt  randProbPrime(k)       //return a new, random, k-bit, probable prime bigInt (probability it's composite less than 2^-80).
// bigInt  str2bigInt(s,b,n,m)    //return a bigInt for number represented in string s in base b with at least n bits and m array elements
// bigInt  sub(x,y)               //return (x-y) for bigInts x and y.  Negative answers will be 2s complement
// bigInt  trim(x,k)              //return a copy of x with exactly k leading zero elements
//
//
// The following functions each have a non-underscored version, which most users should call instead.
// These functions each write to a single parameter, and the caller is responsible for ensuring the array 
// passed in is large enough to hold the result. 
//
// void    addInt_(x,n)          //do x=x+n where x is a bigInt and n is an integer
// void    add_(x,y)             //do x=x+y for bigInts x and y
// void    copy_(x,y)            //do x=y on bigInts x and y
// void    copyInt_(x,n)         //do x=n on bigInt x and integer n
// void    GCD_(x,y)             //set x to the greatest common divisor of bigInts x and y, (y is destroyed).  (This never overflows its array).
// boolean inverseMod_(x,n)      //do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist
// void    mod_(x,n)             //do x=x mod n for bigInts x and n. (This never overflows its array).
// void    mult_(x,y)            //do x=x*y for bigInts x and y.
// void    multMod_(x,y,n)       //do x=x*y  mod n for bigInts x,y,n.
// void    powMod_(x,y,n)        //do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.  0**0=1.
// void    randBigInt_(b,n,s)    //do b = an n-bit random BigInt. if s=1, then nth bit (most significant bit) is set to 1. n>=1.
// void    randTruePrime_(ans,k) //do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
// void    sub_(x,y)             //do x=x-y for bigInts x and y. Negative answers will be 2s complement.
//
// The following functions do NOT have a non-underscored version. 
// They each write a bigInt result to one or more parameters.  The caller is responsible for
// ensuring the arrays passed in are large enough to hold the results. 
//
// void addShift_(x,y,ys)       //do x=x+(y<<(ys*bpe))
// void carry_(x)               //do carries and borrows so each element of the bigInt x fits in bpe bits.
// void divide_(x,y,q,r)        //divide x by y giving quotient q and remainder r
// int  divInt_(x,n)            //do x=floor(x/n) for bigInt x and integer n, and return the remainder. (This never overflows its array).
// int  eGCD_(x,y,d,a,b)        //sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y
// void halve_(x)               //do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.  (This never overflows its array).
// void leftShift_(x,n)         //left shift bigInt x by n bits.  n<bpe.
// void linComb_(x,y,a,b)       //do x=a*x+b*y for bigInts x and y and integers a and b
// void linCombShift_(x,y,b,ys) //do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys
// void mont_(x,y,n,np)         //Montgomery multiplication (see comments where the function is defined)
// void multInt_(x,n)           //do x=x*n where x is a bigInt and n is an integer.
// void rightShift_(x,n)        //right shift bigInt x by n bits.  0 <= n < bpe. (This never overflows its array).
// void squareMod_(x,n)         //do x=x*x  mod n for bigInts x,n
// void subShift_(x,y,ys)       //do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
//
// The following functions are based on algorithms from the _Handbook of Applied Cryptography_
//    powMod_()           = algorithm 14.94, Montgomery exponentiation
//    eGCD_,inverseMod_() = algorithm 14.61, Binary extended GCD_
//    GCD_()              = algorothm 14.57, Lehmer's algorithm
//    mont_()             = algorithm 14.36, Montgomery multiplication
//    divide_()           = algorithm 14.20  Multiple-precision division
//    squareMod_()        = algorithm 14.16  Multiple-precision squaring
//    randTruePrime_()    = algorithm  4.62, Maurer's algorithm
//    millerRabin()       = algorithm  4.24, Miller-Rabin algorithm
//
// Profiling shows:
//     randTruePrime_() spends:
//         10% of its time in calls to powMod_()
//         85% of its time in calls to millerRabin()
//     millerRabin() spends:
//         99% of its time in calls to powMod_()   (always with a base of 2)
//     powMod_() spends:
//         94% of its time in calls to mont_()  (almost always with x==y)
//
// This suggests there are several ways to speed up this library slightly:
//     - convert powMod_ to use a Montgomery form of k-ary window (or maybe a Montgomery form of sliding window)
//         -- this should especially focus on being fast when raising 2 to a power mod n
//     - convert randTruePrime_() to use a minimum r of 1/3 instead of 1/2 with the appropriate change to the test
//     - tune the parameters in randTruePrime_(), including c, m, and recLimit
//     - speed up the single loop in mont_() that takes 95% of the runtime, perhaps by reducing checking
//       within the loop when all the parameters are the same length.
//
// There are several ideas that look like they wouldn't help much at all:
//     - replacing trial division in randTruePrime_() with a sieve (that speeds up something taking almost no time anyway)
//     - increase bpe from 15 to 30 (that would help if we had a 32*32->64 multiplier, but not with JavaScript's 32*32->32)
//     - speeding up mont_(x,y,n,np) when x==y by doing a non-modular, non-Montgomery square
//       followed by a Montgomery reduction.  The intermediate answer will be twice as long as x, so that
//       method would be slower.  This is unfortunate because the code currently spends almost all of its time
//       doing mont_(x,x,...), both for randTruePrime_() and powMod_().  A faster method for Montgomery squaring
//       would have a large impact on the speed of randTruePrime_() and powMod_().  HAC has a couple of poorly-worded
//       sentences that seem to imply it's faster to do a non-modular square followed by a single
//       Montgomery reduction, but that's obviously wrong.
////////////////////////////////////////////////////////////////////////////////////////

//globals
bpe=0;         //bits stored per array element
mask=0;        //AND this with an array element to chop it down to bpe bits
radix=mask+1;  //equals 2^bpe.  A single 1 bit to the left of the last bit of mask.

//the digits for converting to different bases
digitsStr='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\\'\"+-';

//initialize the global variables
for (bpe=0; (1<<(bpe+1)) > (1<<bpe); bpe++);  //bpe=number of bits in the mantissa on this platform
bpe>>=1;                   //bpe=number of bits in one element of the array representing the bigInt
mask=(1<<bpe)-1;           //AND the mask with an integer to get its bpe least significant bits
radix=mask+1;              //2^bpe.  a single 1 bit to the left of the first bit of mask
one=int2bigInt(1,1,1);     //constant used in powMod_()

//the following global variables are scratchpad memory to 
//reduce dynamic memory allocation in the inner loop
t=new Array(0);
ss=t;       //used in mult_()
s0=t;       //used in multMod_(), squareMod_() 
s1=t;       //used in powMod_(), multMod_(), squareMod_() 
s2=t;       //used in powMod_(), multMod_()
s3=t;       //used in powMod_()
s4=t; s5=t; //used in mod_()
s6=t;       //used in bigInt2str()
s7=t;       //used in powMod_()
T=t;        //used in GCD_()
sa=t;       //used in mont_()
mr_x1=t; mr_r=t; mr_a=t;                                      //used in millerRabin()
eg_v=t; eg_u=t; eg_A=t; eg_B=t; eg_C=t; eg_D=t;               //used in eGCD_(), inverseMod_()
md_q1=t; md_q2=t; md_q3=t; md_r=t; md_r1=t; md_r2=t; md_tt=t; //used in mod_()

primes=t; pows=t; s_i=t; s_i2=t; s_R=t; s_rm=t; s_q=t; s_n1=t;
s_a=t; s_r2=t; s_n=t; s_b=t; s_d=t; s_x1=t; s_x2=t, s_aa=t; //used in randTruePrime_()

rpprb=t; //used in randProbPrimeRounds() (which also uses "primes")

////////////////////////////////////////////////////////////////////////////////////////


//return array of all primes less than integer n
function findPrimes(n) {
    var i,s,p,ans;
    s=new Array(n);
    for (i=0;i<n;i++)
        s[i]=0;
    s[0]=2;
    p=0;    //first p elements of s are primes, the rest are a sieve
    for(;s[p]<n;) {                  //s[p] is the pth prime
        for(i=s[p]*s[p]; i<n; i+=s[p]) //mark multiples of s[p]
            s[i]=1;
        p++;
        s[p]=s[p-1]+1;
        for(; s[p]<n && s[s[p]]; s[p]++); //find next prime (where s[p]==0)
    }
    ans=new Array(p);
    for(i=0;i<p;i++)
        ans[i]=s[i];
    return ans;
}


//does a single round of Miller-Rabin base b consider x to be a possible prime?
//x is a bigInt, and b is an integer, with b<x
function millerRabinInt(x,b) {
    if (mr_x1.length!=x.length) {
        mr_x1=dup(x);
        mr_r=dup(x);
        mr_a=dup(x);
    }

    copyInt_(mr_a,b);
    return millerRabin(x,mr_a);
}

//does a single round of Miller-Rabin base b consider x to be a possible prime?
//x and b are bigInts with b<x
function millerRabin(x,b) {
    var i,j,k,s;

    if (mr_x1.length!=x.length) {
        mr_x1=dup(x);
        mr_r=dup(x);
        mr_a=dup(x);
    }

    copy_(mr_a,b);
    copy_(mr_r,x);
    copy_(mr_x1,x);

    addInt_(mr_r,-1);
    addInt_(mr_x1,-1);

    //s=the highest power of two that divides mr_r
    k=0;
    for (i=0;i<mr_r.length;i++)
        for (j=1;j<mask;j<<=1)
            if (x[i] & j) {
                s=(k<mr_r.length+bpe ? k : 0);
                i=mr_r.length;
                j=mask;
            } else
                k++;

    if (s)
        rightShift_(mr_r,s);

    powMod_(mr_a,mr_r,x);

    if (!equalsInt(mr_a,1) && !equals(mr_a,mr_x1)) {
        j=1;
        while (j<=s-1 && !equals(mr_a,mr_x1)) {
            squareMod_(mr_a,x);
            if (equalsInt(mr_a,1)) {
                return 0;
            }
            j++;
        }
        if (!equals(mr_a,mr_x1)) {
            return 0;
        }
    }
    return 1;
}

//returns how many bits long the bigInt is, not counting leading zeros.
function bitSize(x) {
    var j,z,w;
    for (j=x.length-1; (x[j]==0) && (j>0); j--);
    for (z=0,w=x[j]; w; (w>>=1),z++);
    z+=bpe*j;
    return z;
}

//return a copy of x with at least n elements, adding leading zeros if needed
function expand(x,n) {
    var ans=int2bigInt(0,(x.length>n ? x.length : n)*bpe,0);
    copy_(ans,x);
    return ans;
}

//return a k-bit true random prime using Maurer's algorithm.
function randTruePrime(k) {
    var ans=int2bigInt(0,k,0);
    randTruePrime_(ans,k);
    return trim(ans,1);
}

//return a k-bit random probable prime with probability of error < 2^-80
function randProbPrime(k) {
    if (k>=600) return randProbPrimeRounds(k,2); //numbers from HAC table 4.3
    if (k>=550) return randProbPrimeRounds(k,4);
    if (k>=500) return randProbPrimeRounds(k,5);
    if (k>=400) return randProbPrimeRounds(k,6);
    if (k>=350) return randProbPrimeRounds(k,7);
    if (k>=300) return randProbPrimeRounds(k,9);
    if (k>=250) return randProbPrimeRounds(k,12); //numbers from HAC table 4.4
    if (k>=200) return randProbPrimeRounds(k,15);
    if (k>=150) return randProbPrimeRounds(k,18);
    if (k>=100) return randProbPrimeRounds(k,27);
    return randProbPrimeRounds(k,40); //number from HAC remark 4.26 (only an estimate)
}

//return a k-bit probable random prime using n rounds of Miller Rabin (after trial division with small primes)	
function randProbPrimeRounds(k,n) {
    var ans, i, divisible, B;
    B=30000;  //B is largest prime to use in trial division
    ans=int2bigInt(0,k,0);

    //optimization: try larger and smaller B to find the best limit.

    if (primes.length==0)
        primes=findPrimes(30000);  //check for divisibility by primes <=30000

    if (rpprb.length!=ans.length)
        rpprb=dup(ans);

    for (;;) { //keep trying random values for ans until one appears to be prime
        //optimization: pick a random number times L=2*3*5*...*p, plus a
        //   random element of the list of all numbers in [0,L) not divisible by any prime up to p.
        //   This can reduce the amount of random number generation.

        randBigInt_(ans,k,0); //ans = a random odd number to check
        ans[0] |= 1;
        divisible=0;

        //check ans for divisibility by small primes up to B
        for (i=0; (i<primes.length) && (primes[i]<=B); i++)
            if (modInt(ans,primes[i])==0 && !equalsInt(ans,primes[i])) {
                divisible=1;
                break;
            }

        //optimization: change millerRabin so the base can be bigger than the number being checked, then eliminate the while here.

        //do n rounds of Miller Rabin, with random bases less than ans
        for (i=0; i<n && !divisible; i++) {
            randBigInt_(rpprb,k,0);
            while(!greater(ans,rpprb)) //pick a random rpprb that's < ans
                randBigInt_(rpprb,k,0);
            if (!millerRabin(ans,rpprb))
                divisible=1;
        }

        if(!divisible)
            return ans;
    }
}

//return a new bigInt equal to (x mod n) for bigInts x and n.
function mod(x,n) {
    var ans=dup(x);
    mod_(ans,n);
    return trim(ans,1);
}

//return (x+n) where x is a bigInt and n is an integer.
function addInt(x,n) {
    var ans=expand(x,x.length+1);
    addInt_(ans,n);
    return trim(ans,1);
}

//return x*y for bigInts x and y. This is faster when y<x.
function mult(x,y) {
    var ans=expand(x,x.length+y.length);
    mult_(ans,y);
    return trim(ans,1);
}

//return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
function powMod(x,y,n) {
    var ans=expand(x,n.length);
    powMod_(ans,trim(y,2),trim(n,2),0);  //this should work without the trim, but doesn't
    return trim(ans,1);
}

//return (x-y) for bigInts x and y.  Negative answers will be 2s complement
function sub(x,y) {
    var ans=expand(x,(x.length>y.length ? x.length+1 : y.length+1));
    sub_(ans,y);
    return trim(ans,1);
}

//return (x+y) for bigInts x and y.  
function add(x,y) {
    var ans=expand(x,(x.length>y.length ? x.length+1 : y.length+1));
    add_(ans,y);
    return trim(ans,1);
}

//return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
function inverseMod(x,n) {
    var ans=expand(x,n.length);
    var s;
    s=inverseMod_(ans,n);
    return s ? trim(ans,1) : null;
}

//return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
function multMod(x,y,n) {
    var ans=expand(x,n.length);
    multMod_(ans,y,n);
    return trim(ans,1);
}

//generate a k-bit true random prime using Maurer's algorithm,
//and put it into ans.  The bigInt ans must be large enough to hold it.
function randTruePrime_(ans,k) {
    var c,m,pm,dd,j,r,B,divisible,z,zz,recSize;

    if (primes.length==0)
        primes=findPrimes(30000);  //check for divisibility by primes <=30000

    if (pows.length==0) {
        pows=new Array(512);
        for (j=0;j<512;j++) {
            pows[j]=Math.pow(2,j/511.-1.);
        }
    }

    //c and m should be tuned for a particular machine and value of k, to maximize speed
    c=0.1;  //c=0.1 in HAC
    m=20;   //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
    recLimit=20; //stop recursion when k <=recLimit.  Must have recLimit >= 2

    if (s_i2.length!=ans.length) {
        s_i2=dup(ans);
        s_R =dup(ans);
        s_n1=dup(ans);
        s_r2=dup(ans);
        s_d =dup(ans);
        s_x1=dup(ans);
        s_x2=dup(ans);
        s_b =dup(ans);
        s_n =dup(ans);
        s_i =dup(ans);
        s_rm=dup(ans);
        s_q =dup(ans);
        s_a =dup(ans);
        s_aa=dup(ans);
    }

    if (k <= recLimit) {  //generate small random primes by trial division up to its square root
        pm=(1<<((k+2)>>1))-1; //pm is binary number with all ones, just over sqrt(2^k)
        copyInt_(ans,0);
        for (dd=1;dd;) {
            dd=0;
            ans[0]= 1 | (1<<(k-1)) | Math.floor(Math.random()*(1<<k));  //random, k-bit, odd integer, with msb 1
            for (j=1;(j<primes.length) && ((primes[j]&pm)==primes[j]);j++) { //trial division by all primes 3...sqrt(2^k)
                if (0==(ans[0]%primes[j])) {
                    dd=1;
                    break;
                }
            }
        }
        carry_(ans);
        return;
    }

    B=c*k*k;    //try small primes up to B (or all the primes[] array if the largest is less than B).
    if (k>2*m)  //generate this k-bit number by first recursively generating a number that has between k/2 and k-m bits
        for (r=1; k-k*r<=m; )
            r=pows[Math.floor(Math.random()*512)];   //r=Math.pow(2,Math.random()-1);
    else
        r=.5;

    //simulation suggests the more complex algorithm using r=.333 is only slightly faster.

    recSize=Math.floor(r*k)+1;

    randTruePrime_(s_q,recSize);
    copyInt_(s_i2,0);
    s_i2[Math.floor((k-2)/bpe)] |= (1<<((k-2)%bpe));   //s_i2=2^(k-2)
    divide_(s_i2,s_q,s_i,s_rm);                        //s_i=floor((2^(k-1))/(2q))

    z=bitSize(s_i);

    for (;;) {
        for (;;) {  //generate z-bit numbers until one falls in the range [0,s_i-1]
            randBigInt_(s_R,z,0);
            if (greater(s_i,s_R))
                break;
        }                //now s_R is in the range [0,s_i-1]
        addInt_(s_R,1);  //now s_R is in the range [1,s_i]
        add_(s_R,s_i);   //now s_R is in the range [s_i+1,2*s_i]

        copy_(s_n,s_q);
        mult_(s_n,s_R);
        multInt_(s_n,2);
        addInt_(s_n,1);    //s_n=2*s_R*s_q+1

        copy_(s_r2,s_R);
        multInt_(s_r2,2);  //s_r2=2*s_R

        //check s_n for divisibility by small primes up to B
        for (divisible=0,j=0; (j<primes.length) && (primes[j]<B); j++)
            if (modInt(s_n,primes[j])==0 && !equalsInt(s_n,primes[j])) {
                divisible=1;
                break;
            }

        if (!divisible)    //if it passes small primes check, then try a single Miller-Rabin base 2
            if (!millerRabinInt(s_n,2)) //this line represents 75% of the total runtime for randTruePrime_
                divisible=1;

        if (!divisible) {  //if it passes that test, continue checking s_n
            addInt_(s_n,-3);
            for (j=s_n.length-1;(s_n[j]==0) && (j>0); j--);  //strip leading zeros
            for (zz=0,w=s_n[j]; w; (w>>=1),zz++);
            zz+=bpe*j;                             //zz=number of bits in s_n, ignoring leading zeros
            for (;;) {  //generate z-bit numbers until one falls in the range [0,s_n-1]
                randBigInt_(s_a,zz,0);
                if (greater(s_n,s_a))
                    break;
            }                //now s_a is in the range [0,s_n-1]
            addInt_(s_n,3);  //now s_a is in the range [0,s_n-4]
            addInt_(s_a,2);  //now s_a is in the range [2,s_n-2]
            copy_(s_b,s_a);
            copy_(s_n1,s_n);
            addInt_(s_n1,-1);
            powMod_(s_b,s_n1,s_n);   //s_b=s_a^(s_n-1) modulo s_n
            addInt_(s_b,-1);
            if (isZero(s_b)) {
                copy_(s_b,s_a);
                powMod_(s_b,s_r2,s_n);
                addInt_(s_b,-1);
                copy_(s_aa,s_n);
                copy_(s_d,s_b);
                GCD_(s_d,s_n);  //if s_b and s_n are relatively prime, then s_n is a prime
                if (equalsInt(s_d,1)) {
                    copy_(ans,s_aa);
                    return;     //if we've made it this far, then s_n is absolutely guaranteed to be prime
                }
            }
        }
    }
}

//Return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
function randBigInt(n,s) {
    var a,b;
    a=Math.floor((n-1)/bpe)+2; //# array elements to hold the BigInt with a leading 0 element
    b=int2bigInt(0,0,a);
    randBigInt_(b,n,s);
    return b;
}

//Set b to an n-bit random BigInt.  If s=1, then the most significant of those n bits is set to 1.
//Array b must be big enough to hold the result. Must have n>=1
function randBigInt_(b,n,s) {
    var i,a;
    for (i=0;i<b.length;i++)
        b[i]=0;
    a=Math.floor((n-1)/bpe)+1; //# array elements to hold the BigInt
    for (i=0;i<a;i++) {
        b[i]=Math.floor(Math.random()*(1<<(bpe-1)));
    }
    b[a-1] &= (2<<((n-1)%bpe))-1;
    if (s==1)
        b[a-1] |= (1<<((n-1)%bpe));
}

//Return the greatest common divisor of bigInts x and y (each with same number of elements).
function GCD(x,y) {
    var xc,yc;
    xc=dup(x);
    yc=dup(y);
    GCD_(xc,yc);
    return xc;
}

//set x to the greatest common divisor of bigInts x and y (each with same number of elements).
//y is destroyed.
function GCD_(x,y) {
    var i,xp,yp,A,B,C,D,q,sing;
    if (T.length!=x.length)
        T=dup(x);

    sing=1;
    while (sing) { //while y has nonzero elements other than y[0]
        sing=0;
        for (i=1;i<y.length;i++) //check if y has nonzero elements other than 0
            if (y[i]) {
                sing=1;
                break;
            }
        if (!sing) break; //quit when y all zero elements except possibly y[0]

        for (i=x.length;!x[i] && i>=0;i--);  //find most significant element of x
        xp=x[i];
        yp=y[i];
        A=1; B=0; C=0; D=1;
        while ((yp+C) && (yp+D)) {
            q =Math.floor((xp+A)/(yp+C));
            qp=Math.floor((xp+B)/(yp+D));
            if (q!=qp)
                break;
            t= A-q*C;   A=C;   C=t;    //  do (A,B,xp, C,D,yp) = (C,D,yp, A,B,xp) - q*(0,0,0, C,D,yp)
            t= B-q*D;   B=D;   D=t;
            t=xp-q*yp; xp=yp; yp=t;
        }
        if (B) {
            copy_(T,x);
            linComb_(x,y,A,B); //x=A*x+B*y
            linComb_(y,T,D,C); //y=D*y+C*T
        } else {
            mod_(x,y);
            copy_(T,x);
            copy_(x,y);
            copy_(y,T);
        }
    }
    if (y[0]==0)
        return;
    t=modInt(x,y[0]);
    copyInt_(x,y[0]);
    y[0]=t;
    while (y[0]) {
        x[0]%=y[0];
        t=x[0]; x[0]=y[0]; y[0]=t;
    }
}

//do x=x**(-1) mod n, for bigInts x and n.
//If no inverse exists, it sets x to zero and returns 0, else it returns 1.
//The x array must be at least as large as the n array.
function inverseMod_(x,n) {
    var k=1+2*Math.max(x.length,n.length);

    if(!(x[0]&1)  && !(n[0]&1)) {  //if both inputs are even, then inverse doesn't exist
        copyInt_(x,0);
        return 0;
    }

    if (eg_u.length!=k) {
        eg_u=new Array(k);
        eg_v=new Array(k);
        eg_A=new Array(k);
        eg_B=new Array(k);
        eg_C=new Array(k);
        eg_D=new Array(k);
    }

    copy_(eg_u,x);
    copy_(eg_v,n);
    copyInt_(eg_A,1);
    copyInt_(eg_B,0);
    copyInt_(eg_C,0);
    copyInt_(eg_D,1);
    for (;;) {
        while(!(eg_u[0]&1)) {  //while eg_u is even
            halve_(eg_u);
            if (!(eg_A[0]&1) && !(eg_B[0]&1)) { //if eg_A==eg_B==0 mod 2
                halve_(eg_A);
                halve_(eg_B);
            } else {
                add_(eg_A,n);  halve_(eg_A);
                sub_(eg_B,x);  halve_(eg_B);
            }
        }

        while (!(eg_v[0]&1)) {  //while eg_v is even
            halve_(eg_v);
            if (!(eg_C[0]&1) && !(eg_D[0]&1)) { //if eg_C==eg_D==0 mod 2
                halve_(eg_C);
                halve_(eg_D);
            } else {
                add_(eg_C,n);  halve_(eg_C);
                sub_(eg_D,x);  halve_(eg_D);
            }
        }

        if (!greater(eg_v,eg_u)) { //eg_v <= eg_u
            sub_(eg_u,eg_v);
            sub_(eg_A,eg_C);
            sub_(eg_B,eg_D);
        } else {                   //eg_v > eg_u
            sub_(eg_v,eg_u);
            sub_(eg_C,eg_A);
            sub_(eg_D,eg_B);
        }

        if (equalsInt(eg_u,0)) {
            while (negative(eg_C)) //make sure answer is nonnegative
                add_(eg_C,n);
            copy_(x,eg_C);

            if (!equalsInt(eg_v,1)) { //if GCD_(x,n)!=1, then there is no inverse
                copyInt_(x,0);
                return 0;
            }
            return 1;
        }
    }
}

//return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
function inverseModInt(x,n) {
    var a=1,b=0,t;
    for (;;) {
        if (x==1) return a;
        if (x==0) return 0;
        b-=a*Math.floor(n/x);
        n%=x;

        if (n==1) return b; //to avoid negatives, change this b to n-b, and each -= to +=
        if (n==0) return 0;
        a-=b*Math.floor(x/n);
        x%=n;
    }
}

//this deprecated function is for backward compatibility only. 
function inverseModInt_(x,n) {
    return inverseModInt(x,n);
}


//Given positive bigInts x and y, change the bigints v, a, and b to positive bigInts such that:
//     v = GCD_(x,y) = a*x-b*y
//The bigInts v, a, b, must have exactly as many elements as the larger of x and y.
function eGCD_(x,y,v,a,b) {
    var g=0;
    var k=Math.max(x.length,y.length);
    if (eg_u.length!=k) {
        eg_u=new Array(k);
        eg_A=new Array(k);
        eg_B=new Array(k);
        eg_C=new Array(k);
        eg_D=new Array(k);
    }
    while(!(x[0]&1)  && !(y[0]&1)) {  //while x and y both even
        halve_(x);
        halve_(y);
        g++;
    }
    copy_(eg_u,x);
    copy_(v,y);
    copyInt_(eg_A,1);
    copyInt_(eg_B,0);
    copyInt_(eg_C,0);
    copyInt_(eg_D,1);
    for (;;) {
        while(!(eg_u[0]&1)) {  //while u is even
            halve_(eg_u);
            if (!(eg_A[0]&1) && !(eg_B[0]&1)) { //if A==B==0 mod 2
                halve_(eg_A);
                halve_(eg_B);
            } else {
                add_(eg_A,y);  halve_(eg_A);
                sub_(eg_B,x);  halve_(eg_B);
            }
        }

        while (!(v[0]&1)) {  //while v is even
            halve_(v);
            if (!(eg_C[0]&1) && !(eg_D[0]&1)) { //if C==D==0 mod 2
                halve_(eg_C);
                halve_(eg_D);
            } else {
                add_(eg_C,y);  halve_(eg_C);
                sub_(eg_D,x);  halve_(eg_D);
            }
        }

        if (!greater(v,eg_u)) { //v<=u
            sub_(eg_u,v);
            sub_(eg_A,eg_C);
            sub_(eg_B,eg_D);
        } else {                //v>u
            sub_(v,eg_u);
            sub_(eg_C,eg_A);
            sub_(eg_D,eg_B);
        }
        if (equalsInt(eg_u,0)) {
            while (negative(eg_C)) {   //make sure a (C) is nonnegative
                add_(eg_C,y);
                sub_(eg_D,x);
            }
            multInt_(eg_D,-1);  ///make sure b (D) is nonnegative
            copy_(a,eg_C);
            copy_(b,eg_D);
            leftShift_(v,g);
            return;
        }
    }
}


//is bigInt x negative?
function negative(x) {
    return ((x[x.length-1]>>(bpe-1))&1);
}


//is (x << (shift*bpe)) > y?
//x and y are nonnegative bigInts
//shift is a nonnegative integer
function greaterShift(x,y,shift) {
    var i, kx=x.length, ky=y.length;
    k=((kx+shift)<ky) ? (kx+shift) : ky;
    for (i=ky-1-shift; i<kx && i>=0; i++)
        if (x[i]>0)
            return 1; //if there are nonzeros in x to the left of the first column of y, then x is bigger
    for (i=kx-1+shift; i<ky; i++)
        if (y[i]>0)
            return 0; //if there are nonzeros in y to the left of the first column of x, then x is not bigger
    for (i=k-1; i>=shift; i--)
        if      (x[i-shift]>y[i]) return 1;
        else if (x[i-shift]<y[i]) return 0;
    return 0;
}

//is x > y? (x and y both nonnegative)
function greater(x,y) {
    var i;
    var k=(x.length<y.length) ? x.length : y.length;

    for (i=x.length;i<y.length;i++)
        if (y[i])
            return 0;  //y has more digits

    for (i=y.length;i<x.length;i++)
        if (x[i])
            return 1;  //x has more digits

    for (i=k-1;i>=0;i--)
        if (x[i]>y[i])
            return 1;
        else if (x[i]<y[i])
            return 0;
    return 0;
}

//divide x by y giving quotient q and remainder r.  (q=floor(x/y),  r=x mod y).  All 4 are bigints.
//x must have at least one leading zero element.
//y must be nonzero.
//q and r must be arrays that are exactly the same length as x. (Or q can have more).
//Must have x.length >= y.length >= 2.
function divide_(x,y,q,r) {
    var kx, ky;
    var i,j,y1,y2,c,a,b;
    copy_(r,x);
    for (ky=y.length;y[ky-1]==0;ky--); //ky is number of elements in y, not including leading zeros

    //normalize: ensure the most significant element of y has its highest bit set
    b=y[ky-1];
    for (a=0; b; a++)
        b>>=1;
    a=bpe-a;  //a is how many bits to shift so that the high order bit of y is leftmost in its array element
    leftShift_(y,a);  //multiply both by 1<<a now, then divide both by that at the end
    leftShift_(r,a);

    //Rob Visser discovered a bug: the following line was originally just before the normalization.
    for (kx=r.length;r[kx-1]==0 && kx>ky;kx--); //kx is number of elements in normalized x, not including leading zeros

    copyInt_(q,0);                      // q=0
    while (!greaterShift(y,r,kx-ky)) {  // while (leftShift_(y,kx-ky) <= r) {
        subShift_(r,y,kx-ky);             //   r=r-leftShift_(y,kx-ky)
        q[kx-ky]++;                       //   q[kx-ky]++;
    }                                   // }

    for (i=kx-1; i>=ky; i--) {
        if (r[i]==y[ky-1])
            q[i-ky]=mask;
        else
            q[i-ky]=Math.floor((r[i]*radix+r[i-1])/y[ky-1]);

        //The following for(;;) loop is equivalent to the commented while loop,
        //except that the uncommented version avoids overflow.
        //The commented loop comes from HAC, which assumes r[-1]==y[-1]==0
        //  while (q[i-ky]*(y[ky-1]*radix+y[ky-2]) > r[i]*radix*radix+r[i-1]*radix+r[i-2])
        //    q[i-ky]--;
        for (;;) {
            y2=(ky>1 ? y[ky-2] : 0)*q[i-ky];
            c=y2>>bpe;
            y2=y2 & mask;
            y1=c+q[i-ky]*y[ky-1];
            c=y1>>bpe;
            y1=y1 & mask;

            if (c==r[i] ? y1==r[i-1] ? y2>(i>1 ? r[i-2] : 0) : y1>r[i-1] : c>r[i])
                q[i-ky]--;
            else
                break;
        }

        linCombShift_(r,y,-q[i-ky],i-ky);    //r=r-q[i-ky]*leftShift_(y,i-ky)
        if (negative(r)) {
            addShift_(r,y,i-ky);         //r=r+leftShift_(y,i-ky)
            q[i-ky]--;
        }
    }

    rightShift_(y,a);  //undo the normalization step
    rightShift_(r,a);  //undo the normalization step
}

//do carries and borrows so each element of the bigInt x fits in bpe bits.
function carry_(x) {
    var i,k,c,b;
    k=x.length;
    c=0;
    for (i=0;i<k;i++) {
        c+=x[i];
        b=0;
        if (c<0) {
            b=-(c>>bpe);
            c+=b*radix;
        }
        x[i]=c & mask;
        c=(c>>bpe)-b;
    }
}

//return x mod n for bigInt x and integer n.
function modInt(x,n) {
    var i,c=0;
    for (i=x.length-1; i>=0; i--)
        c=(c*radix+x[i])%n;
    return c;
}

//convert the integer t into a bigInt with at least the given number of bits.
//the returned array stores the bigInt in bpe-bit chunks, little endian (buff[0] is least significant word)
//Pad the array with leading zeros so that it has at least minSize elements.
//There will always be at least one leading 0 element.
function int2bigInt(t,bits,minSize) {
    var i,k;
    k=Math.ceil(bits/bpe)+1;
    k=minSize>k ? minSize : k;
    buff=new Array(k);
    copyInt_(buff,t);
    return buff;
}

//return the bigInt given a string representation in a given base.  
//Pad the array with leading zeros so that it has at least minSize elements.
//If base=-1, then it reads in a space-separated list of array elements in decimal.
//The array will always have at least one leading zero, unless base=-1.
function str2bigInt(s,base,minSize) {
    var d, i, j, x, y, kk;
    var k=s.length;
    if (base==-1) { //comma-separated list of array elements in decimal
        x=new Array(0);
        for (;;) {
            y=new Array(x.length+1);
            for (i=0;i<x.length;i++)
                y[i+1]=x[i];
            y[0]=parseInt(s,10);
            x=y;
            d=s.indexOf(',',0);
            if (d<1)
                break;
            s=s.substring(d+1);
            if (s.length==0)
                break;
        }
        if (x.length<minSize) {
            y=new Array(minSize);
            copy_(y,x);
            return y;
        }
        return x;
    }

    x=int2bigInt(0,base*k,0);
    for (i=0;i<k;i++) {
        d=digitsStr.indexOf(s.substring(i,i+1),0);
        if (base<=36 && d>=36)  //convert lowercase to uppercase if base<=36
            d-=26;
        if (d>=base || d<0) {   //stop at first illegal character
            break;
        }
        multInt_(x,base);
        addInt_(x,d);
    }

    for (k=x.length;k>0 && !x[k-1];k--); //strip off leading zeros
    k=minSize>k+1 ? minSize : k+1;
    y=new Array(k);
    kk=k<x.length ? k : x.length;
    for (i=0;i<kk;i++)
        y[i]=x[i];
    for (;i<k;i++)
        y[i]=0;
    return y;
}

//is bigint x equal to integer y?
//y must have less than bpe bits
function equalsInt(x,y) {
    var i;
    if (x[0]!=y)
        return 0;
    for (i=1;i<x.length;i++)
        if (x[i])
            return 0;
    return 1;
}

//are bigints x and y equal?
//this works even if x and y are different lengths and have arbitrarily many leading zeros
function equals(x,y) {
    var i;
    var k=x.length<y.length ? x.length : y.length;
    for (i=0;i<k;i++)
        if (x[i]!=y[i])
            return 0;
    if (x.length>y.length) {
        for (;i<x.length;i++)
            if (x[i])
                return 0;
    } else {
        for (;i<y.length;i++)
            if (y[i])
                return 0;
    }
    return 1;
}

//is the bigInt x equal to zero?
function isZero(x) {
    var i;
    for (i=0;i<x.length;i++)
        if (x[i])
            return 0;
    return 1;
}

//convert a bigInt into a string in a given base, from base 2 up to base 95.
//Base -1 prints the contents of the array representing the number.
function bigInt2str(x,base) {
    var i,t,s="";

    if (s6.length!=x.length)
        s6=dup(x);
    else
        copy_(s6,x);

    if (base==-1) { //return the list of array contents
        for (i=x.length-1;i>0;i--)
            s+=x[i]+',';
        s+=x[0];
    }
    else { //return it in the given base
        while (!isZero(s6)) {
            t=divInt_(s6,base);  //t=s6 % base; s6=floor(s6/base);
            s=digitsStr.substring(t,t+1)+s;
        }
    }
    if (s.length==0)
        s="0";
    return s;
}

//returns a duplicate of bigInt x
function dup(x) {
    var i;
    buff=new Array(x.length);
    copy_(buff,x);
    return buff;
}

//do x=y on bigInts x and y.  x must be an array at least as big as y (not counting the leading zeros in y).
function copy_(x,y) {
    var i;
    var k=x.length<y.length ? x.length : y.length;
    for (i=0;i<k;i++)
        x[i]=y[i];
    for (i=k;i<x.length;i++)
        x[i]=0;
}

//do x=y on bigInt x and integer y.  
function copyInt_(x,n) {
    var i,c;
    for (c=n,i=0;i<x.length;i++) {
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do x=x+n where x is a bigInt and n is an integer.
//x must be large enough to hold the result.
function addInt_(x,n) {
    var i,k,c,b;
    x[0]+=n;
    k=x.length;
    c=0;
    for (i=0;i<k;i++) {
        c+=x[i];
        b=0;
        if (c<0) {
            b=-(c>>bpe);
            c+=b*radix;
        }
        x[i]=c & mask;
        c=(c>>bpe)-b;
        if (!c) return; //stop carrying as soon as the carry is zero
    }
}

//right shift bigInt x by n bits.  0 <= n < bpe.
function rightShift_(x,n) {
    var i;
    var k=Math.floor(n/bpe);
    if (k) {
        for (i=0;i<x.length-k;i++) //right shift x by k elements
            x[i]=x[i+k];
        for (;i<x.length;i++)
            x[i]=0;
        n%=bpe;
    }
    for (i=0;i<x.length-1;i++) {
        x[i]=mask & ((x[i+1]<<(bpe-n)) | (x[i]>>n));
    }
    x[i]>>=n;
}

//do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement
function halve_(x) {
    var i;
    for (i=0;i<x.length-1;i++) {
        x[i]=mask & ((x[i+1]<<(bpe-1)) | (x[i]>>1));
    }
    x[i]=(x[i]>>1) | (x[i] & (radix>>1));  //most significant bit stays the same
}

//left shift bigInt x by n bits.
function leftShift_(x,n) {
    var i;
    var k=Math.floor(n/bpe);
    if (k) {
        for (i=x.length; i>=k; i--) //left shift x by k elements
            x[i]=x[i-k];
        for (;i>=0;i--)
            x[i]=0;
        n%=bpe;
    }
    if (!n)
        return;
    for (i=x.length-1;i>0;i--) {
        x[i]=mask & ((x[i]<<n) | (x[i-1]>>(bpe-n)));
    }
    x[i]=mask & (x[i]<<n);
}

//do x=x*n where x is a bigInt and n is an integer.
//x must be large enough to hold the result.
function multInt_(x,n) {
    var i,k,c,b;
    if (!n)
        return;
    k=x.length;
    c=0;
    for (i=0;i<k;i++) {
        c+=x[i]*n;
        b=0;
        if (c<0) {
            b=-(c>>bpe);
            c+=b*radix;
        }
        x[i]=c & mask;
        c=(c>>bpe)-b;
    }
}

//do x=floor(x/n) for bigInt x and integer n, and return the remainder
function divInt_(x,n) {
    var i,r=0,s;
    for (i=x.length-1;i>=0;i--) {
        s=r*radix+x[i];
        x[i]=Math.floor(s/n);
        r=s%n;
    }
    return r;
}

//do the linear combination x=a*x+b*y for bigInts x and y, and integers a and b.
//x must be large enough to hold the answer.
function linComb_(x,y,a,b) {
    var i,c,k,kk;
    k=x.length<y.length ? x.length : y.length;
    kk=x.length;
    for (c=0,i=0;i<k;i++) {
        c+=a*x[i]+b*y[i];
        x[i]=c & mask;
        c>>=bpe;
    }
    for (i=k;i<kk;i++) {
        c+=a*x[i];
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do the linear combination x=a*x+b*(y<<(ys*bpe)) for bigInts x and y, and integers a, b and ys.
//x must be large enough to hold the answer.
function linCombShift_(x,y,b,ys) {
    var i,c,k,kk;
    k=x.length<ys+y.length ? x.length : ys+y.length;
    kk=x.length;
    for (c=0,i=ys;i<k;i++) {
        c+=x[i]+b*y[i-ys];
        x[i]=c & mask;
        c>>=bpe;
    }
    for (i=k;c && i<kk;i++) {
        c+=x[i];
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do x=x+(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
//x must be large enough to hold the answer.
function addShift_(x,y,ys) {
    var i,c,k,kk;
    k=x.length<ys+y.length ? x.length : ys+y.length;
    kk=x.length;
    for (c=0,i=ys;i<k;i++) {
        c+=x[i]+y[i-ys];
        x[i]=c & mask;
        c>>=bpe;
    }
    for (i=k;c && i<kk;i++) {
        c+=x[i];
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do x=x-(y<<(ys*bpe)) for bigInts x and y, and integers a,b and ys.
//x must be large enough to hold the answer.
function subShift_(x,y,ys) {
    var i,c,k,kk;
    k=x.length<ys+y.length ? x.length : ys+y.length;
    kk=x.length;
    for (c=0,i=ys;i<k;i++) {
        c+=x[i]-y[i-ys];
        x[i]=c & mask;
        c>>=bpe;
    }
    for (i=k;c && i<kk;i++) {
        c+=x[i];
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do x=x-y for bigInts x and y.
//x must be large enough to hold the answer.
//negative answers will be 2s complement
function sub_(x,y) {
    var i,c,k,kk;
    k=x.length<y.length ? x.length : y.length;
    for (c=0,i=0;i<k;i++) {
        c+=x[i]-y[i];
        x[i]=c & mask;
        c>>=bpe;
    }
    for (i=k;c && i<x.length;i++) {
        c+=x[i];
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do x=x+y for bigInts x and y.
//x must be large enough to hold the answer.
function add_(x,y) {
    var i,c,k,kk;
    k=x.length<y.length ? x.length : y.length;
    for (c=0,i=0;i<k;i++) {
        c+=x[i]+y[i];
        x[i]=c & mask;
        c>>=bpe;
    }
    for (i=k;c && i<x.length;i++) {
        c+=x[i];
        x[i]=c & mask;
        c>>=bpe;
    }
}

//do x=x*y for bigInts x and y.  This is faster when y<x.
function mult_(x,y) {
    var i;
    if (ss.length!=2*x.length)
        ss=new Array(2*x.length);
    copyInt_(ss,0);
    for (i=0;i<y.length;i++)
        if (y[i])
            linCombShift_(ss,x,y[i],i);   //ss=1*ss+y[i]*(x<<(i*bpe))
    copy_(x,ss);
}

//do x=x mod n for bigInts x and n.
function mod_(x,n) {
    if (s4.length!=x.length)
        s4=dup(x);
    else
        copy_(s4,x);
    if (s5.length!=x.length)
        s5=dup(x);
    divide_(s4,n,s5,x);  //x = remainder of s4 / n
}

//do x=x*y mod n for bigInts x,y,n.
//for greater speed, let y<x.
function multMod_(x,y,n) {
    var i;
    if (s0.length!=2*x.length)
        s0=new Array(2*x.length);
    copyInt_(s0,0);
    for (i=0;i<y.length;i++)
        if (y[i])
            linCombShift_(s0,x,y[i],i);   //s0=1*s0+y[i]*(x<<(i*bpe))
    mod_(s0,n);
    copy_(x,s0);
}

//do x=x*x mod n for bigInts x,n.
function squareMod_(x,n) {
    var i,j,d,c,kx,kn,k;
    for (kx=x.length; kx>0 && !x[kx-1]; kx--);  //ignore leading zeros in x
    k=kx>n.length ? 2*kx : 2*n.length; //k=# elements in the product, which is twice the elements in the larger of x and n
    if (s0.length!=k)
        s0=new Array(k);
    copyInt_(s0,0);
    for (i=0;i<kx;i++) {
        c=s0[2*i]+x[i]*x[i];
        s0[2*i]=c & mask;
        c>>=bpe;
        for (j=i+1;j<kx;j++) {
            c=s0[i+j]+2*x[i]*x[j]+c;
            s0[i+j]=(c & mask);
            c>>=bpe;
        }
        s0[i+kx]=c;
    }
    mod_(s0,n);
    copy_(x,s0);
}

//return x with exactly k leading zero elements
function trim(x,k) {
    var i,y;
    for (i=x.length; i>0 && !x[i-1]; i--);
    y=new Array(i+k);
    copy_(y,x);
    return y;
}

//do x=x**y mod n, where x,y,n are bigInts and ** is exponentiation.  0**0=1.
//this is faster when n is odd.  x usually needs to have as many elements as n.
function powMod_(x,y,n) {
    var k1,k2,kn,np;
    if(s7.length!=n.length)
        s7=dup(n);

    //for even modulus, use a simple square-and-multiply algorithm,
    //rather than using the more complex Montgomery algorithm.
    if ((n[0]&1)==0) {
        copy_(s7,x);
        copyInt_(x,1);
        while(!equalsInt(y,0)) {
            if (y[0]&1)
                multMod_(x,s7,n);
            divInt_(y,2);
            squareMod_(s7,n);
        }
        return;
    }

    //calculate np from n for the Montgomery multiplications
    copyInt_(s7,0);
    for (kn=n.length;kn>0 && !n[kn-1];kn--);
    np=radix-inverseModInt(modInt(n,radix),radix);
    s7[kn]=1;
    multMod_(x ,s7,n);   // x = x * 2**(kn*bp) mod n

    if (s3.length!=x.length)
        s3=dup(x);
    else
        copy_(s3,x);

    for (k1=y.length-1;k1>0 & !y[k1]; k1--);  //k1=first nonzero element of y
    if (y[k1]==0) {  //anything to the 0th power is 1
        copyInt_(x,1);
        return;
    }
    for (k2=1<<(bpe-1);k2 && !(y[k1] & k2); k2>>=1);  //k2=position of first 1 bit in y[k1]
    for (;;) {
        if (!(k2>>=1)) {  //look at next bit of y
            k1--;
            if (k1<0) {
                mont_(x,one,n,np);
                return;
            }
            k2=1<<(bpe-1);
        }
        mont_(x,x,n,np);

        if (k2 & y[k1]) //if next bit is a 1
            mont_(x,s3,n,np);
    }
}


//do x=x*y*Ri mod n for bigInts x,y,n, 
//  where Ri = 2**(-kn*bpe) mod n, and kn is the 
//  number of elements in the n array, not 
//  counting leading zeros.  
//x array must have at least as many elemnts as the n array
//It's OK if x and y are the same variable.
//must have:
//  x,y < n
//  n is odd
//  np = -(n^(-1)) mod radix
function mont_(x,y,n,np) {
    var i,j,c,ui,t,ks;
    var kn=n.length;
    var ky=y.length;

    if (sa.length!=kn)
        sa=new Array(kn);

    copyInt_(sa,0);

    for (;kn>0 && n[kn-1]==0;kn--); //ignore leading zeros of n
    for (;ky>0 && y[ky-1]==0;ky--); //ignore leading zeros of y
    ks=sa.length-1; //sa will never have more than this many nonzero elements.

    //the following loop consumes 95% of the runtime for randTruePrime_() and powMod_() for large numbers
    for (i=0; i<kn; i++) {
        t=sa[0]+x[i]*y[0];
        ui=((t & mask) * np) & mask;  //the inner "& mask" was needed on Safari (but not MSIE) at one time
        c=(t+ui*n[0]) >> bpe;
        t=x[i];

        //do sa=(sa+x[i]*y+ui*n)/b   where b=2**bpe.  Loop is unrolled 5-fold for speed
        j=1;
        for (;j<ky-4;) { c+=sa[j]+ui*n[j]+t*y[j];   sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j]+t*y[j];   sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j]+t*y[j];   sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j]+t*y[j];   sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j]+t*y[j];   sa[j-1]=c & mask;   c>>=bpe;   j++; }
        for (;j<ky;)   { c+=sa[j]+ui*n[j]+t*y[j];   sa[j-1]=c & mask;   c>>=bpe;   j++; }
        for (;j<kn-4;) { c+=sa[j]+ui*n[j];          sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j];          sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j];          sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j];          sa[j-1]=c & mask;   c>>=bpe;   j++;
            c+=sa[j]+ui*n[j];          sa[j-1]=c & mask;   c>>=bpe;   j++; }
        for (;j<kn;)   { c+=sa[j]+ui*n[j];          sa[j-1]=c & mask;   c>>=bpe;   j++; }
        for (;j<ks;)   { c+=sa[j];                  sa[j-1]=c & mask;   c>>=bpe;   j++; }
        sa[j-1]=c & mask;
    }

    if (!greater(n,sa))
        sub_(sa,n);
    copy_(x,sa);
}

/*!
 * Webogram v0.7.0 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

function bigint (num) {
  return new BigInteger(num.toString(16), 16)
}

function bigStringInt (strNum) {
  return new BigInteger(strNum, 10)
}

function dHexDump (bytes) {
  var arr = []
  for (var i = 0; i < bytes.length; i++) {
    if (i && !(i % 2)) {
      if (!(i % 16)) {
        arr.push('\n')
      } else if (!(i % 4)) {
        arr.push('  ')
      } else {
        arr.push(' ')
      }
    }
    arr.push((bytes[i] < 16 ? '0' : '') + bytes[i].toString(16))
  }

  console.log(arr.join(''))
}

function bytesToHex (bytes) {
  bytes = bytes || []
  var arr = []
  for (var i = 0; i < bytes.length; i++) {
    arr.push((bytes[i] < 16 ? '0' : '') + (bytes[i] || 0).toString(16))
  }
  return arr.join('')
}

function bytesFromHex (hexString) {
  var len = hexString.length,
    i
  var start = 0
  var bytes = []

  if (hexString.length % 2) {
    bytes.push(parseInt(hexString.charAt(0), 16))
    start++
  }

  for (i = start; i < len; i += 2) {
    bytes.push(parseInt(hexString.substr(i, 2), 16))
  }

  return bytes
}

function bytesToBase64 (bytes) {
  var mod3
  var result = ''

  for (var nLen = bytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    mod3 = nIdx % 3
    nUint24 |= bytes[nIdx] << (16 >>> mod3 & 24)
    if (mod3 === 2 || nLen - nIdx === 1) {
      result += String.fromCharCode(
        uint6ToBase64(nUint24 >>> 18 & 63),
        uint6ToBase64(nUint24 >>> 12 & 63),
        uint6ToBase64(nUint24 >>> 6 & 63),
        uint6ToBase64(nUint24 & 63)
      )
      nUint24 = 0
    }
  }

  return result.replace(/A(?=A$|$)/g, '=')
}

function uint6ToBase64 (nUint6) {
  return nUint6 < 26
    ? nUint6 + 65
    : nUint6 < 52
      ? nUint6 + 71
      : nUint6 < 62
        ? nUint6 - 4
        : nUint6 === 62
          ? 43
          : nUint6 === 63
            ? 47
            : 65
}

function base64ToBlob (base64str, mimeType) {
  var sliceSize = 1024
  var byteCharacters = atob(base64str)
  var bytesLength = byteCharacters.length
  var slicesCount = Math.ceil(bytesLength / sliceSize)
  var byteArrays = new Array(slicesCount)

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize
    var end = Math.min(begin + sliceSize, bytesLength)

    var bytes = new Array(end - begin)
    for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0)
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes)
  }

  return blobConstruct(byteArrays, mimeType)
}

function dataUrlToBlob (url) {
  // var name = 'b64blob ' + url.length
  // console.time(name)
  var urlParts = url.split(',')
  var base64str = urlParts[1]
  var mimeType = urlParts[0].split(':')[1].split(';')[0]
  var blob = base64ToBlob(base64str, mimeType)
  // console.timeEnd(name)
  return blob
}

function blobConstruct (blobParts, mimeType) {
  var blob
  var safeMimeType = blobSafeMimeType(mimeType)
  try {
    blob = new Blob(blobParts, {type: safeMimeType})
  } catch (e) {
    var bb = new BlobBuilder
    angular.forEach(blobParts, function (blobPart) {
      bb.append(blobPart)
    })
    blob = bb.getBlob(safeMimeType)
  }
  return blob
}

function blobSafeMimeType(mimeType) {
  if ([
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/bmp',
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'audio/ogg',
    'audio/mpeg',
    'audio/mp4',
  ].indexOf(mimeType) == -1) {
    return 'application/octet-stream'
  }
  return mimeType
}

function bytesCmp (bytes1, bytes2) {
  var len = bytes1.length
  if (len != bytes2.length) {
    return false
  }

  for (var i = 0; i < len; i++) {
    if (bytes1[i] != bytes2[i]) {
      return false
    }
  }
  return true
}

function bytesXor (bytes1, bytes2) {
  var len = bytes1.length
  var bytes = []

  for (var i = 0; i < len; ++i) {
    bytes[i] = bytes1[i] ^ bytes2[i]
  }

  return bytes
}

function bytesToWords (bytes) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  var len = bytes.length
  var words = []
  var i
  for (i = 0; i < len; i++) {
    words[i >>> 2] |= bytes[i] << (24 - (i % 4) * 8)
  }

  return new CryptoJS.lib.WordArray.init(words, len)
}

function bytesFromWords (wordArray) {
  var words = wordArray.words
  var sigBytes = wordArray.sigBytes
  var bytes = []

  for (var i = 0; i < sigBytes; i++) {
    bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)
  }

  return bytes
}

function bytesFromBigInt (bigInt, len) {
  var bytes = bigInt.toByteArray()

  if (len && bytes.length < len) {
    var padding = []
    for (var i = 0, needPadding = len - bytes.length; i < needPadding; i++) {
      padding[i] = 0
    }
    if (bytes instanceof ArrayBuffer) {
      bytes = bufferConcat(padding, bytes)
    } else {
      bytes = padding.concat(bytes)
    }
  }else {
    while (!bytes[0] && (!len || bytes.length > len)) {
      bytes = bytes.slice(1)
    }
  }

  return bytes
}

function bytesFromLeemonBigInt (bigInt, len) {
  var str = bigInt2str(bigInt, 16)
  return bytesFromHex(str)
}

function bytesToArrayBuffer (b) {
  return (new Uint8Array(b)).buffer
}

function convertToArrayBuffer (bytes) {
  // Be careful with converting subarrays!!
  if (bytes instanceof ArrayBuffer) {
    return bytes
  }
  if (bytes.buffer !== undefined &&
    bytes.buffer.byteLength == bytes.length * bytes.BYTES_PER_ELEMENT) {
    return bytes.buffer
  }
  return bytesToArrayBuffer(bytes)
}

function convertToUint8Array (bytes) {
  if (bytes.buffer !== undefined) {
    return bytes
  }
  return new Uint8Array(bytes)
}

function convertToByteArray (bytes) {
  if (Array.isArray(bytes)) {
    return bytes
  }
  bytes = convertToUint8Array(bytes)
  var newBytes = []
  for (var i = 0, len = bytes.length; i < len; i++) {
    newBytes.push(bytes[i])
  }
  return newBytes
}

function bytesFromArrayBuffer (buffer) {
  var len = buffer.byteLength
  var byteView = new Uint8Array(buffer)
  var bytes = []

  for (var i = 0; i < len; ++i) {
    bytes[i] = byteView[i]
  }

  return bytes
}

function bufferConcat (buffer1, buffer2) {
  var l1 = buffer1.byteLength || buffer1.length
  var l2 = buffer2.byteLength || buffer2.length
  var tmp = new Uint8Array(l1 + l2)
  tmp.set(buffer1 instanceof ArrayBuffer ? new Uint8Array(buffer1) : buffer1, 0)
  tmp.set(buffer2 instanceof ArrayBuffer ? new Uint8Array(buffer2) : buffer2, l1)

  return tmp.buffer
}

function longToInts (sLong) {
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000))

  return [divRem[0].intValue(), divRem[1].intValue()]
}

function longToBytes (sLong) {
  return bytesFromWords({words: longToInts(sLong), sigBytes: 8}).reverse()
}

function longFromInts (high, low) {
  return bigint(high).shiftLeft(32).add(bigint(low)).toString(10)
}

function intToUint (val) {
  val = parseInt(val)
  if (val < 0) {
    val = val + 4294967296
  }
  return val
}

function uintToInt (val) {
  if (val > 2147483647) {
    val = val - 4294967296
  }
  return val
}

function sha1HashSync (bytes) {
  this.rushaInstance = this.rushaInstance || new Rusha(1024 * 1024)

  // console.log(dT(), 'SHA-1 hash start', bytes.byteLength || bytes.length)
  var hashBytes = rushaInstance.rawDigest(bytes).buffer
  // console.log(dT(), 'SHA-1 hash finish')

  return hashBytes
}

function sha1BytesSync (bytes) {
  return bytesFromArrayBuffer(sha1HashSync(bytes))
}

function sha256HashSync (bytes) {
  // console.log(dT(), 'SHA-2 hash start', bytes.byteLength || bytes.length)
  var hashWords = CryptoJS.SHA256(bytesToWords(bytes))
  // console.log(dT(), 'SHA-2 hash finish')

  var hashBytes = bytesFromWords(hashWords)

  return hashBytes
}

function rsaEncrypt (publicKey, bytes) {
  bytes = addPadding(bytes, 255)

  // console.log('RSA encrypt start')
  var N = new BigInteger(publicKey.modulus, 16)
  var E = new BigInteger(publicKey.exponent, 16)
  var X = new BigInteger(bytes)
  var encryptedBigInt = X.modPowInt(E, N),
    encryptedBytes = bytesFromBigInt(encryptedBigInt, 256)
    // console.log('RSA encrypt finish')

  return encryptedBytes
}

function addPadding (bytes, blockSize, zeroes) {
  blockSize = blockSize || 16
  var len = bytes.byteLength || bytes.length
  var needPadding = blockSize - (len % blockSize)
  if (needPadding > 0 && needPadding < blockSize) {
    var padding = new Array(needPadding)
    if (zeroes) {
      for (var i = 0; i < needPadding; i++) {
        padding[i] = 0
      }
    } else {
      (new SecureRandom()).nextBytes(padding)
    }

    if (bytes instanceof ArrayBuffer) {
      bytes = bufferConcat(bytes, padding)
    } else {
      bytes = bytes.concat(padding)
    }
  }

  return bytes
}

function aesEncryptSync (bytes, keyBytes, ivBytes) {
  var len = bytes.byteLength || bytes.length

  // console.log(dT(), 'AES encrypt start', len/*, bytesToHex(keyBytes), bytesToHex(ivBytes)*/)
  bytes = addPadding(bytes)

  var encryptedWords = CryptoJS.AES.encrypt(bytesToWords(bytes), bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  }).ciphertext

  var encryptedBytes = bytesFromWords(encryptedWords)
  // console.log(dT(), 'AES encrypt finish')

  return encryptedBytes
}

function aesDecryptSync (encryptedBytes, keyBytes, ivBytes) {

  // console.log(dT(), 'AES decrypt start', encryptedBytes.length)
  var decryptedWords = CryptoJS.AES.decrypt({ciphertext: bytesToWords(encryptedBytes)}, bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  })

  var bytes = bytesFromWords(decryptedWords)
  // console.log(dT(), 'AES decrypt finish')

  return bytes
}

function gzipUncompress (bytes) {
  // console.log('Gzip uncompress start')
  var result = (new Zlib.Gunzip(bytes)).decompress()
  // console.log('Gzip uncompress finish')
  return result
}

function nextRandomInt (maxValue) {
  return Math.floor(Math.random() * maxValue)
}

function pqPrimeFactorization (pqBytes) {
  var what = new BigInteger(pqBytes)
  var result = false

  // console.log(dT(), 'PQ start', pqBytes, what.toString(16), what.bitLength())

  try {
    result = pqPrimeLeemon(str2bigInt(what.toString(16), 16, Math.ceil(64 / bpe) + 1))
  } catch (e) {
    console.error('Pq leemon Exception', e)
  }

  if (result === false && what.bitLength() <= 64) {
    // console.time('PQ long')
    try {
      result = pqPrimeLong(goog.math.Long.fromString(what.toString(16), 16))
    } catch (e) {
      console.error('Pq long Exception', e)
    }
  // console.timeEnd('PQ long')
  }
  // console.log(result)

  if (result === false) {
    // console.time('pq BigInt')
    result = pqPrimeBigInteger(what)
  // console.timeEnd('pq BigInt')
  }

  // console.log(dT(), 'PQ finish')

  return result
}

function pqPrimeBigInteger (what) {
  var it = 0,
    g
  for (var i = 0; i < 3; i++) {
    var q = (nextRandomInt(128) & 15) + 17
    var x = bigint(nextRandomInt(1000000000) + 1)
    var y = x.clone()
    var lim = 1 << (i + 18)

    for (var j = 1; j < lim; j++) {
      ++it
      var a = x.clone()
      var b = x.clone()
      var c = bigint(q)

      while (!b.equals(BigInteger.ZERO)) {
        if (!b.and(BigInteger.ONE).equals(BigInteger.ZERO)) {
          c = c.add(a)
          if (c.compareTo(what) > 0) {
            c = c.subtract(what)
          }
        }
        a = a.add(a)
        if (a.compareTo(what) > 0) {
          a = a.subtract(what)
        }
        b = b.shiftRight(1)
      }

      x = c.clone()
      var z = x.compareTo(y) < 0 ? y.subtract(x) : x.subtract(y)
      g = z.gcd(what)
      if (!g.equals(BigInteger.ONE)) {
        break
      }
      if ((j & (j - 1)) == 0) {
        y = x.clone()
      }
    }
    if (g.compareTo(BigInteger.ONE) > 0) {
      break
    }
  }

  var f = what.divide(g), P, Q

  if (g.compareTo(f) > 0) {
    P = f
    Q = g
  } else {
    P = g
    Q = f
  }

  return [bytesFromBigInt(P), bytesFromBigInt(Q), it]
}

function gcdLong (a, b) {
  while (a.notEquals(goog.math.Long.ZERO) && b.notEquals(goog.math.Long.ZERO)) {
    while (b.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      b = b.shiftRight(1)
    }
    while (a.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      a = a.shiftRight(1)
    }
    if (a.compare(b) > 0) {
      a = a.subtract(b)
    } else {
      b = b.subtract(a)
    }
  }
  return b.equals(goog.math.Long.ZERO) ? a : b
}

function pqPrimeLong (what) {
  var it = 0,
    g
  for (var i = 0; i < 3; i++) {
    var q = goog.math.Long.fromInt((nextRandomInt(128) & 15) + 17)
    var x = goog.math.Long.fromInt(nextRandomInt(1000000000) + 1)
    var y = x
    var lim = 1 << (i + 18)

    for (var j = 1; j < lim; j++) {
      ++it
      var a = x
      var b = x
      var c = q

      while (b.notEquals(goog.math.Long.ZERO)) {
        if (b.and(goog.math.Long.ONE).notEquals(goog.math.Long.ZERO)) {
          c = c.add(a)
          if (c.compare(what) > 0) {
            c = c.subtract(what)
          }
        }
        a = a.add(a)
        if (a.compare(what) > 0) {
          a = a.subtract(what)
        }
        b = b.shiftRight(1)
      }

      x = c
      var z = x.compare(y) < 0 ? y.subtract(x) : x.subtract(y)
      g = gcdLong(z, what)
      if (g.notEquals(goog.math.Long.ONE)) {
        break
      }
      if ((j & (j - 1)) == 0) {
        y = x
      }
    }
    if (g.compare(goog.math.Long.ONE) > 0) {
      break
    }
  }

  var f = what.div(g), P, Q

  if (g.compare(f) > 0) {
    P = f
    Q = g
  } else {
    P = g
    Q = f
  }

  return [bytesFromHex(P.toString(16)), bytesFromHex(Q.toString(16)), it]
}

function pqPrimeLeemon (what) {
  var minBits = 64
  var minLen = Math.ceil(minBits / bpe) + 1
  var it = 0
  var i, q
  var j, lim
  var g, P
  var Q
  var a = new Array(minLen)
  var b = new Array(minLen)
  var c = new Array(minLen)
  var g = new Array(minLen)
  var z = new Array(minLen)
  var x = new Array(minLen)
  var y = new Array(minLen)

  for (i = 0; i < 3; i++) {
    q = (nextRandomInt(128) & 15) + 17
    copyInt_(x, nextRandomInt(1000000000) + 1)
    copy_(y, x)
    lim = 1 << (i + 18)

    for (j = 1; j < lim; j++) {
      ++it
      copy_(a, x)
      copy_(b, x)
      copyInt_(c, q)

      while (!isZero(b)) {
        if (b[0] & 1) {
          add_(c, a)
          if (greater(c, what)) {
            sub_(c, what)
          }
        }
        add_(a, a)
        if (greater(a, what)) {
          sub_(a, what)
        }
        rightShift_(b, 1)
      }

      copy_(x, c)
      if (greater(x, y)) {
        copy_(z, x)
        sub_(z, y)
      } else {
        copy_(z, y)
        sub_(z, x)
      }
      eGCD_(z, what, g, a, b)
      if (!equalsInt(g, 1)) {
        break
      }
      if ((j & (j - 1)) == 0) {
        copy_(y, x)
      }
    }
    if (greater(g, one)) {
      break
    }
  }

  divide_(what, g, x, y)

  if (greater(g, x)) {
    P = x
    Q = g
  } else {
    P = g
    Q = x
  }

  // console.log(dT(), 'done', bigInt2str(what, 10), bigInt2str(P, 10), bigInt2str(Q, 10))

  return [bytesFromLeemonBigInt(P), bytesFromLeemonBigInt(Q), it]
}

function bytesModPow (x, y, m) {
  try {
    var xBigInt = str2bigInt(bytesToHex(x), 16)
    var yBigInt = str2bigInt(bytesToHex(y), 16)
    var mBigInt = str2bigInt(bytesToHex(m), 16)
    var resBigInt = powMod(xBigInt, yBigInt, mBigInt)

    return bytesFromHex(bigInt2str(resBigInt, 16))
  } catch (e) {
    console.error('mod pow error', e)
  }

  return bytesFromBigInt(new BigInteger(x).modPow(new BigInteger(y), new BigInteger(m)), 256)
}

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * CryptoJS core components.
 */
var CryptoJS = CryptoJS || (function (Math, undefined) {
    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = (function () {
        function F() {}

        return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function (overrides) {
                // Spawn
                F.prototype = this;
                var subtype = new F();

                // Augment
                if (overrides) {
                    subtype.mixIn(overrides);
                }

                // Create default initializer
                if (!subtype.hasOwnProperty('init')) {
                    subtype.init = function () {
                        subtype.$super.init.apply(this, arguments);
                    };
                }

                // Initializer's prototype is the subtype object
                subtype.init.prototype = subtype;

                // Reference supertype
                subtype.$super = this;

                return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function () {
                var instance = this.extend();
                instance.init.apply(instance, arguments);

                return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function () {
            },

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function (properties) {
                for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                    }
                }

                // IE won't copy toString using the loop above
                if (properties.hasOwnProperty('toString')) {
                    this.toString = properties.toString;
                }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function () {
                return this.init.prototype.extend(this);
            }
        };
    }());

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 4;
            }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function (encoder) {
            return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function (wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;

            // Clamp excess bits
            this.clamp();

            // Concat
            if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                }
            } else if (thatWords.length > 0xffff) {
                // Copy one word at a time
                for (var i = 0; i < thatSigBytes; i += 4) {
                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                }
            } else {
                // Copy all words at once
                // thisWords.push.apply(thisWords, thatWords);

                // HOTFIX from: https://code.google.com/p/crypto-js/issues/detail?id=90
                for (var i = 0; i < thatWords.length; i++) {
                  thisWords.push(thatWords[i]);
                }
            }
            this.sigBytes += thatSigBytes;

            // Chainable
            return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function () {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes;

            // Clamp
            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
            words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);

            return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function (nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
                words.push((Math.random() * 0x100000000) | 0);
            }

            return new WordArray.init(words, nBytes);
        }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function (hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length;

            // Convert
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
            }

            return new WordArray.init(words, hexStrLength / 2);
        }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function (latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length;

            // Convert
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
            }

            return new WordArray.init(words, latin1StrLength);
        }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function (wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
                throw new Error('Malformed UTF-8 data');
            }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function (utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function () {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function (data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
                data = Utf8.parse(data);
            }

            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function (doFlush) {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;

            // Count blocks ready
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }

            // Count words ready
            var nWordsReady = nBlocksReady * blockSize;

            // Count bytes ready
            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

            // Process blocks
            if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                }

                // Remove processed words
                var processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
            }

            // Return processed words
            return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();

            return clone;
        },

        _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function (cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Set initial values
            this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-hasher logic
            this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function (messageUpdate) {
            // Append
            this._append(messageUpdate);

            // Update the hash
            this._process();

            // Chainable
            return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }

            // Perform concrete-hasher logic
            var hash = this._doFinalize();

            return hash;
        },

        blockSize: 512/32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function (hasher) {
            return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
            };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function (hasher) {
            return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
        }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};

    return C;
}(Math));



/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Cipher core components.
 */
CryptoJS.lib.Cipher || (function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var Base64 = C_enc.Base64;
    var C_algo = C.algo;
    var EvpKDF = C_algo.EvpKDF;

    /**
     * Abstract base cipher template.
     *
     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
     */
    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         *
         * @property {WordArray} iv The IV to use for this operation.
         */
        cfg: Base.extend(),

        /**
         * Creates this cipher in encryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
         */
        createEncryptor: function (key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
        },

        /**
         * Creates this cipher in decryption mode.
         *
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {Cipher} A cipher instance.
         *
         * @static
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
         */
        createDecryptor: function (key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
        },

        /**
         * Initializes a newly created cipher.
         *
         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @example
         *
         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
         */
        init: function (xformMode, key, cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Store transform mode and key
            this._xformMode = xformMode;
            this._key = key;

            // Set initial values
            this.reset();
        },

        /**
         * Resets this cipher to its initial state.
         *
         * @example
         *
         *     cipher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-cipher logic
            this._doReset();
        },

        /**
         * Adds data to be encrypted or decrypted.
         *
         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
         *
         * @return {WordArray} The data after processing.
         *
         * @example
         *
         *     var encrypted = cipher.process('data');
         *     var encrypted = cipher.process(wordArray);
         */
        process: function (dataUpdate) {
            // Append
            this._append(dataUpdate);

            // Process available blocks
            return this._process();
        },

        /**
         * Finalizes the encryption or decryption process.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
         *
         * @return {WordArray} The data after final processing.
         *
         * @example
         *
         *     var encrypted = cipher.finalize();
         *     var encrypted = cipher.finalize('data');
         *     var encrypted = cipher.finalize(wordArray);
         */
        finalize: function (dataUpdate) {
            // Final data update
            if (dataUpdate) {
                this._append(dataUpdate);
            }

            // Perform concrete-cipher logic
            var finalProcessedData = this._doFinalize();

            return finalProcessedData;
        },

        keySize: 128/32,

        ivSize: 128/32,

        _ENC_XFORM_MODE: 1,

        _DEC_XFORM_MODE: 2,

        /**
         * Creates shortcut functions to a cipher's object interface.
         *
         * @param {Cipher} cipher The cipher to create a helper for.
         *
         * @return {Object} An object with encrypt and decrypt shortcut functions.
         *
         * @static
         *
         * @example
         *
         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
         */
        _createHelper: (function () {
            function selectCipherStrategy(key) {
                if (typeof key == 'string') {
                    return PasswordBasedCipher;
                } else {
                    return SerializableCipher;
                }
            }

            return function (cipher) {
                return {
                    encrypt: function (message, key, cfg) {
                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                    },

                    decrypt: function (ciphertext, key, cfg) {
                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                    }
                };
            };
        }())
    });

    /**
     * Abstract base stream cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
     */
    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
        _doFinalize: function () {
            // Process partial blocks
            var finalProcessedBlocks = this._process(!!'flush');

            return finalProcessedBlocks;
        },

        blockSize: 1
    });

    /**
     * Mode namespace.
     */
    var C_mode = C.mode = {};

    /**
     * Abstract base block cipher mode template.
     */
    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
        /**
         * Creates this mode for encryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
         */
        createEncryptor: function (cipher, iv) {
            return this.Encryptor.create(cipher, iv);
        },

        /**
         * Creates this mode for decryption.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @static
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
         */
        createDecryptor: function (cipher, iv) {
            return this.Decryptor.create(cipher, iv);
        },

        /**
         * Initializes a newly created mode.
         *
         * @param {Cipher} cipher A block cipher instance.
         * @param {Array} iv The IV words.
         *
         * @example
         *
         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
         */
        init: function (cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
        }
    });

    /**
     * Cipher Block Chaining mode.
     */
    var CBC = C_mode.CBC = (function () {
        /**
         * Abstract base CBC mode.
         */
        var CBC = BlockCipherMode.extend();

        /**
         * CBC encryptor.
         */
        CBC.Encryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                // XOR and encrypt
                xorBlock.call(this, words, offset, blockSize);
                cipher.encryptBlock(words, offset);

                // Remember this block to use with next block
                this._prevBlock = words.slice(offset, offset + blockSize);
            }
        });

        /**
         * CBC decryptor.
         */
        CBC.Decryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                // Remember this block to use with next block
                var thisBlock = words.slice(offset, offset + blockSize);

                // Decrypt and XOR
                cipher.decryptBlock(words, offset);
                xorBlock.call(this, words, offset, blockSize);

                // This block becomes the previous block
                this._prevBlock = thisBlock;
            }
        });

        function xorBlock(words, offset, blockSize) {
            // Shortcut
            var iv = this._iv;

            // Choose mixing block
            if (iv) {
                var block = iv;

                // Remove IV for subsequent blocks
                this._iv = undefined;
            } else {
                var block = this._prevBlock;
            }

            // XOR blocks
            for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }

        return CBC;
    }());


    /**
     * Infinite Garble Extension mode.
     */
    var IGE = C_mode.IGE = (function () {
        /**
         * Abstract base IGE mode.
         */
        var IGE = BlockCipherMode.extend();

        /**
         * IGE encryptor.
         */
        IGE.Encryptor = IGE.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                if (this._ivp === undefined) {
                  this._ivp = this._iv.slice(0, blockSize);
                  this._iv2p = this._iv.slice(blockSize, blockSize + blockSize);
                }


                // Remember this block to use with next block
                var nextIv2p = words.slice(offset, offset + blockSize);

                // XOR with previous ciphertext
                xorBlock(words, this._ivp, offset, blockSize);

                // Block cipher
                cipher.encryptBlock(words, offset);

                // XOR with previous plaintext
                xorBlock(words, this._iv2p, offset, blockSize);

                this._ivp = words.slice(offset, offset + blockSize);
                this._iv2p = nextIv2p;
            }
        });

        /**
         * IGE decryptor.
         */
        IGE.Decryptor = IGE.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function (words, offset) {
                // Shortcuts
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;

                if (this._ivp === undefined) {
                  this._ivp = this._iv.slice(0, blockSize);
                  this._iv2p = this._iv.slice(blockSize, 2 * blockSize);
                }

                // Remember this block to use with next block
                var nextIvp = words.slice(offset, offset + blockSize);

                // XOR with previous ciphertext
                xorBlock(words, this._iv2p, offset, blockSize);

                // Block cipher
                cipher.decryptBlock(words, offset);

                // XOR with previous plaintext
                xorBlock(words, this._ivp, offset, blockSize);

                this._ivp = nextIvp;
                this._iv2p = words.slice(offset, offset + blockSize);
            }
        });

        function xorBlock(words, block, offset, blockSize) {
            for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }

        return IGE;
    }());

    /**
     * Padding namespace.
     */
    var C_pad = C.pad = {};

    /**
     * PKCS #5/7 padding strategy.
     */
    var Pkcs7 = C_pad.Pkcs7 = {
        /**
         * Pads data using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to pad.
         * @param {number} blockSize The multiple that the data should be padded to.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
         */
        pad: function (data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4;

            // Count padding bytes
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

            // Create padding word
            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

            // Create padding
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
                paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);

            // Add padding
            data.concat(padding);
        },

        /**
         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
         *
         * @param {WordArray} data The data to unpad.
         *
         * @static
         *
         * @example
         *
         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
         */
        unpad: function (data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

            // Remove padding
            data.sigBytes -= nPaddingBytes;
        }
    };

    var NoPadding = C_pad.NoPadding = {
        pad: function () {
        },

        unpad: function () {
        }
    };


    /**
     * Abstract base block cipher template.
     *
     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
     */
    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
        /**
         * Configuration options.
         *
         * @property {Mode} mode The block mode to use. Default: CBC
         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
         */
        cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
        }),

        reset: function () {
            // Reset cipher
            Cipher.reset.call(this);

            // Shortcuts
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;

            // Reset block mode
            if (this._xformMode == this._ENC_XFORM_MODE) {
                var modeCreator = mode.createEncryptor;
            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                var modeCreator = mode.createDecryptor;

                // Keep at least one block in the buffer for unpadding
                this._minBufferSize = 1;
            }
            this._mode = modeCreator.call(mode, this, iv && iv.words);
        },

        _doProcessBlock: function (words, offset) {
            this._mode.processBlock(words, offset);
        },

        _doFinalize: function () {
            // Shortcut
            var padding = this.cfg.padding;

            // Finalize
            if (this._xformMode == this._ENC_XFORM_MODE) {
                // Pad data
                padding.pad(this._data, this.blockSize);

                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush');
            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush');

                // Unpad data
                padding.unpad(finalProcessedBlocks);
            }

            return finalProcessedBlocks;
        },

        blockSize: 128/32
    });

    /**
     * A collection of cipher parameters.
     *
     * @property {WordArray} ciphertext The raw ciphertext.
     * @property {WordArray} key The key to this ciphertext.
     * @property {WordArray} iv The IV used in the ciphering operation.
     * @property {WordArray} salt The salt used with a key derivation function.
     * @property {Cipher} algorithm The cipher algorithm.
     * @property {Mode} mode The block mode used in the ciphering operation.
     * @property {Padding} padding The padding scheme used in the ciphering operation.
     * @property {number} blockSize The block size of the cipher.
     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
     */
    var CipherParams = C_lib.CipherParams = Base.extend({
        /**
         * Initializes a newly created cipher params object.
         *
         * @param {Object} cipherParams An object with any of the possible cipher parameters.
         *
         * @example
         *
         *     var cipherParams = CryptoJS.lib.CipherParams.create({
         *         ciphertext: ciphertextWordArray,
         *         key: keyWordArray,
         *         iv: ivWordArray,
         *         salt: saltWordArray,
         *         algorithm: CryptoJS.algo.AES,
         *         mode: CryptoJS.mode.CBC,
         *         padding: CryptoJS.pad.PKCS7,
         *         blockSize: 4,
         *         formatter: CryptoJS.format.OpenSSL
         *     });
         */
        init: function (cipherParams) {
            this.mixIn(cipherParams);
        },

        /**
         * Converts this cipher params object to a string.
         *
         * @param {Format} formatter (Optional) The formatting strategy to use.
         *
         * @return {string} The stringified cipher params.
         *
         * @throws Error If neither the formatter nor the default formatter is set.
         *
         * @example
         *
         *     var string = cipherParams + '';
         *     var string = cipherParams.toString();
         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
         */
        toString: function (formatter) {
            return (formatter || this.formatter).stringify(this);
        }
    });

    /**
     * Format namespace.
     */
    var C_format = C.format = {};

    /**
     * OpenSSL formatting strategy.
     */
    var OpenSSLFormatter = C_format.OpenSSL = {
        /**
         * Converts a cipher params object to an OpenSSL-compatible string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The OpenSSL-compatible string.
         *
         * @static
         *
         * @example
         *
         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
         */
        stringify: function (cipherParams) {
            // Shortcuts
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;

            // Format
            if (salt) {
                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
            } else {
                var wordArray = ciphertext;
            }

            return wordArray.toString(Base64);
        },

        /**
         * Converts an OpenSSL-compatible string to a cipher params object.
         *
         * @param {string} openSSLStr The OpenSSL-compatible string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
         */
        parse: function (openSSLStr) {
            // Parse base64
            var ciphertext = Base64.parse(openSSLStr);

            // Shortcut
            var ciphertextWords = ciphertext.words;

            // Test for salt
            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
                // Extract salt
                var salt = WordArray.create(ciphertextWords.slice(2, 4));

                // Remove salt from ciphertext
                ciphertextWords.splice(0, 4);
                ciphertext.sigBytes -= 16;
            }

            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
        }
    };

    /**
     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
     */
    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
        /**
         * Configuration options.
         *
         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
         */
        cfg: Base.extend({
            format: OpenSSLFormatter
        }),

        /**
         * Encrypts a message.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        encrypt: function (cipher, message, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Encrypt
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);

            // Shortcut
            var cipherCfg = encryptor.cfg;

            // Create and return serializable cipher params
            return CipherParams.create({
                ciphertext: ciphertext,
                key: key,
                iv: cipherCfg.iv,
                algorithm: cipher,
                mode: cipherCfg.mode,
                padding: cipherCfg.padding,
                blockSize: cipher.blockSize,
                formatter: cfg.format
            });
        },

        /**
         * Decrypts serialized ciphertext.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {WordArray} key The key.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
         */
        decrypt: function (cipher, ciphertext, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);

            // Decrypt
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

            return plaintext;
        },

        /**
         * Converts serialized ciphertext to CipherParams,
         * else assumed CipherParams already and returns ciphertext unchanged.
         *
         * @param {CipherParams|string} ciphertext The ciphertext.
         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
         *
         * @return {CipherParams} The unserialized ciphertext.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
         */
        _parse: function (ciphertext, format) {
            if (typeof ciphertext == 'string') {
                return format.parse(ciphertext, this);
            } else {
                return ciphertext;
            }
        }
    });

    /**
     * Key derivation function namespace.
     */
    var C_kdf = C.kdf = {};

    /**
     * OpenSSL key derivation function.
     */
    var OpenSSLKdf = C_kdf.OpenSSL = {
        /**
         * Derives a key and IV from a password.
         *
         * @param {string} password The password to derive from.
         * @param {number} keySize The size in words of the key to generate.
         * @param {number} ivSize The size in words of the IV to generate.
         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
         *
         * @return {CipherParams} A cipher params object with the key, IV, and salt.
         *
         * @static
         *
         * @example
         *
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
         */
        execute: function (password, keySize, ivSize, salt) {
            // Generate random salt
            if (!salt) {
                salt = WordArray.random(64/8);
            }

            // Derive key and IV
            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

            // Separate key and IV
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;

            // Return params
            return CipherParams.create({ key: key, iv: iv, salt: salt });
        }
    };

    /**
     * A serializable cipher wrapper that derives the key from a password,
     * and returns ciphertext as a serializable cipher params object.
     */
    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
        /**
         * Configuration options.
         *
         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
         */
        cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
        }),

        /**
         * Encrypts a message using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {WordArray|string} message The message to encrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {CipherParams} A cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
         */
        encrypt: function (cipher, message, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Derive key and other params
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

            // Add IV to config
            cfg.iv = derivedParams.iv;

            // Encrypt
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

            // Mix in derived params
            ciphertext.mixIn(derivedParams);

            return ciphertext;
        },

        /**
         * Decrypts serialized ciphertext using a password.
         *
         * @param {Cipher} cipher The cipher algorithm to use.
         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
         * @param {string} password The password.
         * @param {Object} cfg (Optional) The configuration options to use for this operation.
         *
         * @return {WordArray} The plaintext.
         *
         * @static
         *
         * @example
         *
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
         */
        decrypt: function (cipher, ciphertext, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg);

            // Convert string to CipherParams
            ciphertext = this._parse(ciphertext, cfg.format);

            // Derive key and other params
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

            // Add IV to config
            cfg.iv = derivedParams.iv;

            // Decrypt
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

            return plaintext;
        }
    });
}());




/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var BlockCipher = C_lib.BlockCipher;
    var C_algo = C.algo;

    // Lookup tables
    var SBOX = [];
    var INV_SBOX = [];
    var SUB_MIX_0 = [];
    var SUB_MIX_1 = [];
    var SUB_MIX_2 = [];
    var SUB_MIX_3 = [];
    var INV_SUB_MIX_0 = [];
    var INV_SUB_MIX_1 = [];
    var INV_SUB_MIX_2 = [];
    var INV_SUB_MIX_3 = [];

    // Compute lookup tables
    (function () {
        // Compute double table
        var d = [];
        for (var i = 0; i < 256; i++) {
            if (i < 128) {
                d[i] = i << 1;
            } else {
                d[i] = (i << 1) ^ 0x11b;
            }
        }

        // Walk GF(2^8)
        var x = 0;
        var xi = 0;
        for (var i = 0; i < 256; i++) {
            // Compute sbox
            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;

            // Compute multiplication
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];

            // Compute sub bytes, mix columns tables
            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
            SUB_MIX_3[x] = t;

            // Compute inv sub bytes, inv mix columns tables
            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
            INV_SUB_MIX_3[sx] = t;

            // Compute next counter
            if (!x) {
                x = xi = 1;
            } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
            }
        }
    }());

    // Precomputed Rcon lookup
    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    /**
     * AES block cipher algorithm.
     */
    var AES = C_algo.AES = BlockCipher.extend({
        _doReset: function () {
            // Shortcuts
            var key = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;

            // Compute number of rounds
            var nRounds = this._nRounds = keySize + 6

            // Compute number of key schedule rows
            var ksRows = (nRounds + 1) * 4;

            // Compute key schedule
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                    keySchedule[ksRow] = keyWords[ksRow];
                } else {
                    var t = keySchedule[ksRow - 1];

                    if (!(ksRow % keySize)) {
                        // Rot word
                        t = (t << 8) | (t >>> 24);

                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

                        // Mix Rcon
                        t ^= RCON[(ksRow / keySize) | 0] << 24;
                    } else if (keySize > 6 && ksRow % keySize == 4) {
                        // Sub word
                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                    }

                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
            }

            // Compute inv key schedule
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;

                if (invKsRow % 4) {
                    var t = keySchedule[ksRow];
                } else {
                    var t = keySchedule[ksRow - 4];
                }

                if (invKsRow < 4 || ksRow <= 4) {
                    invKeySchedule[invKsRow] = t;
                } else {
                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
                }
            }
        },

        encryptBlock: function (M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
        },

        decryptBlock: function (M, offset) {
            // Swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;

            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

            // Inv swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
        },

        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
            // Shortcut
            var nRounds = this._nRounds;

            // Get input, add round key
            var s0 = M[offset]     ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];

            // Key schedule row counter
            var ksRow = 4;

            // Rounds
            for (var round = 1; round < nRounds; round++) {
                // Shift rows, sub bytes, mix columns, add round key
                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

                // Update state
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
            }

            // Shift rows, sub bytes, add round key
            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

            // Set output
            M[offset]     = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
        },

        keySize: 256/32
    });

    /**
     * Shortcut functions to the cipher's object interface.
     *
     * @example
     *
     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
     */
    C.AES = BlockCipher._createHelper(AES);
}());



/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
        function isPrime(n) {
            var sqrtN = Math.sqrt(n);
            for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n % factor)) {
                    return false;
                }
            }

            return true;
        }

        function getFractionalBits(n) {
            return ((n - (n | 0)) * 0x100000000) | 0;
        }

        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
            if (isPrime(n)) {
                if (nPrime < 8) {
                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

                nPrime++;
            }

            n++;
        }
    }());

    // Reusable object
    var W = [];

    /**
     * SHA-256 hash algorithm.
     */
    var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init(H.slice(0));
        },

        _doProcessBlock: function (M, offset) {
            // Shortcut
            var H = this._hash.words;

            // Working variables
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7];

            // Computation
            for (var i = 0; i < 64; i++) {
                if (i < 16) {
                    W[i] = M[offset + i] | 0;
                } else {
                    var gamma0x = W[i - 15];
                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
                                   (gamma0x >>> 3);

                    var gamma1x = W[i - 2];
                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
                                   (gamma1x >>> 10);

                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }

                var ch  = (e & f) ^ (~e & g);
                var maj = (a & b) ^ (a & c) ^ (b & c);

                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;

                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
            H[5] = (H[5] + f) | 0;
            H[6] = (H[6] + g) | 0;
            H[7] = (H[7] + h) | 0;
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            // Hash final blocks
            this._process();

            // Return final computed hash
            return this._hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */
    C.SHA256 = Hasher._createHelper(SHA256);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
}(Math));

// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Basic JavaScript BN library - subset useful for RSA encryption.

// Bits per digit
var dbits;

// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary&0xffffff)==0xefcafe);

// (public) Constructor
function BigInteger(a,b,c) {
    if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
}

// return new, unset BigInteger
function nbi() { return new BigInteger(null); }

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
    }
    return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
    }
    return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
    }
    return c;
}
if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
}
else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1<<dbits)-1);
BigInteger.prototype.DV = (1<<dbits);

var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2,BI_FP);
BigInteger.prototype.F1 = BI_FP-dbits;
BigInteger.prototype.F2 = 2*dbits-BI_FP;

// Digit conversions
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr,vv;
rr = "0".charCodeAt(0);
for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(n) { return BI_RM.charAt(n); }
function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
}

// (protected) copy this to r
function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
}

// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+this.DV;
    else this.t = 0;
}

// return bigint initialized to value
function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

// (protected) set from string and radix
function bnpFromString(s,b,signed) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
            if(s.charAt(i) == "-") mi = true;
            continue;
        }
        mi = false;
        if(sh == 0)
            this[this.t++] = x;
        else if(sh+k > this.DB) {
            this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
            this[this.t++] = (x>>(this.DB-sh));
        }
        else
            this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
    }
    // Disabled due to '-' prefix in toString
    if(k == 8 && (s[0]&0x80) != 0 && signed) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
}

// (protected) clamp off excess high words
function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
}

// (public) return string representation in given radix
function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
            if(p < k) {
                d = (this[i]&((1<<p)-1))<<(k-p);
                d |= this[--i]>>(p+=this.DB-k);
            }
            else {
                d = (this[i]>>(p-=k))&km;
                if(p <= 0) { p += this.DB; --i; }
            }
            if(d > 0) m = true;
            if(m) r += int2char(d);
        }
    }
    return m?r:"0";
}

// (public) -this
function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

// (public) |this|
function bnAbs() { return (this.s<0)?this.negate():this; }

// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
}

// returns bit length of the integer x
function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
}

// (public) return the number of bits in "this"
function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
}

// (protected) r = this << n*DB
function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
}

// (protected) r = this >> n*DB
function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
}

// (protected) r = this << n
function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
}

// (protected) r = this >> n
function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
}

// (protected) r = this - a
function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
    }
    if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
            c += this[i];
            r[i++] = c&this.DM;
            c >>= this.DB;
        }
        c += this.s;
    }
    else {
        c += this.s;
        while(i < a.t) {
            c -= a[i];
            r[i++] = c&this.DM;
            c >>= this.DB;
        }
        c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
}

// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
            r[i+x.t] -= x.DV;
            r[i+x.t+1] = 1;
        }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);  // normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y); // "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {  // Try it out
            y.dlShiftTo(j,t);
            r.subTo(t,r);
            while(r[i] < --qd) r.subTo(t,r);
        }
    }
    if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);  // Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
}

// (public) this mod a
function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
}

// Modular reduction using "classic" algorithm
function Classic(m) { this.m = m; }
function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
}
function cRevert(x) { return x; }
function cReduce(x) { x.divRemTo(this.m,null,x); }
function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;    // y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;  // y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;  // y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff; // y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;    // y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
}

// Montgomery reduction
function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
}

// xR mod m
function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
}

// x/R mod m
function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
}

// x = x/R mod m (HAC 14.32)
function montReduce(x) {
    while(x.t <= this.mt2)  // pad x so am has enough room later
        x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = "x^2/R mod m"; x != r
function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = "xy/R mod m"; x,y != r
function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

// (protected) true iff this is even
function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
}

// (public) this^e % m, 0 <= e < 2^32
function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
}

// protected
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;

// public
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;

// "constants"
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);



// Copyright (c) 2005-2009  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Extended JavaScript BN functions, required for RSA private ops.

// Version 1.1: new BigInteger("0", 10) returns "proper" zero
// Version 1.2: square() API, isProbablePrime fix

// (public)
function bnClone() { var r = nbi(); this.copyTo(r); return r; }

// (public) return value as integer
function bnIntValue() {
    if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
}

// (public) return value as byte
function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

// (public) return value as short (assumes DB>=16)
function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

// (protected) return x s.t. r^x < DV
function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

// (public) 0 if this == 0, 1 if this > 0
function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
}

// (protected) convert to radix string
function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
}

// (protected) convert from radix string
function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
            if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
            continue;
        }
        w = b*w+x;
        if(++j >= cs) {
            this.dMultiply(d);
            this.dAddOffset(w,0);
            j = 0;
            w = 0;
        }
    }
    if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
}

// (protected) alternate constructor
function bnpFromNumber(a,b,c) {
    if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
            this.fromNumber(a,c);
            if(!this.testBit(a-1))  // force MSB set
                this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
            if(this.isEven()) this.dAddOffset(1,0); // force odd
            while(!this.isProbablePrime(b)) {
                this.dAddOffset(2,0);
                if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
            }
        }
    }
    else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
    }
}

// (public) convert to bigendian byte array
function bnToByteArray(signed) {
    var i = this.t, r = new Array();
    r[0] = this.s;
    var p = this.DB-(i*this.DB)%8, d, k = 0;
    if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
            r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
            if(p < 8) {
                d = (this[i]&((1<<p)-1))<<(8-p);
                d |= this[--i]>>(p+=this.DB-8);
            }
            else {
                d = (this[i]>>(p-=8))&0xff;
                if(p <= 0) { p += this.DB; --i; }
            }
            if(signed && (d&0x80) != 0) d |= -256;
            if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
            if(k > 0 || d != this.s) r[k++] = d;
        }
    }
    return r;
}

function bnEquals(a) { return(this.compareTo(a)==0); }
function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

// (protected) r = this op a (bitwise)
function bnpBitwiseTo(a,op,r) {
    var i, f, m = Math.min(a.t,this.t);
    for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
    if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
    }
    else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
    }
    r.s = op(this.s,a.s);
    r.clamp();
}

// (public) this & a
function op_and(x,y) { return x&y; }
function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

// (public) this | a
function op_or(x,y) { return x|y; }
function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

// (public) this ^ a
function op_xor(x,y) { return x^y; }
function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

// (public) this & ~a
function op_andnot(x,y) { return x&~y; }
function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

// (public) ~this
function bnNot() {
    var r = nbi();
    for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
    r.t = this.t;
    r.s = ~this.s;
    return r;
}

// (public) this << n
function bnShiftLeft(n) {
    var r = nbi();
    if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
    return r;
}

// (public) this >> n
function bnShiftRight(n) {
    var r = nbi();
    if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
    return r;
}

// return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
    if(x == 0) return -1;
    var r = 0;
    if((x&0xffff) == 0) { x >>= 16; r += 16; }
    if((x&0xff) == 0) { x >>= 8; r += 8; }
    if((x&0xf) == 0) { x >>= 4; r += 4; }
    if((x&3) == 0) { x >>= 2; r += 2; }
    if((x&1) == 0) ++r;
    return r;
}

// (public) returns index of lowest 1-bit (or -1 if none)
function bnGetLowestSetBit() {
    for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
    if(this.s < 0) return this.t*this.DB;
    return -1;
}

// return number of 1 bits in x
function cbit(x) {
    var r = 0;
    while(x != 0) { x &= x-1; ++r; }
    return r;
}

// (public) return number of set bits
function bnBitCount() {
    var r = 0, x = this.s&this.DM;
    for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
    return r;
}

// (public) true iff nth bit is set
function bnTestBit(n) {
    var j = Math.floor(n/this.DB);
    if(j >= this.t) return(this.s!=0);
    return((this[j]&(1<<(n%this.DB)))!=0);
}

// (protected) this op (1<<n)
function bnpChangeBit(n,op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r,op,r);
    return r;
}

// (public) this | (1<<n)
function bnSetBit(n) { return this.changeBit(n,op_or); }

// (public) this & ~(1<<n)
function bnClearBit(n) { return this.changeBit(n,op_andnot); }

// (public) this ^ (1<<n)
function bnFlipBit(n) { return this.changeBit(n,op_xor); }

// (protected) r = this + a
function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
    }
    if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
            c += this[i];
            r[i++] = c&this.DM;
            c >>= this.DB;
        }
        c += this.s;
    }
    else {
        c += this.s;
        while(i < a.t) {
            c += a[i];
            r[i++] = c&this.DM;
            c >>= this.DB;
        }
        c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
}

// (public) this + a
function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

// (public) this - a
function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

// (public) this * a
function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

// (public) this^2
function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

// (public) this / a
function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

// (public) this % a
function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

// (public) [this/a,this%a]
function bnDivideAndRemainder(a) {
    var q = nbi(), r = nbi();
    this.divRemTo(a,q,r);
    return new Array(q,r);
}

// (protected) this *= n, this >= 0, 1 < n < DV
function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
}

// (protected) this += n << w words, this >= 0
function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
    }
}

// A "null" reducer
function NullExp() {}
function nNop(x) { return x; }
function nMulTo(x,y,r) { x.multiplyTo(y,r); }
function nSqrTo(x,r) { x.squareTo(r); }

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

// (public) this^e
function bnPow(e) { return this.exp(e,new NullExp()); }

// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.
function bnpMultiplyLowerTo(a,n,r) {
    var i = Math.min(this.t+a.t,n);
    r.s = 0; // assumes a,this >= 0
    r.t = i;
    while(i > 0) r[--i] = 0;
    var j;
    for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
    for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
    r.clamp();
}

// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.
function bnpMultiplyUpperTo(a,n,r) {
    --n;
    var i = r.t = this.t+a.t-n;
    r.s = 0; // assumes a,this >= 0
    while(--i >= 0) r[i] = 0;
    for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
    r.clamp();
    r.drShiftTo(1,r);
}

// Barrett modular reduction
function Barrett(m) {
    // setup Barrett
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
}

function barrettConvert(x) {
    if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
    else if(x.compareTo(this.m) < 0) return x;
    else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
}

function barrettRevert(x) { return x; }

// x = x mod m (HAC 14.42)
function barrettReduce(x) {
    x.drShiftTo(this.m.t-1,this.r2);
    if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
    this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
    this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
    while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
    x.subTo(this.r2,x);
    while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = x^2 mod m; x != r
function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = x*y mod m; x,y != r
function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

// (public) this^e % m (HAC 14.85)
function bnModPow(e,m) {
    var i = e.bitLength(), k, r = nbv(1), z;
    if(i <= 0) return r;
    else if(i < 18) k = 1;
    else if(i < 48) k = 3;
    else if(i < 144) k = 4;
    else if(i < 768) k = 5;
    else k = 6;
    if(i < 8)
        z = new Classic(m);
    else if(m.isEven())
        z = new Barrett(m);
    else
        z = new Montgomery(m);

    // precomputation
    var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
    g[1] = z.convert(this);
    if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
            g[n] = nbi();
            z.mulTo(g2,g[n-2],g[n]);
            n += 2;
        }
    }

    var j = e.t-1, w, is1 = true, r2 = nbi(), t;
    i = nbits(e[j])-1;
    while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
            w = (e[j]&((1<<(i+1))-1))<<(k1-i);
            if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) { // ret == 1, don't bother squaring or multiplying it
            g[w].copyTo(r);
            is1 = false;
        }
        else {
            while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
            if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
            z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
            z.sqrTo(r,r2); t = r; r = r2; r2 = t;
            if(--i < 0) { i = this.DB-1; --j; }
        }
    }
    return z.revert(r);
}

// (public) gcd(this,a) (HAC 14.54)
function bnGCD(a) {
    var x = (this.s<0)?this.negate():this.clone();
    var y = (a.s<0)?a.negate():a.clone();
    if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
    var i = x.getLowestSetBit(), g = y.getLowestSetBit();
    if(g < 0) return x;
    if(i < g) g = i;
    if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
    }
    while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
            x.subTo(y,x);
            x.rShiftTo(1,x);
        }
        else {
            y.subTo(x,y);
            y.rShiftTo(1,y);
        }
    }
    if(g > 0) y.lShiftTo(g,y);
    return y;
}

// (protected) this % n, n < 2^26
function bnpModInt(n) {
    if(n <= 0) return 0;
    var d = this.DV%n, r = (this.s<0)?n-1:0;
    if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
    return r;
}

// (public) 1/this % m (HAC 14.61)
function bnModInverse(m) {
    var ac = m.isEven();
    if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
    var u = m.clone(), v = this.clone();
    var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
    while(u.signum() != 0) {
        while(u.isEven()) {
            u.rShiftTo(1,u);
            if(ac) {
                if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
                a.rShiftTo(1,a);
            }
            else if(!b.isEven()) b.subTo(m,b);
            b.rShiftTo(1,b);
        }
        while(v.isEven()) {
            v.rShiftTo(1,v);
            if(ac) {
                if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
                c.rShiftTo(1,c);
            }
            else if(!d.isEven()) d.subTo(m,d);
            d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
            u.subTo(v,u);
            if(ac) a.subTo(c,a);
            b.subTo(d,b);
        }
        else {
            v.subTo(u,v);
            if(ac) c.subTo(a,c);
            d.subTo(b,d);
        }
    }
    if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if(d.compareTo(m) >= 0) return d.subtract(m);
    if(d.signum() < 0) d.addTo(m,d); else return d;
    if(d.signum() < 0) return d.add(m); else return d;
}

var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
var lplim = (1<<26)/lowprimes[lowprimes.length-1];

// (public) test primality with certainty >= 1-.5^t
function bnIsProbablePrime(t) {
    var i, x = this.abs();
    if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
            if(x[0] == lowprimes[i]) return true;
        return false;
    }
    if(x.isEven()) return false;
    i = 1;
    while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
    }
    return x.millerRabin(t);
}

// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
function bnpMillerRabin(t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if(k <= 0) return false;
    var r = n1.shiftRight(k);
    t = (t+1)>>1;
    if(t > lowprimes.length) t = lowprimes.length;
    var a = nbi();
    for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
            var j = 1;
            while(j++ < k && y.compareTo(n1) != 0) {
                y = y.modPowInt(2,this);
                if(y.compareTo(BigInteger.ONE) == 0) return false;
            }
            if(y.compareTo(n1) != 0) return false;
        }
    }
    return true;
}

// protected
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;

// public
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

// JSBN-specific extension
BigInteger.prototype.square = bnSquare;

// BigInteger interfaces not implemented in jsbn:

// BigInteger(int signum, byte[] magnitude)
// double doubleValue()
// float floatValue()
// int hashCode()
// long longValue()
// static BigInteger valueOf(long val)





// Random number generator - requires a PRNG backend, e.g. prng4.js

// For best results, put code like
// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
// in your main HTML document.

var rng_state;
var rng_pool;
var rng_pptr;

// Mix in a 32-bit integer into the pool
function rng_seed_int(x) {
    rng_pool[rng_pptr++] ^= x & 255;
    rng_pool[rng_pptr++] ^= (x >> 8) & 255;
    rng_pool[rng_pptr++] ^= (x >> 16) & 255;
    rng_pool[rng_pptr++] ^= (x >> 24) & 255;
    if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
}

// Mix in the current time (w/milliseconds) into the pool
function rng_seed_time() {
    rng_seed_int(new Date().getTime());
}

// Initialize the pool with junk if needed.
if(rng_pool == null) {
    rng_pool = new Array();
    rng_pptr = 0;
    var global = typeof window !== 'undefined' ? window : this;
    var t;
    if (global && global.crypto && global.crypto.getRandomValues) {
        // Use webcrypto if available
        var ua = new Uint8Array(32);
        global.crypto.getRandomValues(ua);
        for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
    }
    if(navigator.appName == "Netscape" && navigator.appVersion < "5" && global && global.crypto) {
        // Extract entropy (256 bits) from NS4 RNG if available
        var z = global.crypto.random(32);
        for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
    }
    while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
    }
    rng_pptr = 0;
    rng_seed_time();
    //rng_seed_int(window.screenX);
    //rng_seed_int(window.screenY);
}

function rng_get_byte() {
    if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
            rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
    }
    // TODO: allow reseeding after first request
    return rng_state.next();
}

function rng_get_bytes(ba) {
    var i;
    for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
}

function SecureRandom() {}

SecureRandom.prototype.nextBytes = rng_get_bytes;



// prng4.js - uses Arcfour as a PRNG

function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array();
}

// Initialize arcfour context from key, an array of ints, each from [0..255]
function ARC4init(key) {
    var i, j, t;
    for(i = 0; i < 256; ++i)
        this.S[i] = i;
    j = 0;
    for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
    }
    this.i = 0;
    this.j = 0;
}

function ARC4next() {
    var t;
    this.i = (this.i + 1) & 255;
    this.j = (this.j + this.S[this.i]) & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[(t + this.S[this.i]) & 255];
}

Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;

// Plug in your RNG constructor here
function prng_newstate() {
    return new Arcfour();
}

// Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()
var rng_psize = 256;
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */

/**
 * This file also contains some modifications by Igor Zhukov in order to add custom scrollbars to EmojiMenu
 * See keyword `MODIFICATION` in source code.
 */

/*! MODIFICATION
The following line was added by Igor Zhukov in order to make library compatibile with other app parts
*/
this.goog = {provide: function () {}, math: {}};


goog.provide('goog.math.Long');



/**
 * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
 * values as *signed* integers.  See the from* functions below for more
 * convenient ways of constructing Longs.
 *
 * The internal representation of a long is the two given signed, 32-bit values.
 * We use 32-bit pieces because these are the size of integers on which
 * Javascript performs bit-operations.  For operations like addition and
 * multiplication, we split each number into 16-bit pieces, which can easily be
 * multiplied within Javascript's floating-point representation without overflow
 * or change in sign.
 *
 * In the algorithms below, we frequently reduce the negative case to the
 * positive case by negating the input(s) and then post-processing the result.
 * Note that we must ALWAYS check specially whether those values are MIN_VALUE
 * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
 * a positive number, it overflows back into a negative).  Not handling this
 * case would often result in infinite recursion.
 *
 * @param {number} low  The low (signed) 32 bits of the long.
 * @param {number} high  The high (signed) 32 bits of the long.
 * @constructor
 */
goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.

    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
};


// NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
// from* methods on which they depend.


/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @private
 */
goog.math.Long.IntCache_ = {};


/**
 * Returns a Long representing the given (32-bit) integer value.
 * @param {number} value The 32-bit integer in question.
 * @return {!goog.math.Long} The corresponding Long value.
 */
goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
        var cachedObj = goog.math.Long.IntCache_[value];
        if (cachedObj) {
            return cachedObj;
        }
    }

    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
        goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
};


/**
 * Returns a Long representing the given value, provided that it is a finite
 * number.  Otherwise, zero is returned.
 * @param {number} value The number in question.
 * @return {!goog.math.Long} The corresponding Long value.
 */
goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
        return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
        return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
        return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
        return goog.math.Long.fromNumber(-value).negate();
    } else {
        return new goog.math.Long(
            (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
            (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
};


/**
 * Returns a Long representing the 64-bit integer that comes by concatenating
 * the given high and low bits.  Each is assumed to use 32 bits.
 * @param {number} lowBits The low 32-bits.
 * @param {number} highBits The high 32-bits.
 * @return {!goog.math.Long} The corresponding Long value.
 */
goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
};


/**
 * Returns a Long representation of the given string, written using the given
 * radix.
 * @param {string} str The textual representation of the Long.
 * @param {number=} opt_radix The radix in which the text is written.
 * @return {!goog.math.Long} The corresponding Long value.
 */
goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
        throw Error('number format error: empty string');
    }

    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
        throw Error('radix out of range: ' + radix);
    }

    if (str.charAt(0) == '-') {
        return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
        throw Error('number format error: interior "-" character: ' + str);
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));

    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i);
        var value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = goog.math.Long.fromNumber(Math.pow(radix, size));
            result = result.multiply(power).add(goog.math.Long.fromNumber(value));
        } else {
            result = result.multiply(radixToPower);
            result = result.add(goog.math.Long.fromNumber(value));
        }
    }
    return result;
};


// NOTE: the compiler should inline these constant values below and then remove
// these variables, so there should be no runtime penalty for these.


/**
 * Number used repeated below in calculations.  This must appear before the
 * first call to any from* function below.
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;


/**
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;


/**
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_32_DBL_ =
    goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;


/**
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_31_DBL_ =
    goog.math.Long.TWO_PWR_32_DBL_ / 2;


/**
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_48_DBL_ =
    goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;


/**
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_64_DBL_ =
    goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;


/**
 * @type {number}
 * @private
 */
goog.math.Long.TWO_PWR_63_DBL_ =
    goog.math.Long.TWO_PWR_64_DBL_ / 2;


/** @type {!goog.math.Long} */
goog.math.Long.ZERO = goog.math.Long.fromInt(0);


/** @type {!goog.math.Long} */
goog.math.Long.ONE = goog.math.Long.fromInt(1);


/** @type {!goog.math.Long} */
goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);


/** @type {!goog.math.Long} */
goog.math.Long.MAX_VALUE =
    goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);


/** @type {!goog.math.Long} */
goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);


/**
 * @type {!goog.math.Long}
 * @private
 */
goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);


/** @return {number} The value, assuming it is a 32-bit integer. */
goog.math.Long.prototype.toInt = function() {
    return this.low_;
};


/** @return {number} The closest floating-point representation to this value. */
goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
        this.getLowBitsUnsigned();
};


/**
 * @param {number=} opt_radix The radix in which the text should be written.
 * @return {string} The textual representation of this value.
 * @override
 */
goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
        throw Error('radix out of range: ' + radix);
    }

    if (this.isZero()) {
        return '0';
    }

    if (this.isNegative()) {
        if (this.equals(goog.math.Long.MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = goog.math.Long.fromNumber(radix);
            var div = this.div(radixLong);
            var rem = div.multiply(radixLong).subtract(this);
            return div.toString(radix) + rem.toInt().toString(radix);
        } else {
            return '-' + this.negate().toString(radix);
        }
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));

    var rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower);
        var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
        var digits = intval.toString(radix);

        rem = remDiv;
        if (rem.isZero()) {
            return digits + result;
        } else {
            while (digits.length < 6) {
                digits = '0' + digits;
            }
            result = '' + digits + result;
        }
    }
};


/** @return {number} The high 32-bits as a signed value. */
goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
};


/** @return {number} The low 32-bits as a signed value. */
goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
};


/** @return {number} The low 32-bits as an unsigned value. */
goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
};


/**
 * @return {number} Returns the number of bits needed to represent the absolute
 *     value of this Long.
 */
goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
        if (this.equals(goog.math.Long.MIN_VALUE)) {
            return 64;
        } else {
            return this.negate().getNumBitsAbs();
        }
    } else {
        var val = this.high_ != 0 ? this.high_ : this.low_;
        for (var bit = 31; bit > 0; bit--) {
            if ((val & (1 << bit)) != 0) {
                break;
            }
        }
        return this.high_ != 0 ? bit + 33 : bit + 1;
    }
};


/** @return {boolean} Whether this value is zero. */
goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
};


/** @return {boolean} Whether this value is negative. */
goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
};


/** @return {boolean} Whether this value is odd. */
goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
};


/**
 * @param {goog.math.Long} other Long to compare against.
 * @return {boolean} Whether this Long equals the other.
 */
goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
};


/**
 * @param {goog.math.Long} other Long to compare against.
 * @return {boolean} Whether this Long does not equal the other.
 */
goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
};


/**
 * @param {goog.math.Long} other Long to compare against.
 * @return {boolean} Whether this Long is less than the other.
 */
goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
};


/**
 * @param {goog.math.Long} other Long to compare against.
 * @return {boolean} Whether this Long is less than or equal to the other.
 */
goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
};


/**
 * @param {goog.math.Long} other Long to compare against.
 * @return {boolean} Whether this Long is greater than the other.
 */
goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
};


/**
 * @param {goog.math.Long} other Long to compare against.
 * @return {boolean} Whether this Long is greater than or equal to the other.
 */
goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
};


/**
 * Compares this Long with the given one.
 * @param {goog.math.Long} other Long to compare against.
 * @return {number} 0 if they are the same, 1 if the this is greater, and -1
 *     if the given one is greater.
 */
goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
        return 0;
    }

    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
        return -1;
    }
    if (!thisNeg && otherNeg) {
        return 1;
    }

    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
        return -1;
    } else {
        return 1;
    }
};


/** @return {!goog.math.Long} The negation of this value. */
goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.MIN_VALUE;
    } else {
        return this.not().add(goog.math.Long.ONE);
    }
};


/**
 * Returns the sum of this and the given Long.
 * @param {goog.math.Long} other Long to add to this one.
 * @return {!goog.math.Long} The sum of this and the given Long.
 */
goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;

    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};


/**
 * Returns the difference of this and the given Long.
 * @param {goog.math.Long} other Long to subtract from this.
 * @return {!goog.math.Long} The difference of this and the given Long.
 */
goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
};


/**
 * Returns the product of this and the given long.
 * @param {goog.math.Long} other Long to multiply with this.
 * @return {!goog.math.Long} The product of this and the other.
 */
goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
        return goog.math.Long.ZERO;
    } else if (other.isZero()) {
        return goog.math.Long.ZERO;
    }

    if (this.equals(goog.math.Long.MIN_VALUE)) {
        return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }

    if (this.isNegative()) {
        if (other.isNegative()) {
            return this.negate().multiply(other.negate());
        } else {
            return this.negate().multiply(other).negate();
        }
    } else if (other.isNegative()) {
        return this.multiply(other.negate()).negate();
    }

    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
        return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;

    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};


/**
 * Returns this Long divided by the given one.
 * @param {goog.math.Long} other Long by which to divide.
 * @return {!goog.math.Long} This Long divided by the given one.
 */
goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
        throw Error('division by zero');
    } else if (this.isZero()) {
        return goog.math.Long.ZERO;
    }

    if (this.equals(goog.math.Long.MIN_VALUE)) {
        if (other.equals(goog.math.Long.ONE) ||
            other.equals(goog.math.Long.NEG_ONE)) {
            return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
        } else if (other.equals(goog.math.Long.MIN_VALUE)) {
            return goog.math.Long.ONE;
        } else {
            // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
            var halfThis = this.shiftRight(1);
            var approx = halfThis.div(other).shiftLeft(1);
            if (approx.equals(goog.math.Long.ZERO)) {
                return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
            } else {
                var rem = this.subtract(other.multiply(approx));
                var result = approx.add(rem.div(other));
                return result;
            }
        }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ZERO;
    }

    if (this.isNegative()) {
        if (other.isNegative()) {
            return this.negate().div(other.negate());
        } else {
            return this.negate().div(other).negate();
        }
    } else if (other.isNegative()) {
        return this.div(other.negate()).negate();
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2);
        var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        var approxRes = goog.math.Long.fromNumber(approx);
        var approxRem = approxRes.multiply(other);
        while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
            approx -= delta;
            approxRes = goog.math.Long.fromNumber(approx);
            approxRem = approxRes.multiply(other);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero()) {
            approxRes = goog.math.Long.ONE;
        }

        res = res.add(approxRes);
        rem = rem.subtract(approxRem);
    }
    return res;
};


/**
 * Returns this Long modulo the given one.
 * @param {goog.math.Long} other Long by which to mod.
 * @return {!goog.math.Long} This Long modulo the given one.
 */
goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
};


/** @return {!goog.math.Long} The bitwise-NOT of this value. */
goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
};


/**
 * Returns the bitwise-AND of this Long and the given one.
 * @param {goog.math.Long} other The Long with which to AND.
 * @return {!goog.math.Long} The bitwise-AND of this and the other.
 */
goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
        this.high_ & other.high_);
};


/**
 * Returns the bitwise-OR of this Long and the given one.
 * @param {goog.math.Long} other The Long with which to OR.
 * @return {!goog.math.Long} The bitwise-OR of this and the other.
 */
goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
        this.high_ | other.high_);
};


/**
 * Returns the bitwise-XOR of this Long and the given one.
 * @param {goog.math.Long} other The Long with which to XOR.
 * @return {!goog.math.Long} The bitwise-XOR of this and the other.
 */
goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
        this.high_ ^ other.high_);
};


/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number} numBits The number of bits by which to shift.
 * @return {!goog.math.Long} This shifted to the left by the given amount.
 */
goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
        return this;
    } else {
        var low = this.low_;
        if (numBits < 32) {
            var high = this.high_;
            return goog.math.Long.fromBits(
                low << numBits,
                (high << numBits) | (low >>> (32 - numBits)));
        } else {
            return goog.math.Long.fromBits(0, low << (numBits - 32));
        }
    }
};


/**
 * Returns this Long with bits shifted to the right by the given amount.
 * @param {number} numBits The number of bits by which to shift.
 * @return {!goog.math.Long} This shifted to the right by the given amount.
 */
goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
        return this;
    } else {
        var high = this.high_;
        if (numBits < 32) {
            var low = this.low_;
            return goog.math.Long.fromBits(
                (low >>> numBits) | (high << (32 - numBits)),
                high >> numBits);
        } else {
            return goog.math.Long.fromBits(
                high >> (numBits - 32),
                high >= 0 ? 0 : -1);
        }
    }
};


/**
 * Returns this Long with bits shifted to the right by the given amount, with
 * the new top bits matching the current sign bit.
 * @param {number} numBits The number of bits by which to shift.
 * @return {!goog.math.Long} This shifted to the right by the given amount, with
 *     zeros placed into the new leading bits.
 */
goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
        return this;
    } else {
        var high = this.high_;
        if (numBits < 32) {
            var low = this.low_;
            return goog.math.Long.fromBits(
                (low >>> numBits) | (high << (32 - numBits)),
                high >>> numBits);
        } else if (numBits == 32) {
            return goog.math.Long.fromBits(high, 0);
        } else {
            return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
        }
    }
};
/*
 * Rusha, a JavaScript implementation of the Secure Hash Algorithm, SHA-1,
 * as defined in FIPS PUB 180-1, tuned for high performance with large inputs.
 * (http://github.com/srijs/rusha)
 *
 * Inspired by Paul Johnstons implementation (http://pajhome.org.uk/crypt/md5).
 *
 * Copyright (c) 2013 Sam Rijs (http://awesam.de).
 * Released under the terms of the MIT license as follows:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
(function (global) {
    // If we'e running in Node.JS, export a module.
    if (typeof module !== 'undefined') {
        module.exports = Rusha;
    }
    // If we're running in a DOM context, export
    // the Rusha object to toplevel.
    if (typeof global !== 'undefined') {
        global.Rusha = Rusha;
    }
    // If we're running in a webworker, accept
    // messages containing a jobid and a buffer
    // or blob object, and return the hash result.
    if (typeof FileReaderSync !== 'undefined') {
        var reader = new FileReaderSync(), hasher = new Rusha(4 * 1024 * 1024);
        self.onmessage = function onMessage(event) {
            var hash, data = event.data.data;
            if (data instanceof Blob) {
                try {
                    data = reader.readAsBinaryString(data);
                } catch (e) {
                    self.postMessage({
                        id: event.data.id,
                        error: e.name
                    });
                    return;
                }
            }
            hash = hasher.digest(data);
            self.postMessage({
                id: event.data.id,
                hash: hash
            });
        };
    }
    var util = {
            getDataType: function (data) {
                if (typeof data === 'string') {
                    return 'string';
                }
                if (data instanceof Array) {
                    return 'array';
                }
                if (typeof global !== 'undefined' && global.Buffer && global.Buffer.isBuffer(data)) {
                    return 'buffer';
                }
                if (data instanceof ArrayBuffer) {
                    return 'arraybuffer';
                }
                if (data.buffer instanceof ArrayBuffer) {
                    return 'view';
                }
                throw new Error('Unsupported data type.');
            }
        };
    // The Rusha object is a wrapper around the low-level RushaCore.
    // It provides means of converting different inputs to the
    // format accepted by RushaCore as well as other utility methods.
    function Rusha(chunkSize) {
        'use strict';
        // Private object structure.
        var self$2 = { fill: 0 };
        // Calculate the length of buffer that the sha1 routine uses
        // including the padding.
        var padlen = function (len) {
            for (len += 9; len % 64 > 0; len += 1);
            return len;
        };
        var padZeroes = function (bin, len) {
            for (var i = len >> 2; i < bin.length; i++)
                bin[i] = 0;
        };
        var padData = function (bin, chunkLen, msgLen) {
            bin[chunkLen >> 2] |= 128 << 24 - (chunkLen % 4 << 3);
            bin[((chunkLen >> 2) + 2 & ~15) + 15] = msgLen << 3;
        };
        // Convert a binary string and write it to the heap.
        // A binary string is expected to only contain char codes < 256.
        var convStr = function (H8, H32, start, len, off) {
            var str = this, i, om = off % 4, lm = len % 4, j = len - lm;
            if (j > 0) {
                switch (om) {
                case 0:
                    H8[off + 3 | 0] = str.charCodeAt(start);
                case 1:
                    H8[off + 2 | 0] = str.charCodeAt(start + 1);
                case 2:
                    H8[off + 1 | 0] = str.charCodeAt(start + 2);
                case 3:
                    H8[off | 0] = str.charCodeAt(start + 3);
                }
            }
            for (i = om; i < j; i = i + 4 | 0) {
                H32[off + i >> 2] = str.charCodeAt(start + i) << 24 | str.charCodeAt(start + i + 1) << 16 | str.charCodeAt(start + i + 2) << 8 | str.charCodeAt(start + i + 3);
            }
            switch (lm) {
            case 3:
                H8[off + j + 1 | 0] = str.charCodeAt(start + j + 2);
            case 2:
                H8[off + j + 2 | 0] = str.charCodeAt(start + j + 1);
            case 1:
                H8[off + j + 3 | 0] = str.charCodeAt(start + j);
            }
        };
        // Convert a buffer or array and write it to the heap.
        // The buffer or array is expected to only contain elements < 256.
        var convBuf = function (H8, H32, start, len, off) {
            var buf = this, i, om = off % 4, lm = len % 4, j = len - lm;
            if (j > 0) {
                switch (om) {
                case 0:
                    H8[off + 3 | 0] = buf[start];
                case 1:
                    H8[off + 2 | 0] = buf[start + 1];
                case 2:
                    H8[off + 1 | 0] = buf[start + 2];
                case 3:
                    H8[off | 0] = buf[start + 3];
                }
            }
            for (i = 4 - om; i < j; i = i += 4 | 0) {
                H32[off + i >> 2] = buf[start + i] << 24 | buf[start + i + 1] << 16 | buf[start + i + 2] << 8 | buf[start + i + 3];
            }
            switch (lm) {
            case 3:
                H8[off + j + 1 | 0] = buf[start + j + 2];
            case 2:
                H8[off + j + 2 | 0] = buf[start + j + 1];
            case 1:
                H8[off + j + 3 | 0] = buf[start + j];
            }
        };
        var convFn = function (data) {
            switch (util.getDataType(data)) {
            case 'string':
                return convStr.bind(data);
            case 'array':
                return convBuf.bind(data);
            case 'buffer':
                return convBuf.bind(data);
            case 'arraybuffer':
                return convBuf.bind(new Uint8Array(data));
            case 'view':
                return convBuf.bind(new Uint8Array(data.buffer));
            }
        };
        var slice = function (data, offset) {
            switch (util.getDataType(data)) {
            case 'string':
                return data.slice(offset);
            case 'array':
                return data.slice(offset);
            case 'buffer':
                return data.slice(offset);
            case 'arraybuffer':
                return data.slice(offset);
            case 'view':
                return data.buffer.slice(offset);
            }
        };
        // Convert an ArrayBuffer into its hexadecimal string representation.
        var hex = function (arrayBuffer) {
            var i, x, hex_tab = '0123456789abcdef', res = [], binarray = new Uint8Array(arrayBuffer);
            for (i = 0; i < binarray.length; i++) {
                x = binarray[i];
                res[i] = hex_tab.charAt(x >> 4 & 15) + hex_tab.charAt(x >> 0 & 15);
            }
            return res.join('');
        };
        var ceilHeapSize = function (v) {
            // The asm.js spec says:
            // The heap object's byteLength must be either
            // 2^n for n in [12, 24) or 2^24 * n for n ≥ 1.
            // Also, byteLengths smaller than 2^16 are deprecated.
            var p;
            // If v is smaller than 2^16, the smallest possible solution
            // is 2^16.
            if (v <= 65536)
                return 65536;
            // If v < 2^24, we round up to 2^n,
            // otherwise we round up to 2^24 * n.
            if (v < 16777216) {
                for (p = 1; p < v; p = p << 1);
            } else {
                for (p = 16777216; p < v; p += 16777216);
            }
            return p;
        };
        // Initialize the internal data structures to a new capacity.
        var init = function (size) {
            if (size % 64 > 0) {
                throw new Error('Chunk size must be a multiple of 128 bit');
            }
            self$2.maxChunkLen = size;
            self$2.padMaxChunkLen = padlen(size);
            // The size of the heap is the sum of:
            // 1. The padded input message size
            // 2. The extended space the algorithm needs (320 byte)
            // 3. The 160 bit state the algoritm uses
            self$2.heap = new ArrayBuffer(ceilHeapSize(self$2.padMaxChunkLen + 320 + 20));
            self$2.h32 = new Int32Array(self$2.heap);
            self$2.h8 = new Int8Array(self$2.heap);
            self$2.core = RushaCore({
                Int32Array: Int32Array,
                DataView: DataView
            }, {}, self$2.heap);
            self$2.buffer = null;
        };
        // Iinitializethe datastructures according
        // to a chunk siyze.
        init(chunkSize || 64 * 1024);
        var initState = function (heap, padMsgLen) {
            var io = new Int32Array(heap, padMsgLen + 320, 5);
            io[0] = 1732584193;
            io[1] = -271733879;
            io[2] = -1732584194;
            io[3] = 271733878;
            io[4] = -1009589776;
        };
        var padChunk = function (chunkLen, msgLen) {
            var padChunkLen = padlen(chunkLen);
            var view = new Int32Array(self$2.heap, 0, padChunkLen >> 2);
            padZeroes(view, chunkLen);
            padData(view, chunkLen, msgLen);
            return padChunkLen;
        };
        // Write data to the heap.
        var write = function (data, chunkOffset, chunkLen) {
            convFn(data)(self$2.h8, self$2.h32, chunkOffset, chunkLen, 0);
        };
        // Initialize and call the RushaCore,
        // assuming an input buffer of length len * 4.
        var coreCall = function (data, chunkOffset, chunkLen, msgLen, finalize) {
            var padChunkLen = chunkLen;
            if (finalize) {
                padChunkLen = padChunk(chunkLen, msgLen);
            }
            write(data, chunkOffset, chunkLen);
            self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);
        };
        var getRawDigest = function (heap, padMaxChunkLen) {
            var io = new Int32Array(heap, padMaxChunkLen + 320, 5);
            var out = new Int32Array(5);
            var arr = new DataView(out.buffer);
            arr.setInt32(0, io[0], false);
            arr.setInt32(4, io[1], false);
            arr.setInt32(8, io[2], false);
            arr.setInt32(12, io[3], false);
            arr.setInt32(16, io[4], false);
            return out;
        };
        // Calculate the hash digest as an array of 5 32bit integers.
        var rawDigest = this.rawDigest = function (str) {
                var msgLen = str.byteLength || str.length;
                initState(self$2.heap, self$2.padMaxChunkLen);
                var chunkOffset = 0, chunkLen = self$2.maxChunkLen, last;
                for (chunkOffset = 0; msgLen > chunkOffset + chunkLen; chunkOffset += chunkLen) {
                    coreCall(str, chunkOffset, chunkLen, msgLen, false);
                }
                coreCall(str, chunkOffset, msgLen - chunkOffset, msgLen, true);
                return getRawDigest(self$2.heap, self$2.padMaxChunkLen);
            };
        // The digest and digestFrom* interface returns the hash digest
        // as a hex string.
        this.digest = this.digestFromString = this.digestFromBuffer = this.digestFromArrayBuffer = function (str) {
            return hex(rawDigest(str).buffer);
        };
    }
    ;
    // The low-level RushCore module provides the heart of Rusha,
    // a high-speed sha1 implementation working on an Int32Array heap.
    // At first glance, the implementation seems complicated, however
    // with the SHA1 spec at hand, it is obvious this almost a textbook
    // implementation that has a few functions hand-inlined and a few loops
    // hand-unrolled.
    function RushaCore(stdlib, foreign, heap) {
        'use asm';
        var H = new stdlib.Int32Array(heap);
        function hash(k, x) {
            // k in bytes
            k = k | 0;
            x = x | 0;
            var i = 0, j = 0, y0 = 0, z0 = 0, y1 = 0, z1 = 0, y2 = 0, z2 = 0, y3 = 0, z3 = 0, y4 = 0, z4 = 0, t0 = 0, t1 = 0;
            y0 = H[x + 320 >> 2] | 0;
            y1 = H[x + 324 >> 2] | 0;
            y2 = H[x + 328 >> 2] | 0;
            y3 = H[x + 332 >> 2] | 0;
            y4 = H[x + 336 >> 2] | 0;
            for (i = 0; (i | 0) < (k | 0); i = i + 64 | 0) {
                z0 = y0;
                z1 = y1;
                z2 = y2;
                z3 = y3;
                z4 = y4;
                for (j = 0; (j | 0) < 64; j = j + 4 | 0) {
                    t1 = H[i + j >> 2] | 0;
                    t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;
                    y4 = y3;
                    y3 = y2;
                    y2 = y1 << 30 | y1 >>> 2;
                    y1 = y0;
                    y0 = t0;
                    ;
                    H[k + j >> 2] = t1;
                }
                for (j = k + 64 | 0; (j | 0) < (k + 80 | 0); j = j + 4 | 0) {
                    t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                    t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;
                    y4 = y3;
                    y3 = y2;
                    y2 = y1 << 30 | y1 >>> 2;
                    y1 = y0;
                    y0 = t0;
                    ;
                    H[j >> 2] = t1;
                }
                for (j = k + 80 | 0; (j | 0) < (k + 160 | 0); j = j + 4 | 0) {
                    t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                    t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) + 1859775393 | 0) | 0;
                    y4 = y3;
                    y3 = y2;
                    y2 = y1 << 30 | y1 >>> 2;
                    y1 = y0;
                    y0 = t0;
                    ;
                    H[j >> 2] = t1;
                }
                for (j = k + 160 | 0; (j | 0) < (k + 240 | 0); j = j + 4 | 0) {
                    t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                    t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | y1 & y3 | y2 & y3) | 0) + ((t1 + y4 | 0) - 1894007588 | 0) | 0;
                    y4 = y3;
                    y3 = y2;
                    y2 = y1 << 30 | y1 >>> 2;
                    y1 = y0;
                    y0 = t0;
                    ;
                    H[j >> 2] = t1;
                }
                for (j = k + 240 | 0; (j | 0) < (k + 320 | 0); j = j + 4 | 0) {
                    t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                    t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) - 899497514 | 0) | 0;
                    y4 = y3;
                    y3 = y2;
                    y2 = y1 << 30 | y1 >>> 2;
                    y1 = y0;
                    y0 = t0;
                    ;
                    H[j >> 2] = t1;
                }
                y0 = y0 + z0 | 0;
                y1 = y1 + z1 | 0;
                y2 = y2 + z2 | 0;
                y3 = y3 + z3 | 0;
                y4 = y4 + z4 | 0;
            }
            H[x + 320 >> 2] = y0;
            H[x + 324 >> 2] = y1;
            H[x + 328 >> 2] = y2;
            H[x + 332 >> 2] = y3;
            H[x + 336 >> 2] = y4;
        }
        return { hash: hash };
    }
}(this));

/*!
 * Webogram v0.7.0 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

function TLSerialization (options) {
  options = options || {}
  this.maxLength = options.startMaxLength || 2048 // 2Kb
  this.offset = 0 // in bytes

  this.createBuffer()

  this.debug = true;
  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug
  this.mtproto = options.mtproto || false
  return this
}

TLSerialization.prototype.createBuffer = function () {
  this.buffer = new ArrayBuffer(this.maxLength)
  this.intView = new Int32Array(this.buffer)
  this.byteView = new Uint8Array(this.buffer)
}

TLSerialization.prototype.getArray = function () {
  var resultBuffer = new ArrayBuffer(this.offset)
  var resultArray = new Int32Array(resultBuffer)

  resultArray.set(this.intView.subarray(0, this.offset / 4))

  return resultArray
}

TLSerialization.prototype.getBuffer = function () {
  return this.getArray().buffer
}

TLSerialization.prototype.getBytes = function (typed) {
  if (typed) {
    var resultBuffer = new ArrayBuffer(this.offset)
    var resultArray = new Uint8Array(resultBuffer)

    resultArray.set(this.byteView.subarray(0, this.offset))

    return resultArray
  }

  var bytes = []
  for (var i = 0; i < this.offset; i++) {
    bytes.push(this.byteView[i])
  }
  return bytes
}

TLSerialization.prototype.checkLength = function (needBytes) {
  if (this.offset + needBytes < this.maxLength) {
    return
  }

  console.trace('Increase buffer', this.offset, needBytes, this.maxLength)
  this.maxLength = Math.ceil(Math.max(this.maxLength * 2, this.offset + needBytes + 16) / 4) * 4
  var previousBuffer = this.buffer
  var previousArray = new Int32Array(previousBuffer)

  this.createBuffer()

  new Int32Array(this.buffer).set(previousArray)
}

TLSerialization.prototype.writeInt = function (i, field) {
  this.debug && console.log('>>>', i.toString(16), i, field)

  this.checkLength(4)
  this.intView[this.offset / 4] = i
  this.offset += 4
}

TLSerialization.prototype.storeInt = function (i, field) {
  this.writeInt(i, (field || '') + ':int')
}

TLSerialization.prototype.storeBool = function (i, field) {
  if (i) {
    this.writeInt(0x997275b5, (field || '') + ':bool')
  } else {
    this.writeInt(0xbc799737, (field || '') + ':bool')
  }
}

TLSerialization.prototype.storeLongP = function (iHigh, iLow, field) {
  this.writeInt(iLow, (field || '') + ':long[low]')
  this.writeInt(iHigh, (field || '') + ':long[high]')
}

TLSerialization.prototype.storeLong = function (sLong, field) {
  if (Array.isArray(sLong)) {
    if (sLong.length == 2) {
      return this.storeLongP(sLong[0], sLong[1], field)
    } else {
      return this.storeIntBytes(sLong, 64, field)
    }
  }

  if (typeof sLong != 'string') {
    sLong = sLong ? sLong.toString() : '0'
  }
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000))

  this.writeInt(intToUint(divRem[1].intValue()), (field || '') + ':long[low]')
  this.writeInt(intToUint(divRem[0].intValue()), (field || '') + ':long[high]')
}

TLSerialization.prototype.storeDouble = function (f, field) {
  var buffer = new ArrayBuffer(8)
  var intView = new Int32Array(buffer)
  var doubleView = new Float64Array(buffer)

  doubleView[0] = f

  this.writeInt(intView[0], (field || '') + ':double[low]')
  this.writeInt(intView[1], (field || '') + ':double[high]')
}

TLSerialization.prototype.storeString = function (s, field) {
  this.debug && console.log('>>>', s, (field || '') + ':string')

  if (s === undefined) {
    s = ''
  }
  var sUTF8 = unescape(encodeURIComponent(s))

  this.checkLength(sUTF8.length + 8)

  var len = sUTF8.length
  if (len <= 253) {
    this.byteView[this.offset++] = len
  } else {
    this.byteView[this.offset++] = 254
    this.byteView[this.offset++] = len & 0xFF
    this.byteView[this.offset++] = (len & 0xFF00) >> 8
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16
  }
  for (var i = 0; i < len; i++) {
    this.byteView[this.offset++] = sUTF8.charCodeAt(i)
  }

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0
  }
}

TLSerialization.prototype.storeBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  else if (bytes === undefined) {
    bytes = []
  }
  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':bytes')

  var len = bytes.byteLength || bytes.length
  this.checkLength(len + 8)
  if (len <= 253) {
    this.byteView[this.offset++] = len
  } else {
    this.byteView[this.offset++] = 254
    this.byteView[this.offset++] = len & 0xFF
    this.byteView[this.offset++] = (len & 0xFF00) >> 8
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16
  }

  this.byteView.set(bytes, this.offset)
  this.offset += len

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0
  }
}

TLSerialization.prototype.storeIntBytes = function (bytes, bits, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  var len = bytes.length
  if ((bits % 32) || (len * 8) != bits) {
    throw new Error('Invalid bits: ' + bits + ', ' + bytes.length)
  }

  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':int' + bits)
  this.checkLength(len)

  this.byteView.set(bytes, this.offset)
  this.offset += len
}

TLSerialization.prototype.storeRawBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  var len = bytes.length

  this.debug && console.log('>>>', bytesToHex(bytes), (field || ''))
  this.checkLength(len)

  this.byteView.set(bytes, this.offset)
  this.offset += len
}

TLSerialization.prototype.storeMethod = function (methodName, params) {
  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API
  var methodData = false,
    i

  for (i = 0; i < schema.methods.length; i++) {
    if (schema.methods[i].method == methodName) {
      methodData = schema.methods[i]
      break
    }
  }
  if (!methodData) {
    throw new Error('No method ' + methodName + ' found')
  }

  this.storeInt(intToUint(methodData.id), methodName + '[id]')

  var param, type
  var i, condType
  var fieldBit
  var len = methodData.params.length
  for (i = 0; i < len; i++) {
    param = methodData.params[i]
    type = param.type
    if (type.indexOf('?') !== -1) {
      condType = type.split('?')
      fieldBit = condType[0].split('.')
      if (!(params[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue
      }
      type = condType[1]
    }

    this.storeObject(params[param.name], type, methodName + '[' + param.name + ']')
  }

  return methodData.type
}

TLSerialization.prototype.storeObject = function (obj, type, field) {
  switch (type) {
    case '#':
    case 'int':
      return this.storeInt(obj, field)
    case 'long':
      return this.storeLong(obj, field)
    case 'int128':
      return this.storeIntBytes(obj, 128, field)
    case 'int256':
      return this.storeIntBytes(obj, 256, field)
    case 'int512':
      return this.storeIntBytes(obj, 512, field)
    case 'string':
      return this.storeString(obj, field)
    case 'bytes':
      return this.storeBytes(obj, field)
    case 'double':
      return this.storeDouble(obj, field)
    case 'Bool':
      return this.storeBool(obj, field)
    case 'true':
      return
  }

  if (Array.isArray(obj)) {
    if (type.substr(0, 6) == 'Vector') {
      this.writeInt(0x1cb5c415, field + '[id]')
    }
    else if (type.substr(0, 6) != 'vector') {
      throw new Error('Invalid vector type ' + type)
    }
    var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
    this.writeInt(obj.length, field + '[count]')
    for (var i = 0; i < obj.length; i++) {
      this.storeObject(obj[i], itemType, field + '[' + i + ']')
    }
    return true
  }
  else if (type.substr(0, 6).toLowerCase() == 'vector') {
    throw new Error('Invalid vector object')
  }

  if (typeof obj !== 'object') {
    throw new Error('Invalid object for type ' + type)
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API
  var predicate = obj['_']
  var isBare = false
  var constructorData = false,
    i

  if (isBare = (type.charAt(0) == '%')) {
    type = type.substr(1)
  }

  for (i = 0; i < schema.constructors.length; i++) {
    if (schema.constructors[i].predicate == predicate) {
      constructorData = schema.constructors[i]
      break
    }
  }
  if (!constructorData) {
    throw new Error('No predicate ' + predicate + ' found')
  }

  if (predicate == type) {
    isBare = true
  }

  if (!isBare) {
    this.writeInt(intToUint(constructorData.id), field + '[' + predicate + '][id]')
  }

  var param, type
  var i, condType
  var fieldBit
  var len = constructorData.params.length
  for (i = 0; i < len; i++) {
    param = constructorData.params[i]
    type = param.type
    if (type.indexOf('?') !== -1) {
      condType = type.split('?')
      fieldBit = condType[0].split('.')
      if (!(obj[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue
      }
      type = condType[1]
    }

    this.storeObject(obj[param.name], type, field + '[' + predicate + '][' + param.name + ']')
  }

  return constructorData.type
}

function TLDeserialization (buffer, options) {
  options = options || {}

  this.offset = 0 // in bytes
  this.override = options.override || {}

  this.buffer = buffer
  this.intView = new Uint32Array(this.buffer)
  this.byteView = new Uint8Array(this.buffer)

  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug
  this.mtproto = options.mtproto || false
  return this
}

TLDeserialization.prototype.readInt = function (field) {
  if (this.offset >= this.intView.length * 4) {
    throw new Error('Nothing to fetch: ' + field)
  }

  var i = this.intView[this.offset / 4]

  this.debug && console.log('<<<', i.toString(16), i, field)

  this.offset += 4

  return i
}

TLDeserialization.prototype.fetchInt = function (field) {
  return this.readInt((field || '') + ':int')
}

TLDeserialization.prototype.fetchDouble = function (field) {
  var buffer = new ArrayBuffer(8)
  var intView = new Int32Array(buffer)
  var doubleView = new Float64Array(buffer)

  intView[0] = this.readInt((field || '') + ':double[low]'),
  intView[1] = this.readInt((field || '') + ':double[high]')

  return doubleView[0]
}

TLDeserialization.prototype.fetchLong = function (field) {
  var iLow = this.readInt((field || '') + ':long[low]')
  var iHigh = this.readInt((field || '') + ':long[high]')

  var longDec = bigint(iHigh).shiftLeft(32).add(bigint(iLow)).toString()

  return longDec
}

TLDeserialization.prototype.fetchBool = function (field) {
  var i = this.readInt((field || '') + ':bool')
  if (i == 0x997275b5) {
    return true
  } else if (i == 0xbc799737) {
    return false
  }

  this.offset -= 4
  return this.fetchObject('Object', field)
}

TLDeserialization.prototype.fetchString = function (field) {
  var len = this.byteView[this.offset++]

  if (len == 254) {
    var len = this.byteView[this.offset++] |
      (this.byteView[this.offset++] << 8) |
      (this.byteView[this.offset++] << 16)
  }

  var sUTF8 = ''
  for (var i = 0; i < len; i++) {
    sUTF8 += String.fromCharCode(this.byteView[this.offset++])
  }

  // Padding
  while (this.offset % 4) {
    this.offset++
  }

  try {
    var s = decodeURIComponent(escape(sUTF8))
  } catch (e) {
    var s = sUTF8
  }

  this.debug && console.log('<<<', s, (field || '') + ':string')

  return s
}

TLDeserialization.prototype.fetchBytes = function (field) {
  var len = this.byteView[this.offset++]

  if (len == 254) {
    len = this.byteView[this.offset++] |
      (this.byteView[this.offset++] << 8) |
      (this.byteView[this.offset++] << 16)
  }

  var bytes = this.byteView.subarray(this.offset, this.offset + len)
  this.offset += len

  // Padding
  while (this.offset % 4) {
    this.offset++
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':bytes')

  return bytes
}

TLDeserialization.prototype.fetchIntBytes = function (bits, typed, field) {
  if (bits % 32) {
    throw new Error('Invalid bits: ' + bits)
  }

  var len = bits / 8
  if (typed) {
    var result = this.byteView.subarray(this.offset, this.offset + len)
    this.offset += len
    return result
  }

  var bytes = []
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++])
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':int' + bits)

  return bytes
}

TLDeserialization.prototype.fetchRawBytes = function (len, typed, field) {
  if (len === false) {
    len = this.readInt((field || '') + '_length')
    if (len > this.byteView.byteLength) {
      throw new Error('Invalid raw bytes length: ' + len + ', buffer len: ' + this.byteView.byteLength)
    }
  }

  if (typed) {
    var bytes = new Uint8Array(len)
    bytes.set(this.byteView.subarray(this.offset, this.offset + len))
    this.offset += len
    return bytes
  }

  var bytes = []
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++])
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || ''))

  return bytes
}

TLDeserialization.prototype.fetchObject = function (type, field) {
  switch (type) {
    case '#':
    case 'int':
      return this.fetchInt(field)
    case 'long':
      return this.fetchLong(field)
    case 'int128':
      return this.fetchIntBytes(128, false, field)
    case 'int256':
      return this.fetchIntBytes(256, false, field)
    case 'int512':
      return this.fetchIntBytes(512, false, field)
    case 'string':
      return this.fetchString(field)
    case 'bytes':
      return this.fetchBytes(field)
    case 'double':
      return this.fetchDouble(field)
    case 'Bool':
      return this.fetchBool(field)
    case 'true':
      return true
  }

  field = field || type || 'Object'

  if (type.substr(0, 6) == 'Vector' || type.substr(0, 6) == 'vector') {
    if (type.charAt(0) == 'V') {
      var constructor = this.readInt(field + '[id]')
      var constructorCmp = uintToInt(constructor)

      if (constructorCmp == 0x3072cfa1) { // Gzip packed
        var compressed = this.fetchBytes(field + '[packed_string]')
        var uncompressed = gzipUncompress(compressed)
        var buffer = bytesToArrayBuffer(uncompressed)
        var newDeserializer = (new TLDeserialization(buffer))

        return newDeserializer.fetchObject(type, field)
      }
      if (constructorCmp != 0x1cb5c415) {
        throw new Error('Invalid vector constructor ' + constructor)
      }
    }
    var len = this.readInt(field + '[count]')
    var result = []
    if (len > 0) {
      var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
      for (var i = 0; i < len; i++) {
        result.push(this.fetchObject(itemType, field + '[' + i + ']'))
      }
    }

    return result
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API
  var predicate = false
  var constructorData = false

  if (type.charAt(0) == '%') {
    var checkType = type.substr(1)
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].type == checkType) {
        constructorData = schema.constructors[i]
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for type: ' + type)
    }
  }
  else if (type.charAt(0) >= 97 && type.charAt(0) <= 122) {
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].predicate == type) {
        constructorData = schema.constructors[i]
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for predicate: ' + type)
    }
  }else {
    var constructor = this.readInt(field + '[id]')
    var constructorCmp = uintToInt(constructor)

    if (constructorCmp == 0x3072cfa1) { // Gzip packed
      var compressed = this.fetchBytes(field + '[packed_string]')
      var uncompressed = gzipUncompress(compressed)
      var buffer = bytesToArrayBuffer(uncompressed)
      var newDeserializer = (new TLDeserialization(buffer))

      return newDeserializer.fetchObject(type, field)
    }

    var index = schema.constructorsIndex
    if (!index) {
      schema.constructorsIndex = index = {}
      for (var i = 0; i < schema.constructors.length; i++) {
        index[schema.constructors[i].id] = i
      }
    }
    var i = index[constructorCmp]
    if (i) {
      constructorData = schema.constructors[i]
    }

    var fallback = false
    if (!constructorData && this.mtproto) {
      var schemaFallback = Config.Schema.API
      for (i = 0; i < schemaFallback.constructors.length; i++) {
        if (schemaFallback.constructors[i].id == constructorCmp) {
          constructorData = schemaFallback.constructors[i]

          delete this.mtproto
          fallback = true
          break
        }
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found: ' + constructor + ' ' + this.fetchInt() + ' ' + this.fetchInt())
    }
  }

  predicate = constructorData.predicate

  var result = {'_': predicate}
  var overrideKey = (this.mtproto ? 'mt_' : '') + predicate
  var self = this

  if (this.override[overrideKey]) {
    this.override[overrideKey].apply(this, [result, field + '[' + predicate + ']'])
  } else {
    var i, param
    var type, isCond
    var condType, fieldBit
    var value
    var len = constructorData.params.length
    for (i = 0; i < len; i++) {
      param = constructorData.params[i]
      type = param.type
      if (type == '#' && result.pFlags === undefined) {
        result.pFlags = {}
      }
      if (isCond = (type.indexOf('?') !== -1)) {
        condType = type.split('?')
        fieldBit = condType[0].split('.')
        if (!(result[fieldBit[0]] & (1 << fieldBit[1]))) {
          continue
        }
        type = condType[1]
      }

      value = self.fetchObject(type, field + '[' + predicate + '][' + param.name + ']')

      if (isCond && type === 'true') {
        result.pFlags[param.name] = value
      } else {
        result[param.name] = value
      }
    }
  }

  if (fallback) {
    this.mtproto = true
  }

  return result
}

TLDeserialization.prototype.getOffset = function () {
  return this.offset
}

TLDeserialization.prototype.fetchEnd = function () {
  if (this.offset != this.byteView.length) {
    throw new Error('Fetch end with non-empty buffer')
  }
  return true
}

window.angular = (function () {
    var MAX_SAFE_INTEGER = 9007199254740991;

    function isLength(value) {
        return typeof value === 'number' &&
            value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
    }

    function isFunction(value) {
        return typeof value === 'function';
    }

    function isArray(a) {
        return Array.isArray(a);
    }

    function isArrayLike(value) {
        return value != null && typeof value !== 'function' && isLength(value.length)
    }

    function isBlankObject(value) {
        return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
    }

    function forEach(obj, iterator, context) {
        var key, length;
        if (obj) {
            if (isFunction(obj)) {
                for (key in obj) {
                    if (key !== 'prototype' && key !== 'length' && key !== 'name' && obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            } else if (isArray(obj) || isArrayLike(obj)) {
                var isPrimitive = typeof obj !== 'object';
                for (key = 0, length = obj.length; key < length; key++) {
                    if (isPrimitive || key in obj) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            } else if (obj.forEach && obj.forEach !== forEach) {
                obj.forEach(iterator, context, obj);
            } else if (isBlankObject(obj)) {
                // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
                for (key in obj) {
                    iterator.call(context, obj[key], key, obj);
                }
            } else if (typeof obj.hasOwnProperty === 'function') {
                // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            } else {
                // Slow path for objects which do not have a method `hasOwnProperty`
                for (key in obj) {
                    if (Object.hasOwnProperty.call(obj, key)) {
                        iterator.call(context, obj[key], key, obj);
                    }
                }
            }
        }
        return obj;
    }

    return {
        extend: Object.assign,
        isObject: function isObject(value) {
            // http://jsperf.com/isobject4
            return value !== null && typeof value === 'object';
        },
        forEach: forEach
    }
})();
window.$timeout = (function () {
    function $timeout(fn, delay, invoke, args) {
        var timeoutId = null;
        var promise = new Promise(function (resolve) {
            timeoutId = setTimeout(function () {
                resolve(fn.apply(null, args));
            }, delay);
        });
        promise.id = timeoutId;
        return promise;
    }

    $timeout.cancel = function (promise) {
        if (promise) {
            clearTimeout(promise.id);
        }
    };

    return $timeout;
}());
window.CryptoWorker = (function () {
    var $timeout = window.$timeout;
    return {
        sha1Hash: function (bytes) {
            return $timeout(function () {
                return sha1HashSync(bytes)
            })
        },
        sha256Hash: function (bytes) {
            return $timeout(function () {
                return sha256HashSync(bytes)
            })
        },
        aesEncrypt: function (bytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesEncryptSync(bytes, keyBytes, ivBytes))
            })
        },
        aesDecrypt: function (encryptedBytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesDecryptSync(encryptedBytes, keyBytes, ivBytes))
            })
        },
        factorize: function (bytes) {
            return $timeout(function () {
                return pqPrimeFactorization(bytes)
            })
        },
        modPow: function (x, y, m) {
            return $timeout(function () {
                return bytesModPow(x, y, m)
            })
        }
    };
}());
window.$http = (function () {
    function post(url, requestData) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.onload = function () {
                resolve({ data: request.response });
            };
            request.onerror = function () {
                reject(request);
            };
            request.responseType = 'arraybuffer';
            request.send(requestData);
        });
    }

    return {
        post: post,
        defaults: { headers: { post: {}, common: {} } }
    }
})();
window.$interval = (function () {
    function $interval(fn, delay, invoke, args) {
        var intervalId = null;
        var promise = new Promise(function (resolve) {
            intervalId = setInterval(function () {
                resolve(fn.apply(null, args));
            }, delay);
        });
        promise.id = intervalId;
        return promise;
    }

    $interval.cancel = function (promise) {
        clearTimeout(promise.id);
    };

    return $interval;
}());
window.$q = (function () {
    function Deferred() {
        var self = this;
        this.promise = new Promise(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;
        });
    }

    return {
        defer: function () {
            return new Deferred();
        },

        reject: function (e) {
            return Promise.reject(e);
        }
    };
})();

window.$rootScope = (function () {
    return {
        $on: function () {
            console.warn('$rootScope.$on was invoked')
        },
        $watch: function () {
            console.warn('$rootScope.$watch was invoked')
        }
    }
})();

window.Storage = (function () {
    function set() {
        var args = [].slice.call(arguments);
        return new Promise(function (resolve) {
            args.forEach(function (object) {
                for (var prop in object) {
                    if (object.hasOwnProperty(prop)) {
                        localStorage.setItem(prop, object[prop]);
                    }
                }
            });
            resolve();
        });
    }

    function get() {
        var args = [].slice.call(arguments);
        return new Promise(function (resolve) {
            var result = [];
            args.forEach(function (key) {
                result.push(localStorage.getItem(key));
            });
            resolve(result);
        });
    }

    function remove() {
        var args = [].slice.call(arguments);
        return new Promise(function (resolve) {
            args.forEach(function (key) {
                localStorage.removeItem(key);
            });
            resolve();
        });
    }

    function clear() {
        return new Promise(function (resolve) {
            localStorage.clear();
            resolve();
        });
    }

    return {
        set: set,
        get: get,
        remove: remove,
        clear: clear
    }
}());
var _logTimer = (new Date()).getTime()
function dT () {
    return '[' + (((new Date()).getTime() - _logTimer) / 1000).toFixed(3) + ']'
}

function tsNow (seconds) {
    var t = +new Date() + (window.tsOffset || 0)
    return seconds ? Math.floor(t / 1000) : t
}
/*!
 * Webogram v0.7.0 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

function TLSerialization (options) {
  options = options || {}
  this.maxLength = options.startMaxLength || 2048 // 2Kb
  this.offset = 0 // in bytes

  this.createBuffer()

  this.debug = true;
  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug
  this.mtproto = options.mtproto || false
  return this
}

TLSerialization.prototype.createBuffer = function () {
  this.buffer = new ArrayBuffer(this.maxLength)
  this.intView = new Int32Array(this.buffer)
  this.byteView = new Uint8Array(this.buffer)
}

TLSerialization.prototype.getArray = function () {
  var resultBuffer = new ArrayBuffer(this.offset)
  var resultArray = new Int32Array(resultBuffer)

  resultArray.set(this.intView.subarray(0, this.offset / 4))

  return resultArray
}

TLSerialization.prototype.getBuffer = function () {
  return this.getArray().buffer
}

TLSerialization.prototype.getBytes = function (typed) {
  if (typed) {
    var resultBuffer = new ArrayBuffer(this.offset)
    var resultArray = new Uint8Array(resultBuffer)

    resultArray.set(this.byteView.subarray(0, this.offset))

    return resultArray
  }

  var bytes = []
  for (var i = 0; i < this.offset; i++) {
    bytes.push(this.byteView[i])
  }
  return bytes
}

TLSerialization.prototype.checkLength = function (needBytes) {
  if (this.offset + needBytes < this.maxLength) {
    return
  }

  console.trace('Increase buffer', this.offset, needBytes, this.maxLength)
  this.maxLength = Math.ceil(Math.max(this.maxLength * 2, this.offset + needBytes + 16) / 4) * 4
  var previousBuffer = this.buffer
  var previousArray = new Int32Array(previousBuffer)

  this.createBuffer()

  new Int32Array(this.buffer).set(previousArray)
}

TLSerialization.prototype.writeInt = function (i, field) {
  this.debug && console.log('>>>', i.toString(16), i, field)

  this.checkLength(4)
  this.intView[this.offset / 4] = i
  this.offset += 4
}

TLSerialization.prototype.storeInt = function (i, field) {
  this.writeInt(i, (field || '') + ':int')
}

TLSerialization.prototype.storeBool = function (i, field) {
  if (i) {
    this.writeInt(0x997275b5, (field || '') + ':bool')
  } else {
    this.writeInt(0xbc799737, (field || '') + ':bool')
  }
}

TLSerialization.prototype.storeLongP = function (iHigh, iLow, field) {
  this.writeInt(iLow, (field || '') + ':long[low]')
  this.writeInt(iHigh, (field || '') + ':long[high]')
}

TLSerialization.prototype.storeLong = function (sLong, field) {
  if (Array.isArray(sLong)) {
    if (sLong.length == 2) {
      return this.storeLongP(sLong[0], sLong[1], field)
    } else {
      return this.storeIntBytes(sLong, 64, field)
    }
  }

  if (typeof sLong != 'string') {
    sLong = sLong ? sLong.toString() : '0'
  }
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000))

  this.writeInt(intToUint(divRem[1].intValue()), (field || '') + ':long[low]')
  this.writeInt(intToUint(divRem[0].intValue()), (field || '') + ':long[high]')
}

TLSerialization.prototype.storeDouble = function (f, field) {
  var buffer = new ArrayBuffer(8)
  var intView = new Int32Array(buffer)
  var doubleView = new Float64Array(buffer)

  doubleView[0] = f

  this.writeInt(intView[0], (field || '') + ':double[low]')
  this.writeInt(intView[1], (field || '') + ':double[high]')
}

TLSerialization.prototype.storeString = function (s, field) {
  this.debug && console.log('>>>', s, (field || '') + ':string')

  if (s === undefined) {
    s = ''
  }
  var sUTF8 = unescape(encodeURIComponent(s))

  this.checkLength(sUTF8.length + 8)

  var len = sUTF8.length
  if (len <= 253) {
    this.byteView[this.offset++] = len
  } else {
    this.byteView[this.offset++] = 254
    this.byteView[this.offset++] = len & 0xFF
    this.byteView[this.offset++] = (len & 0xFF00) >> 8
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16
  }
  for (var i = 0; i < len; i++) {
    this.byteView[this.offset++] = sUTF8.charCodeAt(i)
  }

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0
  }
}

TLSerialization.prototype.storeBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  else if (bytes === undefined) {
    bytes = []
  }
  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':bytes')

  var len = bytes.byteLength || bytes.length
  this.checkLength(len + 8)
  if (len <= 253) {
    this.byteView[this.offset++] = len
  } else {
    this.byteView[this.offset++] = 254
    this.byteView[this.offset++] = len & 0xFF
    this.byteView[this.offset++] = (len & 0xFF00) >> 8
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16
  }

  this.byteView.set(bytes, this.offset)
  this.offset += len

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0
  }
}

TLSerialization.prototype.storeIntBytes = function (bytes, bits, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  var len = bytes.length
  if ((bits % 32) || (len * 8) != bits) {
    throw new Error('Invalid bits: ' + bits + ', ' + bytes.length)
  }

  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':int' + bits)
  this.checkLength(len)

  this.byteView.set(bytes, this.offset)
  this.offset += len
}

TLSerialization.prototype.storeRawBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes)
  }
  var len = bytes.length

  this.debug && console.log('>>>', bytesToHex(bytes), (field || ''))
  this.checkLength(len)

  this.byteView.set(bytes, this.offset)
  this.offset += len
}

TLSerialization.prototype.storeMethod = function (methodName, params) {
  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API
  var methodData = false,
    i

  for (i = 0; i < schema.methods.length; i++) {
    if (schema.methods[i].method == methodName) {
      methodData = schema.methods[i]
      break
    }
  }
  if (!methodData) {
    throw new Error('No method ' + methodName + ' found')
  }

  this.storeInt(intToUint(methodData.id), methodName + '[id]')

  var param, type
  var i, condType
  var fieldBit
  var len = methodData.params.length
  for (i = 0; i < len; i++) {
    param = methodData.params[i]
    type = param.type
    if (type.indexOf('?') !== -1) {
      condType = type.split('?')
      fieldBit = condType[0].split('.')
      if (!(params[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue
      }
      type = condType[1]
    }

    this.storeObject(params[param.name], type, methodName + '[' + param.name + ']')
  }

  return methodData.type
}

TLSerialization.prototype.storeObject = function (obj, type, field) {
  switch (type) {
    case '#':
    case 'int':
      return this.storeInt(obj, field)
    case 'long':
      return this.storeLong(obj, field)
    case 'int128':
      return this.storeIntBytes(obj, 128, field)
    case 'int256':
      return this.storeIntBytes(obj, 256, field)
    case 'int512':
      return this.storeIntBytes(obj, 512, field)
    case 'string':
      return this.storeString(obj, field)
    case 'bytes':
      return this.storeBytes(obj, field)
    case 'double':
      return this.storeDouble(obj, field)
    case 'Bool':
      return this.storeBool(obj, field)
    case 'true':
      return
  }

  if (Array.isArray(obj)) {
    if (type.substr(0, 6) == 'Vector') {
      this.writeInt(0x1cb5c415, field + '[id]')
    }
    else if (type.substr(0, 6) != 'vector') {
      throw new Error('Invalid vector type ' + type)
    }
    var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
    this.writeInt(obj.length, field + '[count]')
    for (var i = 0; i < obj.length; i++) {
      this.storeObject(obj[i], itemType, field + '[' + i + ']')
    }
    return true
  }
  else if (type.substr(0, 6).toLowerCase() == 'vector') {
    throw new Error('Invalid vector object')
  }

  if (typeof obj !== 'object') {
    throw new Error('Invalid object for type ' + type)
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API
  var predicate = obj['_']
  var isBare = false
  var constructorData = false,
    i

  if (isBare = (type.charAt(0) == '%')) {
    type = type.substr(1)
  }

  for (i = 0; i < schema.constructors.length; i++) {
    if (schema.constructors[i].predicate == predicate) {
      constructorData = schema.constructors[i]
      break
    }
  }
  if (!constructorData) {
    throw new Error('No predicate ' + predicate + ' found')
  }

  if (predicate == type) {
    isBare = true
  }

  if (!isBare) {
    this.writeInt(intToUint(constructorData.id), field + '[' + predicate + '][id]')
  }

  var param, type
  var i, condType
  var fieldBit
  var len = constructorData.params.length
  for (i = 0; i < len; i++) {
    param = constructorData.params[i]
    type = param.type
    if (type.indexOf('?') !== -1) {
      condType = type.split('?')
      fieldBit = condType[0].split('.')
      if (!(obj[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue
      }
      type = condType[1]
    }

    this.storeObject(obj[param.name], type, field + '[' + predicate + '][' + param.name + ']')
  }

  return constructorData.type
}

function TLDeserialization (buffer, options) {
  options = options || {}

  this.offset = 0 // in bytes
  this.override = options.override || {}

  this.buffer = buffer
  this.intView = new Uint32Array(this.buffer)
  this.byteView = new Uint8Array(this.buffer)

  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug
  this.mtproto = options.mtproto || false
  return this
}

TLDeserialization.prototype.readInt = function (field) {
  if (this.offset >= this.intView.length * 4) {
    throw new Error('Nothing to fetch: ' + field)
  }

  var i = this.intView[this.offset / 4]

  this.debug && console.log('<<<', i.toString(16), i, field)

  this.offset += 4

  return i
}

TLDeserialization.prototype.fetchInt = function (field) {
  return this.readInt((field || '') + ':int')
}

TLDeserialization.prototype.fetchDouble = function (field) {
  var buffer = new ArrayBuffer(8)
  var intView = new Int32Array(buffer)
  var doubleView = new Float64Array(buffer)

  intView[0] = this.readInt((field || '') + ':double[low]'),
  intView[1] = this.readInt((field || '') + ':double[high]')

  return doubleView[0]
}

TLDeserialization.prototype.fetchLong = function (field) {
  var iLow = this.readInt((field || '') + ':long[low]')
  var iHigh = this.readInt((field || '') + ':long[high]')

  var longDec = bigint(iHigh).shiftLeft(32).add(bigint(iLow)).toString()

  return longDec
}

TLDeserialization.prototype.fetchBool = function (field) {
  var i = this.readInt((field || '') + ':bool')
  if (i == 0x997275b5) {
    return true
  } else if (i == 0xbc799737) {
    return false
  }

  this.offset -= 4
  return this.fetchObject('Object', field)
}

TLDeserialization.prototype.fetchString = function (field) {
  var len = this.byteView[this.offset++]

  if (len == 254) {
    var len = this.byteView[this.offset++] |
      (this.byteView[this.offset++] << 8) |
      (this.byteView[this.offset++] << 16)
  }

  var sUTF8 = ''
  for (var i = 0; i < len; i++) {
    sUTF8 += String.fromCharCode(this.byteView[this.offset++])
  }

  // Padding
  while (this.offset % 4) {
    this.offset++
  }

  try {
    var s = decodeURIComponent(escape(sUTF8))
  } catch (e) {
    var s = sUTF8
  }

  this.debug && console.log('<<<', s, (field || '') + ':string')

  return s
}

TLDeserialization.prototype.fetchBytes = function (field) {
  var len = this.byteView[this.offset++]

  if (len == 254) {
    len = this.byteView[this.offset++] |
      (this.byteView[this.offset++] << 8) |
      (this.byteView[this.offset++] << 16)
  }

  var bytes = this.byteView.subarray(this.offset, this.offset + len)
  this.offset += len

  // Padding
  while (this.offset % 4) {
    this.offset++
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':bytes')

  return bytes
}

TLDeserialization.prototype.fetchIntBytes = function (bits, typed, field) {
  if (bits % 32) {
    throw new Error('Invalid bits: ' + bits)
  }

  var len = bits / 8
  if (typed) {
    var result = this.byteView.subarray(this.offset, this.offset + len)
    this.offset += len
    return result
  }

  var bytes = []
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++])
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':int' + bits)

  return bytes
}

TLDeserialization.prototype.fetchRawBytes = function (len, typed, field) {
  if (len === false) {
    len = this.readInt((field || '') + '_length')
    if (len > this.byteView.byteLength) {
      throw new Error('Invalid raw bytes length: ' + len + ', buffer len: ' + this.byteView.byteLength)
    }
  }

  if (typed) {
    var bytes = new Uint8Array(len)
    bytes.set(this.byteView.subarray(this.offset, this.offset + len))
    this.offset += len
    return bytes
  }

  var bytes = []
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++])
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || ''))

  return bytes
}

TLDeserialization.prototype.fetchObject = function (type, field) {
  switch (type) {
    case '#':
    case 'int':
      return this.fetchInt(field)
    case 'long':
      return this.fetchLong(field)
    case 'int128':
      return this.fetchIntBytes(128, false, field)
    case 'int256':
      return this.fetchIntBytes(256, false, field)
    case 'int512':
      return this.fetchIntBytes(512, false, field)
    case 'string':
      return this.fetchString(field)
    case 'bytes':
      return this.fetchBytes(field)
    case 'double':
      return this.fetchDouble(field)
    case 'Bool':
      return this.fetchBool(field)
    case 'true':
      return true
  }

  field = field || type || 'Object'

  if (type.substr(0, 6) == 'Vector' || type.substr(0, 6) == 'vector') {
    if (type.charAt(0) == 'V') {
      var constructor = this.readInt(field + '[id]')
      var constructorCmp = uintToInt(constructor)

      if (constructorCmp == 0x3072cfa1) { // Gzip packed
        var compressed = this.fetchBytes(field + '[packed_string]')
        var uncompressed = gzipUncompress(compressed)
        var buffer = bytesToArrayBuffer(uncompressed)
        var newDeserializer = (new TLDeserialization(buffer))

        return newDeserializer.fetchObject(type, field)
      }
      if (constructorCmp != 0x1cb5c415) {
        throw new Error('Invalid vector constructor ' + constructor)
      }
    }
    var len = this.readInt(field + '[count]')
    var result = []
    if (len > 0) {
      var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
      for (var i = 0; i < len; i++) {
        result.push(this.fetchObject(itemType, field + '[' + i + ']'))
      }
    }

    return result
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API
  var predicate = false
  var constructorData = false

  if (type.charAt(0) == '%') {
    var checkType = type.substr(1)
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].type == checkType) {
        constructorData = schema.constructors[i]
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for type: ' + type)
    }
  }
  else if (type.charAt(0) >= 97 && type.charAt(0) <= 122) {
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].predicate == type) {
        constructorData = schema.constructors[i]
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for predicate: ' + type)
    }
  }else {
    var constructor = this.readInt(field + '[id]')
    var constructorCmp = uintToInt(constructor)

    if (constructorCmp == 0x3072cfa1) { // Gzip packed
      var compressed = this.fetchBytes(field + '[packed_string]')
      var uncompressed = gzipUncompress(compressed)
      var buffer = bytesToArrayBuffer(uncompressed)
      var newDeserializer = (new TLDeserialization(buffer))

      return newDeserializer.fetchObject(type, field)
    }

    var index = schema.constructorsIndex
    if (!index) {
      schema.constructorsIndex = index = {}
      for (var i = 0; i < schema.constructors.length; i++) {
        index[schema.constructors[i].id] = i
      }
    }
    var i = index[constructorCmp]
    if (i) {
      constructorData = schema.constructors[i]
    }

    var fallback = false
    if (!constructorData && this.mtproto) {
      var schemaFallback = Config.Schema.API
      for (i = 0; i < schemaFallback.constructors.length; i++) {
        if (schemaFallback.constructors[i].id == constructorCmp) {
          constructorData = schemaFallback.constructors[i]

          delete this.mtproto
          fallback = true
          break
        }
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found: ' + constructor + ' ' + this.fetchInt() + ' ' + this.fetchInt())
    }
  }

  predicate = constructorData.predicate

  var result = {'_': predicate}
  var overrideKey = (this.mtproto ? 'mt_' : '') + predicate
  var self = this

  if (this.override[overrideKey]) {
    this.override[overrideKey].apply(this, [result, field + '[' + predicate + ']'])
  } else {
    var i, param
    var type, isCond
    var condType, fieldBit
    var value
    var len = constructorData.params.length
    for (i = 0; i < len; i++) {
      param = constructorData.params[i]
      type = param.type
      if (type == '#' && result.pFlags === undefined) {
        result.pFlags = {}
      }
      if (isCond = (type.indexOf('?') !== -1)) {
        condType = type.split('?')
        fieldBit = condType[0].split('.')
        if (!(result[fieldBit[0]] & (1 << fieldBit[1]))) {
          continue
        }
        type = condType[1]
      }

      value = self.fetchObject(type, field + '[' + predicate + '][' + param.name + ']')

      if (isCond && type === 'true') {
        result.pFlags[param.name] = value
      } else {
        result[param.name] = value
      }
    }
  }

  if (fallback) {
    this.mtproto = true
  }

  return result
}

TLDeserialization.prototype.getOffset = function () {
  return this.offset
}

TLDeserialization.prototype.fetchEnd = function () {
  if (this.offset != this.byteView.length) {
    throw new Error('Fetch end with non-empty buffer')
  }
  return true
}

window.MtpDcConfigurator = (function () {
    var sslSubdomains = ['pluto', 'venus', 'aurora', 'vesta', 'flora']

    var dcOptions = Config.Modes.test
        ? [
            { id: 1, host: '149.154.175.10', port: 80 },
            { id: 2, host: '149.154.167.40', port: 80 },
            { id: 3, host: '149.154.175.117', port: 80 }
        ]
        : [
            { id: 1, host: '149.154.175.50', port: 80 },
            { id: 2, host: '149.154.167.51', port: 80 },
            { id: 3, host: '149.154.175.100', port: 80 },
            { id: 4, host: '149.154.167.91', port: 80 },
            { id: 5, host: '149.154.171.5', port: 80 }
        ];

    var chosenServers = {};

    function chooseServer(dcID, upload) {
        if (chosenServers[dcID] === undefined) {
            var chosenServer = false,
                i, dcOption;

            if (Config.Modes.ssl || !Config.Modes.http) {
                var subdomain = sslSubdomains[dcID - 1] + (upload ? '-1' : '')
                var path = Config.Modes.test ? 'apiw_test1' : 'apiw1'
                chosenServer = 'https://' + subdomain + '.web.telegram.org/' + path
                return chosenServer
            }

            for (i = 0; i < dcOptions.length; i++) {
                dcOption = dcOptions[i]
                if (dcOption.id == dcID) {
                    chosenServer = 'http://' + dcOption.host + (dcOption.port != 80 ? ':' + dcOption.port : '') + '/apiw1'
                    break
                }
            }
            chosenServers[dcID] = chosenServer
        }

        return chosenServers[dcID]
    }

    return {
        chooseServer: chooseServer
    }
})();
window.MtpRsaKeysManager = (function() {

    /**
     *  Server public key, obtained from here: https://core.telegram.org/api/obtaining_api_id
     *
     *
     *  -----BEGIN RSA PUBLIC KEY-----
     *  MIIBCgKCAQEAwVACPi9w23mF3tBkdZz+zwrzKOaaQdr01vAbU4E1pvkfj4sqDsm6
     *  lyDONS789sVoD/xCS9Y0hkkC3gtL1tSfTlgCMOOul9lcixlEKzwKENj1Yz/s7daS
     *  an9tqw3bfUV/nqgbhGX81v/+7RFAEd+RwFnK7a+XYl9sluzHRyVVaTTveB2GazTw
     *  Efzk2DWgkBluml8OREmvfraX3bkHZJTKX4EQSjBbbdJ2ZXIsRrYOXfaA+xayEGB+
     *  8hdlLmAjbCVfaigxX0CDqWeR1yFL9kwd9P0NsZRPsmoqVwMbMu7mStFai6aIhc3n
     *  Slv8kg9qv1m6XHVQY3PnEw+QQtqSIXklHwIDAQAB
     *  -----END RSA PUBLIC KEY-----
     *
     *  -----BEGIN PUBLIC KEY-----
     *  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAruw2yP/BCcsJliRoW5eB
     *  VBVle9dtjJw+OYED160Wybum9SXtBBLXriwt4rROd9csv0t0OHCaTmRqBcQ0J8fx
     *  hN6/cpR1GWgOZRUAiQxoMnlt0R93LCX/j1dnVa/gVbCjdSxpbrfY2g2L4frzjJvd
     *  l84Kd9ORYjDEAyFnEA7dD556OptgLQQ2e2iVNq8NZLYTzLp5YpOdO1doK+ttrltg
     *  gTCy5SrKeLoCPPbOgGsdxJxyz5KKcZnSLj16yE5HvJQn0CNpRdENvRUXe6tBP78O
     *  39oJ8BTHp9oIjd6XWXAsp2CvK45Ol8wFXGF710w9lwCGNbmNxNYhtIkdqfsEcwR5
     *  JwIDAQAB
     *  -----END PUBLIC KEY-----
     *
     *  -----BEGIN PUBLIC KEY-----
     *  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvfLHfYH2r9R70w8prHbl
     *  Wt/nDkh+XkgpflqQVcnAfSuTtO05lNPspQmL8Y2XjVT4t8cT6xAkdgfmmvnvRPOO
     *  KPi0OfJXoRVylFzAQG/j83u5K3kRLbae7fLccVhKZhY46lvsueI1hQdLgNV9n1cQ
     *  3TDS2pQOCtovG4eDl9wacrXOJTG2990VjgnIKNA0UMoP+KF03qzryqIt3oTvZq03
     *  DyWdGK+AZjgBLaDKSnC6qD2cFY81UryRWOab8zKkWAnhw2kFpcqhI0jdV5QaSCEx
     *  vnsjVaX0Y1N0870931/5Jb9ICe4nweZ9kSDF/gip3kWLG0o8XQpChDfyvsqB9OLV
     *  /wIDAQAB
     *  -----END PUBLIC KEY-----
     *
     *  -----BEGIN PUBLIC KEY-----
     *  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs/ditzm+mPND6xkhzwFI
     *  z6J/968CtkcSE/7Z2qAJiXbmZ3UDJPGrzqTDHkO30R8VeRM/Kz2f4nR05GIFiITl
     *  4bEjvpy7xqRDspJcCFIOcyXm8abVDhF+th6knSU0yLtNKuQVP6voMrnt9MV1X92L
     *  GZQLgdHZbPQz0Z5qIpaKhdyA8DEvWWvSUwwc+yi1/gGaybwlzZwqXYoPOhwMebzK
     *  Uk0xW14htcJrRrq+PXXQbRzTMynseCoPIoke0dtCodbA3qQxQovE16q9zz4Otv2k
     *  4j63cz53J+mhkVWAeWxVGI0lltJmWtEYK6er8VqqWot3nqmWMXogrgRLggv/Nbbo
     *  oQIDAQAB
     *  -----END PUBLIC KEY-----
     *
     *  -----BEGIN PUBLIC KEY-----
     *  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvmpxVY7ld/8DAjz6F6q0
     *  5shjg8/4p6047bn6/m8yPy1RBsvIyvuDuGnP/RzPEhzXQ9UJ5Ynmh2XJZgHoE9xb
     *  nfxL5BXHplJhMtADXKM9bWB11PU1Eioc3+AXBB8QiNFBn2XI5UkO5hPhbb9mJpjA
     *  9Uhw8EdfqJP8QetVsI/xrCEbwEXe0xvifRLJbY08/Gp66KpQvy7g8w7VB8wlgePe
     *  xW3pT13Ap6vuC+mQuJPyiHvSxjEKHgqePji9NP3tJUFQjcECqcm0yV7/2d0t/pbC
     *  m+ZH1sadZspQCEPPrtbkQBlvHb4OLiIWPGHKSMeRFvp3IWcmdJqXahxLCUS1Eh6M
     *  AQIDAQAB
     *  -----END PUBLIC KEY-----
     *
     * Bytes can be got via
     * $ openssl rsa -pubin -in key.pub -text -noout
     */

    var publisKeysHex = [
        {
            modulus: 'c150023e2f70db7985ded064759cfecf0af328e69a41daf4d6f01b538135a6f91f8f8b2a0ec9ba9720ce352efcf6c5680ffc424bd634864902de0b4bd6d49f4e580230e3ae97d95c8b19442b3c0a10d8f5633fecedd6926a7f6dab0ddb7d457f9ea81b8465fcd6fffeed114011df91c059caedaf97625f6c96ecc74725556934ef781d866b34f011fce4d835a090196e9a5f0e4449af7eb697ddb9076494ca5f81104a305b6dd27665722c46b60e5df680fb16b210607ef217652e60236c255f6a28315f4083a96791d7214bf64c1df4fd0db1944fb26a2a57031b32eee64ad15a8ba68885cde74a5bfc920f6abf59ba5c75506373e7130f9042da922179251f',
            exponent: '010001'
        },
        {
            modulus: 'aeec36c8ffc109cb099624685b97815415657bd76d8c9c3e398103d7ad16c9bba6f525ed0412d7ae2c2de2b44e77d72cbf4b7438709a4e646a05c43427c7f184debf72947519680e651500890c6832796dd11f772c25ff8f576755afe055b0a3752c696eb7d8da0d8be1faf38c9bdd97ce0a77d3916230c4032167100edd0f9e7a3a9b602d04367b689536af0d64b613ccba7962939d3b57682beb6dae5b608130b2e52aca78ba023cf6ce806b1dc49c72cf928a7199d22e3d7ac84e47bc9427d0236945d10dbd15177bab413fbf0edfda09f014c7a7da088dde9759702ca760af2b8e4e97cc055c617bd74c3d97008635b98dc4d621b4891da9fb0473047927',
            exponent: '010001'
        },
        {
            modulus: 'bdf2c77d81f6afd47bd30f29ac76e55adfe70e487e5e48297e5a9055c9c07d2b93b4ed3994d3eca5098bf18d978d54f8b7c713eb10247607e69af9ef44f38e28f8b439f257a11572945cc0406fe3f37bb92b79112db69eedf2dc71584a661638ea5becb9e23585074b80d57d9f5710dd30d2da940e0ada2f1b878397dc1a72b5ce2531b6f7dd158e09c828d03450ca0ff8a174deacebcaa22dde84ef66ad370f259d18af806638012da0ca4a70baa83d9c158f3552bc9158e69bf332a45809e1c36905a5caa12348dd57941a482131be7b2355a5f4635374f3bd3ddf5ff925bf4809ee27c1e67d9120c5fe08a9de458b1b4a3c5d0a428437f2beca81f4e2d5ff',
            exponent: '010001'
        },
        {
            modulus: 'b3f762b739be98f343eb1921cf0148cfa27ff7af02b6471213fed9daa0098976e667750324f1abcea4c31e43b7d11f1579133f2b3d9fe27474e462058884e5e1b123be9cbbc6a443b2925c08520e7325e6f1a6d50e117eb61ea49d2534c8bb4d2ae4153fabe832b9edf4c5755fdd8b19940b81d1d96cf433d19e6a22968a85dc80f0312f596bd2530c1cfb28b5fe019ac9bc25cd9c2a5d8a0f3a1c0c79bcca524d315b5e21b5c26b46babe3d75d06d1cd33329ec782a0f22891ed1db42a1d6c0dea431428bc4d7aabdcf3e0eb6fda4e23eb7733e7727e9a1915580796c55188d2596d2665ad1182ba7abf15aaa5a8b779ea996317a20ae044b820bff35b6e8a1',
            exponent: '010001'
        },
        {
            modulus: 'be6a71558ee577ff03023cfa17aab4e6c86383cff8a7ad38edb9fafe6f323f2d5106cbc8cafb83b869cffd1ccf121cd743d509e589e68765c96601e813dc5b9dfc4be415c7a6526132d0035ca33d6d6075d4f535122a1cdfe017041f1088d1419f65c8e5490ee613e16dbf662698c0f54870f0475fa893fc41eb55b08ff1ac211bc045ded31be27d12c96d8d3cfc6a7ae8aa50bf2ee0f30ed507cc2581e3dec56de94f5dc0a7abee0be990b893f2887bd2c6310a1e0a9e3e38bd34fded2541508dc102a9c9b4c95effd9dd2dfe96c29be647d6c69d66ca500843cfaed6e440196f1dbe0e2e22163c61ca48c79116fa77216726749a976a1c4b0944b5121e8c01',
            exponent: '010001'
        }
    ]

    var publicKeysParsed = {}
    var prepared = false

    function prepareRsaKeys () {
        if (prepared) {
            return
        }

        for (var i = 0; i < publisKeysHex.length; i++) {
            var keyParsed = publisKeysHex[i]

            var RSAPublicKey = new TLSerialization()
            RSAPublicKey.storeBytes(bytesFromHex(keyParsed.modulus), 'n')
            RSAPublicKey.storeBytes(bytesFromHex(keyParsed.exponent), 'e')

            var buffer = RSAPublicKey.getBuffer()

            var fingerprintBytes = sha1BytesSync(buffer).slice(-8)
            fingerprintBytes.reverse()

            publicKeysParsed[bytesToHex(fingerprintBytes)] = {
                modulus: keyParsed.modulus,
                exponent: keyParsed.exponent
            }
        }

        prepared = true
    }

    function selectRsaKeyByFingerPrint (fingerprints) {
        prepareRsaKeys();

        var fingerprintHex, foundKey, i
        for (i = 0; i < fingerprints.length; i++) {
            fingerprintHex = bigStringInt(fingerprints[i]).toString(16)
            if (foundKey = publicKeysParsed[fingerprintHex]) {
                return Object.assign({fingerprint: fingerprints[i]}, foundKey)
            }
        }

        return false
    }

    return {
        prepare: prepareRsaKeys,
        select: selectRsaKeyByFingerPrint
    };
})();
window.MtpSecureRandom = (function () {
    document.addEventListener('click', function () {
        rng_seed_time();
    });
    document.addEventListener('keydown', function () {
        rng_seed_time();
    });
    return new SecureRandom();
}());
window.MtpTimeManager = (function () {
    var Storage = window.Storage;
    var lastMessageID = [0, 0]
    var timeOffset = 0

    // var to = localStorage.getItem('server_time_offset');
    var to = Storage.get('server_time_offset');
    if (to) {
        timeOffset = to;
    }

    function generateMessageID() {
        var timeTicks = tsNow(),
            timeSec = Math.floor(timeTicks / 1000) + timeOffset,
            timeMSec = timeTicks % 1000,
            random = nextRandomInt(0xFFFF)

        var messageID = [timeSec, (timeMSec << 21) | (random << 3) | 4]
        if (lastMessageID[0] > messageID[0] ||
            lastMessageID[0] == messageID[0] && lastMessageID[1] >= messageID[1]) {
            messageID = [lastMessageID[0], lastMessageID[1] + 4]
        }

        lastMessageID = messageID;

        // console.log('generated msg id', messageID, timeOffset)

        return longFromInts(messageID[0], messageID[1])
    }

    function applyServerTime(serverTime, localTime) {
        var newTimeOffset = serverTime - Math.floor((localTime || tsNow()) / 1000)
        var changed = Math.abs(timeOffset - newTimeOffset) > 10;
        Storage.set({ server_time_offset: newTimeOffset });

        lastMessageID = [0, 0];
        timeOffset = newTimeOffset;

        return changed
    }

    return {
        generateID: generateMessageID,
        applyServerTime: applyServerTime
    }
}());
// MtpDcConfigurator, MtpRsaKeysManager, MtpSecureRandom, MtpTimeManager, CryptoWorker, $http, $q, $timeout
window.MtpAuthorizer = (function () {
    var MtpDcConfigurator = window.MtpDcConfigurator;
    var MtpRsaKeysManager = window.MtpRsaKeysManager;
    var MtpSecureRandom = window.MtpSecureRandom;
    var MtpTimeManager = window.MtpTimeManager;
    var CryptoWorker = window.CryptoWorker;
    var $http = window.$http;
    var $q = window.$q;
    var angular = window.angular;
    var $timeout = window.$timeout;
    var chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/)
    var chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false
    var xhrSendBuffer = !('ArrayBufferView' in window) && (chromeVersion > 0 && chromeVersion < 30);

    delete $http.defaults.headers.post['Content-Type']
    delete $http.defaults.headers.common['Accept']

    function mtpSendPlainRequest(dcID, requestBuffer) {
        var requestLength = requestBuffer.byteLength,
            requestArray = new Int32Array(requestBuffer)

        var header = new TLSerialization()
        header.storeLongP(0, 0, 'auth_key_id') // Auth key
        header.storeLong(MtpTimeManager.generateID(), 'msg_id') // Msg_id
        header.storeInt(requestLength, 'request_length')

        var headerBuffer = header.getBuffer(),
            headerArray = new Int32Array(headerBuffer)
        var headerLength = headerBuffer.byteLength

        var resultBuffer = new ArrayBuffer(headerLength + requestLength),
            resultArray = new Int32Array(resultBuffer)

        resultArray.set(headerArray)
        resultArray.set(requestArray, headerArray.length)

        var requestData = xhrSendBuffer ? resultBuffer : resultArray,
            requestPromise
        var url = MtpDcConfigurator.chooseServer(dcID)
        var baseError = { code: 406, type: 'NETWORK_BAD_RESPONSE', url: url }
        try {
            requestPromise = $http.post(url, requestData, {
                responseType: 'arraybuffer',
                transformRequest: null
            })
        } catch (e) {
            requestPromise = $q.reject(angular.extend(baseError, { originalError: e }))
        }
        return requestPromise.then(
            function (result) {
                if (!result.data || !result.data.byteLength) {
                    return $q.reject(baseError)
                }

                try {
                    var deserializer = new TLDeserialization(result.data, { mtproto: true })
                    var auth_key_id = deserializer.fetchLong('auth_key_id')
                    var msg_id = deserializer.fetchLong('msg_id')
                    var msg_len = deserializer.fetchInt('msg_len')
                } catch (e) {
                    return $q.reject(angular.extend(baseError, { originalError: e }))
                }

                return deserializer
            },
            function (error) {
                if (!error.message && !error.type) {
                    error = angular.extend(baseError, { originalError: error })
                }
                return $q.reject(error)
            }
        )
    }

    function mtpSendReqPQ(auth) {
        var deferred = auth.deferred

        var request = new TLSerialization({ mtproto: true })

        request.storeMethod('req_pq', { nonce: auth.nonce })

        console.log(dT(), 'Send req_pq', bytesToHex(auth.nonce))
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('ResPQ')

            if (response._ != 'resPQ') {
                throw new Error('[MT] resPQ response invalid: ' + response._)
            }

            if (!bytesCmp(auth.nonce, response.nonce)) {
                throw new Error('[MT] resPQ nonce mismatch')
            }

            auth.serverNonce = response.server_nonce
            auth.pq = response.pq
            auth.fingerprints = response.server_public_key_fingerprints

            console.log(dT(), 'Got ResPQ', bytesToHex(auth.serverNonce), bytesToHex(auth.pq), auth.fingerprints)

            auth.publicKey = MtpRsaKeysManager.select(auth.fingerprints)

            if (!auth.publicKey) {
                throw new Error('[MT] No public key found')
            }

            console.log(dT(), 'PQ factorization start', auth.pq)
            CryptoWorker.factorize(auth.pq).then(function (pAndQ) {
                auth.p = pAndQ[0]
                auth.q = pAndQ[1]
                console.log(dT(), 'PQ factorization done', pAndQ[2])
                mtpSendReqDhParams(auth)
            }, function (error) {
                console.log('Worker error', error, error.stack)
                deferred.reject(error)
            })
        }, function (error) {
            console.error(dT(), 'req_pq error', error.message)
            deferred.reject(error)
        })

        $timeout(function () {
            MtpRsaKeysManager.prepare()
        })
    }

    function mtpSendReqDhParams(auth) {
        var deferred = auth.deferred

        auth.newNonce = new Array(32)
        MtpSecureRandom.nextBytes(auth.newNonce)

        var data = new TLSerialization({ mtproto: true })
        data.storeObject({
            _: 'p_q_inner_data',
            pq: auth.pq,
            p: auth.p,
            q: auth.q,
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            new_nonce: auth.newNonce
        }, 'P_Q_inner_data', 'DECRYPTED_DATA')

        var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes())

        var request = new TLSerialization({ mtproto: true })
        request.storeMethod('req_DH_params', {
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            p: auth.p,
            q: auth.q,
            public_key_fingerprint: auth.publicKey.fingerprint,
            encrypted_data: rsaEncrypt(auth.publicKey, dataWithHash)
        })

        console.log(dT(), 'Send req_DH_params')
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('Server_DH_Params', 'RESPONSE')

            if (response._ != 'server_DH_params_fail' && response._ != 'server_DH_params_ok') {
                deferred.reject(new Error('[MT] Server_DH_Params response invalid: ' + response._))
                return false
            }

            if (!bytesCmp(auth.nonce, response.nonce)) {
                deferred.reject(new Error('[MT] Server_DH_Params nonce mismatch'))
                return false
            }

            if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
                deferred.reject(new Error('[MT] Server_DH_Params server_nonce mismatch'))
                return false
            }

            if (response._ == 'server_DH_params_fail') {
                var newNonceHash = sha1BytesSync(auth.newNonce).slice(-16)
                if (!bytesCmp(newNonceHash, response.new_nonce_hash)) {
                    deferred.reject(new Error('[MT] server_DH_params_fail new_nonce_hash mismatch'))
                    return false
                }
                deferred.reject(new Error('[MT] server_DH_params_fail'))
                return false
            }

            try {
                mtpDecryptServerDhDataAnswer(auth, response.encrypted_answer)
            } catch (e) {
                deferred.reject(e)
                return false
            }

            mtpSendSetClientDhParams(auth)
        }, function (error) {
            deferred.reject(error)
        })
    }

    function mtpDecryptServerDhDataAnswer(auth, encryptedAnswer) {
        auth.localTime = tsNow()

        auth.tmpAesKey = sha1BytesSync(auth.newNonce.concat(auth.serverNonce)).concat(sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(0, 12))
        auth.tmpAesIv = sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(12).concat(sha1BytesSync([].concat(auth.newNonce, auth.newNonce)), auth.newNonce.slice(0, 4))

        var answerWithHash = aesDecryptSync(encryptedAnswer, auth.tmpAesKey, auth.tmpAesIv)

        var hash = answerWithHash.slice(0, 20)
        var answerWithPadding = answerWithHash.slice(20)
        var buffer = bytesToArrayBuffer(answerWithPadding)

        var deserializer = new TLDeserialization(buffer, { mtproto: true })
        var response = deserializer.fetchObject('Server_DH_inner_data')

        if (response._ != 'server_DH_inner_data') {
            throw new Error('[MT] server_DH_inner_data response invalid: ' + constructor)
        }

        if (!bytesCmp(auth.nonce, response.nonce)) {
            throw new Error('[MT] server_DH_inner_data nonce mismatch')
        }

        if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
            throw new Error('[MT] server_DH_inner_data serverNonce mismatch')
        }

        console.log(dT(), 'Done decrypting answer')
        auth.g = response.g
        auth.dhPrime = response.dh_prime
        auth.gA = response.g_a
        auth.serverTime = response.server_time
        auth.retry = 0

        mtpVerifyDhParams(auth.g, auth.dhPrime, auth.gA)

        var offset = deserializer.getOffset()

        if (!bytesCmp(hash, sha1BytesSync(answerWithPadding.slice(0, offset)))) {
            throw new Error('[MT] server_DH_inner_data SHA1-hash mismatch')
        }

        MtpTimeManager.applyServerTime(auth.serverTime, auth.localTime)
    }

    function mtpVerifyDhParams(g, dhPrime, gA) {
        console.log(dT(), 'Verifying DH params')
        var dhPrimeHex = bytesToHex(dhPrime)
        if (g != 3 ||
            dhPrimeHex !== 'c71caeb9c6b1c9048e6c522f70f13f73980d40238e3e21c14934d037563d930f48198a0aa7c14058229493d22530f4dbfa336f6e0ac925139543aed44cce7c3720fd51f69458705ac68cd4fe6b6b13abdc9746512969328454f18faf8c595f642477fe96bb2a941d5bcd1d4ac8cc49880708fa9b378e3c4f3a9060bee67cf9a4a4a695811051907e162753b56b0f6b410dba74d8a84b2a14b3144e0ef1284754fd17ed950d5965b4b9dd46582db1178d169c6bc465b0d6ff9ca3928fef5b9ae4e418fc15e83ebea0f87fa9ff5eed70050ded2849f47bf959d956850ce929851f0d8115f635b105ee2e4e15d04b2454bf6f4fadf034b10403119cd8e3b92fcc5b') {
            // The verified value is from https://core.telegram.org/mtproto/security_guidelines
            throw new Error('[MT] DH params are not verified: unknown dhPrime')
        }
        console.log(dT(), 'dhPrime cmp OK')

        var gABigInt = new BigInteger(bytesToHex(gA), 16)
        var dhPrimeBigInt = new BigInteger(dhPrimeHex, 16)

        if (gABigInt.compareTo(BigInteger.ONE) <= 0) {
            throw new Error('[MT] DH params are not verified: gA <= 1')
        }

        if (gABigInt.compareTo(dhPrimeBigInt.subtract(BigInteger.ONE)) >= 0) {
            throw new Error('[MT] DH params are not verified: gA >= dhPrime - 1')
        }
        console.log(dT(), '1 < gA < dhPrime-1 OK')


        var two = new BigInteger(null)
        two.fromInt(2)
        var twoPow = two.pow(2048 - 64)

        if (gABigInt.compareTo(twoPow) < 0) {
            throw new Error('[MT] DH params are not verified: gA < 2^{2048-64}')
        }
        if (gABigInt.compareTo(dhPrimeBigInt.subtract(twoPow)) >= 0) {
            throw new Error('[MT] DH params are not verified: gA > dhPrime - 2^{2048-64}')
        }
        console.log(dT(), '2^{2048-64} < gA < dhPrime-2^{2048-64} OK')

        return true
    }

    function mtpSendSetClientDhParams(auth) {
        var deferred = auth.deferred
        var gBytes = bytesFromHex(auth.g.toString(16))

        auth.b = new Array(256)
        MtpSecureRandom.nextBytes(auth.b)

        CryptoWorker.modPow(gBytes, auth.b, auth.dhPrime).then(function (gB) {
            var data = new TLSerialization({ mtproto: true })
            data.storeObject({
                _: 'client_DH_inner_data',
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                retry_id: [0, auth.retry++],
                g_b: gB
            }, 'Client_DH_Inner_Data')

            var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes())

            var encryptedData = aesEncryptSync(dataWithHash, auth.tmpAesKey, auth.tmpAesIv)

            var request = new TLSerialization({ mtproto: true })
            request.storeMethod('set_client_DH_params', {
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                encrypted_data: encryptedData
            })

            console.log(dT(), 'Send set_client_DH_params')
            mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
                var response = deserializer.fetchObject('Set_client_DH_params_answer')

                if (response._ != 'dh_gen_ok' && response._ != 'dh_gen_retry' && response._ != 'dh_gen_fail') {
                    deferred.reject(new Error('[MT] Set_client_DH_params_answer response invalid: ' + response._))
                    return false
                }

                if (!bytesCmp(auth.nonce, response.nonce)) {
                    deferred.reject(new Error('[MT] Set_client_DH_params_answer nonce mismatch'))
                    return false
                }

                if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
                    deferred.reject(new Error('[MT] Set_client_DH_params_answer server_nonce mismatch'))
                    return false
                }

                CryptoWorker.modPow(auth.gA, auth.b, auth.dhPrime).then(function (authKey) {
                    var authKeyHash = sha1BytesSync(authKey),
                        authKeyAux = authKeyHash.slice(0, 8),
                        authKeyID = authKeyHash.slice(-8)

                    console.log(dT(), 'Got Set_client_DH_params_answer', response._)
                    switch (response._) {
                        case 'dh_gen_ok':
                            var newNonceHash1 = sha1BytesSync(auth.newNonce.concat([1], authKeyAux)).slice(-16)

                            if (!bytesCmp(newNonceHash1, response.new_nonce_hash1)) {
                                deferred.reject(new Error('[MT] Set_client_DH_params_answer new_nonce_hash1 mismatch'))
                                return false
                            }

                            var serverSalt = bytesXor(auth.newNonce.slice(0, 8), auth.serverNonce.slice(0, 8))
                            // console.log('Auth successfull!', authKeyID, authKey, serverSalt)

                            auth.authKeyID = authKeyID
                            auth.authKey = authKey
                            auth.serverSalt = serverSalt

                            deferred.resolve(auth)
                            break

                        case 'dh_gen_retry':
                            var newNonceHash2 = sha1BytesSync(auth.newNonce.concat([2], authKeyAux)).slice(-16)
                            if (!bytesCmp(newNonceHash2, response.new_nonce_hash2)) {
                                deferred.reject(new Error('[MT] Set_client_DH_params_answer new_nonce_hash2 mismatch'))
                                return false
                            }

                            return mtpSendSetClientDhParams(auth)

                        case 'dh_gen_fail':
                            var newNonceHash3 = sha1BytesSync(auth.newNonce.concat([3], authKeyAux)).slice(-16)
                            if (!bytesCmp(newNonceHash3, response.new_nonce_hash3)) {
                                deferred.reject(new Error('[MT] Set_client_DH_params_answer new_nonce_hash3 mismatch'))
                                return false
                            }

                            deferred.reject(new Error('[MT] Set_client_DH_params_answer fail'))
                            return false
                    }
                }, function (error) {
                    deferred.reject(error)
                })
            }, function (error) {
                deferred.reject(error)
            })
        }, function (error) {
            deferred.reject(error)
        })
    }

    var cached = {}

    function mtpAuth(dcID) {
        if (cached[dcID] !== undefined) {
            return cached[dcID]
        }

        var nonce = []
        for (var i = 0; i < 16; i++) {
            nonce.push(nextRandomInt(0xFF))
        }

        if (!MtpDcConfigurator.chooseServer(dcID)) {
            return $q.reject(new Error('[MT] No server found for dc ' + dcID))
        }

        var auth = {
            dcID: dcID,
            nonce: nonce,
            deferred: $q.defer()
        }

        $timeout(function () {
            mtpSendReqPQ(auth)
        })

        cached[dcID] = auth.deferred.promise

        cached[dcID]['catch'](function () {
            delete cached[dcID]
        })

        return cached[dcID]
    }

    return {
        auth: mtpAuth
    }
}());
// MtpDcConfigurator, MtpTimeManager, MtpSecureRandom, Storage, CryptoWorker, $http, $q, $timeout, $interval, $rootScope
window.MtpNetworkerFactory = (function() {
    var MtpDcConfigurator = window.MtpDcConfigurator;
    var MtpTimeManager = window.MtpTimeManager;
    var MtpSecureRandom = window.MtpSecureRandom;
    var Storage = window.Storage;
    var CryptoWorker = window.CryptoWorker;
    var $http = window.$http;
    var $q = window.$q;
    var $timeout = window.$timeout;
    var $interval = window.$interval;
    var $rootScope = window.$rootScope;
    var angular = window.angular;
    var updatesProcessor;
    var iii = 0,
        offline
    var offlineInited = false
    var akStopped = false
    var chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/)
    var chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false
    var xhrSendBuffer = !('ArrayBufferView' in window) && (chromeVersion > 0 && chromeVersion < 30)

    delete $http.defaults.headers.post['Content-Type']
    delete $http.defaults.headers.common['Accept']

    $rootScope.retryOnline = function () {
        $(document.body).trigger('online')
    }

    function MtpNetworker(dcID, authKey, serverSalt, options) {
        options = options || {}

        this.dcID = dcID

        this.authKey = authKey
        this.authKeyUint8 = convertToUint8Array(authKey)
        this.authKeyID = sha1BytesSync(authKey).slice(-8)

        this.serverSalt = serverSalt

        this.upload = options.fileUpload || options.fileDownload || false

        this.updateSession()

        this.lastServerMessages = []

        this.checkConnectionPeriod = 0

        this.sentMessages = {}

        this.pendingMessages = {}
        this.pendingAcks = []
        this.pendingResends = []
        this.connectionInited = false


        this.longPollInt = $interval(this.checkLongPoll.bind(this), 10000)
        this.checkLongPoll()

        if (!offlineInited) {
            offlineInited = true
            $rootScope.offline = true
            $rootScope.offlineConnecting = true
        }

        if (Config.Navigator.mobile) {
            this.setupMobileSleep()
        }
    }

    MtpNetworker.prototype.updateSession = function () {
        this.seqNo = 0
        this.prevSessionID = this.sessionID
        this.sessionID = new Array(8)
        MtpSecureRandom.nextBytes(this.sessionID)
    }

    MtpNetworker.prototype.setupMobileSleep = function () {
        var self = this
        $rootScope.$watch('idle.isIDLE', function (isIDLE) {
            if (isIDLE) {
                self.sleepAfter = tsNow() + 30000
            } else {
                delete self.sleepAfter
                self.checkLongPoll()
            }
        })

        $rootScope.$on('push_received', function () {
            // console.log(dT(), 'push recieved', self.sleepAfter)
            if (self.sleepAfter) {
                self.sleepAfter = tsNow() + 30000
                self.checkLongPoll()
            }
        })
    }

    MtpNetworker.prototype.updateSentMessage = function (sentMessageID) {
        var sentMessage = this.sentMessages[sentMessageID]
        if (!sentMessage) {
            return false
        }
        var self = this
        if (sentMessage.container) {
            var newInner = []
            angular.forEach(sentMessage.inner, function (innerSentMessageID) {
                var innerSentMessage = self.updateSentMessage(innerSentMessageID)
                if (innerSentMessage) {
                    newInner.push(innerSentMessage.msg_id)
                }
            })
            sentMessage.inner = newInner
        }

        sentMessage.msg_id = MtpTimeManager.generateID()
        sentMessage.seq_no = this.generateSeqNo(
            sentMessage.notContentRelated ||
            sentMessage.container
        )
        this.sentMessages[sentMessage.msg_id] = sentMessage
        delete self.sentMessages[sentMessageID]

        return sentMessage
    }

    MtpNetworker.prototype.generateSeqNo = function (notContentRelated) {
        var seqNo = this.seqNo * 2

        if (!notContentRelated) {
            seqNo++
            this.seqNo++
        }

        return seqNo
    }

    MtpNetworker.prototype.wrapMtpCall = function (method, params, options) {
        var serializer = new TLSerialization({mtproto: true})

        serializer.storeMethod(method, params)

        var messageID = MtpTimeManager.generateID()
        var seqNo = this.generateSeqNo()
        var message = {
            msg_id: messageID,
            seq_no: seqNo,
            body: serializer.getBytes()
        }

        if (Config.Modes.debug) {
            console.log(dT(), 'MT call', method, params, messageID, seqNo)
        }

        return this.pushMessage(message, options)
    }

    MtpNetworker.prototype.wrapMtpMessage = function (object, options) {
        options = options || {}

        var serializer = new TLSerialization({mtproto: true})
        serializer.storeObject(object, 'Object')

        var messageID = MtpTimeManager.generateID()
        var seqNo = this.generateSeqNo(options.notContentRelated)
        var message = {
            msg_id: messageID,
            seq_no: seqNo,
            body: serializer.getBytes()
        }

        if (Config.Modes.debug) {
            console.log(dT(), 'MT message', object, messageID, seqNo)
        }

        return this.pushMessage(message, options)
    }

    MtpNetworker.prototype.wrapApiCall = function (method, params, options) {
        var serializer = new TLSerialization(options)

        if (!this.connectionInited) {
            serializer.storeInt(0xda9b0d0d, 'invokeWithLayer')
            serializer.storeInt(Config.Schema.API.layer, 'layer')
            serializer.storeInt(0xc7481da6, 'initConnection')
            serializer.storeInt(Config.App.id, 'api_id')
            serializer.storeString(navigator.userAgent || 'Unknown UserAgent', 'device_model')
            serializer.storeString(navigator.platform || 'Unknown Platform', 'system_version')
            serializer.storeString(Config.App.version, 'app_version')
            serializer.storeString(navigator.language || 'en', 'system_lang_code')
            serializer.storeString('', 'lang_pack')
            serializer.storeString(navigator.language || 'en', 'lang_code')
        }

        if (options.afterMessageID) {
            serializer.storeInt(0xcb9f372d, 'invokeAfterMsg')
            serializer.storeLong(options.afterMessageID, 'msg_id')
        }

        options.resultType = serializer.storeMethod(method, params)

        var messageID = MtpTimeManager.generateID()
        var seqNo = this.generateSeqNo()
        var message = {
            msg_id: messageID,
            seq_no: seqNo,
            body: serializer.getBytes(true),
            isAPI: true
        }

        if (Config.Modes.debug) {
            console.log(dT(), 'Api call', method, params, messageID, seqNo, options)
        } else {
            console.log(dT(), 'Api call', method)
        }

        return this.pushMessage(message, options)
    }

    MtpNetworker.prototype.checkLongPoll = function (force) {
        var isClean = this.cleanupSent()
        // console.log('Check lp', this.longPollPending, tsNow(), this.dcID, isClean)
        if (this.longPollPending && tsNow() < this.longPollPending ||
            this.offline ||
            akStopped) {
            return false
        }
        var self = this
        Storage.get('dc').then(function (baseDcID) {
            if (isClean && (
                baseDcID != self.dcID ||
                self.upload ||
                self.sleepAfter && tsNow() > self.sleepAfter
            )) {
                // console.warn(dT(), 'Send long-poll for DC is delayed', self.dcID, self.sleepAfter)
                return
            }
            self.sendLongPoll()
        })
    }

    MtpNetworker.prototype.sendLongPoll = function () {
        var maxWait = 25000
        var self = this

        this.longPollPending = tsNow() + maxWait
        // console.log('Set lp', this.longPollPending, tsNow())

        this.wrapMtpCall('http_wait', {
            max_delay: 500,
            wait_after: 150,
            max_wait: maxWait
        }, {
            noResponse: true,
            longPoll: true
        }).then(function () {
            delete self.longPollPending
            setTimeout(self.checkLongPoll.bind(self)); // TODO setZeroTimeout
        }, function (error) {
            console.log('Long-poll failed', error)
        })
    }

    MtpNetworker.prototype.pushMessage = function (message, options) {
        var deferred = $q.defer()

        this.sentMessages[message.msg_id] = angular.extend(message, options || {}, {deferred: deferred})
        this.pendingMessages[message.msg_id] = 0

        if (!options || !options.noShedule) {
            this.sheduleRequest()
        }
        if (angular.isObject(options)) {
            options.messageID = message.msg_id
        }

        return deferred.promise
    }

    MtpNetworker.prototype.pushResend = function (messageID, delay) {
        var value = delay ? tsNow() + delay : 0
        var sentMessage = this.sentMessages[messageID]
        if (sentMessage.container) {
            for (var i = 0; i < sentMessage.inner.length; i++) {
                this.pendingMessages[sentMessage.inner[i]] = value
            }
        } else {
            this.pendingMessages[messageID] = value
        }

        // console.log('Resend due', messageID, this.pendingMessages)

        this.sheduleRequest(delay)
    }

    MtpNetworker.prototype.getMsgKey = function (dataWithPadding, isOut) {
        var authKey = this.authKeyUint8
        var x = isOut ? 0 : 8
        var msgKeyLargePlain = bufferConcat(authKey.subarray(88 + x, 88 + x + 32), dataWithPadding)
        return CryptoWorker.sha256Hash(msgKeyLargePlain).then(function (msgKeyLarge) {
            var msgKey = new Uint8Array(msgKeyLarge).subarray(8, 24)
            return msgKey
        })
    }

    MtpNetworker.prototype.getAesKeyIv = function (msgKey, isOut) {
        var authKey = this.authKeyUint8
        var x = isOut ? 0 : 8
        var sha2aText = new Uint8Array(52)
        var sha2bText = new Uint8Array(52)
        var promises = {}

        sha2aText.set(msgKey, 0)
        sha2aText.set(authKey.subarray(x, x + 36), 16)
        promises.sha2a = CryptoWorker.sha256Hash(sha2aText)

        sha2bText.set(authKey.subarray(40 + x, 40 + x + 36), 0)
        sha2bText.set(msgKey, 36)
        promises.sha2b = CryptoWorker.sha256Hash(sha2bText)

        return Promise.all([promises.sha2a, promises.sha2b]).then(function (result) {
            var aesKey = new Uint8Array(32)
            var aesIv = new Uint8Array(32)
            var sha2a = new Uint8Array(result[0]) //sha2a
            var sha2b = new Uint8Array(result[1]) //sha2b

            aesKey.set(sha2a.subarray(0, 8))
            aesKey.set(sha2b.subarray(8, 24), 8)
            aesKey.set(sha2a.subarray(24, 32), 24)

            aesIv.set(sha2b.subarray(0, 8))
            aesIv.set(sha2a.subarray(8, 24), 8)
            aesIv.set(sha2b.subarray(24, 32), 24)

            return [aesKey, aesIv]
        })
    }

    MtpNetworker.prototype.checkConnection = function (event) {
        $rootScope.offlineConnecting = true

        console.log(dT(), 'Check connection', event)
        $timeout.cancel(this.checkConnectionPromise)

        var serializer = new TLSerialization({mtproto: true})
        var pingID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]

        serializer.storeMethod('ping', {ping_id: pingID})

        var pingMessage = {
            msg_id: MtpTimeManager.generateID(),
            seq_no: this.generateSeqNo(true),
            body: serializer.getBytes()
        }

        var self = this
        this.sendEncryptedRequest(pingMessage, {timeout: 15000}).then(function (result) {
            delete $rootScope.offlineConnecting
            self.toggleOffline(false)
        }, function () {
            console.log(dT(), 'Delay ', self.checkConnectionPeriod * 1000)
            self.checkConnectionPromise = $timeout(self.checkConnection.bind(self), parseInt(self.checkConnectionPeriod * 1000))
            self.checkConnectionPeriod = Math.min(60, self.checkConnectionPeriod * 1.5)
            $timeout(function () {
                delete $rootScope.offlineConnecting
            }, 1000)
        })
    }

    MtpNetworker.prototype.toggleOffline = function (enabled) {
        // console.log('toggle ', enabled, this.dcID, this.iii)
        if (this.offline !== undefined && this.offline == enabled) {
            return false
        }

        this.offline = enabled
        $rootScope.offline = enabled
        $rootScope.offlineConnecting = false

        if (this.offline) {
            $timeout.cancel(this.nextReqPromise)
            delete this.nextReq

            if (this.checkConnectionPeriod < 1.5) {
                this.checkConnectionPeriod = 0
            }

            this.checkConnectionPromise = $timeout(this.checkConnection.bind(this), parseInt(this.checkConnectionPeriod * 1000))
            this.checkConnectionPeriod = Math.min(30, (1 + this.checkConnectionPeriod) * 1.5)

            this.onOnlineCb = this.checkConnection.bind(this)

            $(document.body).on('online focus', this.onOnlineCb)
        } else {
            delete this.longPollPending
            this.checkLongPoll()
            this.sheduleRequest()

            if (this.onOnlineCb) {
                $(document.body).off('online focus', this.onOnlineCb)
            }
            $timeout.cancel(this.checkConnectionPromise)
        }
    }

    MtpNetworker.prototype.performSheduledRequest = function () {
        // console.log(dT(), 'sheduled', this.dcID, this.iii)
        if (this.offline || akStopped) {
            console.log(dT(), 'Cancel sheduled')
            return false
        }
        delete this.nextReq
        if (this.pendingAcks.length) {
            var ackMsgIDs = []
            for (var i = 0; i < this.pendingAcks.length; i++) {
                ackMsgIDs.push(this.pendingAcks[i])
            }
            // console.log('acking messages', ackMsgIDs)
            this.wrapMtpMessage({_: 'msgs_ack', msg_ids: ackMsgIDs}, {notContentRelated: true, noShedule: true})
        }

        if (this.pendingResends.length) {
            var resendMsgIDs = []
            var resendOpts = {noShedule: true, notContentRelated: true}
            for (var i = 0; i < this.pendingResends.length; i++) {
                resendMsgIDs.push(this.pendingResends[i])
            }
            // console.log('resendReq messages', resendMsgIDs)
            this.wrapMtpMessage({_: 'msg_resend_req', msg_ids: resendMsgIDs}, resendOpts)
            this.lastResendReq = {req_msg_id: resendOpts.messageID, resend_msg_ids: resendMsgIDs}
        }

        var messages = [],
            message
        var messagesByteLen = 0
        var currentTime = tsNow()
        var hasApiCall = false
        var hasHttpWait = false
        var lengthOverflow = false
        var singlesCount = 0
        var self = this

        angular.forEach(this.pendingMessages, function (value, messageID) {
            if (!value || value >= currentTime) {
                if (message = self.sentMessages[messageID]) {
                    var messageByteLength = (message.body.byteLength || message.body.length) + 32
                    if (!message.notContentRelated &&
                        lengthOverflow) {
                        return
                    }
                    if (!message.notContentRelated &&
                        messagesByteLen &&
                        messagesByteLen + messageByteLength > 655360) { // 640 Kb
                        lengthOverflow = true
                        return
                    }
                    if (message.singleInRequest) {
                        singlesCount++
                        if (singlesCount > 1) {
                            return
                        }
                    }
                    messages.push(message)
                    messagesByteLen += messageByteLength
                    if (message.isAPI) {
                        hasApiCall = true
                    } else if (message.longPoll) {
                        hasHttpWait = true
                    }
                } else {
                    // console.log(message, messageID)
                }
                delete self.pendingMessages[messageID]
            }
        })

        if (hasApiCall && !hasHttpWait) {
            var serializer = new TLSerialization({mtproto: true})
            serializer.storeMethod('http_wait', {
                max_delay: 500,
                wait_after: 150,
                max_wait: 3000
            })
            messages.push({
                msg_id: MtpTimeManager.generateID(),
                seq_no: this.generateSeqNo(),
                body: serializer.getBytes()
            })
        }

        if (!messages.length) {
            // console.log('no sheduled messages')
            return
        }

        var noResponseMsgs = []

        if (messages.length > 1) {
            var container = new TLSerialization({mtproto: true, startMaxLength: messagesByteLen + 64})
            container.storeInt(0x73f1f8dc, 'CONTAINER[id]')
            container.storeInt(messages.length, 'CONTAINER[count]')
            var onloads = []
            var innerMessages = []
            for (var i = 0; i < messages.length; i++) {
                container.storeLong(messages[i].msg_id, 'CONTAINER[' + i + '][msg_id]')
                innerMessages.push(messages[i].msg_id)
                container.storeInt(messages[i].seq_no, 'CONTAINER[' + i + '][seq_no]')
                container.storeInt(messages[i].body.length, 'CONTAINER[' + i + '][bytes]')
                container.storeRawBytes(messages[i].body, 'CONTAINER[' + i + '][body]')
                if (messages[i].noResponse) {
                    noResponseMsgs.push(messages[i].msg_id)
                }
            }

            var containerSentMessage = {
                msg_id: MtpTimeManager.generateID(),
                seq_no: this.generateSeqNo(true),
                container: true,
                inner: innerMessages
            }

            message = angular.extend({body: container.getBytes(true)}, containerSentMessage)

            this.sentMessages[message.msg_id] = containerSentMessage

            if (Config.Modes.debug) {
                console.log(dT(), 'Container', innerMessages, message.msg_id, message.seq_no)
            }
        } else {
            if (message.noResponse) {
                noResponseMsgs.push(message.msg_id)
            }
            this.sentMessages[message.msg_id] = message
        }

        this.pendingAcks = []

        this.sendEncryptedRequest(message).then(function (result) {
            self.toggleOffline(false)
            // console.log('parse for', message)
            self.parseResponse(result.data).then(function (response) {
                if (Config.Modes.debug) {
                    console.log(dT(), 'Server response', self.dcID, response)
                }

                self.processMessage(response.response, response.messageID, response.sessionID)

                angular.forEach(noResponseMsgs, function (msgID) {
                    if (self.sentMessages[msgID]) {
                        var deferred = self.sentMessages[msgID].deferred
                        delete self.sentMessages[msgID]
                        deferred.resolve()
                    }
                })

                self.checkLongPoll()

                this.checkConnectionPeriod = Math.max(1.1, Math.sqrt(this.checkConnectionPeriod))
            })
        }, function (error) {
            console.error('Encrypted request failed', error)

            if (message.container) {
                angular.forEach(message.inner, function (msgID) {
                    self.pendingMessages[msgID] = 0
                })
                delete self.sentMessages[message.msg_id]
            } else {
                self.pendingMessages[message.msg_id] = 0
            }

            angular.forEach(noResponseMsgs, function (msgID) {
                if (self.sentMessages[msgID]) {
                    var deferred = self.sentMessages[msgID].deferred
                    delete self.sentMessages[msgID]
                    delete self.pendingMessages[msgID]
                    deferred.reject()
                }
            })

            self.toggleOffline(true)
        })

        if (lengthOverflow || singlesCount > 1) {
            this.sheduleRequest()
        }
    }

    MtpNetworker.prototype.getEncryptedMessage = function (dataWithPadding) {
        var self = this
        return self.getMsgKey(dataWithPadding, true).then(function (msgKey) {
            return self.getAesKeyIv(msgKey, true).then(function (keyIv) {
                // console.log(dT(), 'after msg key iv')
                return CryptoWorker.aesEncrypt(dataWithPadding, keyIv[0], keyIv[1]).then(function (encryptedBytes) {
                    // console.log(dT(), 'Finish encrypt')
                    return {
                        bytes: encryptedBytes,
                        msgKey: msgKey
                    }
                })
            })
        })
    }

    MtpNetworker.prototype.getDecryptedMessage = function (msgKey, encryptedData) {
        // console.log(dT(), 'get decrypted start')
        return this.getAesKeyIv(msgKey, false).then(function (keyIv) {
            // console.log(dT(), 'after msg key iv')
            return CryptoWorker.aesDecrypt(encryptedData, keyIv[0], keyIv[1])
        })
    }

    MtpNetworker.prototype.sendEncryptedRequest = function (message, options) {
        var self = this
        options = options || {}
        // console.log(dT(), 'Send encrypted'/*, message*/)
        // console.trace()
        var data = new TLSerialization({startMaxLength: message.body.length + 2048})

        data.storeIntBytes(this.serverSalt, 64, 'salt')
        data.storeIntBytes(this.sessionID, 64, 'session_id')

        data.storeLong(message.msg_id, 'message_id')
        data.storeInt(message.seq_no, 'seq_no')

        data.storeInt(message.body.length, 'message_data_length')
        data.storeRawBytes(message.body, 'message_data')

        var dataBuffer = data.getBuffer()

        var paddingLength = (16 - (data.offset % 16)) + 16 * (1 + nextRandomInt(5))
        var padding = new Array(paddingLength)
        MtpSecureRandom.nextBytes(padding)

        var dataWithPadding = bufferConcat(dataBuffer, padding)
        // console.log(dT(), 'Adding padding', dataBuffer, padding, dataWithPadding)
        // console.log(dT(), 'auth_key_id', bytesToHex(self.authKeyID))

        return this.getEncryptedMessage(dataWithPadding).then(function (encryptedResult) {
            // console.log(dT(), 'Got encrypted out message'/*, encryptedResult*/)
            var request = new TLSerialization({startMaxLength: encryptedResult.bytes.byteLength + 256})
            request.storeIntBytes(self.authKeyID, 64, 'auth_key_id')
            request.storeIntBytes(encryptedResult.msgKey, 128, 'msg_key')
            request.storeRawBytes(encryptedResult.bytes, 'encrypted_data')

            var requestData = xhrSendBuffer ? request.getBuffer() : request.getArray()

            var requestPromise
            var url = MtpDcConfigurator.chooseServer(self.dcID, self.upload)
            var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url}

            try {
                options = angular.extend(options || {}, {
                    responseType: 'arraybuffer',
                    transformRequest: null
                })
                requestPromise = $http.post(url, requestData, options)
            } catch (e) {
                requestPromise = $q.reject(e)
            }
            return requestPromise.then(
                function (result) {
                    if (!result.data || !result.data.byteLength) {
                        return $q.reject(baseError)
                    }
                    return result
                },
                function (error) {
                    if (!error.message && !error.type) {
                        error = angular.extend(baseError, {type: 'NETWORK_BAD_REQUEST', originalError: error})
                    }
                    return $q.reject(error)
                }
            )
        })
    }

    MtpNetworker.prototype.parseResponse = function (responseBuffer) {
        // console.log(dT(), 'Start parsing response')
        var self = this
        var deserializer = new TLDeserialization(responseBuffer)

        var authKeyID = deserializer.fetchIntBytes(64, false, 'auth_key_id')
        if (!bytesCmp(authKeyID, this.authKeyID)) {
            throw new Error('[MT] Invalid server auth_key_id: ' + bytesToHex(authKeyID))
        }
        var msgKey = deserializer.fetchIntBytes(128, true, 'msg_key')
        var encryptedData = deserializer.fetchRawBytes(responseBuffer.byteLength - deserializer.getOffset(), true, 'encrypted_data')

        return self.getDecryptedMessage(msgKey, encryptedData).then(function (dataWithPadding) {
            // console.log(dT(), 'after decrypt')
            return self.getMsgKey(dataWithPadding, false).then(function (calcMsgKey) {
                if (!bytesCmp(msgKey, calcMsgKey)) {
                    console.warn('[MT] msg_keys', msgKey, bytesFromArrayBuffer(calcMsgKey))
                    throw new Error('[MT] server msgKey mismatch')
                }
                // console.log(dT(), 'after msgKey check')

                var deserializer = new TLDeserialization(dataWithPadding, {mtproto: true})

                var salt = deserializer.fetchIntBytes(64, false, 'salt')
                var sessionID = deserializer.fetchIntBytes(64, false, 'session_id')
                var messageID = deserializer.fetchLong('message_id')

                if (!bytesCmp(sessionID, self.sessionID) &&
                    (!self.prevSessionID || !bytesCmp(sessionID, self.prevSessionID))) {
                    console.warn('Sessions', sessionID, self.sessionID, self.prevSessionID)
                    throw new Error('[MT] Invalid server session_id: ' + bytesToHex(sessionID))
                }

                var seqNo = deserializer.fetchInt('seq_no')

                var totalLength = dataWithPadding.byteLength

                var messageBodyLength = deserializer.fetchInt('message_data[length]')
                var offset = deserializer.getOffset()

                if ((messageBodyLength % 4) ||
                    messageBodyLength > totalLength - offset) {
                    throw new Error('[MT] Invalid body length: ' + messageBodyLength)
                }
                var messageBody = deserializer.fetchRawBytes(messageBodyLength, true, 'message_data')

                var offset = deserializer.getOffset()
                var paddingLength = totalLength - offset
                if (paddingLength < 12 || paddingLength > 1024) {
                    throw new Error('[MT] Invalid padding length: ' + paddingLength)
                }

                var buffer = bytesToArrayBuffer(messageBody)
                var deserializerOptions = {
                    mtproto: true,
                    override: {
                        mt_message: function (result, field) {
                            result.msg_id = this.fetchLong(field + '[msg_id]')
                            result.seqno = this.fetchInt(field + '[seqno]')
                            result.bytes = this.fetchInt(field + '[bytes]')

                            var offset = this.getOffset()

                            try {
                                result.body = this.fetchObject('Object', field + '[body]')
                            } catch (e) {
                                console.error(dT(), 'parse error', e.message, e.stack)
                                result.body = {_: 'parse_error', error: e}
                            }
                            if (this.offset != offset + result.bytes) {
                                // console.warn(dT(), 'set offset', this.offset, offset, result.bytes)
                                // console.log(dT(), result)
                                this.offset = offset + result.bytes
                            }
                            // console.log(dT(), 'override message', result)
                        },
                        mt_rpc_result: function (result, field) {
                            result.req_msg_id = this.fetchLong(field + '[req_msg_id]')

                            var sentMessage = self.sentMessages[result.req_msg_id]
                            var type = sentMessage && sentMessage.resultType || 'Object'

                            if (result.req_msg_id && !sentMessage) {
                                // console.warn(dT(), 'Result for unknown message', result)
                                return
                            }
                            result.result = this.fetchObject(type, field + '[result]')
                            // console.log(dT(), 'override rpc_result', sentMessage, type, result)
                        }
                    }
                }
                var deserializer = new TLDeserialization(buffer, deserializerOptions)
                var response = deserializer.fetchObject('', 'INPUT')

                return {
                    response: response,
                    messageID: messageID,
                    sessionID: sessionID,
                    seqNo: seqNo
                }
            })
        })
    }

    MtpNetworker.prototype.applyServerSalt = function (newServerSalt) {
        var serverSalt = longToBytes(newServerSalt)

        var storeObj = {}
        storeObj['dc' + this.dcID + '_server_salt'] = bytesToHex(serverSalt)
        Storage.set(storeObj)

        this.serverSalt = serverSalt
        return true
    }

    MtpNetworker.prototype.sheduleRequest = function (delay) {
        if (this.offline) {
            this.checkConnection('forced shedule')
        }
        var nextReq = tsNow() + delay

        if (delay && this.nextReq && this.nextReq <= nextReq) {
            return false
        }

        // console.log(dT(), 'shedule req', delay)
        // console.trace()

        $timeout.cancel(this.nextReqPromise)
        if (delay > 0) {
            this.nextReqPromise = $timeout(this.performSheduledRequest.bind(this), delay || 0)
        } else {
            setTimeout(this.performSheduledRequest.bind(this)) // TODO setZeroTimeout
        }

        this.nextReq = nextReq
    }

    MtpNetworker.prototype.ackMessage = function (msgID) {
        // console.log('ack message', msgID)
        this.pendingAcks.push(msgID)
        this.sheduleRequest(30000)
    }

    MtpNetworker.prototype.reqResendMessage = function (msgID) {
        console.log(dT(), 'Req resend', msgID)
        this.pendingResends.push(msgID)
        this.sheduleRequest(100)
    }

    MtpNetworker.prototype.cleanupSent = function () {
        var self = this
        var notEmpty = false
        // console.log('clean start', this.dcID/*, this.sentMessages*/)
        angular.forEach(this.sentMessages, function (message, msgID) {
            // console.log('clean iter', msgID, message)
            if (message.notContentRelated && self.pendingMessages[msgID] === undefined) {
                // console.log('clean notContentRelated', msgID)
                delete self.sentMessages[msgID]
            } else if (message.container) {
                for (var i = 0; i < message.inner.length; i++) {
                    if (self.sentMessages[message.inner[i]] !== undefined) {
                        // console.log('clean failed, found', msgID, message.inner[i], self.sentMessages[message.inner[i]].seq_no)
                        notEmpty = true
                        return
                    }
                }
                // console.log('clean container', msgID)
                delete self.sentMessages[msgID]
            } else {
                notEmpty = true
            }
        })

        return !notEmpty
    }

    MtpNetworker.prototype.processMessageAck = function (messageID) {
        var sentMessage = this.sentMessages[messageID]
        if (sentMessage && !sentMessage.acked) {
            delete sentMessage.body
            sentMessage.acked = true

            return true
        }

        return false
    }

    MtpNetworker.prototype.processError = function (rawError) {
        var matches = (rawError.error_message || '').match(/^([A-Z_0-9]+\b)(: (.+))?/) || []
        rawError.error_code = uintToInt(rawError.error_code)

        return {
            code: !rawError.error_code || rawError.error_code <= 0 ? 500 : rawError.error_code,
            type: matches[1] || 'UNKNOWN',
            description: matches[3] || ('CODE#' + rawError.error_code + ' ' + rawError.error_message),
            originalError: rawError
        }
    }

    MtpNetworker.prototype.processMessage = function (message, messageID, sessionID) {
        var msgidInt = parseInt(messageID.toString(10).substr(0, -10), 10)
        if (msgidInt % 2) {
            console.warn('[MT] Server even message id: ', messageID, message)
            return
        }
        // console.log('process message', message, messageID, sessionID)
        switch (message._) {
            case 'msg_container':
                var len = message.messages.length
                for (var i = 0; i < len; i++) {
                    this.processMessage(message.messages[i], message.messages[i].msg_id, sessionID)
                }
                break

            case 'bad_server_salt':
                console.log(dT(), 'Bad server salt', message)
                var sentMessage = this.sentMessages[message.bad_msg_id]
                if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
                    console.log(message.bad_msg_id, message.bad_msg_seqno)
                    throw new Error('[MT] Bad server salt for invalid message')
                }

                this.applyServerSalt(message.new_server_salt)
                this.pushResend(message.bad_msg_id)
                this.ackMessage(messageID)
                break

            case 'bad_msg_notification':
                console.log(dT(), 'Bad msg notification', message)
                var sentMessage = this.sentMessages[message.bad_msg_id]
                if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
                    console.log(message.bad_msg_id, message.bad_msg_seqno)
                    throw new Error('[MT] Bad msg notification for invalid message')
                }

                if (message.error_code == 16 || message.error_code == 17) {
                    if (MtpTimeManager.applyServerTime(
                        bigStringInt(messageID).shiftRight(32).toString(10)
                    )) {
                        console.log(dT(), 'Update session')
                        this.updateSession()
                    }
                    var badMessage = this.updateSentMessage(message.bad_msg_id)
                    this.pushResend(badMessage.msg_id)
                    this.ackMessage(messageID)
                }
                break

            case 'message':
                if (this.lastServerMessages.indexOf(messageID) != -1) {
                    // console.warn('[MT] Server same messageID: ', messageID)
                    this.ackMessage(messageID)
                    return
                }
                this.lastServerMessages.push(messageID)
                if (this.lastServerMessages.length > 100) {
                    this.lastServerMessages.shift()
                }
                this.processMessage(message.body, message.msg_id, sessionID)
                break

            case 'new_session_created':
                this.ackMessage(messageID)

                this.processMessageAck(message.first_msg_id)
                this.applyServerSalt(message.server_salt)

                var self = this
                Storage.get('dc').then(function (baseDcID) {
                    if (baseDcID == self.dcID && !self.upload && updatesProcessor) {
                        updatesProcessor(message, true)
                    }
                })
                break

            case 'msgs_ack':
                for (var i = 0; i < message.msg_ids.length; i++) {
                    this.processMessageAck(message.msg_ids[i])
                }
                break

            case 'msg_detailed_info':
                if (!this.sentMessages[message.msg_id]) {
                    this.ackMessage(message.answer_msg_id)
                    break
                }
            case 'msg_new_detailed_info':
                if (this.pendingAcks.indexOf(message.answer_msg_id)) {
                    break
                }
                this.reqResendMessage(message.answer_msg_id)
                break

            case 'msgs_state_info':
                this.ackMessage(message.answer_msg_id)
                if (this.lastResendReq && this.lastResendReq.req_msg_id == message.req_msg_id && this.pendingResends.length) {
                    var i, badMsgID, pos
                    for (i = 0; i < this.lastResendReq.resend_msg_ids.length; i++) {
                        badMsgID = this.lastResendReq.resend_msg_ids[i]
                        pos = this.pendingResends.indexOf(badMsgID)
                        if (pos != -1) {
                            this.pendingResends.splice(pos, 1)
                        }
                    }
                }
                break

            case 'rpc_result':
                this.ackMessage(messageID)

                var sentMessageID = message.req_msg_id
                var sentMessage = this.sentMessages[sentMessageID]

                this.processMessageAck(sentMessageID)
                if (sentMessage) {
                    var deferred = sentMessage.deferred
                    if (message.result._ == 'rpc_error') {
                        var error = this.processError(message.result)
                        console.log(dT(), 'Rpc error', error)
                        if (deferred) {
                            deferred.reject(error)
                        }
                    } else {
                        if (deferred) {
                            if (Config.Modes.debug) {
                                console.log(dT(), 'Rpc response', message.result)
                            } else {
                                var dRes = message.result._
                                if (!dRes) {
                                    if (message.result.length > 5) {
                                        dRes = '[..' + message.result.length + '..]'
                                    } else {
                                        dRes = message.result
                                    }
                                }
                                console.log(dT(), 'Rpc response', dRes)
                            }
                            sentMessage.deferred.resolve(message.result)
                        }
                        if (sentMessage.isAPI) {
                            this.connectionInited = true
                        }
                    }

                    delete this.sentMessages[sentMessageID]
                }
                break

            default:
                this.ackMessage(messageID)

                // console.log('Update', message)
                if (updatesProcessor) {
                    updatesProcessor(message, true)
                }
                break

        }
    }

    function startAll() {
        if (akStopped) {
            akStopped = false
            updatesProcessor({_: 'new_session_created'}, true)
        }
    }

    function stopAll() {
        akStopped = true
    }

    return {
        getNetworker: function (dcID, authKey, serverSalt, options) {
            return new MtpNetworker(dcID, authKey, serverSalt, options)
        },
        setUpdatesProcessor: function (callback) {
            updatesProcessor = callback
        },
        stopAll: stopAll,
        startAll: startAll
    }
}());

// Storage, MtpAuthorizer, MtpNetworkerFactory, MtpSingleInstanceService, AppRuntimeManager, ErrorService, qSync, $rootScope, $q, WebPushApiManager, TelegramMeWebService
window.MtpApiManager = (function() {
    var Storage = window.Storage;
    var MtpAuthorizer = window.MtpAuthorizer;
    var MtpNetworkerFactory = window.MtpNetworkerFactory;
    var $rootScope = window.$rootScope;
    var $q = window.$q;
    var angular = window.angular;
    var cachedNetworkers = {}
    var cachedUploadNetworkers = {}
    var cachedExportPromise = {}
    var baseDcID = false

    var telegramMeNotified

    // MtpSingleInstanceService.start() // TODO

    Storage.get('dc').then(function (dcID) {
        if (dcID) {
            baseDcID = dcID
        }
    })

    function telegramMeNotify (newValue) {
        if (telegramMeNotified !== newValue) {
            telegramMeNotified = newValue
            // TelegramMeWebService.setAuthorized(telegramMeNotified) // TODO
        }
    }

    function mtpSetUserAuth (dcID, userAuth) {
        var fullUserAuth = angular.extend({dcID: dcID}, userAuth)
        Storage.set({
            dc: dcID,
            user_auth: fullUserAuth
        })
        telegramMeNotify(true)
        $rootScope.$broadcast('user_auth', fullUserAuth)

        baseDcID = dcID
    }

    function mtpLogOut () {
        var storageKeys = []
        for (var dcID = 1; dcID <= 5; dcID++) {
            storageKeys.push('dc' + dcID + '_auth_key')
        }
        // WebPushApiManager.forceUnsubscribe() // TODO
        return Storage.get(storageKeys).then(function (storageResult) {
            var logoutPromises = []
            for (var i = 0; i < storageResult.length; i++) {
                if (storageResult[i]) {
                    logoutPromises.push(mtpInvokeApi('auth.logOut', {}, {dcID: i + 1, ignoreErrors: true}))
                }
            }
            return $q.all(logoutPromises).then(function () {
                Storage.remove('dc', 'user_auth')
                baseDcID = false
                telegramMeNotify(false)
                return mtpClearStorage()
            }, function (error) {
                storageKeys.push('dc', 'user_auth')
                Storage.remove(storageKeys)
                baseDcID = false
                error.handled = true
                telegramMeNotify(false)
                return mtpClearStorage()
            })
        })
    }

    function mtpClearStorage () {
        var saveKeys = ['user_auth', 't_user_auth', 'dc', 't_dc']
        for (var dcID = 1; dcID <= 5; dcID++) {
            saveKeys.push('dc' + dcID + '_auth_key')
            saveKeys.push('t_dc' + dcID + '_auth_key')
        }
        Storage.noPrefix()
        Storage.get(saveKeys).then(function (values) {
            Storage.clear().then(function () {
                var restoreObj = {}
                angular.forEach(saveKeys, function (key, i) {
                    var value = values[i]
                    if (value !== false && value !== undefined) {
                        restoreObj[key] = value
                    }
                })
                Storage.noPrefix()
                return Storage.set(restoreObj)
            })
        })
    }

    function mtpGetNetworker (dcID, options) {
        options = options || {}

        var cache = (options.fileUpload || options.fileDownload)
            ? cachedUploadNetworkers
            : cachedNetworkers
        if (!dcID) {
            throw new Exception('get Networker without dcID')
        }

        if (cache[dcID] !== undefined) {
            // return qSync.when(cache[dcID]) // TODO
        }

        var akk = 'dc' + dcID + '_auth_key'
        var ssk = 'dc' + dcID + '_server_salt'

        return Storage.get(akk, ssk).then(function (result) {
            if (cache[dcID] !== undefined) {
                return cache[dcID]
            }

            var authKeyHex = result[0]
            var serverSaltHex = result[1]
            // console.log('ass', dcID, authKeyHex, serverSaltHex)
            if (authKeyHex && authKeyHex.length == 512) {
                if (!serverSaltHex || serverSaltHex.length != 16) {
                    serverSaltHex = 'AAAAAAAAAAAAAAAA'
                }
                var authKey = bytesFromHex(authKeyHex)
                var serverSalt = bytesFromHex(serverSaltHex)

                return cache[dcID] = MtpNetworkerFactory.getNetworker(dcID, authKey, serverSalt, options)
            }

            if (!options.createNetworker) {
                return $q.reject({type: 'AUTH_KEY_EMPTY', code: 401})
            }

            return MtpAuthorizer.auth(dcID).then(function (auth) {
                var storeObj = {}
                storeObj[akk] = bytesToHex(auth.authKey)
                storeObj[ssk] = bytesToHex(auth.serverSalt)
                Storage.set(storeObj)

                return cache[dcID] = MtpNetworkerFactory.getNetworker(dcID, auth.authKey, auth.serverSalt, options)
            }, function (error) {
                console.log('Get networker error', error, error.stack)
                return $q.reject(error)
            })
        })
    }

    function mtpInvokeApi (method, params, options) {
        options = options || {}

        var deferred = $q.defer()
        var rejectPromise = function (error) {
                if (!error) {
                    error = {type: 'ERROR_EMPTY'}
                } else if (!angular.isObject(error)) {
                    error = {message: error}
                }
                deferred.reject(error)
                if (options.ignoreErrors) {
                    return
                }

                if (error.code == 406) {
                    error.handled = true
                }

                if (!options.noErrorBox) {
                    error.input = method
                    error.stack = stack || (error.originalError && error.originalError.stack) || error.stack || (new Error()).stack
                    setTimeout(function () {
                        if (!error.handled) {
                            if (error.code == 401) {
                                mtpLogOut()['finally'](function () {
                                    if (location.protocol == 'http:' &&
                                        !Config.Modes.http &&
                                        Config.App.domains.indexOf(location.hostname) != -1) {
                                        location.href = location.href.replace(/^http:/, 'https:')
                                    } else {
                                        location.hash = '/login'
                                        // AppRuntimeManager.reload() // TODO
                                    }
                                })
                            } else {
                                // ErrorService.show({error: error}) // TODO
                            }
                            error.handled = true
                        }
                    }, 100)
                }
            },
            dcID,
            networkerPromise

        var cachedNetworker
        var stack = (new Error()).stack || 'empty stack'
        var performRequest = function (networker) {
            return (cachedNetworker = networker).wrapApiCall(method, params, options).then(
                function (result) {
                    deferred.resolve(result)
                },
                function (error) {
                    console.error(dT(), 'Error', error.code, error.type, baseDcID, dcID)
                    if (error.code == 401 && baseDcID == dcID) {
                        Storage.remove('dc', 'user_auth')
                        telegramMeNotify(false)
                        rejectPromise(error)
                    }
                    else if (error.code == 401 && baseDcID && dcID != baseDcID) {
                        if (cachedExportPromise[dcID] === undefined) {
                            var exportDeferred = $q.defer()

                            mtpInvokeApi('auth.exportAuthorization', {dc_id: dcID}, {noErrorBox: true}).then(function (exportedAuth) {
                                mtpInvokeApi('auth.importAuthorization', {
                                    id: exportedAuth.id,
                                    bytes: exportedAuth.bytes
                                }, {dcID: dcID, noErrorBox: true}).then(function () {
                                    exportDeferred.resolve()
                                }, function (e) {
                                    exportDeferred.reject(e)
                                })
                            }, function (e) {
                                exportDeferred.reject(e)
                            })

                            cachedExportPromise[dcID] = exportDeferred.promise
                        }

                        cachedExportPromise[dcID].then(function () {
                            (cachedNetworker = networker).wrapApiCall(method, params, options).then(function (result) {
                                deferred.resolve(result)
                            }, rejectPromise)
                        }, rejectPromise)
                    }
                    else if (error.code == 303) {
                        var newDcID = error.type.match(/^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_)(\d+)/)[2]
                        if (newDcID != dcID) {
                            if (options.dcID) {
                                options.dcID = newDcID
                            } else {
                                Storage.set({dc: baseDcID = newDcID})
                            }

                            mtpGetNetworker(newDcID, options).then(function (networker) {
                                networker.wrapApiCall(method, params, options).then(function (result) {
                                    deferred.resolve(result)
                                }, rejectPromise)
                            }, rejectPromise)
                        }
                    }
                    else if (!options.rawError && error.code == 420) {
                        var waitTime = error.type.match(/^FLOOD_WAIT_(\d+)/)[1] || 10
                        if (waitTime > (options.timeout || 60)) {
                            return rejectPromise(error)
                        }
                        setTimeout(function () {
                            performRequest(cachedNetworker)
                        }, waitTime * 1000)
                    }
                    else if (!options.rawError && (error.code == 500 || error.type == 'MSG_WAIT_FAILED')) {
                        var now = tsNow()
                        if (options.stopTime) {
                            if (now >= options.stopTime) {
                                return rejectPromise(error)
                            }
                        } else {
                            options.stopTime = now + (options.timeout !== undefined ? options.timeout : 10) * 1000
                        }
                        options.waitTime = options.waitTime ? Math.min(60, options.waitTime * 1.5) : 1
                        setTimeout(function () {
                            performRequest(cachedNetworker)
                        }, options.waitTime * 1000)
                    }else {
                        rejectPromise(error)
                    }
                })
        }

        if (dcID = (options.dcID || baseDcID)) {
            mtpGetNetworker(dcID, options).then(performRequest, rejectPromise)
        } else {
            Storage.get('dc').then(function (baseDcID) {
                mtpGetNetworker(dcID = baseDcID || 2, options).then(performRequest, rejectPromise)
            })
        }

        return deferred.promise
    }

    function mtpGetUserID () {
        return Storage.get('user_auth').then(function (auth) {
            telegramMeNotify(auth && auth.id > 0 || false)
            return auth.id || 0
        })
    }

    function getBaseDcID () {
        return baseDcID || false
    }

    return {
        getBaseDcID: getBaseDcID,
        getUserID: mtpGetUserID,
        invokeApi: mtpInvokeApi,
        getNetworker: mtpGetNetworker,
        setUserAuth: mtpSetUserAuth,
        logOut: mtpLogOut
    }
})();