# GitHub Rest API (Homework for Dcard frontend intern)

## 啟動方式
1. Clone this project.
```
git clone https://github.com/haha246/dcard_HW
```

2. Change the current directory.
```
cd dcard_HW
```

3. Use yarn or npm to install all modules needed in this project.
```
yarn install
```
OR
```
npm install
```
    
4. After installation...
```
yarn start
```
OR
```
npm start
```

5. It should open your browser in a while, or you can open it by your own.  
<http://localhost:3000> (By default.)

6. Enjoy it!

## 作業架構設計 (Demo)
- 首頁
    - 自動將/導向/home
    - 允許使用者自行輸入想要查詢的對象  ![image](https://user-images.githubusercontent.com/71302574/161393652-0f90eee8-8863-4bb3-94fb-da64eece8c39.png)


    - 當輸入了不存在的對象時，處理例外狀況，並提示使用者對象不存在  ![image](https://user-images.githubusercontent.com/71302574/161393658-98987d3f-da34-480c-a02e-1fb56ca6550a.png)
    - 輸入存在的用戶則進入repository 列表

- repository 列表
    - 一頁顯示10個，滑到底再顯示更多，直到沒了為止  ![image](https://user-images.githubusercontent.com/71302574/161394090-c9c8260b-5289-45cd-b71a-74ddd71b752a.png)
    - 凍結第一列，方便使用者向下滾動時能知道各欄代表意義  ![image](https://user-images.githubusercontent.com/71302574/161394585-4702d93f-7fa4-4fde-9637-bbf5167fc12b.png)
    - 點選想要查看的repo name則進入單一 repository 頁面

- 單一 repository 頁面
    - 點入repo查看單一介紹  ![image](https://user-images.githubusercontent.com/71302574/161394902-93f86e07-4d80-45c0-8392-91c3ad664b18.png)
    - 按下Full Name處的超連結可以新開分頁至該Repo位於GitHub的頁面  ![image](https://user-images.githubusercontent.com/71302574/161394960-4ed65120-63ca-430c-918f-d5be7ec8efc5.png)
    - 如果使用者利用URL尋找特定Repo（請參考下面「其他」項的說明），但該Repo並不存在，則處理例外狀況，並提示使用者  ![image](https://user-images.githubusercontent.com/71302574/161395174-43d6c69c-cb6b-4faa-875f-613453362bca.png)

- 其他
    - 允許使用者透過更改 URL 來搜尋：
        1. 格式符合 /users/{username}/repos，則進入repository 列表
        2. 格式符合 /users/{username}/repos/{repo}，則進入單一 repository 頁面
        3. 上述兩者，都會檢查存不存在並處理例外狀況
        4. 輸入 / 或 /home 則返回首頁
        5. 輸入上述以外的皆視為不合法，基於安全會拒絕使用者存取頁面  ![image](https://user-images.githubusercontent.com/71302574/161393928-c5328a80-8508-422f-b114-e3bd5f7e79e9.png)
