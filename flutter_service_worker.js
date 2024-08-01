'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6482b324ba3d0e9f6183b312a0093970",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2b479d818650a7f8369d4c8745f5fa50",
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
".git/index": "170da630d78f24ff01bf07cda1f875c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0108c367e301b3016e6967ec45096dcb",
".git/logs/refs/heads/main": "22141a04966fcda4566ab2eba05c24df",
".git/logs/refs/remotes/origin/main": "a6c5c4b0950277af050527717a4afd64",
".git/objects/00/1e1a21d74893211d3b4e37350a42bb56e44715": "c3abafb547c23326a5b6b9f3671043ac",
".git/objects/01/d7831cbd0d0046c74900e8f934fa4888704a02": "75ac8059f8e23f95f5d373004913ee22",
".git/objects/01/e1f29d423538f6e281542560b45cd95af48bda": "1ee729d5de66cf5ad5aac2f3032c970b",
".git/objects/02/02a94dda95eb9cc623841bb9e9ac8a4e65d53a": "866158668140766711c533e088ab26e1",
".git/objects/03/59ee3b7e863e8ce98482c2b62b1f83b23a182a": "021297e2780e44503abc26e8104e0bc1",
".git/objects/05/f1578ed8259c803e95e6e15257b5810bbafd24": "9a759440e84b0826f384564270fb22d9",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/8e352423f4b5c1b0af195665758d6ba4316c3a": "cab53d3f28ea57ffb5ecdc859c35a790",
".git/objects/08/3155ee6ab741360cb1b22f89586651f94139a4": "060da2c575804bf580c585bb17bea97b",
".git/objects/08/f905c06bac03a77401f74474cb03ba27732a12": "ee938c6d7f89a88a05d0ce17a023f91e",
".git/objects/09/242494d9ea820a56c55c9040433202aa30fb8d": "6471b3a187f3898056b139b095342ca6",
".git/objects/0b/c8af33483435764c400720e39b1116f10221ce": "f404c9f9746ffb040ce6875ea6cbbe78",
".git/objects/0c/99141c0bbbddba636fd83da74b763ee3bcbfb3": "fe53e5845a040301cfab2114964a5b78",
".git/objects/0c/bfdc665509b0c7c872897c3e50ae3bbf156f27": "df3200547362d5c1012c8f8802619d12",
".git/objects/0f/95c1a94250eeee8dac495c24a8f51aac739643": "a3a5706f95f009e1b6ced7e392754cf5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/7db3027ee60951d0c2330470c6e4346f770334": "0bb23a149ee68db076e54e67ed679d7e",
".git/objects/11/315fa1908d04b54269c169b7f9a8abac0f99cc": "947f68720101884918208e08862df25f",
".git/objects/15/4eb468addb2129be2a0efe946983696733b6e6": "b509b52ea76db2c2b48d796b4421322d",
".git/objects/15/aaf95b166307a95d264050e36bd24388b73800": "77b2f825d19478de84b194bcdc814737",
".git/objects/18/db263dbdc958f63f14c4904cb7e2124c766ecc": "f8de7758db8b931ae09f803f670ed09a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/4ecf170fe42a3a9d2780d6488e0cd14fb64225": "13fbea665727812af85ed6a3dfd6a386",
".git/objects/1a/8e5a1b69132ef89ab372e646ff71130485b490": "fb22a452965c7e131e8322b907340bd4",
".git/objects/1a/c44cbd151f9294e578cbae0e04e0ad140401be": "95970ed8ca450d6d98f45da207c8d2c2",
".git/objects/1f/024a8d0ba4400562d01f49ce7a5962947aabca": "4c574cdc8351335851bb61776067a440",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/78967d1fb8fe446b3460c5bc4651a69a3d225b": "f53b6645df31ccc8c1651fe4d7f18a3b",
".git/objects/24/74da3274315e107ed7cb604d1677aed1d55b10": "3d2627ddba930ae107b9d0bf0f44e135",
".git/objects/28/6e1d7220cdd8950f7e4f3f8f7cb52d10c4f8da": "cb8df3074ee259c00475dd058943b07d",
".git/objects/2c/45ede2fbfa89747df29786946f0ea4ad4ef550": "0401115d1b12064dd8e74bb5f3951c7f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/2812029453bf75f7c8cfe418711a32d42239ec": "b44a586980936e844492edd2143ccbd8",
".git/objects/2f/81d3876d700ebc020a377c725c8df50fec81b1": "99ad5cac9c90cf20f2c0d4dfd2938299",
".git/objects/30/1d43d5ec01d54d0e0f30f4851400adc601ec9a": "ca69f46a5d523442443ebc737a794a6b",
".git/objects/31/4447e385219f26e10dc94209033e39d5b7d18d": "8494d5bd62c61fa6843e345aab2412c4",
".git/objects/31/799500325e688228d483691f22073e008a2390": "2fe56de7f849b9ff703c12ed1bb63025",
".git/objects/32/660a3230e216f090ec27da76a7319a0598b1a7": "dd37f27d10f3f21413370b92086e63a0",
".git/objects/34/5b7a7ef8fbbab060c27cb4e706dd665578b9cf": "af4cc8f465f93c24e0d647c431e6556d",
".git/objects/35/4b8710fa23f7da4bac887dd47158615b1fa7ef": "221d9bb60b0c23eb3c6e0544c1ae1624",
".git/objects/38/756f2fa29a488700a1fc06c040a6c5c5903d5f": "3c30911fbbb37af39da137c678d1d746",
".git/objects/38/c06753b1e9e90bb31dbd32369ab23d84109a16": "3db960d5136552c36ef0d65d6d7e3262",
".git/objects/39/2802c78be01ab781e010a09ea684457cd4154e": "a3ac4ecf5cf6b5cedbc8b84ea118f2f9",
".git/objects/39/b283195bed32e3bf7e4278ded1fc760840f456": "33a95cc724984aa63d38baf2b3efb1a6",
".git/objects/3a/8983de0a3ee18d04ce334d01f15a53a3339436": "7f652a3f955856afeb6fa17dc39eb734",
".git/objects/3a/c8a6b287332084fbb62af5b4bc0eefaa926aa6": "63e7214fee522e9757b8df8983504c4f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/6930dfcefaf2326d2fced255dd70a06fa76019": "ea48321834234d3070236101ddc8388c",
".git/objects/3c/6e26e25d3c404a3809ee6e6fcacd8fc768f7fb": "84bd235e56d9163317a9e1014d4f637a",
".git/objects/3c/af9c9c0d2594f6f95f912628643ba0a36e8e2a": "68951b43bc78027a8fb02222f4998dfd",
".git/objects/40/2afa95fb04ce21bc7e12d0a05b0ab542a24fe8": "ee0035f9e3263b934bc29bdbf12919ad",
".git/objects/40/54df79bb55c5b41ff0feea0c2a58efc23aad59": "5bdfa5a9f771f5d3cc2340400aa0b59d",
".git/objects/40/a5f5e2689e4d24e49f183ffaf774b79f13dbba": "c02932ad62a01922d0f1aa277852c35c",
".git/objects/41/2f6c40eb6dd7dda5668f52496e219d100f0fa1": "bd9ef19379efe0e5f658b7d1007d2d34",
".git/objects/41/5d263dc77ad0264fe7db9430d4c428fb38658a": "d285337592cc7dfda0039abd9f6c2411",
".git/objects/45/52f9b53894396d4f96a0aca9e75e3a2c8fae02": "b7469edaa06d5243440314cb49a652e5",
".git/objects/47/d9d4e789046b80ea8c676722b194ec02eac40a": "2407da91401dfdec47ee68c0a256f54e",
".git/objects/48/9c2bc6f65801d3b4141760865906d4c359b453": "8c1114a8daa73a890af73569a2bb4942",
".git/objects/49/9409808d7a673b2c7fb86d1d83c9df6e8f7884": "2b4bd85fe2f89132bee7c7035d1e6b31",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/73bdfcf1e6240b3e97ee06783d136732162d25": "95f0c2adc4a85e036f426122eb426237",
".git/objects/4a/862cfcd6c8f8e7d72fba55c96f9cf9e624610b": "62efb68837c163698a6006da6590f22e",
".git/objects/4c/a3cccf95cea53454cd81daf47bd75a0e69932c": "2ad443f810bcb84b4e461dbe46410b5d",
".git/objects/4e/dcb1c9543c750521984931d3bf1713305e7807": "3f7c6756b001f44fcd45d7175ba40396",
".git/objects/52/1aead2cbf9c36b7428c7f686d3edabf2fdcc77": "af6acb6ee6956e4665775ec8caabfe67",
".git/objects/52/2474cf236f403999b1f29c233e6065136e6fa4": "40b2cfcdcb5a191da2dd2c8a4b97b544",
".git/objects/52/79df9c30816822b3a02dffa707cf7e3a039ba8": "312022895bd1006fb52942c3fcab8882",
".git/objects/56/9b4544ba0aeb4f3c3f8a06eadb11496b6b1b99": "69dbf770683a006e72ff4a544bb05771",
".git/objects/56/a0088b040c5ef1233728e6e17636f7fe59de8c": "c82600764ad24f7082665a4e0c117b8b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/94cb8149d28b10df8cf391f190eb08c5f69769": "f617810ae132797ddeaf51dececc97a7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/81084bbac007a88275cc32b0aabc9e6731f963": "73e8413fb1d5ffb957f761a87b2ba10a",
".git/objects/5a/3f35e536be0220b5781cf716935bd644e4ca9c": "dab941d0ca54961d2f51b7f3e70533cb",
".git/objects/5e/3c5f6086359581a8109193c6e35db8119d8f63": "7988cddd0c4fe11e86f224c0714ce7ff",
".git/objects/60/7edad7db094d1f776e554875962885f137885c": "e8fda13281bf7ea668ff477fba4769f9",
".git/objects/61/19df0c2b44425e65b75993c52e27177790bb6f": "c783c195a816cec1f04d2ce09630417a",
".git/objects/61/56287fe384b8dd80e3fddb9fc674fb56a4c441": "7d568068bcd2fc63516981c4addb567f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/dd20412744a26b825c43d197f730e51a3a0f27": "dfa1cd0a285aaad8bea4b5da57f6a85f",
".git/objects/65/8b8749c2ca9b5c86701ec4946817aaf8d95845": "2763439bbddd74c06697b688f733f19f",
".git/objects/67/4e8e74f0c76d7d449b2077167b31e90817edf8": "1cce7d720b29a22aa6c9761c8ead360b",
".git/objects/6b/9a287d63a9f2cd81e6ee44ce6c44db0c180da6": "33c3acf947e10805f7daad362e5878d2",
".git/objects/70/1d53b01f0939db900d395d73d767bc7da5af57": "b9c032d36c97f86420ead356c115d5d9",
".git/objects/71/27aa8629ca756098a3265d8f08f00d427133b7": "fba479886d12fb6f38be02bbc4518be2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/b2277252b017b755e0849eb9f898709eb37bfc": "8bdb27e4cd8a30cc05f744cd565c1e00",
".git/objects/72/cc2ceca8380d5f41a9cec6eccf59d9d57b1dcd": "532443bba0ad5b629f1ceb557e8509f1",
".git/objects/76/a243d121e0149d820e87b23570ff23a0d08431": "a1b6b62478cddb6c8230ca29dcb6104d",
".git/objects/77/4280022dc349c0f5266ff9685a753a2d99d10c": "450d0d1ed5bb52f1a32fd5559e13564f",
".git/objects/78/91594472f57503897b944c33e341629946dc44": "2db7d7cb2727ece9917156f1fe140630",
".git/objects/78/a2d8bdff280aba44d2622af34bc360aeed3583": "0240df4dc8be6913fddf1a4b3ce0f287",
".git/objects/79/b5c2183f1d5919e48a59c054127f2c6d941c20": "3baa89a2bd694d50790fba48512ef454",
".git/objects/7a/354eb24ccd2e846c6cc448d98847fee6853fe6": "dfad8e3cabdb9b09430fd47c5b96d589",
".git/objects/7b/c76b5a1913df84125a9d2913285a980d1e3cfd": "3a64d01b3025c3991d02907dad0b9fae",
".git/objects/7e/097b59e97cd40fb58b80fbf03aa2f328b90c8a": "4631cb218a1581b0085639257b29d2c9",
".git/objects/7f/35ea0ae5af32677d098963756abc43547f5ca2": "58e5f7995a15bee3f25e2cdeafafcfd4",
".git/objects/80/71525f70c1227b1ca650f82b9090d17edeaff8": "f25f924359b3a0fb6bf210dc6027c431",
".git/objects/82/000a99902aab0e8f34db110c5645d3634c5f33": "1cea0f9d0afc60cc7832b7d44a638ee2",
".git/objects/82/e9e1489a0d8400fad353d592b4427dbcf62300": "99bd0717c10ae163ab4b1cd2ac467e5b",
".git/objects/83/4eba3216abe9e70d4a938d929cb7e34bb9090a": "e3b31deb1eb8ce27d1eb632eafdf6ee4",
".git/objects/83/99f71899785c3da0a9d9fe01b0f9bb8051c293": "f5e0a596bce9e645b3379bdcc744f92b",
".git/objects/85/0ae6c9c30bbc7af722d0d4f52471c94f1d7488": "b30b7bb1bc858b86c8f22f07877c715a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/983ba95f80e4e237c9c984261cfd93c7c2d68a": "f3b74ddcb4a523154f1dae6bc48eea32",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/61a1cc7e55db706c4d4a4f5a48e092d694ae33": "8dcfa34e6c7c4713065962317c844734",
".git/objects/91/25b6ab725cc8e99a36efff2e97928242f89f07": "44bdf526c6a6611850b82d733bdcebc3",
".git/objects/91/88089965482d199028541f515b8f2b77da9ff8": "cd6af8c800a16f65d6ee452eaa97e474",
".git/objects/91/f39ccfe331502e2cceb41b916e866124220a7f": "d386e4cd5c113c47f27e32a251ea330f",
".git/objects/92/412f24f253e1c1d525e4896541674cd1a75ca1": "bc5b284f45f3bf9ab5a444d888a51da4",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/a263fc69a2ab563a0ea0bb5768811052a66d3e": "a5de676d9ba2ec1a17d789e0e46c91b8",
".git/objects/95/e6e76fcde582154331ed90c62aff32b9154058": "da7c237f988bc16c16ecd315107b0c0d",
".git/objects/96/0f972baaa19e9d3a4d00f378d76cb92b810785": "8d843ac5deeda92e7d6c110ae5e9afdf",
".git/objects/97/412c7247d69741c7b97ed57936d364237e31e6": "8773e1f5dacb2b3a4a38d86b374fa0e9",
".git/objects/97/dd630851c6521f1e11849b9d277c200772ea5c": "c9a1897cc9c8ce2e3be99ec3311b8f1d",
".git/objects/99/3e821722dfd8d0a38d97eac2a17dedfeceec0e": "3b634c17621cb894a4784b7cfb7fd411",
".git/objects/9b/0559dc816b4c67105425a5953e014032c336ee": "0286ed7ba043d72cbbbc9e5d75b7236e",
".git/objects/9b/128217e081ed972a87a47c2c203c90a1754c4c": "7238e25b7d08ecbcc413c6a83af544a1",
".git/objects/9c/729c78467195273911e76808a13012101b8c54": "4e8b20e208a57331dc01bb0d118387bf",
".git/objects/a3/60824437c171e97c4977b268dacbdfa554e069": "f1a9e4d6a66a693c3e9b671a0ab9b29d",
".git/objects/a4/28543c152ebbf36c24c912630ea111969a4d43": "21c55e38d2e4e2b64e9359f0bc203ca4",
".git/objects/a4/826ea8dd67ab1d2c406643f1a83b682da7c80f": "f7bad5112eb6bc18ee6ff8a2fabde655",
".git/objects/a5/f0680afc96265930c6ebe742a99bafe4eac1f1": "f88c22adb6375349c04e830d1e3d28d6",
".git/objects/a6/43b2c8c50280fba0d9956de131f61ecabf483c": "9f89a3510653c64f22fe8047d8488f5a",
".git/objects/a6/f09f9a8081404d6da24482d2ee1ef041261cf2": "fd88ee437b04641210fe5031bb4f3093",
".git/objects/a9/778116bca91c8943bc1b04b57ce59fd7e940ac": "2405be66227d9ea239788a580803e0ab",
".git/objects/aa/0c855d04ad4945f59cf92afdb2e64d1ae70529": "a738a9691de4cbfbfb7dac2b39f0ebe0",
".git/objects/ab/5943372bca88fac3d3f142bf9c7f7c35112982": "51a958863acd53473fa5d1ae336d35f5",
".git/objects/ae/bf982a871ac517e4922b2b14b99628badde400": "920779b106d34f3316b172a7944b6049",
".git/objects/ae/f4af42a8e8ab7389c683d38d9495e642774e28": "c83e057573aa0098845999fff6647131",
".git/objects/b2/9080600cc4b31aff7fefb163eb283d08ccc696": "c871e996ab80f55ae33052a6b095aa12",
".git/objects/b3/834726cbe00e44ae6e76ea7150cc6d98961526": "2d45f2266d1837744222025f7db7753a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/1b452c096aa60fe86cbb515d5c770c7fad721a": "55b27a5f510c53a270d0055fa2f1d82e",
".git/objects/b5/94576094e2beb276dcae123a27feb3068fd291": "2f7be22bc66e269260fec219b83a5fd5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c7782b16359cff497e7305adb62d5c46111061": "4dea71371b768d2a94b2938d7a5d6322",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2d54a2011eb50f36472a25706a2371d52880e7": "dff2d6f6f5da93f2d44aca373d2f31be",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/43cc0de7f8a2d2e16fb4f5195fcb01e1881e37": "da33c293788e843f31603341670fac51",
".git/objects/c0/c730ff29ee21480ee3bd270f3576cce4c7cb78": "aca5231025389170056b75fe1c66d768",
".git/objects/c3/43865ea6370b7c02ed91b442680fb5b842f746": "94ba2e4b7da8de0dea547ed04bd6ef90",
".git/objects/c4/d3a5ba710d56812bc291a7eaae35d10d642206": "f46d4b58d583324d815fa0e44f81aff4",
".git/objects/c5/f913f5c3c01e998ccf7afd85d7a9a6aacc7e87": "ae2d3ff594c1402dd43c5ebf0fed2a2c",
".git/objects/c6/2d2b1e5d2876019b3f682db8e6c7ed0c12f2ff": "62ca7fb5cd6257d5a54ade3506273918",
".git/objects/c6/c5f34d6ef97dede3e5120e15ae013c7592d491": "6afc49c65da48670c78611a7776fb8c0",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/aa1f374433cc6d430c993d21c353f769758f53": "93033a628732ea2b7559644198fcdcf9",
".git/objects/c9/0f6a0616b0d6ca6e87a90713b88b95f5eaca80": "393f272aa6e0aefc2fd33aa594a41968",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/d73f073f3f34ac72a31f79166a5a916e8519b6": "10f7d43ee9a5fe0b1e8a49c28d318283",
".git/objects/cb/83372df4e7dea1500311b047a60e67b10ff35a": "831f78f12c232e06e146fcff2ccad124",
".git/objects/cb/ed41e24ae1d2528d4ade8532d8325ab293b880": "1ae13ef5b829d12a4a4c1310ef5b66d1",
".git/objects/cc/747e610c5934c12670983020990c70abaf381a": "9d9eb6ed0a8b608c3d290004d08df0b4",
".git/objects/cd/cf758d2a6bc3c78d1c39726fcb1ca3e1dc9249": "417f2baa08d834df029fd04951ced2ec",
".git/objects/ce/9df27f7d66dcf2e37100523d9ac6ae41a05aae": "b32d0f6a890e8941a0e6a1916cb71f6e",
".git/objects/ce/f009b6efc4a5e05cfbf65387b7d30b39f9410f": "745e0bce8b908789069db0bf950190b2",
".git/objects/cf/e7765016fbe59100c51f2cc174c21977d57b32": "de10f6f76084a6c87056d47198a9ee9f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/337a9e100d17fcc39eb7d1c76dc38b9779f25d": "bb4ca58a3b4ac6ed339f9e630417e9de",
".git/objects/db/20dcec1ff9ab0c7915c24f9ed2138cf2d68211": "3c9d044b70b597ed628a11b3e23bca92",
".git/objects/dc/01ff2c096438b1492ca872121cc8d089d45a59": "ea86919df10a787ec9298115449192ae",
".git/objects/dd/3e1818952b19d5efb1527c16207553943a7f74": "e51580b9c553b11dfb7291e43947043a",
".git/objects/e0/8032f774ff684977c2d885f2c19a0703bf8e26": "6aafe3496d77db010ca89ac3e11925d1",
".git/objects/e4/02f0772ce15de895ce8b0169f304e127e7bb8d": "d5b29e8e4d4b72a38bb32bb3d097af37",
".git/objects/e4/b8fa247c49a47d605150865ce8195b829e9767": "04a6d813f6dcff2c7d5985fe183c92e4",
".git/objects/e6/beeae853001007723d251dcfc7f62e325701d9": "4429db9365edb6c07b79d480da4fce4c",
".git/objects/e7/0172a067fd15966d7a40fe245db4a9e4940c46": "de8a625595b9faadb899a31497b5b001",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/39596a42362474feadbab9a30e8484c5c5c47b": "d4f74f785d66c6fa389006f89f26fbc6",
".git/objects/ec/fa0402314a44e5924654c1498c3554a2a8737a": "06dae966d2cf7cc37f1a42281bc01149",
".git/objects/ed/9b0f4b851ed10d240f9ec1c602f230c6143450": "e0682b2dce48c7bf2314b1525d25ad71",
".git/objects/ed/edc32e04998d0e05e920139cc41f7663827010": "e328ebdea91847ec575a2635058841a1",
".git/objects/ee/9c541a2791485d1e2cd5d55cce929b5f3a3b76": "d4dda0915c9fd602c9378b21cd4d1a3d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b5c0d471632ebc6f026f0be648c302166f2ed1": "1f44666a5ce235711160c61445cdb0eb",
".git/objects/f3/a594aa1a6d64b9e33c22e88737555c6c0f60f4": "09c3930f8950ecc3df82eefd0133e911",
".git/objects/f3/e4dc0f3348cd6985035e7cd2b3398900755c6e": "e80b5184833a86138d9bb9f4728684dc",
".git/objects/f4/54b68a2482f169e320d94a8b24b1fd03dc57a4": "096379edbac852603d60d4981e6eb274",
".git/objects/f4/75e28ef4403434f385d78313a23ce60da5fc8f": "a69681b3a32f61d68a9b50ce9e5b42b8",
".git/objects/f4/b44a5935d8a9cc2a4e99f37ee11f29fd090d76": "545aca6b8b7ad2014991ce9571f75a9d",
".git/objects/f5/830b58b28a54106bbeaaa80cb0a0bde3d87a54": "3978fe4b905f580531c306c806434737",
".git/objects/f6/ea19eb926fbb550483eb84f51afe9ec0e48c24": "e456e89ffbaa697e2c78434bfcde26c4",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fb/6a68d5c8e604eb762d02f9e9624cfcdbb98584": "54a56dfc6175318bf7a2cb25f4bcb27e",
".git/objects/fe/4ef4105f4677816357bc9bf82710befd713c6d": "060ecc1a3d6ad176889271d5f0e53360",
".git/objects/fe/4f695e7ca646c7f37a134b2c046c8aca6c9ea2": "92db84729485eb818441730ec2d9804b",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/08e3a3c8b8d3a8f1313d9300bec59e14efa85a": "241fe670f6acd0bcee5b6fd21564c569",
".git/objects/pack/pack-e9b29cda83f46e3e4d5b7264020cf06937902476.idx": "1ab732d77bad1bc5c77f1a379a510651",
".git/objects/pack/pack-e9b29cda83f46e3e4d5b7264020cf06937902476.pack": "9ef9cfcec4d168a663e160aef2bdabd9",
".git/objects/pack/pack-e9b29cda83f46e3e4d5b7264020cf06937902476.rev": "6f093877fa733f07cc0cd406e4ce1827",
".git/ORIG_HEAD": "8cfc5b5868b3ca5945f406e54912d4a2",
".git/refs/heads/main": "4046099704e58febbaacaf7f32322c98",
".git/refs/remotes/origin/main": "4046099704e58febbaacaf7f32322c98",
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
"assets/NOTICES": "e8972a421f108adafa1b93762088a45c",
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
"flutter_bootstrap.js": "4e3fd2b1be29d32f3dfb0cc7c2ad9b03",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67d0399d138c04f9f43b3c22ada5b825",
"/": "67d0399d138c04f9f43b3c22ada5b825",
"main.dart.js": "81bbba6a0b57c7348f5902b5f4d2f6d2",
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
