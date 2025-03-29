"use client"

import { RichmdSlide } from "@richmd/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [md, setMd] = useState('')

  useEffect(() => {
    fetch('/slide.md')
      .then((res) => res.text())
      .then((data) => setMd(data));
  }, [])

  if (!md) {
    return null;
  }

  return (
    <RichmdSlide text={md} />
  );
}
