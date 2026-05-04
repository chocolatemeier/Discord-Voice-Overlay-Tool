[繁體中文](#dc-語音狀態顯示工具-v180) | [English](#english-version)
# DC 語音狀態顯示工具 (v1.8.0)

這是一個基於 Electron 開發的極簡桌面工具，專為 Discord Streamkit Overlay 設計，讓語音狀態能以懸浮、置頂且可穿透的方式呈現在螢幕上，不干擾遊戲或工作視線。

## 🌟 功能特色
- **彈性切換**：支援「標準視窗」與「無邊框透明置頂」模式即時轉換。
- **穿透點擊**：在無邊框模式下，視窗具備點擊穿透功能，不影響滑鼠操作後方視窗。
- **網址記憶**：切換模式時自動保留當前 URL，無需重新輸入。

## 🚀 如何使用

### 第一步：取得 Discord Overlay 網址
1. 前往 [Discord Streamkit](https://streamkit.discord.com/overlay)。
2. 點擊 **"Install for OBS"**。
3. 頂部選單選擇 **"VOICE WIDGET"**。
4. **Server** 選擇你的伺服器，**Voice Channel** 選擇對應頻道。
5. 複製右下角預覽區產生的 **URL (網址)**。

### 第二步：啟動工具
1. 執行程式，在輸入框貼上剛剛複製的網址（若留空將顯示空白頁面）。
2. 點擊 **「提交」**，視窗隨即開啟。
3. **初始狀態**：為有邊框視窗，方便你拖動到想要放置的位置。

## ⌨️ 快捷鍵說明
- **Ctrl + Alt + O**：切換顯示模式。
    - **切換至無邊框**：背景透明、視窗置頂且可「穿透點擊」。
    - **切換回有邊框**：恢復邊框，方便移動位置或調整大小。
- **Ctrl + Alt + P**：快速退出程式。

---

## 💡 進階用法與建議
本程式本質上是一個透明網頁容器，你可以嘗試貼上任何網址來實現懸浮監控功能。
> **注意**：無邊框模式下始終保持「穿透點擊」特性，這是專為不干擾操作而設計。

##🛠️ 常見問題 (Q&A)
從透明模式切換回移動模式後，視窗不見了？

請點擊工作列上的程式圖示，視窗就會重新出現在最上層。

使用其他網站時，畫面出現大面積空白？

在透明模式下，程式背景是完全透明的。如果該網站本身沒有設定背景顏色（或是去背網頁），就會顯示為空白。

什麼是「穿透點擊」？

這意味著當你切換到透明模式後，你的滑鼠可以直接點擊並操作該視窗後方的應用程式，不會被本工具阻擋。

在透明模式下不能移動視窗嗎？

為了避免顯示錯誤（Bug），透明模式下禁止移動。請在「有邊框模式」下調整好位置與大小，再切換至透明模式。

可以自訂 Discord 的顯示樣式嗎？

可以，但需要透過專門提供 Discord Overlay 樣式的第三方網站。只要將產生的網址（URL）貼進本程式即可。

語音頻道人數太多，視窗太小怎麼辦？

在「有邊框模式」下，你可以像調整一般視窗一樣，直接拖曳邊緣來拉大或縮小視窗。

如果您發現了其他有趣的用法（例如：放置簡易計時器、歌詞顯示等），歡迎分享討論！


# English Version
Discord Voice Status Tool (v1.8.0)
A minimalist desktop application built with Electron, designed to transform the Discord Streamkit Overlay web page into a versatile, toggleable floating window.

🌟 Features
Mode Switching: Instant transition between "Standard Window Mode" and "Frameless Overlay Mode".

URL Persistence: Automatically remembers the current URL when switching modes, eliminating the need for re-entry.

Click-Through: In frameless mode, the window supports click-through, allowing you to interact with windows behind it without interference.

🚀 How to Use
Step 1: Obtain your Discord Overlay URL
Go to Discord Streamkit.

Click "Install for OBS".

Select "VOICE WIDGET" from the top menu.

Select your Server and the specific Voice Channel.

Copy the URL generated in the preview panel on the bottom right.

Step 2: Launch the App
Run the application and paste your Discord Streamkit URL into the input field. (If left blank, it will load a default blank page. Note: the page will also appear blank if no one is in the channel).

Click "Submit" to open the main window.

Initial State: The app starts with a standard frame, allowing you to drag and position it anywhere on your screen.

⌨️ Shortcuts
Ctrl + Alt + O: Toggle display mode.

To Frameless: Removes borders, sets the window to "Always on Top," and enables "Click-Through" transparency.

Back to Standard: Restores borders for moving or resizing the window.

Ctrl + Alt + P: Quick exit the application.

💡 Alternative Uses
This application acts as a transparent web container. You can paste any URL to create a persistent, floating overlay.

Note: The "Click-Through" feature remains active in frameless mode regardless of the website used. This is by design to ensure the tool never obstructs your primary workflow.

We encourage users to discover and share creative uses (e.g., floating timers, lyric displays, or news tickers)!

##🛠️ FAQ
The window disappeared after switching back from transparent mode?

Simply click the application icon in your taskbar, and the window will resurface to the front.

Why is there a large blank area when using other websites?

In transparent mode, the app's background is set to clear. If the website you've loaded doesn't have a background color, it will appear empty.

What is "Click-Through"?

It means that when in transparent mode, your mouse can click and interact with any application behind the window as if the overlay isn't there.

Can I move the window while in transparent mode?

To prevent UI glitches, moving is disabled in transparent mode. Please position and resize the window in "Windowed Mode" before switching to transparent.

Can I customize the Discord style?

Yes, but this is handled by third-party Discord overlay styling websites. Once you have a custom URL, simply paste it into this app.

The window is too small for many users in the channel?

In "Windowed Mode," you can resize the window by dragging its edges just like any standard application window.
