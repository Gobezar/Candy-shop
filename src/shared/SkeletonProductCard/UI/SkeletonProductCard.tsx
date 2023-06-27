import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonProductCard = (props: any) => (
  <ContentLoader
    speed={3}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#ebebeb"
    foregroundColor="#b8b8b8"
    {...props}
  >
    <circle cx="122" cy="160" r="113" />
    <rect x="22" y="294" rx="0" ry="0" width="179" height="41" />
    <rect x="25" y="353" rx="0" ry="0" width="141" height="38" />
    <rect x="25" y="412" rx="0" ry="0" width="98" height="32" />
    <rect x="155" y="413" rx="0" ry="0" width="93" height="30" />
  </ContentLoader>
);

export default SkeletonProductCard;
