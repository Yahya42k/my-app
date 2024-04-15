import { Card } from "react-bootstrap";
import Image from 'next/image'

export default function Home() {
  return (
    <>
     <>
      <header>
        <Image  width={300} height={200} src="/logo.png" alt="Your Store Logo" />
      </header>

      <section>
        <h1>Welcome to One Stop Fashion</h1>
        <p>
          At One Stop Fashion, we offer a wide range of quality clothing and accessories for men and women. Explore our collection of stylish clothes, trendy bags, elegant earrings, and more.
        </p>

        <h2>Mission</h2>
        <p>
          Our mission is to provide our customers with fashionable and affordable options that make them feel confident and comfortable. Browse through our website to discover the latest trends and timeless classics.
        </p>
        
      </section>
     <div>
     <Image  width={300} height={200} src="/1.jpg" alt="Your Store Logo" />
     <Image  width={300} height={200} src="/2.jpg" alt="Your Store Logo" />
     <Image  width={300} height={200} src="/3.jpg" alt="Your Store Logo" />
     <Image  width={300} height={200} src="/4.jpg" alt="Your Store Logo" />
     </div>
      
      
    </>
     
    </>
  )
}
