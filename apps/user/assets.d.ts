/// <reference types="@mdx-js/loader" />
declare module "*.mdx" {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
declare module "*.svg" {
  const url: string;

  export default url;
}

module "@carbon/icons-react";
