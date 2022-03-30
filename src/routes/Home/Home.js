import React, { Fragment } from "react";
import Banners from "../../components/Slidder/bannerSlidder";
import Categories from "../../components/Categories/Categories";
export default function Home() {
  return (
    <Fragment>
      <Banners />
      <Categories />
    </Fragment>
  );
}
