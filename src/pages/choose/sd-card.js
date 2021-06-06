import React from 'react'

export default () => (
<div>


<h2>SDカード</h2>
<p>概要</p>

<ul>参考ページ
<li><a href="https://www.sdcard.org/ja/consumers-2/about-sd-memory-card-choices/" target="_blank">SD Association｜ユーザー向け</a></li>
<li><a href="https://www.sdcard.org/ja/developers-2/" target="_blank">SD Association｜開発者向け</a></li>
<li><a href="https://ja.wikipedia.org/wiki/SD%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%89" target="_blank">Wikipedia｜SDメモリーカード</a></li>
</ul>


<h3>フォームファクタ（形状サイズ）</h3>
<p>フォームファクタとはSDカードの形状、主に大きさの違いを指す。</p>
<table border="1px">
  <tr>
    <th>形状</th>
    <th>補足</th>

  </tr>
  <tr>
    <td>SD</td>
    <td>大きい方</td>
  </tr>
  <tr>
    <td>miniSD</td>
    <td>ほぼ廃止</td>
  </tr>
  <tr>
    <td>microSD</td>
    <td>小さい方</td>
  </tr>
</table>


<h3>ストレージ（保存容量）</h3>
<table>
  <tr>
    <th>規格</th>
    <th>意味</th>
    <th>最大容量</th>
    <th>ファイルシステム</th>
    <th>互換性</th>
    <th>補足</th>
  </tr>
  <tr>
    <td>SC</td>
    <td>Standard Capacity</td>
    <td>2GB</td>
    <td>FAT16</td>
    <td>上位互換</td>
    <td>-</td>
  </tr>
  <tr>
    <td>HC</td>
    <td>High Capacity</td>
    <td>32GB</td>
    <td>FAT32</td>
    <td>上位互換</td>
    <td>-</td>
  </tr>
  <tr>
    <td>XC</td>
    <td>eXtended Capacity</td>
    <td>2TB</td>
    <td>exFAT</td>
    <td>上位互換</td>
    <td>非対応機種では使用はメーカー非推奨</td>
  </tr>
  <tr>
    <td>UC</td>
    <td>Ultra Capacity</td>
    <td>128TB</td>
    <td>exFAT</td>
    <td>後方互換</td>
    <td>-</td>
  </tr>
</table>



<table>
	<tbody>
		<tr>
			<th colspan="2"></th>
			<th>SD</th>
			<th>SDHC</th>
			<th>SDXC</th>
			<th>SDUC</th>
		</tr>
		<tr>
			<th colspan="2">ファイルシステム</th>
			<td>FAT12, FAT16</td>
			<td>FAT32</td>
			<td>exFAT</td>
			<td>exFAT</td>
		</tr>
		<tr>
			<th colspan="2">容量</th>
			<td>最大2GB</td>
			<td>2GB~32GB</td>
			<td>32GB~2TB</td>
			<td>2TB~128TB</td>
		</tr>
		<tr>
			<th rowspan="5">スピードクラス</th>
			<th>標準</th>
			<td colspan="4">C2, C4, C6</td>
		</tr>
		<tr>
			<th>HS</th>
			<td colspan="4">C2, C4, C6, C10, V6, V10</td>
		</tr>
		<tr>
			<th>UHS-Ⅰ</th>
			<td>-</td>
			<td colspan="3">C2, C4, C6, C10, U1, U3, V6, V10, V30</td>
		</tr>
		<tr>
			<th>UHS-Ⅱ</th>
			<td>-</td>
			<td colspan="3">C4, C6, C10, U1, U3, V6, V10, V30, V60, V90</td>
		</tr>
		<tr>
			<th>UHS-Ⅲ</th>
			<td>-</td>
			<td colspan="3">C4, C6, C10, U1, U3, V6, V10, V30, V60, V90</td>
		</tr>
	</tbody>
</table>






<h3>バスインターフェース・スピード（データ転送速度）</h3>
<p>バスインターフェイススピードは、データ転送方式によってどれだけの大容量データを転送できるかを指す規格のこと。高画質撮影などでは必然的に大容量データを連続的に記録する必要があるため、それに適したデータ転送速度を有する規格でなくてはならない。後述のスピードクラスとは、バスインターフェイス規格の上でどれほどのデータ書込速度を保証するかという定義なので混同しないように。</p>
<table>
	<tbody>
		<tr>
			<th>バスインターフェイス</th>
			<th>容量</th>
			<th>バススピード(MB/s)</th>
			<th>Ver</th>
		</tr>
		<tr>
			<td>標準</td>
			<td>SD, HC, XC, UC</td>
			<td>12.5</td>
			<td>1.01</td>
		</tr>
		<tr>
			<td>HS</td>
			<td>SD, HC, XC, UC</td>
			<td>25</td>
			<td>1.10</td>
		</tr>
		<tr>
			<td>UHS-Ⅰ</td>
			<td>HC, XC, UC</td>
			<td>50, 104</td>
			<td>3.01</td>
		</tr>
		<tr>
			<td>UHS-Ⅱ</td>
			<td>HC, XC, UC</td>
			<td>156, 312</td>
			<td>4</td>
		</tr>
		<tr>
			<td>UHS-Ⅲ</td>
			<td>HC, XC, UC</td>
			<td>312, 624</td>
			<td>6</td>
		</tr>
		<tr>
			<td>Express</td>
			<td>HC, XC, UC</td>
			<td>985, 1970, 3940</td>
			<td>7, 8</td>
		</tr>
	</tbody>
</table>


<h3>スピードクラス （最低保証速度）</h3>
<p>SDカードの書込速度は製品ごとにバラつきがあり、リアルタイムでデータを記録し続けるビデオ録画の適正の判断基準が必要となる。ビデオ録画における適正とは、録画し続けてもフレーム落ちが発生しない最低限の書込速度を指す。そこでSDアソシエーションはビデオ記録品質向上のため各種スピードクラスを定義してスピードマークロゴを表記し、それを参考に製品を選択することで最適なデバイスとSDカードの組み合わせの判断を可能にした。</p>
<table>
	<tbody>
		<tr>
			<th>最低保証速度</th>
			<th>スピードクラス</th>
			<th>UHSスピードクラス</th>
			<th>ビデオスピードクラス</th>
			<th colspan="4">ビデオフォーマット</th>
		</tr>
		<tr>
			<td>90MB/s</td>
			<td class="color-cell"></td>
			<td class="color-cell"></td>
			<td>V90</td>
			<td rowspan="3">8K</td>
			<td class="color-cell"></td>
			<td class="color-cell"></td>
			<td class="color-cell"></td>
		</tr>
		<tr>
			<td>60MB/s</td>
      <td class="color-cell"></td>
      <td class="color-cell"></td>
			<td>V60</td>
			<td rowspan="4">4K</td>
      <td class="color-cell"></td>
      <td class="color-cell"></td>
		</tr>
		<tr>
			<td>30MB/s</td>
      <td class="color-cell"></td>
			<td>U3</td>
			<td>V30</td>
			<td rowspan="4">HD・フルHD</td>
      <td class="color-cell"></td>
		</tr>
		<tr>
			<td>10MB/s</td>
			<td>C10</td>
			<td>U1</td>
			<td>V10</td>
			<td class="color-cell"></td>
			<td rowspan="5">スタンダード</td>
		</tr>
		<tr>
			<td>6MB/s</td>
			<td>C6</td>
			<td class="color-cell"></td>
			<td>V6</td>
      <td class="color-cell"></td>
		</tr>
		<tr>
			<td>4MB/s</td>
			<td>C4</td>
      <td class="color-cell"></td>
			<td class="color-cell"></td>
      <td class="color-cell"></td>
			<td class="color-cell"></td>
		</tr>
		<tr>
			<td>2MB/s</td>
			<td>C2</td>
      <td class="color-cell"></td>
      <td class="color-cell"></td>
      <td class="color-cell"></td>
			<td class="color-cell"></td>
      <td class="color-cell"></td>
		</tr>
	</tbody>
</table>



<h3>アプリケーション・パフォーマンス・クラス（ランダムアクセス性能）</h3>
<p>データ編集などを含む、アプリケーションを快適に利用するための規格として策定された。</p>
<table border="1px">
  <tr>
    <th>クラス</th>
    <th>SD物理使用</th>
    <th>ランダムリード最低処理速度</th>
    <th>ランダムライト最低処理速度</th>
    <th>シーケンシャル最低処理速度</th>
    <th>特徴</th>
  </tr>
  <tr>
    <td>A1</td>
    <td>Ver5.1</td>
    <td>1500 IOPS</td>
    <td>500 IOPS</td>
    <td>10MB/s</td>
    <td>データ編集や更新などの処理速度が改善</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>Ver6.0</td>
    <td>4000 IOPS</td>
    <td>2000 IOPS</td>
    <td>10MB/s</td>
    <td>コマンドキューイング、キャッシュ機能、メンテナンス機能など。UHS対応のHCまたはXCのSDカードで適用可能。</td>
  </tr>
</table>
<p>IPOS：1秒あたりに実行可能な4KBリード/ライトコマンド数</p>

<h3>アプリケーション・フォーマット（ファイル形式）</h3>
<table border="1px">
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


<h3>ファイルシステム</h3>
<h4>FAT16</h4>
<h4>FAT32</h4>
<h4>exFAT</h4>

</div>
)
