import { NextPage } from 'next'
// Imageコンポーネント
import Image from 'next/image'
// importする画像 相対
import BibleImage from '../../public/test.webp'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/test.webp" />
      <p>Imageコンポーネントを使用</p>
      <Image src={BibleImage} alt={''} />
    </div>
  )
}

export default ImageSample
