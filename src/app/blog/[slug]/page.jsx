import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-paysage-nuit-voie-lactee-etoiles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-paysage-nuit-voie-lactee-etoiles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={50} className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Earum non, porro quas fugit recusandae a. 
          Consectetur sunt, soluta natus adipisci quo nemo ratione vero ea amet pariatur rerum sit a!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage