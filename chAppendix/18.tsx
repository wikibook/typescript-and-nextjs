import { NextPage } from 'next'
import Image from 'next/image'
import BibleImage from '../public/images/bible.jpeg'

const ImageSample: NextPage = (props) => {
  return (
    <div>
      <Image
        src={BibleImage}
        alt="Next.js 바이블 표지."
      />
    </div>
  )
}

export default ImageSample