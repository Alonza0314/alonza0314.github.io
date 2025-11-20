# 個人網頁部署設計書

## 架構 & 程式語言設定

1. 使用 `alonza0314.github.io` 為名的 github repo 部署 `https://alonza0314.github.io/` 的靜態頁面
2. 使用 React 框架
3. 全程使用 Typescript，除非特定需求使用 Javascript
4. 全程使用 `yarn` 下命令，禁止使用 `npm`，這台電腦目前已經有完整的 `yarn` 環境，因此可以跳過安裝直接開始使用
5. 完成後需要生成一份 MD 檔案描述如何在本地瀏覽器查看頁面
6. 同時完成 `.github/workflow/gh-deploy.yaml` 的部署腳本

## 設計主視覺與基本原則

1. 頁面是要作為我的個人頁面，我是一名 5G 網路工程師，因此畫面看起來要簡潔帶有科技感，以及現代感
2. 顏色主要以白色（非純白色）、淡藍色、淡紫色等現代輕快風顏色為主
3. 如果有用到類似卡片的元素或是組件，請務必加入一些互動的動畫，使頁面看起來生動活潑
4. 以中文呈現為主
5. 文字部分不可以自己發揮，但需要用註解的方式告訴我那些地方需要我填入，並在最後生成一個 MD 檔案，內容是有哪些部分需要我填入

## 頁面內容設計

### 所有頁面都要有的

1. header

	- 左邊寫著 “Alonza0314" 的按鈕，隨時回到主頁
	- 右邊有兩個 link 按鈕

		- [free-ran-ue](https://alonza0314.github.io/free-ran-ue/)
		- [Leetcode solution](https://alonza0314.github.io/leetcode/)

	- 中英文切換按鈕（保留，但目前先不實現此功能）

2. footer

	- 聯絡方式

		- Email: `alonza.tu@gmail.com`
		- 電話: (+886) 984-078-318

	- 社交帳號

		- [facebook](https://www.facebook.com/profile.php?id=100005221907361&mibextid=LQQJ4d)
		- [Instagram](https://www.instagram.com/df_alonza_03.14)
		- [Github](https://github.com/Alonza0314)
		- [LinkedIn](https://www.linkedin.com/in/feng-tu-b91405345/)
		- [XiaoHongShu](https://www.xiaohongshu.com/user/profile/5f8c7dac0000000001003fa0?xhsshare=CopyLink&appuid=5f8c7dac0000000001003fa0&apptime=1726865960&share_id=25adfbcb70e347bdbb2aa2e11bd4c555)

### 各個頁面內容

1. 主頁

	- 我的頭像("./img/parisTu.jpg")與 “您好，我是『杜峯 Alonza』” 這句話
	- 一段描述自己的話
	- 技能點，以小卡牌的方式呈現，隨機排列，並以同色系但不同顏色作為設計感

		- Golang
		- C++
		- Angular
		- React
		- Vue
		- HTML
		- TypeScript
		- CSS
		- JavaScript
		- MongoDB
		- Git
		- Linux
		- Cursor
		- ChatGPT
		- Core Network
		- free5GC
		- free-ran-ue
		- Zero Trust Network

2. 關於我（CV）：在網頁上呈現 “CV_General.pdf” 的內容
3. 求學經歷：需要注意如何設計才好看，每一張圖片的大小都不一樣

	- 研究所

		- ![iais](./img/school/logo_isia.png)
		- 國立陽明交通大學產學創新研究學院
		- 智能系統研究所
		- 2024 - 至今

	- 大學

		- ![cs](./img/school/cs.png)
		- 國立陽明交通大學產
		- 資訊工程學系
		- 2020 - 2024

	- 高中

		- ![cysh](./img/school/cysh.png)
		- 國立嘉義高級中學
		- 2017 - 2020

	- 國中

		- ![hkjh](./img/school/hkjh.jpg)
		- 嘉義縣立新港國民中學
		- 2013 - 2016

	- 國小

		- ![hkps](./img/school/hkps.jpg)
		- 嘉義縣新港鄉新港國民小學
		- 2007 - 2013

4. 特殊經歷

	- 專業對口

		- 中央研究院資訊科技創新研究中心 - 兼任研究助理
		- Saviah禾薪科技 - 實習生
		- free5GC - Committer
		- 國立陽明交通大學 資訊學院 網路工程研究所 - 密碼工程課程助教
		- 國立陽明交通大學 資訊學院 網路工程研究所 - 開源核心網路設計與實作課程助教
		- 國立陽明交通大學 資訊學院多媒體工程研究所 - 創業實務課程助教

	- 社團活動

		- 國立陽明交通大學 資訊工程學系系學會 - 13級活動長
		- 國立陽明交通大學 資訊工程學系營隊 - 系露營機動 / 迎新宿營機動 / 火棍負責人
		- 國立陽明交通大學 嘉義雲林校友會 - 13級會長
		- 國立陽明交通大學探索體驗營 - 13級總召

	- 其他項目

		- 國立陽明交通大學 女二學餐天晟燒臘 - 工讀生
		- 7-11 - 工讀生

5. 專案作品：直接導向我的 [Github](https://github.com/Alonza0314)
