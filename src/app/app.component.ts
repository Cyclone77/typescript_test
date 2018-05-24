import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('加载中……');
    // Notification.requestPermission(function (status) {
    //   if (status === 'granted') {
    //     const notic = new Notification('有新的服务请求，请及时处理', {
    //       body: '地区：成都直辖市\n产品类型：工资3.0',
    //       icon: './assets/up1(1).bmp'
    //     });
    //     // 声音文件地址，支持mp3 或者 ogg
    //     const audio = new Audio('./assets/msg.mp3');
    //     audio.volume = 0.2; // 音量，取值范围 0.1 到 1.0
    //     audio.play();
    //   } else {
    //     alert('请设置谷歌浏览器“通知”为“允许”');
    //   }
    // });
    setTimeout(() => {
      // this.ngOnInit();
    }, 3000);
  }

}
