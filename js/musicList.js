/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "搜索结果",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：正在播放
    {
        name: "正在播放",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：播放历史
    {
        name: "播放历史",   // 播放列表名字
        cover: "images/history.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },  
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表开始，您可以自由添加您的自定义列表
    {
        id: 3778678     // 云音乐热歌榜
    },
    {
        id: 3779629     // 云音乐新歌榜
    },
    {
        id: 4395559     // 华语金曲榜
    },
    {
        id: 64016     // 中国TOP排行榜（内地榜）
    },
    {
        id: 112504     // 中国TOP排行榜（港台榜）
    },
    {
        id: 19723756     // 云音乐飙升榜
    },
    {
        id: 2884035     // "网易原创歌曲榜"
    },
    // 自定义列表教程开始！
    // 方式一：手动创建列表并添加歌曲信息
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取
    {
        name: "Tuyển chọn nhạc trẻ hay nhất",   // Tên danh sách phát 
        cover: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/f/e/2/9fe28d775a5825be60eaf40f8b1b8803.jpg", // Ảnh bìa danh sách phát 
        creatorName: "",        // Tên của người tạo danh sách (tạm thời không được sử dụng, có thể để trống) 
        creatorAvatar: "",      // Hình đại diện của người tạo danh sách (tạm thời không được sử dụng, có thể để trống)
        item: [                 // 这里面放歌曲
            {
                id: "001",  // 音乐ID
                name: "Tôi Ngàn Năm Đợi",
				album: "The Best Of Lam Trường", 
			  artist: "Lam Trường",
			  url: "https://dl.dropboxusercontent.com/s/v1y41t8toihe9e3/Lam.Truong-Toi.Ngan.Nam.Doi.mp3",
			  pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
			  lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/dbb16df0fd1d0896ce6d7336fce8d626_1074291237.lrc"
            },
            // 下面演示插入各个平台的音乐。。。
            {
				id: "002",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
				name: "Khi Nào Em Mới Biết",
				artist: "Minh Thuận",
				url: "https://dl.dropboxusercontent.com/s/46bu9zvdkyab0r5/Minh.Thuan-Khi-Nao-Em-Moi-Biet.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/9/490d8de4ff5975b3a7d5f1ddc4729853_1510490359.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/8/6/a/b/86ab94fc46948fdd3a5f3c1b508d9ce2.lrc"
                
            },
            {
                id: "003",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
               name: "Tình Đơn Phương",
				artist: "Lam Trường",
				url: "https://dl.dropboxusercontent.com/s/ac2aa1cf54dohum/Lam.Truong-Tinh.Don.Phuong.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/84e0c113ca4c106bd31ccca004940f70_1074291239.lrc"
            },
            {
                id: "004",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
               name: "Tình Phai",
				  artist: "Lam Trường",
				  url: "https://dl.dropboxusercontent.com/s/6tw7kqpnne1zfgf/Lam.Truong-Tinh.Phai.mp3",
				  pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
				  lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/354547da04d17cfb9954c55cc278c8a8_1074291242.lrc"
            },
            {
                id: "005",
				album: "The Best Of Bằng Kiều",
				source: "local",      // 网易云              
                name: "Trái Tim Bên Lề",
				artist: "Bằng Kiều",
				url: "https://dl.dropboxusercontent.com/s/erqes7ckan8dqa6/Bang.Kieu-Trai.Tim.Ben.Le.mp3?dl=0",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/4/84d49670aa357051bd72b18ce0feedd8_1446460401.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/7/a/4/8/7a4859bd34c85b1a0273eb7db6d4e7ef.lrc"
            },
            {
                id: "006",
				album: "The Best Of Phương Thanh",
				source: "local",      // 网易云              
                name: "Một Thời Đã Xa",
          artist: "Phương Thanh",
          url: "https://dl.dropboxusercontent.com/s/grumn8wmecrwz9n/Phuong.Thanh-Mot.Thoi.Da.Xa.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/1/6/f/716f765d92c139123235d20f77e8c585.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2015/f/3/f33595003a668a03b22d6ade7222784c_1074291244.lrc"
            },
            {
                id: "007",
				album: "The Best Of Đan Trường",
				source: "local",      // 网易云              
               name: "Ảo Mộng Tình Yêu",
          artist: "Đan Trường ft Cẩm Ly",
          url: "https://dl.dropboxusercontent.com/s/cqwp99utqm6dp5q/Dan.Truong-Cam.Ly-Ao.Mong.Tinh.Yeu.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/7/2/f/072fc82083bbf30a171de034a71b3dbb.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/f/2/4/5/f2451724474f1de494e0739ada0422e6.lrc"
            },
            {
                id: "008",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
                name: "Biệt Khúc",
          artist: "Lam Trường",
          url: "https://dl.dropboxusercontent.com/s/w1ezerhvogocp6t/Lam.Truong-Biet.Khuc.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/690891b89905656129e32e0c6a2de4b7_1074291245.lrc"
            },
            {
                id: "009",
				album: "The Best Of Phương Thanh",
				source: "local",      // 网易云              
                name: "Tình Xa Khuất",
				artist: "Phương Thanh",
				url: 	"https://dl.dropboxusercontent.com/s/yh72fai2b5i6nie/Phuong.Thanh-Tinh.Xa.Khuat.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/1/6/f/716f765d92c139123235d20f77e8c585.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/2/4/b/7/24b76dfbd03b9120a167fc8c26408156.lrc"
            },
            {
				id: "010",
				album: "The Best Of Cẩm Ly",
				source: "local",      // 网易云              
				name: "Phố Cũ Vắng Anh",
				artist: "Cẩm Ly",
				url: "https://dl.dropboxusercontent.com/s/ui6zxd50xbrmanp/Cam.Ly-Pho.Cu.Vang.Anh.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/a/5/3/e/a53e95551cdc52a921e3872b2c68cc30.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/2015/3/b/3b68872d47973918c927f4bbdaec63de_1074291249.lrc"
            },
            {
				id: "011",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云     
				name: "Tình Đơn Phương 2",
          artist: "Lam Trường",
          url: "https://dl.dropboxusercontent.com/s/zpcge9virw9obxx/Lam.Truong-Tinh.Don.Phuong.2.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/30fee4f1b4328d3d8dea0fb9a15d7f8f_1074291250.lrc"			
            },
        {
			id: "012",
				album: "The Best Of 1080",
				source: "local",      // 网易云  
          name: "Tình 1088",
          artist: "1088",
          url: "https://dl.dropboxusercontent.com/s/1xdnx8k423v67rr/1088-Tinh.1088.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/8/68d5535b971d558f594f10a5affd0a71_1285661324.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/6/5/5/b/655b24e882ca60d109901748ce25eb3c.lrc"
        },
        {
			id: "013",
				album: "The Best Of Phi Hùng",
				source: "local",      // 网易云  
          name: "Tình Đơn Côi",
          artist: "Phi Hùng",
          url: "https://dl.dropboxusercontent.com/s/qdyx8xe14eobmlc/Phi.Hung-Tinh.Don.Coi.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/1/41e23f2e81f47c4f9a621244ef4045a4_1502336403.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2015/0/9/09ba9aa19a0ca7db27fe8290ee8764a5_1074291252.lrc"
        },
        {
			id: "014",
				album: "The Best Of Đan Trường",
				source: "local",      // 网易云  
          name: "Giấc Mơ Mùa Đông",
          artist: "Đan Trường",
          url: "https://dl.dropboxusercontent.com/s/cah5pcrgzsjw54i/Dan.Truong-Giac.Mo.Mua.Dong.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/7/2/f/072fc82083bbf30a171de034a71b3dbb.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2015/f/1/f1e6e0d176af4b85f9e9013d09fb801d_1074291254.lrc"
        },
        {
		  id: "015",
		  album: "The Best Of 1080",
		  source: "local",      // 网易云  
          name: "Dáng Em",
          artist: "Phi Hùng",
          url: "https://dl.dropboxusercontent.com/s/s1he3dkfdm9jwr8/Phi.Hung-Dang.Em.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/1/41e23f2e81f47c4f9a621244ef4045a4_1502336403.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/8/b/e/3/8be3598599bd7f925c2c0e4b357e5c77.lrc"
        },
        {
			id: "016",
				album: "The Best Of 1080",
				source: "local",      // 网易云  
          name: "Ngàn Năm Khó Phai",
          artist: "Hoàng Châu",
          url: "https://dl.dropboxusercontent.com/s/0ag30e095qreui2/Hoang.Chau-Ngan.Nam.Kho.Phai.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/f/3fb2db6cccf4a23383383394b28b2b31_1514518552.jpg",
          lrc: "https://dl.dropboxusercontent.com/s/bumtqawo4h39gzd/Hoang.Chau-Ngan.Nam.Kho.Phai.lrc?dl=0"
        }
        ]
    },
    // 方式二：直接提供网易云歌单ID
    {
        id: 440103454   // 网易云歌单ID
    }   // 播放列表的最后一项大括号后面不要加逗号
];
