// ==UserScript==
// @name         acwing-helper
// @namespace    https://github.com/tonngw
// @version      1.0.0
// @description  AcWing 助手，学算法就上 AcWing！| 题目复制 | 生成题解模板 | 切换页面风格 (AcWing <-> LeetCode) | 复制代码 
// @author       tonngw
// @match        https://www.acwing.com/problem/content/*/
// @match        https://www.acwing.com/activity/content/code/content/*/
// @exclude		   https://www.acwing.com/problem/content/submission/*/
// @exclude		   https://www.acwing.com/problem/content/discussion/*/
// @exclude		   https://www.acwing.com/problem/content/solution/*/
// @exclude		   https://www.acwing.com/problem/content/video/*/
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb79jDHO9Ykh3vGF+fLpgpIC4X76Ftl7MibRdzI6yXL6SsFuml65afputWUqfq1gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZsNlHmrBZIBuv2PGc75izne8Yc58umDOgLhfzoW2Xs6JtF3OjrJczpKwW86XrlrOm6xZzqCrWMikqVeAqKdWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXsdoCGHFZ3Jlw2XKasFkzm7AY85zvmLOfr9p0KDNjNq21qTgwtqu5MPZreS90p/grcSD2JqxX9CbrFnOoKtYzqSpV86pp1bKraVVcrCkUwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFnJaR5cx2iqYMVnzmXDZc5rwmbOotab3Nvu1/D7/fv8//////39/P/2+vT69/r0+v7+/f//////+/v4/OHmzu68w4napKlXzqmnVs6tpVTOsqNTrLWhUx4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUymooV8lpvlzHaM5gxWfOjdOO2Of15vT+/v7/4fHe8rXaqeKUx37WgrlizoW2Xs6JtF3OkbRh0KrBf9bK1qzk7vHj9P/////r7Nryubd21q2lVM6yo1POtqFSvrqgUigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUMxrHlPLar5XyWnOXMdozrTkt+b9/v3/4fLf8pHPidhzvmLOd7xhzny6YM6AuF/OhbZezom0Xc6OslzOkrBbzpeuWs6brFnOvcWM2vHy5vb8/Pr80Muc4LKjU863oVLOu59Rvr6eUR4AAAAAAAAAAAAAAAAAAAAAAAAAAEzObAhPzWuqU8tqzljJac7D6sfq/f79/7bituRrwmbObsBjznO+Ys53vGHOfLpgzoC4X86Ftl7OibRdzo6yXM6SsFvOl65azpusWc6gq1jOp6tc0N7ev+r+/v7/2dGq5LehUs67n1HOv51QrMKcUAgAAAAAAAAAAAAAAAAAAAAAS85scE7Na85Ty2rOsua65v3+/f+h3KTgZcNlzmrBZM5uwGPOc75izne8Yc58umDOgLhfzoW2Xs6JtF3OjrJczpKwW86XrlrOm6xZzqCrWM6kqVfOqadWztjUruT+/v7/1MeZ4LufUc7AnVDOw5xPcgAAAAAAAAAAAAAAAEfQbB5Kz2zKTs1rzoPalNr9/v3/sOO15GDFZ85lw2XOasFkzm7AY85zvmLOd7xhzny6YM6AuF/OhbZezom0Xc6OslzOkrBbzpeuWs6brFnOoKtYzqSpV86pp1bOraVUzsW6ftjIt3vYu59RzsCdUM7Em0/Kx5pOIAAAAAAAAAAARtBtfkrPbM5Rzm3O5vfq9trz3fJgyWvOZcdr0GfEZ85qwWTObsBjznO+Ys53vGHOfLpgzoC4X86Ftl7OibRdzo6yXM6SsFvOl65azpusWc6gq1jOpKlXzqqoV86wqFrQs6VXzrehUs67n1HOwJ1QzsSbT87Imk6AAAAAAEPSbgxF0W3GSs9szpPhpd7+/v7/e9SI1pTbnNz+/v7/0ezQ7mrBZM5uwGPOc75izne8Yc58umDOgLhfzoW2Xs6JtF3OjrJczpKwW86XrlrOm6xZzqCrWM6kqVfO5OPK7P7+/v/OxJHct6FSzrufUc7AnVDOxJtPzsmZTsjLmE4MQtJtSEXRbc5Kz2zO2PTe8tXy2vBXyWnOXMdoztbw2PD+/v7/k9KP2m7AY85zvmLOd7xhzny6YM6AuF/OhbZezom0Xc6OslzOkrBbzpeuWs6brFnOoKtYzrzAg9j+/v7/6+nV8LKjU863oVLOu59RzsCdUM7Em0/OyZlOzsyYTkpB0m58RdFtzlnTeNL9/v3/muCn4FfJac5cx2jOe8+A1Pv9+/zm9OX0cMBlznO+Ys54vGPOuNmp4srhveifxYDWibRdzo6yXM6SsFvOl65azpusWc6hq1nO7/Di9P39+/y8tXLWsqNTzrehUs67n1HOwJ1QzsSbT87JmU7OzJhNfkHSbqRF0W3OhN+c3P////9q0n3UV8lpzlzHaM5gxWfOvOW95v////+v26ngl8+L2Nvt1vDd7dbwz+TD6ubw3vLo8N/01eLC6r/Rn+CgtWjSm6xZzsnPoOD/////29m36K2lVM6yo1POt6FSzrufUc7AnVDOxJtPzsmZTs7NmE2mQdNuvkXRbc6h5rPi9vz3/FPLas5XyWnOXMdozmDFZ85txm3Q8Pnv+PT69PrP6crs/v7+//X68/ru9en24+7b8uPt2PDt8uX27vPm9ubs2PDL1Kji9/jy+vb27/iurF/QraVUzrKjU863oVLOu59RzsCdUM7Em0/OyZlOzs2XTb5B027KRdFtzq7qvubq+e34U8tqzlfJac5cx2jOYMVnzmXDZc6h2Z7e/////9LqzOzw+O748vjv+Onz5PTl793y4+3Z8N/p0e7V4cDqxtOl4unt2/L/////zc+h4KmnVs6tpVTOsqNTzrehUs67n1HOwJ1QzsSbT87JmU7OzZdNzEHTbspF0W3Oruq+5ur57fhTy2rOV8lpzlzHaM5gxWfOZcNlzmrCZc7d8Nvy/P38/6DQkdrT6Mrs7PTn9uDs1/DL3rfmu9Gd3sLTo+Dl69fw//////X27viytnHUqadWzq2lVM6yo1POt6FSzrufUc7AnVDOxJtPzsmZTs7Nl03MQdNuvEXRbc6h5rPi9vz4/FPLas5XyWnOXMdozmDFZ85lw2XOasFkzonMgdb8/fz83u7Y8Hy6YM6IvGnQstGa3tXkxury9uz49fjw+vL16/j+/v7/0dau5Ofo0/C+vYDYraVUzrKjU863oVLOu59RzsCdUM7Em0/OyZlOzs2XTb5B0m6kRdFtzoTenNz/////atJ91FfJac5cx2jOYMVnzmXDZc5qwWTObsBjzsXkv+j/////qdGX3IC4X86Ftl7OibRdzo6yXM7C1KTi//////j58/r09ez4ycua4M7NnuC9tXTWsqNTzrehUs67n1HOwJ1QzsSbT87JmU7OzZhNpkLSbnxF0W3OWNN40v3+/f+b4KjgV8lpzlzHaM5gxWfOZcNlzmrBZM5uwGPOe8Js0PP58frv9uv4hLpk0IW2Xs6JtF3OkbRg0PD16vb2+PH6orJk0MDHkdzy8+j25uXO7rKqXtCyo1POt6FSzrufUc7AnVDOxJtPzsmZTs7MmE1+QtJuRkXRbc5Kz2zO1/Te8tby2/BXyWnOXMdozmDFZ85lw2XOasFkzm7AY85zvmLOrdeh3v/////B3LHkhbZezom0Xc7G2a3k/////8LP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
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @require      https://unpkg.com/sweetalert/dist/sweetalert.min.js
// @require      https://unpkg.com/turndown/dist/turndown.js
// @require      https://cdn.bootcdn.net/ajax/libs/bootstrap-switch/4.0.0-alpha.1/js/bootstrap-switch.min.js
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @license 	 MIT
// ==/UserScript==

(function () {
	"use strict";

	$("head").append($(`<link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-switch/4.0.0-alpha.1/css/bootstrap-switch.min.css" rel="stylesheet">`));

	// 初始化 html to markdown 转换工具
	var turndownService = new TurndownService();
	const window = unsafeWindow;
	const description = ".row";
	var content = "";

	// 判断路径中是否包含 code，代码复制功能只在 */code/* 下生效
	var url = window.location.href;
	if (url.includes("code")) {
		// 插入复制代码按钮，并设置位置
		$(".hljs").children('code').children(':first-child').before('<button id="copyCodeBtn" class="btn default"><span class="glyphicon glyphicon-file"></span></button>');
		$("#copyCodeBtn").css("position", "absolute");
		$("#copyCodeBtn").css("top", "10px");
		$("#copyCodeBtn").css("right", "10px");
		// 去除按钮默认样式
		$("#copyCodeBtn").css("border", "none");
		$("#copyCodeBtn").css("background-color", "transparent");
		$("#copyCodeBtn").css("outline", "none");
		// 为按钮绑定点击事件
		copyCodeBtn.onclick = function (e) {
			e.preventDefault();
			copyCode();
		};
		return;
	}

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
				setTimeout(() => window.location.reload(), 100);
			} else {
				switchPageStyle();
			}
		}
	});
	$(".bootstrap-switch-on").css("top", "10px");
	$(".bootstrap-switch-on").css("left", "10px");

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
	});

	// 注入右键菜单
	GM_registerMenuCommand("复制 AcWing 题目为 Markdown，并存入剪切板", copy);
	GM_registerMenuCommand("切换页面风格", function(){$("[name='switchBtn']").click()});
	GM_registerMenuCommand("生成当前题目的题解模板，并存入剪切板", generateSolution);

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
		$(".col-sm-9").attr("class", "col-sm-4 col-xs-12");
		$(".col-sm-3").attr("class", "col-sm-8");
		$(".container").css("width", "1430px");
		$("#right").html("");
		$("#right").append($("#code_tool_bar"));
		$("#right").append($("#code_editor"));
		$("#right").append($("#data-augmentation-div"));
		$("#right").append($("#submit_code_btn"));
		$("#right").append($("#run_code_btn"));
		$("#right").append($("#submit-code-status-block"));
		$("#right").append($("#run-code-status-block"));
	}

	// 复制代码功能实现
	function copyCode() {
		turndownService.addRule('pre', {
			filter: 'pre',
			replacement: function (content) {
			  return "\n" + content.trim() + "\n";
			}
		  });
		
		let target = $("div[data-tab='preview-tab-content']");
		// console.log(target);
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
		var splitLine = "\n---\n";
		var algorithmConst = "### 算法\n"
		var specificAlgorithmConst = "#### (暴力枚举)  $O(n^2)$\n";
		var solution = "\nwrite here...\n"
		var timeComplexityConst = "#### 时间复杂度";
		var timeComplexity = "\nwrite here...\n"
		var spaceComplexityConst = "#### 空间复杂度";
		var spaceComplexity = "\nwrite here...\n";
		var codeConst = "#### C++ 代码\n";
		var code = "```\n" + "my code...\n" + "```\n";
		solutionTemplate = problemDescConst + problemDesc + splitLine + algorithmConst + specificAlgorithmConst + 
			solution + timeComplexityConst + timeComplexity + spaceComplexityConst + spaceComplexity + codeConst + code;
		GM_setClipboard(solutionTemplate);
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