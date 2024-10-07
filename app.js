const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const GameBought = require('./models/GamePurchase');
const app = express();

const animeData = {
    'naruto': {
        title: 'Naruto',
        description: 'Phim hoạt hình POPS Anime: Naruto Tập 81 - Sự Trở Về Trong Sương Sớm',
        videoUrl: 'https://www.youtube.com/embed/Yig6Qc4xLgc'
    },
    'one-piece': {
        title: 'One Piece',
        description: 'One Piece Tập 900 - Ngày Tuyệt Nhất, Otama Và Chén Chè Đậu Đỏ Đầu Tiên - Vương Quốc Wano',
        videoUrl: 'https://www.youtube.com/embed/Fu9cbc4qYgs'
    },
    'doremon': {
        title: 'Doremon',
        description: '[S10] Doraemon - Tập 500 - Quốc Hội Di Động, Cái Nón Bắp Rang - Hoạt Hình Tiếng Viêt',
        videoUrl: 'https://www.youtube.com/embed/Rg_Z_4Ds1E4'
    },
    'dragon-ball': {
        title: 'Dragon Ball',
        description: 'Phim Anime 7 Viên Ngọc Rồng Z -Cuộc Chiến Của Các Vị Thần - (Dragon Ball Z) full HD Thuyết minh 2013',
        videoUrl: 'https://www.youtube.com/embed/vwaeaSXl1IE'
    },
    'conan': {
        title: 'Conan',
        description: 'Thám Tử Lừng Danh Conan Movie 23: Cú Đấm Sapphire Xanh | Official Movie | Vietsub',
        videoUrl: 'https://www.youtube.com/embed/qwRyeBHY3YA'
    },
    'demon-slayer': {
        title: 'Demon Slayer',
        description: 'Demon Slayer: Kimetsu no Yaiba - Tập 13 - Cái Chết Của Tôi - Hoạt Hình Tiếng Việt',
        videoUrl: 'https://www.iq.com/play/thanh-guom-diet-quy-tap-13-1ktvmiiqo5s?lang=vi_vn',
    },
    'robo-tray-cay': {
        title: 'Robo trái cây',
        description: '[Thuyết Minh] Robo Trái Cây Phần 1 | Tập 21 - Đồng tâm hiệp lực',
        videoUrl: 'https://www.youtube.com/embed/s6CLa3NUQ80'
    },
    '2-chu-gau': {
        title: '2 chú gấu',
        description: 'Hoạt Hình 2 Chú Gấu BOONIE BEARS - Gã Thợ Săn và Gấu Tham Ăn - Phim Hoạt Hình Tiếng Việt Hay Nhất',
        videoUrl: 'https://www.youtube.com/embed/Bh-2Et3RPpQ'
    },
    'tom-and-jerry': {
        title: 'Tom and Jerry',
        description: 'Tom & Jerry 😺🐭| Just Cat & Mouse Things',
        videoUrl: 'https://www.youtube.com/embed/vRbDJvS71jE'
    }
};

app.get('/game', (req, res) => {
    // Danh sách các trò chơi
    const games = [
        {
            title: 'PUBG PC',
            description: 'Một tựa game sinh tồn hấp dẫn.',
            imageUrl: 'https://cdn.tgdd.vn/Files/2021/12/12/1403925/pubg-pc_1280x720-800-resize.jpg',
            price: 50000  // Giá trò chơi A
        },
        {
            title: 'CSGO 2',
            description: 'Game bắn súng chiến thuật.',
            imageUrl: 'https://hacom.vn/media/lib/06-07-2020/csgo-source-2.jpg',
            price: 70000  // Giá trò chơi B
        },
        {
            title: 'FIFA ONLINE 4',
            description: 'Ước mơ làm messi thì vào đây =))',
            imageUrl: 'https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/fo4-beckham-team-color.jpg',
            price: 60000  // Giá trò chơi C
        },
        {
            title: 'DOTA 2',
            description: 'Một game có map lớn nhất trong các game.',
            imageUrl: 'https://business-portal-bucket.s3.amazonaws.com/media/images/41e172c318357d632f53b92d8cb38661_large_cover.original.jpg',
            price: 80000  // Giá trò chơi D
        },
        {
            title: 'Liên minh huyền thoại',
            description: 'Lão làng của game MOBA.',
            imageUrl: 'https://cdn.tgdd.vn/2020/06/content/hinh-nen-lien-minh-huyen-thoai-dep-mat-cho-pc-va-dien-thoai-background-800x450.jpg',
            price: 90000  // Giá trò chơi E
        },
        {
            title: 'Mobile legends Bang Bang',
            description: 'Game bắn súng cũng khá hay.',
            imageUrl: 'https://didongviet.vn/dchannel/wp-content/uploads/2022/12/mobile-legends-didongviet-1.jpg',
            price: 75000  // Giá trò chơi F
        },
        {
            title: 'Arena of Valor',
            description: 'Game này hack map buff nhiều.',
            imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/khuongduy/2020_02_06/arena-of-valor-02_YREB.jpg?width=500',
            price: 65000  // Giá trò chơi G
        },
        {
            title: 'Cyber Hunter',
            description: 'Lại là bắn súng, bắn nhiều thế =))',
            imageUrl: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/178592/Originals/Cyber-Hunter-1.jpg',
            price: 85000  // Giá trò chơi H
        },
        {
            title: 'Mobile legends',
            description: 'Lại là 1 game MOBA khá hay.',
            imageUrl: 'https://i.rada.vn/data/image/2018/04/14/Mobile-Legends-Bang-Bang-PC-moba.jpg',
            price: 40000  // Giá trò chơi I
        }
    ];
    
    res.render('game', { games });
});

app.get('/anime/:name', (req, res) => {
    const animeName = req.params.name.toLowerCase();
    const anime = animeData[animeName];
    if (anime) {
        res.render('anime', { anime });
    } else {
        res.status(404).send('Anime không tìm thấy');
    }
});

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://vthien562004:vanthien562004@cluster0.cepmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Kết nối đến MongoDB thành công!'))
    .catch(err => console.error('Kết nối đến MongoDB thất bại:', err));

// Định nghĩa mô hình User
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}));

// Cấu hình EJS để render HTML động
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware để phân tích JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Biến để kiểm tra trạng thái đăng nhập
let isLoggedIn = false;

// Middleware kiểm tra đăng nhập
app.use((req, res, next) => {
    if (!isLoggedIn && req.path !== '/login' && req.path !== '/register') {
        return res.redirect('/login');
    }
    next();
});

// Middleware để phân tích JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route để hiển thị trang đăng nhập
app.get('/login', (req, res) => {
    res.render('login');
});
// Route để xử lý việc mua game
app.post('/bought-game', async (req, res) => {
    const { gameName } = req.body;

    if (!gameName) {
        return res.status(400).send('Tên game là bắt buộc.');
    }

    const gameBought = new GameBought({ gameName });
    
    try {
        await gameBought.save();
        res.status(200).send('Mua game thành công!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Đã xảy ra lỗi khi lưu thông tin mua game.');
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

// Route để xử lý đăng nhập
app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(401).send('Người dùng không tồn tại');
    }

    if (req.body.password === user.password) { // So sánh mật khẩu trực tiếp
        isLoggedIn = true; // Đặt trạng thái đăng nhập
        return res.redirect('/'); // Chuyển hướng đến trang chủ
    } else {
        return res.status(401).send('Đăng nhập không thành công');
    }
});

// Route để xử lý đăng ký
app.post('/register', async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).send('Tất cả các trường là bắt buộc.');
    }

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password // Lưu mật khẩu không mã hóa
    });

    try {
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).send('Tên người dùng hoặc email đã tồn tại.');
        }
        console.error(error);
        res.status(500).send('Đã xảy ra lỗi khi đăng ký.');
    }
});

// Trang chủ
app.get('/', (req, res) => {
    res.render('index'); // Chỉ định tên tệp mà không cần đường dẫn
});

app.get('/live', (req, res) => {
    res.render('live'); // Chỉ định tên tệp mà không cần đường dẫn
});

app.use(express.static(path.join(__dirname, 'public')));

// Chạy server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
