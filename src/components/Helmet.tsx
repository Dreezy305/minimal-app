import React from "react";
import { Helmet } from "react-helmet-async";
export default function Helment({
  title,
  description,
  type,
}: {
  title: string;
  description: string;
  type: string;
}) {
  const image =
    "https://res.cloudinary.com/woodcore/image/upload/v1689937192/Pooler_banner_1_vbr6u1.png";
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <link rel="icon" href="%PUBLIC_URL%/logo.svg" />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
    </Helmet>
  );
}
