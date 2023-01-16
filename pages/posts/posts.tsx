import Link from "next/link";
import Image from "next/image";

export default function posts () {
  return (<>
    <h3>
      <Link href='/'>Click Here</Link>
    </h3>
    <Image
      src="/images/image1.png" // Route of the image file
      height={444} // Desired size with correct aspect ratio
      width={844} // Desired size with correct aspect ratio
      alt="Screenshot"  
    />
  </>
    )
}