import type { NextPage } from "next";

type LabelBreadcrumbType = {
  text?: string;
};

const LabelBreadcrumb: NextPage<LabelBreadcrumbType> = ({
  text = "Step X",
}) => {
  return (
    <div className="w-[170px] flex flex-row items-center justify-center py-2.5 px-0 box-border text-center text-9xl text-black font-body-extra-large-heading flex-1">
      <div className="flex-1 relative tracking-[0.5px] leading-[100%] font-medium">
        {text}
      </div>
    </div>
  );
};

export default LabelBreadcrumb;
