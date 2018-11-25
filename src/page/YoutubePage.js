import React, { Component } from 'react'
import SearchComponent from '../components/SearchComponent';
import MainComponent from '../components/MainComponent';
import ListComponent from '../components/ListComponent';


export default class YoutubePage extends Component {

  state = {
    listVideo: DATA,
    selectedVideo: DATA[0]
  }
  onSearch = (data) => {
    const listVideo = DATA.filter(x => x.name.includes(data))
    this.setState({
      listVideo: listVideo
    })
  }
  onSelect = (videoId) => {
    let selectedVideo = DATA.find(x => x.videoId === videoId);
    if (selectedVideo) {
      this.setState({
        selectedVideo: selectedVideo
      })
    }
  }
  render() {
    return (
      <div className="frameBody">
        <div align="center">
          <SearchComponent onSearch={this.onSearch} />
        </div>
        <div className="frameMainList">
          <div className="frameMain">
            <MainComponent item={this.state.selectedVideo} />
          </div>
          <div className="frameList">
            <ListComponent listVideo={this.state.listVideo} onSelect={this.onSelect} />
          </div>
        </div>
      </div>
    )

  }
}
const DATA = [
  { id: 1, name: "Nắm Lấy Tay Anh - Tuấn Hưng [MV Official]", videoId: "p8A3ULXgV3E" },
  { id: 2, name: "Tìm lại bầu trời - Tuấn Hưng [OFFICIAL MV HD]", videoId: "-sdYvmpy2cg" },
  { id: 3, name: "Suy Nghĩ Trong Anh - Nam Cường ft Khắc Việt", videoId: "lUFfylS61jA" },
  { id: 4, name: "hãy để anh yêu em lần nữa(The Men-lyric-kara)", videoId: "ckbI-IKq-b8" },
  { id: 5, name: "Sẽ không còn nữa - Tuấn Hưng [OFFICIAL MV HD]", videoId: "c4sbwX8cSaE" },
  { id: 6, name: "KHẮC VIỆT - Anh Khác Hay Em Khác [Official]", videoId: "ZTbKpBzL7hE" },
  { id: 7, name: "Giật Mình Trong Đêm - Tuấn Hưng [OFFICIAL MV HD]", videoId: "AMRhdubTUpU" },
  { id: 8, name: "Anh Nhớ Em - Tuấn Hưng [OFFICIAL MV HD]", videoId: "SPn106LGnjU" },
  { id: 9, name: "Bản tình ca đầu tiên - Duy Khoa [Lyrics Kara]", videoId: "XY77nTAuiK0" },
  { id: 10, name: "Biết Tìm Đâu - Tuấn Hưng [Official]", videoId: "jmR3301uX90" },
  { id: 11, name: "KHẮC VIỆT - Yêu Lại Từ Đầu [Official]", videoId: "42Uvxt7i5dw" },
  { id: 12, name: "Vì người không xứng đáng - Tuấn Hưng", videoId: "d4Ame6YME-U" },
  { id: 13, name: "Tình Yêu Hoa Gió - Trương Thế Vinh [Official]", videoId: "gM2hp-Xb8MM" },
  { id: 14, name: "Người Ấy | Trịnh Thăng Bình | Official MV", videoId: "1Tj1wSfRkZg" },
  { id: 15, name: "Gửi Ngàn Lời Yêu - Tuấn Hưng [Official Mv HD]", videoId: "7sYk3U4So3c" },
  { id: 16, name: "Định Mệnh Ta Gặp Nhau - Ngô Kiến Huy ft Thu Thủy [Lyrics-Kara]", videoId: "FRBTnCVFl8M" },
  { id: 17, name: "Tình Yêu Đâu Phải Trò Chơi - Tuấn Hưng", videoId: "x5V4jgADlv8" },
  { id: 18, name: "Ngỡ - Quang Hà  [Official]", videoId: "FjDXoUKs63U" },
  { id: 19, name: "[OFFICIAL MV] Thu Cuối - Mr.T ft Yanbi & Hằng Bingboong", videoId: "QETfX44-PB8" },
  { id: 20, name: "Ngoi Sao Le Loi - Phan Dinh Tung", videoId: "fD9Fonuj5mE" },
  { id: 21, name: "Chiều nay không có mưa bay - Trung Quân Idol [Video Lyrics]", videoId: "0yGNjxPI3lE" },
  { id: 22, name: "Thất Tình - Trịnh Đình Quang - Bài hát về tình yêu buồn - Aegisub Effect Kara Video Lyrics", videoId: "_SW0L5-IuTc" },
  { id: 23, name: "Độc Thoại - Tuấn Hưng [OFFICIAL MV HD]", videoId: "qxrPjjZgt1U" },
  { id: 24, name: "[Lyrics] Ngôi Nhà Hoa Hồng - Quang Vinh | Bảo Thy", videoId: "u1kRMaeS6NE" },
  { id: 25, name: "Cầu Vồng Khuyết - Tuấn Hưng [Official]", videoId: "LSStRMF17EY" },
]