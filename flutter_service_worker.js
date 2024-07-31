'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6482b324ba3d0e9f6183b312a0093970",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c26793c1e5fb6f1e7f999f0743516a69",
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
".git/index": "bfcbfce692a1b22baefb9823424853b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16be37499cc62cf6738b82e7c04af662",
".git/logs/refs/heads/main": "a98f8cf24c7e7b2c3a24aa7cb98bc31f",
".git/logs/refs/remotes/origin/main": "2ea0cfcaea800bba34dad4368820ef15",
".git/objects/00/1e1a21d74893211d3b4e37350a42bb56e44715": "c3abafb547c23326a5b6b9f3671043ac",
".git/objects/01/e1f29d423538f6e281542560b45cd95af48bda": "1ee729d5de66cf5ad5aac2f3032c970b",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/05/f1578ed8259c803e95e6e15257b5810bbafd24": "9a759440e84b0826f384564270fb22d9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/8e352423f4b5c1b0af195665758d6ba4316c3a": "cab53d3f28ea57ffb5ecdc859c35a790",
".git/objects/08/3155ee6ab741360cb1b22f89586651f94139a4": "060da2c575804bf580c585bb17bea97b",
".git/objects/0c/bfdc665509b0c7c872897c3e50ae3bbf156f27": "df3200547362d5c1012c8f8802619d12",
".git/objects/0f/95c1a94250eeee8dac495c24a8f51aac739643": "a3a5706f95f009e1b6ced7e392754cf5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/7db3027ee60951d0c2330470c6e4346f770334": "0bb23a149ee68db076e54e67ed679d7e",
".git/objects/11/315fa1908d04b54269c169b7f9a8abac0f99cc": "947f68720101884918208e08862df25f",
".git/objects/15/aaf95b166307a95d264050e36bd24388b73800": "77b2f825d19478de84b194bcdc814737",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/c44cbd151f9294e578cbae0e04e0ad140401be": "95970ed8ca450d6d98f45da207c8d2c2",
".git/objects/1f/024a8d0ba4400562d01f49ce7a5962947aabca": "4c574cdc8351335851bb61776067a440",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/78967d1fb8fe446b3460c5bc4651a69a3d225b": "f53b6645df31ccc8c1651fe4d7f18a3b",
".git/objects/24/74da3274315e107ed7cb604d1677aed1d55b10": "3d2627ddba930ae107b9d0bf0f44e135",
".git/objects/28/6e1d7220cdd8950f7e4f3f8f7cb52d10c4f8da": "cb8df3074ee259c00475dd058943b07d",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/32/660a3230e216f090ec27da76a7319a0598b1a7": "dd37f27d10f3f21413370b92086e63a0",
".git/objects/38/756f2fa29a488700a1fc06c040a6c5c5903d5f": "3c30911fbbb37af39da137c678d1d746",
".git/objects/38/c06753b1e9e90bb31dbd32369ab23d84109a16": "3db960d5136552c36ef0d65d6d7e3262",
".git/objects/39/2802c78be01ab781e010a09ea684457cd4154e": "a3ac4ecf5cf6b5cedbc8b84ea118f2f9",
".git/objects/39/b283195bed32e3bf7e4278ded1fc760840f456": "33a95cc724984aa63d38baf2b3efb1a6",
".git/objects/3a/8983de0a3ee18d04ce334d01f15a53a3339436": "7f652a3f955856afeb6fa17dc39eb734",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/6e26e25d3c404a3809ee6e6fcacd8fc768f7fb": "84bd235e56d9163317a9e1014d4f637a",
".git/objects/40/54df79bb55c5b41ff0feea0c2a58efc23aad59": "5bdfa5a9f771f5d3cc2340400aa0b59d",
".git/objects/41/5d263dc77ad0264fe7db9430d4c428fb38658a": "d285337592cc7dfda0039abd9f6c2411",
".git/objects/45/52f9b53894396d4f96a0aca9e75e3a2c8fae02": "b7469edaa06d5243440314cb49a652e5",
".git/objects/47/d9d4e789046b80ea8c676722b194ec02eac40a": "2407da91401dfdec47ee68c0a256f54e",
".git/objects/49/9409808d7a673b2c7fb86d1d83c9df6e8f7884": "2b4bd85fe2f89132bee7c7035d1e6b31",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/a3cccf95cea53454cd81daf47bd75a0e69932c": "2ad443f810bcb84b4e461dbe46410b5d",
".git/objects/4e/dcb1c9543c750521984931d3bf1713305e7807": "3f7c6756b001f44fcd45d7175ba40396",
".git/objects/52/1aead2cbf9c36b7428c7f686d3edabf2fdcc77": "af6acb6ee6956e4665775ec8caabfe67",
".git/objects/52/2474cf236f403999b1f29c233e6065136e6fa4": "40b2cfcdcb5a191da2dd2c8a4b97b544",
".git/objects/56/9b4544ba0aeb4f3c3f8a06eadb11496b6b1b99": "69dbf770683a006e72ff4a544bb05771",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/94cb8149d28b10df8cf391f190eb08c5f69769": "f617810ae132797ddeaf51dececc97a7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/81084bbac007a88275cc32b0aabc9e6731f963": "73e8413fb1d5ffb957f761a87b2ba10a",
".git/objects/5a/3f35e536be0220b5781cf716935bd644e4ca9c": "dab941d0ca54961d2f51b7f3e70533cb",
".git/objects/5e/3c5f6086359581a8109193c6e35db8119d8f63": "7988cddd0c4fe11e86f224c0714ce7ff",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/8b8749c2ca9b5c86701ec4946817aaf8d95845": "2763439bbddd74c06697b688f733f19f",
".git/objects/67/4e8e74f0c76d7d449b2077167b31e90817edf8": "1cce7d720b29a22aa6c9761c8ead360b",
".git/objects/6b/9a287d63a9f2cd81e6ee44ce6c44db0c180da6": "33c3acf947e10805f7daad362e5878d2",
".git/objects/71/27aa8629ca756098a3265d8f08f00d427133b7": "fba479886d12fb6f38be02bbc4518be2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/b2277252b017b755e0849eb9f898709eb37bfc": "8bdb27e4cd8a30cc05f744cd565c1e00",
".git/objects/79/b5c2183f1d5919e48a59c054127f2c6d941c20": "3baa89a2bd694d50790fba48512ef454",
".git/objects/7e/097b59e97cd40fb58b80fbf03aa2f328b90c8a": "4631cb218a1581b0085639257b29d2c9",
".git/objects/82/e9e1489a0d8400fad353d592b4427dbcf62300": "99bd0717c10ae163ab4b1cd2ac467e5b",
".git/objects/85/0ae6c9c30bbc7af722d0d4f52471c94f1d7488": "b30b7bb1bc858b86c8f22f07877c715a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/983ba95f80e4e237c9c984261cfd93c7c2d68a": "f3b74ddcb4a523154f1dae6bc48eea32",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/25b6ab725cc8e99a36efff2e97928242f89f07": "44bdf526c6a6611850b82d733bdcebc3",
".git/objects/92/412f24f253e1c1d525e4896541674cd1a75ca1": "bc5b284f45f3bf9ab5a444d888a51da4",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/412c7247d69741c7b97ed57936d364237e31e6": "8773e1f5dacb2b3a4a38d86b374fa0e9",
".git/objects/99/3e821722dfd8d0a38d97eac2a17dedfeceec0e": "3b634c17621cb894a4784b7cfb7fd411",
".git/objects/a6/f09f9a8081404d6da24482d2ee1ef041261cf2": "fd88ee437b04641210fe5031bb4f3093",
".git/objects/a9/778116bca91c8943bc1b04b57ce59fd7e940ac": "2405be66227d9ea239788a580803e0ab",
".git/objects/b2/9080600cc4b31aff7fefb163eb283d08ccc696": "c871e996ab80f55ae33052a6b095aa12",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/94576094e2beb276dcae123a27feb3068fd291": "2f7be22bc66e269260fec219b83a5fd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/43865ea6370b7c02ed91b442680fb5b842f746": "94ba2e4b7da8de0dea547ed04bd6ef90",
".git/objects/c5/f913f5c3c01e998ccf7afd85d7a9a6aacc7e87": "ae2d3ff594c1402dd43c5ebf0fed2a2c",
".git/objects/c6/c5f34d6ef97dede3e5120e15ae013c7592d491": "6afc49c65da48670c78611a7776fb8c0",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/d73f073f3f34ac72a31f79166a5a916e8519b6": "10f7d43ee9a5fe0b1e8a49c28d318283",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/cd/cf758d2a6bc3c78d1c39726fcb1ca3e1dc9249": "417f2baa08d834df029fd04951ced2ec",
".git/objects/ce/9df27f7d66dcf2e37100523d9ac6ae41a05aae": "b32d0f6a890e8941a0e6a1916cb71f6e",
".git/objects/cf/e7765016fbe59100c51f2cc174c21977d57b32": "de10f6f76084a6c87056d47198a9ee9f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/b8fa247c49a47d605150865ce8195b829e9767": "04a6d813f6dcff2c7d5985fe183c92e4",
".git/objects/e7/0172a067fd15966d7a40fe245db4a9e4940c46": "de8a625595b9faadb899a31497b5b001",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/39596a42362474feadbab9a30e8484c5c5c47b": "d4f74f785d66c6fa389006f89f26fbc6",
".git/objects/ec/fa0402314a44e5924654c1498c3554a2a8737a": "06dae966d2cf7cc37f1a42281bc01149",
".git/objects/ed/9b0f4b851ed10d240f9ec1c602f230c6143450": "e0682b2dce48c7bf2314b1525d25ad71",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/a594aa1a6d64b9e33c22e88737555c6c0f60f4": "09c3930f8950ecc3df82eefd0133e911",
".git/objects/f4/b44a5935d8a9cc2a4e99f37ee11f29fd090d76": "545aca6b8b7ad2014991ce9571f75a9d",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fe/4ef4105f4677816357bc9bf82710befd713c6d": "060ecc1a3d6ad176889271d5f0e53360",
".git/objects/fe/4f695e7ca646c7f37a134b2c046c8aca6c9ea2": "92db84729485eb818441730ec2d9804b",
".git/objects/ff/08e3a3c8b8d3a8f1313d9300bec59e14efa85a": "241fe670f6acd0bcee5b6fd21564c569",
".git/objects/pack/pack-e9b29cda83f46e3e4d5b7264020cf06937902476.idx": "1ab732d77bad1bc5c77f1a379a510651",
".git/objects/pack/pack-e9b29cda83f46e3e4d5b7264020cf06937902476.pack": "9ef9cfcec4d168a663e160aef2bdabd9",
".git/objects/pack/pack-e9b29cda83f46e3e4d5b7264020cf06937902476.rev": "6f093877fa733f07cc0cd406e4ce1827",
".git/ORIG_HEAD": "c23da23311b1557d50f9c7291da5b208",
".git/refs/heads/main": "8cfc5b5868b3ca5945f406e54912d4a2",
".git/refs/remotes/origin/main": "8cfc5b5868b3ca5945f406e54912d4a2",
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
"assets/NOTICES": "38e73d447def1047e9ce46f6a0a608b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "7a1c45aca573208e15c71b378fdbe027",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "01159cef38b23a0a13deeb67c0a1587a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f934e210d09048f8f3b1e60f460d8fc",
"/": "8f934e210d09048f8f3b1e60f460d8fc",
"main.dart.js": "8e1023e62526e529e09956a498676bc1",
"manifest.json": "08d19a5ff6b687ef18b79a2ff74bd6c2",
"version.json": "268bdbed6407f1171870e7766eaa7e80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
