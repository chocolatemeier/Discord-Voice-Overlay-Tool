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

如果您發現了其他有趣的用法（例如：放置簡易計時器、歌詞顯示等），歡迎分享討論！


English Version
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