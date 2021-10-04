# Installation

Installation to `Windows Server 2003` / `Windows Server 2008` / `Windows 7` / `Windows 8`, and _the above versions of Windows_ is recommended. _`Windows XP` and below_ **is not full supported**.

## 1 minute tutorial

1.  Download the newest version of PortableTrac:  https://github.com/thinkbase/PortableTrac/archive/master.zip;
    * See the two screenshots for reference: <br/><img src="./install/download.png" alt="download" style="height:100px;" /> |  <img src="./install/PortableTrac-master.zip.png" alt="PortableTrac-master.zip" style="height:100px;" />
    
2.  Uncompress it into a folder: such as `C:\PortableTrac`(Or other your favorite folder name);
    *   This is the screenshot of `C:\PortableTrac`: <br/><img src="./install/uncompress-to-PortableTrac.png" alt="uncompress-to-PortableTrac" style="height:100px;" />

3.  Open a command prompt windows, `cd C:\PortableTrac`;

4.  run `passwd admin 111111`;
    *   _This command create password of user `admin` as `111111`_;
    *   The example: screenshot: <br/><img src="./install/passwd-command.png" alt="passwd-command" style="height:100px;" />

5.  run `tracd 8080 default`
    *   _This command start `tracd` for "default" environment, at port 8080_;
    *   See the screenshots: <br/> <img src="./install/tracd-1.png" alt="tracd-1" style="height:100px;" /> |  <img src="./install/tracd-2.png" alt="tracd-2" style="height:100px;" />

6.  Open browser and navigate to `http://localhost:8080`.
    *   See the screenshots: <br> <img src="./install/tracd-3.png" alt="tracd-3" style="height:100px;" /> |  <img src="./install/tracd-4.png" alt="tracd-4" style="height:100px;" />

::: warning
Subversion Intergration is not supported in Windows XP
:::

## Run trac with apache httpd

If you finish the 1 minute tutorial _(see [above](#_1-minute-tutorial))_ , you can easy start the apache httpd just run the batch file `start-httpd.cmd`;

* The default port of apache httpd is 80, so you can access the Trac with URL `http://localhost/`;

* The screenshot: <br/> <img src="./install/httpd.png" alt="httpd" style="height:100px;" />

* `start-httpd.cmd` create a **virtual disk drive** `B:` for make apache httpd running portable(The idea from [The Mini Servers](http://www.wiki.uniformserver.com/index.php/Mini_Servers:_Introduction));

* process started with apache httpd is apache rotatelogs command line pipe _(rotatelogs.exe)_ , which break up apache logs into daily, configurated in [httpd.conf](https://github.com/thinkbase/PortableTrac/blob/master/httpd/Apache2.2/conf/httpd.conf):

  ```
  ErrorLog "|B:/Apache2.2/bin/rotatelogs.exe B:/Apache2.2/logs/error_%Y_%m_%d.log 86400 480″
  CustomLog "|B:/Apache2.2/bin/rotatelogs B:/Apache2.2/logs/%Y_%m_%d.access.log 86400 480" common
  ```

::: warning
Apache httpd is not supported in Windows XP
:::

## Change the default password of admin

After login(see screenshot): <br/> <img src="./install/login.png" alt="login" style="height:100px;" />,

you can change the admin's password by url `http://localhost/default/prefs/account` (see screenshot:)<br/> <img src="./install/passwd-change.png" alt="passwd-change" style="height:100px;" />

## Read more

*   [The Trac User and Administration Guide](http://www.thinkbase.net/trac/wiki/TracGuide)_([Chinese translation - Trac使用及管理指南](http://www.thinkbase.net/trac/wiki/ZhTracGuide))_;
*   [PortableTrac User Manual / 用户手册](./manual.html).



