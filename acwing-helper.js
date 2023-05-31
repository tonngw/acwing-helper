// ==UserScript==
// @name         acwing-helper
// @namespace    https://github.com/tonngw
// @version      1.1.8
// @description  AcWing 助手，学算法就上 AcWing！| 题目复制 | 生成题解模板 | 切换页面风格 (AcWing <-> LeetCode) | 复制代码 | 题目直接跳转 | 一键填写样例 | LeetCode 题目一键跳转 AcWing LeetCode 究极班题目资源页面（支持中文版和国际版）| 添加功能开关（是否记住页面风格、题目页面隐藏桌面文件夹）| 生成页面内容导航 TOC | 首页题目搜索和随机一题
// @author       tonngw
// @run-at       document-end
// @match        https://www.acwing.com/problem/content/*/
// @match        https://www.acwing.com/activity/content/*/
// @match        https://www.acwing.com/activity/content/punch_the_clock/*/
// @match        https://www.acwing.com/activity/content/code/content/*/
// @match        https://www.acwing.com/solution/*/
// @match        https://www.acwing.com/blog/*/
// @match		 https://www.acwing.com/community/*/
// @match		 https://www.acwing.com/*
// @match		 https://leetcode.cn/*/
// @match		 https://leetcode.com/*/
// @exclude		   https://www.acwing.com/problem/content/submission/*/
// @exclude		   https://www.acwing.com/problem/content/discussion/*/
// @exclude		   https://www.acwing.com/problem/content/solution/*/
// @exclude		   https://www.acwing.com/problem/content/video/*/
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb79jDHO9Ykh3vGF+fLpgpIC4X76Ftl7MibRdzI6yXL6SsFuml65afputWUqfq1gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZsNlHmrBZIBuv2PGc75izne8Yc58umDOgLhfzoW2Xs6JtF3OjrJczpKwW86XrlrOm6xZzqCrWMikqVeAqKdWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXsdoCGHFZ3Jlw2XKasFkzm7AY85zvmLOfr9p0KDNjNq21qTgwtqu5MPZreS90p/grcSD2JqxX9CbrFnOoKtYzqSpV86pp1bKraVVcrCkUwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFnJaR5cx2iqYMVnzmXDZc5rwmbOotab3Nvu1/D7/fv8//////39/P/2+vT69/r0+v7+/f//////+/v4/OHmzu68w4napKlXzqmnVs6tpVTOsqNTrLWhUx4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUymooV8lpvlzHaM5gxWfOjdOO2Of15vT+/v7/4fHe8rXaqeKUx37WgrlizoW2Xs6JtF3OkbRh0KrBf9bK1qzk7vHj9P/////r7Nryubd21q2lVM6yo1POtqFSvrqgUigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUMxrHlPLar5XyWnOXMdozrTkt+b9/v3/4fLf8pHPidhzvmLOd7xhzny6YM6AuF/OhbZezom0Xc6OslzOkrBbzpeuWs6brFnOvcWM2vHy5vb8/Pr80Muc4LKjU863oVLOu59Rvr6eUR4AAAAAAAAAAAAAAAAAAAAAAAAAAEzObAhPzWuqU8tqzljJac7D6sfq/f79/7bituRrwmbObsBjznO+Ys53vGHOfLpgzoC4X86Ftl7OibRdzo6yXM6SsFvOl65azpusWc6gq1jOp6tc0N7ev+r+/v7/2dGq5LehUs67n1HOv51QrMKcUAgAAAAAAAAAAAAAAAAAAAAAS85scE7Na85Ty2rOsua65v3+/f+h3KTgZcNlzmrBZM5uwGPOc75izne8Yc58umDOgLhfzoW2Xs6JtF3OjrJczpKwW86XrlrOm6xZzqCrWM6kqVfOqadWztjUruT+/v7/1MeZ4LufUc7AnVDOw5xPcgAAAAAAAAAAAAAAAEfQbB5Kz2zKTs1rzoPalNr9/v3/sOO15GDFZ85lw2XOasFkzm7AY85zvmLOd7xhzny6YM6AuF/OhbZezom0Xc6OslzOkrBbzpeuWs6brFnOoKtYzqSpV86pp1bOraVUzsW6ftjIt3vYu59RzsCdUM7Em0/Kx5pOIAAAAAAAAAAARtBtfkrPbM5Rzm3O5vfq9trz3fJgyWvOZcdr0GfEZ85qwWTObsBjznO+Ys53vGHOfLpgzoC4X86Ftl7OibRdzo6yXM6SsFvOl65azpusWc6gq1jOpKlXzqqoV86wqFrQs6VXzrehUs67n1HOwJ1QzsSbT87Imk6AAAAAAEPSbgxF0W3GSs9szpPhpd7+/v7/e9SI1pTbnNz+/v7/0ezQ7mrBZM5uwGPOc75izne8Yc58umDOgLhfzoW2Xs6JtF3OjrJczpKwW86XrlrOm6xZzqCrWM6kqVfO5OPK7P7+/v/OxJHct6FSzrufUc7AnVDOxJtPzsmZTsjLmE4MQtJtSEXRbc5Kz2zO2PTe8tXy2vBXyWnOXMdoztbw2PD+/v7/k9KP2m7AY85zvmLOd7xhzny6YM6AuF/OhbZezom0Xc6OslzOkrBbzpeuWs6brFnOoKtYzrzAg9j+/v7/6+nV8LKjU863oVLOu59RzsCdUM7Em0/OyZlOzsyYTkpB0m58RdFtzlnTeNL9/v3/muCn4FfJac5cx2jOe8+A1Pv9+/zm9OX0cMBlznO+Ys54vGPOuNmp4srhveifxYDWibRdzo6yXM6SsFvOl65azpusWc6hq1nO7/Di9P39+/y8tXLWsqNTzrehUs67n1HOwJ1QzsSbT87JmU7OzJhNfkHSbqRF0W3OhN+c3P////9q0n3UV8lpzlzHaM5gxWfOvOW95v////+v26ngl8+L2Nvt1vDd7dbwz+TD6ubw3vLo8N/01eLC6r/Rn+CgtWjSm6xZzsnPoOD/////29m36K2lVM6yo1POt6FSzrufUc7AnVDOxJtPzsmZTs7NmE2mQdNuvkXRbc6h5rPi9vz3/FPLas5XyWnOXMdozmDFZ85txm3Q8Pnv+PT69PrP6crs/v7+//X68/ru9en24+7b8uPt2PDt8uX27vPm9ubs2PDL1Kji9/jy+vb27/iurF/QraVUzrKjU863oVLOu59RzsCdUM7Em0/OyZlOzs2XTb5B027KRdFtzq7qvubq+e34U8tqzlfJac5cx2jOYMVnzmXDZc6h2Z7e/////9LqzOzw+O748vjv+Onz5PTl793y4+3Z8N/p0e7V4cDqxtOl4unt2/L/////zc+h4KmnVs6tpVTOsqNTzrehUs67n1HOwJ1QzsSbT87JmU7OzZdNzEHTbspF0W3Oruq+5ur57fhTy2rOV8lpzlzHaM5gxWfOZcNlzmrCZc7d8Nvy/P38/6DQkdrT6Mrs7PTn9uDs1/DL3rfmu9Gd3sLTo+Dl69fw//////X27viytnHUqadWzq2lVM6yo1POt6FSzrufUc7AnVDOxJtPzsmZTs7Nl03MQdNuvEXRbc6h5rPi9vz4/FPLas5XyWnOXMdozmDFZ85lw2XOasFkzonMgdb8/fz83u7Y8Hy6YM6IvGnQstGa3tXkxury9uz49fjw+vL16/j+/v7/0dau5Ofo0/C+vYDYraVUzrKjU863oVLOu59RzsCdUM7Em0/OyZlOzs2XTb5B0m6kRdFtzoTenNz/////atJ91FfJac5cx2jOYMVnzmXDZc5qwWTObsBjzsXkv+j/////qdGX3IC4X86Ftl7OibRdzo6yXM7C1KTi//////j58/r09ez4ycua4M7NnuC9tXTWsqNTzrehUs67n1HOwJ1QzsSbT87JmU7OzZhNpkLSbnxF0W3OWNN40v3+/f+b4KjgV8lpzlzHaM5gxWfOZcNlzmrBZM5uwGPOe8Js0PP58frv9uv4hLpk0IW2Xs6JtF3OkbRg0PD16vb2+PH6orJk0MDHkdzy8+j25uXO7rKqXtCyo1POt6FSzrufUc7AnVDOxJtPzsmZTs7MmE1+QtJuRkXRbc5Kz2zO1/Te8tby2/BXyWnOXMdozmDFZ85lw2XOasFkzm7AY85zvmLOrdeh3v/////B3LHkhbZezom0Xc7G2a3k/////8LP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
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @require      https://unpkg.com/sweetalert/dist/sweetalert.min.js
// @require      https://unpkg.com/turndown/dist/turndown.js
// @require      https://unpkg.com/turndown-plugin-gfm/dist/turndown-plugin-gfm.js
// @require      https://cdn.bootcdn.net/ajax/libs/bootstrap-switch/4.0.0-alpha.1/js/bootstrap-switch.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_notification
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_setClipboard
// @license 	 MIT
// ==/UserScript==

(function () {
	"use strict";

	let version = "1.1.8";

	$("head").append($(`<link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-switch/4.0.0-alpha.1/css/bootstrap-switch.min.css" rel="stylesheet">`));
	$("head").append($(`<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">`));

	// 使用 turndown-plugin-gfm 修复 <table> 标签解析错误，https://github.com/mixmark-io/turndown-plugin-gfm
	var gfm = turndownPluginGfm.gfm;
	// 初始化 html to markdown 转换工具
	var turndownService = new TurndownService();
	turndownService.use(gfm);

	// 设置菜单并加载
	Script_setting();
    function Script_setting() {
        let menu_ALL = [
            ['switchPageStyle', 'pageStyle function', '是否记住当前页面风格', false, true],
			['switchShowFolder', 'showFolder function', '是否在题目页面隐藏桌面文件夹', false, true],
        ], menu_ID = [], menu_ID_Content = [];
        for (const element of menu_ALL){ // 如果读取到的值为 null 就写入默认值
            if (GM_getValue(element[0]) == null){GM_setValue(element[0], element[3])};
        }
        registerMenuCommand();
 
        // 注册脚本菜单
        function registerMenuCommand() {
            if (menu_ID.length > menu_ALL.length){ // 如果菜单ID数组多于菜单数组，说明不是首次添加菜单，需要卸载所有脚本菜单
                for (const element of menu_ID){
                    GM_unregisterMenuCommand(element);
                }
            }
            for (let i=0;i < menu_ALL.length;i++){ // 循环注册脚本菜单
                menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
                let content = `${menu_ALL[i][3]?'✅':'❎'} ${ menu_ALL[i][2]}`
                menu_ID[i] = GM_registerMenuCommand(content, function(){ menu_switch(`${menu_ALL[i][0]}`,`${menu_ALL[i][1]}`,`${menu_ALL[i][2]}`,`${menu_ALL[i][3]}`)});
                menu_ID_Content[i] = content
            }
            menu_ID[menu_ID.length] = GM_registerMenuCommand(`🏁 当前版本 ${version}`, function () {window.open('https://greasyfork.org/zh-CN/scripts/444381-acwing-helper', {active: true,insert: true,setParent: true});});
            menu_ID_Content[menu_ID_Content.length] = `🏁 当前版本 ${version}`
        }
 
        // 切换选项
        function menu_switch(name, ename, cname, value){
            if(value == 'false'){
                GM_setValue(`${name}`, true);
                registerMenuCommand(); // 重新注册脚本菜单
                location.reload(); // 刷新网页
                GM_notification({text: `「${cname}」已开启\n`, timeout: 3000}); // 提示消息
            } else {
                GM_setValue(`${name}`, false);
                registerMenuCommand(); // 重新注册脚本菜单
                location.reload(); // 刷新网页
                GM_notification({text: `「${cname}」已关闭\n`, timeout: 3000}); // 提示消息
            }
            registerMenuCommand(); // 重新注册脚本菜单
        }
    }
	
	let isPageStyle = GM_getValue("switchPageStyle"); // 是否开启切换页面风格
	let isShowFolder = GM_getValue("switchShowFolder"); // 是否开启在题目页面隐藏桌面文件夹
	
	const window = unsafeWindow;
	var content = "";

	// 判断路径中是否包含 code, solution, blog, community，代码复制功能只在指定路径下下生效
	var url = window.location.href;

	// acwing 首页添加题目搜索框和随机一题
	if (url === "https://www.acwing.com/" || url.includes("https://www.acwing.com/about/")) {
		$(".nav.nav-tabs").append('<div class="input-group" style="width: 250px; float: right; text-align: right; margin: auto;"><span class="input-group-btn"><button class="btn btn-link" id="random-btn-id" type="submit" title="随机一题" style="border-radius: 5px;"> &nbsp;&nbsp;<span class="glyphicon glyphicon-random" style="font-size: 17px;"></span></button></span><input type="text" id="search-input-id" name="search_content" class="form-control" placeholder="搜索题目" style="border-radius: 5px;"><span class="input-group-btn"> <button class="btn btn-link" id="search-btn-id" type="submit" title="搜索" style="border-radius: 5px;"> &nbsp;&nbsp;<span class="glyphicon glyphicon-search" style="font-size: 17px;"></span></button></span></div>');
		
		// 监听搜索按钮点击事件
		$('#search-btn-id').on('click', function() {
			search();
		});

		// 监听随机一题按钮点击事件
		$('#random-btn-id').on('click', function() {
			random();
		});
		
		// 监听 Enter 键按下事件
		$('#search-input-id').on('keydown', function(event) {
			if (event.keyCode === 13) {
				search();
			}
		});

		function search() {
			// 获取用户输入的关键字
			var keyword = $('#search-input-id').val().trim();
			if (keyword === '') {
			  alert('请输入内容');
			  return;
			}
		
			// 拼接搜索链接并在新窗口打开
			var url = 'https://www.acwing.com/problem/search/1/?search_content=' + keyword;
			window.open(url);
		}

		function random() {
			var random_number = Math.floor(Math.random() * 5031) + 1;
			var url = 'https://www.acwing.com/problem/content/' + random_number;
			window.open(url);
		}

		return;
	}

	if (url.includes("leetcode")) {
		console.log("leetcode...");
		if (!url.includes("problems")) return; // 不是 LeetCode 题目页面直接返回
		const urlPrefix = "https://www.acwing.com/activity/content/problem/content/";
		const title2URL = new Map([['two-sum', '2326/'], ['add-two-numbers', '2327/'], ['longest-substring-without-repeating-characters', '2328/'], ['median-of-two-sorted-arrays', '2329/'], ['longest-palindromic-substring', '2330/'], ['zigzag-conversion', '2331/'], ['reverse-integer', '2332/'], ['string-to-integer-atoi', '2333/'], ['palindrome-number', '2334/'], ['regular-expression-matching', '2335/'], ['container-with-most-water', '2344/'], ['integer-to-roman', '2345/'], ['roman-to-integer', '2346/'], ['longest-common-prefix', '2347/'], ['3sum', '2348/'], ['3sum-closest', '2349/'], ['letter-combinations-of-a-phone-number', '2350/'], ['4sum', '2351/'], ['remove-nth-node-from-end-of-list', '2352/'], ['valid-parentheses', '2353/'], ['merge-two-sorted-lists', '2354/'], ['generate-parentheses', '2355/'], ['merge-k-sorted-lists', '2356/'], ['swap-nodes-in-pairs', '2357/'], ['reverse-nodes-in-k-group', '2358/'], ['remove-duplicates-from-sorted-array', '2359/'], ['remove-element', '2360/'], ['implement-strstr', '2361/'], ['divide-two-integers', '2362/'], ['substring-with-concatenation-of-all-words', '2363/'], ['next-permutation', '2368/'], ['longest-valid-parentheses', '2369/'], ['search-in-rotated-sorted-array', '2370/'], ['find-first-and-last-position-of-element-in-sorted-array', '2371/'], ['search-insert-position', '2372/'], ['valid-sudoku', '2373/'], ['sudoku-solver', '2374/'], ['count-and-say', '2375/'], ['combination-sum', '2376/'], ['combination-sum-ii', '2377/'], ['first-missing-positive', '2378/'], ['trapping-rain-water', '2379/'], ['multiply-strings', '2380/'], ['wildcard-matching', '2381/'], ['jump-game-ii', '2382/'], ['permutations', '2383/'], ['permutations-ii', '2384/'], ['rotate-image', '2385/'], ['group-anagrams', '2386/'], ['powx-n', '2387/'], ['n-queens', '2396/'], ['n-queens-ii', '2397/'], ['maximum-subarray', '2398/'], ['spiral-matrix', '2399/'], ['jump-game', '2400/'], ['merge-intervals', '2401/'], ['insert-interval', '2402/'], ['length-of-last-word', '2403/'], ['spiral-matrix-ii', '2404/'], ['permutation-sequence', '2405/'], ['rotate-list', '2406/'], ['unique-paths', '2407/'], ['unique-paths-ii', '2408/'], ['minimum-path-sum', '2409/'], ['valid-number', '2410/'], ['plus-one', '2411/'], ['add-binary', '2412/'], ['text-justification', '2413/'], ['sqrtx', '2414/'], ['climbing-stairs', '2415/'], ['simplify-path', '2420/'], ['edit-distance', '2421/'], ['set-matrix-zeroes', '2422/'], ['search-a-2d-matrix', '2423/'], ['sort-colors', '2424/'], ['minimum-window-substring', '2425/'], ['combinations', '2426/'], ['subsets', '2427/'], ['word-search', '2428/'], ['remove-duplicates-from-sorted-array-ii', '2429/'], ['search-in-rotated-sorted-array-ii', '2430/'], ['remove-duplicates-from-sorted-list-ii', '2431/'], ['remove-duplicates-from-sorted-list', '2432/'], ['largest-rectangle-in-histogram', '2433/'], ['maximal-rectangle', '2434/'], ['partition-list', '2435/'], ['scramble-string', '2436/'], ['merge-sorted-array', '2437/'], ['gray-code', '2438/'], ['subsets-ii', '2439/'], ['decode-ways', '2444/'], ['reverse-linked-list-ii', '2445/'], ['restore-ip-addresses', '2446/'], ['binary-tree-inorder-traversal', '2447/'], ['unique-binary-search-trees-ii', '2448/'], ['unique-binary-search-trees', '2449/'], ['interleaving-string', '2450/'], ['validate-binary-search-tree', '2451/'], ['recover-binary-search-tree', '2452/'], ['same-tree', '2453/'], ['symmetric-tree', '2454/'], ['binary-tree-level-order-traversal', '2455/'], ['binary-tree-zigzag-level-order-traversal', '2456/'], ['maximum-depth-of-binary-tree', '2457/'], ['construct-binary-tree-from-preorder-and-inorder-traversal', '2458/'], ['construct-binary-tree-from-inorder-and-postorder-traversal', '2459/'], ['binary-tree-level-order-traversal-ii', '2460/'], ['convert-sorted-array-to-binary-search-tree', '2461/'], ['convert-sorted-list-to-binary-search-tree', '2462/'], ['balanced-binary-tree', '2463/'], ['minimum-depth-of-binary-tree', '2473/'], ['path-sum', '2474/'], ['path-sum-ii', '2475/'], ['flatten-binary-tree-to-linked-list', '2476/'], ['distinct-subsequences', '2477/'], ['populating-next-right-pointers-in-each-node', '2478/'], ['populating-next-right-pointers-in-each-node-ii', '2479/'], ['pascals-triangle', '2480/'], ['pascals-triangle-ii', '2481/'], ['triangle', '2482/'], ['best-time-to-buy-and-sell-stock', '2483/'], ['best-time-to-buy-and-sell-stock-ii', '2484/'], ['best-time-to-buy-and-sell-stock-iii', '2485/'], ['binary-tree-maximum-path-sum', '2486/'], ['valid-palindrome', '2487/'], ['word-ladder-ii', '2488/'], ['word-ladder', '2489/'], ['longest-consecutive-sequence', '2490/'], ['sum-root-to-leaf-numbers', '2491/'], ['surrounded-regions', '2492/'], ['palindrome-partitioning', '2501/'], ['palindrome-partitioning-ii', '2502/'], ['clone-graph', '2503/'], ['gas-station', '2504/'], ['candy', '2505/'], ['single-number', '2506/'], ['single-number-ii', '2507/'], ['copy-list-with-random-pointer', '2508/'], ['word-break', '2509/'], ['word-break-ii', '2510/'], ['linked-list-cycle', '2511/'], ['linked-list-cycle-ii', '2512/'], ['reorder-list', '2513/'], ['binary-tree-preorder-traversal', '2514/'], ['binary-tree-postorder-traversal', '2515/'], ['lru-cache', '2516/'], ['insertion-sort-list', '2517/'], ['sort-list', '2518/'], ['max-points-on-a-line', '2519/'], ['evaluate-reverse-polish-notation', '2520/'], ['reverse-words-in-a-string', '2532/'], ['maximum-product-subarray', '2533/'], ['find-minimum-in-rotated-sorted-array', '2534/'], ['find-minimum-in-rotated-sorted-array-ii', '2535/'], ['min-stack', '2536/'], ['intersection-of-two-linked-lists', '2537/'], ['find-peak-element', '2538/'], ['maximum-gap', '2539/'], ['compare-version-numbers', '2540/'], ['fraction-to-recurring-decimal', '2541/'], ['two-sum-ii-input-array-is-sorted', '2542/'], ['excel-sheet-column-title', '2543/'], ['majority-element', '2544/'], ['excel-sheet-column-number', '2545/'], ['factorial-trailing-zeroes', '2546/'], ['binary-search-tree-iterator', '2547/'], ['dungeon-game', '2548/'], ['largest-number', '2549/'], ['repeated-dna-sequences', '2550/'], ['best-time-to-buy-and-sell-stock-iv', '2551/'], ['rotate-array', '2563/'], ['reverse-bits', '2564/'], ['number-of-1-bits', '2565/'], ['house-robber', '2566/'], ['binary-tree-right-side-view', '2567/'], ['number-of-islands', '2568/'], ['bitwise-and-of-numbers-range', '2569/'], ['happy-number', '2570/'], ['remove-linked-list-elements', '2571/'], ['count-primes', '2572/'], ['isomorphic-strings', '2573/'], ['reverse-linked-list', '2574/'], ['course-schedule', '2575/'], ['implement-trie-prefix-tree', '2576/'], ['minimum-size-subarray-sum', '2577/'], ['course-schedule-ii', '2578/'], ['design-add-and-search-words-data-structure', '2579/'], ['word-search-ii', '2580/'], ['house-robber-ii', '2581/'], ['shortest-palindrome', '2582/'], ['kth-largest-element-in-an-array', '2596/'], ['combination-sum-iii', '2597/'], ['contains-duplicate', '2598/'], ['the-skyline-problem', '2599/'], ['contains-duplicate-ii', '2600/'], ['contains-duplicate-iii', '2601/'], ['maximal-square', '2602/'], ['count-complete-tree-nodes', '2603/'], ['rectangle-area', '2604/'], ['basic-calculator', '2605/'], ['implement-stack-using-queues', '2606/'], ['invert-binary-tree', '2607/'], ['basic-calculator-ii', '2608/'], ['summary-ranges', '2609/'], ['majority-element-ii', '2610/'], ['kth-smallest-element-in-a-bst', '2611/'], ['power-of-two', '2612/'], ['implement-queue-using-stacks', '2613/'], ['number-of-digit-one', '2614/'], ['palindrome-linked-list', '2615/'], ['lowest-common-ancestor-of-a-binary-search-tree', '2629/'], ['lowest-common-ancestor-of-a-binary-tree', '2630/'], ['delete-node-in-a-linked-list', '2631/'], ['product-of-array-except-self', '2632/'], ['sliding-window-maximum', '2633/'], ['search-a-2d-matrix-ii', '2634/'], ['different-ways-to-add-parentheses', '2635/'], ['valid-anagram', '2636/'], ['binary-tree-paths', '2637/'], ['add-digits', '2638/'], ['single-number-iii', '2639/'], ['ugly-number', '2640/'], ['ugly-number-ii', '2641/'], ['missing-number', '2642/'], ['integer-to-english-words', '2643/'], ['h-index', '2644/'], ['h-index-ii', '2645/'], ['first-bad-version', '2646/'], ['perfect-squares', '2647/'], ['expression-add-operators', '2648/'], ['move-zeroes', '2663/'], ['peeking-iterator', '2664/'], ['find-the-duplicate-number', '2665/'], ['game-of-life', '2666/'], ['word-pattern', '2667/'], ['nim-game', '2668/'], ['find-median-from-data-stream', '2669/'], ['serialize-and-deserialize-binary-tree', '2670/'], ['bulls-and-cows', '2671/'], ['longest-increasing-subsequence', '2672/'], ['remove-invalid-parentheses', '2673/'], ['range-sum-query-immutable', '2674/'], ['range-sum-query-2d-immutable', '2675/'], ['additive-number', '2676/'], ['range-sum-query-mutable', '2677/'], ['best-time-to-buy-and-sell-stock-with-cooldown', '2678/'], ['minimum-height-trees', '2679/'], ['burst-balloons', '2680/'], ['super-ugly-number', '2681/'], ['count-of-smaller-numbers-after-self', '2682/'], ['remove-duplicate-letters', '2709/'], ['maximum-product-of-word-lengths', '2710/'], ['bulb-switcher', '2711/'], ['create-maximum-number', '2712/'], ['coin-change', '2713/'], ['wiggle-sort-ii', '2714/'], ['power-of-three', '2715/'], ['count-of-range-sum', '2716/'], ['odd-even-linked-list', '2717/'], ['longest-increasing-path-in-a-matrix', '2718/'], ['patching-array', '2719/'], ['verify-preorder-serialization-of-a-binary-tree', '2720/'], ['reconstruct-itinerary', '2721/'], ['increasing-triplet-subsequence', '2722/'], ['self-crossing', '2723/'], ['palindrome-pairs', '2724/'], ['house-robber-iii', '2725/'], ['counting-bits', '2726/'], ['flatten-nested-list-iterator', '2727/'], ['power-of-four', '2728/'], ['integer-break', '2733/'], ['reverse-string', '2734/'], ['reverse-vowels-of-a-string', '2735/'], ['top-k-frequent-elements', '2736/'], ['intersection-of-two-arrays', '2737/'], ['intersection-of-two-arrays-ii', '2738/'], ['data-stream-as-disjoint-intervals', '2739/'], ['russian-doll-envelopes', '2740/'], ['design-twitter', '2741/'], ['count-numbers-with-unique-digits', '2742/'], ['max-sum-of-rectangle-no-larger-than-k', '2743/'], ['water-and-jug-problem', '2744/'], ['valid-perfect-square', '2745/'], ['largest-divisible-subset', '2746/'], ['sum-of-two-integers', '2747/'], ['super-pow', '2748/'], ['find-k-pairs-with-smallest-sums', '2749/'], ['guess-number-higher-or-lower', '2750/'], ['guess-number-higher-or-lower-ii', '2751/'], ['wiggle-subsequence', '2752/'], ['combination-sum-iv', '2763/'], ['kth-smallest-element-in-a-sorted-matrix', '2764/'], ['insert-delete-getrandom-o1', '2765/'], ['insert-delete-getrandom-o1-duplicates-allowed', '2766/'], ['linked-list-random-node', '2767/'], ['ransom-note', '2768/'], ['shuffle-an-array', '2769/'], ['mini-parser', '2770/'], ['lexicographical-numbers', '2771/'], ['first-unique-character-in-a-string', '2772/'], ['longest-absolute-file-path', '2773/'], ['find-the-difference', '2774/'], ['elimination-game', '2775/'], ['perfect-rectangle', '2776/'], ['is-subsequence', '2777/'], ['utf-8-validation', '2778/'], ['decode-string', '2779/'], ['longest-substring-with-at-least-k-repeating-characters', '2780/'], ['rotate-function', '2781/'], ['integer-replacement', '2782/'], ['random-pick-index', '2797/'], ['evaluate-division', '2798/'], ['nth-digit', '2799/'], ['binary-watch', '2800/'], ['remove-k-digits', '2801/'], ['frog-jump', '2802/'], ['sum-of-left-leaves', '2803/'], ['convert-a-number-to-hexadecimal', '2804/'], ['queue-reconstruction-by-height', '2805/'], ['trapping-rain-water-ii', '2806/'], ['longest-palindrome', '2807/'], ['split-array-largest-sum', '2808/'], ['fizz-buzz', '2809/'], ['arithmetic-slices', '2810/'], ['third-maximum-number', '2811/'], ['add-strings', '2812/'], ['partition-equal-subset-sum', '2813/'], ['pacific-atlantic-water-flow', '2814/'], ['battleships-in-a-board', '2815/'], ['strong-password-checker', '2816/'], ['maximum-xor-of-two-numbers-in-an-array', '2819/'], ['reconstruct-original-digits-from-english', '2820/'], ['longest-repeating-character-replacement', '2821/'], ['construct-quad-tree', '2822/'], ['n-ary-tree-level-order-traversal', '2823/'], ['flatten-a-multilevel-doubly-linked-list', '2824/'], ['all-oone-data-structure', '2825/'], ['minimum-genetic-mutation', '2826/'], ['number-of-segments-in-a-string', '2827/'], ['non-overlapping-intervals', '2828/'], ['find-right-interval', '2858/'], ['path-sum-iii', '2859/'], ['find-all-anagrams-in-a-string', '2860/'], ['k-th-smallest-in-lexicographical-order', '2861/'], ['arranging-coins', '2862/'], ['find-all-duplicates-in-an-array', '2863/'], ['string-compression', '2864/'], ['add-two-numbers-ii', '2865/'], ['arithmetic-slices-ii-subsequence', '2866/'], ['number-of-boomerangs', '2867/'], ['find-all-numbers-disappeared-in-an-array', '2868/'], ['serialize-and-deserialize-bst', '2869/'], ['delete-node-in-a-bst', '2870/'], ['sort-characters-by-frequency', '2871/'], ['minimum-number-of-arrows-to-burst-balloons', '2872/'], ['minimum-moves-to-equal-array-elements', '2873/'], ['4sum-ii', '2874/'], ['assign-cookies', '2875/'], ['132-pattern', '2876/'], ['circular-array-loop', '2877/'], ['poor-pigs', '2878/'], ['repeated-substring-pattern', '2879/'], ['lfu-cache', '2880/'], ['hamming-distance', '2881/'], ['minimum-moves-to-equal-array-elements-ii', '2882/'], ['island-perimeter', '2883/'], ['can-i-win', '2884/'], ['count-the-repetitions', '2885/'], ['unique-substrings-in-wraparound-string', '2886/'], ['validate-ip-address', '2887/'], ['implement-rand10-using-rand7', '2888/'], ['concatenated-words', '2889/'], ['matchsticks-to-square', '2890/'], ['ones-and-zeroes', '2891/'], ['heaters', '2892/'], ['number-complement', '2893/'], ['total-hamming-distance', '2894/'], ['generate-random-point-in-a-circle', '2895/'], ['largest-palindrome-product', '2896/'], ['sliding-window-median', '2897/'], ['magical-string', '2908/'], ['license-key-formatting', '2909/'], ['smallest-good-base', '2910/'], ['max-consecutive-ones', '2911/'], ['predict-the-winner', '2912/'], ['zuma-game', '2913/'], ['increasing-subsequences', '2914/'], ['construct-the-rectangle', '2915/'], ['reverse-pairs', '2916/'], ['target-sum', '2917/'], ['teemo-attacking', '2918/'], ['next-greater-element-i', '2919/'], ['random-point-in-non-overlapping-rectangles', '2920/'], ['diagonal-traverse', '2921/'], ['keyboard-row', '2922/'], ['find-mode-in-binary-search-tree', '2923/'], ['ipo', '2924/'], ['next-greater-element-ii', '2925/'], ['base-7', '2926/'], ['relative-ranks', '2927/'], ['perfect-number', '2943/'], ['most-frequent-subtree-sum', '2944/'], ['fibonacci-number', '2945/'], ['find-bottom-left-tree-value', '2946/'], ['freedom-trail', '2947/'], ['find-largest-value-in-each-tree-row', '2948/'], ['longest-palindromic-subsequence', '2949/'], ['super-washing-machines', '2950/'], ['coin-change-2', '2951/'], ['random-flip-matrix', '2952/'], ['detect-capital', '2953/'], ['longest-uncommon-subsequence-i', '2954/'], ['longest-uncommon-subsequence-ii', '2955/'], ['continuous-subarray-sum', '2956/'], ['longest-word-in-dictionary-through-deleting', '2957/'], ['contiguous-array', '2958/'], ['beautiful-arrangement', '2959/'], ['random-pick-with-weight', '2960/'], ['minesweeper', '2961/'], ['minimum-absolute-difference-in-bst', '2962/'], ['k-diff-pairs-in-an-array', '3032/'], ['encode-and-decode-tinyurl', '3033/'], ['complex-number-multiplication', '3034/'], ['convert-bst-to-greater-tree', '3035/'], ['minimum-time-difference', '3036/'], ['single-element-in-a-sorted-array', '3037/'], ['reverse-string-ii', '3038/'], ['01-matrix', '3039/'], ['diameter-of-binary-tree', '3040/'], ['remove-boxes', '3041/'], ['number-of-provinces', '3042/'], ['student-attendance-record-i', '3043/'], ['student-attendance-record-ii', '3044/'], ['optimal-division', '3045/'], ['brick-wall', '3046/'], ['next-greater-element-iii', '3047/'], ['reverse-words-in-a-string-iii', '3048/'], ['logical-or-of-two-binary-grids-represented-as-quad-trees', '3049/'], ['maximum-depth-of-n-ary-tree', '3050/'], ['subarray-sum-equals-k', '3051/'], ['array-partition', '3161/'], ['binary-tree-tilt', '3162/'], ['find-the-closest-palindrome', '3163/'], ['array-nesting', '3164/'], ['reshape-the-matrix', '3165/'], ['permutation-in-string', '3166/'], ['subtree-of-another-tree', '3167/'], ['distribute-candies', '3168/'], ['out-of-boundary-paths', '3169/'], ['shortest-unsorted-continuous-subarray', '3170/'], ['delete-operation-for-two-strings', '3171/'], ['erect-the-fence', '3172/'], ['n-ary-tree-preorder-traversal', '3173/'], ['n-ary-tree-postorder-traversal', '3174/'], ['tag-validator', '3175/'], ['fraction-addition-and-subtraction', '3176/'], ['valid-square', '3177/'], ['longest-harmonious-subsequence', '3178/'], ['range-addition-ii', '3179/'], ['minimum-index-sum-of-two-lists', '3180/'], ['non-negative-integers-without-consecutive-ones', '3193/'], ['can-place-flowers', '3194/'], ['construct-string-from-binary-tree', '3195/'], ['find-duplicate-file-in-system', '3196/'], ['valid-triangle-number', '3197/'], ['merge-two-binary-trees', '3198/'], ['task-scheduler', '3199/'], ['design-circular-queue', '3200/'], ['add-one-row-to-tree', '3201/'], ['maximum-product-of-three-numbers', '3202/'], ['k-inverse-pairs-array', '3216/'], ['course-schedule-iii', '3217/'], ['smallest-range-covering-elements-from-k-lists', '3218/'], ['sum-of-square-numbers', '3219/'], ['exclusive-time-of-functions', '3220/'], ['average-of-levels-in-binary-tree', '3221/'], ['shopping-offers', '3222/'], ['decode-ways-ii', '3223/'], ['solve-the-equation', '3224/'], ['design-circular-deque', '3225/'], ['maximum-average-subarray-i', '3226/'], ['set-mismatch', '3227/'], ['maximum-length-of-pair-chain', '3228/'], ['palindromic-substrings', '3229/'], ['replace-words', '3230/'], ['dota2-senate', '3231/'], ['2-keys-keyboard', '3232/'], ['find-duplicate-subtrees', '3233/'], ['two-sum-iv-input-is-a-bst', '3234/'], ['maximum-binary-tree', '3235/'], ['print-binary-tree', '3260/'], ['robot-return-to-origin', '3261/'], ['find-k-closest-elements', '3262/'], ['split-array-into-consecutive-subsequences', '3263/'], ['image-smoother', '3264/'], ['maximum-width-of-binary-tree', '3265/'], ['strange-printer', '3266/'], ['non-decreasing-array', '3267/'], ['beautiful-arrangement-ii', '3268/'], ['kth-smallest-number-in-multiplication-table', '3269/'], ['trim-a-binary-search-tree', '3270/'], ['maximum-swap', '3271/'], ['second-minimum-node-in-a-binary-tree', '3272/'], ['bulb-switcher-ii', '3273/'], ['number-of-longest-increasing-subsequence', '3274/'], ['longest-continuous-increasing-subsequence', '3275/'], ['cut-off-trees-for-golf-event', '3276/'], ['implement-magic-dictionary', '3277/'], ['map-sum-pairs', '3278/'], ['valid-parenthesis-string', '3279/'], ['24-game', '3280/'], ['valid-palindrome-ii', '3281/'], ['baseball-game', '3282/'], ['redundant-connection', '3283/'], ['redundant-connection-ii', '3284/'], ['repeated-string-match', '3285/'], ['longest-univalue-path', '3286/'], ['knight-probability-in-chessboard', '3287/'], ['maximum-sum-of-3-non-overlapping-subarrays', '3288/'], ['employee-importance', '3289/'], ['stickers-to-spell-word', '3290/'], ['top-k-frequent-words', '3291/'], ['binary-number-with-alternating-bits', '3292/'], ['max-area-of-island', '3293/'], ['count-binary-substrings', '3294/'], ['degree-of-an-array', '3295/'], ['partition-to-k-equal-sum-subsets', '3296/'], ['falling-squares', '3297/'], ['search-in-a-binary-search-tree', '3298/'], ['insert-into-a-binary-search-tree', '3299/'], ['kth-largest-element-in-a-stream', '3300/'], ['binary-search', '3301/'], ['design-hashset', '3302/'], ['design-hashmap', '3303/'], ['design-linked-list', '3304/'], ['to-lower-case', '3305/'], ['random-pick-with-blacklist', '3306/'], ['minimum-ascii-delete-sum-for-two-strings', '3307/'], ['subarray-product-less-than-k', '3308/'], ['best-time-to-buy-and-sell-stock-with-transaction-fee', '3309/'], ['range-module', '3310/'], ['1-bit-and-2-bit-characters', '3311/'], ['maximum-length-of-repeated-subarray', '3312/'], ['find-k-th-smallest-pair-distance', '3313/'], ['longest-word-in-dictionary', '3314/'], ['accounts-merge', '3315/'], ['remove-comments', '3316/'], ['find-pivot-index', '3317/'], ['split-linked-list-in-parts', '3318/'], ['number-of-atoms', '3319/'], ['self-dividing-numbers', '3320/'], ['my-calendar-i', '3321/'], ['count-different-palindromic-subsequences', '3322/'], ['my-calendar-ii', '3323/'], ['my-calendar-iii', '3324/'], ['flood-fill', '3325/'], ['asteroid-collision', '3326/'], ['parse-lisp-expression', '3327/'], ['monotone-increasing-digits', '3328/'], ['daily-temperatures', '3329/'], ['delete-and-earn', '3330/'], ['cherry-pickup', '3331/'], ['network-delay-time', '3332/'], ['find-smallest-letter-greater-than-target', '3333/'], ['prefix-and-suffix-search', '3334/'], ['min-cost-climbing-stairs', '3339/'], ['largest-number-at-least-twice-of-others', '3335/'], ['shortest-completing-word', '3336/'], ['contain-virus', '3337/'], ['open-the-lock', '3338/'], ['cracking-the-safe', '3667/'], ['reach-a-number', '3668/'], ['pyramid-transition-matrix', '3669/'], ['set-intersection-size-at-least-two', '3670/'], ['special-binary-string', '3671/'], ['prime-number-of-set-bits-in-binary-representation', '3672/'], ['partition-labels', '3673/'], ['largest-plus-sign', '3674/'], ['couples-holding-hands', '3675/'], ['toeplitz-matrix', '3676/'], ['reorganize-string', '3677/'], ['max-chunks-to-make-sorted-ii', '3678/'], ['max-chunks-to-make-sorted', '3679/'], ['basic-calculator-iv', '3680/'], ['jewels-and-stones', '3681/'], ['sliding-puzzle', '3682/'], ['global-and-local-inversions', '3683/'], ['swap-adjacent-in-lr-string', '3684/'], ['swim-in-rising-water', '3685/'], ['k-th-symbol-in-grammar', '3686/'], ['reaching-points', '3755/'], ['rabbits-in-forest', '3756/'], ['transform-to-chessboard', '3757/'], ['minimum-distance-between-bst-nodes', '3758/'], ['letter-case-permutation', '3759/'], ['is-graph-bipartite', '3760/'], ['k-th-smallest-prime-fraction', '3761/'], ['cheapest-flights-within-k-stops', '3762/'], ['rotated-digits', '3763/'], ['escape-the-ghosts', '3764/'], ['domino-and-tromino-tiling', '3765/'], ['custom-sort-string', '3766/'], ['number-of-matching-subsequences', '3767/'], ['preimage-size-of-factorial-zeroes-function', '3768/'], ['valid-tic-tac-toe-state', '3769/'], ['number-of-subarrays-with-bounded-maximum', '3770/'], ['rotate-string', '3771/'], ['all-paths-from-source-to-target', '3772/'], ['smallest-rotation-with-highest-score', '3773/'], ['champagne-tower', '3774/'], ['minimum-swaps-to-make-sequences-increasing', '3819/'], ['find-eventual-safe-states', '3820/'], ['bricks-falling-when-hit', '3821/'], ['unique-morse-code-words', '3822/'], ['split-array-with-same-average', '3823/'], ['number-of-lines-to-write-string', '3824/'], ['max-increase-to-keep-city-skyline', '3825/'], ['soup-servings', '3826/'], ['expressive-words', '3827/'], ['chalkboard-xor-game', '3828/'], ['subdomain-visit-count', '3829/'], ['largest-triangle-area', '3830/'], ['largest-sum-of-averages', '3831/'], ['binary-tree-pruning', '3832/'], ['bus-routes', '3833/'], ['ambiguous-coordinates', '3834/'], ['linked-list-components', '3835/'], ['race-car', '3836/'], ['most-common-word', '3837/'], ['short-encoding-of-words', '3838/'], ['shortest-distance-to-a-character', '3878/'], ['card-flipping-game', '3879/'], ['binary-trees-with-factors', '3880/'], ['goat-latin', '3881/'], ['friends-of-appropriate-ages', '3882/'], ['most-profit-assigning-work', '3883/'], ['making-a-large-island', '3884/'], ['count-unique-characters-of-all-substrings-of-a-given-string', '3885/'], ['consecutive-numbers-sum', '3886/'], ['positions-of-large-groups', '3887/'], ['masking-personal-information', '3935/'], ['flipping-an-image', '3936/'], ['find-and-replace-in-string', '3937/'], ['sum-of-distances-in-tree', '3938/'], ['image-overlap', '3939/'], ['rectangle-overlap', '3940/'], ['new-21-game', '3941/'], ['push-dominoes', '3942/'], ['similar-string-groups', '3943/'], ['magic-squares-in-grid', '3944/'], ['keys-and-rooms', '3945/'], ['split-array-into-fibonacci-sequence', '3946/'], ['guess-the-word', '3947/'], ['backspace-string-compare', '3948/'], ['longest-mountain-in-array', '3949/'], ['hand-of-straights', '3950/'], ['shortest-path-visiting-all-nodes', '3951/'], ['shifting-letters', '3952/'], ['maximize-distance-to-closest-person', '3953/'], ['rectangle-area-ii', '3954/'], ['loud-and-rich', '3963/'], ['peak-index-in-a-mountain-array', '3964/'], ['car-fleet', '3965/'], ['k-similar-strings', '3966/'], ['exam-room', '3967/'], ['score-of-parentheses', '3968/'], ['minimum-cost-to-hire-k-workers', '3969/'], ['mirror-reflection', '3970/'], ['buddy-strings', '3971/'], ['lemonade-change', '3972/'], ['score-after-flipping-matrix', '3973/'], ['shortest-subarray-with-sum-at-least-k', '3974/'], ['all-nodes-distance-k-in-binary-tree', '3975/'], ['shortest-path-to-get-all-keys', '3976/'], ['smallest-subtree-with-all-the-deepest-nodes', '3977/'], ['prime-palindrome', '3978/'], ['transpose-matrix', '3979/'], ['binary-gap', '3980/'], ['reordered-power-of-2', '3981/'], ['advantage-shuffle', '3982/'], ['minimum-number-of-refueling-stops', '4008/'], ['leaf-similar-trees', '4009/'], ['length-of-longest-fibonacci-subsequence', '4010/'], ['walking-robot-simulation', '4011/'], ['koko-eating-bananas', '4012/'], ['middle-of-the-linked-list', '4013/'], ['stone-game', '4014/'], ['nth-magical-number', '4015/'], ['profitable-schemes', '4016/'], ['decoded-string-at-index', '4017/'], ['boats-to-save-people', '4018/'], ['reachable-nodes-in-subdivided-graph', '4019/'], ['projection-area-of-3d-shapes', '4020/'], ['uncommon-words-from-two-sentences', '4021/'], ['spiral-matrix-iii', '4022/'], ['possible-bipartition', '4023/'], ['super-egg-drop', '4024/'], ['fair-candy-swap', '4025/'], ['construct-binary-tree-from-preorder-and-postorder-traversal', '4026/'], ['find-and-replace-pattern', '4027/'], ['sum-of-subsequence-widths', '4126/'], ['surface-area-of-3d-shapes', '4127/'], ['groups-of-special-equivalent-strings', '4128/'], ['all-possible-full-binary-trees', '4129/'], ['maximum-frequency-stack', '4130/'], ['monotonic-array', '4131/'], ['increasing-order-search-tree', '4132/'], ['bitwise-ors-of-subarrays', '4133/'], ['orderly-queue', '4134/'], ['rle-iterator', '4135/'], ['online-stock-span', '4152/'], ['numbers-at-most-n-given-digit-set', '4153/'], ['valid-permutations-for-di-sequence', '4154/'], ['fruit-into-baskets', '4155/'], ['sort-array-by-parity', '4156/'], ['super-palindromes', '4157/'], ['sum-of-subarray-minimums', '4158/'], ['smallest-range-i', '4159/'], ['snakes-and-ladders', '4160/'], ['smallest-range-ii', '4161/'], ['online-election', '4162/'], ['sort-an-array', '4163/'], ['cat-and-mouse', '4164/'], ['x-of-a-kind-in-a-deck-of-cards', '4165/'], ['partition-array-into-disjoint-intervals', '4166/'], ['word-subsets', '4167/'], ['reverse-only-letters', '4168/'], ['maximum-sum-circular-subarray', '4169/'], ['complete-binary-tree-inserter', '4170/'], ['number-of-music-playlists', '4171/'], ['minimum-add-to-make-parentheses-valid', '4182/'], ['sort-array-by-parity-ii', '4183/'], ['3sum-with-multiplicity', '4184/'], ['minimize-malware-spread', '4185/'], ['long-pressed-name', '4186/'], ['flip-string-to-monotone-increasing', '4187/'], ['three-equal-parts', '4188/'], ['minimize-malware-spread-ii', '4189/'], ['unique-email-addresses', '4190/'], ['binary-subarrays-with-sum', '4191/'], ['minimum-falling-path-sum', '4208/'], ['beautiful-array', '4209/'], ['number-of-recent-calls', '4210/'], ['shortest-bridge', '4211/'], ['knight-dialer', '4212/'], ['stamping-the-sequence', '4213/'], ['reorder-data-in-log-files', '4214/'], ['range-sum-of-bst', '4215/'], ['minimum-area-rectangle', '4216/'], ['distinct-subsequences-ii', '4217/'], ['valid-mountain-array', '4218/'], ['di-string-match', '4219/'], ['find-the-shortest-superstring', '4220/'], ['delete-columns-to-make-sorted', '4221/'], ['minimum-increment-to-make-array-unique', '4222/'], ['validate-stack-sequences', '4223/'], ['most-stones-removed-with-same-row-or-column', '4224/'], ['bag-of-tokens', '4225/'], ['largest-time-for-given-digits', '4226/'], ['reveal-cards-in-increasing-order', '4227/'], ['flip-equivalent-binary-trees', '4239/'], ['largest-component-size-by-common-factor', '4240/'], ['verifying-an-alien-dictionary', '4241/'], ['array-of-doubled-pairs', '4242/'], ['delete-columns-to-make-sorted-ii', '4243/'], ['tallest-billboard', '4244/'], ['prison-cells-after-n-days', '4245/'], ['check-completeness-of-a-binary-tree', '4246/'], ['regions-cut-by-slashes', '4247/'], ['delete-columns-to-make-sorted-iii', '4248/'], ['n-repeated-element-in-size-2n-array', '4265/'], ['maximum-width-ramp', '4266/'], ['minimum-area-rectangle-ii', '4267/'], ['least-operators-to-express-number', '4268/'], ['univalued-binary-tree', '4269/'], ['vowel-spellchecker', '4270/'], ['numbers-with-same-consecutive-differences', '4271/'], ['binary-tree-cameras', '4272/'], ['pancake-sorting', '4273/'], ['powerful-integers', '4274/'], ['flip-binary-tree-to-match-preorder-traversal', '4275/'], ['equal-rational-numbers', '4276/'], ['k-closest-points-to-origin', '4277/'], ['subarray-sums-divisible-by-k', '4278/'], ['odd-even-jump', '4279/'], ['largest-perimeter-triangle', '4280/'], ['squares-of-a-sorted-array', '4281/'], ['longest-turbulent-subarray', '4282/'], ['distribute-coins-in-binary-tree', '4283/'], ['unique-paths-iii', '4284/'], ['time-based-key-value-store', '4306/'], ['triples-with-bitwise-and-equal-to-zero', '4307/'], ['minimum-cost-for-tickets', '4308/'], ['string-without-aaa-or-bbb', '4309/'], ['sum-of-even-numbers-after-queries', '4310/'], ['interval-list-intersections', '4311/'], ['vertical-order-traversal-of-a-binary-tree', '4312/'], ['smallest-string-starting-from-leaf', '4313/'], ['add-to-array-form-of-integer', '4314/'], ['satisfiability-of-equality-equations', '4315/'], ['broken-calculator', '5730/'], ['subarrays-with-k-different-integers', '5731/'], ['cousins-in-binary-tree', '5732/'], ['rotting-oranges', '5733/'], ['minimum-number-of-k-consecutive-bit-flips', '5734/'], ['number-of-squareful-arrays', '5735/'], ['find-the-town-judge', '5736/'], ['maximum-binary-tree-ii', '5737/'], ['available-captures-for-rook', '5738/'], ['minimum-cost-to-merge-stones', '5739/'], ['grid-illumination', '5748/'], ['find-common-characters', '5749/'], ['check-if-word-is-valid-after-substitutions', '5750/'], ['max-consecutive-ones-iii', '5751/'], ['maximize-sum-of-array-after-k-negations', '5752/'], ['clumsy-factorial', '5753/'], ['minimum-domino-rotations-for-equal-row', '5754/'], ['construct-binary-search-tree-from-preorder-traversal', '5755/'], ['complement-of-base-10-integer', '5756/'], ['pairs-of-songs-with-total-durations-divisible-by-60', '5757/'], ['capacity-to-ship-packages-within-d-days', '5778/'], ['numbers-with-repeated-digits', '5779/'], ['partition-array-into-three-parts-with-equal-sum', '5788/'], ['best-sightseeing-pair', '5789/'], ['smallest-integer-divisible-by-k', '5790/'], ['binary-string-with-substrings-representing-1-to-n', '5791/'], ['convert-to-base-2', '5792/'], ['binary-prefix-divisible-by-5', '5793/'], ['next-greater-node-in-linked-list', '5794/'], ['number-of-enclaves', '5795/'], ['remove-outermost-parentheses', '5796/'], ['sum-of-root-to-leaf-binary-numbers', '5797/'], ['camelcase-matching', '5807/'], ['video-stitching', '5808/'], ['divisor-game', '5809/'], ['maximum-difference-between-node-and-ancestor', '5810/'], ['longest-arithmetic-subsequence', '5811/'], ['recover-a-tree-from-preorder-traversal', '5812/'], ['two-city-scheduling', '5813/'], ['matrix-cells-in-distance-order', '5814/'], ['maximum-sum-of-two-non-overlapping-subarrays', '5815/'], ['stream-of-characters', '5816/'], ['moving-stones-until-consecutive', '5834/'], ['coloring-a-border', '5835/'], ['uncrossed-lines', '5836/'], ['escape-a-large-maze', '5837/'], ['valid-boomerang', '5838/'], ['binary-search-tree-to-greater-sum-tree', '5839/'], ['minimum-score-triangulation-of-polygon', '5840/'], ['moving-stones-until-consecutive-ii', '5841/'], ['robot-bounded-in-circle', '5842/'], ['flower-planting-with-no-adjacent', '5843/'], ['partition-array-for-maximum-sum', '5865/'], ['longest-duplicate-substring', '5866/'], ['last-stone-weight', '5867/'], ['remove-all-adjacent-duplicates-in-string', '5868/'], ['longest-string-chain', '5869/'], ['last-stone-weight-ii', '5870/'], ['height-checker', '5871/'], ['grumpy-bookstore-owner', '5872/'], ['previous-permutation-with-one-swap', '5873/'], ['distant-barcodes', '5874/'], ['greatest-common-divisor-of-strings', '5883/'], ['flip-columns-for-maximum-number-of-equal-rows', '5884/'], ['adding-two-negabinary-numbers', '5885/'], ['number-of-submatrices-that-sum-to-target', '5886/'], ['occurrences-after-bigram', '5887/'], ['letter-tile-possibilities', '5888/'], ['insufficient-nodes-in-root-to-leaf-paths', '5889/'], ['smallest-subsequence-of-distinct-characters', '5890/'], ['duplicate-zeros', '5891/'], ['largest-values-from-labels', '5892/'], ['shortest-path-in-binary-matrix', '5906/'], ['shortest-common-supersequence', '5907/'], ['statistics-from-a-large-sample', '5908/'], ['car-pooling', '5909/'], ['find-in-mountain-array', '5910/'], ['brace-expansion-ii', '5911/'], ['distribute-candies-to-people', '5912/'], ['path-in-zigzag-labelled-binary-tree', '5913/'], ['filling-bookcase-shelves', '5914/'], ['parsing-a-boolean-expression', '5915/'], ['defanging-an-ip-address', '5928/'], ['corporate-flight-bookings', '5929/'], ['delete-nodes-and-return-forest', '5930/'], ['maximum-nesting-depth-of-two-valid-parentheses-strings', '5931/'], ['relative-sort-array', '5932/'], ['lowest-common-ancestor-of-deepest-leaves', '5933/'], ['longest-well-performing-interval', '5934/'], ['smallest-sufficient-team', '5935/'], ['number-of-equivalent-domino-pairs', '5936/'], ['shortest-path-with-alternating-colors', '5937/'], ['minimum-cost-tree-from-leaf-values', '6960/'], ['maximum-of-absolute-value-expression', '6961/'], ['n-th-tribonacci-number', '6962/'], ['alphabet-board-path', '6963/'], ['largest-1-bordered-square', '6964/'], ['stone-game-ii', '6965/'], ['longest-common-subsequence', '6966/'], ['decrease-elements-to-make-array-zigzag', '6967/'], ['binary-tree-coloring-game', '6968/'], ['snapshot-array', '6969/'], ['longest-chunked-palindrome-decomposition', '6970/'], ['day-of-the-year', '6984/'], ['number-of-dice-rolls-with-target-sum', '6985/'], ['swap-for-longest-repeated-character-substring', '6986/'], ['online-majority-element-in-subarray', '6987/'], ['find-words-that-can-be-formed-by-characters', '6988/'], ['maximum-level-sum-of-a-binary-tree', '6989/'], ['as-far-from-land-as-possible', '6990/'], ['last-substring-in-lexicographical-order', '6991/'], ['invalid-transactions', '6992/'], ['compare-strings-by-frequency-of-the-smallest-character', '6993/'], ['remove-zero-sum-consecutive-nodes-from-linked-list', '6994/'], ['dinner-plate-stacks', '6995/'], ['prime-arrangements', '6996/'], ['can-make-palindrome-from-substring', '6997/'], ['number-of-valid-words-for-each-puzzle', '6998/'], ['distance-between-bus-stops', '6999/'], ['day-of-the-week', '7000/'], ['maximum-subarray-sum-with-one-deletion', '7001/'], ['make-array-strictly-increasing', '7002/'], ['maximum-number-of-balloons', '7003/'], ['reverse-substrings-between-each-pair-of-parentheses', '7019/'], ['k-concatenation-maximum-sum', '7020/'], ['critical-connections-in-a-network', '7021/'], ['minimum-absolute-difference', '7022/'], ['ugly-number-iii', '7023/'], ['smallest-string-with-swaps', '7024/'], ['sort-items-by-groups-respecting-dependencies', '7025/'], ['design-skiplist', '7026/'], ['unique-number-of-occurrences', '7027/'], ['get-equal-substrings-within-budget', '7028/'], ['remove-all-adjacent-duplicates-in-string-ii', '7053/'], ['minimum-moves-to-reach-target-with-rotations', '7054/'], ['minimum-cost-to-move-chips-to-the-same-position', '7055/'], ['longest-arithmetic-subsequence-of-given-difference', '7056/'], ['path-with-maximum-gold', '7057/'], ['count-vowels-permutation', '7058/'], ['split-a-string-in-balanced-strings', '7059/'], ['queens-that-can-attack-the-king', '7060/'], ['dice-roll-simulation', '7061/'], ['maximum-equal-frequency', '7062/'], ['airplane-seat-assignment-probability', '7074/'], ['check-if-it-is-a-straight-line', '7075/'], ['remove-sub-folders-from-the-filesystem', '7076/'], ['replace-the-substring-for-balanced-string', '7077/'], ['maximum-profit-in-job-scheduling', '7078/'], ['find-positive-integer-solution-for-a-given-equation', '7079/'], ['circular-permutation-in-binary-representation', '7080/'], ['maximum-length-of-a-concatenated-string-with-unique-characters', '7081/'], ['tiling-a-rectangle-with-the-fewest-squares', '7082/'], ['minimum-swaps-to-make-strings-equal', '7083/'], ['count-number-of-nice-subarrays', '7100/'], ['minimum-remove-to-make-valid-parentheses', '7101/'], ['check-if-it-is-a-good-array', '7102/'], ['cells-with-odd-values-in-a-matrix', '7103/'], ['reconstruct-a-2-row-binary-matrix', '7104/'], ['number-of-closed-islands', '7105/'], ['maximum-score-words-formed-by-letters', '7106/'], ['shift-2d-grid', '7107/'], ['find-elements-in-a-contaminated-binary-tree', '7108/'], ['greatest-sum-divisible-by-three', '7109/'], ['minimum-moves-to-move-a-box-to-their-target-location', '7163/'], ['minimum-time-visiting-all-points', '7164/'], ['count-servers-that-communicate', '7165/'], ['search-suggestions-system', '7166/'], ['number-of-ways-to-stay-in-the-same-place-after-some-steps', '7167/'], ['find-winner-on-a-tic-tac-toe-game', '7168/'], ['number-of-burgers-with-no-waste-of-ingredients', '7169/'], ['count-square-submatrices-with-all-ones', '7170/'], ['palindrome-partitioning-iii', '7171/'], ['subtract-the-product-and-sum-of-digits-of-an-integer', '7172/'], ['group-the-people-given-the-group-size-they-belong-to', '7191/'], ['find-the-smallest-divisor-given-a-threshold', '7192/'], ['minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix', '7193/'], ['iterator-for-combination', '7194/'], ['element-appearing-more-than-25-in-sorted-array', '7195/'], ['remove-covered-intervals', '7196/'], ['minimum-falling-path-sum-ii', '7197/'], ['convert-binary-number-in-a-linked-list-to-integer', '7198/'], ['sequential-digits', '7199/'], ['maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold', '7200/'], ['shortest-path-in-a-grid-with-obstacles-elimination','7268/'],['find-numbers-with-even-number-of-digits','7269/'],['divide-array-in-sets-of-k-consecutive-numbers','7270/'],['maximum-number-of-occurrences-of-a-substring','7271/'],['maximum-candies-you-can-get-from-boxes','7272/'],['replace-elements-with-greatest-element-on-right-side','7273/'],['sum-of-mutated-array-closest-to-target','7274/'],['number-of-paths-with-max-score','7275/'],['deepest-leaves-sum','7276/'],['find-n-unique-integers-sum-up-to-zero','7277/'],['all-elements-in-two-binary-search-trees','7314/'],['jump-game-iii','7315/'],['verbal-arithmetic-puzzle','7316/'],['decrypt-string-from-alphabet-to-integer-mapping','7317/'],['xor-queries-of-a-subarray','7318/'],['get-watched-videos-by-your-friends','7319/'],['minimum-insertion-steps-to-make-a-string-palindrome','7320/'],['decompress-run-length-encoded-list','7321/'],['matrix-block-sum','7322/'],['sum-of-nodes-with-even-valued-grandparent','7323/'],['distinct-echo-substrings','7377/'],['convert-integer-to-the-sum-of-two-no-zero-integers','7378/'],['minimum-flips-to-make-a-or-b-equal-to-c','7379/'],['number-of-operations-to-make-network-connected','7380/'],['minimum-distance-to-type-a-word-using-two-fingers','7381/'],['maximum-69-number','7382/'],['print-words-vertically','7383/'],['delete-leaves-with-a-given-value','7384/'],['minimum-number-of-taps-to-open-to-water-a-garden','7385/'],['break-a-palindrome','7386/'],['sort-the-matrix-diagonally','7432/'],['reverse-subarray-to-maximize-array-value','7433/'],['rank-transform-of-an-array','7434/'],['remove-palindromic-subsequences','7435/'],['filter-restaurants-by-vegan-friendly-price-and-distance','7436/'],['find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance','7437/'],['minimum-difficulty-of-a-job-schedule','7438/'],['the-k-weakest-rows-in-a-matrix','7439/'],['reduce-array-size-to-the-half','7440/'],['maximum-product-of-splitted-binary-tree','7441/'],['jump-game-v','7442/'],['number-of-steps-to-reduce-a-number-to-zero','7458/'],['number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold','7459/'],['angle-between-hands-of-a-clock','7460/'],['jump-game-iv','7461/'],['check-if-n-and-its-double-exist','7462/'],['minimum-number-of-steps-to-make-two-strings-anagram','7463/'],['tweet-counts-per-frequency','7464/'],['maximum-students-taking-exam','7465/'],['count-negative-numbers-in-a-sorted-matrix','7466/'],['product-of-the-last-k-numbers','7467/'],['maximum-number-of-events-that-can-be-attended','7468/'],['construct-target-array-with-multiple-sums','7469/'],['sort-integers-by-the-number-of-1-bits','7470/'],['apply-discount-every-n-orders','7471/'],['number-of-substrings-containing-all-three-characters','7472/']]);		
		let title = "";
		let parts = url.split('/');
		let problemsIndex = parts.indexOf('problems');
		if (problemsIndex !== -1 && problemsIndex + 1 < parts.length) { // get title from url
			title = parts[problemsIndex + 1];
		}
		
		let newHref = title2URL.get(title);
		if (newHref == null || newHref == "undefined") newHref = "#";
		else newHref = urlPrefix + newHref;
		console.log(newHref);
		var newLink = $('<a>', {
			href: newHref,
			target: 'blank',
			'one-link-mark': 'yes',
			html: '<div class="flex flex-1 select-none justify-center whitespace-nowrap rounded-t-[5px] py-[10px] text-xs cursor-pointer text-label-2 dark:text-dark-label-2 px-5 AcWing">AcWing</div>'
		  });
		  
		function addLink() {
			var parentContainer = $('a[href*="submissions"]');
			if (parentContainer.length) {
				if (newHref != "#") // if the problem exists in acwing, it will show AcWing a tag.
					parentContainer.after(newLink);
			} else {
				console.error("Parent container not found");
			}
		}

		$(document).ready(function() {
			setTimeout(addLink, 1500); // add acwing link after wait page load completely
		});
		return;
	}

	if (url.includes("code") || url.includes("solution/content") || url.includes("blog/content") || url.includes("community/content") || url.includes("file_system/file")) {
		if (url.includes("file_system/file") && url.includes("application")) return; // 应用页面不展示 TOC
		// 插入复制代码按钮，并设置位置
        $(".hljs").each(function() {
			$(this).before(
			  "<button class='copyCodeBtn' class='btn default'><span class='glyphicon glyphicon-file'></span></button>"
			);
		});

		// $(".copyCodeBtn").css("position", "absolute");
		// $(".copyCodeBtn").css("top", "10px");
		// $(".copyCodeBtn").css("right", "10px");
		// 去除按钮默认样式
		$(".copyCodeBtn").css("border", "none");
		$(".copyCodeBtn").css("background-color", "transparent");
		$(".copyCodeBtn").css("outline", "none");

        turndownService.addRule('strikethrough', {
                filter: ['pre'],
                replacement: function (content) {
                    return '' + content.trim() + ""
                }
            });
		// 为按钮绑定点击事件
		$(".copyCodeBtn").click(function() {
            let target = $(this).next();
            // console.log($(target).html());
            target.markdown = turndownService.turndown($(target)[0].outerHTML);
            GM_setClipboard(target.markdown);
            $(this).text("已复制到剪贴板");
          });
		
		  const containerStyle = 'position: fixed;width: 260px;max-height:calc(100vh - 100px);top: 80px;right: 15px;font-size: 14px;border-radius: 5px;background: #fff;overflow-y:auto;padding-left:10px;';
		  const containerSwitchStyle = 'position: fixed;width: 260px;max-height:calc(100vh - 100px);top: 60px;right: 15px;font-size: 14px;border-radius: 5px;overflow-y:auto;padding-left:10px;';
		  document.body.insertAdjacentHTML('beforeend', `<span style="${containerSwitchStyle}" id="switch-toc-span" data-value="on"><span class="glyphicon glyphicon-eject"></span>&nbsp;&nbsp;<b>TOC</b></span><div style="${containerStyle}" id="toc"></div>`);
		  const tocContainer = document.getElementById('toc');

		  // Retrieve all heading elements from the HTML page
		  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
		  
		  // Create a tree-like structure with each heading as a node
		  // let toc = '<ul>';
		  let toc = '';
		  let currentLevel = 1;
		  
		  let last_id = 0;
		  headings.forEach((heading, index) => {
			if (index === 0) return false; // 跳过页面的第一个二级大标题（题解名称）
			const title = heading.textContent;
			const id = `heading_${index}`;

			// 遍历到「评论」二级标题，后面的跳过遍历
			if (title.includes("评论")) {
				last_id = id;
				return false;
			}
			if (id > last_id) return false;

			// Ensure all headings have an ID
			if (!heading.id) {
			  heading.id = id;
			}
		  
			const level = parseInt(heading.tagName[1]);
		  
			if (level === currentLevel) {
			  toc += `</li><li data-id="${id}"><a href="#${id}">${title}</a>`;
			} else if (level > currentLevel) {
			  toc += `<ul><li data-id="${id}"><a href="#${id}">${title}</a>`;
			} else {
			  toc += '</li>'.repeat(currentLevel - level) + `</ul></li><li data-id="${id}"><a href="#${id}">${title}</a>`;
			}
		  
			currentLevel = level;
		  });
		  
		  // Close any open tags
		  if (currentLevel > 1) {
			toc += '</li>'.repeat(currentLevel - 1) + '</ul>';
		  } else {
			// toc += '</li></ul>';
			toc += '</li>';
		  }
		  
		  // Attach the generated TOC to the HTML page
		  tocContainer.innerHTML = toc;
		  
		  // Add click event listener to each TOC node
		  const tocNodes = tocContainer.querySelectorAll('li[data-id]');
		  // prevent the behavior for recusive scrolling until first tilte
		  var isAnimating = false;
		  tocNodes.forEach((node) => {
			node.addEventListener('click', (event) => {
			  if (isAnimating) {
				return;
			  }
			  event.preventDefault();
			  const id = event.currentTarget.dataset.id;
			  console.log(id);
			  const targetHeading = document.getElementById(id);
			  isAnimating = true;
			  		
			  if (targetHeading) {
				$('html, body').animate({
					scrollTop: $(targetHeading).offset().top - 75
				}, 500, function() {
					isAnimating = false;
				});
			  }
			});
		  });

		  // 点击 TOC 按钮显示和隐藏导航
		  $("#switch-toc-span").click(function() {
			// 获取 TOC 的状态
			var toc_status = $("#switch-toc-span").data("value");
			if (toc_status === "on") { // 隐藏 TOC
				$("#toc").hide();
				$("#switch-toc-span").data('value', 'off');
				$("#switch-toc-span").html('<span class="glyphicon glyphicon-chevron-right"></span>&nbsp;&nbsp;<b>TOC</b></span>');
			} else { // 显示 TOC
				$("#toc").show();
				$("#switch-toc-span").data('value', 'on');
				$("#switch-toc-span").html('<span class="glyphicon glyphicon-eject"></span>&nbsp;&nbsp;<b>TOC</b></span>');
			}
		  })

		return;
	}

	// 拦截带有 ? 的路径直接打开题目
	if (url.includes("?")) {
		// alert(url);
		// alert($(".label-info").get(0).href);
		location.href = $(".label-info").get(0).href;
		return;
	}

	// 在题目内容页面添加在当前页面打开题目按钮
	if (url.includes("activity/content/problem/content")) {
		var gotoHref = $(".label-info").get(0).href;
		// console.log(gotoHref);
		var gotoA = '&nbsp;&nbsp;&nbsp;&nbsp;<a href=' + gotoHref + ' title="跳转" one-link-mark="yes"><span class="glyphicon glyphicon-share-alt"></span></a></a>';
		$(".label-info").after(gotoA);
		return;
	}

	// 获取所有的打卡题目，并添加直达题目按钮
	if (url.includes("punch_the_clock") || url.includes("activity")) {
		$(".punch-line").each(function () {
			var gotoHref = $(this).children("a").get(0).href + '?';
			// console.log(gotoHref);
			var gotoA = '<a href=' + gotoHref + ' title="跳转" target="_blank" one-link-mark="yes"><span class="glyphicon glyphicon-share-alt"></span></a></a>';
			$(this).append(gotoA);
		});
		return;
	}

	// 题目页面的相关功能
	if (url.includes("problem/content")) {
		/* 隐藏桌面文件夹 */
		if (isShowFolder) {
			$("div.file-explorer-main-field-item-desktop").hide();
		} else {
			$("div.file-explorer-main-field-item-desktop").show();
		}

		/* 一键填写样例功能 start */
		GM_addStyle(`
			.fillSmapleBtn {
				background-color: #5cb85c; /* 设置按钮背景颜色 */
				border: none; /* 去除边框 */
				color: white; /* 设置文字颜色 */
				text-align: center; /* 文字居中 */
				text-decoration: none; /* 去除下划线 */
				display: inline-block; /* 将按钮显示为行内元素 */
				font-size: 13px; /* 设置字体大小 */
				cursor: pointer; /* 鼠标悬停样式 */
				border-radius: 4px; /* 圆角设置 */
				transition-duration: 0.4s; /* 过渡动画时间 */
			}
			.fillSmapleBtn:hover {
				background-color: #3e8e41; /* 设置鼠标悬停时的背景颜色 */
				text: 填入样例;
			}
			.fillSmapleBtn:hover::after {
				content: " 填入样例"; /* 悬停时显示的文本 */
			}
		`)

		// 获取包含样例两个字的 <h4>
		var sz = $(".hljs").length;
		// 插入填入样例按钮，并设置位置
		$('h4:contains("输入样例")').filter(function() {
			return $(this).text().includes("输入样例");
		}).each(function() {
			$(this).after(
				"<button class='fillSmapleBtn'><span class='glyphicon glyphicon-arrow-down'></span></button>"
			);
		});
		$('h4:contains("样例输入")').filter(function() {
			return $(this).text().includes("样例输入");
		}).each(function() {
			$(this).after(
				"<button class='fillSmapleBtn'><span class='glyphicon glyphicon-arrow-down'></span></button>"
			);
		});

		turndownService.addRule('strikethrough', {
				filter: ['pre'],
				replacement: function (content) {
					return '' + content.trim() + ""
				}
			});

		// Auto resize input textarea height when user clicks fill smaple button.
		function autoResizeTextarea(textarea) {
			$(textarea).css('height', 'auto'); // Reset the height
			$(textarea).css('height', textarea.scrollHeight + 'px'); // Set the new height based on the content
		}

		// 为填入样例按钮绑定点击事件
		$(".fillSmapleBtn").click(function() {
			let target = $(this).next();
			target.markdown = turndownService.turndown($(target)[0].outerHTML);
			GM_setClipboard(target.markdown);
			// $(this).text("已复制到剪贴板");
			$("#run-code-stdin").val(target.markdown);
			autoResizeTextarea($('#run-code-stdin')[0]); // Call the autoResizeTextarea function with the DOM element
			// 当页面风格为 vertical 时才生效
			if (page_style == "vertical") {
				// 页面滑动到调试按钮位置
				$('html, body').animate({
					scrollTop: $("#submit_code_btn").offset().top
				}, 500);
			}
		});
		/* 一键填写样例功能 end */

		// 添加复制按钮
		console.log("acwing helper...");
		var copyBtn = document.createElement("button"); //创建一个 input 对象（提示框按钮）
		copyBtn.id = "copyBtn";
		copyBtn.textContent = "复制";
		copyBtn.style.width = "50px";
		copyBtn.style.height = "30px";
		copyBtn.style.align = "center";

		var x = document.getElementsByClassName("problem-content-sub-btn")[0];
		// 在浏览器控制台可以查看所有函数，ctrl+shift+I 调出控制台，在 Console 窗口进行实验测试
		x.appendChild(copyBtn);

		var page_style = "vertical";
		// 添加切换按钮
		$("#open_ac_saber_btn").after('<input name="switchBtn" type="checkbox" checked>');
		// name 值和 input 标签的 name 值一样
		$("[name='switchBtn']").bootstrapSwitch({
			onText : "Right",      // 设置ON文本
			offText : "Bottom&nbsp;&nbsp;",    // 设置OFF文本
			onColor : "success",// 设置ON文本颜色(info/success/warning/danger/primary)
			offColor : "info",  // 设置OFF文本颜色 (info/success/warning/danger/primary)
			size : "normal",    // 设置控件大小,从小到大  (mini/small/normal/large)
			// 当开关状态改变时触发
			onSwitchChange : function(event, state) {
				if (state == true){
					page_style = "vertical";
					if (isPageStyle) localStorage.setItem("page_style", page_style);
					setTimeout(() => window.location.reload(), 100);
				} else {
					page_style = "horizontal";
					switchPageStyle();
					if (isPageStyle) localStorage.setItem("page_style", page_style);
				}
			}
		});
		$(".bootstrap-switch-on").css("top", "10px");
		$(".bootstrap-switch-on").css("left", "10px");

		// 如果开启了记住页面风格功能，每次先从 localStorage 中读取 page_style
		if (isPageStyle) {
			if (localStorage.getItem("page_style") != null) {
				page_style = localStorage.getItem("page_style");
				if (page_style == "horizontal") {
					$("[name='switchBtn']").click();
				}
			} else {
				localStorage.setItem("page_style", page_style);
			}
		} else {
			page_style = localStorage.getItem("page_style");
			if (page_style == null) page_style = "vertical";
			localStorage.removeItem("page_style"); // 拿到当前的页面风格值后先删除再判断
			if (page_style == "horizontal") {
				$("[name='switchBtn']").click();
			}
		}
		// console.log(page_style);

		// 添加生成题解按钮
		var generateSolutionBtn = document.createElement("button"); // 创建一个input对象（提示框按钮）
		generateSolutionBtn.id = "generateSolutionBtn";
		generateSolutionBtn.textContent = "生成";
		generateSolutionBtn.style.width = "50px";
		generateSolutionBtn.style.height = "30px";
		generateSolutionBtn.style.align = "center";

		var y = document.getElementsByClassName("problem-content-sub-btn")[3];
		y.appendChild(generateSolutionBtn);

		// 监听键盘按键，为功能绑定快捷键
		unsafeWindow.addEventListener("keydown", (evt) => {
			// console.log('evt', evt);
			if (evt.altKey) {
				// Alt + T 复制题目
				if (evt.keyCode == 84) {
					copy();
				}
				// Alt + S 切换页面风格
				if (evt.keyCode == 83) {
					$("[name='switchBtn']").click();
				}
				// Alt + C 生成当前题目题解模板
				if (evt.keyCode == 67) {
					generateSolution();
				}
			}
			// F9 调试代码
			if (evt.keyCode == 120) {
				debugCode();
			}
			// F10 提交代码
			if (evt.keyCode == 121) {
				submitCode();
			}

			if (evt.keyCode == 119) {
				win = window.open();  //打开新的空白窗口
	win.document.write ("<h1>这是新打开的窗口</h1>");  //在新窗口中输出提示信息
	win.focus ();  //让原窗口获取焦点
	win.opener.document.write ("<h1>这是原来窗口</h1>");  //在原窗口中输出提示信息
	console.log(win.opener == window);  //检测window.opener属性值
			}
		});

		// 注入右键菜单
		// GM_registerMenuCommand("复制 AcWing 题目为 Markdown，并存入剪切板", copy);
		// GM_registerMenuCommand("切换页面风格", function(){$("[name='switchBtn']").click()});
		// GM_registerMenuCommand("生成当前题目的题解模板，并存入剪切板", generateSolution);

		// 为复制按钮绑定点击功能
		copyBtn.onclick = function (e) {
			e.preventDefault();
			copy();
		};

		// 为复制题解按钮绑定按键点击功能
		generateSolutionBtn.onclick = function (e) {
			e.preventDefault();
			generateSolution();
		};
	}

	// 题目复制功能实现
	function copy() {
		copyImpl();
		swal({
			icon: "success",
			title: "复制成功",
		});
	}

	function copyImpl() {
		// 内容 Dom
		var contentDom = $(".section-martor")[0].outerHTML;
		// 将题目描述 html 转换为 markdown
		content = handleHtml(contentDom);
		var str =
			content/* +
			"\n" +
			"来源：AcWing\n" +
			"链接：" +
			window.location.href +
			"\n" +
			"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"*/;
		GM_setClipboard(str);
	}

	// 切换页面风格功能实现
	function switchPageStyle() {
		$(".col-sm-3").attr("id", "right");
		$(".col-sm-9").append($(".table-responsive"));
		$(".col-sm-9").attr("class", "col-sm-5 col-xs-12");
		$(".col-sm-3").attr("class", "col-sm-7");
		// $(".container").css("width", "1430px");
		$(".container").css("width", "100%");
		$("#right").html("");
		$("#right").append($("#code_tool_bar"));
		$("#right").append($("#code_editor"));
		$("#right").append($("#data-augmentation-div"));
		$("#right").append($("#submit_code_btn"));
		$("#right").append($("#run_code_btn"));
		$("#right").append($("#submit-code-status-block"));
		$("#right").append($("#run-code-status-block"));

		// 在 LeetCode 页面风格下不显示桌面文件夹
		$("div.file-explorer-main-field-item-desktop").hide();
	}

	// @Deprecated 复制代码功能实现
	function copyCode() {
		turndownService.addRule('pre', {
			filter: 'pre',
			replacement: function (content) {
			  return "\n" + content.trim() + "\n";
			}
		  });

		let target = $("div[data-tab='preview-tab-content']");
		console.log(target.html());
		target.markdown = turndownService.turndown($(target).html());
		GM_setClipboard(target.markdown);
		swal({
			icon: "success",
			title: "复制成功",
		});
	}

	// 生成题解功能实现
	function generateSolution() {
		generateSolutionImpl();
		swal({
			icon: "success",
			title: "生成成功",
		});
	}

	function generateSolutionImpl() {
		var solutionTemplate = "";
		var problemDescConst = "### 题目描述\n";
		copyImpl();
		var problemDesc = content;
		var splitLine = "\n\n---\n";
		var algorithmConst = "### 算法\n"
		var specificAlgorithmConst = "#### (暴力枚举)  $O(n^2)$";
		var solution = "\n\nwrite here...\n\n"
		var timeComplexityConst = "#### 时间复杂度";
		var timeComplexity = "\n\nwrite here...\n\n"
		var spaceComplexityConst = "#### 空间复杂度";
		var spaceComplexity = "\n\nwrite here...\n\n";
		var codeConst = "#### C++ 代码\n";
		var code = "```\n" + "my code...\n" + "```";
		solutionTemplate = problemDescConst + problemDesc + splitLine + algorithmConst + specificAlgorithmConst +
			solution + timeComplexityConst + timeComplexity + spaceComplexityConst + spaceComplexity + codeConst + code;
		GM_setClipboard(solutionTemplate);
	}

	// 调试代码
	function debugCode() {
		$("#run_code_btn").click();
	}

	// 提交代码
	function submitCode() {
		$("#submit_code_btn").click();
	}

	/**
	 * html 转 markdown
	 * @param html
	 * @returns {void|*}
	 */
	function handleHtml(html) {
		// 处理数学公式
		turndownService.addRule("strikethrough", {
			filter: ["script"],
			replacement: function (content) {
				return "$" + content + "$";
			},
		});
		// 跳过 span 标签，不进行处理
		turndownService.remove("span");
		var markdown = turndownService.turndown(html);
		return markdown;
	}
})();