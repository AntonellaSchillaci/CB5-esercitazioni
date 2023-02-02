import {useState} from 'react'
import styles from './Gallery.module.scss'

const Image = ({ src }) => {
  return <img className={styles.image} src={src} />
}

const Gallery = () => {
  const images = [1, 2, 3, 4, 5].map(num => ({
    src: `https://picsum.photos/700/?image=${num}`
  }))

  const [currentImage, setCurrentImage] = useState(0)

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }
  


  return (
    <div className={styles.Gallery}>
        <Image
          src={images[currentImage].src}
          alt="Gallery"
          width={700}
          height={0}
        />
      <div className={styles.buttons}>
        <button className={styles.button} disabled={currentImage === 0} onClick={handlePrevClick}>Prev</button>
        <button className={styles.button} disabled={currentImage === images.length - 1} onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Gallery
