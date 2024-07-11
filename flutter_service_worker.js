'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6482b324ba3d0e9f6183b312a0093970",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "088b1a104c9136e76d0160540de26c67",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1478d863eb875c54131b2874ae43549d",
".git/logs/refs/heads/main": "e84d77d4a7f8a242999a82c61e2549e4",
".git/logs/refs/remotes/origin/main": "e221d2b0985610fd15fd8b3a3e2b9c23",
".git/objects/00/1e1a21d74893211d3b4e37350a42bb56e44715": "c3abafb547c23326a5b6b9f3671043ac",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/05/8ee49b182c4a1f744a31f46838322d0c552ab1": "498df1246e96e56dd117151241c24a45",
".git/objects/05/f1578ed8259c803e95e6e15257b5810bbafd24": "9a759440e84b0826f384564270fb22d9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/8e352423f4b5c1b0af195665758d6ba4316c3a": "cab53d3f28ea57ffb5ecdc859c35a790",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/3155ee6ab741360cb1b22f89586651f94139a4": "060da2c575804bf580c585bb17bea97b",
".git/objects/0a/a2c6b6382448c319d10dc26b7d38ba27ed5d75": "14718eee458655ce70a45d5b7102dd73",
".git/objects/0c/bfdc665509b0c7c872897c3e50ae3bbf156f27": "df3200547362d5c1012c8f8802619d12",
".git/objects/0d/d8a7e4e776acf4091603c1b052230ca74d6510": "91127d5aa7e97ee82029ca31643da73f",
".git/objects/0e/3a2c57d5f3ce363f958d500498ba3c450655cf": "ef8ba933165f3b4ebfe95b35b2e42250",
".git/objects/0f/d00e5e8f033ca52af344c5b1d036f4a051dff1": "9db84cc169a614e47645c6f66bd89bd1",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/77957ebb4f1e21f97ba0503dc5ed95fefe9736": "5ccc979688360a3acc4722bd6b5bb7ad",
".git/objects/18/2252ec283b51c4621758ae13dc6bcda2209b48": "8036376d9ff6798e8568c02b731831d0",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/1a/c1f195f2f5cf410ec8c628031b0881198e34cb": "03637097c3a24a9b77ce6bdb6f3489b1",
".git/objects/1c/3ced0e776165ad586e14abe2edb2311173bf08": "9c0b25ff41e06497a781caec6af15dfc",
".git/objects/1d/117814dd334fccb944cf0dbe6a2fb853778ab8": "fdfef8bc8caa7caee5ba6d39e4e701df",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/78967d1fb8fe446b3460c5bc4651a69a3d225b": "f53b6645df31ccc8c1651fe4d7f18a3b",
".git/objects/25/c67058cbe394e1ae9cea8d1901fd077390b1f7": "1e6b1918e734f4a8e4f0af6d291766b1",
".git/objects/29/8ba59fda7d949d1929c575e4d2e39ec687bff6": "b576939f12a4e3191957c29d2626c067",
".git/objects/29/97ff27d8c1af31c9dd16d88fdf02fbe211a766": "c8b5d363b308a1994e1832576ee9a414",
".git/objects/2b/cf00d761882d197922a2b7502b092a28e5050b": "1ffa010ad53f7b6edb8d180136680a10",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cd2426c5b88787ecdb595f18a5f35eef8cc1d8": "9cd64d5ecc74b1fdf3013f82cbd04551",
".git/objects/2f/cdc68e5b8624e1f316ba3e0d48c3bb97a4f80b": "7dac42835c8f5d6f1f3e4c77ee1a1334",
".git/objects/30/4ca0d7f1ddd5ffe181d5b379eddea8313658ba": "5854adc3036a7b91a2e4aa37ad1a6bfb",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/32/1cbd9ff263834dcb3f3a2403cf6b0c4b79f073": "e369de4eccd77a9991dea79a784c4f6e",
".git/objects/32/660a3230e216f090ec27da76a7319a0598b1a7": "dd37f27d10f3f21413370b92086e63a0",
".git/objects/32/db21e4ae51561712a6d6d415df12b0dac8e198": "822f2574a922e4503ac8f73fb4e420c8",
".git/objects/32/fe5dfa3ee3868f527d59e1be1ccbd75f933993": "1272ea836749494fd4a58a65fb1d933b",
".git/objects/33/53c8642b91fa0601adc79aeb9ca1a46519f668": "bfe46f352cb1803e44ccf7270dc24f95",
".git/objects/35/0163b28e37606036b27e56676a8b3bc8d46a43": "6915d69f8798f5b08a27bdbb80a5c5a6",
".git/objects/36/542fd16beeb3567bf4b899bfb13934456949c8": "dcab563db9020deb8ed233550348f511",
".git/objects/37/51cf8d6682e576237911d1da0aa8437b177c37": "386e9a72435bf0a402ce8e6867827491",
".git/objects/39/2802c78be01ab781e010a09ea684457cd4154e": "a3ac4ecf5cf6b5cedbc8b84ea118f2f9",
".git/objects/3b/0d6c7607bc332d17a6d96413d37601084fa0d5": "394b3eff5824d280945fb14ab21aae55",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/41/5d263dc77ad0264fe7db9430d4c428fb38658a": "d285337592cc7dfda0039abd9f6c2411",
".git/objects/41/80537c0f251145813099e37de8b4c99e640c8f": "e73e8994a7743f0dbecb35a5d1b3e9e5",
".git/objects/44/d85e6471f9cf325ac5eac53984f08348438dcb": "809a022b1c80dfa02694f09525343b95",
".git/objects/45/bd6e6adb8f8b3a8565dfbe114b54ee7966c6e2": "097fd7d322c7c6205ade7a71124d507f",
".git/objects/47/d9d4e789046b80ea8c676722b194ec02eac40a": "2407da91401dfdec47ee68c0a256f54e",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/900519ed5519d2496192d1024aa98ddc7c2cdd": "e504b4fd0a1c697f9f1de014267ad48e",
".git/objects/4e/5764eebc5336f967b23c27899a6dcdc3b518db": "c14b7fd893080b77467f6bd909814d1b",
".git/objects/4e/88423e1e0a9ff806405466d49592bc2e229a6c": "4d21fe6b2d762cad2f5215ceaf1000c4",
".git/objects/50/f8e6bbd63ece42b9f7c82e0549ec0a5847050d": "daa5204b612c26630d7bcbbc0e0b89bb",
".git/objects/52/2474cf236f403999b1f29c233e6065136e6fa4": "40b2cfcdcb5a191da2dd2c8a4b97b544",
".git/objects/53/5f83588f596a7ee0a8d4c74b0936e5de70c65c": "ac5d5a231a679b6e1d751aca0894eb10",
".git/objects/53/a1fa71de55f2440893f34927c435b86c1474af": "1c1e463988b5669e965938a1c0c292ba",
".git/objects/55/214b448f92d3a762a06aa7baacb491769e87ee": "c1773b8796e12acdc579ec83353d2d10",
".git/objects/56/749577f9f5ffd19160d9d09cbef2a9908bd372": "c18f91d3a962d1fd6b6de2a0384d0021",
".git/objects/57/06cda6773236d8cd359244c465073b3ad53ab8": "da4f70eddadd5eaccd920007248dca47",
".git/objects/58/1f4f14c736d5dde994ca956e0f282b9a6662ac": "feecd6c133c19ab7218de36c2e2273fc",
".git/objects/58/94cb8149d28b10df8cf391f190eb08c5f69769": "f617810ae132797ddeaf51dececc97a7",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/06a74a1181ad84053384ab4c94e568a1546def": "374ae19dbbaaf41d2524dd6067d59550",
".git/objects/71/27aa8629ca756098a3265d8f08f00d427133b7": "fba479886d12fb6f38be02bbc4518be2",
".git/objects/71/5b988c9a06d21aa2902b5ce119da2de1f2d1be": "8958c0277e35175142505eb8b1b83a3b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/b2277252b017b755e0849eb9f898709eb37bfc": "8bdb27e4cd8a30cc05f744cd565c1e00",
".git/objects/72/0b91862efff296e68998c492c9148990f5d9e8": "6d5d41c1db956117ffbb12ea95cce459",
".git/objects/74/31f1d507be45a7d27bfcad631ea84102d2b67f": "826cc309c186abbc6281abbd715207a6",
".git/objects/7a/58c6b60120d0e69622b15d63509650d7f53f97": "553774eda2e0fc9d06b929391c9471ed",
".git/objects/7f/3bdab168fbb9de0e6e8cafdbea9cac070048d7": "34e05d19f0540c824f939d6549a74ad5",
".git/objects/82/e9e1489a0d8400fad353d592b4427dbcf62300": "99bd0717c10ae163ab4b1cd2ac467e5b",
".git/objects/84/e899b248d6ce4ca95612e96ccd61fbeac15db9": "3d313edcdfe660a1578ca7033e2f9fc3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a5bb04e1f014d3a4427c8d85f139705c63390f": "0668571cddaa7bb028bdb2ee374706f2",
".git/objects/86/585946af0797592f553843f90c525083f1922a": "40f3097ebb39413e7b8a206ed37052b6",
".git/objects/87/7ef5dafb94fbafe3716032720aefaf894f1224": "128b9c1419311602d8c2611845ca7f6c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/04f703e94c48a9206481f9c0b0353c5832fd28": "996bfb46441f9f93a661c2c3803ee206",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/f48dd3d97fe14b7dd8f5aa85ea664dc8a4b257": "88c8283773bc98520abd081d1912eba4",
".git/objects/92/412f24f253e1c1d525e4896541674cd1a75ca1": "bc5b284f45f3bf9ab5a444d888a51da4",
".git/objects/92/d3b3e4a26eb68bf74924d23abe834c8c768468": "6b2fb0b20e9cf3063d748f1009941d9c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/98/f18b4b43a12da916ae62298cc0bf97c18bf0d7": "d11e1c124258eda478ee65e4a9f7915c",
".git/objects/a1/cc8a36c7090bd7a52e4408415e7066d1adcf5c": "77e2fff7456c4a1da0faa7cea908c302",
".git/objects/a5/0c66ec4e597010ca00e4956bcbda3d7db2fe21": "076b41e9360df1d11439a3d489d3a79d",
".git/objects/a6/5f446ec6313509438621e4194e1767243f9603": "7ea49c1b16b2b5fa812bde1721ce11db",
".git/objects/a6/f09f9a8081404d6da24482d2ee1ef041261cf2": "fd88ee437b04641210fe5031bb4f3093",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/f35ae5d185e5a3576e686fc820513a61cb9027": "3eb22878e7060b966016921c4fca5eb9",
".git/objects/b0/caf471de2a3191e260a06f08a304335e7d205b": "282ca93841c2101d2140efc33ba675c3",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ec6e893fba52737127cd92c8cc430bd256386a": "56ec19e6038e00b455076fc17484c424",
".git/objects/bf/5b87898d1bfb9a83600d0adafd8c28e1e442c9": "2931f9be696559061d3eefdafd0b6a87",
".git/objects/c1/a29898b1e413071bee5c7a0f2b0ac82c2c9615": "87ddea8ba385d2a0a4349d54e8a9a1bf",
".git/objects/c3/540c31281c7f91fb0a446466b837cdb5021869": "30050428015a9f34b9f6665a065b93f8",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/c5f34d6ef97dede3e5120e15ae013c7592d491": "6afc49c65da48670c78611a7776fb8c0",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/d73f073f3f34ac72a31f79166a5a916e8519b6": "10f7d43ee9a5fe0b1e8a49c28d318283",
".git/objects/cb/2b95a18b4f7f7c640c346608b23dcb2640879d": "fad8cd94b95a9778fd607c7d37896680",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/cd/178f74ef2fd855be7861e56517ef707bca1e0e": "54547ce606ff21151228c80c49629ff3",
".git/objects/d1/2d6c485fa4a4f6226b5decd400846fd9c41e26": "50cce0e8e6306aea384852e5131b326c",
".git/objects/d4/0fddd432e1dc9892d42841937a8ffedb003514": "23666a93194a3452e0ea9bf55b72fadc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f501fd82c9f6457f022c4e443db988f24be837": "f9cf606efc1dcbe1cf46d6e565cd5cdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/274e987bda7b937e373039baa400b63e4ca723": "ac012e3d97d89027d412d1881dfb4e15",
".git/objects/e1/16f7da265d3788fa02ab6eab5afa1643975311": "c67bb6d0aee12d644c23042453469d49",
".git/objects/e4/b8fa247c49a47d605150865ce8195b829e9767": "04a6d813f6dcff2c7d5985fe183c92e4",
".git/objects/e7/0172a067fd15966d7a40fe245db4a9e4940c46": "de8a625595b9faadb899a31497b5b001",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/d5344ba6b35eb90fcc079157ba5781a15ab9f9": "8c98070aa6c32c6a700e208ddbbe6b07",
".git/objects/f1/ab522e70f05c83fbbbaa6b5fce5f83f2535e14": "043698810a1766aaa035e5edd7c68cb1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/a594aa1a6d64b9e33c22e88737555c6c0f60f4": "09c3930f8950ecc3df82eefd0133e911",
".git/objects/f3/aa7240b673b6ca7f4f5c650f2a44e1c4b20071": "f1a31842a14746f2b24b7dbadc811736",
".git/objects/f7/27c75cf5261f680b71191771b520b41a195f2c": "8fd851cb9a903a3315c0dc278e0cd915",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fc/3931fe86b490f8c10149d7a7735f0613ca9337": "09dadd8c851cb4c59061e6b270521223",
".git/objects/fc/81a2fe20403135b967711ef59c6f9279d1d8d6": "ff1d89ec0dc7faed907e0b5e6c08dc97",
".git/refs/heads/main": "ac9c8bce573947f27c89885dd97fcd52",
".git/refs/remotes/origin/main": "ac9c8bce573947f27c89885dd97fcd52",
"assets/AssetManifest.bin": "2152f8a54ea9a8f1f70242f1616d3883",
"assets/AssetManifest.bin.json": "619f07f3423e9f3c7ddb34321d24a19e",
"assets/AssetManifest.json": "a903914bcb8855076cf5b662f26f4071",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/images/fblogo.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/images/googlelogo.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/images/image%25204.png": "9f271a8ae261018b1d2d1a8f1953eb2a",
"assets/assets/images/logo.png": "f6c32bb326a2dbf24cb19e262ea86640",
"assets/assets/images/logos.png": "d9ebb0bd4ada34f5602d97417e1571de",
"assets/assets/images/logs.png": "fa97bcea7fb4e9c481bef060fcd775d8",
"assets/assets/images/profile.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/studying.png": "2ea6505cf6962b9959fbd927bf0d1ef9",
"assets/FontManifest.json": "d7703d0110baeb6827714590fec29e85",
"assets/fonts/MaterialIcons-Regular.otf": "c09c77562222be32f4a0be0315c2dc13",
"assets/NOTICES": "9d963108d26838ad59242cf772ac51e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "269e554a4af8e2dff203a45165c0d639",
"/": "269e554a4af8e2dff203a45165c0d639",
"main.dart.js": "4a1881b587a8b91aaf1a686bd36d0751",
"manifest.json": "bd6c48156fef02709f3636a1542b5839",
"version.json": "268bdbed6407f1171870e7766eaa7e80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
