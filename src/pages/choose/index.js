import React from 'react'
import { Link, Router } from 'components/Router'

export default () => (
    <div>
        <h2>家電の選び方</h2>
        <p>家電の選び方を解説。</p>

        <ul>
        <h3>季節物家電</h3>
            <li>エアコン</li>
            <li>扇風機</li>
            <li>ストーブ</li>
            <li>空気清浄機</li>
            <li>除湿機</li>
        <h3>照明家電</h3>
            <li>シーリングライト　　　■■■</li>
            <li>ペンダントライト</li>
            <li>屋外照明</li>
            <li><Link to="/choose/light-bulb">電球</Link></li>
            <li><Link to="/choose/fluorescent-light">蛍光灯</Link></li>
            <li><Link to="/choose/glow-starter">点灯管</Link></li>
        <h3>防犯・防災家電</h3>
            <li>インターホン</li>
            <li>火災報知器</li>
            <li><Link to="/choose/flashlight">懐中電灯</Link></li>
        <h3>白物家電</h3>
            <li>冷蔵庫</li>
            <li>洗濯機</li>
            <li>掃除機</li>
            <li>アイロン</li>
            <li>ミシン</li>
        <h3>調理家電</h3>
            <li>電子レンジ　　　■■■</li>
            <li>トースター　　　■■■</li>
            <li>炊飯器　　　■■■</li>
            <li>ポット・ケトル　　　■■■</li>
            <li>ホットプレート</li>
            <li>ミキサー・ジューサー・ブレンダー</li>
            <li>コーヒーメーカー</li>
            <li>浄水器</li>
            <li>炭酸水メーカー</li>
            <li>キッチンタイマー</li>
        <h3>理美容家電</h3>
            <li>ドライヤー　　　■■■</li>
            <li><Link to="/choose/shaver">シェーバー</Link></li>
            <li>バリカン</li>
            <li>電動歯ブラシ　　　■■■</li>
            <li>体温計</li>
            <li>血圧計</li>
            <li>体重計</li>
            <li>マッサージ機</li>
            <li>スチーマー</li>
        <h3>映像家電</h3>
            <li>テレビ</li>
            <li>BDレコーダー</li>
            <li>アンテナ線</li>
            <li>分配器</li>
            <li>リモコン</li>
        <h3>音響家電</h3>
            <li>ミニコンポ</li>
            <li>スピーカー</li>
            <li>イヤホン・ヘッドホン</li>
            <li>ラジオ</li>
            <li>ICレコーダー</li>
            <li>音楽プレイヤー</li>
        <h3>情報家電</h3>
        <h4>カメラ</h4>
          <li><Link to="/choose/digital-camera">デジカメ</Link></li>
            <li>ビデオ</li>
            <li>チェキ</li>
            <li>三脚</li>
        <h4>電話機</h4>
          <li><Link to="/choose/phone">電話機</Link></li>
            <li>FAX</li>
            <li>子機バッテリー</li>
            <li>電話線</li>
        <h4>印刷家電</h4>
          <li><Link to="/choose/printer">プリンター</Link></li>
            <li>複合機</li>
            <li>印刷用紙</li>
            <li>インク</li>
        <h4>パソコン</h4>
            <li>ノートパソコン</li>
            <li>デスクトップパソコン</li>
            <li>ディスプレイ</li>
            <li>マウス</li>
            <li>キーボード</li>
        <h4>ソフトウェア</h4>
            <li>ウィルスバスター</li>
            <li>オフィス</li>
            <li>ホームページビルダー</li>
            <li>映像編集・画像編集・音声編集</li>
            <li>会計</li>
        <h4>ネットワーク</h4>
            <li><Link to="/choose/wifi-router">Wi-Fiルーター</Link></li>
            <li>中継機</li>
            <li>LANハブ</li>
            <li>LANケーブル</li>
            <li>モバイルルーター</li>
        <h4>外付けストレージ</h4>
            <li>HDD　　　■■■</li>
            <li>SSD　　　■■■</li>
        <h4>データ保存メディア</h4>
          <li><Link to="/choose/sd-card">SDカード</Link></li>
          <li><Link to="/choose/usb-memory">USBメモリ</Link></li>
          <li><Link to="/choose/disc-media">ディスクメディア</Link></li>
            <li>カセットテープ・VHF</li>
        <h4>ケーブル・端子</h4>
            <li><Link to="/choose/lan-cable">LANケーブル</Link></li>
            <li>HDMIケーブル　　　■■■</li>
            <li>USBケーブル　　　■■■</li>
            <li>Lightingケーブル　　　■■■</li>
            <li>サンダーボルトケーブル　　　■■■</li>
            <li>車載</li>
        <h4>携帯アクセサリ</h4>
            <li>モバイルバッテリー</li>
            <li>充電器</li>
            <li>画面フィルム　　　■■■</li>
            <li>スマホケース</li>
            <li>スマホスタンド</li>
        <h4>電子辞書</h4>
        <h4>電卓</h4>
        <h4>シュレッダー</h4>
        <h4>ラベラー</h4>
        <h3>その他</h3>
          <li><Link to="/choose/battery">電池</Link></li>
            <li>時計</li>
            <li>配線器具</li>
        <h3>リフォーム</h3>
            <li>システムキッチン</li>
            <li>IHヒーター</li>
            <li>換気扇</li>
            <li>シャワートイレ</li>
            <li>シャワーヘッド</li>
            <li>太陽光発電</li>
            <li>電気温水器</li>
        </ul>
  </div>
)
