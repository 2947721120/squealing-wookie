Replace Google CDN
==================

Chrome Web Store 安装地址：  
https://chrome.google.com/webstore/detail/replace-google-cdn/kpampjmfiopfpkkepbllemkibefkiice

> 由于众所周知的原因，只需替换一个域名就可以继续使用Google提供的前端公共库了。
> 同样，通过script标记引用这些资源，让网站访问速度瞬间提速吧骚年！

很多网站，尤其是国外网站，为了加快网站的速度，都是用了 Google 的 CDN。
但是在天朝，由于某些原因，导致全球最快的 CDN 变成了全球最慢的。

于是，我写了这个插件，将 Google 的 CDN 替换成国内的。

本来我使用的是 360 提供的。[360网站卫士常用前端公共库CDN服务](http://libs.useso.com)

经网友提醒 360 的不支持 https，于是改成[中科大](http://lug.ustc.edu.cn)的。
因科大域名比较,更换为炎木提供支持https协议
(

此插件包括三部分。

1. `ajax.googleapis.com` - 前端公共库会自动替换为'ajax.c2cmalls.com'
2. `fonts.googleapis.com` - 免费字体库'font.c2cmalls.com'
3. `themes.googleusercontent.com` - fonts 有时会使用到这个里面的资源继续使用科大提供
