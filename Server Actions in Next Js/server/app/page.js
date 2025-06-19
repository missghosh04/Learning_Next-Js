import Image from "next/image";

export default function Home() {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
        <label htmlFor="">Contact no</label>
        <input type="text" name="contact" id="contact" />
      </form>
    </div>
  );
}
